import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateExpDto } from 'src/dto/exp.dto';
import { ExpService } from 'src/service/exp/exp.service';

@Controller('Exp')
export default class ExpController {
  constructor(private readonly expService: ExpService) {}

  @Get()
  getAllExp() {
    return this.expService.getAllExp();
  }

  @Post()
  createExp(@Body() exp: CreateExpDto) {
    return this.expService.creteExp(exp);
  }
  @Patch(':id')
  updateExp(@Param('id') id: number, @Body() exp: CreateExpDto) {
    return this.expService.updateExp(id, exp);
  }

  @Delete()
  deleteExp(@Query('id') id: string) {
    return this.expService.deleteExp(id);
  }
}
