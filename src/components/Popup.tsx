import { ReactNode, useContext } from "react";
import TasksContext from "../context/TasksContext";
import { TaskIdType } from "../types/types";

type PopupProps = {
	children: ReactNode;
	id: TaskIdType;
	deleteTask: (id: TaskIdType) => void;
	exitPopup: () => void;
};
const Popup = (props: PopupProps) => {
	const { children, id, deleteTask, exitPopup } = props;
	const { setDeleteId } = useContext(TasksContext);

	const confirmHandler = () => {
		if (id === 'null') return;
		deleteTask(id);
		exitPopup();
		setDeleteId(null);
	};

	const skipHandler = () => {
		exitPopup();
		setDeleteId(null);
	};

	return (
		<div className="popup__box">
			<div className="popup">
				<p className="popup__message">{children}</p>
				<button onClick={skipHandler} className="popup__exit task--button">
					&#x00d7;
				</button>
				{id && (
					<div className="popup__buttons">
						<button
							onClick={confirmHandler}
							className="popup__button popup__button--confirm"
						>
							yes
						</button>
						<button
							onClick={skipHandler}
							className="popup__button popup__button--skip "
						>
							no
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Popup;
