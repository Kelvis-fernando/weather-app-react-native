import { Box, Flex, Icon, Surface, Text } from "@react-native-material/core";
import { ScrollView } from "react-native";

const ExtendedForecast = () => {
  return (
    <Surface
      elevation={5}
      category="medium"
      style={{
        width: "90%",
        backgroundColor: "#051a33",
        padding: 20,
        marginTop: 30,
      }}
    >
      <Text color="white" style={{ fontSize: 26 }}>
        Extended Forecast
      </Text>
      <ScrollView horizontal style={{ marginTop: 20 }}>
        <Flex items="center" mr={10}>
          <Text color="white" style={{ fontSize: 26 }}>
            Tue
          </Text>
          <Icon name="weather-sunny" color="white" style={{ fontSize: 50 }} />
          <Text color="white" style={{ fontSize: 22 }}>
            Sunny
          </Text>
          <Text color="white" style={{ fontSize: 20 }}>
            22°/11°
          </Text>
        </Flex>
        <Flex items="center" mr={10}>
          <Text color="white" style={{ fontSize: 26 }}>
            WED
          </Text>
          <Icon name="weather-rainy" color="white" style={{ fontSize: 50 }} />
          <Text color="white" style={{ fontSize: 22 }}>
            Rainy
          </Text>
          <Text color="white" style={{ fontSize: 20 }}>
            22°/11°
          </Text>
        </Flex>
        <Flex items="center" mr={10}>
          <Text color="white" style={{ fontSize: 26 }}>
            THU
          </Text>
          <Icon name="weather-cloudy" color="white" style={{ fontSize: 50 }} />
          <Text color="white" style={{ fontSize: 22 }}>
            Cloudy
          </Text>
          <Text color="white" style={{ fontSize: 20 }}>
            22°/11°
          </Text>
        </Flex>
        <Flex items="center" mr={10}>
          <Text color="white" style={{ fontSize: 26 }}>
            FRI
          </Text>
          <Icon
            name="weather-partly-cloudy"
            color="white"
            style={{ fontSize: 50 }}
          />
          <Text color="white" style={{ fontSize: 22 }}>
            P/Cloudy
          </Text>
          <Text color="white" style={{ fontSize: 20 }}>
            22°/11°
          </Text>
        </Flex>
        <Flex items="center" mr={10}>
          <Text color="white" style={{ fontSize: 26 }}>
            SAT
          </Text>
          <Icon
            name="weather-lightning-rainy"
            color="white"
            style={{ fontSize: 50 }}
          />
          <Text color="white" style={{ fontSize: 22 }}>
            Lightning
          </Text>
          <Text color="white" style={{ fontSize: 20 }}>
            22°/11°
          </Text>
        </Flex>
      </ScrollView>
    </Surface>
  );
};

export default ExtendedForecast;
