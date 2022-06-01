package com.codecool.shop.dao;

import javax.sql.DataSource;
import java.sql.SQLException;

import com.codecool.shop.dao.implementation.SupplierDaoMem;
import org.postgresql.ds.PGSimpleDataSource;

public class DatabaseManager {

    SupplierDaoMem supplierDao;

    public void setup() throws SQLException {
        DataSource dataSource = connect();
         supplierDao = new SupplierDaoMem(dataSource);
    }

    private DataSource connect() throws SQLException {
        PGSimpleDataSource dataSource = new PGSimpleDataSource();
        String dbName = System.getenv("dbName");
        String user = System.getenv("user");
        String password = System.getenv("password");

        dataSource.setDatabaseName(dbName);
        dataSource.setUser(user);
        dataSource.setPassword(password);

        System.out.println("Trying to connect");
        dataSource.getConnection().close();
        System.out.println("Connection ok.");

        return dataSource;
    }

}
