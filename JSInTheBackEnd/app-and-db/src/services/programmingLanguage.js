//Here we implement connection between the route and the database
import query from './db.js';
import helper from '../helper.js';
import config from '../config.js';

const dbL = query;
const helperL = helper;
const  configL = config;

async function getMultiple(page=1){
    const offset = helperL.getOffset(page, configL.listPerPage);
    const rows = await dbL.query(`SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset},${config.listPerPage}`);
    const data = helperL.emptyRows(rows)
    const meta = {page};
    return{
        data,
        meta
    }
}

export default getMultiple;