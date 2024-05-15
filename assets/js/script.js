$(document).ready(function () {

  var btn = $('#top_scroll');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });


  $('.check_room').click(function () {
    $('.room_number').toggleClass('open close');
  })
  $('.check_room2').click(function () {
    $('.room_number2').toggleClass('open close');
  })








  $('#room_slider').owlCarousel({
    loop: false,
    items: 2,
    nav: false,
    dots: false,
    margin: 40,
  })
  $('#testi').owlCarousel({
    loop: true,
    items: 1,
    nav: false,
  })
  $('#follow_slider').owlCarousel({
    loop: false,
    nav: true,
    items: 4,
    dots: false,
    mouseDrag: false,
    slideTransition: 'linear',
  })



  $('.review_testi').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 3,
    mouseDrag: false,
  })

  $('#review_slider').owlCarousel({
    loop: false,
    nav: false,
    items: 1,
    mouseDrag: false
  })

  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  setTimeout(function () {
    $('.pre_loader').fadeOut();
  }, 3000);



  $("#startDate, #endDate").daterangepicker(
    {},
    function (start, end, label) {
      let startDate = start.format("YYYY-MM-DD").toString();
      let endDate = end.format("YYYY-MM-DD").toString();

      document.getElementById("startDate").innerHTML =
        "Start date: " + startDate;
      document.getElementById("endDate").innerHTML = "End date: " + endDate;

    }
  );





  
  
  $(window).scroll(function () {
  var sticky = $('.sticky'),
    scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});



var counted = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
        $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
      
      {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }
          
        });
      });
      counted = 1;
    }
    
    
  });
  
})
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  document.getElementById('r_count').innerHTML = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    document.getElementById('r_count').innerHTML = value;
  }
}


function increaseAdu(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  document.getElementById('re_count').innerHTML = value;
}

function decreaseAdu(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 0) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    document.getElementById('re_count').innerHTML = value;
  }
}
function increaseChi(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  document.getElementById('ree_count').innerHTML = value;
}

function decreaseChi(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 0) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    document.getElementById('ree_count').innerHTML = value;
  }
}