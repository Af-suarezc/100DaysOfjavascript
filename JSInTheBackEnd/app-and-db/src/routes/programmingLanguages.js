import express from 'express';
import getMultiple from '../services/programmingLanguage.js'
const routerPL = express.Router();
const programmingLanguages = getMultiple()

routerPL.get('/', async function (req, res, next){
    try{
        res.json(programmingLanguages(req.query.page));
    }catch(err){
        console.log(`Error while getting programming languages `, err.message);
        next(err)
    }
});

export default routerPL