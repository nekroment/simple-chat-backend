import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "src/entities";

import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers: [AuthService, AuthResolver],
})

export class AuthModule {}
