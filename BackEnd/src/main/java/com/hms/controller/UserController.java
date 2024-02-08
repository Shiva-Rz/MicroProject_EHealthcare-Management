package com.hms.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hms.bean.User;
import com.hms.dao.UserRepo;
import com.hms.service.UserService;

import jakarta.websocket.server.PathParam;

@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {

	@Autowired
	UserService service;

	@PostMapping("RegisterUser")
	public String registerUser(@RequestBody User user) {
		service.insertUser(user);
		return "User Registered Successfully";
	}

	@PutMapping("EditUser")
	public String editUser(@RequestBody User user) {
		service.updateUser(user);
		return "User Updated Successfully";
	}

	@DeleteMapping("RemoveUser")
	public String removeUser(@PathParam("userId") long userId) {
		service.deleteUser(userId);
		return "User Removed Successfully";
	}

	@GetMapping("ViewUser/{userId}")
	public User viewUser(@PathVariable("userId") long userId) {
		User user = service.showUser(userId);
		return user;
	}

	@GetMapping("ViewAllUsers")
	public List<User> viewAllUsers() {
		Iterator<User> user = service.showAllUsers().iterator();
		List<User> usersList = new ArrayList<User>();

		while (user.hasNext()) {
			usersList.add(user.next());
		}
		return usersList;
	}

	@GetMapping("ViewAllUsers")
	public List<User> viewAllUsers() {
		Iterator<User> user = service.showAllUsers().iterator();
		List<User> usersList = new ArrayList<User>();

		while (user.hasNext()) {
			usersList.add(user.next());
		}
		return usersList;
	}

}
