package com.digitamei.dtos.auth;

import lombok.Data;

@Data
public class AuthRequestLogin {
  private String email;
  private String password;
}
