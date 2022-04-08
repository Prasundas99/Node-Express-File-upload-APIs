import express from "express";
import morgan from "morgan";
import cors from "cors";

import HomeRouter from "./routes/home.router.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import fileuploadRouter from "./routes/fileUploadRouter.js";

const app = express();
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/", HomeRouter);
app.use("/api/file-upload", fileuploadRouter)
// custom middleware
app.use(notFound);
app.use(errorHandler);

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
