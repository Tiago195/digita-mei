package com.digitamei.utils;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class JWT {

  private final String SECRET = "mysecretkeymysecretkeymysecretkey";
  private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

  public String generateToken(Map<String, Object> claims) {
    return Jwts.builder()
        .setClaims(Map.of("user", claims))
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour
        .signWith(key, SignatureAlgorithm.HS256)
        .compact();
  }

  public boolean validateToken(String token) {
    try {
      getClaims(token);
      return true;
    } catch (JwtException e) {
      return false;
    }
  }

  public Claims getClaims(String token) {
    return Jwts.parserBuilder()
        .setSigningKey(key)
        .build()
        .parseClaimsJws(token)
        .getBody();
  }

}
