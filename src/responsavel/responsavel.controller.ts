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

@ApiTags('Responsavel')
@Controller('responsavel')
export class ResponsavelController {

    constructor(
        private readonly responsavelService: ResponsavelService,
    ) { }

    @ApiOperation({ operationId: 'createResponsavel' })
    @Post()
    @ApiCreatedResponse({
        status: 201,
        description: 'Created',
        type: ResponsavelEntity,
    })
    async create(@Body() createResponsavelDto: CreateResponsavelDto): Promise<ResponsavelEntity> {
        return await this.responsavelService.create(createResponsavelDto);
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

    @ApiOperation({ operationId: 'updateResponsavel' })
    @Put(':responsavelId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: ResponsavelEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async update(@Param('responsavelId', ParseIntPipe) responsavelId: number, @Body() updateCursoDto: UpdateResponsavelDto): Promise<ResponsavelEntity> {
        const responsavelEntity = await this.responsavelService.update(responsavelId, updateCursoDto);

        if (!!ResponsavelEntity) {
            return responsavelEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'deleteresponsavel' })
    @Delete(':responsavelId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: ResponsavelEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async delete(@Param('responsavelId', ParseIntPipe) responsavelId: number): Promise<ResponsavelEntity> {
        const responsavelEntity = await this.responsavelService.delete(responsavelId);

        if (!!responsavelEntity) {
            return responsavelEntity;
        }

        throw new NotFoundException();
    }

}
