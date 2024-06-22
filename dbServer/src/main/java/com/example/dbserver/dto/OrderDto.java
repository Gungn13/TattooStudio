package com.example.dbserver.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {

    private String id;

    private String name;

    private String phoneNumber;

    private String typeService;
}
