package com.jojoldu.book.springboot;

import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .csrf().disable()   //시큐리티는 기본적으로 csrf 공격을 막는 것이 default인데 개발동안 비활성화 시킴
                .authorizeRequests()    //시큐리티 처리에 HttpServletRequest를 이용한다는 의미. 클라이언트의 요청정보를 활용한다고 보면 됨
                .antMatchers("/").permitAll()   //"/"경로를 permitAll 해준다. 즉 허용해준다는 뜻
                .antMatchers("/h2-console/**)").permitAll() // "/h2-console/**"경로를 모든 사용자가 접근 가능하게 해준다.
                .and()
                .headers().frameOptions().sameOrigin(); //X-Frame-Options 응답 헤더 설정. <iframe>,<frame> 등의 공격을 막기 위해서 설정되어 있어서 h2-console이 안들어가진다.
                //그래서 같은 도메인에서는 접근이 가능하도록 sameOrigin으로 설정. disable하면 비활성화도 가능하다.
                //참고사이트1: https://zyngirok.com/entry/Java-Spring-H2-Localhost-%EC%97%B0%EA%B2%B0%EC%9D%84-%EA%B1%B0%EB%B6%80
                //참고사이트2: https://gigas-blog.tistory.com/124

    }
}