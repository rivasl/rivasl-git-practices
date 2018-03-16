addEventListener('load',initEvent,false);

function initEvent()
{
  var ob=document.getElementById('Button');
  ob.addEventListener('click',onClickButton,false);
}

function onClickButton(e)
{
  var cadena='{'+
                '"microprocesador":"pentium",' +
                '"memoria":1024,' +
                '"discos":[80,250]' +
             '}';
  var maquina=JSON.parse(cadena);

  alert('microprocesador:'+maquina.microprocesador);
  alert('Memoria ram:'+maquina.memoria);
  alert('Capacidad disco 1:'+maquina.discos[0]);
  alert('Capacidad disco 2:'+maquina.discos[1]);
}
