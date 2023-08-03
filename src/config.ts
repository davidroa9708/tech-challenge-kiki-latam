import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        dbPort: parseInt(process.env.DB_PORT) || 5432,
        dbUser: process.env.DB_USER,
        dbPassword: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME,
        dbHost: process.env.DB_HOST,
        port: process.env.PORT,
        exchangeRateCopUsa: process.env.EXCHANGE_RATE_COP_USA,
    };
});
