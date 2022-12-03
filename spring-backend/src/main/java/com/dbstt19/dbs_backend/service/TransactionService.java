package com.dbstt19.dbs_backend.service;

import com.dbstt19.dbs_backend.model.ScheduledTransaction;
import com.dbstt19.dbs_backend.repo.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionService {
    private final TransactionRepository transactionRepository;

    public List<ScheduledTransaction> getAll(Long accountId) {
        return transactionRepository.findAllByAccountId(accountId);
    }

    public ScheduledTransaction add(Long accountId,
                                    Long receivingAccountId,
                                    String date,
                                    BigDecimal transactionAmount,
                                    String comment) {
        return transactionRepository.save(new ScheduledTransaction(
                accountId,
                receivingAccountId,
                date,
                transactionAmount,
                comment
        ));
    }

    public void delete(Long accountId) {
        transactionRepository.deleteById(accountId);
    }
}
