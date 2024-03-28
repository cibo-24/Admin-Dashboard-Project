import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from 'react-router-dom';
import Topbar from "./scenes/global/TopBar";
import Bar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/index";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calender";
import FAQ from "./scenes/faq";
import BarChartScenes from "./scenes/bar";
import PieChartScenes from "./scenes/pie";
import LineChartScenes from "./scenes/line";
import GeoChartScenes from "./scenes/geo";

// import SideBar from './scenes/dashboard';






function App() {
  const [theme, colorMode] = useMode();

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
      <Bar />
       <main className="content">
        <Topbar />
      
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
           <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<FAQ />} />
           <Route path="/bar" element={<BarChartScenes />} />
           <Route path="/pie" element={<PieChartScenes />} />
           <Route path="/line" element={<LineChartScenes />} />
          <Route path="/geography" element={<GeoChartScenes />} />
         
        </Routes>
       </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>

  );
}

export default App;
