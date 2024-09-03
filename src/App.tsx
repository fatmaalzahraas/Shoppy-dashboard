import { useMemo } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Ecommerce from "./pages/Ecommerce";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Kanban from "./pages/Kanban";
import Calendar from "./pages/Calendar";
import Editor from "./pages/Editor";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "./context/darkModeContext";
import { getDesignTokens } from "./styles/themeStyles";
import Line from "./pages/LinePage";
import Area from "./pages/AreaPage";
import Bar from "./pages/BarPage";
import Pie from "./pages/PiePage";
import StackedBarPage from "./pages/StackedBarPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Ecommerce />} />
      <Route path="ecommerce" element={<Ecommerce />} />
      <Route path="employees" element={<Employees />} />
      <Route path="customers" element={<Customers />} />
      <Route path="orders" element={<Orders />} />
      <Route path="kanban" element={<Kanban />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="editor" element={<Editor />} />
      <Route path="line" element={<Line />} />
      <Route path="area" element={<Area />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="stacked" element={<StackedBarPage />} />
    </Route>
  )
);
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    xsm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
function App() {
  const { mode } = useDarkMode();
  const darkTheme = useMemo(
    () =>
      createTheme({
        ...getDesignTokens(mode),
        typography: {
          fontFamily: "'Open Sans', 'Roboto', sans-serif",
        },
        breakpoints: {
          values: {
            xs: 0,
            xsm: 420,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
