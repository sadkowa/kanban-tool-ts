import Column from "./Column";
import { ColumnType } from "../types/types";

type BoardProps = {
	initColumns: ColumnType[];
};

const Board = ({ initColumns }: BoardProps) => {
	const renderColumns = () => {
		return initColumns.map((item) => <Column key={item.id} item={item} />);
	};

	return <section className="board">{renderColumns()}</section>;
};

export default Board;
