import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;

  @IsString()
  @IsUrl()
  posterUrl: string;

  @IsString()
  @MaxLength(500)
  overview: string;

  @IsString({ each: true })
  @MaxLength(50, { each: true })
  genres: string[];
}
