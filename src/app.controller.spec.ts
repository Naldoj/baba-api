import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
//import { AppService } from './app.service'; Verificar com o professor 

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      //providers: [AppService], //Verificar com o professor
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
