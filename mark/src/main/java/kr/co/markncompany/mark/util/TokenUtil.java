package kr.co.markncompany.mark.util;

import kr.co.markncompany.mark.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
public class TokenUtil {

    private static String getJwt(HttpServletRequest request) {
        String authToken = request.getHeader("X-AUTH-TOKEN");
        if (authToken != null)
            return authToken;
        return null;
    }

    public static boolean checkJwt(HttpServletRequest request) {
        boolean isValidJwt = false;
        String jwt = getJwt(request);
        if (jwt != null)
            isValidJwt = JwtTokenProvider.validateToken(jwt);
        return isValidJwt;
    }

}
