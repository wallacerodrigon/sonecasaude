import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import EstilosComuns from '../../assets/estilos/EstilosComuns';
import {AppScreenNames} from '../../constantes';
import menus from '../../assets/menus-home.json';
import WidgetMenu from '../widgets/widgetMenu';
import Botao from '../botao/Botao';
import AppScreenTitles from '../constantes/AppScreenTitles';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: AppScreenTitles.TELA_HOME
      };

    constructor(){
        super()
    }

    retornarLogin = () => {
        this.props.navigation.navigate(AppScreenNames.TELA_LOGIN);
        
    }

    abrirTelaMedicamentos(){}

    abrirTelaConversacao(){}

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={styles.lista}>
                    <FlatList
                        data={menus}
                        renderItem = {({ item }) => 
                            <WidgetMenu itemMenu={item} onClick={()=> this.abrirTela()}
                                icone={require("../assets/icons/home.png")}
                            />
                        }
                        keyExtractor={item => item.key}
                        numColumns={2}
                    />
                </View>

                <View style={styles.footer}>
                    <Botao tituloBotao='Sair' onClick={() => this.retornarLogin()}/>

                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    lista: {
        flex: 6
    },
    footer: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        padding: 5       
    }, 

})

