import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EstilosComuns from "../../assets/estilos/estilos";
import { BotaoFecharHeader, BotaoMicrofoneHeader } from '../../components/botao/Botao';
import { TELA_PADRAO } from "../../constants/AppScreenData";

export default class StatusBar extends React.Component {
  render() {
    return (
      <View style={[EstilosComuns.backgroundToolbar, styles.containerStatus]}>
            <BotaoFecharHeader  navigation={this.props.navigation}/>
            <Text style={[ EstilosComuns.corBranca, EstilosComuns.negrito, styles.fonteStatusBar ]}>{ TELA_PADRAO.title }</Text>
            <BotaoMicrofoneHeader  navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerStatus: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
       // position: 'absolute',
       // height: 50,
       // width: '100%'

    },

    fonteStatusBar: {
        fontSize: 20
    }

  

})