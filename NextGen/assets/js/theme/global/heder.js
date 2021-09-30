export default function () {
    const $products = $('.header_products');
    const $nav_products=$('.nav_products');
    const $down_arrow = $('li .down-arrow');
    const $getUpdate = $('.getUpdate');
    const $modal = $('#getUpdateModal');
    let proNum = 0;
    let itemNum = 0;
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

    $getUpdate.on('click',function(){
        $modal.toggle();
        // $(body).css("background","rgba(60, 70, 77, 0.95);");
        $('.modal-close').on("click",function(){
            $modal.hide();
        });
    });
}