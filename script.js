

//responsivo
const Menu = document.querySelector('.menu')
const Bar = document.querySelector('.nav-menu')


Menu.addEventListener('click', () => {
  Menu.classList.toggle('ativo')
  Bar.classList.toggle('ativo')
})


document.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    Menu.classList.remove('ativo');
    Bar.classList.remove('ativo');
  });
});



function abrir_player_popup() {
    window.open( "https://player.hdradios.net/player-popup-responsivo/6904/7","","width=500,height=290,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=no,resizable=NO" );
                                
    }
                                
<a href="javascript:abrir_player_popup();"><img src="https://player.hdradios.net/img/icones/img-icone-player-popup.png" width="32" height="32" title="Abrir Player Pop-up" />"</a>

