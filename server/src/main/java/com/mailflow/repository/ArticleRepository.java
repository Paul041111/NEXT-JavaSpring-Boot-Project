package com.mailflow.repository;

import com.mailflow.model.Article;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ArticleRepository extends MongoRepository<Article, String> {

  // optional: get articles by owner email
  List<Article> findByOwnerEmail(String ownerEmail);
}