package com.codecool.shop.model;

import java.math.BigDecimal;

public class HashmapToJsonModel {

    BigDecimal price;
    int quantity;
    int id;
    String name;

    public HashmapToJsonModel(BigDecimal price, int quantity, int id, String name) {
        this.price = price;
        this.quantity = quantity;
        this.id = id;
        this.name = name;
    }



}
