package kr.co.markncompany.mark.user.controller;

import kr.co.markncompany.mark.common.transfer.ErrorResponse;
import kr.co.markncompany.mark.common.transfer.SuccessResponse;
import kr.co.markncompany.mark.security.JwtTokenProvider;
import kr.co.markncompany.mark.security.PasswordEncryption;
import kr.co.markncompany.mark.user.User;
import kr.co.markncompany.mark.user.transfer.UserResponse;
import kr.co.markncompany.mark.user.dto.UserDto;
import kr.co.markncompany.mark.user.repository.UserRepository;
import kr.co.markncompany.mark.util.ClientInfoUtil;
import kr.co.markncompany.mark.util.TokenUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class LoginController {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/signup")
    public ResponseEntity signup(UserDto userDto) throws Exception {
        if (userRepository.countById(userDto.getId()) > 0)
            return ResponseEntity.badRequest().body("이미 존재하는 회원입니다.");

        User user = new User(userDto);
        userRepository.save(user);
        return ResponseEntity.ok().body("회원가입 성공");
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserDto userDto, HttpServletRequest request) throws Exception {
        User user = userRepository.findById(userDto.getUserEmail())
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 ID입니다."));

        if (!PasswordEncryption.mathes(userDto.getPassword(), user.getPassword()))
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        if (!user.isUseFlag())
            throw new IllegalArgumentException("비활성화된 사용자입니다. 관리자에게 문의해주세요.");

        String token = jwtTokenProvider.createToken(user.getUsername(), user.getRoles());
        String ip = ClientInfoUtil.getClientIp(request);
        String ua = ClientInfoUtil.getUserAgent(request);

        return ResponseEntity.ok().body(new SuccessResponse<>(UserResponse
                .builder()
                .token(token)
                .id(user.getId())
                .userName(user.getUsername())
                .roles(user.getRoles())
                .build()));
    }

    @GetMapping("/check/token")
    public ResponseEntity checkToken(HttpServletRequest request) {
        if (!TokenUtil.checkJwt(request))
            return new ResponseEntity(new ErrorResponse("invalid token"), HttpStatus.UNAUTHORIZED);

        return ResponseEntity.ok().body("Token Check Success");
    }

    @GetMapping("/userList")
    public ResponseEntity getUserList() {
        List<User> userList = userRepository.findAll();
        return ResponseEntity.ok().body(userList);
    }

}
