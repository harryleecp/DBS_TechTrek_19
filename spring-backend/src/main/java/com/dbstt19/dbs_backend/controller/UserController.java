package com.dbstt19.dbs_backend.controller;

import com.dbstt19.dbs_backend.model.User;
import com.dbstt19.dbs_backend.model.request.UpdateUserRequest;
import com.dbstt19.dbs_backend.model.request.UserRequest;
import com.dbstt19.dbs_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class UserController {
    private final UserService userService;

    @PostMapping("/user")
    public ResponseEntity<User> findUser(@RequestBody UserRequest request) throws Exception {
        User user = userService.findByUserId(request.userId());
        return ResponseEntity.ok(user);
    }

    @PostMapping("/user/update")
    public ResponseEntity<User> updateUser(@RequestBody UpdateUserRequest request) throws Exception {
        User user = userService.updateUserEmailAndAddress(request.userId(), request.email(), request.address());
        return ResponseEntity.ok(user);
    }
}
