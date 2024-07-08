function calcular(){
    var m = document.getElementById('mediaEs').value;

    let n1 = document.getElementById('nota1').value;
    let n2 = document.getElementById('nota2').value;
    let n3 = document.getElementById('nota3').value;
    let n4 = document.getElementById('nota4').value;

    var M = parseFloat(m);

    let w = parseFloat(n1);
    let x = parseFloat(n2);
    let y = parseFloat(n3);
    let z = parseFloat(n4);
        
    let media = w + x + y + z;
    let media1 = media/4;
    let diferença = M - media1;
    
    if (media1 >= M){
        document.getElementById('resultado').innerText = 'Sua média foi: ' + media1 +', meus parabéns você está na média!';
    }

    else {
        document.getElementById('resultado').innerText = 'Sua média foi: ' + media1 +', você precisa de ' + diferença + ' pontos para está na média!';
    }
    return false;
    }
