telefone.onblur = function(){
    if (this.value.length < 11){
        erros1.innerHTML = '<p>Verifique o número de telefone</p>'
        this.style.backgroundColor = 'red';
    }else{
        this.style.backgroundColor = 'white';
    }
};

aperitivo = document.getElementById('aperit')
aperitivo.onchange = function(){
    this.checked ? alert("Ok, vou providenciar!") : alert('Até a próxima');
};