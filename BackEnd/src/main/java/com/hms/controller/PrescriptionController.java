package com.hms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hms.bean.Prescription;
import com.hms.dao.PrescriptionRepo;
import com.hms.service.PrescriptionService;

@RestController
@CrossOrigin("http://localhost:4200")
public class PrescriptionController {

	@Autowired
	PrescriptionService service;

	@PostMapping("AddPrescription")
	public String addPrescription(@RequestBody Prescription prescription) {
		service.generatePrescription(prescription);
		return "Prescription Added Successfully";
	}

	@GetMapping("ViewPrescription/{prescriptionId}")
	public Prescription viewPrescription(@PathVariable("prescriptionId") long prescriptionId) {
		Prescription prescription = service.checkPrescription(prescriptionId);
		return prescription;
	}

}
