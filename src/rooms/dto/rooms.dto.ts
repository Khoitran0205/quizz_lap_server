import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { PageOptionsDto } from 'src/shared/pagination/pagination.dto';

export class UserRoomFilter extends OmitType(PageOptionsDto, [
  'order',
] as const) {}

export class CreateRoomDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  quizId: string | null;
}

export class GetUserAnswerDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  roomCode: string | null;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  questionId: string | null;
}

export class UserJoinRoomDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString({ message: 'Room code must be in type string' })
  roomCode: string | null;
}

export class UserAnswerQuestionDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  roomCode: string | null;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  questionId: string | null;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  optionId: string | null;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  timer: number | null;
}
