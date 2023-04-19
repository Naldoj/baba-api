import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Status_atendimentoEntity } from './status_atendimento.entity';

import { Status_atendimentoService } from './status_atendimento.service'; //// falta criar para poder exportar 

import { Status_atendimentoController } from './status_atendimento.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        Status_atendimentoEntity,
    ])],
    providers: [
        Status_atendimentoService,
    ],
    controllers: [
        Status_atendimentoController,
    ],
})
export class Status_atendimentoModule { }
