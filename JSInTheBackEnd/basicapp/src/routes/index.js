import { Router } from 'express';
const router = Router();

//a basic example of render information dynamically from the back-to the front end
router.get('/', (req, res) => res.render('index', {title:'First node app'}))
router.get('/about', (req, res) => res.render('about', {title:'About me'}))
router.get('/contact', (req, res) => res.render('contact',{title:'Contact me!', phone:"(+57)320202020"}))

export default router