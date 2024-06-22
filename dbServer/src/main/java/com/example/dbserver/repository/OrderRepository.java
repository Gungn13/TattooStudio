package com.example.dbserver.repository;

import com.example.dbserver.entity.OrderDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<OrderDocument, String> {

}
