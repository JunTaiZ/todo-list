import React, {useEffect, useState} from 'react';
import TodoItem from "components/TodoItem";
import {IPTodo} from 'types/index'

export default () => {
    const localTodoList = localStorage.getItem('todolist')
    const [todoList, setTodoList] = useState(JSON.parse(localTodoList))
    let doneList = todoList.filter((value: IPTodo) => value.done)
    let doingList = todoList.filter((value: IPTodo) => !value.done)

    // const [inputValue, setInputValue] = useState('')
    // if (localTodoList) {
    //     setTodoList(JSON.parse(localTodoList))
    // }
    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(todoList))
    }, [todoList])

    function deleteToDoItem(aTitle: string) {
        setTodoList(todoList.filter((value: IPTodo) => {
            return value.title !== aTitle
        }))
    }

    function newItemExist(aTitle: string) {
        return todoList.find((value: IPTodo) => {
            return value.title === aTitle
        })
    }

    function addTodoItem(aTitle: string): boolean {
        if (newItemExist(aTitle)) {
            alert('已存在该任务')
            return false
        } else {
            setTodoList([{
                title: aTitle,
                done: false,
            }].concat(todoList))
            return true
        }
    }

    function changeItemStatus(aTitle: string) {
        setTodoList(todoList.map((value: IPTodo) => {
            if (value.title === aTitle) {
                value.done = !value.done
                return value
            }
            return value
        }))
    }

    function clickEnter(event: { key: string, currentTarget: HTMLInputElement }): void {
        console.log(event.currentTarget)
        if (event.key === 'Enter') {
            if (addTodoItem(event.currentTarget.value)) {
                event.currentTarget.value = ''
            }

        }
    }


    return (
        <div>
            <div>
                {doingList.map((value: IPTodo) => {
                    return <TodoItem
                        key={value.title} item={value}
                        deleteItem={deleteToDoItem}
                        changeItemStatus={changeItemStatus}
                    />
                })}
                {doneList.map((value: IPTodo) => {
                    return <TodoItem
                        key={value.title} item={value}
                        deleteItem={deleteToDoItem}
                        changeItemStatus={changeItemStatus}
                    />
                })}
            </div>
            <div>
                <input type="text"
                       onKeyDown={clickEnter}
                />
            </div>
        </div>
    )
}
