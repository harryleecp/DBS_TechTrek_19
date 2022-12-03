package com.dbstt19.dbs_backend.config;

import com.dbstt19.dbs_backend.service.SecurityUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final SecurityUserDetailsService securityUserDetailsService;

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http// disable csrf and dont keep state
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/token").permitAll()
                        .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults())           // use basic auth (base64 user:pass)
                .userDetailsService(securityUserDetailsService) // use our own db
                .build();
    }

    @Bean
    BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
