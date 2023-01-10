const image = document.getElementById('test');

image.addEventListener('click', function() {
  this.classList.toggle('rotated');
  const victim = document.getElementsByClassName('content')[0];
  victim.classList.toggle('contentwrap');
});



  






