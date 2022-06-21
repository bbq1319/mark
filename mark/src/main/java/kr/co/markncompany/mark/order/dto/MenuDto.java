package kr.co.markncompany.mark.order.dto;

import kr.co.markncompany.mark.common.BaseEntity;
import kr.co.markncompany.mark.order.Menu;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class MenuDto extends BaseEntity {

    private String id;
    private String menuName;
    private String menuType;
    private int menuPrice;
    private int menuStock;

    private String createdBy;
    private LocalDateTime createdAt;
    private String modifiedBy;
    private LocalDateTime modifiedAt;

    public MenuDto(Menu menu) {
        setByMenu(menu);
    }

    private void setByMenu(Menu menu) {
        id = menu.getId();
        menuName = menu.getMenuName();
        menuType = menu.getMenuType();
        menuPrice = menu.getMenuPrice();
        menuStock = menu.getMenuStock();

        createdBy = menu.getCreatedBy();
        createdAt = menu.getCreatedAt();
        modifiedBy = menu.getModifiedBy();
        modifiedAt = menu.getModifiedAt();
    }

}
