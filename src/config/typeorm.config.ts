import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/auth/entities/user.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mubeen',
    database: 'testapp',
    entities: [User],
    synchronize: true,
}