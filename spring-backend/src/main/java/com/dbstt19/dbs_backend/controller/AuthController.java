package com.dbstt19.dbs_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/token")
    public String getToken(){

        return "Hello world";
    }
}
