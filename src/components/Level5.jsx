import { useContext } from "react";
import { ThemeModeContext } from "../contexts/ThemeModeContext";

export function Level5(props) {
    const { themeMode, setThemeMode } = useContext(ThemeModeContext);
    function toggleThemeMode() {
        setThemeMode(themeMode === "light" ? "dark" : "light");
    }
    console.log("theme mode ", themeMode);
    return (
        <>
            <div>I am level 5</div>
            <button onClick={toggleThemeMode}>Toggle Theme Mode</button>
        </>
    );
}
