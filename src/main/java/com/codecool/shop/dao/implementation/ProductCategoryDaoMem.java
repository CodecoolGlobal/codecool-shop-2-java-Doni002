package com.codecool.shop.dao.implementation;


import com.codecool.shop.dao.ProductCategoryDao;
import com.codecool.shop.model.Product;
import com.codecool.shop.model.ProductCategory;
import com.codecool.shop.model.Supplier;
import jdk.jfr.Category;

import javax.sql.DataSource;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProductCategoryDaoMem implements ProductCategoryDao {

    private DataSource dataSource;
    private List<ProductCategory> data = new ArrayList<>();
    private static ProductCategoryDaoMem instance = null;

    /* A private Constructor prevents any other class from instantiating.
     */
    public ProductCategoryDaoMem(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public ProductCategoryDaoMem() {
    }


    public static ProductCategoryDaoMem getInstance() {
        if (instance == null) {
            instance = new ProductCategoryDaoMem();
        }
        return instance;
    }

    @Override
    public void add(ProductCategory category) {
        category.setId(data.size() + 1);
        data.add(category);
    }

    @Override
    public ProductCategory find(int id) {
        return null;
    }

    @Override
    public ProductCategory find(String id) {
        return null;
    }

    @Override
    public void remove(int id) {
        data.remove(find(id));
    }

    @Override
    public List<ProductCategory> getAll() {
        try (Connection connection = dataSource.getConnection()) {
            String sql = "SELECT name, department, description FROM category";
            ResultSet resultSet = connection.createStatement().executeQuery(sql);
            List<ProductCategory> result = new ArrayList<>();
            ProductCategory productCategory = null;
            while (resultSet.next()) {
                productCategory = new ProductCategory(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3));
                result.add(productCategory);
            }
            return result;
        } catch (SQLException throwables) {
            throw new RuntimeException("Error while reading data", throwables);
        }
    }
}
