package com.codecool.shop.dao.implementation;

import com.codecool.shop.dao.CartDao;
import com.codecool.shop.model.Product;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

public class CartDaoMem {

    static HashMap<Product, Integer> cart = new HashMap<>();

    static public void add(Product product) {
        if(cart.containsKey(product)){
            cart.replace(product, cart.get(product) + 1);
        } else {
            cart.put(product, 1);
        }
    }

    static public void remove(Product product) {

    }

    static public HashMap<Product, Integer> getAll() {
        return cart;
    }
}
