import {AsyncStorage} from 'react-native';

export const atualizarValoresNaStorage = async (key, valores) => {
    try {
        await AsyncStorage.setItem(key, valores);
    } catch (error) {
        console.log(error)
    }
}

export const getValoresStorage = async (key) => {
    try {
        const dadosStorage = await AsyncStorage.getItem(key);
        return dadosStorage;
    } catch (error) {
        console.log(error)
    }
}

export const limparStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log(error)
    }
}