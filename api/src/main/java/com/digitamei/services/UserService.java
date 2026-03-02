package com.digitamei.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.digitamei.models.User;
import com.digitamei.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
  private final UserRepository userRepository;

  public User findByUserLogin(String email, String password) {
    Optional<User> user = userRepository.findByEmailAndPassword(email, password);

    if(user.isEmpty()) {
      throw new RuntimeException("Email ou senha incorretos.");
    }

    return user.get();
  }

}
