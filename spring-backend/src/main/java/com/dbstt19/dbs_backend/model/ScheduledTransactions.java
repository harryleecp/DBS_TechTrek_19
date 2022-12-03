package com.dbstt19.dbs_backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "ScheduledTransactions")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class ScheduledTransactions {
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
    private Double transactionAmount;
    @Column(name = "Comment")
    private String comment;
}
