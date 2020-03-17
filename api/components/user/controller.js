const store = require('../../../store/dummy');
const response = require('../../../network/response');

const TABLA = 'user';

function list(){
    return store.list('user');
}
module.exports = {
    list
}