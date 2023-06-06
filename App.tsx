import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Box,
  Button,
  IconComponentProvider,
} from "@react-native-material/core";
import HomeScreen from "./src/screens/HomeScreen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <Box>
        <HomeScreen />
        <StatusBar style="auto" />
      </Box>
    </IconComponentProvider>
  );
}
