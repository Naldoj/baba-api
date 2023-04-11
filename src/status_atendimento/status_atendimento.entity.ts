import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

import {
    ApiProperty,
} from '@nestjs/swagger';

@Entity('status_atendimento')
export class Status_atendimentoEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number;

    @Column({
        name: 'nome',
        type: 'varchar',
        length: 100,
    })
    @ApiProperty()
    public nome: string;

    @Column({
        name: 'descricao',
        type: 'varchar',
        length: 200,
    })
    @ApiProperty()
    public descricao: string;

}
