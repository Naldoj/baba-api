import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResponsavelEntity } from './responsavel.entity';

import { ResponsavelService } from './responsavel.service'; 

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
export class ResponsavelModule { }
