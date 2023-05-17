import {
    Repository,
} from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { EnderecoEntity } from './endereco.entity';
import { CreateEnderecoDto } from './create.endereco.dto';
import { UpdateEnderecoDto } from './update.endereco.dto';

@Injectable()
export class EnderecoService {

    constructor(
        @InjectRepository(EnderecoEntity)
        private readonly enderecoRepository: Repository<EnderecoEntity>,
    ) { }

    async create(createEnderecoDto: CreateEnderecoDto): Promise<EnderecoEntity> {
        return await this.enderecoRepository.save({
            rua: createEnderecoDto.rua,
            bairro: createEnderecoDto.bairro,
            cidade: createEnderecoDto.cidade,
            cep: createEnderecoDto.cep,
            complemento: createEnderecoDto.complemento,
            uf: createEnderecoDto.uf,
        });
    }

    async read(id: number): Promise<EnderecoEntity> {
        return await this.enderecoRepository.findOneBy({ id: id });
    }

    async update(id: number, UpdateCursoDto: UpdateEnderecoDto): Promise<EnderecoEntity> {
        let enderecoEntity = await this.enderecoRepository.findOneBy({ id: id });

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
