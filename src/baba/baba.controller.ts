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

import { BabaEntity } from './baba.entity';
import { CreateBabaDto } from './create.baba.dto';
import { UpdateBabaDto } from './update.baba.dto';

import { BabaService } from './baba.service';

@ApiTags('Endereco')
@Controller('Endereco')
export class BabaController {
    responsavelService: any;

    constructor(
        private readonly enderecoService: BabaService,
    ) { }

    @ApiOperation({ operationId: 'createBaba' })
    @Post()
    @ApiCreatedResponse({
        status: 201,
        description: 'Created',
        type: BabaEntity,
    })
    async create(@Body() createEnderecoDto: CreateBabaDto): Promise<BabaEntity> {
        return await this.enderecoService.create(createEnderecoDto);
    }

    @ApiOperation({ operationId: 'readBaba' })
    @Get(':responsavelId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: BabaEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async read(@Param('responsavelId', ParseIntPipe) responsavelId: number): Promise<BabaEntity> {
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
        type: BabaEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async update(@Param('enderecoId', ParseIntPipe) enderecoId: number, @Body() updateCursoDto: UpdateBabaDto): Promise<BabaEntity> {
        const enderecoEntity = await this.enderecoService.update(enderecoId, updateCursoDto);

        if (!!BabaEntity) {
            return enderecoEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'deleteEndereco' })
    @Delete(':enderecoId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: BabaEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async delete(@Param('enderecoId', ParseIntPipe) enderecoId: number): Promise<BabaEntity> {
        const enderecoEntity = await this.enderecoService.delete(enderecoId);

        if (!!enderecoEntity) {
            return enderecoEntity;
        }

        throw new NotFoundException();
    }

}
