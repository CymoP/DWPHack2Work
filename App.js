import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./screens/homepage.js";
import Loading from "./screens/loading.js";

export default function App() {
  const [fetchingData, setFetchingDataState] = React.useState(true);
  setTimeout(() => {
    setFetchingDataState(false);
  }, 1000);

  if (fetchingData) {
    return <Loading />;
  } else {
    return <Home />;
  }
}
