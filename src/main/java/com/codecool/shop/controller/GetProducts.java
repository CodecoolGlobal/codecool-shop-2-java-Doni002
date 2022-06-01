package com.codecool.shop.controller;


import com.codecool.shop.dao.implementation.CartDaoMem;
import com.codecool.shop.model.HashmapToJsonModel;
import com.codecool.shop.model.Product;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet(urlPatterns = {"/cart/api/get"})
public class GetProducts extends HttpServlet {
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HashMap<Product, Integer> products = CartDaoMem.getAll();
        PrintWriter out = resp.getWriter();
        List<String> jsonList = new ArrayList<>();
        Gson gson = new Gson();
        for (Map.Entry<Product,Integer> entry : products.entrySet()){
        jsonList.add(gson.toJson(new HashmapToJsonModel(entry.getKey().getDefaultPrice(),entry.getValue(),
                entry.getKey().getId(), entry.getKey().getName())));
    }
        out.println(jsonList);
}
}
