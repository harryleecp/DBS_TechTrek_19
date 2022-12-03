package com.dbstt19.dbs_backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Entity
@Table(name = "ScheduledTransactions")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class ScheduledTransaction {
    @Id
    @Column(name = "TransactionID")
    private Long transactionId;
    @Column(name = "AccountID")
    private Long accountId;
    @Column(name = "ReceivingAccountID")
    private Long receivingAccountId;
    @Column(name = "Date")
    private String date;
    @Column(name = "TransactionAmount")
    private BigDecimal transactionAmount;
    @Column(name = "Comment")
    private String comment;

    static Long global_id = 6L;

    public ScheduledTransaction(Long accountId,
                                Long receivingAccountId,
                                String date,
                                BigDecimal transactionAmount,
                                String comment) {
        this.transactionId = global_id;
        global_id++;
        this.accountId = accountId;
        this.receivingAccountId = receivingAccountId;
        this.date = date;
        this.transactionAmount = transactionAmount;
        this.comment = comment;
    }
}
