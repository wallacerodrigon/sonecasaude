export default class Validador {

     corObjErro = '#EBEBEB';
     corObjNormal = '#FFFFFF';


     verificaCpfCnpj( valor )  {
 
            if (! valor){
                return '';
            }
           
            // Remove caracteres inválidos do valor
            valor = this.mantemSomenteNumeros(valor);
        
            // Verifica CPF
            if ( valor.length === 11 ) {
                return 'CPF';
            } 
            
            // Verifica CNPJ
            else if ( valor.length === 14 ) {
                return 'CNPJ';
            } 
            
            // Não retorna nada
            else {
                return null;
            }
    
    } // verificaCpfCnpj    

    /*
    calc_digitos_posicoes
    
    Multiplica dígitos vezes posições
    
    @param string digitos Os digitos desejados
    @param string posicoes A posição que vai iniciar a regressão
    @param string soma_digitos A soma das multiplicações entre posições e dígitos
    @return string Os dígitos enviados concatenados com o último dígito
    */
     calc_digitos_posicoes( digitos, posicoes = 10, soma_digitos = 0 ) {
    
        // Garante que o valor é uma string
        digitos = digitos.toString();
    
        // Faz a soma dos dígitos com a posição
        // Ex. para 10 posições:
        //   0    2    5    4    6    2    8    8   4
        // x10   x9   x8   x7   x6   x5   x4   x3  x2
        //   0 + 18 + 40 + 28 + 36 + 10 + 32 + 24 + 8 = 196
        for ( let i = 0; i < digitos.length; i++  ) {
            // Preenche a soma com o dígito vezes a posição
            soma_digitos = soma_digitos + ( digitos[i] * posicoes );
    
            // Subtrai 1 da posição
            posicoes--;
    
            // Parte específica para CNPJ
            // Ex.: 5-4-3-2-9-8-7-6-5-4-3-2
            if ( posicoes < 2 ) {
                // Retorno a posição para 9
                posicoes = 9;
            }
        }
    
        // Captura o resto da divisão entre soma_digitos dividido por 11
        // Ex.: 196 % 11 = 9
        soma_digitos = soma_digitos % 11;
    
        // Verifica se soma_digitos é menor que 2
        if ( soma_digitos < 2 ) {
            // soma_digitos agora será zero
            soma_digitos = 0;
        } else {
            // Se for maior que 2, o resultado é 11 menos soma_digitos
            // Ex.: 11 - 9 = 2
            // Nosso dígito procurado é 2
            soma_digitos = 11 - soma_digitos;
        }
    
        // Concatena mais um dígito aos primeiro nove dígitos
        // Ex.: 025462884 + 2 = 0254628842
        return digitos + soma_digitos;
        
    } // calc_digitos_posicoes
    
    /*
    Valida CPF
    
    Valida se for CPF
    
    @param  string cpf O CPF com ou sem pontos e traço
    @return bool True para CPF correto - False para CPF incorreto
    */
     validaCPF( valor ) {
        if (valor){
                // Remove caracteres inválidos do valor
                valor = this.mantemSomenteNumeros(valor);

                // Captura os 9 primeiros dígitos do CPF
                // Ex.: 02546288423 = 025462884
                let digitos = valor.substr(0, 9);
            
                // Faz o cálculo dos 9 primeiros dígitos do CPF para obter o primeiro dígito
                let novo_cpf = this.calc_digitos_posicoes( digitos );
            
                // Faz o cálculo dos 10 dígitos do CPF para obter o último dígito
                novo_cpf = this.calc_digitos_posicoes( novo_cpf, 11 );
            
                // Verifica se o novo CPF gerado é idêntico ao CPF enviado
                if ( novo_cpf === valor ) {
                    // CPF válido
                    return true;
                } else {
                    // CPF inválido
                    return false;
                }
        } else {
            return false;
        }

        
        
    } // validaCPF
    
    /*
    validaCNPJ
    
    Valida se for um CNPJ
    
    @param string cnpj
    @return bool true para CNPJ correto
    */
     validaCNPJ( valor ) {

        if (! valor){
            return true;
        }
        // Garante que o valor é uma string
        
        // Remove caracteres inválidos do valor
        valor = this.mantemSomenteNumeros(valor);

    
        
        // O valor original
        let cnpj_original = valor;
    
        // Captura os primeiros 12 números do CNPJ
        let primeiros_numeros_cnpj = valor.substr( 0, 12 );
    
        // Faz o primeiro cálculo
        let primeiro_calculo = this.calc_digitos_posicoes( primeiros_numeros_cnpj, 5 );
    
        // O segundo cálculo é a mesma coisa do primeiro, porém, começa na posição 6
        let segundo_calculo = this.calc_digitos_posicoes( primeiro_calculo, 6 );
    
        // Concatena o segundo dígito ao CNPJ
        let cnpj = segundo_calculo;
    
        // Verifica se o CNPJ gerado é idêntico ao enviado
        if ( cnpj === cnpj_original ) {
            return true;
        }
        
        // Retorna falso por padrão
        return false;
        
    } // validaCNPJ
    
    /*
    validaCPF_cnpj
    
    Valida o CPF ou CNPJ
    
    @access 
    @return bool true para válido, false para inválido
    */
     validaCPF_cnpj ( valor ) {
    
        // Verifica se é CPF ou CNPJ
        let valida = this._verificaCpfCnpj( valor );
        
        // Remove caracteres inválidos do valor
        valor = this.mantemSomenteNumeros(valor);

    
    
        // Valida CPF
        if ( valida === 'CPF' ) {
            // Retorna true para cpf válido
            return this.validaCPF( valor );
        } 
        
        // Valida CNPJ
        else if ( valida === 'CNPJ' ) {
            // Retorna true para CNPJ válido
            return this.validaCNPJ( valor );
        } 
        
        // Não retorna nada
        else {
            return false;
        }
        
    } // validaCPF_cnpj
    
    /*
    formata_cpf_cnpj
    
    Formata um CPF ou CNPJ
    
    @access 
    @return string CPF ou CNPJ formatado
    */
     formata_cpf_cnpj( valor )  {
    
        // O valor formatado
        let formatado = '';
        
        // Verifica se é CPF ou CNPJ
        let valida = this._verificaCpfCnpj( valor );
    
        // Garante que o valor é uma string
        valor = valor.toString();
        
        // Remove caracteres inválidos do valor
        valor = this.mantemSomenteNumeros(valor);

    
    
        // Valida CPF
        if ( valida === 'CPF' ) {
        
            // Verifica se o CPF é válido
            if ( this.validaCPF( valor ) ) {
            
                // Formata o CPF ###.###.###-##
                formatado  = valor.substr( 0, 3 ) + '.';
                formatado += valor.substr( 3, 3 ) + '.';
                formatado += valor.substr( 6, 3 ) + '-';
                formatado += valor.substr( 9, 2 ) + '';
                
            }
            
        }
        
        // Valida CNPJ
        else if ( valida === 'CNPJ' ) {
        
            // Verifica se o CNPJ é válido
            if ( this.validaCNPJ( valor ) ) {
            
                // Formata o CNPJ ##.###.###/####-##
                formatado  = valor.substr( 0,  2 ) + '.';
                formatado += valor.substr( 2,  3 ) + '.';
                formatado += valor.substr( 5,  3 ) + '/';
                formatado += valor.substr( 8,  4 ) + '-';
                formatado += valor.substr( 12, 14 ) + '';
                
            }
            
        } 
    
        // Retorna o valor 
        return formatado;
        
    } // formata_cpf_cnpj

     mantemSomenteNumeros(texto) {
        if (texto && texto.trim().length > 0){
            return texto.replace(/[^0-9]/g, '');
        } else {
            return null;
        }
    }



     isDataValida(dataString) {
        let dadosData = dataString.split("/");
        let dia= Number.parseInt(dadosData[0]);
        let mes= Number.parseInt(dadosData[1]);
        let ano= Number.parseInt(dadosData[2]);

        if (dia < 1 || dia > 31){
            return false;
        } else if (mes < 1 || mes > 12){
            return false;
        } else if (ano < 1900){
            return false;
        } 

        let ok = true;
        if (ano % 4 === 0 && mes == 2 && dia > 29){
            ok = false;
        } else if (ano %4 != 0 && mes === 2 && dia > 28){
            ok = false;
        } 

        if ( (mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30){
            ok = false;
        }

        return ok;

    }


     ltrim(str)
    {
        // create a string that holds all possible white space values..
        let whitespace = new String(" \t\n\r");

        // create a String object from our value
        let s = str;
        
        if (whitespace.indexOf(s.charAt(0)) != -1) {
            var j=0, i = s.length;
            
            while (j < i && whitespace.indexOf(s.charAt(j)) != -1) { j++; }
                
            s = s.substring(j, i);
            }
        
        return s;
    }

     isPreenchido(texto) {
        return texto && texto.trim().length > 0;
    }

     isDataPosterior(dataValidar, dataBase){
        return dataValidar && dataBase && dataValidar > dataBase;
    }
    
    isEmailValido(email){
        let dados = email.split('@');

        if (dados.length != 2){
            return false;
        }

        if (email.trim().indexOf(' ') > -1){
            return false;
        }

        if (dados[1].indexOf('.') === -1){
            return false;
        }

        return true;

    }
  
    isTelefoneValido(numero){
        let numeros = this.mantemSomenteNumeros(numero);
        if (numeros.length === 10 || numeros.length === 11){
            return true;
        }
        return false;
    }

    validaCEP(numero){
        let somenteNumeros = this.mantemSomenteNumeros(numero);
        return somenteNumeros.length === 8;
    }

}