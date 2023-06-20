import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateExpDto } from 'src/dto/exp.dto';
import { AuthGuard } from 'src/guard/auth.guard';
import { ExpService } from 'src/service/exp.service';

@Controller('exp')
export default class ExpController {
  constructor(private readonly expService: ExpService) {}

  @Get()
  getAllExp() {
    return this.expService.getAllExp();
  }

  @UseGuards(AuthGuard)
  @Post()
  createExp(@Body() exp: CreateExpDto) {
    return this.expService.creteExp(exp);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  updateExp(@Param('id') id: number, @Body() exp: CreateExpDto) {
    return this.expService.updateExp(id, exp);
  }

  @UseGuards(AuthGuard)
  @Delete()
  deleteExp(@Query('id') id: string) {
    return this.expService.deleteExp(id);
  }
}
