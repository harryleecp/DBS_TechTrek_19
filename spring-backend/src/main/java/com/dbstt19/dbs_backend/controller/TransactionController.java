package com.dbstt19.dbs_backend.controller;

import com.dbstt19.dbs_backend.model.ScheduledTransaction;
import com.dbstt19.dbs_backend.model.request.AddTransactionRequest;
import com.dbstt19.dbs_backend.model.request.AllTransactionsRequest;
import com.dbstt19.dbs_backend.model.request.DeleteTransaction;
import com.dbstt19.dbs_backend.service.TransactionService;
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
public class TransactionController {
    private final TransactionService transactionService;

    @PostMapping("/transaction")
    public ResponseEntity<List<ScheduledTransaction>> getAll(@RequestBody AllTransactionsRequest request) {
        List<ScheduledTransaction> transactions = transactionService.getAll(request.accountId());
        return ResponseEntity.ok(transactions);
    }

    @PostMapping("/transaction/add")
    public ResponseEntity<ScheduledTransaction> add(@RequestBody AddTransactionRequest request) {
        ScheduledTransaction added = transactionService.add(
                request.accountId(),
                request.receivingAccountId(),
                request.date(),
                request.transactionAmount(),
                request.comment());
        return ResponseEntity.ok(added);
    }

    @PostMapping("/transaction/delete")
    public ResponseEntity<String> delete(@RequestBody DeleteTransaction request) {
        transactionService.delete(request.transactionId());
        return ResponseEntity.ok("Transaction deleted: " + request.transactionId());
    }
}
