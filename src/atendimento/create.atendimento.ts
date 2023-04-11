import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsInt, IsOptional } from 'class-validator';

export class CreateAtendimentoDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    data_hora_atendimento: Date  //// Realizar adaptações

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    data_hora_inicio_atend: Date

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    data_hora_fim_atend: Date

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(8)
    Id_Status: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    Id_baba: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    uf: string 
    Id_endereco: number

}
