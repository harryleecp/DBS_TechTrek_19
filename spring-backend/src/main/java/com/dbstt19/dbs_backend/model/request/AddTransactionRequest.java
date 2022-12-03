package com.dbstt19.dbs_backend.model.request;

import java.math.BigDecimal;

public record AddTransactionRequest(Long accountId,
                                    Long receivingAccountId,
                                    String date,
                                    BigDecimal transactionAmount,
                                    String comment) {
}
