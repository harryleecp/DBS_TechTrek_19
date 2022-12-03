package com.dbstt19.dbs_backend.controller;

import com.dbstt19.dbs_backend.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class TransactionController {
    private final TransactionService transactionService;
}
