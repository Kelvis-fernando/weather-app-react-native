import { Flex, Icon, IconButton, TextInput } from "@react-native-material/core";
import CurrentDayWeather from "../components/CurrentDayWeather";
import ExtendedForecast from "../components/ExtendedForecast";

const HomeScreen = () => {
  return (
    <Flex bg="#0a1c3a" justify="center" items="center" h="100%" w="100%">
      <TextInput
        placeholder="Search a place"
        variant="outlined"
        style={{ width: "90%", marginBottom: 20 }}
        trailing={(props) => (
          <IconButton
            icon={(props) => <Icon name="crosshairs-gps" {...props} />}
            {...props}
          />
        )}
      />
      <CurrentDayWeather />
      <ExtendedForecast />
    </Flex>
  );
};

export default HomeScreen;
