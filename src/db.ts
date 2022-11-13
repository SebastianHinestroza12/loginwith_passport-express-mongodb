import mongoose from "mongoose";
import { mongoDb } from "./keys";

mongoose
  .connect(mongoDb.URI, {})
  .then(() => console.log("Connection to Db established😀🍓"))
  .catch((err: string) => console.log(`Fallo la conexion to la db ${err}`));
