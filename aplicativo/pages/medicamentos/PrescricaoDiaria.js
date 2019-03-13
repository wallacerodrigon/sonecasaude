import React from "react";
import { View , Text, StyleSheet } from "react-native";
import { BotaoToggle } from "../../components/botao/Botao";
import { Radio } from "native-base";
import { VERDE } from "../../assets/estilos/estilos";

export default class PrescricaoDiaria extends React.Component {


    render(){
        return (
            <View style={{flexDirection: 'column', padding: 3}} >
                <Text>Dias da semana do medicamento</Text>

                <View style={styles.container}>
                    <BotaoToggle tituloBotao="DOM"/>
                    <BotaoToggle tituloBotao="SEG"/>
                    <BotaoToggle tituloBotao="TER"/>
                    <BotaoToggle tituloBotao="QUA"/>
                    <BotaoToggle tituloBotao="QUI"/>
                    <BotaoToggle tituloBotao="SEX"/>
                    <BotaoToggle tituloBotao="SÁB"/>
                </View>

                <View style={styles.container}>
                    <View style={styles.radioGroup}>
                        <Text>Intervalo de horários</Text>
                        <Radio selected={true} selectedColor={VERDE}/>
                    </View>

                    <View style={styles.radioGroup}>
                        <Text>Horário livre</Text>
                        <Radio selected={false} selectedColor={VERDE}/>
                    </View>

                </View>
            </View>
        )
    }

}

const styles= StyleSheet.create({

    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        color: VERDE
    },
    radioGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: VERDE

    }
})