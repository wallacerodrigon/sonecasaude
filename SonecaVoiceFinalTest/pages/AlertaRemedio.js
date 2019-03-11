import React from "react";
import { Text, TouchableOpacity, View, Button } from "react-native";
import Tts from 'react-native-tts';

const remedios = [
    "losartana", "amoxicilina", "dipirona", "dorflex", "doxflan"
]

const horarios = [
    '08:00', '09:10', '10:00', '12:30', '18:15'
]

export default class AlertaRemedio extends React.Component {

    remedio= '';

    constructor(props){
        super(props);

    }

    async componentWillMount() {
        Tts.setDefaultLanguage('pt-BR');
        Tts.setDefaultRate(0.6);

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
        remedio = 'Soneca, você tem ' + remedios[indice] + ' para tomar às ' + horarios[indice];
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