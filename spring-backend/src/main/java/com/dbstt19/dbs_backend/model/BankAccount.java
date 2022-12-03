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
@Table(name = "BankAccount")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class BankAccount {
    @Id
    @Column(name = "AccountID")
    private Long accountId;
    @Column(name = "UserID")
    private Long userId;
    @Column(name = "AccountType")
    private String accountType;
    @Column(name = "AccountBalance")
    private BigDecimal accountBalance;
}
