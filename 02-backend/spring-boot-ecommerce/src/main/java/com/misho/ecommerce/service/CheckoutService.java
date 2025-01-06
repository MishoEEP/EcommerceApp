package com.misho.ecommerce.service;

import com.misho.ecommerce.dto.Purchase;
import com.misho.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

}
