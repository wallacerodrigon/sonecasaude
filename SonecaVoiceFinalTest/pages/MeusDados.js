import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default class MeusDados extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>MeusDados</Text>
            </View>
        )
    }
}