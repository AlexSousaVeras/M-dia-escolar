function calcular(){
    var m = document.getElementById('mediaEs').value;

    let n1 = document.getElementById('nota1').value;
    let n2 = document.getElementById('nota2').value;
    let n3 = document.getElementById('nota3').value;

    var M = parseFloat(m);

    let x = parseFloat(n1);
    let y = parseFloat(n2);
    let z = parseFloat(n3);
        
    let media = x + y + z;
    let media1 = media/3;
    let diferença = M - media1;
    
    if (media1 >= M){
        document.getElementById('resultado').innerText = 'Sua média foi: ' + media1 +', meus parabéns você está na média!';
        return false;
    }

    else {
        document.getElementById('resultado').innerText = 'Sua média foi: ' + media1 +', você precia de ' + diferença + ' pontos para está na média!';
        return false;
    }

    }
