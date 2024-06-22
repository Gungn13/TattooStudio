package com.example.dbserver.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
public class OrderDocument {
    @Id
    private String id;
    private String name;
    @Indexed(unique = true)
    private String phoneNumber;
    private String typeService;

    public OrderDocument() {}

}
