import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/movies (GET)', () => {
    return request(app.getHttpServer())
      .get('/movies')
      .expect(200)
      .expect([]);
  });

  it('/movies (POST)', () => {
    return request(app.getHttpServer())
      .post('/movies')
      .send({ title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 })
      .expect(201);
  });

  it('/movies (GET) after POST', () => {
    return request(app.getHttpServer())
      .get('/movies')
      .expect(200)
      .expect([{ id: 1, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }]);
  });

  it('/movies/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/movies/1')
      .expect(200)
      .expect({ id: 1, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 });
  });

  it('/movies/:id (PUT)', () => {
    return request(app.getHttpServer())
      .put('/movies/1')
      .send({ title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972, rating: 9.2 })
      .expect(200);
  });

  it('/movies/:id (GET) after PUT', () => {
    return request(app.getHttpServer())
      .get('/movies/1')
      .expect(200)
      .expect({ id: 1, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972, rating: 9.2 });
  });

  it('/movies/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/movies/1')
      .expect(200);
  });

  it('/movies/:id (GET) after DELETE', () => {
    return request(app.getHttpServer())
      .get('/movies/1')
      .expect(404);
  });
});

