import { TAG_USUARIO_LOGADO, teste } from '../constants/ConstantesInternas';
import { getValoresStorage, limparStorage } from '../components/comuns/UtilStorage';
import React from "react";
import {ActivityIndicator, View} from "react-native";
import { VERDE } from '../assets/estilos/estilos';
import { obterUltimaRota } from '../components/comuns/UtilRotas';
import { TELA_HOME } from '../constants/AppScreenData';

export default class ControladorRouteScreen extends React.Component {

    componentDidMount(){

        getValoresStorage(TAG_USUARIO_LOGADO)
            .then(usuario => {
                console.log(usuario);
                if (usuario){
                    //pegar a rota da storage
                    this.encaminharUltimaRota();
                } else {
                    this.props.navigation.navigate('navigatorNotLoggedIn')
                }
            })
        }
        
    encaminharUltimaRota(){
        obterUltimaRota()
        .then(rota=> {
            this.props.navigation.navigate(rota || 'navigatorLoggedIn' )
        })
        .catch(error => this.props.navigation.navigate(TELA_HOME))


        

    }

    render(){
        return (
            <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', alignItems:'center' }}>
                <ActivityIndicator size="large" color={VERDE}/>
            </View>
        )
    }
}
