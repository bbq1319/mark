package kr.co.markncompany.mark.order.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class MenuCustomRepository {

    private final JPAQueryFactory queryFactory;

}
