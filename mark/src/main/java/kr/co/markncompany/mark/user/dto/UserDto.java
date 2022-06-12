package kr.co.markncompany.mark.user.dto;

import lombok.Data;

@Data
public class UserDto {

    private String id;
    private String userName;
    private String password;
    private boolean useFlag;

}
