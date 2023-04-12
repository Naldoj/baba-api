import {
    Repository,
} from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AtendimentoEntity } from './Atendimento.entity';
import { CreateAtendimentoDto } from './create.atendimento';
import { UpdateAtendimentoDto } from './update.Atendimento.dto';

@Injectable()
export class AtendimentoService {

    constructor(
        @InjectRepository(AtendimentoEntity)
        private readonly AtendimentoRepository: Repository<AtendimentoEntity>,
    ) { }

    async create(createAtendimentoDto: CreateAtendimentoDto): Promise<AtendimentoEntity> {
        return await this.AtendimentoRepository.save({

            data_hora_atendimento:createAtendimentoDto.data_hora_atendimento,
            data_hora_inicio_atend:createAtendimentoDto.data_hora_inicio_atend,
            data_hora_fim_atend: createAtendimentoDto.data_hora_fim_atend,
            Id_Status: createAtendimentoDto.Id_Status,
            Id_baba: createAtendimentoDto.Id_baba,
            Id_endereco: createAtendimentoDto.Id_endereco,
        });
    }

    async read(id: number): Promise<AtendimentoEntity> {
        return await this.AtendimentoRepository.findOneBy({ id: id });
    }

    async update(id: number, UpdateAtendimentoDto: UpdateAtendimentoDto): Promise<AtendimentoEntity> { //falta ajustar 
        let AtendimentoEntity = await this.AtendimentoRepository.findOneBy({ id: id }); //Falta ajustar

        if (!!AtendimentoEntity) {
            return this.AtendimentoRepository.save({
                
            data_hora_atendimento:UpdateAtendimentoDto.data_hora_atendimento,
            data_hora_inicio_atend:UpdateAtendimentoDto.data_hora_inicio_atend,
            data_hora_fim_atend: UpdateAtendimentoDto.data_hora_fim_atend,
            Id_Status: UpdateAtendimentoDto.Id_Status,
            Id_baba: UpdateAtendimentoDto.Id_baba,
            Id_endereco: UpdateAtendimentoDto.Id_endereco,
                
            });
        }

        return null;
    }

    async delete(id: number): Promise<AtendimentoEntity> {
        let atendimentoEntity = await this.AtendimentoRepository.findOneBy({ id: id });

        if (!!atendimentoEntity) {
            atendimentoEntity = await this.AtendimentoRepository.remove(atendimentoEntity);

            atendimentoEntity.id = id;
        }

        return atendimentoEntity;
    }

}
