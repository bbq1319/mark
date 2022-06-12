package kr.co.markncompany.mark.user.transfer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class UserResponse {

    private String token;
    private String id;
    private String userName;
    private List<String> roles;

}
