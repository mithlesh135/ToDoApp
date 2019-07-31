let todos = [];
let id = 0;

function _generateId(){
    return ++id;
}

function _clone(obj){
    return JSON.parse(JSON.stringify(obj));
}

function _find(id){
    return  todos.find((todo) => {
      return todo.id === id;
    });
 }

export default {

    getAll: function(){
        return _clone(todos);
    },

    get: function(id){
        let todo = _find(id);
        return _clone(todo);
    },

    post: function (todo){
        todo.id = _generateId();
        todos.push(todo);
    },

    put: function (todo){
        let _todo = _find(id);
        let index = todos.indexOf(_todo);
        todos[index] = todo;
    }

}