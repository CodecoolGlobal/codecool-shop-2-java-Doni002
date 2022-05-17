package com.codecool.shop.dao.implementation;

import com.codecool.shop.dao.CartDao;
import com.codecool.shop.model.Product;

import java.util.HashMap;

public class CartDaoMem {

    static HashMap<Product, Integer> cart = new HashMap<>();

    static public void add(Product product, Integer quantity) {
        cart.put(product, quantity);
    }

    static public void remove(Product product) {

    }

    static public HashMap<Product, Integer> getAll() {
        return cart;
    }
}
