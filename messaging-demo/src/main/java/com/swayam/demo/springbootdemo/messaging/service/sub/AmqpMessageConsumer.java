package com.swayam.demo.springbootdemo.messaging.service.sub;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageListener;

public class AmqpMessageConsumer implements MessageListener {

    private static final Logger LOGGER = LoggerFactory.getLogger(AmqpMessageConsumer.class);

    @Override
    public void onMessage(Message message) {
	LOGGER.info("--------------------------- recieved message: {}", message);
    }

}
