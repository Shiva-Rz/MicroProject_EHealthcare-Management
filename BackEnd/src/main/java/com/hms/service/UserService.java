package com.hms.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.bean.User;
import com.hms.dao.UserRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo repo;

	public String insertUser(User user) {
		repo.save(user);
		return "User Registered Successfully";
	}

	public String updateUser(User user) {
		repo.save(user);
		return "User Updated Successfully";
	}

	public String deleteUser(long userId) {
		repo.deleteById(userId);
		return "User Removed Successfully";
	}

	public User showUser(long userId) {
		User user = repo.findById(userId).get();
		return user;
	}

	public List<User> showAllUsers() {
		Iterator<User> user = repo.findAll().iterator();
		List<User> usersList = new ArrayList<User>();

		while (user.hasNext()) {
			usersList.add(user.next());
		}
		return usersList;
	}
}
