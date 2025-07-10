function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("nav-active");
}

var target_date = new Date("september 7, 2025").getTime();
var dias, horas, minutos, segundos;
//var regressiva = document.getElementById("regressiva");

setInterval(function () {
  var current_date = new Date().getTime();
  var segundos_f = (target_date - current_date) / 1000;
  
  dias = parseInt(segundos_f / 86400);
  segundos_f = segundos_f % 86400;
    
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dia').innerHTML = dias;
document.getElementById('hora').innerHTML = horas;
document.getElementById('minuto').innerHTML = minutos;
document.getElementById('segundo').innerHTML = segundos;
  

}, 1000);

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

 function copiarPix() {
    const codigoPix = '00020126850014BR.GOV.BCB.PIX013615df05cc-89dc-4802-be16-74530ef1979c0223Obrigada pelo presente!5204000053039865802BR5925Eliza Maria Souza de Fari6009SAO PAULO62140510lpKxqvXya063049AE6';
    
    navigator.clipboard.writeText(codigoPix)
      .then(() => {
        alert("Código PIX copiado com sucesso!");
      })
      .catch(err => {
        alert("Erro ao copiar o código. Tente novamente.");
        console.error('Erro ao copiar:', err);
      });
  }

// Inicialmente esconde
backToTop.style.display = 'none';