export const networkError = {
  title: <strong>네트워크 에러!</strong>,
  html: <span style={{ color: "tomato" }}>네트워크 샷다내렸습니다.</span>,
  icon: "error",
};

export const wrongIdError = {
  title: <strong>이메일이 틀렸습니다!</strong>,
  html: (
    <span style={{ color: "tomato" }}>이메일을 똑.바.로 입력하세요.😡</span>
  ),
  icon: "error",
};

export const wrongPasswordError = {
  title: <strong>비밀번호가 틀렸습니다!</strong>,
  html: (
    <span style={{ color: "tomato" }}>비밀번호를 제.대.로 입력하세요.😡</span>
  ),
  icon: "error",
};

export const emptyInputError = {
  title: <strong>이메일, 비밀번호를 입력해주세요!</strong>,
  html: <span style={{ color: "tomato" }}>😡</span>,
  icon: "error",
};

export const expiredJwtException = {
  title: <strong>로그인 에러</strong>,
  html: <span>토큰이 만료되었습니다.</span>,
  icon: "error",
};
