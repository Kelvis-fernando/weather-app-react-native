import axios from "axios";

export const weatherService = async () => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?lat=-25.5338&lon=-49.2072&appid=20571ab45c74dc2a1897b60c5b8047a1"
  );

  return response.data;
};
