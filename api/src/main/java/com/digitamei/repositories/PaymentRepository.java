package com.digitamei.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digitamei.models.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
  
}
