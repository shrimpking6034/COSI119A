import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const IMG_URI =
  "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900";

const FoodScreen = ({ route, navigation }) => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //   <Text style={styles.text}>
    //       <Text style={styles.text_bold}>Newest piece of clothing added:{" "}</Text>
    //       {(route.params && route.params.item_name) ||
    //         "is good when you are sad!"}
    //     </Text>
    //   </View>
    //   <View style={styles.body}>
    //     <Image style={styles.image} source={{ uri: IMG_URI }} />
    //   </View>
    // </View>
    <View style={styles.homepage}>
      <View style={styles.homepage_body}>
        <Text style={styles.text, styles.textColor}>
          <Text style={styles.text_bold}>Food When you are{" "}</Text>
          {(route.params && route.params.item_name)}
        </Text>
        <Image style={styles.image} source={{ uri: IMG_URI }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    homepage: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    homepage_header: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
          backgroundColor: "#424242"
    },
    homepage_body: {
      display: "flex",
      flex: 8,
      alignItems: "center",
      justifyContent: "space-evenly",
          padding: 10,
      backgroundColor: "#121212"
    },
      image: {
          width: "90%",
          height: "35%"
      },
      text: {
          fontSize: 20,
          fontFamily: "sans-serif-thin"
      },
      text_bold: {
          fontSize: 20,
          fontWeight: "bold"
      },
    textColor: {
      color: "white",
    },
  });

export default FoodScreen;