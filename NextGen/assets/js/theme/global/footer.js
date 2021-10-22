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
function newsletterSubscribe() {
    $('body').on('submit', 'form[action="/subscribe.php"]', event => {
        event.preventDefault();
        const $form = $(event.currentTarget);
        const $submitButton = $form.find('input[type="submit"]');
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
                        triggerContactForm($submitButton, email, message);
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