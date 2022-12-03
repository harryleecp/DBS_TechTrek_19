package com.dbstt19.dbs_backend.service;

import com.dbstt19.dbs_backend.model.BankAccount;
import com.dbstt19.dbs_backend.repo.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;

    public BankAccount getOne(Long userId, Long accountId) throws Exception {
        return accountRepository.findBankAccountByUserIdAndAccountId(userId, accountId)
                .orElseThrow(() -> new Exception(String.format("Cannot find by userId: {} and accountId: {}",
                                                               userId,
                                                               accountId)));
    }

    public List<BankAccount> getAll(Long userId) {
        return accountRepository.findAllByUserId(userId);
    }
}
