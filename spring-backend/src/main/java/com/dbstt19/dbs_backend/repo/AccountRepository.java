package com.dbstt19.dbs_backend.repo;

import com.dbstt19.dbs_backend.model.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AccountRepository extends JpaRepository<BankAccount, Long> {
    Optional<BankAccount> findBankAccountByUserIdAndAccountId(Long userId, Long accountId);

    List<BankAccount> findAllByUserId(Long userId);
}
