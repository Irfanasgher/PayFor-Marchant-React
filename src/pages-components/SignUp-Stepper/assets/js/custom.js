// Mobile Menu

jQuery(document).ready(function($){
  $(".open-menu").click(function () {
    $('body').toggleClass('noscroll');
  });
  $(".close-menu").click(function () {
    $('body').removeClass('noscroll');
    $('.header-menu').collapse('show');
  });
});

$('.nav-collapse-link').click(function(){
  $(".navbar-collapse").collapse('hide');
  $('body').removeClass('noscroll');
});

// Banner Background Video

$("#bg-video").hide()

$('.step-btn').click(function () {
  
  $("#animatedSvg").show();
  noneAnimatedSvg.remove();

  setTimeout(() => {
    
  $('.banner-bg').addClass('banner-bg-video');
  $(".banner-container").hide();
  $("#bg-video").show();
    
    setTimeout(function() { 
      scroller.update();
    }, 0);

  }, 1000);

});

$('.accrd-btn').click(function () {

  setTimeout(() => {
    
    setTimeout(function() { 
      scroller.update();
    }, 0);

  }, 500);

});


$('.step-btn').mouseenter(function () {
  $('.about-work').addClass('banner-bg-padding');
});

$('.step-btn').mouseleave(function () {
  $('.about-work').removeClass('banner-bg-padding');
});

// Login
$('.login-box').hide();
$('.sucess-mesage').hide();
$('.signin-btn').click(function () {
  $('.login-box').show();
  $('.welcome-box').hide();
});
$('#log-btn').click(function () {
  $('.sucess-mesage').hide();
  $('.logo-box').hide();
  $('.login-box').hide();
  $('.welcome-box').hide();
});

// Signup
$('.done-box').hide();
$('.sucess-mesage').hide();
$('#siginup-btn').click(function () {
  $('.done-box').show();
  $('.creat-box').hide();
});
$('#finish-btn').click(function () {
  $('.sucess-mesage').show();
  $('.done-box').hide();
  $('.creat-box').hide();
  $('.message-text').hide();
  $('.acc-wrap').addClass('create-account-bg-sucess');
  $('.acc-main-wrap').addClass('create-account-bg-sucess-wrapper');
});

// Merchant Signup
$('.merchant-sucess-mesage').hide();
$('#finish-btn').click(function () {
  $('.merchant-sucess-mesage').show();
  $('.merchant-acc-info').hide();
});


// Merchant Signin
$('.merch-forgot-box').hide();
$('.forgot-pass').click(function () {
  $('.merch-forgot-box').show();
  $('.merch-login-box').hide();
});
$('.back-to-login').click(function () {
  $('.merch-login-box').show();
  $('.merch-forgot-box').hide();
});
// Footer

$(document).ready(function($) {

  // footer accordioan
    if ($(window).width() < 767) {
       $('.nav-title').click(function () {
        $(this).parent().find('.ft-nav').toggleClass("ft-nav-show");
        $(this).parent().find('.fa-chevron-down').toggleClass("arrow-up");
        $(this).parent().siblings().find('.ft-nav').removeClass("ft-nav-show");
        $(this).parent().siblings().find('.fa-chevron-down').removeClass("arrow-up");
    });
  }
    
});

$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});

// Step Wizard Form

$(document).ready(function () {
  $('.nav-tabs > li a[title]').tooltip();
  
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

      var target = $(e.target);
  
      if (target.parent().hasClass('disabled')) {
          return false;
    }
    
  });

  $(".next-step").click(function (e) {

      var active = $('.merchant-wizard .nav-tabs li.active');
      active.next().removeClass('disabled');
      nextTab(active);

  });
  $(".prev-step").click(function (e) {

      var active = $('.merchant-wizard .nav-tabs li.active');
      prevTab(active);

  });
});

function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}

$('.nav-tabs').on('click', 'li', function() {
  $('.nav-tabs li.active').removeClass('active');
  $(this).addClass('active');
});
