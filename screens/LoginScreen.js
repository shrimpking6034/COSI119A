import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen = ({route, navigation}) => {
    const [username, setUsername] = useState('');
    const [loggedin, setLoggedin] = useState(false);
    const [result, setResult] = useState('');

    useEffect(() => { getData() }
        , [])

    let responseView = (<View></View>)

    // if (loggedin == false) {
    //     setResult('Enter User name')
    //     responseView = (
    //         <View style={styles.preferences}>
    //             <TextInput
    //                 style={styles.text_input}
    //                 placeholder="UserName"
    //                 onChangeText={setUsername}
    //             />
    //             <Button
    //                 title="Log In"
    //                 onPress={() => {
    //                     const onSetUsername = route.params.onSetUsername
    //                     storeData({ username })
    //                     onSetUsername(username)
    //                     setLoggedin(true)
    //                     navigation.goBack()
    //                 }
    //                 }
    //             />
    //         </View>
    //     )
    // } else {
    //     setResult('Welcome, ', {username})
    //     responseView = (
    //         <View style={styles.preferences}>
    //             <Text style={styles.text_input}>
    //                 Welcome {username}
    //             </Text>
    //             <Button
    //                 title="Log out"
    //                 onPress={() => {
    //                     setUsername('')
    //                     clearAll()
    //                     setLoggedin(false)
    //                     navigation.goBack()
    //                 }}
    //         />
    //         </View>
    //     )
    // }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('login', jsonValue)
        } catch (e) {
            console.dir(e)
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('login')
            let data = null
            if (jsonValue != null) {
                data = JSON.parse(jsonValue)
                setUsername(data.username)
            } else {
                setUsername('')
            }
        } catch (e) {
            console.dir(e)
        }
    }

    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            console.dir(e)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <Text style={styles.text, styles.textColor}>{result}</Text>
            </View>

            <View style={styles.preferences}>
                <TextInput
                    style={styles.text_input}
                    placeholder="UserName"
                    onChangeText={setUsername}
                />
                <Button
                    title="Log In"
                    onPress={() => {
                        const onSetUsername = route.params.onSetUsername
                        storeData(username)
                        onSetUsername(username)
                        setLoggedin(true)
                        navigation.goBack()
                    }
                    }
                />
            </View>

            {responseView}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#121212",
        paddingBottom: 20,
    },
    label: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 25,
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
    preferences: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
    },
    text_input: {
        height: 50,
        width: "40%",
        backgroundColor: "#424242",
        paddingLeft: 15,
        paddingRight: 15,
    },
});

export default LoginScreen;