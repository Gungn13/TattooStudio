package com.example.dbserver.mapper;

import com.example.dbserver.dto.OrderDto;
import com.example.dbserver.entity.OrderDocument;


public class OrderMapper {

    public static OrderDto mapToOrderDto(OrderDocument orderDocument) {
        return new OrderDto(
                orderDocument.getId(),
                orderDocument.getName(),
                orderDocument.getPhoneNumber(),
                orderDocument.getTypeService()
        );
    }

    public static OrderDocument mapToOrderEntity(OrderDto orderDto) {
        return new OrderDocument(
                orderDto.getId(),
                orderDto.getName(),
                orderDto.getPhoneNumber(),
                orderDto.getTypeService()
        );
    }

}
