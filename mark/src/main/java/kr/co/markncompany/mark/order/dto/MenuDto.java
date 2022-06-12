package kr.co.markncompany.mark.order.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MenuDto {

    private String id;
    private String menuName;
    private String menuType;
    private int menuPrice;
    private int menuStock;

}
