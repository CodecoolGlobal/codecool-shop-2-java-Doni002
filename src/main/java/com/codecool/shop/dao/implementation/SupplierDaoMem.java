package com.codecool.shop.dao.implementation;

import com.codecool.shop.dao.SupplierDao;
import com.codecool.shop.model.ProductCategory;
import com.codecool.shop.model.Supplier;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class SupplierDaoMem implements SupplierDao {

    private DataSource dataSource;
    private List<Supplier> data = new ArrayList<>();
    private static SupplierDaoMem instance = null;

    /* A private Constructor prevents any other class from instantiating.
     */
    public SupplierDaoMem(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    private SupplierDaoMem() {
    }

    public static SupplierDaoMem getInstance() {
        if (instance == null) {
            instance = new SupplierDaoMem();
        }
        return instance;
    }

    @Override
    public void add(Supplier supplier) {
        supplier.setId(data.size() + 1);
        data.add(supplier);
    }

    @Override
    public Supplier find(int id) {
        return data.stream().filter(t -> t.getId() == id).findFirst().orElse(null);
    }

    @Override
    public void remove(int id) {
        data.remove(find(id));
    }

    @Override
    public List<Supplier> getAll() {
        try (Connection connection = dataSource.getConnection()) {
            String sql = "SELECT name, description FROM supplier";
            ResultSet resultSet = connection.createStatement().executeQuery(sql);
            List<Supplier> result = new ArrayList<>();
            Supplier supplier = null;
            while (resultSet.next()) {
                supplier = new Supplier(
                        resultSet.getString(1),
                        resultSet.getString(2));
                result.add(supplier);
            }
            return result;
        } catch (SQLException throwables) {
            throw new RuntimeException("Error while reading data", throwables);
        }
    }
}
