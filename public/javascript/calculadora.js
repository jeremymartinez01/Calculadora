let funcionPredeterminada = () => { 
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorPorHora= document.getElementById('valorPorHora').value
        let valorPorHoraExtra= document.getElementById('valorPorHoraExtra').value
        let interfazhoras= document.getElementById('interfazHoras').value
        let testinghora= document.getElementById('testinghoras').value
        let cantidadhorasextra= document.getElementById('horasextras').value
        let resultado= (valorPorHora*interfazhoras) + (valorPorHora*testinghora) + (valorPorHoraExtra*cantidadhorasextra)
        document.getElementById('valorTotal').value= resultado
      })    
}
funcionPredeterminada();