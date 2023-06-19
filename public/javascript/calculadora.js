let funcionPredeterminada = () => { 
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorPorHora= document.getElementById('valorPorHora').value
        let interfazhoras= document.getElementById('interfazHoras').value
        let testinghora= document.getElementById('testinghoras').value
        let resultado= (valorPorHora*interfazhoras) + (valorPorHora*testinghora)
        document.getElementById('valorTotal').value= resultado
      })    
}
funcionPredeterminada();