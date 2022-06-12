package kr.co.markncompany.mark.util;

import kr.co.markncompany.mark.user.User;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CookieUtil {

    public static String getCookie(HttpServletRequest request) {
        if (request.getHeader("X-AUTH-TOKEN") != null) {
            return request.getHeader("X-AUTH-TOKEN");
        }

        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if (cookie.getName().equals("innoForest")) {
                    return cookie.getValue();
                }
            }
        }
        return null;
    }

    public static void getNewCookie(String token, User user, HttpServletResponse response) {
        // HttpServletResponse response = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getResponse();

        // JWT setting
        Cookie cookie = new Cookie("innoForest", token);
        cookie.setHttpOnly(true);
        response.addCookie(cookie);

        // member info setting
        Cookie id = new Cookie("id", user.getId());
        Cookie name = new Cookie("name", user.getUsername());
        response.addCookie(id);
        response.addCookie(name);
    }

    public static void deleteCookie() {
        HttpServletResponse response = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getResponse();
        Cookie cookie = new Cookie("innoForest", null);
        cookie.setHttpOnly(true);
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);
    }

}
