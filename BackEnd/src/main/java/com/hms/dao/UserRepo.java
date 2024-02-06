package com.hms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.bean.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

	public User findByUserEmail(String userEmail);

	public User findByUserPassword(String userPassword);
}
