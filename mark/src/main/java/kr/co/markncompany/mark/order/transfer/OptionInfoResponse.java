package kr.co.markncompany.mark.order.transfer;

import com.querydsl.core.annotations.QueryProjection;
import kr.co.markncompany.mark.order.MenuOption;
import kr.co.markncompany.mark.order.OptionGroup;
import kr.co.markncompany.mark.order.Options;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OptionInfoResponse {

    private String id;
    private String optionGroupName;
    private String optionType;

    // Options
    private String optionName;
    private int optionPrice;
    private int stock;
    private boolean defaultCheck;

    // MenuOption
    private int menuOptionPrice;
    private boolean required;

    @QueryProjection
    public OptionInfoResponse(Options options, MenuOption menuOption, OptionGroup optionGroup) {
        setByOptions(options);
        setByMenuOption(menuOption);
        setByOptionGroup(optionGroup);
    }

    private void setByOptions(Options options) {
        this.optionName = options.getOptionName();
        this.optionPrice = options.getOptionPrice();
        this.stock = options.getOptionStock();
        this.defaultCheck = options.isDefaultCheck();
    }

    private void setByMenuOption(MenuOption menuOption) {
        this.menuOptionPrice = menuOption.getPrice();
        this.required = menuOption.isRequired();
    }

    private void setByOptionGroup(OptionGroup optionGroup) {
        this.id = optionGroup.getId();
        this.optionGroupName = optionGroup.getOptionGroupName();
        this.optionType = optionGroup.getOptionType();
    }

}
