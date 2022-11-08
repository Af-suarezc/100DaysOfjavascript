function getOffset(currentPage=1,listPerPage){
    return (currentPage-1)*listPerPage
}

function emptyRows(rows){
    if(!rows){
        return []
    }
    return rows;
}

export default {getOffset, emptyRows}