package com.mailflow.controller;

import com.mailflow.model.Article;
import com.mailflow.repository.ArticleRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
@CrossOrigin(origins = "*")
public class ArticleController {

  private final ArticleRepository repo;

  public ArticleController(ArticleRepository repo) {
    this.repo = repo;
  }

  // GET ALL
  @GetMapping
  public List<Article> getAll() {
    return repo.findAll();
  }

  // GET ONE
  @GetMapping("/{id}")
  public Article getOne(@PathVariable String id) {
    return repo.findById(id).orElse(null);
  }

  // CREATE
  @PostMapping
  public Article create(@RequestBody Article article) {
    return repo.save(article);
  }

  // UPDATE
  @PutMapping("/{id}")
  public Article update(@PathVariable String id, @RequestBody Article newArticle) {

    Article article = repo.findById(id).orElse(null);

    if (article != null) {
      article.setTitle(newArticle.getTitle());
      article.setContent(newArticle.getContent());
      return repo.save(article);
    }

    return null;
  }

  // DELETE
  @DeleteMapping("/{id}")
  public void delete(@PathVariable String id) {
    repo.deleteById(id);
  }
}