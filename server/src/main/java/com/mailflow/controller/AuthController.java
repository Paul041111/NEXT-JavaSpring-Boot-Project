package com.mailflow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
      return ResponseEntity.badRequest().body(Map.of("message", "User not found"));
    }

    return ResponseEntity.ok(Map.of(
        "message", "Login success",
        "email", user.getEmail()));
  }
}