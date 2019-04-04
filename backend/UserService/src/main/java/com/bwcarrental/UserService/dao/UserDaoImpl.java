package com.bwcarrental.userservice.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.bwcarrental.userservice.model.User;

/**
 * Created by SUBHAJIT on 24-03-2019.
 */
@Repository
public class UserDaoImpl implements UserDao {

	
	// Define field for entitymanager
	private EntityManager entityManager;
	
	// Set up constructor injection
	@Autowired
	public UserDaoImpl(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}
	
	@Override
	public List<User> findAll() {
		// Get the current hibernate session
		Session currentSesson = entityManager.unwrap(Session.class);
		
		// Create a query
		Query<User> theQuery = 
				currentSesson.createQuery("from User", User.class);
		
		// Execute the query an get the result list
		List<User> users = theQuery.getResultList();
		
		// Return the results
		return users;
	}

	@Override
	public User findById(int theId) {

		// Get the current hibernate session
		Session currentSesson = entityManager.unwrap(Session.class);
		
		// Get the User
		User theUser = 
				currentSesson.get(User.class, theId);
		
		// Return the employee
		return theUser;
	}

	@Override
	public void save(User theUser) {
		// Get the current hibernate session
		Session currentSesson = entityManager.unwrap(Session.class);
				
		// Save User
		currentSesson.saveOrUpdate(theUser);	
	}

	@Override
	public void deleteById(int theId) {
		// Get the current hibernate session
		Session currentSesson = entityManager.unwrap(Session.class);
						
		// Delete User
		Query theQuery = 
		currentSesson.createQuery("delete from User where id=:userId");
		theQuery.setParameter("userId", theId);
		theQuery.executeUpdate();
	}

}