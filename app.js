import express from "express";
import bookRoutes from './routes/BookRoute.js';
import studentRoutes from "./routes/studentRoute.js";
const app = express();

app.use('/books',bookRoutes);
app.use('/students', studentRoutes);

try {
    const port = 3000;
    app.listen(port, () => {
    console.log(`listening on port ${port}...`);
    });
} catch(e) {
    console.log(e);
}
