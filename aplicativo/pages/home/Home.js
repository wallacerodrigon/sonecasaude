import React from 'react';
import {View, FlatList, Image, StyleSheet, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_HOME, TELA_LOGIN} from '../../constants/AppScreenData';
import menus from '../../assets/menus-home.json';
import WidgetMenu from '../../components/widgets/widgetMenu';
import Botao from '../../components/botao/Botao';
import { Ionicons as Icon } from '@expo/vector-icons';

const imgMicrophone = require('../../assets/img/microphone_green.png');

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: TELA_HOME.title
      };

       

    constructor(){
        super()
    }

    retornarLogin = () => {
        this.props.navigation.navigate(TELA_LOGIN.name);
        
    }

    abrirTela(item){
       this.props.navigation.navigate(item.screen);
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={[styles.microfone]}>
                    <Image source={imgMicrophone}/>
                    <Text style={[styles.textoMicrofone, EstilosComuns.corVerde]}>Toque no microfone e fale</Text>
                </View>

                <View style={[styles.widgets]}>
                     <FlatList
                        data={menus}
                        renderItem = {({ item }) => 
                            <WidgetMenu itemMenu={item} onClick={(item)=> this.abrirTela(item)}
                                
                            />
                        }
                        keyExtractor={item => item.key}
                        numColumns={2}                                                                                                                              
                    />
                </View>

            </View>
        )
    };
}

const styles = StyleSheet.create({
    microfone: {
        flex: 3,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        alignItems: 'center'
    },
    widgets: {
        flex: 7,
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        padding: 5,
    }, 
    textoMicrofone: {
        justifyContent: 'center',
        fontWeight: 'bold'
    }

})

//axios.get(url)
//retorna promise --> then(resp => resp.data)

