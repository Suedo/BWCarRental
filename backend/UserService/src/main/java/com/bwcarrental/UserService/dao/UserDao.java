package com.bwcarrental.userservice.dao;

import com.bwcarrental.userservice.model.User;
import java.util.List;


/**
 * Created by SUBHAJIT on 24-03-2019.
 */

public interface UserDao {
    
    public List<User> findAll();
	
	public User findById(int theId);
	
	public void save(User theUser);
	
	public void deleteById(int theId);
}
