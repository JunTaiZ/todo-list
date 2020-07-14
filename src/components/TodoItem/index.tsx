import React, {useEffect} from 'react';
import {IPTodoItem} from "types/index";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import './index.module.css';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem: React.FC<IPTodoItem> = (props) => {
    // const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('hook');
    });


    function Element() {

        if (props.item.done) {
            return (
                <CheckCircleOutlineIcon color={"primary"}/>
            )
        } else {
            return (
                <RadioButtonUncheckedIcon color={"secondary"}/>
            )
        }
    }

    function bindClick() {
        props.changeItemStatus(props.item.title)
    }


    function clickDeleteItem() {
        props.deleteItem(props.item.title)
    }

    return (
        <div className="container">
            <div className="body" onClick={bindClick}>
                <Element />
                <div>{props.item.title}</div>
            </div>
            <div className={"delete"} onClick={clickDeleteItem}>
                <DeleteIcon />
            </div>
        </div>
    )
};

export default TodoItem;