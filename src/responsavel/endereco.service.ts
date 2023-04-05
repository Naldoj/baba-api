import {
    Repository,
} from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ResponsavelEntity } from './responsavel.entity';
import { CreateResponsavelDto } from './create.responsavel.dto';
import { UpdateResponsavelDto } from './update.responsavel.dto';

@Injectable()
export class ResponsavelService {

    constructor(
        @InjectRepository(ResponsavelEntity)
        private readonly responsavelRepository: Repository<ResponsavelEntity>,
    ) { }

    async create(createResponsavelDto: CreateResponsavelDto): Promise<ResponsavelEntity> {
        return await this.responsavelRepository.save({
            
            cpf: createResponsavelDto.cpf,
            nome: createResponsavelDto.nome,
        });
    }

    async read(id: number): Promise<ResponsavelEntity> {
        return await this.responsavelRepository.findOneBy({ id: id });
    }

    async update(id: number, UpdateResponsavelDto: UpdateResponsavelDto): Promise<ResponsavelEntity> { //falta ajustar 
        let enderecoEntity = await this.enderecoRepository.findOneBy({ id: id }); //Falta ajustar

        if (!!enderecoEntity) {
            return this.enderecoRepository.save({
                id: id,
                rua: UpdateEnderecoDto.rua,
                bairro: UpdateEnderecoDto.bairro,
                cidade: UpdateEnderecoDto.cidade,
                cep: UpdateEnderecoDto.cpf,
                complemento: UpdateEnderecoDto.complemento,
                uf: UpdateEnderecoDto.uf,
            });
        }

        return null;
    }

    async delete(id: number): Promise<EnderecoEntity> {
        let enderecoEntity = await this.enderecoRepository.findOneBy({ id: id });

        if (!!enderecoEntity) {
            enderecoEntity = await this.enderecoRepository.remove(enderecoEntity);

            enderecoEntity.id = id;
        }

        return enderecoEntity;
    }

}
