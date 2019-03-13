import { Body, CardItem, Container, Left, List, ListItem, Thumbnail, Label, Icon, Radio, DatePicker } from 'native-base';
import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text, Switch } from 'react-native';
import { Card, ButtonGroup } from 'react-native-elements';
import EstilosComuns, { BRANCO, FUNDO_ESCURO, FUNDO, VERDE } from '../../assets/estilos/estilos';
import { TELA_PRESCRICAO } from '../../constants/AppScreenData';
import PrescricaoAlternada from './PrescricaoAlternada';
import PrescricaoDiaria from './PrescricaoDiaria';
import {InputTexto} from "../../components/input/InputTexto";
import { BotaoToggle, BotaoOpacity } from '../../components/botao/Botao';
import ConfirmacaoSwitch from '../../components/radio/ConfirmacaoSwitch';

const imgRemedio = require('../../assets/img/losartana.jpeg');

export default class PrescricaoMedicamento extends React.Component {
    static navigationOptions = {
        title: TELA_PRESCRICAO.title,
        headerRight: null
      };
    
    constructor(props){
        super(props);

        this.state = {email: '', filtro: '', usoContinuo: true}
        this.toggleUsoContinuo = this.toggleUsoContinuo.bind(this);
    }


    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }

    renderComponentePeriodo(){
        let {sigla} = this.props.navigation.state.params;
        if (sigla === 'A'){
            return (
                <View>
                    <Text style={EstilosComuns.corVerde} >Dias da semana do medicamento</Text>
                    {this.renderButtonGroup(['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'], [2,3,4])}
                    <Text>Horários</Text>
                    {this.renderRadioHorarios()}
                </View>   
            )
        } else {
            return (
                <View>
                    <Text style={EstilosComuns.corVerde} >O medicamento será tomado a cada quantos dias?</Text>
                    {this.renderButtonGroup(['2', '4', '6', '8', '10', '15', (<Icon name='calendar'/>) ], [3], false)}
                </View>   
            )
        }
    }

    renderButtonGroup(buttons, selectedIndexes, selectMultiple=true) {
        return <ButtonGroup style={{width: '100%'}}
                //onPress={this.updateIndex}
                selectedIndexes={selectedIndexes}
                buttons={buttons}
                selectedTextStyle={color= VERDE}
                //containerBorderRadius={6}
                selectMultiple={selectMultiple}
                
    />
    }

    renderRadioHorarios() {
        return (
            <View style={styles.containerPeriodicidade}>
                <View style={styles.radioGroup}>
                    <Text>Com Intervalos</Text>
                    <Radio selected={true} selectedColor={VERDE}/>
                </View>

                <View style={styles.radioGroup}>
                    <Text>Livre</Text>
                    <Radio selected={false} selectedColor={VERDE}/>
                </View>

            </View> 
            )

    }

    tratarFiltro(text) {
        this.setState({filtro: text})
    }

    toggleUsoContinuo(){
        this.setState({usoContinuo: !this.state.usoContinuo});
    }

    onChangeDataNascimento(){

    }

    renderPeriodos(){
        return this.state.usoContinuo ? null:
          (
            <View style={{flexDirection: 'column', justifyContent: 'flex-start' }} >
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems:'stretch'}} >
                    <Label style={EstilosComuns.corVerde} >Data início:</Label>
                    <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(1900, 1, 1)}
                            locale={"pt-BR"} //ver em portugues
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            onDateChange={this.onChangeDataNascimento}
                            disabled={false}
                            textStyle={{ color: VERDE, borderWidth: 1, borderColor: FUNDO }}
                            />                
    
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                    <Label style={EstilosComuns.corVerde} >Data fim:</Label>
                    <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(1900, 1, 1)}
                            locale={"pt-BR"} //ver em portugues
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            onDateChange={this.onChangeDataNascimento}
                            disabled={false}
                            textStyle={{ color: VERDE, borderWidth: 1, borderColor: FUNDO }}
                            />                
    
                </View>
            </View>
          )
    }

    render() {
        let {medicamento} = this.props.navigation.state.params;
        return (
            <KeyboardAvoidingView style={[EstilosComuns.container, {paddingTop: 5, paddingBottom: 5}]} keyboardVerticalOffset={70} behavior="padding" >
                <ScrollView style={[styles.containerMain]}>
                        <Card>
                            <CardItem cardBody style={{flexDirection: 'row', padding: 5, justifyContent: 'flex-start'}} >
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                                    <Thumbnail circular source={imgRemedio} />
                                </View>

                                <View style={{flex: 5, paddingLeft: 5}}>
                                    <Text style={EstilosComuns.negrito}>{medicamento.nomeMedicamento}</Text>
                                    <Text note numberOfLines={1} >{medicamento.principioAtivo}</Text>
                                    <Text note numberOfLines={1}>{medicamento.detalhes}</Text>
                                </View>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody style={{flexDirection: 'column', padding: 3}}>
                                    {this.renderComponentePeriodo()}
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <View style={styles.containerBusca}>
                                    <View style={{flex: 9}}>
                                        <InputTexto placeholder="Pesquise por um médico" maxLength={40}
                                            onChangeInput={texto => this.tratarFiltro(texto)}
                                            autoCapitalize="none"
                                        />                    
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Icon name="search" color={BRANCO} size={25} />
                                    </View>
                                </View>


                            </CardItem>
                        </Card>


                        <Card>
                            <CardItem cardBody style={{flexDirection: 'column', padding: 3, justifyContent: 'flex-start'}}>
                                <Label style={[EstilosComuns.corVerde, {textAlign: 'left'}]}>Prazo do tratamento</Label>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.cardContinuoLeft} >Uso contínuo?</Text>
                                    <ConfirmacaoSwitch style={styles.cardContinuoRight} value={this.state.usoContinuo} toggleSwitch={this.toggleUsoContinuo}/>
                                </View>

                                {this.renderPeriodos()}
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                                <Label style={[EstilosComuns.corVerde, {textAlign: 'left'}]}>Horários</Label>
                                
                                <View>
                                    <Text>Horários....</Text>
                                </View>
                                 
                                <View>
                                    <BotaoOpacity tituloBotao="Adicionar" onClick={() => null} />
                                </View>

                            </CardItem>
                        </Card>
                </ScrollView>

                {/* <View style={[EstilosComuns.rodape, {backgroundColor:'black'}]}>
                    <Botao style={styles.botaoEnviar} tituloBotao='Salvar medicamento' onClick={() =>  this.props.navigation.navigate(TELA_CADASTRO_MEDICAMENTO.name)}/>
                </View> */}
            </KeyboardAvoidingView>
        )
    };
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 9,
        flexDirection: 'column',
    },

    containerBusca: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: FUNDO_ESCURO
    },

    card: {
        borderColor: FUNDO,
        backgroundColor: BRANCO,
        borderBottomWidth: 1
    },

    containerPeriodicidade: {
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        padding: 3,
        color: VERDE
    },
    radioGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: VERDE

    },
    cardContinuoLeft: {
        flex: 8
    },

    cardContinuoRight: {
        flex: 2
    }

 

})