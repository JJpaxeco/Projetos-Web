const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr<10) hr='0'+hr;
    if(min<10) min='0'+min;
    if(s<10) s='0'+s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

const data = setInterval(function time(){
    let dateToday = new Date();
    let di = dateToday.getDate();
    let me = dateToday.getMonth()+1;
    let an = dateToday.getFullYear();

    if(di<10) di='0'+di;
    if(me<10) me='0'+me;

    dia.textContent = di;
    mes.textContent = me;
    ano.textContent = an;
})