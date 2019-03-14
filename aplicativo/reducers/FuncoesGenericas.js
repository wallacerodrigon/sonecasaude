export const alterarState = (state, fieldName, valor)=> {
    return {...state, [fieldName]: valor};
}