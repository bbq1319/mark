package kr.co.markncompany.mark.common;

import lombok.Getter;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity extends BaseRegEntity {

    @LastModifiedBy
    @Column(name = "mod_id")
    private String modifiedBy;
    @LastModifiedDate
    @Column(name = "mod_at")
    private LocalDateTime modifiedAt;

}
