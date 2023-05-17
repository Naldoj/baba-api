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
import { CreateBabaDto } from './create.baba';
import { UpdateBabaDto } from './update.baba.dto';

import { BabaService } from './baba.service';

@ApiTags('Baba')
@Controller('Baba')
export class BabaController {

    constructor(
        private readonly babaService: BabaService,
    ) { }

    @ApiOperation({ operationId: 'createBaba' })
    @Post()
    @ApiCreatedResponse({
        status: 201,
        description: 'Created',
        type: BabaEntity,
    })
    async create(@Body() createBabaDto: CreateBabaDto): Promise<BabaEntity> {
        return await this.babaService.create(createBabaDto);
    }

    @ApiOperation({ operationId: 'readBaba' })
    @Get(':babaId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: BabaEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async read(@Param('babaId', ParseIntPipe) babaId: number): Promise<BabaEntity> {
        const babaEntity = await this.babaService.read(babaId);

        if (!!babaEntity) {
            return babaEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'updateBaba' })
    @Put(':babaId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: BabaEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async update(@Param('babaId', ParseIntPipe) babaId: number, @Body() updateCursoDto: UpdateBabaDto): Promise<BabaEntity> {
        const babaEntity = await this.babaService.update(babaId, updateCursoDto);

        if (!!BabaEntity) {
            return babaEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'deleteBaba' })
    @Delete(':babaId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: BabaEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async delete(@Param('babaId', ParseIntPipe) babaId: number): Promise<BabaEntity> {
        const babaEntity = await this.babaService.delete(babaId);

        if (!!babaEntity) {
            return babaEntity;
        }

        throw new NotFoundException();
    }

}
