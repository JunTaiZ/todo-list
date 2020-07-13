import React, {useState, useEffect} from 'react';
import styles from 'index.module.scss'

interface IPTodoItem {
    title: string;
    date: Date;
    done: boolean;
}

const TodoItem: React.FC<IPTodoItem> = (props) => {
    const [todoItem, setTodoItem] = useState(0);
    useEffect(() => {
        console.log('hook');
    });
    return (
        <div>

        </div>
    )
};

export default TodoItem;