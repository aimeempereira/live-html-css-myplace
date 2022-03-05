window.addEventListener('scroll', () => {
  // pego o menu no html e passo para o js
  const header = document.querySelector('.header-top')
  // no header vamos adicionar uma classe css quando o scroll for maior que 80, o js retira essa quando for <= 80

  header.classList.toggle('scroll-active', window.scrollY > 80)
})
