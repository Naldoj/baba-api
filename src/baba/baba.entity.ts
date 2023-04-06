import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

import {
    ApiProperty,
} from '@nestjs/swagger';

@Entity('baba')
export class BabaEntity {

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
}
