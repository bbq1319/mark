package kr.co.markncompany.mark.order.controller;

import kr.co.markncompany.mark.order.Menu;
import kr.co.markncompany.mark.order.repository.MenuCustomRepository;
import kr.co.markncompany.mark.order.repository.MenuRepository;
import kr.co.markncompany.mark.order.transfer.OptionInfoResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@AllArgsConstructor
@RequestMapping("/api/v1/menu")
public class MenuController {

    private final MenuRepository menuRepository;
    private final MenuCustomRepository menuCustomRepository;

    @PostMapping("")
    public ResponseEntity getMenuList(HttpServletRequest request) throws Exception {
        List<Menu> menuList = menuRepository.findAll();
        if (menuList.size() > 0)
            return ResponseEntity.ok().body(menuList);
        else
            return ResponseEntity.badRequest().body("메뉴 조회에 실패했습니다.");
    }

    @GetMapping("{id}")
    public ResponseEntity getMenuInfo(@PathVariable Optional<String> id) {
        if (id.isPresent()) {
            String menuId = id.get();
            Menu menu = menuRepository.findById(menuId).orElseThrow();
            List<OptionInfoResponse> optionDtoList = menuCustomRepository.getOptionInfoByMenuId(menu.getId());
            Map<String, List<OptionInfoResponse>> collect = optionDtoList.stream().collect(Collectors.groupingBy(OptionInfoResponse::getId));
            return ResponseEntity.ok().body(collect);
        }

        return ResponseEntity.badRequest().body("메뉴 ID 조회 실패");
    }

}
