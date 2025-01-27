package com.misho.ecommerce.service;

import com.misho.ecommerce.dto.PaymentInfo;
import com.misho.ecommerce.dto.Purchase;
import com.misho.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
