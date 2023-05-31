export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export function isValidPassword(password) {
  if (password === null || password.length < 8) {
    return "your password is too short";
  }
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)/;
  const isStrong = regex.test(password);
  if (!isStrong) {
    return "your password is too weak";
  }
  return "valid password";
}
