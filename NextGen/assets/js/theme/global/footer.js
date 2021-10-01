export default function(){
    console.log($('.container-mobile'));
    let actionNum = 0
    $('.footer-container-mobile a.list-action').on("click",function(event){
        event.preventDefault();
        $(this).siblings('.content').toggle();
        if(actionNum == 0){
            $(this).find('svg').html(`<use xlink:href="#icon-angle-up" />`);
            actionNum++ ; 
        }else{
            $(this).find('svg').html(`<use xlink:href="#icon-angle-down" />`);
            actionNum = 0;
        }
    });
}