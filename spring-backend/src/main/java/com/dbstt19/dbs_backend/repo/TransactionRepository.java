package com.dbstt19.dbs_backend.repo;

import com.dbstt19.dbs_backend.model.ScheduledTransaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<ScheduledTransaction, Long> {
    List<ScheduledTransaction> findAllByAccountId(Long accountId);
}
