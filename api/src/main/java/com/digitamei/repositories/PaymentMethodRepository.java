package com.digitamei.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digitamei.models.PaymentMethod;

public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Long> {
  
}
