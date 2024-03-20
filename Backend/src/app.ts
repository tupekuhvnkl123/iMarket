import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/index";
import { connectDB } from "./services/mongoose/connectDB";
import errorHandler from "./middlewares/errorHandler";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", routes);

app.use(errorHandler);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
