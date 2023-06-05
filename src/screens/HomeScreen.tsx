import { Flex } from "@react-native-material/core";
import CurrentDayWeather from "../components/CurrentDayWeather";
import ExtendedForecast from "../components/ExtendedForecast";

const HomeScreen = () => {
  return (
    <Flex bg="#031025" justify="center" items="center" h="100%" w="100%">
      <CurrentDayWeather />
      <ExtendedForecast />
    </Flex>
  );
};

export default HomeScreen;
