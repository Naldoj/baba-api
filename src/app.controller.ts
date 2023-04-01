import { Controller, Get } from '@nestjs/common';
//import { AppService } from './app.service'; //Verificar com o professor

@Controller()
export class AppController {
  constructor(private readonly appController: AppController) {}

  @Get()
  getHello(): string {
    return this.appController.getHello();
  }
}
