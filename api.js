const axios = require('axios').default
const fs = require('fs');

const cep = 15707190 // seu cep

module.exports = (req, res, next) => {

    const viacep = (async()=>{
        const { data } = await axios(`https://viacep.com.br/ws/${cep}/json`)
    
        fs.writeFile('endereco.json', JSON.stringify(data,null, 2),err =>{
            if(err) throw new Error('algo está errado')
            console.log('tudo certo')
        })
    
    })();

    next()

}
