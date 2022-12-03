package com.dbstt19.dbs_backend.controller;

import com.dbstt19.dbs_backend.model.BankAccount;
import com.dbstt19.dbs_backend.model.request.AllAccountsRequest;
import com.dbstt19.dbs_backend.model.request.SingleAccountRequest;
import com.dbstt19.dbs_backend.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class AccountController {

    private final AccountService accountService;

    @PostMapping("/account")
    public ResponseEntity<BankAccount> getOne(@RequestBody SingleAccountRequest request) throws Exception {
        BankAccount account = accountService.getOne(request.userId(), request.accountId());
        return ResponseEntity.ok(account);
    }

    @PostMapping("/account/list")
    public ResponseEntity<List<BankAccount>> getAll(@RequestBody AllAccountsRequest request) {
        List<BankAccount> accounts = accountService.getAll(request.userId());
        return ResponseEntity.ok(accounts);
    }
}
