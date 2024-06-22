package com.example.dbserver.service.impl;

import com.example.dbserver.dto.OrderDto;
import com.example.dbserver.entity.OrderDocument;
import com.example.dbserver.mapper.OrderMapper;
import com.example.dbserver.repository.OrderRepository;
import com.example.dbserver.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;

    @Override
    public OrderDto createOrder(OrderDto orderDto) {

        OrderDocument order = OrderMapper.mapToOrderEntity(orderDto);
        OrderDocument savedOrder = orderRepository.insert(order);

        return OrderMapper.mapToOrderDto(savedOrder);
    }
        
}
