import { SpeedInsights } from '@vercel/speed-insights/react';
import React from "react";
import NavBar from "./Components/NavBar";
import Benefits from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import HowWeWork from "./Screens/HowWeWork";
import Serivces from "./Screens/Services";

function App() {
  return (<div className="App">
      <NavBar/>
      <Home/>
      <Serivces/>
      <HowWeWork/>
      <Benefits/>
      <Contact/>
      <SpeedInsights />
    </div>
  );
}
export default App;
