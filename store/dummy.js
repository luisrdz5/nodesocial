const db = {
    'user': [{id: '1', name: 'Luis'}],
};
  
async function list(tabla){
 return db[tabla];
}
async function get(tabla, id){
    let col = await list(tabla);
    return col.filter( item => item.id === id[0] || null );
}
async function upset(tabla, data){
    db[tabla].push(data);
    return data;
}
async function remove(tabla, id){
    console.log(db[tabla].filter( item => item.id !== id ));
    db[tabla] = db[tabla].filter( item => item.id !== id );
    return id;
}
module.exports = {
    list,
    get,
    upset,
    remove
}