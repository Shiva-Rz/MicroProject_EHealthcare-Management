package com.hms.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hms.bean.Prescription;

@Repository
public interface PrescriptionRepo extends CrudRepository<Prescription, Long> {

}