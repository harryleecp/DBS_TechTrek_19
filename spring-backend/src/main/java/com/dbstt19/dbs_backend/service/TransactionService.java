package com.dbstt19.dbs_backend.service;

import com.dbstt19.dbs_backend.model.ScheduledTransaction;
import com.dbstt19.dbs_backend.repo.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionRepository transactionRepository;

    public List<ScheduledTransaction> getAll(Long accountId) {
        return new ArrayList<>();
    }
}
