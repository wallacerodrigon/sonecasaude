import { List, ListItem, Thumbnail, Icon } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Rating } from "react-native-ratings";
import EstilosComuns, { FUNDO_ESCURO } from "../../assets/estilos/estilos";
import { NAV_COMPARTILHAMENTOS, NAV_MEDICACOES, NAV_MEDICAMENTOS, NAV_MEDICOS, TELA_HOME, TELA_LOGIN } from "../../constants/AppScreenData";
import { MensagemInformativa } from "../mensagens/Mensagens";
import { salvarRotaAtual } from "../comuns/UtilRotas";
import { getValoresStorage, limparStorage } from "../comuns/UtilStorage";
import { TAG_USUARIO_STORAGE } from "../../constants/ConstantesInternas";

const routes = [
    {label: 'Início', rota: TELA_HOME.name, icon: 'home', logout: false},
    {label: 'Controle de medicação', rota: NAV_MEDICACOES.name, icon: 'medkit', logout: false},
    {label: 'Meus médicos', rota: NAV_MEDICOS.name, icon: 'pulse', logout: false},
    {label: 'Compartilhar informações', rota: NAV_COMPARTILHAMENTOS.name, icon: 'share', logout: false},
    {label: 'Medicamentos', rota: NAV_MEDICAMENTOS.name, icon: 'color-filter', logout: false},
    {label: 'Configurações', rota: '', icon: 'options', logout: false},
    {label: 'Meus endereços', rota: '', icon: 'business', logout: false},
    {label: 'Sair do aplicativo', rota: TELA_LOGIN.name, icon: 'close-circle-outline', logout: true},
    
];


export default class SideBarMenu extends React.Component {

  constructor(props){
    super(props);
    //ler esses dados da storage
  }

  componentDidMount(){
      this.configuraUsuario();
  }

configuraUsuario = async () => { 
    const usuario = await getValoresStorage(TAG_USUARIO_STORAGE);
    if (usuario){
        const userObjeto = JSON.parse(usuario);
        this.nomeUsuario = userObjeto.nomeUsuario;
    }
  }  

 
  abrirTela(route){
    if (route.rota == ''){
        MensagemInformativa('Desculpe. Esta tela ainda está em construção!');
    } else if (route.logout){
        limparStorage();
        this.props.navigation.navigate(route.rota, route.params);
    } else {
        //gravar a rota na storage
        salvarRotaAtual(route.rota, route.params);
        this.props.navigation.navigate(route.rota, route.params);
    }
  }

  render() {
    return (
      <View style={EstilosComuns.container}>
          <View style={[EstilosComuns.backgroundToolbar, styles.containerProfile]} >
            <View style={styles.perfil}>
                <Thumbnail  circular
                    source={
                        require('../../assets/perfil/foto-teste.jpeg')
                    }
                />
            </View>

            <View style={styles.perfil}>
                <Text style={[EstilosComuns.corBranca, EstilosComuns.negrito, {fontSize: 20}]}>{this.nomeUsuario} </Text>

                <View style={styles.ratingPerfil}>
                    <Text style={EstilosComuns.corBranca}>4.7</Text>
                    <Rating
                            imageSize={20}
                            readonly
                            minValue={0}
                            fractions={1}
                            startingValue={3.7}
                            />
                </View>
                
            </View>
          </View>
     
          <View style={[styles.containerRotas, EstilosComuns.backgroundPadrao]}>
            <List
                dataArray={routes}
                renderRow={data => {
                    return (
                        <ListItem
                                button
                                onPress={() => this.abrirTela(data)}>
                                <Icon name={data.icon}/>
                                <Text style={styles.labelRotaDestaque}> {data.label}</Text>
                        </ListItem>
                    );
                }}
                />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerProfile: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'flex-start'
    },

    containerRotas: {
        flex: 8
    },

    labelRotaDestaque: {
        color: FUNDO_ESCURO,
        fontWeight: 'bold',
        fontSize: 18,
    },    

    perfil: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 2
    },

    ratingPerfil: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontSize: 15,
        marginRight: 10

    }

})