import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

type IData = {
  id: string;
  created_at: string;
  description: string;
  full_name: string;
  html_url: string;
  language: string;
  languages_url: string;
};

@Injectable()
export class ProjectService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<AxiosResponse<IData[]>> {
    const repos = this.httpService.axiosRef.get(
      `https://api.github.com/users/wanandas/repos?per_page=100&sort=created`,
    );

    const { data } = await repos;

    const result = data?.map((v) => {
      return {
        id: v.id,
        created_at: v.created_at,
        description: v.description,
        full_name: v.full_name,
        html_url: v.html_url,
        language: v.language,
      };
    });

    return result;
  }
}
