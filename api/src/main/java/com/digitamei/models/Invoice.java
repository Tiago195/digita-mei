package com.digitamei.models;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.digitamei.models.status.InvoiceStatus;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "invoice")
@Data
@EntityListeners(AuditingEntityListener.class)
public class Invoice {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "subscription_id", nullable = false)
  private Subscription subscription;

  @Column(nullable = false, precision = 10, scale = 2)
  private java.math.BigDecimal amount;

  @Column(name = "billing_period_start", nullable = false)
  private LocalDateTime billingPeriodStart;

  @Column(name = "billing_period_end", nullable = false)
  private LocalDateTime billingPeriodEnd;

  @Column(name = "due_date")
  private LocalDateTime dueDate;
  @Column(name = "paid_at")
  private LocalDateTime paidAt;

  @Enumerated(EnumType.STRING)
  private InvoiceStatus status = InvoiceStatus.PENDING;

  @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<InvoiceItem> items;

  @CreatedDate
  @Column(updatable = false, name = "created_at")
  protected LocalDateTime createdAt;

  @LastModifiedDate
  @Column(name = "updated_at")
  protected LocalDateTime updatedAt;
}
