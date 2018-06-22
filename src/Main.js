const logger = require('./core/Logger');
const AbstractService = require('./core/service/Basic');
const Registrator = require('./service/Registrator');
const Planner = require('./service/Planner');
const Liker = require('./service/Liker');
const MongoDB = require('./core/service/MongoDB');

class Main extends AbstractService {
    constructor() {
        super();

        this.addNested(
            new MongoDB(),
            new Registrator(),
            new Planner(Liker)
        );
        this.stopOnExit();
    }

    async start() {
        await this.startNested();
    }

    async stop() {
        await this.stopNested();
        process.exit(0);
    }
}

new Main().start().then(
    () => logger.info('Main service started!'),
    error => {
        logger.error(`Main service failed - ${error}`);
        process.exit(99);
    }
);
