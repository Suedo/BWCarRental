package com.bwcarrental.userservice.controller;

import java.util.List;
import com.bwcarrental.userservice.model.User;
import com.bwcarrental.userservice.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


/**
 * Created by SUBHAJIT on 24-03-2019.
 */

@RestController
@RequestMapping(path = "/api")
public class UserController {

private UserService userService;
	
	// Inject EmployeeDAO (Use Constructor injection)
	@Autowired
	public UserController(UserService theUserService) {
		userService = theUserService;
	}
	
	// Expose "/users" and return list of users
	@GetMapping("/users")
	public List<User> findAll(){
		return userService.findAll();
	}
	
	// Add mapping for GET /users/{userId}
	@GetMapping("/users/{userId}")
	public User getuser(@PathVariable int userId) {
		User theUser = userService.findById(userId);
		
		if(theUser == null) {
			throw new RuntimeException("Employee id not found:"+userId);
		}
		return theUser;
	}
	
	// add mapping for POST /users - add new user
	@PostMapping("/users")
	public void saveUser(@RequestBody User theUser) {
		
		userService.save(theUser);
	}
	
	// add mapping for PUT /users - update existing user
	@PutMapping("/users")
	public User updateUser(@RequestBody User theUser) {
		userService.save(theUser);
		return theUser;
	}
	
	// add mapping for DELETE /users/{userId} - delete existing user
	@DeleteMapping("/users/{userId}")
	public String deleteEmployee(@PathVariable int userId) {
		
		User theUser = userService.findById(userId);
		
		if(theUser == null) {
			throw new RuntimeException("User id not found:"+userId);
		}
		
		userService.deleteById(userId);
		
		return "Deleted employee id:"+userId;
	}

}
