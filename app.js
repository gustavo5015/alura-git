

const preencherFormulario = (endereco) => {
    const logradouro = document.getElementById('endereco')
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const uf = document.getElementById('estado')

    logradouro.value = endereco.logradouro
    bairro.value = endereco.bairro
    cidade.value = endereco.localidade
    uf.value = endereco.uf
    console.log("git teste")

}

const pesquisarCEP = async () => {
    const cep = document.getElementById('cep').value
    if(typeof cep === 'number' && isFinite(value)) {
        const url = `https://viacep.com.br/ws/${cep}/json/`
        const dados = await fetch(url)
        const endereco = await dados.json()
        preencherFormulario(endereco)
    } else return alert('inform')
    
}

document.getElementById('cep').addEventListener('focusout', pesquisarCEP)