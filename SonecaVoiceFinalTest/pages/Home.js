import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class Home extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: 10}}>

                <Text style={{fontSize: 20, fontWeight: 'bold'}} >Exemplos de uso de voz para o soneca saúde</Text>

                <TouchableOpacity style={{backgroundColor: 'gray'}} onPress={() => this.props.navigation.navigate('comandosBasicos')}>
                    <Text>Comandos Básicos</Text>
                </TouchableOpacity>
            </View>
        )
    }
}