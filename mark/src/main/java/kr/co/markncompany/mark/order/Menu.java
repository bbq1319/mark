package kr.co.markncompany.mark.order;

import kr.co.markncompany.mark.common.BaseEntity;
import kr.co.markncompany.mark.order.dto.MenuDto;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Menu extends BaseEntity {

    @Id
    @Column(name = "menu_id")
    private String id;
    private String menuName;
    private String menuType;
    private int menuPrice;
    private int menuStock;

    public Menu(MenuDto menuDto) {
        this.id = menuDto.getId();
        this.menuName = menuDto.getMenuName();
        this.menuType = menuDto.getMenuType();
        this.menuPrice = menuDto.getMenuPrice();
        this.menuStock = menuDto.getMenuStock();
    }

}
