import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsInt, IsOptional } from 'class-validator';

export class CreateEnderecoDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    rua: string  //// Realizar adaptações

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    bairro: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    cidade: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(8)
    cep: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    complemento: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    uf: string 
    cargaHoraria: any;

  //@ApiProperty()
  //@IsNotEmpty()
  //@IsInt()
  //bairro: string  // Realizar adaptações 

}
