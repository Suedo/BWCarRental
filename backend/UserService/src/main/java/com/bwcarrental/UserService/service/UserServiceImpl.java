package com.bwcarrental.userservice.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bwcarrental.userservice.dao.UserDao;
import com.bwcarrental.userservice.model.User;

/**
 * Created by SUBHAJIT on 24-03-2019.
 */
@Service
public class UserServiceImpl implements UserService{

	private UserDao userDao;
	
	@Autowired
	public UserServiceImpl(UserDao theUserDao) {
		userDao = theUserDao;
	}
	
	@Override
	@Transactional
	public List<User> findAll() {
		return userDao.findAll();
	}

	@Override
	@Transactional
	public User findById(int theId) {
		return userDao.findById(theId);
	}

	@Override
	@Transactional
	public void save(User theUser) {
		userDao.save(theUser);
	}

	@Override
	@Transactional
	public void deleteById(int theId) {
		userDao.deleteById(theId);	
	}

}
