import express from "express";
import routerPL from "./routes/programmingLanguages.js"
//dir name using path and //file url
// import { dirname, join } from 'path';
// import { fileURLToPath } from 'url';

// import indexRoutes from './routes/index.js'
// //dynamic way to set absolute paths
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3080;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
});

app.use(express.json());

app.use(
    express.urlencoded({
      extended: true,
    })
);

app.get("/api", (req, res) => {
    res.json({ message: "Greetings from express" });
});
app.use("/programming-languages", routerPL);
