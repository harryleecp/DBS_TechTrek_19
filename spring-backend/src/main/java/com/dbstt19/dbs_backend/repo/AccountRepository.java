package com.dbstt19.dbs_backend.repo;

import com.dbstt19.dbs_backend.model.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<BankAccount, Long> {
}
