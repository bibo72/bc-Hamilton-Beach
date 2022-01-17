function swithToConfirmationPage() {
    if (sessionStorage.getItem('newsletterType') === 'notify-me') {
        var notifySku = sessionStorage.getItem('newsletterSku');
        if (notifySku !== 'notify') {
            // product notify
            window.location.href = '/notify-me-confirmation-' + notifySku + '/';
        } else {
            // header notify
            window.location.href = '/notify-me-confirmation/';
        }
    } else {
        // newsletter
        window.location.href = '/newsletter-confirmation/';
    }
}

function setKlaviyoForm(sku) {
    if (sku !== 'newsletter') {
        $('.modal-body .klaviyo-forms >div').hide();
        $(`.modal-body .klaviyo-forms >div[data-type="${sku}"]`).show();
    }
}
function newsletterSubscribe() {
    $('body').on('click', '[data-reveal-id="getUpdateModal"]', event => {
        event.preventDefault();
        const sku = $(event.currentTarget).attr('data-product-sku') || '';
        sessionStorage.setItem('newsletterSku', sku);
        // set kleviyo form
        setKlaviyoForm(sku);
    });

    // $('body').on('click', 'form.klaviyo-form button[type="button"]', event => {
    //     const $submitButton = $(event.currentTarget);
    //     const $form = $submitButton.parents('form');
    //     const $modal = $submitButton.parents('.modal');
    //     // set newsletterType
    //     sessionStorage.setItem('newsletterType', '');
    //     if ($modal.length) {
    //         sessionStorage.setItem('newsletterType', 'notify-me');
    //     }
        
    //     const email = $form.find('input[name="email"]').val();
    //     if (!email) return false;
    //     $submitButton.prop('disabled', true);

    //     const submitInterval = setInterval(() => {
    //         if ($form.find('input[name="email"]').length === 0) {
    //             clearInterval(submitInterval);
    //             swithToConfirmationPage();
    //         }
    //     });
    // });
}
function zendeskButton() {
    // enable chat button after zendesk origin button loaded.
    let count = 0;
    const zendeskInterval = setInterval(() => {
        if (count > 10) {
            clearInterval(zendeskInterval);
        }
        if ($('#launcher').length) {
            count++;
            clearInterval(zendeskInterval);
            $('.button--chat').removeAttr('disabled');
        }
    }, 1000);
}
export default function(){
    $('.footer-container-mobile a.list-action i').on("click",function(event){
        event.preventDefault();
        const $li = $(this).parents('.accordion-navigation');
        $li.toggleClass('is-open');
    });
    // $('.contactUs_icon').html(
    //     `<svg><use xlink:href="#icon-speechBubbles" /></svg>`
    // );
    // console.log($('.contactUs_icon'));
    newsletterSubscribe();
    zendeskButton();
}