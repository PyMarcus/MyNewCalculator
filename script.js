function calculadora(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            // limpa a tela
            document.getElementById('calculado').value = ''
        }
      
        if(valor === '+' || valor === '-' || valor === '/' || valor === 'x'){
            if (valor === 'x'){
                document.getElementById('calculado').value += '*'
            }
            else{
            document.getElementById("calculado").value += valor
        }
        }
        if(valor === '='){
            vet = []
            vet.push(document.getElementById("calculado").value)
            var resultado = eval(document.getElementById('calculado').value) //funcao que exevuta a operacao de strings
            console.log(resultado)
            document.getElementById('calculado').value += valor
            document.getElementById("calculado").value = resultado
        }
        console.log(valor)
    }else if(tipo === 'valor'){
        console.log(valor)
        document.getElementById('calculado').value += valor

    }
}
