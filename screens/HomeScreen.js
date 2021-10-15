import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Text, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const IMG_URI =
  "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg";

const HomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [signedin, setSignedin] = useState(false)
  useEffect(() => { getData() }, [])

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('login')
      if (value != null) {
        setUsername(value)
        setSignedin(true)
        console.log('value exist')
      } else {
        console.log('value does not exist')

      }
    } catch (e) {
      console.log("error in getData ")
      console.dir(e)
      // error reading value
    }
  }

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.dir(e)
    }
}

  let responseView = (<View></View>)

  if (!signedin) {
    responseView = (
      <Button
          title='Log in'
          onPress={() => navigation.navigate("Login", { onSetUsername: setUsername })}
        />
    )
  } else {
    responseView =  (
      <Button
      title='Log Out'
      onPress={()=>clearAll()}
    />
      )
  }

  return (
    <View style={styles.homepage}>
      <View style={styles.homepage_header}>
        <Button
          title="About Page"
          onPress={() => navigation.navigate("About")}
        />
        <Button
          title="Help me!"
          onPress={() => navigation.navigate("Manage")}
        />
        {responseView}
      </View>
      <View style={styles.homepage_body}>
        <Text style={styles.text_bold, styles.textColor}>
          Welcome! {username && ' ' + username}
        </Text>
        <Text style={styles.text, styles.textColor}>
          Help me decide what to eat! Visit the About Page to see
          some more information, and the help me page to let us recommend!
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

export default HomeScreen;