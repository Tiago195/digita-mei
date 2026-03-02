package com.digitamei.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digitamei.common.annotations.Authenticator;
import com.digitamei.models.User;
import com.digitamei.services.SubscriptionService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/subscriptions")
@RequiredArgsConstructor
public class SubscriptionController {
  private final SubscriptionService subscriptionService;

  @Authenticator
  @GetMapping
  public ResponseEntity<?> get(HttpServletRequest request) {
    User user = (User) request.getAttribute("user");
    return ResponseEntity.ok().body(subscriptionService.getSubscriptionByUser(user));
  }
  
}
