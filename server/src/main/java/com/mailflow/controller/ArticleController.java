package com.mailflow.controller;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/articles")
public class ArticleController {

  private final List<Map<String, String>> articles = new ArrayList<>();

  @GetMapping
  public List<Map<String, String>> getArticles() {
    return articles;
  }

  @PostMapping
  public Map<String, String> createArticle(
      @RequestBody Map<String, String> article) {

    articles.add(article);
    return article;
  }
}