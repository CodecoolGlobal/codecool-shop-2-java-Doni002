package com.codecool.shop.dao;

import javax.sql.DataSource;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
import java.util.Properties;
import java.util.List;

import com.codecool.shop.dao.implementation.ProductCategoryDaoMem;
import com.codecool.shop.dao.implementation.ProductDaoMem;
import com.codecool.shop.dao.implementation.SupplierDaoMem;
import com.codecool.shop.model.Product;
import com.codecool.shop.model.ProductCategory;
import com.codecool.shop.model.Supplier;
import jdk.jfr.Category;
import org.postgresql.ds.PGSimpleDataSource;

public class DatabaseManager {

    SupplierDaoMem supplierDao;
    ProductDao productDao;
    ProductCategoryDao productCategoryDao;

    public void setup() throws SQLException, IOException {
        try{
            DataSource dataSource = connect();
            supplierDao = new SupplierDaoMem(dataSource);
            productDao = new ProductDaoMem(dataSource);
            productCategoryDao = new ProductCategoryDaoMem(dataSource);
        }catch (Exception e){ throw new IOException();}}

    private DataSource connect() throws SQLException, IOException {
        try{
            PGSimpleDataSource dataSource = new PGSimpleDataSource();
            InputStream input = new FileInputStream("src/main/resources/connection.properties");
            Properties prop = new Properties();
            prop.load(input);
            String dbName = prop.getProperty("database");
            String user = prop.getProperty("user");
            String password = prop.getProperty("password");

            dataSource.setDatabaseName(dbName);
            dataSource.setUser(user);
            dataSource.setPassword(password);

            System.out.println("Trying to connect");
            dataSource.getConnection().close();
            System.out.println("Connection ok.");

            return dataSource;
        }catch (Exception e){
            throw new IOException(e);
        }
    }

    public List<Product> getAllProduct(){
        return productDao.getAll(productCategoryDao, supplierDao);

    }

    public Product findProductById(int id){
        return productDao.find(id);
    }

    public void addProductDao(Product product) {
        productDao.add(product);
    }

    public void addCategory(ProductCategory category){
        productCategoryDao.add(category);
    }

    public List<ProductCategory> getProductCategories(){
        return productCategoryDao.getAll();
    }

    public List<Supplier> getSuppliers(){
        return supplierDao.getAll();
    }

    public void addSupplier(Supplier supplier){
        supplierDao.add(supplier);
    }
}
