import {Alert} from 'react-native';

export const MensagemInformativa = (mensagem) => {
  Alert.alert(
    'Atenção!',
    mensagem,
    [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
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
