import {
    Column,
    Entity,
    PrimaryGeneratedColumn, ManyToOne 
} from 'typeorm';

import {
    ApiProperty,
} from '@nestjs/swagger';

import { ResponsavelEntity } from 'src/responsavel/responsavel.entity';

@Entity('endereco')
export class EnderecoEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number;

    @Column({
        name: 'rua',
        type: 'varchar',
        length: 100,
    })
    @ApiProperty()
    public rua: string;

    @Column({
        name: 'bairro',
        type: 'varchar',
        length: 50,
    })
    @ApiProperty()
    public bairro: string;

    @Column({
        name: 'cidade',
        type: 'varchar',
        length: 50,
    })
    @ApiProperty()
    public cidade: string;

    @Column({
        name: 'cep',
        type: 'varchar',
        length: 8,
    })
    @ApiProperty()
    public cep: string;

    @Column({
        name:'complemento',
        type:'varchar',
        length: 200,
    })
    @ApiProperty()
    public complemento: string;

    @Column({
        name:'uf',
        type:'varchar',
        length:2,
    })
    @ApiProperty()
    public uf: string;
    
    @ManyToOne(() => ResponsavelEntity, (responsavel) => responsavel.enderecos)
    responsavel: ResponsavelEntity
}
