package com.kata.foobarquix

import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status


@SpringBootTest
@AutoConfigureMockMvc
class FooBarQuixControllerTest {

    @Autowired
    private val mvc: MockMvc? = null

    @Test
    fun contextLoads() {
        Assertions.assertThat(mvc).isNotNull;
    }

    @Test
    fun should_Return_inputNumber(){
        if(this.mvc != null){
            this.mvc.perform(get("/foo-bar-quix/15").accept(MediaType.APPLICATION_JSON_VALUE))
                    .andExpect(status().isOk())
                    .andExpect(content().string("{\"result\":\"FooBarBar\"}"));
        }
    }
}