import { useEffect, useState } from "react";
import { weatherService } from "../services/weatherService";

const useCurrentDayWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState<object>();
  const getData = async () => {
    const apiResponse = await weatherService();
    setWeatherInfo(apiResponse);
  };

  useEffect(() => {
    getData();
  }, []);
  return { weatherInfo };
};

export default useCurrentDayWeather;
