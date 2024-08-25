/* eslint-disable react/prop-types */
import humidityImg from "../assets/images/humidity.png";
import windImg from "../assets/images/wind.png";

export default function Weather({ weatherData }) {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <img src={weatherData.icon} alt="weather-img" className="w-40" />
      <p className="text-center text-white text-8xl">
        {weatherData.temperature}°c
      </p>
      <p className="text-6xl text-white">{weatherData.location}</p>
      <div className="flex justify-between w-full mt-10">
        <div className="flex items-center gap-4 text-white">
          <img
            className="h-8 bg-no-repeat"
            src={humidityImg}
            alt="humidityImg"
          />
          <div>
            <p className="text-xl">{weatherData.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white">
          <img className="h-8 bg-no-repeat" src={windImg} alt="windImg" />
          <div>
            <p className="text-xl">{weatherData.windSpeed} Km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
