import { Module } from '@nestjs/common';
import { ProjectService } from 'src/service/project.service';
import { HttpModule } from '@nestjs/axios';
import { ProjectController } from 'src/controllers';

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
