package com.digitamei.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digitamei.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findByEmailAndPassword(String email, String password);
  
}
