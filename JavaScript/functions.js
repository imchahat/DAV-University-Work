$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
window.sr = ScrollReveal();
sr.reveal('.quote', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.4
});
sr.reveal('.dav', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.5
});
sr.reveal('.csi', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.5
});
sr.reveal('#promo1', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.5
});
sr.reveal('#promo2', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.5
});
sr.reveal('#promo3', {
  duration: 2000,
  delay: 500,
  origin:'left',
  distance:'300px',
  viewFactor: 0.5
});
sr.reveal('#promo4', {
  duration: 2000,
  delay: 500,
  origin:'right',
  distance:'300px',
  viewFactor: 0.5
});
sr.reveal('#promo5', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.5
});
sr.reveal('#promo6', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.5
});
sr.reveal('#promo7', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.5
});
sr.reveal('#promo8', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.5
});
$(window).scroll(function(){
  if ($(document).scrollTop() > 50){  $('nav').addClass('shrink');  }
  else {  $('nav').removeClass('shrink');  }
});
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("eventInfo").innerHTML =
        this.responseText;
    }
  };
  xhttp.open("GET", "/EventInfo/day1info.html", true);
  xhttp.send();
}

function loadXMLDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("eventInfoDay2").innerHTML =
        this.responseText;
    }
  };
  xhttp.open("GET", "/EventInfo/day2info.html", true);
  xhttp.send();
}
$(function() {
  $(document).on("mousewheel", function() {
    if ($(document).scrollTop() > 2) {
      $('.circle').hide();
    } else {
      $('.circle').show();
    };
  });
});
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  $('.logo').css({
    'transform': 'translate(0px, ' + wScroll / 1.5 + 'px)'
  });
  $('.walle').css({
    'transform': 'translate(0px, -' + wScroll / 5 + 'px)'
  });
  $('.dav_logo').css({
    'transform': 'translate(0px, ' + wScroll / 1.5 + 'px)'
  });
  $('.csi_logo').css({
    'transform': 'translate(0px, ' + wScroll / 1.5 + 'px)'
  });

  /*if (wScroll > $('.top-section').offset().top) {
    console.log("hhi");
    $('.navbar-fixed').css({
      'transform': 'translateY(100px)'
    });
  }*/
})
