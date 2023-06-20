import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExpDto } from 'src/dto/exp.dto';
import { Exp } from 'src/entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExpService {
  constructor(
    @InjectRepository(Exp) private readonly expRepository: Repository<Exp>,
  ) {}

  async getAllExp() {
    return await this.expRepository.find();
  }

  async creteExp(exp: CreateExpDto) {
    const newExp = this.expRepository.create(exp);
    const test = await this.expRepository.save(newExp);
    return { message: 'Create new exp successfully.', data: test };
  }

  async updateExp(id: number, exp?: CreateExpDto) {
    return await this.expRepository.update(id, exp);
  }

  async deleteExp(id: string) {
    const idArr = id.split(',');
    return await this.expRepository.delete(idArr);
  }
}
