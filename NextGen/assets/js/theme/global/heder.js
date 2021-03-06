function renderFooterSubscribeForm() {
    const title = window.footerNewletterTitle || 'Join our mailing list and';
    const description = window.footerNewletterDescription || 'stay up to date with product availability';
    // footer
    $('.footer .newsletter .footer-info-heading').html(`${title}<span class="smaller lighter lowercase">${description}</span`);
}
function renderSubscribeForm() {
    const title = window.homepageNewletterTitle || 'Join our mailing List';
    const description = window.homepageNewletterDescription || 'stay up to date with product availability';
    // homepage
    $('.newsletterSubscription-h1').html(`<div class="title-1">${title}</div> ${description}`);
}
function renderGetUpdateSubscribeForm() {
    const title = window.getUpdatesTitle || 'Join our mailing list and';
    const description = window.getUpdatesDescription || 'stay up to date with product availability';
    // get update modal
    $('.modal .newsletter .footer-info-heading').html(`${title}<span class="smaller lighter lowercase">${description}</span`);
}
export default function () {
    const $products = $('.header_products');
    const $nav_products=$('.nav_products');
    const $nav_product=$('.main-nav.desktop .nav_products .nav_product');
    const $dropdownLink = $('li.hover-open[data-dropdown-hover]');
    const $down_arrow = $('li .down-arrow');
    const $getUpdate = $('.getUpdate');
    const $modal = $('#getUpdateModal');
    // pc chilk products
    $products.on('mouseenter',() => {
        const $navList = $('.main-nav .custom-pages-nav');
        // $nav_products.show();
        $products.addClass('active');
        const navWidth = $nav_product.length * 244 + 20;
        $nav_products.css({"width": navWidth + "px"});
        if ($navList.width() > navWidth) {
            $nav_products.css({"display":"inline-flex", "left": '0'});
        } else {
            $nav_products.css({"display":"inline-flex", "right": '0'});
        }
        $nav_products.addClass('fadeIn');
    }).on('mouseleave', () => {
        $nav_products.hide();
        $nav_products.removeClass('fadeIn');
        $products.removeClass('active');
    });

    $dropdownLink.on('mouseenter', (event) => {
        const $target = $(event.currentTarget);
        const $dropDown = $target.find('[data-dropdown-hover-content]');
        $target.attr('aria-expanded', 'true');
        $dropDown.addClass('is-open f-open-dropdown fadeIn').attr('aria-hidden', 'false').css("left", '0');
    }).on('mouseleave', (event) => {
        const $target = $(event.currentTarget);
        const $dropDown = $target.find('[data-dropdown-hover-content]');
        $target.attr('aria-expanded', 'false');
        $dropDown.removeClass('is-open f-open-dropdown fadeIn').attr('aria-hidden', 'true').css("left", '-9999px');
    });

    $down_arrow.on('click',function(){
        if($down_arrow.hasClass('open')){
            $('.navPages-item').css("display","none");
            const $li = $(this).parents('.navPages-item');
            $li.css('display','block');
        }else{
            $('.navPages-item').css("display","block");
        }
        
    });
    $('[data-dropdown-custom]').on('click', (event) => {
        // event.preventDefault();
        const $target = $(event.currentTarget);
        const controlId = $target.attr('data-dropdown-custom');
        const $dropdown = $(`#${controlId}`);
        $dropdown.slideToggle();
    });

    renderFooterSubscribeForm();
    renderSubscribeForm();
    renderGetUpdateSubscribeForm();
    // $getUpdate.on('click',function(){
    //     $modal.toggle();
    //     // $(body).css("background","rgba(60, 70, 77, 0.95);");
    //     $('.modal-close').on("click",function(){
    //         $modal.hide();
    //     });
    // });
}