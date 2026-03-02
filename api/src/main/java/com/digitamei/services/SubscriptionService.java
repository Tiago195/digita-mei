package com.digitamei.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.digitamei.models.Subscription;
import com.digitamei.models.User;
import com.digitamei.repositories.SubscriptionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SubscriptionService {
  private final SubscriptionRepository subscriptionRepository;

  public Subscription getSubscriptionByUser(User user) {
    Optional<Subscription> subscriptionOpt = subscriptionRepository.findByUser(user);

    if(subscriptionOpt.isEmpty()) {
      throw new RuntimeException("Subscription not found for user");
    }
    
    return subscriptionOpt.get();
  }
}
