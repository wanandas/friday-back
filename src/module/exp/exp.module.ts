import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ExpController from 'src/controllers/exp/exp.controller';
import { Exp } from 'src/entity';
import { ExpService } from 'src/service/exp/exp.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exp])],
  controllers: [ExpController],
  providers: [ExpService],
})
export class ExpModule {}
