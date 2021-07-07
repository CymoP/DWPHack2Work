import React, { Component } from "react";
import { StyleSheet, Button, View, Text } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
