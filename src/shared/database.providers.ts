import { createConnection } from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof import('mongoose')> =>
      await createConnection('mongodb://localhost:27017/mytop100movies'),
  },
];
