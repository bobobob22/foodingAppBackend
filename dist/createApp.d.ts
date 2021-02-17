import { NestApplicationOptions } from '@nestjs/common/interfaces/nest-application-options.interface';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
export declare const createApp: (nestOptions?: NestApplicationOptions) => Promise<NestExpressApplication>;
