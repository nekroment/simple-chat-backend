import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getConnectionOptions } from "typeorm";
import { GraphQLModule } from "@nestjs/graphql";

import { AuthModule } from "./modules";
import { ApolloDriver } from "@nestjs/apollo";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      installSubscriptionHandlers: true,
      
    }),
    AuthModule,
  ],
})
export class AppModule {}
