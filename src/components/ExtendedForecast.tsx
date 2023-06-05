import { Box, Flex, Surface, Text } from "@react-native-material/core";
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
      <ScrollView horizontal>
        <Flex items="center" mr={10}>
          <Text color="white" style={{ fontSize: 26 }}>
            Tue
          </Text>
          <Text color="white" style={{ fontSize: 22 }}>
            Clouds
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
