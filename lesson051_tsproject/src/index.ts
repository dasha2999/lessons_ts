import { UserInput } from "./user-input";
import { Todo } from "./todo"; 
import { TodoList } from "./todo-list";


const userInput= new UserInput(document.body)

const todoList = new TodoList<Todo>(document.body)

const todo = new Todo(document.body, 'some text')

todo.mount()
todoList.mount()

setTimeout(() => {
    todo.isDone = !todo.isDone
}, 1500);

userInput.mount();
userInput.onClick(todoList.todoAdd.bind(todoList))