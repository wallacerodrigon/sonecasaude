import {Alert} from 'react-native';

export const MensagemInformativa = (mensagem, callBack = null) => {
  Alert.alert(
    'Atenção!',
    mensagem,
    [
        {text: 'OK', onPress: () => callBack != null ? callBack() : null},
    ],
 );
}

export const MensagemErro= (mensagem) => {
    Alert.alert(
        'Atenção!',
        mensagem,
        [
            {text: 'OK'},
        ],
     );
}

export const MensagemConfirmacao= (pergunta, opcoes) => {
    let botoes = opcoes || {text: 'Ok'};
    Alert.alert(
        'Confirmação',
        pergunta,
        [
            botoes
        ],
     );
}
