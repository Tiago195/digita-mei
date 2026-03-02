package com.digitamei.common.validators;

import java.util.Map;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import com.digitamei.common.annotations.Authenticator;
import com.digitamei.models.User;
import com.digitamei.utils.JWT;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@Aspect
@Component
@RequiredArgsConstructor
public class AuthenticatorAspect {
  private final JWT jwt;
  private final HttpServletRequest request;

  @SuppressWarnings("unchecked")
  @Before("@annotation(authenticator)")
  public void authenticate(JoinPoint joinPoint, Authenticator authenticator) {
    String token = request.getHeader(authenticator.header());
    
    if(token == null || !jwt.validateToken(token)) {
      throw new RuntimeException("Invalid token");
    }

    Map<String, Object> mapUser = jwt.getClaims(token).get("user", Map.class);

    User user = new User();
    user.setId(((Number) mapUser.get("id")).longValue());
    user.setEmail(mapUser.get("email").toString());

    request.setAttribute("user", user);
  }

}
