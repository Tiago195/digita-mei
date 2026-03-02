package com.digitamei.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digitamei.models.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
  
}
