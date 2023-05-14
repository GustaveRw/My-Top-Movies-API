import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
import { databaseProviders } from './shared/database.providers';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MoviesModule
  ],
  providers: [...databaseProviders],
})
export class AppModule {}
