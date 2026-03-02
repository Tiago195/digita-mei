package com.digitamei.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digitamei.models.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
  
}
