package com.dbstt19.dbs_backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @PostMapping("/token")
    public String getToken(){
        return "Hello world";
    }
}
