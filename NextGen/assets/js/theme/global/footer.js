export default function(){
    $('.footer-container-mobile a.list-action i').on("click",function(event){
        event.preventDefault();
        const $li = $(this).parents('.accordion-navigation');
        $li.toggleClass('is-open');
    });
    $('.contactUs_icon').html(
        `<svg><use xlink:href="#icon-speechBubbles" /></svg>`
    );
    console.log($('.contactUs_icon'));
}