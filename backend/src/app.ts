import express from 'express';
import example from "./routes/example";
import contact from "./routes/contact";
const app = express();

app.use(express.json());

app.use("/api/example", example);
app.use("/api/contact", contact);

app.listen(3001, () => {
    console.log("started");
});

export default app;