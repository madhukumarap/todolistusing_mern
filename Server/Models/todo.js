const mongoo = require('mongoose')
const TodoSchema = new mongoo.Schema({
    task:String, // body elements
    done:
    {
        type : Boolean,
        default: false,
    }

})
const TodoModel = mongoo.model("todos", TodoSchema) // this table
module.exports =TodoModel