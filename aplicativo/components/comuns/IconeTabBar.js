import { Icon } from "native-base";
import React from "react";
import { BRANCO } from "../../assets/estilos/estilos";

export default IconeTabBar = ({iconName, tamanho =24, cor=BRANCO}) => {
    return <Icon
            name={iconName}
            style={{color: cor}}
            size={tamanho}
        />
};