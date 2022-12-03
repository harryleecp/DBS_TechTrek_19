package com.dbstt19.dbs_backend.model.request;

public record UpdateUserRequest(Long userId, String email, String address) {
}
