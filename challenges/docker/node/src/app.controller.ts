import { Get, Controller, Render } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}
  @Get()
  @Render('index.hbs')
  async root() {
    await this.appService.create();

    const users = await this.appService.findAll();
    
    return { users};
  }
}