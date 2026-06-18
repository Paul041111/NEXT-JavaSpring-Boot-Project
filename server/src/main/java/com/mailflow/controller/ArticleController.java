package com.mailflow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import com.mailflow.model.Article;
import com.mailflow.repository.ArticleRepository;

@RestController
@RequestMapping("/articles")
public class ArticleController {

  @Autowired
  private ArticleRepository articleRepository;

  @GetMapping
  public List<Article> getArticles() {
    return articleRepository.findAll();
  }

  @PostMapping // ✅ FIXED
  public Article create(@RequestBody Article article,
      @RequestHeader("email") String email) {

    article.setOwnerEmail(email);
    return articleRepository.save(article);
  }
}