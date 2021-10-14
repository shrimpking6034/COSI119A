import React, { useState, } from "react";
import { Button, Text, TextInput, View } from "react-native";

const MathQuiz = ({ n }) => {
    const [debugging, setDebugging] = useState(false)

    const [num1, setNum1] = useState(Math.floor(Math.random() * (n + 1)));
    const [num2, setNum2] = useState(Math.floor(Math.random() * (n + 1)));
    const [answer, setAnswer] = useState(num1 * num2);
    const [input, setInput] = useState();
    const [isCheck, setIsCheck] = useState(true);

    const [numAns, setNumAns] = useState(0);
    const [numInp, setNumInp] = useState(0);
    const [corPer, setCorPer] = useState(0);

    const [result, setResult] = useState('waiting')
    const [output, setOutput] = useState()
    const [marginL, setMarginL] = useState(0)


    const DebugView = ({ debugging }) => {
        if (debugging) {
            return (
                <View style={{ alignItems: "flex-start" }} >
                    <Button
                        style={{ paddingVertical: 32 }}
                        title="HIDE DEDUG INFO"
                        color="green"
                        onPress={() => setDebugging(false)}
                    />
                    <View>
                        <Text style={{ marginLeft: 5 }}>
                            x: {num1}
                        </Text>
                        <Text style={{ marginLeft: 5 }}>
                            y: {num2}
                        </Text>
                        <Text>
                            answer: {input}
                        </Text>
                        <Text style={{ marginLeft: 5 }}>
                            correct: {numAns}
                        </Text>
                        <Text style={{ marginLeft: 5 }}>
                            answered: {numInp}
                        </Text>
                        <Text style={{ marginLeft: 5 }}>
                            result: {result}
                        </Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ alignItems: "flex-start" }}>
                    <Button
                        style={{ paddingVertical: 32 }}
                        title="SHOW DEDUG INFO"
                        color="green"
                        onPress={() => setDebugging(true)}
                    />
                </View>
            )
        }
    }

    const next = () => {
        setNum1(Math.floor(Math.random() * (n + 1)))
        setNum2(Math.floor(Math.random() * (n + 1)))
        setAnswer(num1*num2)
        setInput("")
        setIsCheck(true)
        setResult("waiting")
    }

    const checkAnswer = () => {
        var ans = num1*num2
        setIsCheck(false)
        setNumInp(numInp + 1)
        if (input == (num1*num2)) {
            setNumAns(numAns + 1)
            setOutput("Correct!!")
            setResult("correct")
            setMarginL(0)
        } else {
            setOutput("Sorry, answer was " + ans.toString() + ", try again!")
            setResult("incorrect")
            setMarginL(150)
        }
        var correctPercent = numAns / numInp * 100
        correctPercent = Math.round(correctPercent * 10)/10
        setCorPer(numAns / numInp * 100)
    }

    const ShowHide = ({isCheck}) => {
        if (isCheck) {
            return (
                <View style={{ alignItems: 'flex-start', }}>
                    <Button
                        title="CHECK ANSWER"
                        color="red"
                        onPress={() => checkAnswer()}
                    />
                </View>)
        } else {
            return (
                <View style={{flexDirection: 'column', flex: 3}}>
                    <View>
                        <Text style={{ color: 'red', fontSize: 40 }}>
                            {output}
                        </Text>
                    </View>
                    <View style={{ marginLeft: marginL, alignItems:'flex-start'}}>
                        <Button
                            title="NEXT QUESTION"
                            color="green"
                            onPress={() => next()}
                        />
                    </View>
                </View>)
        }
    }



    return (
        <View style={{ flexDirection: "column" }}>
            <Text style={{ color: "blue", fontSize: 50, fontWeight:'bold' }}>
                Math Quiz for numbers between 0 and {n}
            </Text>
            <Text style={{ color: "black", fontSize: 40 }}>
                Calculate the product of the following two numbers:
            </Text>
            <Text style={{ color: "black", fontSize: 50, marginLeft: 25, alignItems: 'center' }}>
                {num1} * {num2} =
                <TextInput
                    style={{ color: "black", fontSize: 50, width: 540 }}
                    placeholder="???"
                    onChangeText={text => { setInput(text) }}
                    value={input}
                />
            </Text>
            <ShowHide isCheck={isCheck}/>
            <Text>
                Correct: {numAns}
            </Text>
            <Text>
                Answered: {numInp}
            </Text>
            <Text>
                Percent Correct: {corPer}
            </Text>
            <DebugView debugging={debugging} />
        </View>
    )
}
export default MathQuiz;
