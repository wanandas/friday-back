import { Controller, Get } from '@nestjs/common';
import { ProjectService } from 'src/service/project/project.service';

@Controller('Project')
export default class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  getAllProject() {
    return this.projectService.findAll();
  }
}
