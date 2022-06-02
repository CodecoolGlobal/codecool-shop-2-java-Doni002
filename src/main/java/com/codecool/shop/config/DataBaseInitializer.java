package com.codecool.shop.config;

import com.codecool.shop.dao.DatabaseManager;
import com.codecool.shop.dao.ProductCategoryDao;
import com.codecool.shop.dao.ProductDao;
import com.codecool.shop.dao.SupplierDao;
import com.codecool.shop.dao.implementation.ProductCategoryDaoMem;
import com.codecool.shop.dao.implementation.ProductDaoMem;
import com.codecool.shop.dao.implementation.SupplierDaoMem;
import com.codecool.shop.model.Product;
import com.codecool.shop.model.ProductCategory;
import com.codecool.shop.model.Supplier;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import javax.sql.DataSource;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;

@WebListener
public class DataBaseInitializer implements ServletContextListener {


    public static DatabaseManager dataBase = new DatabaseManager();
    public static ProductDao productDataStore;

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        try {
            dataBase.setup();
        } catch (SQLException | IOException e) {
            e.printStackTrace();
        }
        for (Product product: dataBase.getAllProduct()) {
            dataBase.addProductDao(product);
        }
        for(ProductCategory productCategory : dataBase.getProductCategories()){
            dataBase.addCategory(productCategory);
        }
        for (Supplier supplier : dataBase.getSuppliers()) {
            dataBase.addSupplier(supplier);
        }
    }
}
