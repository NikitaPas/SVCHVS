package com.example.lab12svchvs.service;

import com.example.lab12svchvs.model.Smartphones;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SmartphoneService {

    List<Smartphones> findAll();

    void save(Smartphones cards);

    Optional<Smartphones> findById(Long aLong);

    void delete(Smartphones cards);
}
