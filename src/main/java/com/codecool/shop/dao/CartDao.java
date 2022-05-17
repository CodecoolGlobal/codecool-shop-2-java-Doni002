package com.codecool.shop.dao;

import com.codecool.shop.model.Product;

import java.util.HashMap;

public interface CartDao {

    void add(int id, Product product);

    void remove(int id);

    HashMap<Integer, Product> getAll();
}
