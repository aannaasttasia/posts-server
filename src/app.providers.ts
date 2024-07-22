import { DataSource } from 'typeorm';
import { UserEntity } from './db/user.entity';

// export const appProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         type: 'mysql',
//         host: process.env.HOST,
//         port: +process.env.PORT,
//         username: process.env.USERNAME,
//         password: process.env.PASSWORD,
//         database: process.env.DATABASE,
//         entities: [
//             __dirname + '/../**/*.entity{.ts,.js}',
//         ],
//         synchronize: true,
//       });

//       return dataSource.initialize();
//     },
//   },
// ];

// export const userProviders = [
//     {
//       provide: 'USER_REPOSITORY',
//       useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
//       inject: ['DATA_SOURCE'],
//     },
// ];