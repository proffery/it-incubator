import { useState } from 'react';
import './App.css';
import { TaskType, TodoListType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TasksType = {
    [key: string]: TaskType[]
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<TodoListType[]>([
        { id: todolistID1, title: 'What to learn', filter: 'all' },
        { id: todolistID2, title: 'What to buy', filter: 'all' },
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Rest API", isDone: false },
            { id: v1(), title: "GraphQL", isDone: false },
        ],
        [todolistID2]: [
            { id: v1(), title: "HTML&CSS2", isDone: true },
            { id: v1(), title: "JS2", isDone: true },
            { id: v1(), title: "ReactJS2", isDone: false },
            { id: v1(), title: "Rest API2", isDone: false },
            { id: v1(), title: "GraphQL2", isDone: false },
        ]
    });



    function removeTask(todoListId: string, id: string) {
        setTasks({...tasks, [todoListId]:tasks[todoListId].filter(task => task.id !== id)});
    }

    function addTask(todoListId: string, title: string) {
        let task = { id: v1(), title: title, isDone: false };
        setTasks({...tasks, [todoListId]:[...tasks[todoListId], task]});
    }

    function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todoListId]:tasks[todoListId].map(task => task.id === taskId ? {...task, isDone:isDone} : task)})
    }


    
    function changeFilter(todoListId: string, value: FilterValuesType) {
        setTodolists(todolists.map(list => list.id === todoListId ? {...list, filter:value} : list))
    }
    
    
    return (
        <div className="App">
            {todolists.map(list => {
                let tasksForTodolist = tasks[list.id];
            
                if (list.filter === "active") {
                    tasksForTodolist = tasks[list.id].filter(t => t.isDone === false);
                }
                if (list.filter === "completed") {
                    tasksForTodolist = tasks[list.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        title={list.title}
                        todoListId={list.id}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={list.filter}
                    />
                )
            })}
        </div>
    );
}

export default App;
