import { ReactComponent as Sun } from "../assets/Sun.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import { ChangeEvent } from "react";

const DarkMode = () => {
	const setTheme = (theme: string) => {
		document.querySelector("body")?.setAttribute("data-theme", theme);
	};

	const toggleThemeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) setTheme("dark");
		else  {setTheme("light");}
	};
	return (
		<div className="dark_mode">
			<input
				onChange={toggleThemeHandler}
				className="dark_mode__input"
				type="checkbox"
				id="darkmode-toggle"
			/>
			<label className="dark_mode__label" htmlFor="darkmode-toggle">
				<Sun />
				<Moon />
			</label>
			
		</div>
	);
};

export default DarkMode;
