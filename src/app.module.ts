import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { ConfigModule } from "@nestjs/config";
import { envSchema } from "./env";
import { AuthModule } from "./auth/auth.module";
import { CreateAccountController } from "./controllers/user/create-account.controller";
import { AuthenticateController } from "./controllers/user/authenticate.controller";
import { GetMeController } from "./controllers/user/get-me.controller";
import { DeleteUserController } from "./controllers/user/delete-user-by-id.controller";
import { EditAccountController } from "./controllers/user/edit-user-by-id.controller";
import { GetAllUsersController } from "./controllers/user/get-all-users.controller";
import { EditMeController } from "./controllers/user/edit-me.controller";
import { DeleteMeController } from "./controllers/user/delete-me.controller";
import { CloudflareR2Service } from "./services/r2-upload.service";
import { GetUserByIdController } from "./controllers/user/get-user-by-id.controller";
import { GetUserByUsernameController } from "./controllers/user/get-user-by-username.controller";
import { GetAllGamesController } from "./controllers/game/get-all-games.controller";
import { GetGameByIdController } from "./controllers/game/get-game-by-id.controller";
import { DeleteGameByIdController } from "./controllers/game/delete-game-by-id.controller";
import { CreateGameController } from "./controllers/game/create-game.controller";
import { GetAllGamesWithSubstringController } from "./controllers/game/get-games-by-substring.controller";
import { EditGameController } from "./controllers/game/edit-game-by-id.controller";
import { GetGameByNameController } from "./controllers/game/get-game-by-name.controller";
import { DeleteRatingByIdController } from "./controllers/rating/delete-rating-by-id.controller";
import { GetRatingsByGameIdController } from "./controllers/rating/get-ratings-by-game-id.controller";
import { GetRatingsByUserIdController } from "./controllers/rating/get-ratings-by-user-id.controller";
import { GetAllRatingsController } from "./controllers/rating/get-all-ratings.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    // usuário
    AuthenticateController,
    CreateAccountController,
    DeleteMeController,
    DeleteUserController,
    EditAccountController,
    EditMeController,
    GetAllUsersController,
    GetMeController,
    GetUserByIdController,
    GetUserByUsernameController,

    // game
    CreateGameController,
    DeleteGameByIdController,
    EditGameController,
    GetAllGamesController,
    GetAllGamesWithSubstringController,
    GetGameByIdController,
    GetGameByNameController,

    // user
    DeleteRatingByIdController,
    GetAllRatingsController,
    GetRatingsByGameIdController,
    GetRatingsByUserIdController,
  ],
  providers: [PrismaService, CloudflareR2Service],
})
export class AppModule {}
