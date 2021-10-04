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
        const $navList = $('.main-nav .custom-pages-nav');
        if(proNum == 0){
            $nav_products.show();
            $products.addClass('active');
            if ($navList.width() > $nav_products.width()) {
                $nav_products.css({"display":"inline-flex", "left": '0'});
            } else {
                $nav_products.css({"display":"inline-flex", "right": '0'});
            }
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

    // $getUpdate.on('click',function(){
    //     $modal.toggle();
    //     // $(body).css("background","rgba(60, 70, 77, 0.95);");
    //     $('.modal-close').on("click",function(){
    //         $modal.hide();
    //     });
    // });
}