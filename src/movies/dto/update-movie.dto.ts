import { IsString, IsNumber } from 'class-validator';

export class MovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly rank: number;
}
