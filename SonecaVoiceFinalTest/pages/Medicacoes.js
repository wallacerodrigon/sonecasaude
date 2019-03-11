import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default class Medicacoes extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Medicacoes</Text>
            </View>
        )
    }
}