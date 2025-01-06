package com.misho.ecommerce.dto;

import com.misho.ecommerce.entity.Address;
import com.misho.ecommerce.entity.Customer;
import com.misho.ecommerce.entity.Order;
import com.misho.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
