import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import userRoute from "./routes/users.route.js";
// import contentRoute from "./routes/contents.route.js";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(express.static("public"));

app.use(cookieParser());

// app.use("/api/v1/users",userRoute)
// app.use("/api/v1/content",contentRoute)

export { app };
