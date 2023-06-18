import { Module } from '@nestjs/common';
import ProjectController from 'src/controllers/project/project.controller';
import { ProjectService } from 'src/service/project/project.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
