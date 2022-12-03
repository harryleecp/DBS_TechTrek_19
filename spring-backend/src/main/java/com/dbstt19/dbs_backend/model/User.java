package com.dbstt19.dbs_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "User")
@Getter @Setter
@NoArgsConstructor
@ToString
public class User {
    @Id @GeneratedValue
    private Long userId;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String address;
    private boolean optIntoPhyStatements;

    public User(String username,
                String password,
                String firstName,
                String lastName,
                String email,
                String address,
                boolean optIntoPhyStatements) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.optIntoPhyStatements = optIntoPhyStatements;
    }
}
