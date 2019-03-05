import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import EstilosComuns, { BRANCO, VERDE, FUNDO, FUNDO_ESCURO, DESMARCADO, COLOR_RATING } from '../../assets/estilos/estilos';
import {DatePicker, Label} from 'native-base';
import MedicacaoCard from '../../components/medicacao/MedicacaoCard';
import { TELA_HISTORICO_DIARIO } from '../../constants/AppScreenData';
import { Rating } from 'react-native-ratings';




export default class HistoricoUsoPorData extends React.Component {

    static navigationOptions = {
        title: TELA_HISTORICO_DIARIO.title,
      };

    constructor(props){
        super(props);
        
    }

    medicamentosDoDia(){
        return [
            {idHorario: 1, hora:"08:00", telaUso: true, medicamentos: [ {id: 1, nomeMedicamento: "Losartana", prescricao: "1 comprimido", confirmado: true, horaUsoEfetivo: '08h01'}] },
            {idHorario: 11, hora:"10:00", telaUso: true, medicamentos: [ {id: 110, nomeMedicamento: "Celestrat", prescricao: "1 colher de chá", confirmado: true, horaUsoEfetivo: '10h00'}] },
            {idHorario: 21, hora:"12:00", telaUso: true, medicamentos: [ {id: 1111, nomeMedicamento: "Buscopan composto", prescricao: "1 comprimido", confirmado: false, horaUsoEfetivo: ''}] },
            {idHorario: 2, hora:"20:00", telaUso: true,
              medicamentos: [   {id: 11, nomeMedicamento: "Losartana", prescricao: "1 comprimido", horaUsoEfetivo: '20h03', confirmado: true},
                                {id: 31, nomeMedicamento: "Roxflan", prescricao: "2 comprimido(s)", horaUsoEfetivo: '', confirmado: false},
                                {id: 21, nomeMedicamento: "Dipirona", prescricao: "40 gotas", horaUsoEfetivo: '20h10', confirmado: true},
                            ]
                         },
       ]

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
                <View style={styles.containerScores}>
                    <View style={styles.containerScoreItem}>
                        <Text style={EstilosComuns.corVerde}>Cumprimento:</Text>
                        <Rating
                            imageSize={10}
                            readonly
                            minValue={0}
                            fractions={1}
                            startingValue={5}
                            //ratingBackgroundColor= "blue"
                            //ratingColor= {COLOR_RATING}
                            //star, rocket, bell, heart
                            />                        
                    </View>

                    <View style={styles.containerScoreItem}>
                        <Text style={EstilosComuns.corVerde}>Pontualidade:</Text>
                        <Rating
                            imageSize={10}
                            readonly
                            minValue={0}
                            fractions={1}
                            //ratingCount
                            startingValue={2.5}
                            />                        
                    </View>
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
        borderBottomColor: FUNDO_ESCURO, 
        borderBottomWidth: 1,
        padding: 5
        
    },
    containerScores: {
        flex: 1,
        borderBottomColor: FUNDO_ESCURO, 
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'center'
    },

    containerScoreItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },

    containerMedicacao: {
        flex: 9,
        padding: 5
    },
  
})