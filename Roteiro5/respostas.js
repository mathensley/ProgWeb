/**
 * QUESTÃO 01
 */
const dono = {
    "proprietario": "Silvio Santos",
    "endereco": {
        "cep":'hacked, pay to recover',
        "logradouro": 'hacked, pay to recover',
        "complemento": 'hacked, pay to recover',
        "bairro": 'hacked, pay to recover',
        "localidade": 'hacked, pay to recover',
        "uf": '',
        "geo": {
            "lat": "-23.61919020307765",
            "lng": "-46.70793551534256"
        }
    }
}
const http = require('https')
const getEndereco = cep => {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

getEndereco('05650000').then(saida => {
    dono.endereco.cep = saida.cep
    dono.endereco.logradouro = saida.logradouro
    dono.endereco.complemento = saida.complemento
    dono.endereco.bairro = saida.bairro
    dono.endereco.localidade = saida.localidade
    dono.endereco.uf = saida.uf
    console.log(`${dono.proprietario} - ${dono.endereco.cep} - ${dono.endereco.bairro}, ${dono.endereco.localidade} (${dono.endereco.geo.lat}, ${dono.endereco.geo.lng})`)
})

/**
 * QUESTÃO 02
 */
const entregaTcc = (entrega, final) => {
    if (entrega > 0 && entrega < 25 && final > 0 && final < 25) {
        if ((final - entrega) > 3) {
            console.log("Muito bem! O aluno está apto a apresentar até o natal!")
        } else {
            console.log("O trabalho está muito ruim!")
            if (final + 2 > 24) {
                console.log("Não deu! Só no próximo ano agora!")
            } else {
                console.log("TCC Apresentado!")
            }
        }
    } else {
        console.log("Eu odeio o prof. Florovsky!")
    }
}

entregaTcc(13, 19)
entregaTcc(22, 23)
entregaTcc(21, 22)

/**
 * QUESTÃO 03
 */
const colocarTodasLetrasEmMaiusculoEm500ms = entrada => {
    return new Promise((resolve, reject) => {
        if (typeof entrada === 'string') {
            setTimeout(() => {
                resolve(entrada.toUpperCase())
            }, 500)
        } else {
            reject("Entrada inválida!")
        }
    })
}

const inverteTexto = entrada => {
    colocarTodasLetrasEmMaiusculoEm500ms(entrada).then(retorno => {
        console.log(retorno.split('').reverse().join(''))
    }).catch(e => console.error(e))
}

inverteTexto("texto")
inverteTexto("123")
inverteTexto(123)

/**
 * QUESTÃO 04
 */
const inverteTextoAsync = async(entrada) => {
    try {
        let retorno = await colocarTodasLetrasEmMaiusculoEm500ms(entrada)
        console.log(retorno.split('').reverse().join(''))
    } catch (e) {
        console.error(e)
    }
}

inverteTextoAsync("texto")
inverteTextoAsync(123)

/**
 * QUESTÃO 05
 */
const crypto = require('crypto');

// Criptografia de dados
const criptografarMensagem = (texto, chaveSecreta) => {
    const algorithm = 'aes-256-cbc';
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(chaveSecreta), iv);
    let encrypted = cipher.update(texto, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    // Retorna o IV junto com o texto criptografado
    return `${iv.toString('hex')}:${encrypted}`;
}

// Função para descriptografar dados
const decritografar = (textoCriptografado, chaveSecreta) => {
    const algorithm = 'aes-256-cbc';
    const [ivHex, encrypted] = textoCriptografado.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(chaveSecreta), iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const processarNumeros = (numeros, callbackFunction) => {
    const filtraPar = num => num % 2 == 0
    let novaLista = numeros.filter(filtraPar)
    callbackFunction(novaLista.map(par => criptografarMensagem(par.toString(), "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5pp")))
}

processarNumeros([1, 2, 3, 4, 5, 6], retorno => {
    console.log(retorno)
    console.log(retorno.map(valor => Number(decritografar(valor, "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5pp"))))
})
