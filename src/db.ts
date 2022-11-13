import mongoose from "mongoose";
import { mongoDb } from "./keys";

mongoose
  .connect(mongoDb.URI)
  .then(() => console.log("Connection a Db established😀🍓"))
  .catch((err: string) => console.log(`Fallo la conexion a la db ${err}`));
