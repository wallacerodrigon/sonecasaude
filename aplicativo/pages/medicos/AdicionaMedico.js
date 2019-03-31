import React from "react";
import { View, Text, Picker, StyleSheet} from "react-native";
import Botao from "../../components/botao/Botao";
import {InputTextComMascara, InputTexto} from "../../components/input/InputTexto";
import EstilosComuns from "../../assets/estilos/estilos";

export default class AdicionaMedico extends React.Component {
    render(){
        return (
            <View style={[styles.tabDadosMedico, EstilosComuns.backgroundPadrao]}>
                <View style={styles.tabDadosMedicoCadastro}>
                    <InputTexto placeholder="Nome" maxLength={40}
                        onChangeInput={value => null}
                        />
                    {/* <Picker>
                        <Picker.Item label="Especialidade" value=""/>/
                        <Picker.Item label="Cardiologia" value="1"/>
                        <Picker.Item label="Cardiologia 2" value="11"/>
                        <Picker.Item label="Cardiologi1a" value="113"/>
                        <Picker.Item label="Cardiolog2ia" value="12"/>
                    </Picker> */}

                    <InputTexto placeholder="Especialidade" maxLength={50}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        onChangeInput={value => null}
                        />

                    <InputTexto placeholder="Número CRM (UF+Número)" maxLength={50}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        onChangeInput={value => null}
                        />

                    <InputTexto placeholder="E-mail" maxLength={50}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        onChangeInput={value => null}
                        />

                    <InputTexto placeholder="Celular" maxLength={50}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        onChangeInput={value => null}
                        />

                    {/* <InputTextComMascara placeholder="Telefone (xx)xxxxx-xxxx" maxLength={14}
                        onChangeInput={value => null}
                        /> */}
                
                </View>

                <View style={styles.tabDadosMedicoRodape}>
                    <Botao tituloBotao='Adicionar' onClick={() =>  navigation.navigate(TELA_LISTA_MEDICOS.name)}/>    
                </View>
            </View>
        )
    }
};


const styles= StyleSheet.create({
    containerBusca: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 5 ,
    },
    containerTabsMedico: {
        flex: 8,
        borderWidth: 1
    },
    tabDadosMedico: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    tabDadosMedicoCadastro: {
        flex: 9,
        flexDirection: 'column'
    },
    tabDadosMedicoRodape: {
        flex: 1,
        padding: 5,
        marginBottom: 5
    }
})