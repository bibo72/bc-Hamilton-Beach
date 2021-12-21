import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import utils from '@bigcommerce/stencil-utils';
import modalFactory, { alertModal, showAlertModal } from './global/modal';
export default class Category extends CatalogPage {
    onReady() {
        compareProducts(this.context.urls);

        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }
        this.cardAddToCart();
    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        });
    }
    // qty change
    cardQTYChange(){
        const $qtyDiv = $("[data-card-quantity-change]");
        const $dec = $qtyDiv.find("[data-card-action='dec']");
        const $inc = $qtyDiv.find("[data-card-action='inc']");
        $dec.on("click",(event)=>{
            event.preventDefault();
            let value = $(event.currentTarget).siblings("input").val();
            if(value == 0){
                value = 0
            }else{
                value --
            }
            $(event.currentTarget).siblings("input").val(value);
        });
        $inc.on("click",(event)=>{
            event.preventDefault();
            let value = $(event.currentTarget).siblings("input").val();
            value++;
            $(event.currentTarget).siblings("input").val(value);
        });
    }
    //add to cart
    cardAddToCart(){
        this.cardQTYChange();
        const $addBtn = $("[data-card-action='add']");
        $addBtn.on("click",(event)=>{
            const $target = $(event.target);
            const $cardBody = $target.parents(".card-body");
            // const sku = $cardBody.find("[data-product-sku]").text();
            const id = $target.attr("data-product-id");
            const qty = $cardBody.find(".form-input--incrementTotal").val();
            console.log(id);
            console.log(qty);
            const formData = new FormData();
            formData.append('action', 'add');
            formData.append('product_id', id);
            formData.append('qty[]', qty);
            if(qty > 0 ){


                utils.api.cart.itemAdd
                utils.api.cart.itemAdd(formData, (err, response) => {
                    const errorMessage = err || response.data.error;
                    if (errorMessage) {
                        // Strip the HTML from the error message
                        const tmp = document.createElement('DIV');
                        tmp.innerHTML = errorMessage;
                        return showAlertModal(tmp.textContent || tmp.innerText);
                    }
                    window.location.href = "/cart.php";
                })
            }
            


        });
    }

}
