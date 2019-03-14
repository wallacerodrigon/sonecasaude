import React from 'react';
import { Picker, Text, View } from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { InputTextComMascara, InputTexto } from '../../components/input/InputTexto';
import { TELA_ENDERECO, TELA_LOGIN } from '../../constants/AppScreenData';
import { PERFIL_CUIDADOR, PERFIL_PACIENTE } from '../../constants/ConstantesInternas';

import Validador from "../../utilitarios/Validador";

class DadosPessoais extends React.Component {

    tipoPerfil = 'P';

    constructor(props){
        super(props);

        this.tipoPerfil = this.props.navigation.state.params.tipoPerfil;
    }

    componentWillMount(){
        this.setState({labelBotao: this.tipoPerfil === PERFIL_CUIDADOR ? 'Finalizar': 'Próximo'});
    }

    gotoNextScreen(){
        let bolCpfValido = true; //new Validador().validaCPF(this.state.cpf);

        if (bolCpfValido && 
            this.tipoPerfil === PERFIL_PACIENTE){
            this.props.navigation.navigate(TELA_ENDERECO.name);        
        } else if (bolCpfValido) {
            this.props.navigation.navigate(TELA_LOGIN.name);        
        } else {
            alert('cpf inválido');
        }
    }

    render() {
    

        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Seus dados</Text>
                </View>
                
                <View style={EstilosComuns.bodyMain}>
                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={text =>this.onChangeCpf(text)}
                        placeholder="Digite seu CPF"
                        type={InputTextComMascara.MASK_CPF}
                        value={this.state.cpf}
                    />
           
                    <InputTexto placeholder="E-mail" maxLength={40}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        autoCapitalize="none"
                      //  onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTexto placeholder="Nome Completo" maxLength={60}
                        autoCapitalize="words"
                      //  onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                       // onChangeText={this.onChangeCpf}
                        placeholder="Data de nascimento"
                        type={InputTextComMascara.MASK_DATA}
                    />                   


                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        //onChangeText={this.onChangeCelular}
                        placeholder="Digite seu celular"
                        type={InputTextComMascara.MASK_CELULAR}
                    />                        
                    <Text style={EstilosComuns.corBranca}>Sexo</Text>
                    <Picker 
                        selectedValue={this.state.sexo}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({sexo: itemValue})
                        }>
                        <Picker.Item label="Selecione" value=""  />
                        <Picker.Item label="Masculino" value="M" />
                        <Picker.Item label="Feminino" value="F" />
                    </Picker>                                       

                </View>
                
                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao={this.state.labelBotao} onClick={() =>  this.gotoNextScreen()}/>
                </View>
            </View>
        )
    };
}

export default DadosPessoais;