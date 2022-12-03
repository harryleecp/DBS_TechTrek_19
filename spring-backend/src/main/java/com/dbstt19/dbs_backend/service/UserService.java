package com.dbstt19.dbs_backend.service;

import com.dbstt19.dbs_backend.model.User;
import com.dbstt19.dbs_backend.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User findByUserId(Long userId) throws Exception {
        return userRepository.findById(userId)
                .orElseThrow(() -> new Exception(("Cannot find userId: " + userId)));
    }

    public User findByUsername(String username) throws Exception {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new Exception(("Cannot find username: " + username)));
    }

}
