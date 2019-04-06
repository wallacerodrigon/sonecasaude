import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import { VERDE, FUNDO_CINZA_CLARO } from "../../assets/estilos/estilos";

export default Loading = (bolAtivo) => {
    return bolAtivo ?
            <View style={styles.loading}>
                <ActivityIndicator size="large" color={VERDE}/>
            </View>
            : null
}

const styles= StyleSheet.create({
    loading: {
        flex : 1,
        backgroundColor: FUNDO_CINZA_CLARO,
        justifyContent: 'center',
        alignItems: 'center'
    }
})