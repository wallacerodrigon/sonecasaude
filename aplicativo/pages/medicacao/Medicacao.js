import { DatePicker, Fab, Icon, Label } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import EstilosComuns, { FUNDO, FUNDO_ESCURO, VERDE } from '../../assets/estilos/estilos';
import MedicacaoCard from '../../components/medicacao/MedicacaoCard';
import { NAV_MEDICAMENTOS } from '../../constants/AppScreenData';

const imgMicrophone = require('../../assets/img/microphone_green.png');


export default class Medicacao extends React.Component {

    constructor(props){
        super(props);
        this.state= {active: false};
    }

    medicamentosDoDia(){
       return [
          //  {idHorario: 1, hora:"08:00", medicamentos: [ {id: 1, nomeMedicamento: "Losartana", prescricao: "1 comprimido"}] },
          //  {idHorario: 11, hora:"10:00", medicamentos: [ {id: 110, nomeMedicamento: "Celestrat", prescricao: "1 colher de chá"}] },
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

                    <Fab 
                        active={this.state.active}
                        direction="up"
                        style={{ backgroundColor: VERDE }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                            <Icon name="add" onPress={() => this.props.navigation.navigate(NAV_MEDICAMENTOS.name)} />
                    </Fab>                      
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

    containerMedicacao: {
        flex: 9,
        padding: 5
    },
  
})