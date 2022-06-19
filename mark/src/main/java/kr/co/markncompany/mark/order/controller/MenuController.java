package kr.co.markncompany.mark.order.controller;

import kr.co.markncompany.mark.common.transfer.ErrorResponse;
import kr.co.markncompany.mark.order.Menu;
import kr.co.markncompany.mark.order.repository.MenuRepository;
import kr.co.markncompany.mark.util.TokenUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/api/v1/menu")
public class MenuController {

    private final MenuRepository menuRepository;

    @PostMapping("")
    public ResponseEntity getMenuList(HttpServletRequest request) throws Exception {
        List<Menu> menuList = menuRepository.findAll();
        if (menuList.size() > 0)
            return ResponseEntity.ok().body(menuList);
        else
            return ResponseEntity.badRequest().body("메뉴 조회에 실패했습니다.");
    }

}
