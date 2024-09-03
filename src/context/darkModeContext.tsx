/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

type DarkModeType = {
    mode: 'light' | 'dark';
    setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}
export const DarkModeContext = createContext<DarkModeType>({} as DarkModeType);

export const DarkModeContextProvider = ({children} : {children : React.ReactNode}) => {
    const [mode, setMode] = useState<'light' | 'dark'>(
        localStorage.getItem('currentMode') === null ? 'light' : localStorage.getItem('currentMode') === 'light' ? 'light' : 'dark'
    )
    return (
        <DarkModeContext.Provider value={{mode, setMode}}>{children}</DarkModeContext.Provider>
    )
}
export const useDarkMode = () => {
    return useContext(DarkModeContext);
}