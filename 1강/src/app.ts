import * as express from "express";
import catRouter from "./cat/cat.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  //* router 등록
  private setRoute() {
    this.app.use(catRouter);
  }

  private setMiddleware() {
    // * logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      next();
    });

    //* json middleware
    this.app.use(express.json());

    this.setRoute();

    //* 404 middleware
    this.app.use((req, res, next) => {
      res.send({ error: "404 Not Found" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server start");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
