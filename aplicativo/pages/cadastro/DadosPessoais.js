import React from 'react';
import { Picker, Text, View } from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { InputTextComMascara, InputTexto } from '../../components/input/InputTexto';
import { TELA_ENDERECO, TELA_LOGIN } from '../../constants/AppScreenData';
import { PERFIL_CUIDADOR, PERFIL_PACIENTE } from '../../constants/ConstantesInternas';

class DadosPessoais extends React.Component {

    tipoPerfil = 'P';

    constructor(props){
        super(props);
        console.log(props);
        this.state = {sexo: "", cpf:'', dataNascimento: null, celular: '', labelBotao: 'Próximo'};
        
        this.onChangeDataNascimento =this.onChangeDataNascimento.bind(this);

        this.tipoPerfil = this.props.navigation.state.params.tipoPerfil;
    }

    componentWillMount(){
        this.setState({labelBotao: this.tipoPerfil === PERFIL_CUIDADOR ? 'Finalizar': 'Próximo'});

    }


    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }

    onChangeCpf(text){
        this.setState({cpf: text});
    }
    onChangeDataNascimento(text){
        this.setState({dataNascimento: text});
    }
    onChangeCelular(text){
        this.setState({celular: text});
    }

    gotoNextScreen(){
        if (this.tipoPerfil === PERFIL_PACIENTE){
            this.props.navigation.navigate(TELA_ENDERECO.name);        
        } else {
            this.props.navigation.navigate(TELA_LOGIN.name);        
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
                        onChangeText={this.onChangeCpf}
                        placeholder="Digite seu CPF"
                        type={InputTextComMascara.MASK_CPF}
                    />
           
                    <InputTexto placeholder="E-mail" maxLength={40}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        autoCapitalize="none"
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTexto placeholder="Nome Completo" maxLength={60}
                        autoCapitalize="words"
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={this.onChangeCpf}
                        placeholder="Data de nascimento"
                        type={InputTextComMascara.MASK_DATA}
                    />                   


                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={this.onChangeCelular}
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