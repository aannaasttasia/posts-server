import { DataSource } from 'typeorm';

export const appProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.HOST,
        port: +process.env.PORT,
        username: process.env.USERNAME,
        password: process.env.ROOT,
        database: process.env.DATABASE,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
