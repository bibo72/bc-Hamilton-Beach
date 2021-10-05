function renderSubscribeForm() {
    const title = window.newletterTitle || 'Join our mailing list and';
    const description = window.newletterDescription || 'stay up to date with product availability';
    $('.footer .newsletter .footer-info-heading').html(`${title}<span class="smaller lighter lowercase">${description}</span`);
    $('.hp-newsletterSubscription h1').html(`<h1><div class="title-1">${title}</div> ${description}</h1>`);
}
function renderGetUpdateSubscribeForm() {
    const title = window.getUpdatesTitle || 'Join our mailing list and';
    const description = window.getUpdatesDescription || 'stay up to date with product availability';
    $('.modal .newsletter .footer-info-heading').html(`${title}<span class="smaller lighter lowercase">${description}</span`);
}
export default function () {
    const $products = $('.header_products');
    const $nav_products=$('.nav_products');
    const $dropdownLink = $('li.hover-open[data-dropdown]');
    const $down_arrow = $('li .down-arrow');
    const $getUpdate = $('.getUpdate');
    const $modal = $('#getUpdateModal');
    let itemNum = 0;
    // pc chilk products
    $products.on('mouseenter',() => {
        const $navList = $('.main-nav .custom-pages-nav');
        // $nav_products.show();
        $products.addClass('active');
        if ($navList.width() > $nav_products.width()) {
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
        const $dropDown = $target.find('[data-dropdown-content]');
        $target.attr('aria-expanded', 'true');
        $dropDown.addClass('is-open f-open-dropdown fadeIn').attr('aria-hidden', 'false').css("left", '0');
    }).on('mouseleave', (event) => {
        const $target = $(event.currentTarget);
        const $dropDown = $target.find('[data-dropdown-content]');
        $target.attr('aria-expanded', 'false');
        $dropDown.removeClass('is-open f-open-dropdown fadeIn').attr('aria-hidden', 'true').css("left", '-9999px');
    });

    $down_arrow.on('click',function(){
        if(itemNum == 0){
            $('.navPages-item').css("display","none");
            console.log($(this).parents('.navPages-item'));
            const $li = $(this).parents('.navPages-item');
            $li.css('display','block');
            itemNum++ ;
        }else{
            $('.navPages-item').css("display","block");
            itemNum = 0;
        }
        
    });
    $('[data-dropdown-custom]').on('click', (event) => {
        event.preventDefault();
        const $target = $(event.currentTarget);
        const controlId = $target.attr('data-dropdown-custom');
        const $dropdown = $(`#${controlId}`);
        $dropdown.slideToggle();
    });

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