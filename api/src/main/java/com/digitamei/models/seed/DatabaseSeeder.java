package com.digitamei.models.seed;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import com.digitamei.models.Invoice;
import com.digitamei.models.InvoiceItem;
import com.digitamei.models.Payment;
import com.digitamei.models.PaymentMethod;
import com.digitamei.models.Product;
import com.digitamei.models.Subscription;
import com.digitamei.models.SubscriptionItem;
import com.digitamei.models.User;
import com.digitamei.models.status.BillingCycle;
import com.digitamei.models.status.InvoiceStatus;
import com.digitamei.models.status.PaymentMethodType;
import com.digitamei.models.status.PaymentStatus;
import com.digitamei.models.status.SubscriptionStatus;
import com.digitamei.models.status.UserStatus;
import com.digitamei.repositories.InvoiceRepository;
import com.digitamei.repositories.PaymentMethodRepository;
import com.digitamei.repositories.PaymentRepository;
import com.digitamei.repositories.ProductRepository;
import com.digitamei.repositories.SubscriptionRepository;
import com.digitamei.repositories.UserRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Component
@Profile("!prod")
@RequiredArgsConstructor
public class DatabaseSeeder implements ApplicationRunner {

  private final UserRepository userRepository;
  private final ProductRepository productRepository;
  private final SubscriptionRepository subscriptionRepository;
  private final InvoiceRepository invoiceRepository;
  private final PaymentRepository paymentRepository;
  private final PaymentMethodRepository paymentMethodRepository;

  @Override
  public void run(ApplicationArguments args) {
    clear();
    seed();
  }


  @Transactional
  public void clear() {
    paymentRepository.deleteAll();
    invoiceRepository.deleteAll();
    subscriptionRepository.deleteAll();
    paymentMethodRepository.deleteAll();
    productRepository.deleteAll();
    userRepository.deleteAll();
  }

  @Transactional
  public void seed() {
    // 👤 USER
    User user = new User();
    user.setName("João Silva");
    user.setEmail("joao@email.com");
    user.setPassword("senha123");
    user.setStatus(UserStatus.ACTIVE);
    user = userRepository.save(user);

    // 📦 PRODUCTS
    Product product1 = new Product();
    product1.setName("Sistema ERP");
    product1.setDescription("Sistema completo de gestão empresarial");
    product1.setPrice(new BigDecimal("199.90"));
    product1.setBillingCycle(BillingCycle.MONTHLY);
    product1.setActive(true);
    product1 = productRepository.save(product1);

    Product product2 = new Product();
    product2.setName("Módulo Financeiro");
    product2.setDescription("Controle financeiro avançado");
    product2.setPrice(new BigDecimal("49.90"));
    product2.setBillingCycle(BillingCycle.MONTHLY);
    product2.setActive(true);
    product2 = productRepository.save(product2);

    // 🔁 SUBSCRIPTION
    Subscription subscription = new Subscription();
    subscription.setUser(user);
    subscription.setStatus(SubscriptionStatus.ACTIVE);
    subscription.setStartDate(LocalDateTime.now());
    subscription.setNextBillingDate(LocalDateTime.now().plusMonths(1));
    subscription = subscriptionRepository.save(subscription);

    // 📦 SUBSCRIPTION ITEMS
    SubscriptionItem item1 = new SubscriptionItem();
    item1.setSubscription(subscription);
    item1.setProduct(product1);
    item1.setStatus(SubscriptionStatus.ACTIVE);
    item1.setQuantity(1);
    item1.setUnitPrice(product1.getPrice());

    SubscriptionItem item2 = new SubscriptionItem();
    item2.setSubscription(subscription);
    item2.setProduct(product2);
    item2.setStatus(SubscriptionStatus.ACTIVE);
    item2.setQuantity(1);
    item2.setUnitPrice(product2.getPrice());

    subscription.setItems(new ArrayList<>(List.of(item1, item2)));
    subscriptionRepository.save(subscription);

    // 🧾 INVOICE
    BigDecimal total = product1.getPrice().add(product2.getPrice());

    Invoice invoice = new Invoice();
    invoice.setSubscription(subscription);
    invoice.setBillingPeriodStart(LocalDateTime.now());
    invoice.setBillingPeriodEnd(LocalDateTime.now().plusMonths(1));
    invoice.setDueDate(LocalDateTime.now().plusDays(7));
    invoice.setAmount(total);
    invoice.setStatus(InvoiceStatus.PENDING);

    InvoiceItem invoiceItem1 = new InvoiceItem();
    invoiceItem1.setInvoice(invoice);
    invoiceItem1.setProductId(product1.getId());
    invoiceItem1.setDescription(product1.getName());
    invoiceItem1.setQuantity(1);
    invoiceItem1.setUnitPrice(product1.getPrice());
    invoiceItem1.setTotal(product1.getPrice());

    InvoiceItem invoiceItem2 = new InvoiceItem();
    invoiceItem2.setInvoice(invoice);
    invoiceItem2.setProductId(product2.getId());
    invoiceItem2.setDescription(product2.getName());
    invoiceItem2.setQuantity(1);
    invoiceItem2.setUnitPrice(product2.getPrice());
    invoiceItem2.setTotal(product2.getPrice());

    invoice.setItems(new ArrayList<>(List.of(invoiceItem1, invoiceItem2)));
    invoice = invoiceRepository.save(invoice);

    // 💳 PAYMENT METHOD
    PaymentMethod method = new PaymentMethod();
    method.setUser(user);
    method.setMethodType(PaymentMethodType.CREDIT_CARD);
    method.setProvider("Stripe");
    method.setToken("tok_test_123");
    method = paymentMethodRepository.save(method);

    // 💰 PAYMENT
    Payment payment = new Payment();
    payment.setInvoice(invoice);
    payment.setPaymentMethod(method);
    payment.setAmount(total);
    payment.setPaymentDate(LocalDateTime.now());
    payment.setStatus(PaymentStatus.APPROVED);
    payment.setTransactionId("TXN-123456");

    paymentRepository.save(payment);

    // Atualiza invoice como paga
    invoice.setStatus(InvoiceStatus.PAID);
    invoice.setPaidAt(LocalDateTime.now());
    invoiceRepository.save(invoice);

    System.out.println("🔥 Database seeded successfully!");
  }
}
