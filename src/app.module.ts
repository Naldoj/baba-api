import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
//import { AppService } from './app.service'; // verificar com o professor 

@Module({
  imports: [],
  controllers: [AppController],
  //providers: [AppService], // Verificar com o professor
})
export class AppModule {}
