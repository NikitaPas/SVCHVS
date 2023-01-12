package com.example.lab12svchvs.controller;

import com.example.lab12svchvs.exception.ResourceNotFoundException;
import com.example.lab12svchvs.model.Smartphones;
import com.example.lab12svchvs.service.SmartphoneService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/smartphone")
@CrossOrigin("*")
public class SmartphoneController {

    private final SmartphoneService card;

    @GetMapping()
    public ResponseEntity<List<Smartphones>> get() {
        return ok(card.findAll());
    }

    @PostMapping()
    public ResponseEntity<Void> save(@Validated @RequestBody Smartphones cards) {
        card.save(cards);
        return ok().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<Smartphones> update(@PathVariable long id, @RequestBody Smartphones cards) {
        Smartphones updatedCard = card.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Card not exist with id: " + id));

        updatedCard.setName(cards.getName());
        updatedCard.setPrice(cards.getPrice());
        updatedCard.setCount(cards.getCount());
        updatedCard.setImg(cards.getImg());

        card.save(updatedCard);

        return ResponseEntity.ok(updatedCard);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {
        Smartphones cards = card.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Card not exist with id: " + id));
        card.delete(cards);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
