package com.mailflow.controller;

import com.mailflow.model.User;
import com.mailflow.repository.UserRepository;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Create a new user
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // Get all users
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}