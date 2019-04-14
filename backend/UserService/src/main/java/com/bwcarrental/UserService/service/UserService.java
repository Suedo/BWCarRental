package com.bwcarrental.userservice.service;

import java.util.List;

import com.bwcarrental.userservice.model.User;

/**
 * Created by SUBHAJIT on 24-03-2019.
 */
public interface UserService {
	
	public List<User> findAll();
	
	public User findById(int theId);
	
	public void save(User theUser);
	
	public void deleteById(int theId);
}
