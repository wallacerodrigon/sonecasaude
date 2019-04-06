import { TAG_USUARIO_LOGADO, teste } from '../constants/ConstantesInternas';
import { getValoresStorage, limparStorage } from '../components/comuns/UtilStorage';
import React from "react";
import {ActivityIndicator, View} from "react-native";
import { VERDE } from '../assets/estilos/estilos';
import { obterUltimaRota } from '../components/comuns/UtilRotas';
import { TELA_HOME, NAV_LOGGED, NAV_NOT_LOGGED } from '../constants/AppScreenData';
import Loading from '../components/comuns/Loading';

export default class ControladorRouteScreen extends React.Component {

    componentDidMount(){

        getValoresStorage(TAG_USUARIO_LOGADO)
            .then(usuario => {
                console.log(usuario);
                if (usuario){
                    //pegar a rota da storage
                    this.encaminharUltimaRota();
                } else {
                    this.props.navigation.navigate(NAV_NOT_LOGGED.name)
                }
            })
        }
        
    encaminharUltimaRota(){
        obterUltimaRota()
        .then(rota=> {
            this.props.navigation.navigate(rota ? rota : NAV_LOGGED.name )
        })
        .catch(error => this.props.navigation.navigate(TELA_HOME.name))


        

    }

    render(){
        return (
            <Loading bolAtivo={true} />
        )
    }
}
