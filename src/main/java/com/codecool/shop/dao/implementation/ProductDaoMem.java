package com.codecool.shop.dao.implementation;


import com.codecool.shop.dao.ProductCategoryDao;
import com.codecool.shop.dao.ProductDao;
import com.codecool.shop.dao.SupplierDao;
import com.codecool.shop.model.Product;
import com.codecool.shop.model.ProductCategory;
import com.codecool.shop.model.Supplier;

import javax.sql.DataSource;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ProductDaoMem implements ProductDao {

    private DataSource dataSource;
    private List<Product> data = new ArrayList<>();
    private static ProductDaoMem instance = null;

    /* A private Constructor prevents any other class from instantiating.
     */
    public ProductDaoMem(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    private ProductDaoMem() {
    }

    public static ProductDaoMem getInstance() {
        if (instance == null) {
            instance = new ProductDaoMem();
        }
        return instance;
    }

    @Override
    public void add(Product product) {
        product.setId(data.size() + 1);
        data.add(product);
    }


    @Override
    public Product find(int id) {
        return data.stream().filter(t -> t.getId() == id).findFirst().orElse(null);
    }

    @Override
    public void remove(int id) {
        data.remove(find(id));
    }

    @Override
    public List<Product> getAll(ProductCategoryDao productCategory, SupplierDao supplierDao) {
        try (Connection connection = dataSource.getConnection()) {
            String sql = "SELECT product.name, product.price, product.currency, product.description, c.name, c.department, c.description, s.name, s.description, product.id FROM product\n" +
                    "JOIN category c on c.id = product.category_id\n" +
                    "JOIN supplier s on s.id = product.supplier_id";
            ResultSet resultSet = connection.createStatement().executeQuery(sql);
            List<Product> result = new ArrayList<>();
            Product product = null;
            while (resultSet.next()) {
                product = new Product(
                        resultSet.getString(1),
                        new BigDecimal(resultSet.getString(2)),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        new ProductCategory(resultSet.getString(5),
                                resultSet.getString(6),
                                resultSet.getString(7)),
                        new Supplier(resultSet.getString(8),
                                resultSet.getString(9)),
                        resultSet.getInt(10));
                result.add(product);
            }
            return result;
        } catch (SQLException throwables) {
            throw new RuntimeException("Error while reading data", throwables);
        }
    }

    @Override
    public List<Product> getBy(Supplier supplier) {
        return data.stream().filter(t -> t.getSupplier().equals(supplier)).collect(Collectors.toList());
    }

    @Override
    public List<Product> getBy(ProductCategory productCategory) {
        return data.stream().filter(t -> t.getProductCategory().equals(productCategory)).collect(Collectors.toList());
    }
}
