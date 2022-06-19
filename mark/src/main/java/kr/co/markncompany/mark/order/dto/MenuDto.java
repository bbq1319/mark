package kr.co.markncompany.mark.order.dto;

import kr.co.markncompany.mark.common.BaseEntity;
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

}
