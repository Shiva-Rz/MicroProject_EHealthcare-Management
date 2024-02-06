package com.hms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.hms.bean.Prescription;
import com.hms.dao.PrescriptionRepo;

@Service
public class PrescriptionService {
	
	@Autowired
	PrescriptionRepo repo;

	
	public String generatePrescription(Prescription prescription) {
		repo.save(prescription);
		return "Prescription Added Successfully";
	}


	public Prescription checkPrescription(long prescriptionId) {
		Prescription prescription = repo.findById(prescriptionId).get();
		return prescription;
	}
}
