package com.jojoldu.book.springboot.web;

import junit.framework.TestCase;
import static org.assertj.core.api.Assertions.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class IndexControllerTest extends TestCase {

    @Autowired
    private TestRestTemplate restTemplate;
    
    @Test
    public void 메인페이지_로딩() throws Exception {
        
        //when
        String body = this.restTemplate.getForObject("/", String.class);

        System.out.println(body);

        //then
        assertThat(body).contains("스프링 부트 웹 서비스");
    }
    

}