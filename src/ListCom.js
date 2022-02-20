import React, { useState } from 'react';
import DeletelCon from '@material-ui/icons/Delete';

const ListCom = (props) => {
    const [line, setLine] = useState(false);

    const cutlt = () => {
        setLine(true);
    }

    return (
        <div className="todo_style">
            <span onClick={cutlt}>
                <DeletelCon className="deleteIcon" />
            </span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}>
                {props.text}
            </li>
        </div>
    )
}

export default ListCom;