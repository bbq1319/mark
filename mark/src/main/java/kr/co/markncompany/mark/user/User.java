package kr.co.markncompany.mark.user;

import kr.co.markncompany.mark.security.PasswordEncryption;
import kr.co.markncompany.mark.user.dto.UserDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@NoArgsConstructor
public class User implements UserDetails {

    @Id
    @Column(name = "user_id")
    private String id;
    private String userEmail;
    private String userName;
    private String password;
    private boolean useFlag;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(joinColumns = @JoinColumn(name = "user_id"))
    private List<String> roles;

    public User(UserDto userDto) throws Exception {
        this.id = userDto.getId();
        this.password = PasswordEncryption.encryption(userDto.getPassword());
        this.userName = userDto.getUserName();
        this.useFlag = true;
        this.roles = Arrays.asList("ROLE_ADMIN", "ROLE_USER");
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
