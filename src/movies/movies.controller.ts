import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieDto } from './dto/update-movie.dto';
import { Movie } from './interfaces/movie.interface';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Movie> {
    return this.moviesService.findOne(id);
  }

  @Post()
  async create(@Body() createMovieDto: MovieDto): Promise<Movie> {
    return this.moviesService.create(createMovieDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateMovieDto: MovieDto): Promise<Movie> {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Movie> {
    return this.moviesService.delete(id);
  }
}
