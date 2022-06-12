package kr.co.markncompany.mark.user.repository;

import kr.co.markncompany.mark.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findById(String userId);
    long countById(String userId);

}
