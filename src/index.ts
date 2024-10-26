import { app } from "./app.js";
import connectDB from "./db/index.ts";

const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port || 8000, () => {
      console.log(`⚙️ Server is running at port : http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
