import { Controller, Get } from '@nestjs/common';
import { ProjectService } from 'src/service/project.service';

@Controller('project')
export default class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('github')
  getAllProjectGithub() {
    return this.projectService.findAllGithub();
  }
}
