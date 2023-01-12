package com.example.lab12svchvs.service.impl;

import com.example.lab12svchvs.model.Smartphones;
import com.example.lab12svchvs.repo.SmartphoneRepo;
import com.example.lab12svchvs.service.SmartphoneService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SmartphoneServiceImpl implements SmartphoneService {

    private final SmartphoneRepo cardRepo;

    @Override
    public List<Smartphones> findAll() {
        return cardRepo.findAll();
    }

    @Override
    public void save(Smartphones cards) {
        cardRepo.save(cards);
    }

    @Override
    public Optional<Smartphones> findById(Long aLong) {
        return cardRepo.findById(aLong);
    }

    @Override
    public void delete(Smartphones cards) {
        cardRepo.delete(cards);
    }
}
