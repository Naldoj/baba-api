import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResponsavelEntity } from './responsavel.entity';

import { ResponsavelService } from './responsavel.service'; //// falta criar para poder exportar 

import { ResponsavelController } from './responsavel.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        ResponsavelEntity,
    ])],
    providers: [
        ResponsavelService,
    ],
    controllers: [
        ResponsavelController,
    ],
})
export class EndereModule { }
