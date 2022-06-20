package kr.co.markncompany.mark.order;

import kr.co.markncompany.mark.common.BaseEntity;
import kr.co.markncompany.mark.order.dto.MenuDto;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

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

    @Builder.Default
    @OneToMany(mappedBy = "menu")
    private List<MenuOption> menuOptions = new ArrayList<>();

    public Menu(MenuDto menuDto) {
        this.id = menuDto.getId();
        this.menuName = menuDto.getMenuName();
        this.menuType = menuDto.getMenuType();
        this.menuPrice = menuDto.getMenuPrice();
        this.menuStock = menuDto.getMenuStock();
    }

}
