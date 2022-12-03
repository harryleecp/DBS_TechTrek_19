package com.dbstt19.dbs_backend.controller;

import com.dbstt19.dbs_backend.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {
    private final JwtService jwtService;

    @GetMapping("/")
    public String greet() {
        return "Hello world";
    }

    @GetMapping("/token")
    public String getToken(Authentication authentication) {
        String token = jwtService.generateJwt(authentication);
        return token;
    }
}
