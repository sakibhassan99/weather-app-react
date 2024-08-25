/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import clearIcon from "../assets/images/clear.png";
import cloudIcon from "../assets/images/cloud.png";
import drizzleIcon from "../assets/images/drizzle.png";
import rainIcon from "../assets/images/rain.png";
import snowIcon from "../assets/images/snow.png";

export default function Search({ setWeatherData }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const icons = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": cloudIcon,
    "03n": cloudIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  async function getWeatherData(city) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      const data = await res.json();
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: data.name,
        temperature: Math.round(data.main.temp),
        icon: icons[data.weather[0].icon] || clearIcon,
      });
    } catch (err) {
      setError(true);
    }
  }

  useEffect(() => {
    getWeatherData("london");
  }, []);

  return (
    <>
      <div className="relative flex items-center w-full gap-2">
        <input
          className="w-full p-2 pl-4 text-white bg-transparent border rounded-full outline-none basis-full"
          type="text"
          placeholder="Search"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setError(false);
          }}
        />
        <CiSearch
          className="w-12 h-10 p-2 text-white border rounded-full cursor-pointer"
          onClick={() => {
            getWeatherData(city);
          }}
        />
        <p
          className={`${
            error ? "" : "hidden"
          } absolute text-xs text-red-500 -bottom-6 left-4`}
        >
          City Not Found
        </p>
      </div>
    </>
  );
}
