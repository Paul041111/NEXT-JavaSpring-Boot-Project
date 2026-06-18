package com.mailflow.controller;

import com.mailflow.model.Article;
import com.mailflow.repository.ArticleRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
@CrossOrigin(origins = "*")
public class ArticleController {

    private final ArticleRepository articleRepository;

    public ArticleController(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    // GET ALL
    @GetMapping
    public List<Article> getAll() {
        return articleRepository.findAll();
    }

    // GET BY ID (FIXED)
    @GetMapping("/{id}")
    public ResponseEntity<Article> getById(@PathVariable String id) {
        return articleRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // CREATE
    @PostMapping
    public Article create(
            @RequestBody Article article,
            @RequestHeader("email") String email) {
        System.out.println("Email: " + email);
        return articleRepository.save(article);
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Article> update(@PathVariable String id, @RequestBody Article article) {
        return articleRepository.findById(id)
                .map(existing -> {
                    article.setId(id); // keep same ID
                    return ResponseEntity.ok(articleRepository.save(article));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        if (!articleRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        articleRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}