import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';

import {
    ApiCreatedResponse,
    ApiTags,
    ApiOperation,
    ApiResponse,
} from '@nestjs/swagger';

import { ResponsavelEntity } from './responsavel.entity';
import { CreateResponsavelDto } from './create.responsavel.dto';
import { UpdateResponsavelDto } from './update.responsavel.dto';

import { ResponsavelService } from './responsavel.service';

@ApiTags('Endereco')
@Controller('Endereco')
export class ResponsavelController {
    responsavelService: any;

    constructor(
        private readonly enderecoService: ResponsavelService,
    ) { }

    @ApiOperation({ operationId: 'createResponsavel' })
    @Post()
    @ApiCreatedResponse({
        status: 201,
        description: 'Created',
        type: ResponsavelEntity,
    })
    async create(@Body() createEnderecoDto: CreateResponsavelDto): Promise<ResponsavelEntity> {
        return await this.enderecoService.create(createEnderecoDto);
    }

    @ApiOperation({ operationId: 'readResponsavel' })
    @Get(':responsavelId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: ResponsavelEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async read(@Param('responsavelId', ParseIntPipe) responsavelId: number): Promise<ResponsavelEntity> {
        const responsavelEntity = await this.responsavelService.read(responsavelId);

        if (!!responsavelEntity) {
            return responsavelEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'updateEndereco' })
    @Put(':enderecoId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: ResponsavelEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async update(@Param('enderecoId', ParseIntPipe) enderecoId: number, @Body() updateCursoDto: UpdateResponsavelDto): Promise<ResponsavelEntity> {
        const enderecoEntity = await this.enderecoService.update(enderecoId, updateCursoDto);

        if (!!ResponsavelEntity) {
            return enderecoEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'deleteEndereco' })
    @Delete(':enderecoId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: ResponsavelEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async delete(@Param('enderecoId', ParseIntPipe) enderecoId: number): Promise<ResponsavelEntity> {
        const enderecoEntity = await this.enderecoService.delete(enderecoId);

        if (!!enderecoEntity) {
            return enderecoEntity;
        }

        throw new NotFoundException();
    }

}
