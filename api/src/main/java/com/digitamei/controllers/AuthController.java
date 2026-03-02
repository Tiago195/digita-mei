package com.digitamei.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digitamei.dtos.auth.AuthRequestLogin;
import com.digitamei.dtos.auth.AuthResponseLogin;
import com.digitamei.models.User;
import com.digitamei.services.UserService;
import com.digitamei.utils.JWT;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.http.ResponseEntity;



@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
  private final JWT jwt;
  private final UserService userService;

  @PostMapping("login")
  public ResponseEntity<AuthResponseLogin> login(@RequestBody AuthRequestLogin entity) {
    User user = userService.findByUserLogin(entity.getEmail(), entity.getPassword());

    AuthResponseLogin response = new AuthResponseLogin(jwt.generateToken(user.toClaims()));

    return ResponseEntity.ok(response);
  }
  
  
}
