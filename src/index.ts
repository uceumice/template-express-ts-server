
import * as express from 'express';
import { router as HelloWorldRoute } from './hello_world/router';

const app = express();
app.use("/hello/world", HelloWorldRoute);
app.listen(3000, () => { console.log("[Server Meldung]: Server bei dem Port 3000 erstellt!") })