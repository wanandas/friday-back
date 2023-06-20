import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpController } from 'src/controllers';
import { Exp } from 'src/entity';
import { ExpService } from 'src/service/exp.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exp])],
  controllers: [ExpController],
  providers: [ExpService],
})
export class ExpModule {}
