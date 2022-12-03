package com.dbstt19.dbs_backend;

import com.dbstt19.dbs_backend.model.User;
import com.dbstt19.dbs_backend.repo.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class SpringBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(UserRepository users, BCryptPasswordEncoder encoder) {
        return args -> {
            users.save(new User("ExecutiveDBS",
                                encoder.encode("DBSBestBank2022"),
                                "Tom",
                                "Lim",
                                "TomLim@easymail.com",
                                "Block 123 Serangoon Garden #10-129",
                                false));
        };
    }
}
