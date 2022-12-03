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
@Table(name = "User")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class User {
    @Id
    @Column(name = "UserID")
    private Long userId;
    @Column(name = "Username")
    private String username;
    @Column(name = "Password")
    private String password;
    @Column(name = "Firstname")
    private String firstName;
    @Column(name = "Lastname")
    private String lastName;
    @Column(name = "Email")
    private String email;
    @Column(name = "Address")
    private String address;
    @Column(name = "OptIntoPhyStatements")
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
