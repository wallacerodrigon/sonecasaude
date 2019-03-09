import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { Container, Thumbnail } from "native-base";
import Botao from '../../components/botao/Botao';

const imgMicrophone = require('../../assets/img/microphone_green.png');
const imgOuvindo = require('../../assets/img/ouvindo.png');

export default class ComandoOuvindoVoz extends React.Component {
    static navigationOptions = {
        title: 'ComandoOuvindoVoz',
        header: null
        /* No more header config here! */
      };

    render() {
        return (
            <View style={[EstilosComuns.containerListening]}>

                <Container style={[styles.row, EstilosComuns.backgroundToolbar]} thumbnail>
                    <Thumbnail circular large source={require('../../assets/img/logo-login.jpeg')}/>
                </Container>

                <Container style={[styles.row, EstilosComuns.backgroundToolbar]} thumbnail>
                    <Thumbnail circular source={imgMicrophone}/>
                    <Text style={[EstilosComuns.corBranca, EstilosComuns.negrito]} >Estou ouvindo...</Text>
                </Container>

                <View style={styles.rowListening}>
                    <Image source={imgOuvindo}  spectRadio={1} resizeMode="cover" width="500"/>
                </View>

                <View>
                    <Botao tituloBotao="Simula término da fala..." onClick={() => this.props.navigation.goBack()}/>
                </View>

            </View>
        )
    };
}

const styles = StyleSheet.create({
    row: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },

    rowListening: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'center',
        borderWidth: 1
    }
});    
