alert("BEM VINDO")
function contar() {
let ini = document.getElementById("txti")
let fim =  document.getElementById("txtf")
let passo = document.getElementById("txtp")
let res = document.getElementById('res')


 if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
    res.innerHTML = 'Impossível contar!'
    window.alert("ERRO! FALTA VALORES")
    
 } else {
  res.innerHTML = 'Contando: '
  let i = Number (ini.value)
  let f = Number (fim.value)
  let p = Number (passo.value)
  if (p <= 0) {
    window.alert("Passo invalido! Considerando PASSO 1")
  }
 if( i < f ) {
    // contagem crescente
  for( let c = i; c<= f; c += p) {
    res.innerHTML += `${c} \u{1F449}` // \u{1F44B} é o emoji de mão acenando

    }
     
   } else {
    // contagem decrescente
    for(let c = i; c>= f; c -= p){
        res.innerHTML +=  `${c} \u{1F449}` // \u{1F44B} é o emoji de mão acenando
        }
   }
     res.innerHTML += `\u{1F3C1}` // \u{1F3C1} é o emoji de bandeira de chegada
  }
}