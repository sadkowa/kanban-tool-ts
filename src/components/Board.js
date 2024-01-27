import React from "react";
import Column from "./Column";

const Board = ({initColumns}) => {

    const renderColumns = () => {
        return initColumns.map(item => <Column key={item.id} item={item}/>)
    }

    return (
        <section className="board">
            {renderColumns()}
        </section>
    )
}

export default Board