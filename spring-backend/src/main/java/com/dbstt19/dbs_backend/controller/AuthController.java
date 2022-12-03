package com.dbstt19.dbs_backend.controller;

import com.dbstt19.dbs_backend.model.request.LoginRequest;
import com.dbstt19.dbs_backend.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @GetMapping("/")
    public String greet() {
        return "Hello world";
    }

    @PostMapping("/token")
    public String getToken(@RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        request.username(),
                        request.password()));
        String token = jwtService.generateJwt(authentication);
        return token;
    }
}
