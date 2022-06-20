package kr.co.markncompany.mark.order.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.co.markncompany.mark.order.transfer.OptionInfoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

import static kr.co.markncompany.mark.order.QMenuOption.menuOption;
import static kr.co.markncompany.mark.order.QOptionGroup.optionGroup;
import static kr.co.markncompany.mark.order.QOptions.options;

@Repository
@RequiredArgsConstructor
public class MenuCustomRepository {

    private final JPAQueryFactory queryFactory;

    public List<OptionInfoResponse> getOptionInfoByMenuId(String menuId) {
        return queryFactory
                .select(Projections.constructor(OptionInfoResponse.class,
                        options,
                        menuOption,
                        optionGroup
                ))
                .from(menuOption)
                .leftJoin(options).on(menuOption.options.id.eq(options.id))
                .leftJoin(optionGroup).on(options.optionGroup.id.eq(optionGroup.id))
                .where(menuOption.menu.id.eq(menuId))
                .fetch();
    }

}
