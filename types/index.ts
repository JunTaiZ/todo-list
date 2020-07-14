interface Post {
    body: string
    id: number
    title: string
}

interface Route {
    path: string
    setRoute: (path: string) => void
}

interface IPTodo {
    title: string,
    done: boolean
}

// interface IPChildItem {
//     title: string
//     date: Date
//     done: boolean
// }

interface IPTodoItem {
    deleteItem: (title: string) => void
    changeItemStatus: (title: string) => void
    item: IPTodo
}

export {
    Post,
    Route,
    IPTodoItem,
    IPTodo,
}
