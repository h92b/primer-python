window.onload = () => {
  let tm=document.querySelectorAll('.txtMenu'),a,o;
	for(let i=0;i<tm.length;i++)
		a=null!=tm[i].nextElementSibling&&tm[i].nextElementSibling.textContent=='', a ? function(){
			for(let i=0;i<tm.length;i++)tm[i].style.display='none';
		}() : 0 ;;
};
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function toggleElement(element){
    element.classList.toggle('hidden');
}
function hps(a,b){
	history.pushState({page: a}, '', b);
}
function inicioFin(a){
	let j='';
	for( let o of a ){
		( '{'===o || '['===o || ']'===o || '}'===o )&&function(){
			j+=o
		}();
	}
	if( /({}|{\[]\})/ig.test( j ) ){
    document.querySelector('.context').innerHTML='';
    for(let i=0; i<imgs['img'].length;i++){
      let img = createElement('img');img.src=http+'\/\/'+host+'\/static\/img\/carousel\/'+imgs['img'][i];img.alt=imgs['img'][i];
      document.querySelector('.context').previousElementSibling.className='';
      document.querySelector('.context').className='context';
      document.querySelector('.context').appendChild( img );
    }
  }
}
function fetchData(a){
    if (validFetch){
      fetch(http+'\/\/'+host+'/api',
      {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body :  JSON.stringify({'pathname': a})
      })
      .then(response => response.text())
      .then(data => {
        /*  */
        let script;
        switch(a){
          case 'home': hps(a,'/'); document.title='Inicio';  document.querySelector('.title-context').textContent='Inicio';
            null == document.querySelector('#ujiko')&&(script = createElement('script'), script.id="ujiko", script.textContent='var imgs = ' + data + ';', document.body.appendChild(script) );
            inicioFin(data);
            break;
          case 'about': hps(a,'/about'); document.title='Sobre Mi'; document.querySelector('.title-context').textContent='Sobre Mi';
            document.querySelector('.context').innerHTML=data;
            break;
          case 'tools': hps(a,'/tools'); document.title='herramientas';  document.querySelector('.title-context').textContent='Herramientas';
            document.querySelector('.context').innerHTML=data;
            break;
          case 'hobbits': hps(a,'/hobbits'); document.title='Pasatiempos'; document.querySelector('.title-context').textContent='Pasatiempos';
            document.querySelector('.context').innerHTML=data;
            break;
          case 'acercade': hps(a,'/acercade'); document.title='Acerca De'; document.querySelector('.title-context').textContent='Acerca De';
            document.querySelector('.context').innerHTML=data;
            break;
        }
      })
      .catch(error => console.error(error));
    }
}
window.onpopstate = function(e){
	/*  */
}
window.onclick = function(e){
  e.preventDefault();
  let a,b,c=false,url=http+'\/\/'+host+'\/';
	b=function(){
    function activeBtn(a){
      let b;
      if( 'undefined' != typeof a.href&&null!=document.querySelector('li.active')&&( document.querySelector('li.active').removeAttribute('class'), a.parentElement.className='active' ));
      b = a.href;
      return b;
    }
    let a = 'undefined' != typeof e.target.href;
    a ? b = activeBtn(e.target) : 'undefined' != e.target.parentElement.href ? b = activeBtn(e.target.parentElement) : 0 ;
    return b;
  }();
  switch(b){
    case url : fetchData('home');
        break;
    case url+'about' : fetchData('about');
        break;
    case url+'tools' : fetchData('tools');
        break;
    case url+'hobbits' : fetchData('hobbits');
        break;
    case url+'acercade' : fetchData('acercade');
        break;
    default: c=true;
  }
  function fgmqi(a){
    if(null != a)'active' == a.parentElement.getAttribute('rol') ? a.parentElement.setAttribute('rol', 'disabled') : a.parentElement.setAttribute('rol', 'active') ; ;
    return a;
  }
  c=c&&function(){
    let a = void 0 !== e.target&&document.getElementsByTagName('I') || e.target&&document.getElementsByTagName('A');
    a ? 'A' === e.target.tagName&&null!=e.target.nextElementSibling.className ? b = fgmqi(e.target.nextElementSibling) : b = fgmqi(e.target.parentElement.nextElementSibling) ? b = fgmqi(e.target.parentElement.nextElementSibling) : 0 : 0 ;
    if(void 0 != b){
      return b;
    }else{
      return false;
    }
  }();
	if(c){
		c.classList.toggle('active');
	}
}