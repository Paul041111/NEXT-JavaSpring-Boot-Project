package com.mailflow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mailflow.dto.LoginRequest;
import java.util.HashMap;
import java.util.Map;
import com.mailflow.model.User;
import com.mailflow.repository.UserRepository;

@RestController
public class AuthController {

  @Autowired
  private UserRepository userRepository;

  @PostMapping("/register")
  public Map<String, String> register(@RequestBody User user) {

    System.out.println("EMAIL: " + user.getEmail());

    userRepository.save(user);

    Map<String, String> response = new HashMap<>();
    response.put("message", "User registered successfully");
    return response;
  }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody User request) {

    User user = userRepository.findByEmail(request.getEmail());

    if (user == null) {
      return ResponseEntity.badRequest().body("User not found");
    }

    Map<String, String> response = new HashMap<>();
    response.put("message", "Login successful");
    return ResponseEntity.ok(response);
  }
}