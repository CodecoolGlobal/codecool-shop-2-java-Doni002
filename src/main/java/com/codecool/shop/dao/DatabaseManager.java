package com.codecool.shop.dao;

import javax.sql.DataSource;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
import java.util.Properties;

import com.codecool.shop.dao.implementation.SupplierDaoMem;
import org.postgresql.ds.PGSimpleDataSource;

public class DatabaseManager {

    SupplierDaoMem supplierDao;

    public void setup() throws SQLException, IOException {
        try{
            DataSource dataSource = connect();
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
}