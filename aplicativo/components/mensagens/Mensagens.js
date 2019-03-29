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

export const MensagemConfirmacao= (pergunta, buttons) => {
    let botoes = buttons == null ? {text: 'Ok'} : buttons;
    Alert.alert(
        'Confirmação',
        pergunta,
        botoes
     );
}
