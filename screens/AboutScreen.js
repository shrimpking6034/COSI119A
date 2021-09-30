import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const IMG_URI =
  "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text, styles.textColor}>
          This application helps you to decide what to eat depending on 
          how you are feeling. Later, the app will save your preferences and 
          recommend accordingly. The app also will tell you where to get the
          recommended food.
        </Text>
      </View>
      <View style={styles.body}>
        <Image style={styles.image} source={{ uri: IMG_URI }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#121212",
    paddingBottom: 20,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "sans-serif-thin",
  },
  textColor: {
    color: "white",
  },
  image: {
    width: "50%",
    height: "100%",
  },
});

export default AboutScreen;