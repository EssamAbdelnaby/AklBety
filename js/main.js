$(function () {
  'use strict';
  // Adjust Slider Height
  var winH    = $(window).height(),
      upperH  = $('.upper-bar').innerHeight(),
      navH    = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH - ( upperH + navH ));

  // Featured Work Shuffle
  $('.featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-imgs .col-md').css('opacity', 1);
    } else {
      $('.shuffle-imgs .col-md').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });

});

 
var itemCount = 0;
var priceTotal = 0;

// Add Item to Cart
$('.add').click(function (){
  itemCount ++;

  $('#itemCount').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem">Remove Item</button>');

  // Calculate Total Price
  var price = parseInt($(this).siblings().find('.price').text()); 
  priceTotal += price;
  $('#cartTotal').text("Total: €" + priceTotal);
}); 



// Hide and Show Cart Items
$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
});

// Remove Item From Cart
$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();  
  itemCount --;
  $('#itemCount').text(itemCount);

  // Remove Cost of Deleted Item from Total Price
  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal -= price;
  $('#cartTotal').text("Total: €" + priceTotal);

  if (itemCount == 0) {
    $('#itemCount').css('display', 'none');
  }
});

//Search
$('.search-toggle').addClass('closed');

$('.search-toggle .search-icon').click(function(e) {
  if ($('.search-toggle').hasClass('closed')) {
    $('.search-toggle').removeClass('closed').addClass('opened');
    $('.search-toggle, .search-container').addClass('opened');
    $('#search-terms').focus();
  } else {
    $('.search-toggle').removeClass('opened').addClass('closed');
    $('.search-toggle, .search-container').removeClass('opened');
  }
});

$(document).ready(function () {


  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('.profile-pic').attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };


  $(".file-upload").on('change', function () {
    readURL(this);
  });

  $(".upload-button").on('click', function () {
    $(".file-upload").click();
  });
});


//Start Chat
      hideChat(0);

$('#prime').click(function () {
  toggleFab();
});


//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('fa-envelope-o');
  $('.prime').toggleClass('zmdi-close');
  $('.prime').toggleClass('is-active');
  $('.prime').toggleClass('is-visible');
  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');

}

$('#chat_first_screen').click(function (e) {
  hideChat(1);
});

$('#chat_second_screen').click(function (e) {
  hideChat(2);
});

$('#chat_third_screen').click(function (e) {
  hideChat(3);
});

$('#chat_fourth_screen').click(function (e) {
  hideChat(4);
});

$('#chat_fullscreen_loader').click(function (e) {
  $('.fullscreen').toggleClass('zmdi-window-maximize');
  $('.fullscreen').toggleClass('zmdi-window-restore');
  $('.chat').toggleClass('chat_fullscreen');
  $('.fab').toggleClass('is-hide');
  $('.header_img').toggleClass('change_img');
  $('.img_container').toggleClass('change_img');
  $('.chat_header').toggleClass('chat_header2');
  $('.fab_field').toggleClass('fab_field2');
  $('#chat_fullscreen').css('display', 'block');
});

function hideChat(hide) {
  if (hide === true) {
      $('.chat_fullscreen_loader').css('display', 'block');
      $('#chat_fullscreen').css('display', 'block');}

}