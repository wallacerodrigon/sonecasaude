import React from "react";
import { View , Text } from "react-native";
import { BotaoToggle } from "../../components/botao/Botao";

export default class PrescricaoDiaria extends React.Component {


    render(){
        return (
            <View style={{flexDirection: 'column', padding: 10}} >
                <Text>Dias da semana do medicamento</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <BotaoToggle tituloBotao="DOM"/>
                    <BotaoToggle tituloBotao="SEG"/>
                    <BotaoToggle tituloBotao="TER"/>
                    <BotaoToggle tituloBotao="QUA"/>
                    <BotaoToggle tituloBotao="QUI"/>
                    <BotaoToggle tituloBotao="SEX"/>
                    <BotaoToggle tituloBotao="SÁB"/>
                </View>

            </View>
        )
    }

}