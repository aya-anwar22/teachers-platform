"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_serverless_express_1 = require("aws-serverless-express");
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
let server;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return (0, aws_serverless_express_1.createServer)(expressApp);
}
const handler = async (event, context) => {
    if (!server) {
        server = await bootstrap();
    }
    return (0, aws_serverless_express_1.proxy)(server, event, context, 'PROMISE').promise;
};
exports.handler = handler;
//# sourceMappingURL=index.js.map