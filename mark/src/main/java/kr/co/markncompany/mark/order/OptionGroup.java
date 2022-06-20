package kr.co.markncompany.mark.order;

import kr.co.markncompany.mark.common.BaseEntity;
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
public class OptionGroup extends BaseEntity {

    @Id
    @Column(name = "option_group_id")
    private String id;
    private String optionGroupName;
    private String optionType;

    @Builder.Default
    @OneToMany(mappedBy = "optionGroup")
    private List<Options> options = new ArrayList<>();

}
