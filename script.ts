const links = document.querySelectorAll('.link');

links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    console.log(link.href);
  }
})