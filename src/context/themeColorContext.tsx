/* eslint-disable react-refresh/only-export-components */
import {createContext, useContext , useState} from 'react';

type ThemeColorContextType = {
    themeColor: string | null,
    setThemeColor: React.Dispatch<React.SetStateAction<string | null>>
}
const ThemeColorContext = createContext<ThemeColorContextType>({} as ThemeColorContextType);
export const ThemeColorContextProvider = ({children} : {children : React.ReactNode}) => {
    const [themeColor, setThemeColor] = useState(localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : "#F1C40F")
    return <ThemeColorContext.Provider value={{themeColor, setThemeColor}}>{children}</ThemeColorContext.Provider>
}

export const useThemeColor = () => {
    return useContext(ThemeColorContext)
}