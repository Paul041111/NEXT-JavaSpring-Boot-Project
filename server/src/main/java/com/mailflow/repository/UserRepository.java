package com.mailflow.repository;

import com.mailflow.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
  User findByEmail(String email);
}