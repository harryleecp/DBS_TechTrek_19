package com.dbstt19.dbs_backend.controller;

import com.dbstt19.dbs_backend.model.request.LoginRequest;
import com.dbstt19.dbs_backend.model.response.LoginResponse;
import com.dbstt19.dbs_backend.service.JwtService;
import com.dbstt19.dbs_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {
    private final JwtService jwtService;
    private final UserService userService;
    private final AuthenticationManager authenticationManager;

    @GetMapping("/")
    public String greet() {
        return "Hello world";
    }

    @PostMapping("/token")
    public ResponseEntity<LoginResponse> getToken(@RequestBody LoginRequest request) throws Exception {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        request.username(),
                        request.password()));
        String token = jwtService.generateJwt(authentication);
        Long userId = userService.findByUsername(request.username()).getUserId();
        LoginResponse response = new LoginResponse(token, userId);
        return ResponseEntity.ok(response);
    }
}
