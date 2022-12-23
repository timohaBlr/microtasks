import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {log} from "util";

export type FilterValuesType = "all" | "active" | "completed";
type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    //   let [tasks, setTasks] = useState([
    //       {id: v1(), title: "HTML&CSS", isDone: true},
    //       {id: v1(), title: "JS", isDone: true},
    //       {id: v1(), title: "ReactJS", isDone: false},
    //       {id: v1(), title: "Rest API", isDone: false},
    //       {id: v1(), title: "GraphQL", isDone: false},
    //   ]);
    //   let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id: string, todolistId: string) {
        let filteredTasks = tasks[todolistId].filter(t => t.id != id);
        /* tasks[todolistId] = filteredTasks
         *setTasks({...tasks})*/
          //рабочий способ с урока

        let newTasks = {...tasks, [todolistId]: filteredTasks}
        setTasks(newTasks);
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = {...tasks, [todolistId]: [task, ...tasks[todolistId]]}
        setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let task = tasks[todolistId].find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        let newTasks = {...tasks, [todolistId]: [...tasks[todolistId]]}
        // [todolistId]: [...tasks[todolistId]]  лишнее перезаписывание свойства. Оставил для истории
        // чтобы вспомнить ход мыслей
        setTasks(newTasks);
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(f => f.id === todolistId)
        if (todolist) {
            todolist.filter = value;
        }
        setTodolists([...todolists]);
    }


    return (
        <div className="App">
            {todolists.map(todolist => {

                let tasksForTodolist = tasks[todolist.id];

                if (todolist.filter === "active") {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                }
                if (todolist.filter === "completed") {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                }

                return <Todolist key={todolist.id}
                                 id={todolist.id}
                                 title={todolist.title}
                                 tasks={tasksForTodolist}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 addTask={addTask}
                                 changeTaskStatus={changeStatus}
                                 filter={todolist.filter}
                />
            })}

        </div>
    );
}

export default App;
