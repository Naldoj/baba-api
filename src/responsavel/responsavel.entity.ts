import {
    Column,
    Entity,
    PrimaryGeneratedColumn, ManyToOne
} from 'typeorm';

import {
    ApiProperty,
} from '@nestjs/swagger';
import { EnderecoEntity } from 'src/endereco/endereco.entity';

@Entity('responsavel')
export class ResponsavelEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number;

    @Column({
        name: 'cpf',
        type: 'varchar',
        length: 11,
    })
    @ApiProperty()
    public cpf: string;

    @Column({
        name: 'nome',
        type: 'varchar',
        length: 100,
    })
    @ApiProperty()
    public nome: string;

    @ManyToOne(() => EnderecoEntity, (endereco) => endereco.responsavel )
    enderecos: EnderecoEntity[]
}

