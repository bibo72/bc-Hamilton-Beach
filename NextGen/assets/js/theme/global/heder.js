export default function () {
    const $products = $('.header_products');
    const $nav_products=$('.nav_products');
    const $down_arrow = $('li .down-arrow');
    
    let proNum = 0;
    // pc chilk products
    $products.on('click',function(){
        if(proNum == 0){
            $nav_products.show();
            $nav_products.css("display","inline-flex");
            $products.addClass('active');
            proNum++;
        }else{
            $nav_products.hide();
            $products.removeClass('active');
            proNum = 0;
        }
        
    });
    $down_arrow.on('click',function(){
        console.log($(this).parents('.navPages-item'));
        const $li = $(this).parents('.navPages-item');
        // $li.addClass('down_active');
    });

}