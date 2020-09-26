function conditionalUpperCase(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}