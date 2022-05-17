package com.codecool.shop.controller;

import com.codecool.shop.config.DataBaseInitializer;
import com.codecool.shop.dao.implementation.CartDaoMem;
import com.codecool.shop.model.Product;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = {"/cart/add"})
public class AddToCartServlet extends HttpServlet{

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        int productId = Integer.parseInt(req.getParameter("productId"));
        Product product = DataBaseInitializer.productDataStore.find(productId);
        CartDaoMem.add(product);


    }

}