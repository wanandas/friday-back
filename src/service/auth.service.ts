import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { decrypted } from 'src/utils/decrypted';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, encryptedPassword: string): Promise<any> {
    try {
      const user = await this.usersService.findOne(username);

      if (!user) {
        throw new UnauthorizedException();
      }

      const decryptedPassword = decrypted(encryptedPassword);
      const isMatch = await bcrypt.compare(decryptedPassword, user.password);

      if (!isMatch) {
        throw new UnauthorizedException();
      }

      const payload = { username: user.username, sub: user.id };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
