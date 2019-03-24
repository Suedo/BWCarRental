package com.bwcarrental.userservice.dao;

import com.bwcarrental.userservice.model.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by SUBHAJIT on 24-03-2019.
 */
public interface UserDao extends CrudRepository{
    User findByGender(String name);
}
