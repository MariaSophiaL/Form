function Coletar(){
    let input = document.querySelector('.input-cep').value
  console.log(input)
   dados(input)
}
async function dados(input){
let dados= await fetch(`https://viacep.com.br/ws/${input}/json/`).then(Response=>Response.json())
console.log(dados)
ExibirDados(dados)
}

function ExibirDados(dados){
    document.querySelector('.Estado').value = dados.uf
    document.querySelector('.Cidade').value = dados.localidade
    document.querySelector('.Endereco').value = dados.logradouro
}

const form = document.querySelector('form')
const submit = document.querySelector('button[type="submit"]')

form.addEventListener('kaydown',function(e){
    if(e.key ==='Enter' && !e.shiftKey){
        e.preventDefault()
        submit.click()
    }

})