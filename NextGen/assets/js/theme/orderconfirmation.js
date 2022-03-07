
import PageManager from './page-manager';

export default class Orderconfirmation extends PageManager {
    onReady() {
        console.log('orderconfirmation');
        this.getOrder(this.context.orderId);
    }
    getOrder(orderId) {
        $.ajax({
            url: '/api/storefront/orders/' + orderId + '?include=payments,lineItems.physicalItems.options,lineItems.digitalItems.options',
            type: 'GET',
            success: function(data) {
                var orderCoupon = '';
                var orderCouponPrice = 0;
                if (data.coupons && data.coupons.length > 0) {
                    var coupons = data.coupons[0];
                    orderCoupon = coupons.code;
                    orderCouponPrice = coupons.discountedAmount;
                }

                var orderProducts = [];
                if (data.lineItems && data.lineItems.physicalItems && data.lineItems.physicalItems.length > 0) {
                    const physicalItems = data.lineItems.physicalItems;
                    physicalItems.forEach(function(physicalItem, index) {
                        var salePrice = 0;

                        if (physicalItem.salePrice) salePrice = physicalItem.salePrice
                        orderProducts.push({
                            'id': physicalItem.productId || '',
                            'name': physicalItem.name || '',
                            'price': salePrice.toFixed(2).toString(),
                            'category': '',
                            'brand': '',
                            'coupon': '',
                            'variant': '',
                            'quantity': (physicalItem.quantity || '0').toString(),
                        })
                    })
                }

                window.dataLayer = window.dataLayer || [];
                const revenue = date.orderAmount - data.shippingCostTotal - data.taxTotal ;
                
                dataLayer.push({
                    "ecommerce": {
                        "currencyCode": "USD",
                        "purchase": {
                            "actionField": {
                                "id": orderId,
                                "revenue": revenue.toFixed(2).toString(), // Tax and Shipping EXCLUDED
                                "shipping": data.shippingCostTotal.toFixed(2).toString(),
                                "tax": data.taxTotal.toFixed(2).toString(), // 5% on Product and Shipping
                                "affiliation": "",
                                "coupon": orderCoupon // 10% discount
                            },
                            "products": orderProducts
                        }
                    },
                    "eventCategory": "Ecommerce",
                    "eventAction": "confirmation",
                    "eventLabel": "",
                    "eventValue": 0,
                    "eventNonInteractive": true,
                    "user_id": "",
                    "event": "confirmation"
                });
            },
            error: function(xhr, status) {
                console.log(xhr);
            }
        });
    }
}
