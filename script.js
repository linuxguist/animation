$(".modal").click(function() {
  var animation = $(this).attr("data-animation");
  $(this).addClass(animation).delay(1000).queue(function(next) {
    $(this).removeClass(animation);
    next();
  });
});


const notes = document.querySelectorAll('.modal')

for(var i=0;i<notes.length;i++){

  notes[i].addEventListener('mouseenter',function(e) { 
      const ani = e.target.dataset.ani;
      e.target.classList.add('animated', 'infinite', ani);
    window.setTimeout(function(){
      e.target.classList.remove('animated', 'infinite', ani);
    }, 3000);
  });
}