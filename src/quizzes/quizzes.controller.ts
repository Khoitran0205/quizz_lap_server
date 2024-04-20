import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';
import { CreateQuizDto, QuizFilter } from './dto/quizzes.dto';
import { QuizzesService } from 'src/services/quizzes.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('quizzes')
@Controller('quizzes')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @ApiOperation({ summary: 'Create new quiz' })
  @Post()
  async create(@Req() req, @Body() dto: CreateQuizDto) {
    const { id: createdBy } = req?.user;
    const data = await this.quizzesService.create(dto, createdBy);
    return {
      message: 'create successfully',
      data,
    };
  }

  @ApiOperation({ summary: 'Get all quizzes' })
  @Get()
  async findAll(@Query() dto: QuizFilter) {
    const data = await this.quizzesService.findAll(dto);
    return {
      message: 'get successfully',
      data,
    };
  }

  @ApiOperation({ summary: 'Get one detailed quiz' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.quizzesService.findOne(id);
    return {
      message: 'get successfully',
      data,
    };
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
  //   return this.quizzesService.update(+id, updateQuizDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {}
}