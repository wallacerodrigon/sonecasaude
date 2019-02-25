import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_HISTORICO_MEDICACAO } from '../../constants/AppScreenData';
import {DatePicker } from 'native-base';

export default class Historico extends React.Component {

    static navigationOptions = {
        title: TELA_HISTORICO_MEDICACAO.title,
      };

    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }      
    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Histórico</Text>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: '#fff'}}>
                    <Text>Período:</Text>
                    <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(1900, 1, 1)}
                            maximumDate={new Date()}
                            locale={"en"} //ver em portugues
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Data início"
                            textStyle={{ color: "#fff" }}
                            placeHolderTextStyle={{ color: "#fff" }}
                            onDateChange={this.onChangeDataNascimento}
                            disabled={false}
                            style={[EstilosComuns.inputText]} 
                            />                
                    <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(1900, 1, 1)}
                            maximumDate={new Date()}
                            locale={"en"} //ver em portugues
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Data fim"
                            textStyle={{ color: "#fff" }}
                            placeHolderTextStyle={{ color: "#fff" }}
                            onDateChange={this.onChangeDataNascimento}
                            disabled={false}
                            style={[EstilosComuns.inputText]} 
                            />                
                </View>

                <View style={{flex: 1}}>
                    <Text>Medicamento:</Text>
                </View>

                <View style={{flex: 1}}>
                    <Text>Medicamento:</Text>                
                </View>


                <View style={{flex: 3}}>
                </View>

            </View>
        )
    };
} 

