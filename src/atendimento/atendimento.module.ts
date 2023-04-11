import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AtendimentoEntity } from './atendimento.entity';

import { AtendimentoService } from './atendimento.service'; //// falta criar para poder exportar 

import { AtendimentoController } from './atendimento.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        AtendimentoEntity,
    ])],
    providers: [
        AtendimentoService,
    ],
    controllers: [
        AtendimentoController,
    ],
})
export class EndereModule { }
