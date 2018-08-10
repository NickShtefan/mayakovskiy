// Описание переменных окружения смотри в Readme.
const env = process.env;

module.exports = {
    LOGIN: env.LOGIN,
    WIF: env.WIF,
    MIN_GOLOS_POWER: env.MIN_GOLOS_POWER || 0,
    MAX_GOLOS_POWER: env.MAX_GOLOS_POWER || 0,
    VOTE_BY_DAY_WITH_MAX_WEIGHT : env.VOTE_BY_DAY_WITH_MAX_WEIGHT || 40,
    BENEFICIARY_NAME : env.BENEFICIARY_NAME || null,
    BENEFICIARY_PROCENT: env.BENEFICIARY_PROCENT || 0
};
