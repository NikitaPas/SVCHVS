package com.example.lab12svchvs.repo;

import com.example.lab12svchvs.model.Smartphones;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SmartphoneRepo extends JpaRepository<Smartphones,Integer> {
    Optional<Smartphones> findById(Long aLong);
}
