document.addEventListener('DOMContentLoaded', function() {

  const navbar = document.querySelector('nav');
  const articleImg = document.querySelector('article img');
  const articleContent = document.querySelector('article p');
  const aside = document.querySelector('aside');
  window.addEventListener('scroll', function() {

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > navbar.offsetTop) {

      navbar.classList.add('fixed');

    } else {
      navbar.classList.remove('fixed');

    }

  });
  articleContent.style.marginRight = `${articleImg.offsetWidth + 20}px`;

  aside.style.height = `${document.querySelector('.photos').offsetHeight}px`;
})
