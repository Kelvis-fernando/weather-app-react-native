import { Box, Flex, Surface, Text } from "@react-native-material/core";


const HomeScreen = () => {
  return (
    <Flex bg="#031025" justify="center" items="center" h="100%" w="100%">
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
            {/* <Image source={require("../assets/sunny.svg")} /> */}
            <Text style={{ fontSize: 26 }} color="white">
              23
            </Text>
          </Flex>
          <Text style={{ fontSize: 26 }} color="white">
            clear sky
          </Text>
        </Box>
        <Box mt={20}>
          <Text style={{ fontSize: 22, textAlign: "center" }} color="white">
            Feels like 21°
          </Text>
          <Flex direction="row" justify="around" mt={5}>
            <Text style={{ fontSize: 22 }} color="white">
              22
            </Text>
            <Text style={{ fontSize: 22 }} color="white">
              30
            </Text>
          </Flex>
          <Flex mt={10}>
            <Flex direction="row" justify="between">
              <Text style={{ fontSize: 22 }} color="white">
                Humidity
              </Text>
              <Text style={{ fontSize: 22 }} color="white">
                63%
              </Text>
            </Flex>
            <Flex direction="row" justify="between">
              <Text style={{ fontSize: 22 }} color="white">
                Wind
              </Text>
              <Text style={{ fontSize: 22 }} color="white">
                5kph
              </Text>
            </Flex>
            <Flex direction="row" justify="between">
              <Text style={{ fontSize: 22 }} color="white">
                Pressure
              </Text>
              <Text style={{ fontSize: 22 }} color="white">
                1019hPa%
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Surface>
    </Flex>
  );
};

export default HomeScreen;
