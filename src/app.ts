import express, {
  Application,
  Request,
  Response,
  NextFunction,
} from 'express';
import morgan from 'morgan';
import routes from './routes';


export default class App {
  app: Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', 5000);
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    // this.app.use(express.urlencoded({ extended: false }));

  }

  routes() {
    this.app.use(routes)
  }

  start() {
    this.app.listen(this.app.get('port') , () => {
      console.log('Server running on port ', this.app.get('port'))
    })
  }
}
