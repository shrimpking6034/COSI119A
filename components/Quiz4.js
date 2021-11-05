import React, { useState, useEffect } from "react";
import { Button, Text, TextInput, SafeAreaView, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from 'axios'

export default function Quiz4() {
    const [showRepo, setShowRepo] = useState(false)
    const [userId, setUserId] = useState('');
    const [repos, setRepos] = useState([]);

    const setReposList = () => {
        if (showRepo == true) {
            setRepos([{ full_name: "name/NONE" }])
            setShowRepo(false)
        } else {
            axios.get(`https://api.github.com/users/${userId}/repos`).then(response => setRepos(response.data)).catch(errormsg => console.log(errormsg))
            setShowRepo(true)
        }
    }

    useEffect(() => {
        // getCovidData(state)
    }, []);


    const renderItem = (item) => {
        return (
            <View style={{ backgroundColor: 'lightgray', margin: 10, padding: 10, width: '70%' }}>
                <Text style={{ fontSize: 30 }}>
                    {item.item.full_name.split('/')[1]}
                </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center' }}>
                <Text style={{ color: 'red', fontSize: 40, textAlign: 'center' }}>
                    Github Viewer
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 35 }}>
                        github Id:
                    </Text>
                    <TextInput
                        style={{ fontSize: 35 }}
                        placeholder="userid"
                        onChangeText={text => { setUserId(text) }}
                    />
                </View>
                <View style={{ width: '50%' }}>
                    {showRepo == true ?
                        <TouchableOpacity
                            onPress={setReposList}
                            style={{marginLeft: 10}}>
                            <Text style={{ color: 'blue', fontSize: 15}}>
                                hide repositories
                            </Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={setReposList}
                            style={{marginLeft: 10}}>
                            <Text style={{ color: 'blue', fontSize: 15 }}>
                                show repositories
                            </Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
            <View style={{ flex: 5 }}>
                <FlatList data={repos} renderItem={renderItem} keyExtractor={item => item.id} />
            </View>
            <View style={{ flex: 1 }}>
                <Text>DEBUGGING</Text>
                <Text>userId:{userId}</Text>
                <Text>showReps:{String(showRepo)}</Text>
                <Text> repos.length = {repos.length}</Text>
            </View>

        </SafeAreaView>
    );
}