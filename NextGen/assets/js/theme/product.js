/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/form-utils';
import '@fancyapps/fancybox';
import { hasClass } from 'nod-validate';

export default class Product extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
        this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    }

    onReady() {
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', () => {
            if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        videoGallery();

        const $reviewForm = classifyForm('.writeReview-form');
        const review = new Review($reviewForm);

        $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
        });

        $reviewForm.on('submit', () => {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();
        this.bulkPricingHandler();
        this.overViewAndFeature();
    }

    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }

    bulkPricingHandler() {
        if (this.url.indexOf('#bulk_pricing') !== -1) {
            this.$bulkPricingLink.trigger('click');
        }
    }
    overViewAndFeature() {
            let number1 = 0
            let number2 = 0
            let number4 = 0
        $('.tab-content-title-Overview').on('click',function(){
            const addnumber1 = (++number1)%2
            if(addnumber1 == 1) {
                $('.tab-content-title-Overview').addClass('fixAngle')
            }else {
                $('.tab-content-title-Overview').removeClass('fixAngle')
            }
            $('.overview .product-detail-overview').toggle()

        })
        $('.tab-content-title-Features').on('click',function(){
            let addnumber2 = (++number2)%2
            if(addnumber2 == 1) {
                $('.tab-content-title-Features').addClass('fixAngle')
            }else {
                $('.tab-content-title-Features').removeClass('fixAngle')
            }
            $('.features .product-detail-features').toggle()
        })
        $('.tab-content-Videos').on('click',function(){
            let addnumber4 = (++number4)%2
            if(addnumber4 == 1) {
                $('.tab-content-Videos').addClass('fixAngle')
            }else {
                $('.tab-content-Videos').removeClass('fixAngle')
            }
            $('.product-detail-videos').toggle()
        })
        $('.tab-content-moblie').on('click',function(e){
            const eve = $(e.target);
            eve.siblings('div').toggle();
            if( eve.hasClass('fixAngle')) {
                eve.removeClass('fixAngle')
            }else {
                eve.addClass('fixAngle')
            }
        })
    }
}
