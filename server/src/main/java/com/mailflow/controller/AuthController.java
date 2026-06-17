package com.mailflow.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

  @PostMapping("/register")
  public Map<String, String> register(
      @RequestBody Map<String, String> user) {

    Map<String, String> response = new HashMap<>();

    response.put("message", "User registered successfully");
    response.put("email", user.get("email"));

    return response;
  }

  @PostMapping("/login")
  public Map<String, String> login(
      @RequestBody Map<String, String> user) {

    Map<String, String> response = new HashMap<>();

    response.put("message", "Login successful");
    response.put("email", user.get("email"));

    return response;
  }
}