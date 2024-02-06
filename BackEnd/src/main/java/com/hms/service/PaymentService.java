package com.hms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.bean.Payment;
import com.hms.dao.PaymentRepo;

@Service
public class PaymentService {
	
	@Autowired
	PaymentRepo repo;

	public String addPayment(Payment pay) {
		repo.save(pay);
		return "Payment Successful";
	}

	public Payment viewPayment(long paymentId) {
		Payment payment = repo.findById(paymentId).get();
		return payment;
	}
}
