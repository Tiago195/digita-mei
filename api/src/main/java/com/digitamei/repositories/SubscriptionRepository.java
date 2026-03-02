package com.digitamei.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digitamei.models.Subscription;
import com.digitamei.models.User;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {

  Optional<Subscription> findByUser(User user);
  
}
