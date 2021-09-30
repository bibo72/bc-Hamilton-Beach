
  // WAIT FUNCTION FOR ELEMENT TO POPULATE
  function waitForElement(elementPath, callBack){
    window.setTimeout(function(){
      if($(elementPath).length){
        callBack(elementPath, $(elementPath));
      }else{
        waitForElement(elementPath, callBack);
      }
    },250)
  }

// <!-- GET CURRENT YEAR FOR COPYRIGHT -->
if ($("#copyright_year")[0]) {
  document.getElementById("copyright_year").innerHTML = new Date().getFullYear();
}

// <!-- CUSTOM SIDECATEGORY MENU -->
$('#side-categories .navPages-action.has-subMenu').each(function() {
  $('<span class="down-arrow"><i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span></span>').insertAfter(this);
});
$('.main-nav-container .category-list .navPage-subMenu.navPage-subMenu-horizontal .navPages-action.has-subMenu').each(function() {
  $('<span class="down-arrow"><i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span></span>').insertAfter(this);
});
$('.main-nav-container .page-list .navPage-subMenu.navPage-subMenu-horizontal .navPages-action.has-subMenu').each(function() {
  $('<span class="down-arrow"><i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span></span>').insertAfter(this);
});
$('.mobile-menu.navPages-container .navPages-action.has-subMenu').each(function() {
  $('<span class="down-arrow"><i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span></span>').insertAfter(this);
});


$( "span.down-arrow" ).on ('click', function() {
  $(this).closest('li').toggleClass('active');
  $(this).next('div.navPage-subMenu').toggleClass('sub-category-visible').slideToggle(150);
  $('<div class="clear"></div>').insertAfter('.Left #SideCategoryList .sf-menu ul li ul');

  // if ( $(this).closest('li.navPages-item').hasClass('active') ) {
  //     $(this).html('<i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span>');
  // } else ( $(this).html('<i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span>') );

});

$(document).ready(function($){
$("span.down-arrow").on ('click', function() {
  $(this).prev('a').toggleClass('active');
  // if ( $(this).prev('a').hasClass('active') ) {
  //   $(this).html('<i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span>');
  // } else ( $(this).html('<i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span>')
  // );
});
});

$('#menu .navPage-subMenu li a i').on ('click', function(event) {
 event.preventDefault();
 $(this).next('ul#navPages-').toggleClass('sub-category-visible').slideToggle(150);
});


$( "#side-categories.alternate-sidenav.navPage-subMenu span.down-arrow" ).on ('click', function() {
  $(this).closest('li').toggleClass('active');
  $(this).next('ul.navPage-childList').toggleClass('sub-category-visible').slideToggle(150);
  $('<div class="clear"></div>').insertAfter('.Left #SideCategoryList .sf-menu ul li ul');

  // if ( $(this).next('ul.navPage-childList').hasClass('sub-category-visible') ) {
  //     $(this).html('<i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span>');
  // } else ( $(this).html('<i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span>')
  // );

});

$( ".mobile-menu.navPages-container .navPage-subMenu span.down-arrow" ).on ('click', function() {
  $(this).closest('li').toggleClass('active');
  $(this).next('ul.navPage-childList').toggleClass('sub-category-visible').slideToggle(150);
  $('<div class="clear"></div>').insertAfter('.Left #SideCategoryList .sf-menu ul li ul');

  // if ( $(this).next('ul.navPage-childList').hasClass('sub-category-visible') ) {
  //     $(this).html('<i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span>');
  // } else ( $(this).html('<i class="fa fa-chevron-down" aria-hidden="true"><svg><use xlink:href="#icon-angle-down" /></svg></i></span>')
  // );

});


  $(window).scroll(function() {
      if ($(this).scrollTop() > 100 ) {
          $('.backtoTop').addClass("visible");
      } else {
          $('.backtoTop').removeClass("visible");
      }
  });

  $('.backtoTop').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
  });

// HOVER METHOD ACTIVATED FOR MAIN NAV PAGES ONLY
  $('.main-nav-container.pages-only.hover-to-open .custom-pages-nav li.navPages-item.top-level > a').hover(
      function () {
          $(this).siblings('div#menu .navPage-subMenu').show();
      },
      function () {
          $(this).siblings('div#menu .navPage-subMenu').hide();
      }
  );

// HOVER METHOD ACTIVATED FOR MAIN NAV WITH CATEGORIES
  $('.main-nav-container.with-categories.hover-to-open .custom-pages-nav li.navPages-item.top-level > a').hover(
      function () {
          $(this).siblings('div#menu .navPage-subMenu').show();
      },
      function () {
          $(this).siblings('div#menu .navPage-subMenu').hide();
      }
  );
  $('.main-nav-container.with-categories.hover-to-open .custom-pages-nav li.navPages-item.top-level').hover(
      function () {
          $(this).addClass('active');
      },
      function () {
          $(this).removeClass('active');
      }
  );

// CLICK METHOD ACTIVATED FOR MAIN NAV
$(".main-nav-container.click-to-open .custom-pages-nav li a").click(function(e){
  $(this).parent('li').toggleClass('active');
});
$(".main-nav-container.click-to-open .custom-pages-nav li a.navPages-action.has-subMenu").click(function(e){
  e.preventDefault();
  e.stopPropagation();
});
$('.main-nav-container.click-to-open .custom-pages-nav li a.navPages-action.has-subMenu').click(function(e){
  $(".main-nav-container.click-to-open .custom-pages-nav li a.navPages-action.has-subMenu").not(this).parent('li').removeClass('active');
    $(".main-nav-container.click-to-open .custom-pages-nav li a.navPages-action.has-subMenu").not(this).siblings().removeClass('active');
    $(this).siblings('.main-nav-container.click-to-open .navPage-subMenu').toggleClass('active');
});

$(document).mouseup(function(e) {
    var container = $(".navPages");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
      $('.main-nav-container.click-to-open .navPage-subMenu').removeClass('active');
      $('.main-nav-container.click-to-open li.top-level').removeClass('active');
    }
});


  // SUBCATEGORY DROPDOWN CLICK BEHAVIOR FOR ALL CLICK METHOD SETTINGS
  $('.main-nav-container.with-categories .custom-pages-nav .navPage-subMenu.navPage-subMenu-horizontal li a.navPages-action.has-subMenu').click(function(e){
      $(".main-nav-container.with-categories .custom-pages-nav li a.navPages-action.has-subMenu").not(this).siblings().removeClass('active');
      $(this).siblings('.main-nav-container.with-categories .navPage-subMenu').toggleClass('active');
  });

$( document ).ready(function() {
  $('.slider').hover(
      function() {
          $(this).addClass('active');
      },
      function() {
          $(this).removeClass('active');
      }
  );
});

$('.navPages-quickSearch input').change(function() {
  $('section.quickSearchResults').toggleClass("hide");
});

$(document).ready(function($){

  $("main.page.blog .blog-post .excerpt").each(function(){
          if ($(this).text().length > 0) {
              $(this).text($(this).text().substr(0, 125));
              $(this).append('...');
              $(this).addClass('visible');
          }
      });
});

$(document).ready(function($){
  $("main.page.blog h2.blog-title a").each(function(){
      $("main.page.blog h2.blog-title a").html().toLowerCase();
          if ($(this).text().length > 19) {
              $(this).text($(this).text().substr(0, 19));
              $(this).append('...');
          }
          $(this).addClass('visible');
      });
});

$(document).ready(function($){
      $('main.page.blog .blog-post-body').addClass('visible');
  });

// <!-- LOGO / SEARCHBAR ALIGNMENT -->
$(document).ready(function($){
if($('.header-logo').hasClass('header-logo--left')) {
  $('.right.searchbar').addClass('right');
  $('.navPages-container.inside-header.left-logo').addClass('visible');
};

if($('.header-logo').hasClass('header-logo--center')) {
  $('.right.searchbar').addClass('center');
  $('.navPages-container.inside-header.center-logo').show();
};

if($('.header-logo').hasClass('header-logo--right')) {
  $('.right.searchbar').addClass('right');
  $('.navPages-container.inside-header.right-logo').show();
};
});

$(window).scroll(function(){
if($(window).innerWidth() <= 800) {
if($(this).scrollTop() > 25) $('div#menu.mobile-menu .currency-converter').addClass('scrolled-down');
if($(this).scrollTop() < 25) $('div#menu.mobile-menu .currency-converter').removeClass('scrolled-down');
}
});

