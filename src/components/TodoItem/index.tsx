import React, {useEffect} from 'react';
import {IPTodoItem} from "types/index";
import CheckIcon from '@material-ui/icons/Check';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import './index.module.css';
import DeleteIcon from '@material-ui/icons/Delete';


const TodoItem: React.FC<IPTodoItem> = (props) => {
    // const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('hook');
    });

    const bodyClassName = props.item.done ? 'done' : 'doing'

    function Element() {

        if (props.item.done) {
            return (
                <CheckIcon fontSize={"small"}/>
            )
        } else {
            return (
                <RadioButtonUncheckedIcon color={"primary"} fontSize={"small"}/>
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
            <div className={"body " + bodyClassName} onClick={bindClick}>
                <Element/>
                <div>{props.item.title}</div>
            </div>
            <div className={"delete"} onClick={clickDeleteItem}>
                <DeleteIcon color={"action"} fontSize={"small"}/>
            </div>
        </div>
    )
};

export default TodoItem;