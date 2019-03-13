import React from "react";
import { View , Text } from "native-base";
import { BotaoToggle } from "../../components/botao/Botao";

export default class PrescricaoAlternada extends React.Component {


    render(){
        return (
            <View style={{flexDirection: 'column', padding: 10}} >
                <Text>O medicamento será tomado a cada quantos dias?</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <BotaoToggle tituloBotao="2"/>
                    <BotaoToggle tituloBotao="3"/>
                    <BotaoToggle tituloBotao="5"/>
                    <BotaoToggle tituloBotao="7"/>
                    <BotaoToggle tituloBotao="15"/>
                    <BotaoToggle tituloBotao="30"/>
                    <BotaoToggle tituloBotao="..."/>
                </View>

            </View>
        )
    }

}