$(window).scroll(function(){
var notStickyFigureWidth = $('.center-logo.search-container.not-sticky#menu section#quickSearch.quickSearchResults figure.card-figure').width();
var notStickyQuickSearchFigureWidth = '100%';
var stickyFigureWidth = $('.center-logo.search-container.sticky#menu section#quickSearch.quickSearchResults figure.card-figure').width();
var stickyQuickSearchArticleWidth = $('.center-logo.search-container.sticky#menu section#quickSearch.quickSearchResults article.card').width();
var stickyQuickSearchArticleHeight = $('.center-logo.search-container.sticky#menu section#quickSearch.quickSearchResults article.card').height();
var stickyQuickSearchFigureWidth = $('.center-logo.search-container.sticky#menu section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').height();

var notStickyFigureWidth = $('.right-logo.search-container.not-sticky#menu section#quickSearch.quickSearchResults figure.card-figure').width();
var stickyFigureWidth = $('.right-logo.search-container.sticky#menu section#quickSearch.quickSearchResults figure.card-figure').width();
var stickyQuickSearchArticleWidth = $('.right-logo.search-container.sticky#menu section#quickSearch.quickSearchResults article.card').width();
var stickyQuickSearchArticleHeight = $('.right-logo.search-container.sticky#menu section#quickSearch.quickSearchResults article.card').height();
var stickyQuickSearchFigureWidth = $('.right-logo.search-container.sticky#menu section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').height();

var searchFieldWidth = $('header.header').width();
searchFieldWidth = (searchFieldWidth * .6);
if($(this).scrollTop() > 50) $('.header-container.sticky-header .search-container#menu').removeClass('not-sticky').addClass('sticky').appendTo('.top-menu');
if($(this).scrollTop() < 50) $('.header-container.sticky-header .search-container#menu').removeClass('sticky').addClass('not-sticky').insertAfter('.header-logo');


// CENTER SEARCH RESULTS FOR STICKY NAV
var quickSearchResultsWidth = $('.search-container.sticky#menu section.quickSearchResults').width();
// console.log(quickSearchResultsWidth);
var quickSearchInputWidth = $('.header-container.sticky-header .search-container.sticky#menu .right.searchbar').width();
// console.log(quickSearchInputWidth);
var searchWidthDifference = (quickSearchResultsWidth - quickSearchInputWidth);
// console.log(searchWidthDifference);
var searchOffset = (searchWidthDifference / 2);
// console.log(searchOffset);
var resetOffset = 0;
if($(this).scrollTop() > 50) $('.header-container.sticky-header .search-container.sticky#menu section.quickSearchResults').css('right', -Math.abs(searchOffset)+"px");
if($(this).scrollTop() > 50) $('.header-container.sticky-header .search-container.sticky#menu a.modal-close.custom-quick-search').css('right', -Math.abs(searchOffset)+"px");
if($(this).scrollTop() < 50) $('.header-container .search-container section.quickSearchResults').css('right', -Math.abs(resetOffset)+"px");
if($(this).scrollTop() < 50) $('.header-container .search-container a.modal-close.custom-quick-search').css('right', -Math.abs(resetOffset)+"px");


// STICKY NAV SEARCH - CENTERED LOGO
if($(this).scrollTop() < 50) $('.header-container.sticky-header .center-logo.search-container.not-sticky#menu section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +notStickyFigureWidth+ 'px !important');
if($(this).scrollTop() < 50) $('.header-container.sticky-header .center-logo.search-container.not-sticky#menu section#quickSearch.quickSearchResults figure.card-figure').css({
  'height': (notStickyFigureWidth) + 'px'
});
if($(this).scrollTop() < 50) $('.header-container.sticky-header .center-logo.search-container.not-sticky#menu section#quickSearch.quickSearchResults figure.card-figure').attr('style', 'width:' +notStickyQuickSearchFigureWidth+ '!important');
if($(this).scrollTop() < 50) $('.header-container.sticky-header .center-logo.search-container.not-sticky#menu section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
if($(this).scrollTop() > 50) $('.header-container.sticky-header .center-logo.search-container.sticky#menu section#quickSearch.quickSearchResults').css({
  'width': (searchFieldWidth) + 'px'
});
// CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
if($(this).scrollTop() > 50) $('.header-container.sticky-header .center-logo.search-container.sticky#menu section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').css({
  'width': (stickyQuickSearchArticleWidth-stickyQuickSearchFigureWidth) + 'px'
});
if($(this).scrollTop() > 50) $('.header-container.sticky-header .center-logo.search-container.sticky#menu section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +stickyQuickSearchFigureWidth+ 'px !important');
if($(this).scrollTop() > 50) $('.header-container.sticky-header .center-logo.search-container.sticky#menu section#quickSearch.quickSearchResults figure.card-figure').attr('style', 'width:' +stickyQuickSearchFigureWidth+ 'px !important');


// STICKY NAV SEARCH - RIGHT LOGO
if($(this).scrollTop() < 50) $('.header-container.sticky-header .right-logo.search-container.not-sticky#menu section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +notStickyFigureWidth+ 'px !important');
if($(this).scrollTop() < 50) $('.header-container.sticky-header .right-logo.search-container.not-sticky#menu section#quickSearch.quickSearchResults figure.card-figure').css({
  'height': (notStickyFigureWidth) + 'px'
});
if($(this).scrollTop() < 50) $('.header-container.sticky-header .right-logo.search-container.not-sticky#menu section#quickSearch.quickSearchResults figure.card-figure').attr('style', 'width:' +notStickyQuickSearchFigureWidth+ '!important');
if($(this).scrollTop() < 50) $('.header-container.sticky-header .right-logo.search-container.not-sticky#menu section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
if($(this).scrollTop() > 50) $('.header-container.sticky-header .right-logo.search-container.sticky#menu section#quickSearch.quickSearchResults').css({
  'width': (searchFieldWidth) + 'px'
});
// CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
if($(this).scrollTop() > 50) $('.header-container.sticky-header .right-logo.search-container.sticky#menu section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').css({
  'width': (stickyQuickSearchArticleWidth-stickyQuickSearchFigureWidth) + 'px'
});
if($(this).scrollTop() > 50) $('.header-container.sticky-header .right-logo.search-container.sticky#menu section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +stickyQuickSearchFigureWidth+ 'px !important');
if($(this).scrollTop() > 50) $('.header-container.sticky-header .right-logo.search-container.sticky#menu section#quickSearch.quickSearchResults figure.card-figure').attr('style', 'width:' +stickyQuickSearchFigureWidth+ 'px !important');
});

$(document).click(function(event) {
  if ( !$(event.target).hasClass('div.currency-converter')) {
       $("div.currency-converter .navPage-subMenu").hide();
       event.stopPropagation();
  }
});

$("div.currency-converter li a.navPages-action.has-subMenu").click(function(e){
  e.preventDefault();
  $('div.currency-converter .navPage-subMenu').toggle();
  e.stopPropagation();
});

// <!-- HIDE SUBCATEGORY IMAGES IF CATEGORY IMAGE IS NOT SET-->
$(document).ready(function(){
if($('.subcategory-image.uploaded').length) {
  $("li.subcategory-item .subcategory-image").fadeIn();
}
});

// <!-- HIDE BLOG IMAGES IF CATEGORY IMAGE IS NOT SET-->
$(document).ready(function(){
if($('.blog-image.uploaded').length) {
  $(".blog-post-figure").fadeIn();
}
});

// <!-- HIDE COMPARE BUTTON IF PRODUCT COMPARISONS ARE DISABLED -->
$(document).ready(function(){
if (!$('article.card').hasClass('compare-disabled')) {
  $('.compare').fadeIn();
}
if ($('main#product-listing-container:contains("There are no products listed under this category.")').length > 0) {
$('.compare').hide();
}
});
// <!-- HIDE COMPARE BUTTON IF ONE PRODUCT OR LESS -->
$(window).on("load", function(){
if ($('#product-listing-container ul.productGrid li.product').length <= 1) {
  console.log('hide-compare');
	$('.compare').hide();
}
});
$(window).on("load", function(){
if ($('#product-listing-container ul.productList li.product').length <= 1) {
  console.log('hide-compare');
	$('.compare').hide();
}
});

// ADD PRICES-HIDDEN CLASS IF LOGIN REQUIRED
$(document).ready(function(){
$("article.card .card-text .price-visibility.restricted").each(function(){
  if ($(this).text().trim().length) {
      $(this).addClass("price-hidden");
      $(this).closest('div.card-body').addClass("prices-hidden");
      // $('.compare').hide();
  }
});
});

$(window).on("load", function(){
$('.subcategory-grid').fadeIn();
$('.productGrid').fadeIn();
});

if($(window).innerWidth() <= 480) {
$(document).ready(function() {
  $('.shop-by-price').appendTo('.sideCategoryList.mobile');
});
}

// SUBCATEGORY IMAGE VISIBILITY
$(window).on("load", function(){
if ($('.subcategory-image').hasClass('uploaded')) {
  $('li.subcategory-item').addClass('hasImage');
}
else {
  $('li.subcategory-item').addClass('noImage');
}
});

// BLOG IMAGE VISIBILITY
$(window).on("load", function(){
if ($('.blog-image').hasClass('uploaded')) {
  $('.blog-post-figure').addClass('hasImage');
}
else {
  $('.blog-post-figure').addClass('noImage');
}
});

$( "a.navPage-subMenu-action.navPages-action.navPages-action-depth-max.has-subMenu" ).on ('click', function() {
window.location = this.href;
});

// $('figure.card-figure').each(function() {
// if ( $(this).find('img.card-image').length >= 2 ) {
//   $(this).addClass('multiple-images');
// }
// });
//
// $('figure.listItem-figure').each(function() {
// if ( $(this).find('img.listItem-image').length >= 2 ) {
//   $(this).addClass('multiple-images');
// }
// });


// <!-- SHOW POPUP AFTER 24 HOUR SESSION HAS EXPIRED OR WHEN BROWSER IS CLOSED -->
// <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
  // <!-- HIDE POPUP AFTER FIRST SESSION, RESETS IN 24 HOURS -->
  $(document).ready(function($) {
      if ($.cookie('popupShownOnceAlready')) {
      var $myDiv = $('.home');
          if ( $myDiv.length){
            var id = '#dialog';
            var maskHeight = $(document).height();
            var maskWidth = $(window).width();
            $('#mask').css({'width':maskWidth,'height':maskHeight});
            $('#mask').fadeIn(500);
            $('#mask').fadeTo("slow",0.9);
            var winH = $(window).height();
            var winW = $(window).width();
            $(id).css('top',  winH/2-$(id).height()/2);
            $(id).css('left', winW/2-$(id).width()/2-35);
               $(id).fadeIn(2000);
               $('.window .close').click(function (e) {
            e.preventDefault();
            $('#mask').hide();
            $('.window').hide();
               });
               $('#mask').click(function () {
            $(this).hide();
            $('.window').hide();
           });
           // SHOW POPUP WHEN SET TO SHOW ON PAGE LOAD
           $('#newsletter-popup.popup-active-on-refresh').addClass('show-popup');
           $('#newsletter-popup.popup-active-on-refresh').removeClass('hide-popup');
           console.log('Show Popup');
           // END SHOW POPUP WHEN SET TO SHOW ON PAGE LOAD

           // HIDE POPUP WHEN COOKIE IS ACTIVE
           $('#newsletter-popup.popup-active-with-cookie').addClass('hide-popup');
           $('#newsletter-popup.popup-active-with-cookie').removeClass('show-popup');
           console.log('Hide Popup');
           // END HIDE POPUP WHEN COOKIE IS ACTIVE

         }
        }
        else {
          // and now we create 1 day cookie
            $.cookie('popupShownOnceAlready', true, {path: '/', expire: 1});
            var $myDiv = $('.home');
                if ( $myDiv.length){
                  var id = '#dialog';
                  var maskHeight = $(document).height();
                  var maskWidth = $(window).width();
                  $('#mask').css({'width':maskWidth,'height':maskHeight});
                  $('#mask').fadeIn(500);
                  $('#mask').fadeTo("slow",0.9);
                  var winH = $(window).height();
                  var winW = $(window).width();
                  $(id).css('top',  winH/2-$(id).height()/2);
                  $(id).css('left', winW/2-$(id).width()/2-35);
                     $(id).fadeIn(2000);
                     $('.window .close').click(function (e) {
                  e.preventDefault();
                  $('#mask').hide();
                  $('.window').hide();
                     });
                     $('#mask').click(function () {
                  $(this).hide();
                  $('.window').hide();
                 });
                 // AFTER COOKIE EXPIRES RUN THIS CODE
                 $('#newsletter-popup.popup-active-with-cookie').addClass('show-popup');
                 $('#newsletter-popup.popup-active-with-cookie').removeClass('hide-popup');
                 console.log('Show Popup');
                 // END AFTER COOKIE EXPIRES RUN THIS CODE
                }
        }
        $(window).on("unload", function(e) {
          deleteCookie('popupShownOnceAlready');
        });
    });

// <!-- GRID/LIST VIEW TOGGLE -->
    jQuery( "a.toggle-link" ).click(function( event ) {
        event.preventDefault();
    });

  $(document).ready(function(){
      jQuery('a.toggle-link').on("click", function(){
        jQuery('a.toggle-link').not(this).removeClass('active');
          jQuery(this).addClass('active');
            if ( jQuery("a.toggle-link.grid").hasClass("active") ) {
                jQuery("ul.productGrid").addClass('visible');
                jQuery(".list-default").addClass('hidden');
            } else {
              jQuery("ul.productGrid").removeClass('visible');
              jQuery(".list-default").removeClass('hidden');
            }
            if ( jQuery("a.toggle-link.list").hasClass("active") ) {
                jQuery("ul.productList").addClass('visible');
                jQuery(".grid-default").addClass('hidden');
            } else {
              jQuery("ul.productList").removeClass('visible');
              jQuery(".grid-default").removeClass('hidden');
            }
          });
        });

// <!-- HIDE GRID/LIST TOGGLE ONCLICK -->
$(document).ready(function($){
$("a.navBar-action").on ('click', function() {
$('.grid-list-view.toggle').hide();
$('form.actionBar').hide();
});

$("li.navBar-item.products a.navBar-action").on ('click', function() {
$('.grid-list-view.toggle').show();
$('form.actionBar').show();
});
});

// <!-- HIDE GRID/LIST IF NO PRODUCTS ON PAGE -->
if($('li.product').length === 0){
$('.grid-list-view.toggle').hide();
$('form.actionBar').hide();
}

// <!-- REPOSITION CART LINK IF HAS COUNTPILL -->
if ( $('.countPill').hasClass('countPill--positive') ){
  $('.top-menu .right').addClass('shift-right');
}

$( "div#mobile-menu li a" ).hover(function() {
event.preventDefault();
});

// <!-- HIDE CAROUSEL NAV DOTS IF ONLY ONE SLIDE -->
$(window).on("load", function(){
if(!$('.slick-arrow').length){
$('.heroCarousel .slick-dots').hide();
}
});

// <!-- FIX FOR MOBILE ANDROID DROPDOWNS -->
  $(document).ready(function(){
      $("select.form-select").addClass("needsclick");
  });

// <!-- GET CURRENT CATEGORY AND ACTIVATE IN SIDENAV -->
$(document).ready( function() {
$('.container.main div#side-categories a.activePage').parents('.navPages-item').find('.topLevel').next('span.down-arrow').trigger("click");
$('.container.main div#side-categories a.activePage').next('span.down-arrow').trigger("click");
});


$(document).ready(function(){
  $(".page.blog .blog-title a").text(function(index, currentText) {
  var maxLength = $(this).attr('data-maxlength');
  if(currentText.length >= maxLength) {
    return currentText.substr(0, maxLength) + "...";
  } else {
    return currentText
  }
});
});

$(document).ready(function(){
  $(".page.blog .blog-date, .page.blog .blog-author").text(function(index, currentText) {
  var maxLength = $(this).attr('data-maxlength');
  if(currentText.length >= maxLength) {
    return currentText.substr(0, maxLength) + "...";
  } else {
    return currentText
  }
});
});

$(document).ready(function(){
waitForElement("#carousel-active img",function(){
$('#carousel-active .slick-slider').fadeIn();
});
});

// CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
// PRODUCT PAGE SUBCATEGORY IMAGES
$(window).on("load", function(){
var subCatFigureWidth = $('#body.category-layout li.subcategory-item .subcategory-link-container').width();
// console.log(subCatFigureWidth);
// SUBCATEGORY IMAGES
$('#body.category-layout .subcategory-link-container').attr('style', 'min-height:' +subCatFigureWidth+ 'px !important');
$('#body.category-layout a.subcateogory-image-link').attr('style', 'height:' +subCatFigureWidth+ 'px !important');
// $('#body.category-layout .subcategory-image.uploaded').attr('style', 'height:' +subCatFigureWidth+ 'px !important');
$('#body.category-layout .subcategory-image .subcateogory-image-link').attr('style', 'min-height:' +subCatFigureWidth+ 'px !important');

$('#body.category-layout .subcategory-image img').attr('style', 'max-height:' +subCatFigureWidth+ 'px !important');
$('#body.category-layout .subcategory-image img').css("max-width", +subCatFigureWidth+"px");
});
// SET HEIGHT TO TALLEST ELEMENT SO DIVS CLEAR
$(window).on("load", function(){
   var subCatFigureHeight = -1;
   // console.log(subCatFigureHeight);
   $('#body.category-layout li.subcategory-item.hasImage').each(function() {
     subCatFigureHeight = subCatFigureHeight > $(this).height() ? subCatFigureHeight : $(this).height();
   });
   $('#body.category-layout li.subcategory-item.hasImage').each(function() {
     $(this).height(subCatFigureHeight);
   });
 });
// RESIZE SUBCATEGORY IMAGES ON WINDOW RESIZE
window.addEventListener("resize", function() {
 var subCatFigureWidth = $('#body.category-layout li.subcategory-item .subcategory-link-container').width();
 // console.log(subCatFigureWidth);
 // SUBCATEGORY IMAGES
 $('#body.category-layout .subcategory-link-container').attr('style', 'min-height:' +subCatFigureWidth+ 'px !important');
 $('#body.category-layout a.subcateogory-image-link').attr('style', 'height:' +subCatFigureWidth+ 'px !important');
 $('#body.category-layout .subcategory-image.uploaded').attr('style', 'height:' +subCatFigureWidth+ 'px !important');
 $('#body.category-layout .subcategory-image .subcateogory-image-link').attr('style', 'min-height:' +subCatFigureWidth+ 'px !important');
 });



// CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
// HOME PAGE PRODUCTS
$(window).on("load", function(){
var homeFigureWidth = $('#showcase-products ul.productGrid figure.card-figure').width();
// console.log(homeFigureWidth);
// SHOWCASE PRODUCTS
$('#showcase-products ul.productGrid figure.card-figure').attr('style', 'min-height:' +homeFigureWidth+ 'px !important');
$('#showcase-products ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +homeFigureWidth+ 'px !important');
$('#showcase-products ul.productGrid figure.card-figure img').attr('style', 'max-height:' +homeFigureWidth+ 'px !important');
$('#showcase-products ul.productGrid figure.card-figure img').css("max-width", +homeFigureWidth+"px");
});
// CATEGORY, BRAND, SEARCH PAGE PRODUCTS GRID VIEW
$(window).on("load", function(){
var baseFigureWidth = $('#body.base-layout main.page-content ul.productGrid figure.card-figure').width();
// console.log(baseFigureWidth);
$('#body.base-layout main.page-content ul.productGrid figure.card-figure').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure img').attr('style', 'max-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure img').css("max-width", +baseFigureWidth+"px");
});

// CATEGORY, BRAND, SEARCH PAGE PRODUCTS LIST VIEW
// CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
$(window).on("load", function(){
$('#body.base-layout main.page-content form.both-grid-default ul.productList').css("opacity", "0");
$('#body.base-layout main.page-content form.both-list-default ul.productGrid').css("opacity", "0");
setTimeout(function(){
var listFigureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
var articleWidth = $('#body.base-layout main.page-content ul.productList article.listItem').width();
var fit = '100%';
// console.log(articleWidth);
$('#body.base-layout main.page-content ul.productList article.listItem .listItem-body').attr('style', 'width:' +(fit)+ '!important');
// CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
var figureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
// console.log(figureWidth);
$('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
}, 200);
});

// ON TOGGLE RE-RUN SCRIPTS
// CATEGORY, BRAND, SEARCH PAGE PRODUCTS GRID VIEW
$( "a.toggle-link" ).on ('click', function() {
$('#body.base-layout main.page-content ul.productGrid').css("opacity", "0");
$('#body.base-layout main.page-content ul.productList').css("opacity", "0");
setTimeout(function(){
var baseFigureWidth = $('#body.base-layout main.page-content ul.productGrid figure.card-figure').width();
// console.log(baseFigureWidth);
$('#body.base-layout main.page-content ul.productGrid figure.card-figure').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid figure.card-figure img').attr('style', 'max-height:' +baseFigureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productGrid').css("opacity", "1");
$('#body.base-layout main.page-content ul.productList').css("opacity", "1");
}, 200);
// CATEGORY, BRAND, SEARCH PAGE PRODUCTS LIST VIEW
// CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
setTimeout(function(){
var listFigureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
var articleWidth = $('#body.base-layout main.page-content ul.productList article.listItem').width();
var fit = '100%';
// console.log(articleWidth);
$('#body.base-layout main.page-content ul.productList article.listItem .listItem-body').attr('style', 'width:' +(fit)+ '!important');
// CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
var figureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
// console.log(figureWidth);
$('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +figureWidth+ 'px !important');
$('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
$('#body.base-layout main.page-content ul.productGrid').css("opacity", "1");
$('#body.base-layout main.page-content ul.productList').css("opacity", "1");
}, 200);
});

// On mobile unset figure min-height because they are stacked vertically.
var windowsize = $(window).width();
if (windowsize < 551) {
  $( "a.toggle-link" ).on ('click', function() {
    setTimeout(function(){
      var unset = 'unset';
      var fit = '100%';
      var squareFigure = $('#body.base-layout main.page-content figure.listItem-figure').width();
      $('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +squareFigure+ 'px !important');
      $('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
      $('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +squareFigure+ 'px !important');
      $('#body.base-layout main.page-content ul.productList figure.listItem-figure img').css("max-width", +squareFigure+"px");
      $('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +unset+ '!important');
    }, 200);
  });
}

// PRODUCT PAGE PRODUCTS HAS TWO DIFFERENT SECTIONS
$(window).on("load", function(){
var similarWidth = $('ul.productGrid.similar article.card').width();
// console.log(similarWidth);
var relatedWidth = $('.related-below  ul.productGrid article.card').width();
// console.log(relatedWidth);
var sidebarWidth = $('.main#body .sidebar.right ul.productGrid.related figure').width();
// console.log(sidebarWidth);
var ieSidebarWidth = $('.main#body .sidebar.right ul.productGrid.related').width();
// console.log(ieSidebarWidth);
// SIMILAR PRODUCTS
$('ul.productGrid.similar figure.card-figure').attr('style', 'min-height:' +similarWidth+ 'px !important');
$('ul.productGrid.similar figure.card-figure a.image-link').attr('style', 'min-height:' +similarWidth+ 'px !important');
$('ul.productGrid.similar figure.card-figure img').attr('style', 'max-height:' +similarWidth+ 'px !important');
$('ul.productGrid.similar figure.card-figure img').css("max-width", +similarWidth+"px");
// RELATED PRODUCTS - BELOW
$('ul.productGrid.related-below figure.card-figure').attr('style', 'min-height:' +relatedWidth+ 'px !important');
// $('ul.productGrid.related figure.card-figure').attr('style', 'max-height:' +relatedWidth+ 'px !important');
$('.related-below  ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +relatedWidth+ 'px !important');
$('.related-below ul.productGrid figure.card-figure img').attr('style', 'max-height:' +relatedWidth+ 'px !important');
$('.related-below ul.productGrid figure.card-figure img').css("max-width", +relatedWidth+"px");
// SIDEBAR RELATED PRODUCTS - NOT IE
$('#body.not-internet-explorer .sidebar.right ul.productGrid figure.card-figure').attr('style', 'min-height:' +sidebarWidth+ 'px !important');
// $('ul.productGrid.related figure.card-figure').attr('style', 'max-height:' +relatedWidth+ 'px !important');
$('#body.not-internet-explorer .sidebar.right ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +sidebarWidth+ 'px !important');
$('#body.not-internet-explorer .sidebar.right ul.productGrid figure.card-figure img').attr('style', 'max-height:' +sidebarWidth+ 'px !important');
$('#body.not-internet-explorer .sidebar.right ul.productGrid figure.card-figure a.image-link').css("max-width", +sidebarWidth+"px");
$('#body.not-internet-explorer .sidebar.right ul.productGrid figure.card-figure img').css("max-width", +sidebarWidth+"px");
// SIDEBAR RELATED PRODUCTS IE
$('#body.internet-explorer .sidebar.right ul.productGrid figure.card-figure').attr('style', 'min-height:' +ieSidebarWidth+ 'px !important');
// $('ul.productGrid.related figure.card-figure').attr('style', 'max-height:' +relatedWidth+ 'px !important');
$('#body.internet-explorer .sidebar.right ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +ieSidebarWidth+ 'px !important');
$('#body.internet-explorer .sidebar.right ul.productGrid figure.card-figure img').attr('style', 'max-height:' +ieSidebarWidth+ 'px !important');
$('#body.internet-explorer .sidebar.right ul.productGrid figure.card-figure a.image-link').css("max-width", +ieSidebarWidth+"px");
$('#body.internet-explorer .sidebar.right ul.productGrid figure.card-figure img').css("max-width", +ieSidebarWidth+"px");
});

$(window).on("load", function(){
var mainProductImgWidth = $('#body.product-page-layout .main-image-container').width();
// console.log(mainProductImgWidth);
// MAIN PRODUCT IMAGE
$('#body.product-page-layout .main-image-container figure.productView-image').attr('style', 'min-height:' +mainProductImgWidth+ 'px !important');
$('#body.product-page-layout .main-image-container .slick-list.draggable').attr('style', 'max-height:' +mainProductImgWidth+ 'px !important');
$('#body.product-page-layout .main-image-container figure.productView-image img').attr('style', 'max-height:' +mainProductImgWidth+ 'px !important');
$('#body.product-page-layout .main-image-container figure.productView-image img').css("max-width", +mainProductImgWidth+"px");
});

$(".navPages-quickSearch input").click(function(e){
  $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
  // LEFT LOGO
  // CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
  setInterval(function(){
    // console.log('window-change!');
  var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
  var articleWidth = $('section#quickSearch.quickSearchResults article.card').width();
  // console.log(articleWidth);
  $('div#menu.left-logo section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').css({
    'width': (articleWidth-figureWidth) + 'px'
  });
  // CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
  var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
  // console.log(figureWidth);
  $('div#menu.left-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
  $('div#menu.left-logo section#quickSearch.quickSearchResults figure.card-figure').css({
    'width': (figureWidth) + 'px'
  });
  $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
}, 200);

});

// FOR WINDOW DRAGGERS & THEME EDITOR RESPONSIVE BUTTONS
window.addEventListener("resize", function() {
  // HOME PRODUCTS
  setTimeout(function(){
  // console.log('window-change!');
  var homeFigureWidth = $('#showcase-products ul.productGrid figure.card-figure').width();
  // console.log(homeFigureWidth);
  // SHOWCASE PRODUCTS
  $('#showcase-products ul.productGrid figure.card-figure').attr('style', 'min-height:' +homeFigureWidth+ 'px !important');
  $('#showcase-products ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +homeFigureWidth+ 'px !important');
  $('#showcase-products ul.productGrid figure.card-figure img').attr('style', 'max-height:' +homeFigureWidth+ 'px !important');
  $('#showcase-products ul.productGrid figure.card-figure img').css("max-width", +homeFigureWidth+"px");
  }, 200);

  // CATEGORY, BRAND, SEARCH PAGE PRODUCTS
  setTimeout(function(){
  // console.log('window-change!');
  var baseFigureWidth = $('#body.base-layout main.page-content ul.productGrid figure.card-figure').width();
  // console.log(baseFigureWidth);
  $('#body.base-layout main.page-content ul.productGrid figure.card-figure').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
  $('#body.base-layout main.page-content ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
  $('#body.base-layout main.page-content ul.productGrid figure.card-figure img').attr('style', 'max-height:' +baseFigureWidth+ 'px !important');
  $('#body.base-layout main.page-content ul.productGrid figure.card-figure img').css("max-width", +baseFigureWidth+"px");
  }, 200);

  // PRODUCT PAGE PRODUCTS
  var mainProductImgWidth = $('#body.product-page-layout .main-image-container').width();
  // console.log(mainProductImgWidth);
  // MAIN PRODUCT IMAGE
  $('#body.product-page-layout .main-image-container figure.productView-image').attr('style', 'min-height:' +mainProductImgWidth+ 'px !important');
  $('#body.product-page-layout .main-image-container .slick-list.draggable').attr('style', 'max-height:' +mainProductImgWidth+ 'px !important');
  $('#body.product-page-layout .main-image-container figure.productView-image img').attr('style', 'max-height:' +mainProductImgWidth+ 'px !important');
  $('#body.product-page-layout .main-image-container figure.productView-image img').css("max-width", +mainProductImgWidth+"px");

  setTimeout(function(){
    var similarWidth = $('ul.productGrid.similar article.card').width();
    // console.log(similarWidth);
    var relatedWidth = $('.related-below  ul.productGrid article.card').width();
    // console.log(relatedWidth);
    var sidebarWidth = $('.main#body .sidebar.right ul.productGrid.related figure').width();
    // console.log(sidebarWidth);
    var ieSidebarWidth = $('.main#body .sidebar.right ul.productGrid.related').width();
    // console.log(ieSidebarWidth);
    // SIMILAR PRODUCTS
    $('ul.productGrid.similar figure.card-figure').attr('style', 'min-height:' +similarWidth+ 'px !important');
    $('ul.productGrid.similar figure.card-figure a.image-link').attr('style', 'min-height:' +similarWidth+ 'px !important');
    $('ul.productGrid.similar figure.card-figure img').attr('style', 'max-height:' +similarWidth+ 'px !important');
    $('ul.productGrid.similar figure.card-figure img').css("max-width", +similarWidth+"px");
    // RELATED PRODUCTS - BELOW
    $('ul.productGrid.related-below figure.card-figure').attr('style', 'min-height:' +relatedWidth+ 'px !important');
    // $('ul.productGrid.related figure.card-figure').attr('style', 'max-height:' +relatedWidth+ 'px !important');
    $('.related-below  ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +relatedWidth+ 'px !important');
    $('.related-below ul.productGrid figure.card-figure img').attr('style', 'max-height:' +relatedWidth+ 'px !important');
    $('.related-below ul.productGrid figure.card-figure img').css("max-width", +relatedWidth+"px");
    // SIDEBAR RELATED PRODUCTS - NOT IE
    $('#body.not-internet-explorer .sidebar.right ul.productGrid figure.card-figure').attr('style', 'min-height:' +sidebarWidth+ 'px !important');
    // $('ul.productGrid.related figure.card-figure').attr('style', 'max-height:' +relatedWidth+ 'px !important');
    $('#body.not-internet-explorer .sidebar.right ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +sidebarWidth+ 'px !important');
    $('#body.not-internet-explorer .sidebar.right ul.productGrid figure.card-figure img').attr('style', 'max-height:' +sidebarWidth+ 'px !important');
    $('#body.not-internet-explorer .sidebar.right ul.productGrid figure.card-figure a.image-link').css("max-width", +sidebarWidth+"px");
    $('#body.not-internet-explorer .sidebar.right ul.productGrid figure.card-figure img').css("max-width", +sidebarWidth+"px");
    // SIDEBAR RELATED PRODUCTS IE
    $('#body.internet-explorer .sidebar.right ul.productGrid figure.card-figure').attr('style', 'min-height:' +ieSidebarWidth+ 'px !important');
    // $('ul.productGrid.related figure.card-figure').attr('style', 'max-height:' +relatedWidth+ 'px !important');
    $('#body.internet-explorer .sidebar.right ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +ieSidebarWidth+ 'px !important');
    $('#body.internet-explorer .sidebar.right ul.productGrid figure.card-figure img').attr('style', 'max-height:' +ieSidebarWidth+ 'px !important');
    $('#body.internet-explorer .sidebar.right ul.productGrid figure.card-figure a.image-link').css("max-width", +ieSidebarWidth+"px");
    $('#body.internet-explorer .sidebar.right ul.productGrid figure.card-figure img').css("max-width", +ieSidebarWidth+"px");
}, 200);

  var listFigureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
  var articleWidth = $('#body.base-layout main.page-content ul.productList article.listItem').width();
  // var fit = '100%';
  // console.log(articleWidth);
  // $('#body.base-layout main.page-content ul.productList article.listItem .listItem-body').attr('style', 'width:' +(fit)+ '!important');
  // CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
  var figureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
  // console.log(figureWidth);
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-height", +figureWidth+ "px");
  // $('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +figureWidth+ 'px !important');
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +figureWidth+ 'px !important');

$('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "0");
var screenWidth = window.matchMedia("(min-width: 801px)");
var nineHundredScreenWidth = window.matchMedia("(max-width: 900px)");
var desktopScreenWidth = window.matchMedia("(min-width: 801px)");
var aboveMobileScreenWidth = window.matchMedia("(min-width: 551px)");
var listViewBreakScreenWidth = window.matchMedia("(max-width: 700px)");
var mobileScreenWidth = window.matchMedia("(max-width: 550px)");
const checkMobile = window.matchMedia('screen and (max-width: 800px)');
const checkDesktop = window.matchMedia('screen and (min-width: 801px)');

myFunction(screenWidth) // Call listener function at run time
screenWidth.addListener(myFunction) // Attach listener function on state changes
function myFunction(screenWidth) {

  // SET MENU TO DESKTOP OR MOBILE
  var mobileMenu = $('.mobile-menu.navPages-container');
  console.log(mobileMenu);
  var desktopMenu = $('.mobile-menu.navPages-container');
  console.log(desktopMenu);
  if (checkMobile.matches) { // MOBILE 800PX OR LESS
    // console.log('MOBILE')
    $('.navPages-container.main-nav.desktop').removeAttr('id');
    $('.mobile-menu.navPages-container').attr('id', 'menu');
  } else if (checkDesktop.matches) { // DESKTOP 801PX OR MORE
    // console.log('DESKTOP');
    $('.mobile-menu.navPages-container').removeAttr('id');
    $('.navPages-container.main-nav.desktop').attr('id', 'menu');
  // END MENU SET

  // CARD SETTINGS
  } else if (mobileScreenWidth.matches) { // MOBILE
    var unset = 'unset';
    var fit = '100%';
    var squareFigure = $('#body.base-layout main.page-content figure.listItem-figure').width();
    $('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +squareFigure+ 'px !important');
    $('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
    $('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +squareFigure+ 'px !important');
    $('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +unset+ '!important');
    $('#body.base-layout main.page-content ul.productList figure.listItem-figure listItem-body').attr('style', 'width:' +fit+ '!important');

    $( "a.toggle-link" ).on ('click', function() {
      setTimeout(function(){
        var unset = 'unset';
        var fit = '100%';
        var squareFigure = $('#body.base-layout main.page-content figure.listItem-figure').width();
        $('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +squareFigure+ 'px !important');
        $('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +squareFigure+"px");
        $('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +squareFigure+ 'px !important');
        $('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +unset+ '!important');
        $('#body.base-layout main.page-content ul.productList figure.listItem-figure listItem-body').attr('style', 'width:' +fit+ '!important');
      }, 200);
    });

} else if (aboveMobileScreenWidth.matches) { // MOBILE
  var listFigureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
  var articleWidth = $('#body.base-layout main.page-content ul.productList article.listItem').width();
  var fit = '100%';

  // ON TOGGLE RE-RUN SCRIPTS
  // CATEGORY, BRAND, SEARCH PAGE PRODUCTS GRID VIEW
  $( "a.toggle-link" ).on ('click', function() {
  $('#body.base-layout main.page-content ul.productGrid').css("opacity", "0");
  $('#body.base-layout main.page-content ul.productList').css("opacity", "0");
  setTimeout(function(){
  var baseFigureWidth = $('#body.base-layout main.page-content ul.productGrid figure.card-figure').width();
  // console.log(baseFigureWidth);
  $('#body.base-layout main.page-content ul.productGrid figure.card-figure').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
  $('#body.base-layout main.page-content ul.productGrid figure.card-figure a.image-link').attr('style', 'min-height:' +baseFigureWidth+ 'px !important');
  $('#body.base-layout main.page-content ul.productGrid figure.card-figure img').attr('style', 'max-height:' +baseFigureWidth+ 'px !important');
  $('#body.base-layout main.page-content ul.productGrid figure.card-figure img').css("max-width", +baseFigureWidth+"px");
  $('#body.base-layout main.page-content ul.productGrid').css("opacity", "1");
  $('#body.base-layout main.page-content ul.productList').css("opacity", "1");
  }, 200);
  // CATEGORY, BRAND, SEARCH PAGE PRODUCTS LIST VIEW
  // CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
  setTimeout(function(){
  var listFigureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
  var articleWidth = $('#body.base-layout main.page-content ul.productList article.listItem').width();
  var fit = '100%';
  // console.log(articleWidth);
  $('#body.base-layout main.page-content ul.productList article.listItem .listItem-body').attr('style', 'width:' +(fit)+ '!important');
  // CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
  var figureWidth = $('#body.base-layout main.page-content ul.productList .listItem-body').height();
  // console.log(figureWidth);
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure a.image-link').attr('style', 'width:' +figureWidth+ 'px !important');
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure').attr('style', 'min-height:' +figureWidth+ 'px !important');
  $('#body.base-layout main.page-content ul.productList figure.listItem-figure').css("min-width", +figureWidth+"px");
  $('#body.base-layout main.page-content ul.productGrid').css("opacity", "1");
  $('#body.base-layout main.page-content ul.productList').css("opacity", "1");
  }, 200);
  });

  // DESKTOP
} else if (nineHundredScreenWidth.matches) { // DESKTOP - If screen is 900px or MORE
    // CUSTOM - SET QUICKSEARCH DROPDOWN WIDTH EQUAL TO SEARCH FIELD
    // var searchFieldWidth = $('.navPages-quickSearch.right.searchbar .form-fieldset').width();
    var searchFieldWidth = $('header.header').width();
    searchFieldWidth = (searchFieldWidth * .6);
    // console.log(searchFieldWidth);
    $('div#menu.left-logo section#quickSearch.quickSearchResults').css({
      'width': (searchFieldWidth) + 'px'
    });
    // LEFT LOGO
    // CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
    setInterval(function(){
      // console.log('window-change!');
    var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
    var articleWidth = $('section#quickSearch.quickSearchResults article.card').width();
    // console.log(articleWidth);
    $('div#menu.left-logo section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').css({
      'width': (articleWidth-figureWidth) + 'px'
    });
    // CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
    var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
    // console.log(figureWidth);
    $('div#menu.left-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
    $('div#menu.left-logo section#quickSearch.quickSearchResults figure.card-figure').css({
      'width': (figureWidth) + 'px'
    });
    $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
  }, 1000);

    // CENTERED LOGO
    // CUSTOM - SET FIGURE HEIGHT TO EQUAL FIGURE WIDTH TO KEEP FIGURE SQAURE
    setInterval(function(){
      // console.log('window-change!');
    var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').width();
    // console.log(figureWidth);
    $('div#menu.center-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
    $('div#menu.center-logo section#quickSearch.quickSearchResults figure.card-figure').css({
      'height': (figureWidth) + 'px'
    });
    $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
  }, 200);

    // RIGHT LOGO
    // CUSTOM - SET FIGURE HEIGHT TO EQUAL FIGURE WIDTH TO KEEP FIGURE SQAURE
    setInterval(function(){
      // console.log('window-change!');
    var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').width();
    // console.log(figureWidth);
    $('div#menu.right-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
    $('div#menu.right-logo section#quickSearch.quickSearchResults figure.card-figure').css({
      'height': (figureWidth) + 'px'
    });
    $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
  }, 200);
  } else if (desktopScreenWidth.matches) { // DESKTOP - If screen is 800px or MORE
    // CUSTOM - SET QUICKSEARCH DROPDOWN WIDTH EQUAL TO SEARCH FIELD
    // var searchFieldWidth = $('.navPages-quickSearch.right.searchbar .form-fieldset').width();
    setInterval(function(){
      // console.log('window-change!');
    var searchFieldWidth = $('header.header').width();
    searchFieldWidth = (searchFieldWidth * .5);
    // console.log(searchFieldWidth);
    $('div#menu.left-logo section#quickSearch.quickSearchResults').css({
      'width': (searchFieldWidth) + 'px'
    });
    $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
  }, 200);
    // LEFT LOGO
    // CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
    setInterval(function(){
      // console.log('window-change!');
    var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
    var articleWidth = $('section#quickSearch.quickSearchResults article.card').width();
    // console.log(articleWidth);
    $('div#menu.left-logo section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').css({
      'width': (articleWidth-figureWidth) + 'px'
    });
    // CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
    var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
    // console.log(figureWidth);
    $('div#menu.left-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
    $('div#menu.left-logo section#quickSearch.quickSearchResults figure.card-figure').css({
      'width': (figureWidth) + 'px'
    });
    $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
  }, 200);

    // CENTERED LOGO
    // CUSTOM - SET FIGURE HEIGHT TO EQUAL FIGURE WIDTH TO KEEP FIGURE SQAURE
    setInterval(function(){
      // console.log('window-change!');
    var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').width();
    // console.log(figureWidth);
    $('div#menu.center-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
    $('div#menu.center-logo section#quickSearch.quickSearchResults figure.card-figure').css({
      'height': (figureWidth) + 'px'
    });
    $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
  }, 200);

    // RIGHT LOGO
    // CUSTOM - SET FIGURE HEIGHT TO EQUAL FIGURE WIDTH TO KEEP FIGURE SQAURE
    setInterval(function(){
      // console.log('window-change!');
    var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').width();
    // console.log(figureWidth);
    $('div#menu.right-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
    $('div#menu.right-logo section#quickSearch.quickSearchResults figure.card-figure').css({
      'height': (figureWidth) + 'px'
    });
    $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
  }, 200);

$('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");

$(".navPages-quickSearch input").click(function(e){
  $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
  // CUSTOM - SET QUICKSEARCH DROPDOWN WIDTH EQUAL TO SEARCH FIELD
  // var searchFieldWidth = $('.navPages-quickSearch.right.searchbar .form-fieldset').width();
  var searchFieldWidth = $('header.header').width();
  searchFieldWidth = (searchFieldWidth * .6);
  // console.log(searchFieldWidth);
  $('div#menu.left-logo section#quickSearch.quickSearchResults').css({
    'width': (searchFieldWidth) + 'px'
  });
  // LEFT LOGO
  // CUSTOM - SET CARD WIDTH TO EQUAL ARTICLE WIDTH MINUS FIGURE WIDTH
  setInterval(function(){
    // console.log('window-change!');
  var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
  var articleWidth = $('section#quickSearch.quickSearchResults article.card').width();
  // console.log(articleWidth);
  $('div#menu.left-logo section#quickSearch .productGrid[data-list-name="Quick Search Results"] article.card .card-body').css({
    'width': (articleWidth-figureWidth) + 'px'
  });
  // CUSTOM - SET FIGURE WIDTH TO EQUAL FIGURE HEIGHT TO KEEP FIGURE SQAURE
  var figureWidth = $('section#quickSearch.quickSearchResults figure.card-figure').height();
  // console.log(figureWidth);
  $('div#menu.left-logo section#quickSearch.quickSearchResults figure.card-figure img').attr('style', 'max-height:' +figureWidth+ 'px !important');
  $('div#menu.left-logo section#quickSearch.quickSearchResults figure.card-figure').css({
    'width': (figureWidth) + 'px'
  });
  $('section#quickSearch.quickSearchResults .productGrid .product').css("opacity", "1");
}, 200);
});
}
}
}, false);

$( document ).ready(function() {
// MAKE COMPARE TEXT CLICKABLE IN LIST VIEW
$( ".listItem-body label.button.button--small.card-figcaption-button.compare" ).on ('click', function() {
  // console.log('compare-area-clicked!');
  var checkBox = $(this).find("input[type='checkbox']");
  checkBox.prop("checked", !checkBox.prop("checked"));
});
});



/**
 * Gets the browser name or returns an empty string if unknown.
 * This function also caches the result to provide for any
 * future calls this function has.
 *
 * @returns {string}
 */
var browser = function() {
  var ua = navigator.userAgent;
    // Return cached result if avalible, else get result then cache it.
    if (browser.prototype._cachedResult)
        return browser.prototype._cachedResult;

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
      $('#body').addClass('firefox');
    }

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
      // console.log('safari');
      $('#body').addClass('safari');
    }

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (isIE = /*@cc_on!@*/false || !!document.documentMode) {
      $('#body').addClass('internet-explorer');
    } else {
      $('#body').addClass('not-internet-explorer');
    }

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
      var isChromium = window.chrome;
        if(isChromium){
          // console.log("chrome");
          $('#body').addClass('chrome');
      }


    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return browser.prototype._cachedResult =
        isOpera ? 'Opera' :
        isFirefox ? 'Firefox' :
        isSafari ? 'Safari' :
        isChrome ? 'Chrome' :
        isIE ? 'IE' : 'NOT IE'
        isEdge ? 'Edge' :
        isBlink ? 'Blink' :
        "Don't know";
};

console.log(browser());


$(window).on("load", function(){
  $(".category .page-content.both-grid-list-views").css("opacity", "1");
});

if (!$(".product-filtering-enabled")[0]) {
$('a.toggle-link.list').on("click", function(){
    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?list-active';
        window.history.pushState({path:newurl},'',newurl);
    }
});
}
if (!$(".product-filtering-enabled")[0]) {
$('a.toggle-link.grid').on("click", function(){
    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?grid-active';
        window.history.pushState({path:newurl},'',newurl);
    }
});
}

if (!$(".product-filtering-enabled")[0]) {
  $('a.pagination-link').on("click", function(){
    var uri = window.location.toString();
    // console.log(uri);
    if ( (uri.indexOf("?list-active") > 0) || (uri.indexOf("?grid-active") > 0) ) {
      $(this).attr({
        href: $(this).attr("href") + window.location.search
      });
    }
  });
}

if (!$(".product-filtering-enabled")[0]) {
$( document ).ready(function() {
	var uri = window.location.toString();
  // console.log(uri);
  if ( (uri.indexOf("?list-active") > 0) && (!$('a.toggle-link.list').hasClass('default')) ) {
    // console.log('list-is-active');
    $('a.toggle-link.list').trigger("click");
  } else if ( (uri.indexOf("?grid-active") > 0) && (!$('a.toggle-link.grid').hasClass('default')) ) {
      // console.log('grid-is-active');
      $('a.toggle-link.grid').trigger("click");
    }
});
}

$(window).on("load", function(){
  $('ul.productList.visible').css("opacity", "1");
  $('ul.productGrid.visible').css("opacity", "1");
});

// $(document).ready(function() {
//   $(".custom-pages-nav .navPages-action.has-subMenu").on("click touchend", function(e) {
//      e.preventDefault();
//     var el = $(this);
//     var link = el.attr("href");
//     window.location = link;
//   });
// });

$(document).ready(function(){
	$(".add-to-cart-button").each(function() {
    if ($.trim($(this).html()).length <= 0 ) {
      var productLink = $(this).parents('.card-body').find('.card-title a').attr('href');
	     $(this).append("<a href="+productLink+" class='button button--small card-figcaption-button false-stock-message' data-product-id='{{id}}'>View Details</a>");
     }
	});
});
// COMPARE ENABLED
$(document).ready(function(){
	$(".compare-enabled .card-text .price-visibility").each(function() {
	   if ( ($.trim($(this).html()).length <= 0 ) && ($(".withTax")[0]) && ($(".withoutTax")[0]) ) {
       // console.log('withTax and withoutTax');
	     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
       $(this).append("<div class='price-section-withTax current-price'></div>");
       $(this).append("<div class='price-section-withoutTax current-price'></div>");
       // $(this).parents('li.product').find(".card-text.add-to-cart-button").prepend("<a href='{{url}}' class='button button--small card-figcaption-button false-stock-message' data-product-id='{{id}}'>{{out_of_stock_message}}</a>");
     }
		 });
});
$(document).ready(function(){
	$(".compare-enabled .card-text .price-visibility").each(function() {
	   if ( ($.trim($(this).html()).length <= 0 ) && ($(".withTax")[0]) && (!$(".withoutTax")[0]) ) {
       // console.log('withTax only');
	     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
       $(this).append("<div class='price-section-withTax current-price'></div>");
       // $(this).parents('li.product').find(".card-text.add-to-cart-button").prepend("<a href='{{url}}' class='button button--small card-figcaption-button false-stock-message' data-product-id='{{id}}'>{{out_of_stock_message}}</a>");
     }
		 });
});
$(document).ready(function(){
	$(".compare-enabled .card-text .price-visibility").each(function() {
	   if ( ($.trim($(this).html()).length <= 0 ) && (!$(".withTax")[0]) && ($(".withoutTax")[0]) ) {
       // console.log('withoutTax only');
	     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
       $(this).append("<div class='price-section-withoutTax current-price'></div>");
       // $(this).parents('li.product').find(".card-text.add-to-cart-button").prepend("<a href='{{url}}' class='button button--small card-figcaption-button false-stock-message' data-product-id='{{id}}'>{{out_of_stock_message}}</a>");
     }
		 });
});
// COMPARE DISABLED
$(document).ready(function(){
	$(".compare-disabled .card-text .price-visibility").each(function() {
	   if ( ($.trim($(this).html()).length <= 0 ) && ($(".withTax")[0]) && ($(".withoutTax")[0]) ) {
       // console.log('withTax and withoutTax');
	     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
       $(this).append("<div class='price-section-withTax current-price'></div>");
       $(this).append("<div class='price-section-withoutTax current-price'></div>");
     }
		 });
});
$(document).ready(function(){
	$(".compare-disabled .card-text .price-visibility").each(function() {
	   if ( ($.trim($(this).html()).length <= 0 ) && ($(".withTax")[0]) && (!$(".withoutTax")[0]) ) {
       // console.log('withTax only');
	     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
       $(this).append("<div class='price-section-withTax current-price'></div>");
     }
		 });
});
$(document).ready(function(){
	$(".compare-disabled .card-text .price-visibility").each(function() {
	   if ( ($.trim($(this).html()).length <= 0 ) && (!$(".withTax")[0]) && ($(".withoutTax")[0]) ) {
       // console.log('withoutTax only');
	     $(this).append("<div class='msrp-sale-regular-price-section'></div>");
       $(this).append("<div class='price-section-withoutTax current-price'></div>");
     }
		 });
});

$(document).ready(function(){
  if ($("a.button.button--small.card-figcaption-button.login-for-pricing")[0]) {
    $('.card-text .price-visibility.visible').hide();
  }
});

// SET ALL CARDS TO EQUAL HEIGHTS BY THE TALLEST CARD
// $(document).ready(function() {
//    var maxHeight = -1;
//    $('.card-body').each(function() {
//      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
//    });
//    $('.card-body').each(function() {
//      $(this).height(maxHeight);
//    });
//  });

 // SET ALL BUTTONS TO EQUAL HEIGHTS BY THE TALLEST BTN
 // $(window).on("load", function(){
 //    var maxHeight = -1;
 //    $('article.card .add-to-cart-button').each(function() {
 //      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
 //      console.log(maxHeight);
 //    });
 //    $('article.card .add-to-cart-button a').each(function() {
 //      $(this).attr('style', 'min-height:' +maxHeight+ 'px !important');
 //    });
 //  });

  $(document).ready(function(){
  	$(".add-to-cart-button.call-for-price span.line-one").each(function() {
      if ($.trim($(this).html()).length <= 0 ) {
  	     $(this).parents('.add-to-cart-button.call-for-price').addClass('line-one-empty');
       }
  	});
  });

  $(document).ready(function(){
    $(".add-to-cart-button.call-for-price span.line-two").each(function() {
      if ($.trim($(this).html()).length <= 0 ) {
         $(this).parents('.add-to-cart-button.call-for-price').addClass('line-two-empty');
       }
    });
  });

  $(window).on("load", function(){
    var maxHeight = -1;
    $('.body.content .card .current-price').each(function() {
      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
      // console.log(maxHeight);
    });
    $('.body.content .card .current-price').each(function() {
      $(this).attr('style', 'min-height:' +maxHeight+ 'px !important');
    });
  });

// QUICKVIEW FOR MOBILE
  $('article.mobile-quickview-active a.image-link.mobile').on ('click', function(event) {
    event.preventDefault();
  });
  $('article.mobile-quickview-active figure').on ('click', function(event) {
  $('article.mobile-quickview-active figure.active').not(this).removeClass('active');
    $(this).toggleClass('active');
});

// CHECK IF ONLY THREE SLIDES EXIST IN VERTICAL SLIDER & ADD CLASS
$(window).on("load", function(){
  var numOfSlides = $('.sidebar.right .carousel-vertical.three-slides .slick-slide').length;
  console.log(numOfSlides);
  if ( numOfSlides <= 3 ) {
    // console.log('single-slide');
      // $('.sidebar.right .carousel-vertical').addClass('single-slide');
  }
});
// CHECK IF ONLY FOUR SLIDES EXIST IN VERTICAL SLIDER & ADD CLASS
$(window).on("load", function(){
  var numOfSlides = $('.sidebar.right .carousel-vertical.four-slides .slick-slide').length;
  // console.log(numOfSlides);
  if ( numOfSlides <= 4 ) {
    // console.log('single-slide');
      // $('.sidebar.right .carousel-vertical').addClass('single-slide');
  }
});
// CHECK IF ONLY FIVE SLIDES EXIST IN VERTICAL SLIDER & ADD CLASS
$(window).on("load", function(){
  var numOfSlides = $('.sidebar.right .carousel-vertical.five-slides .slick-slide').length;
  // console.log(numOfSlides);
  if ( numOfSlides <= 5 ) {
    // console.log('single-slide');
      // $('.sidebar.right .carousel-vertical').addClass('single-slide');
  }
});
// CHECK IF ONLY SIX SLIDES EXIST IN VERTICAL SLIDER & ADD CLASS
$(window).on("load", function(){
  var numOfSlides = $('.sidebar.right .carousel-vertical.six-slides .slick-slide').length;
  // console.log(numOfSlides);
  if ( numOfSlides <= 6 ) {
    // console.log('single-slide');
      // $('.sidebar.right .carousel-vertical').addClass('single-slide');
  }
});


// window.addEventListener("resize", function() {
//   // HOME PRODUCTS
//   setTimeout(function(){
//     if($(window).innerWidth() <= 800) {
//       $('a.image-link').on ('click', function(event) {
//         event.preventDefault();
//       });
//       $('figure').on ('click', function(event) {
//       $('figure.active').not(this).removeClass('active');
//         $(this).toggleClass('active');
//     });
//     }
//   }, 200);
// });

// $('a.mobile-image-link .mobile-link-text').on ('click', function(event) {
//   console.log("details clicked!");
// });
// window.addEventListener("resize", function() {
//   if($(window).innerWidth() <= 800) {
//     $('a.image-link').on ('click', function(event) {
//       event.preventDefault();
//     });
//   $('figure').on ('click', function(event) {
//   $('figure.active').not(this).removeClass('active');
//     $(this).toggleClass('active');
//   });
//   }
// });


// $('#accountloginsignup h1').click(function() {
//     if ($('#takeonebar').hasClass('slamdown')){
//         $('#takeonebar').removeClass('slamdown');  /missing . before removeClass
//     } else {
//         $('#takeonebar').addClass('slamdown');
//       }
// });


// BEGIN BUTTON ANIMATION - POSITION AWARE
$(function() {
  $('html.position-aware-btnAnimate .button')
    .on('mouseenter', function(e) {
            // console.log("mouseenter");
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });
});
// END BUTTON ANIMATION - POSITION AWARE

$( ".search.mobile a.navUser-action.account.search" ).on ('click', function(event) {
  event.preventDefault();
  $('svg[title="search"]').toggleClass('active');
  $('.header.header').toggleClass('is-open');
  $('.header.header').addClass('search-only');

  $('#body').removeClass('is-open');
  $('#body').toggleClass('search-only');

  $( ".mobileMenu-toggle" ).removeClass('is-open');
  $( "#body" ).removeClass('has-activeNavPages');
  $('div#menu').removeClass('is-open');
});

$( ".mobileMenu-toggle" ).on ('click', function() {
  $('svg[title="search"]').removeClass('active');
  $('.header.header').removeClass('search-only');
  $( "#body" ).toggleClass('has-activeNavPages');
  $('#body').removeClass('search-only');
  $('#body').removeClass('is-open');
  $('html').removeClass('quickSearchResultsActive');
  $('#body').removeClass('quickSearchResultsActive');
  $('header-container').removeClass('quickSearchResultsActive');
  $('.main-nav-container').removeClass('quickSearchResultsActive');
  $('.top-menu .content').removeClass('quickSearchResultsActive');
  $("section.quickSearchResults").empty();
  $('a.modal-close.custom-quick-search').fadeOut();
});

$( ".currency-converter.mobile a.navPages-action.has-subMenu").on ('click', function(event) {
  $(this).toggleClass('open');
  $('div#navPages-currency').slideToggle(150);
});

$( "span.down-arrow").on ('click', function(event) {
  $(this).toggleClass('open');
});


if( $.trim( $('.navPages-item.store-credit.desktop').html() ).length ) {
    $('.top-menu').addClass('store-credit-visible');
    // console.log('store credit visible');
  } else {
    $('.top-menu').removeClass('store-credit-visible').addClass('store-credit-hidden');
    // console.log('store credit hidden');
  }



  $(window).scroll(function() {
      if ($(this).scrollTop() > 50 ) {
          $('.top-menu').addClass("fixed");
      } else {
          $('.top-menu').removeClass("fixed");
      }
  });


// SET MENU TO MOBILE OR DESKTOP ON LOAD
  var windowsize = $(window).width();
  if (windowsize > 800) { // DESKTOP 801PX OR MORE
    $('.mobile-menu.navPages-container').removeAttr('id');
    $('.navPages-container.main-nav.desktop').attr('id', 'menu');
  }
  if (windowsize <= 800) { // MOBILE 800PX OR LESS
    $('.navPages-container.main-nav.desktop').removeAttr('id');
    $('.mobile-menu.navPages-container').attr('id', 'menu');
  }

$('#search-results-content.u-hiddenVisually').remove();


// CUSTOM FACET ARROWS
// $('div#facetedSearch-content--price .form-minMaxRow .form-field').hover(
//     function () {
//         $(this).focus();
//     }
// );
// $('div#facetedSearch-content--price .form-minMaxRow .form-field:before').hover(
//     function () {
//         $(this).find('.form-field').focus();
//     }
// );
// $('div#facetedSearch-content--price .form-minMaxRow .form-field:after').hover(
//     function () {
//         $(this).find('.form-field').focus();
//     }
// );
// $('input[type=number]::-webkit-inner-spin-button').hover(
//     function () {
//         $(this).find('.form-field').focus();
//     }
// );
// $('input[type=number]::-webkit-inner-spin-button').hover(
//     function () {
//         $(this).find('.form-field').focus();
//     }
// );
//
// $('div#facetedSearch-content--price .form-minMaxRow .form-field input').hover(
//     function () {
//       $(this).toggleClass('focus');
//         $(this).next(':before').fadeIn();
//     }
// );
// $('div#facetedSearch-content--price .form-minMaxRow .form-field input').hover(
//     function () {
//       $(this).toggleClass('focus');
//         $(this).next(':after').fadeIn();
//     }
// );


// $('.main-nav-container #menu .category-menu li a').on ('hover', function(event) {
//  event.preventDefault();
// });


// LOAD CONTENT WHEN SCROLLED INTO VIEW

// PLACE SIDENAV WITHIN MOBILE MENU FOR MOBILE DEVICES
// if($(window).innerWidth() <= 800) {
//   $('.sideCategoryList .category-list').appendTo(".sidecategoryList-relocated-for-mobile");
// }
// if($(window).innerWidth() > 800) {
//   $('.sidecategoryList-relocated-for-mobile .category-list').appendTo(".sideCategoryList");
//   console.log('desktop');
// }

// window.addEventListener("resize", function() {
//   if($(window).innerWidth() <= 800) {
//     $('.sideCategoryList .category-list').detach().appendTo(".sidecategoryList-relocated-for-mobile");
//     console.log('mobile');
//   }
//   if($(window).innerWidth() > 800) {
//     $('.sidecategoryList-relocated-for-mobile .category-list').detach().appendTo(".sideCategoryList");
//     console.log('desktop');
//   }
// });
$('.title').on('click',function(e){
  const target = $(e.target)
  const targetArtice = target.siblings();
  targetArtice.slideToggle();
  const targetabc = target.hasClass('removeAdd');
  if(targetabc) {
    target.removeClass('removeAdd');
  } else {
    target.addClass('removeAdd');
  }

})
