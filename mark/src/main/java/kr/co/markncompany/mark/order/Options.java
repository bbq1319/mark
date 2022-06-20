package kr.co.markncompany.mark.order;

import kr.co.markncompany.mark.common.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Options extends BaseEntity {

    @Id
    @Column(name = "option_id")
    private String id;
    private String optionName;
    private int optionPrice;
    private int optionStock;
    private boolean defaultCheck;

    @ManyToOne
    @JoinColumn(name = "option_group_id")
    private OptionGroup optionGroup;

    @Builder.Default
    @OneToMany(mappedBy = "options")
    private List<MenuOption> menuOptions = new ArrayList<>();

}
