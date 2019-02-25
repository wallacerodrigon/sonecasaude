import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import EstilosComuns, { BRANCO, VERDE, FUNDO, FUNDO_ESCURO, DESMARCADO } from '../../assets/estilos/estilos';
import { BotaoOpacity } from "../../components/botao/Botao";
import {DatePicker, Container, Thumbnail, Label, Card, CardItem, Content, Icon} from 'native-base';
import MedicacaoCard from '../../components/medicacao/MedicacaoCard';

const imgMicrophone = require('../../assets/img/microphone_green.png');


export default class Medicacao extends React.Component {

    medicamentosDoDia(){
       return [
            {idHorario: 1, hora:"08:00", medicamentos: [ {id: 1, nomeMedicamento: "Losartana", prescricao: "1 comprimido"}] },
            {idHorario: 11, hora:"10:00", medicamentos: [ {id: 110, nomeMedicamento: "Celestrat", prescricao: "1 colher de chá"}] },
            {idHorario: 21, hora:"12:00", medicamentos: [ {id: 1111, nomeMedicamento: "Buscopan composto", prescricao: "1 comprimido"}] },
            {idHorario: 2, hora:"20:00", 
              medicamentos: [   {id: 11, nomeMedicamento: "Losartana", prescricao: "1 comprimido"},
                                {id: 31, nomeMedicamento: "Roxflan", prescricao: "2 comprimido(s)"},
                                {id: 21, nomeMedicamento: "Dipirona", prescricao: "40 gotas"},
                            ]
                         },
       ]
    }   

    abrirTelaOuvindo(){
        this.props.navigation.navigate(TELA_COMANDO_VOZ.name);
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={styles.containerTopo}>
                    <Label style={EstilosComuns.corVerde}>Data:</Label>
                    <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(1900, 1, 1)}
                            locale={"pt-BR"} //ver em portugues
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            onDateChange={this.onChangeDataNascimento}
                            disabled={false}
                            textStyle={{ color: VERDE, borderWidth: 1, borderColor: FUNDO }}
                            />                
                </View>

                <View style={styles.containerMedicacao}>
                    <FlatList
                        data={this.medicamentosDoDia()}
                        keyExtractor={(item) => item.idHorario}
                        renderItem={({item}) => <MedicacaoCard item={item}/>}
                    />
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    containerTopo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#fff', 
        borderBottomWidth: 1,
        padding: 5
        
    },

    containerMedicacao: {
        flex: 9,
        padding: 5
    },
  
})