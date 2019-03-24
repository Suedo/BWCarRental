package com.bwcarrental.userservice.controller;

import com.bwcarrental.userservice.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by SUBHAJIT on 24-03-2019.
 */

@Controller
@RequestMapping(path = "/user")
public class UserController {

    private List<User> user;

    @GetMapping("/")
    public List<User> getAllUsers(){
        return user;
    }

}
