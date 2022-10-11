import express from 'express';
//dir name using path and //file url
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import indexRoutes from './routes/index.js'
//dynamic way to set absolute paths
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(join(__dirname, 'public')))
app.use(indexRoutes)
app.listen(3000)
