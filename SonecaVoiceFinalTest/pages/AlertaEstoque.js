import React from "react";
import { Text, TouchableOpacity, View, Button } from "react-native";
import Tts from 'react-native-tts';

const remedios = [
    "losartana", "amoxicilina", "dipirona", "dorflex", "doxflan"
]

export default class AlertaEstoque extends React.Component {

    remedio= '';

    constructor(props){
        super(props);

        this.state = {
            texto: 'Você tem somente 10 comprimidos de ',
            remedio: ''
        }

    }

    async componentWillMount() {
        Tts.setDefaultLanguage('pt-BR');
        Tts.setDefaultRate(1.0);

        this.falarAlerta();
    }  
    
    falarAlerta(){
        Tts.getInitStatus().then(() => {
                
            Tts.speak(remedio);
        });    
    }
    

    getRemedio(){
        let indice = Math.random() * 5;
        
        indice= Math.round(indice,0);
        remedio = 'Você tem somente 10 comprimidos de ' + remedios[indice];
        return remedio;

    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>
                    {this.getRemedio()}
                </Text>

                {/* <Button title="iniciar speech" onPress={() => this.falarAlerta()}/> */}

            </View>
        )
    }
}