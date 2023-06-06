import { Surface, Box, Flex, Text, Icon } from "@react-native-material/core";

const CurrentDayWeather = () => {
  return (
    <Surface
      elevation={5}
      category="medium"
      style={{
        width: "90%",
        backgroundColor: "#051a33",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24 }} color="white">
        Current Weather
      </Text>

      <Box>
        <Flex>
          <Text style={{ fontSize: 50 }} color="white">
            23
            <Icon name="weather-sunny" color="white" style={{ fontSize: 50 }} />
          </Text>
        </Flex>
        <Text style={{ fontSize: 26 }} color="white">
          Clear sky
        </Text>
      </Box>
      <Box mt={20}>
        <Text style={{ fontSize: 22, textAlign: "center" }} color="white">
          Feels like 21°
        </Text>
        <Flex direction="row" justify="around" mt={5}>
          <Text style={{ fontSize: 22 }} color="white">
            22
            <Icon name="arrow-up-bold" color="white" style={{ fontSize: 22 }} />
          </Text>
          <Text style={{ fontSize: 22 }} color="white">
            30
            <Icon
              name="arrow-down-bold"
              color="white"
              style={{ fontSize: 22 }}
            />
          </Text>
        </Flex>
        <Flex mt={10}>
          <Flex direction="row" justify="between">
            <Text style={{ fontSize: 22 }} color="white">
              Humidity
            </Text>
            <Text style={{ fontSize: 22 }} color="white">
              <Icon name="water" color="white" style={{ fontSize: 22 }} />
              63%
            </Text>
          </Flex>
          <Flex direction="row" justify="between">
            <Text style={{ fontSize: 22 }} color="white">
              Wind
            </Text>
            <Text style={{ fontSize: 22 }} color="white">
              <Icon
                name="weather-windy-variant"
                color="white"
                style={{ fontSize: 22 }}
              />
              5kph
            </Text>
          </Flex>
          <Flex direction="row" justify="between">
            <Text style={{ fontSize: 22 }} color="white">
              Pressure
            </Text>
            <Text style={{ fontSize: 22 }} color="white">
              <Icon name="pan" color="white" style={{ fontSize: 22 }} />
              1019hPa%
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Surface>
  );
};

export default CurrentDayWeather;
