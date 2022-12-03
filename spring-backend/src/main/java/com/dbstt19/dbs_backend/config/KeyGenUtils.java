package com.dbstt19.dbs_backend.config;

import java.security.KeyPair;
import java.security.KeyPairGenerator;

public class KeyGenUtils {
    static KeyPair generateRsaKey() {
        KeyPair keyPair;
        try {
            KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
            generator.initialize(2048);
            keyPair = generator.generateKeyPair();
        } catch (Exception e) {
            throw new IllegalStateException(e);
        }
        return keyPair;
    }
}