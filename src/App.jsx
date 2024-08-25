import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";

function App() {
  const [weatherData, setWeatherData] = useState({});
  console.log(weatherData);
  return (
    <div className="flex items-center justify-center h-screen bg-[url(./assets/images/background.jpg)] bg-cover bg-no-repeat ">
      <div className="w-[450px] m-5 flex-col gap-8 rounded flex items-center p-8 bg-transparent backdrop-blur-sm border-white border">
        <Search setWeatherData={setWeatherData} />
        <Weather weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
