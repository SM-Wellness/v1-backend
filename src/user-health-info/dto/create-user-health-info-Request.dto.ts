import { ApiProperty } from '@nestjs/swagger';
import { Smoking } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class CreateUserHealthInfoRequestDto {
  @ApiProperty()
  @IsEnum(Smoking)
  readonly smoking: Smoking;

  @ApiProperty()
  readonly alcohol: number;

  @ApiProperty()
  readonly bigThree: number;

  @ApiProperty()
  readonly bmi: number;

  @ApiProperty()
  readonly sugarLevel: number;

  @ApiProperty()
  readonly bloodPressure: number;

  @ApiProperty()
  readonly todayCalorie: number;

  @ApiProperty()
  readonly todayWater: number;

  @ApiProperty()
  readonly todaySteps: number;

  @ApiProperty()
  readonly liverLevels: number;
}
