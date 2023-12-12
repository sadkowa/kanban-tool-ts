import React from "react";
import Column from "./Column";
import { initColumns } from "../providers/initData";

const Board = () => {
    const columns = initColumns

    const renderColumns = () => {
        return columns.map(item => <Column key={item.id} item={item}/>)
    }

    return (
        <section className="board">
            {renderColumns()}
        </section>
    )
}

export default Board