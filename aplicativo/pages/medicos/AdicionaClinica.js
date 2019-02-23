import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_ADD_MEDICOS, TELA_HOME, TELA_ADD_CLINICA, TELA_LISTA_CLINICAS } from '../../constants/AppScreenData';
import { InputTextComMascara, InputTexto } from '../../components/input/InputTexto';
import Botao from '../../components/botao/Botao';
import { Label } from 'native-base';

export default class AdicionaClinica extends React.Component {
    static navigationOptions = {
        title: TELA_ADD_CLINICA.title,
        /* No more header config here! */
      };

    onChangeInput(text){

    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Adicionar clínica</Text>
            
                <View style={EstilosComuns.bodyMain}>
                    <Label style={[EstilosComuns.negrito, EstilosComuns.corVerde]} >Dr(a) Fulano de tal</Label>
                    <Label  style={[EstilosComuns.negrito, EstilosComuns.corVerde]}>Ginecologista</Label>

                    <InputTexto placeholder="Nome clínica" maxLength={40}
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTextComMascara placeholder="CEP"
                        type={InputTextComMascara.MASK_CEP}
                        onChangeText={value => this.onChangeInput(value)}
                        />
                    <InputTexto placeholder="Estado" maxLength={40}
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTexto placeholder="Cidade" maxLength={40}
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTexto placeholder="Bairro" maxLength={40}
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTexto placeholder="Logradouro" maxLength={40}
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTexto placeholder="Número" maxLength={60}
                        keyboardType={InputTexto.KEYBOARD_NUMBER}
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTexto placeholder="Complemento" maxLength={40}
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                </View>
                
                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao='Salvar' onClick={() =>  this.props.navigation.navigate(TELA_ADD_MEDICOS.name)}/>    
                </View>
                    
            </View>
        )
    };
}

