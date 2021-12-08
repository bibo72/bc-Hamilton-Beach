import swal from './sweet-alert';

const networkErrorMsg = 'Something error, please try again.';
function triggerContactForm($submitButton, email, message) {
    $.ajax({
        url: '/pages.php?action=sendContactForm',
        type: 'POST',
        data: `page_id=15&contact_email=${encodeURIComponent(email)}&contact_question=${encodeURIComponent('Newsletter Subscribe')}`,
        success: () => {
            $submitButton.prop('disabled', false);
            swal({
                text: message,
                type: 'success',
            });
        },
        error: () => {
            $submitButton.prop('disabled', false);
            swal({
                text: networkErrorMsg,
                type: 'error',
            });
        }
    });
}
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
function newsletterSubscribe_old() {
    $('body').on('submit', 'form[action="/subscribe.php"]', event => {
        event.preventDefault();
        const $form = $(event.currentTarget);
        const $submitButton = $form.find('input[type="submit"]');
        const formType = $form.attr('data-type');
        sessionStorage.setItem('newsletterType', formType);
        const email = $(event.currentTarget).find('#nl_email').val();
        if (!email) return false;
        $submitButton.prop('disabled', true);
        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: $form.serialize(),
            success: (data) => {
                const dataDOM = document.createElement('div');
                dataDOM.innerHTML = data;
                const subscriptionTag = $(dataDOM).find('[data-subscription]');
                
                if (subscriptionTag.length) {
                    const message = subscriptionTag.attr('data-subscription-message');
                    if (subscriptionTag.attr('data-subscription-success') === 'true') {
                        // triggerContactForm($submitButton, email, message);
                        swithToConfirmationPage(formType);
                    } else {
                        swal({
                            text: message,
                            type: 'error',
                        });
                        $submitButton.prop('disabled', false);
                    }
                } else {
                    swal({
                        text: networkErrorMsg,
                        type: 'error',
                    });
                    $submitButton.prop('disabled', false);
                }
            },
            error: () => {
                swal({
                    text: networkErrorMsg,
                    type: 'error',
                });
            }
        });
    });
}
function getKlaviyoForm(sku) {
    // NOTE: formMap is only for dev, on live site, it will managed on: Script Manager > Klaviyo form.  if need to update this map, update both of them.
    // only for dev
    const formMap = {
        newsletter: {
            listId: 'VaeFzy',
            url : 'https://manage.kmail-lists.com/subscriptions/subscribe?a=SBFNGm&g=VaeFzy',
        },
        notify: {
            listId: 'WrGwUX',
            url: 'https://manage.kmail-lists.com/subscriptions/subscribe?a=SBFNGm&g=WrGwUX',
        },
        11010: {
            listId: 'RppTV2',
            url: 'https://manage.kmail-lists.com/subscriptions/subscribe?a=SBFNGm&g=RppTV2',
        },
        12010: {
            listId: 'WPi4AP',
            url: ' https://manage.kmail-lists.com/subscriptions/subscribe?a=SBFNGm&g=WPi4AP',
        },
        11030: {
            listId: 'TudyA4',
            url: ' https://manage.kmail-lists.com/subscriptions/subscribe?a=SBFNGm&g=TudyA4',
        },
        12030: {
            listId: 'QYJC9U',
            url: 'https://manage.kmail-lists.com/subscriptions/subscribe?a=SBFNGm&g=QYJC9U',
        },
        11020: {
            listId: 'W4NvmX',
            url: 'https://manage.kmail-lists.com/subscriptions/subscribe?a=SBFNGm&g=W4NvmX',
        },
        12020: {
            listId: 'R7RCEc',
            url: 'https://manage.kmail-lists.com/subscriptions/subscribe?a=SBFNGm&g=R7RCEc',
        },
    }
    return (window.klaviyoFormMap || formMap)[sku];
}
function setKlaviyoForm(sku) {
    let $form;
    if (sku === 'newsletter') {
        $form = $('[data-section-type="newsletterSubscription"] form')
    } else {
        $form = $('#getUpdateModal form');
    }
    const formInfo = getKlaviyoForm(sku);
    if ($form.length && formInfo) {
        $form.attr('action', formInfo.url);
        $form.find('input[name="g"]').val(formInfo.listId);
    }
}
function newsletterSubscribe() {
    setKlaviyoForm('newsletter');
    $('body').on('click', '[data-reveal-id="getUpdateModal"]', event => {
        event.preventDefault();
        const sku = $(event.currentTarget).attr('data-product-sku') || '';
        sessionStorage.setItem('newsletterSku', sku);
        // set kleviyo form
        setKlaviyoForm(sku);
    });
    // auto submit form - native subscribe
    // $('body').on('submit', 'form[action="/subscribe.php"]', event => {
    //     const $form = $(event.currentTarget);
    //     const formType = $form.attr('data-type');
    //     sessionStorage.setItem('newsletterType', formType);
    //     const email = $(event.currentTarget).find('#nl_email').val();
    //     if (!email) return false;
    // });
    // return;
    // manually submit form
    // $('body').on('submit', '#getUpdateModal form, [data-section-type="newsletterSubscription"] form', event => {
    //     const $form = $(event.currentTarget);
    //     const $submitButton = $form.find('input[type="submit"]');
    //     const formType = $form.attr('data-type');
    //     sessionStorage.setItem('newsletterType', formType);
    //     const email = $(event.currentTarget).find('#nl_email').val();
    //     if (!email) return false;
    //     $submitButton.prop('disabled', true);
    //     swithToConfirmationPage();
    // });
    $('body').on('submit', '#getUpdateModal form, [data-section-type="newsletterSubscription"] form', event => {
        event.preventDefault();
        const $form = $(event.currentTarget);
        const $submitButton = $form.find('input[type="submit"]');
        const formType = $form.attr('data-type');
        sessionStorage.setItem('newsletterType', formType);
        const email = $(event.currentTarget).find('#nl_email').val();
        const listId = $form.find('input[name="g"]').val();
        if (!email) return false;
        $submitButton.prop('disabled', true);
        // swithToConfirmationPage();

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
            "method": "POST",
            "headers": {
              "content-type": "application/x-www-form-urlencoded",
              "cache-control": "no-cache"
            },
            "data": {
              "g": listId,
              "email": email
            }
          }
           
          $.ajax(settings).done(function (response) {
            console.log(response);
            swithToConfirmationPage();
          });
    });
    
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
}