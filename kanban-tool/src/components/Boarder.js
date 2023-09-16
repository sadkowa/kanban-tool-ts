import React, { useContext } from "react";
import Column from "./Column";
import { ColumnsContext } from "../context";

const Boarder = () => {
    const columns = useContext(ColumnsContext)
    // console.log(columns)

    const renderColumns = () => {
        return columns.map(item => <Column key={item.id} item={item}/>)
    }

    return (
        <section className="boarder">
            {renderColumns()}
        </section>
    )
}

export default Boarder