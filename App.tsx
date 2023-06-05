import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Button } from "@react-native-material/core";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <Box>
      <HomeScreen />
      <StatusBar style="auto" />
    </Box>
  );
}
