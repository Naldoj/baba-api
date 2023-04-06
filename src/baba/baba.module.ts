import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BabaEntity } from './baba.entity';

import { BabaService } from './baba.service'; //// falta criar para poder exportar 

import { BabaController } from './baba.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        BabaEntity,
    ])],
    providers: [
        BabaService,
    ],
    controllers: [
        BabaController,
    ],
})
export class EndereModule { }
