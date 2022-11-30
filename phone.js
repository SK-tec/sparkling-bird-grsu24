function isPhoneNumber(number) {
  const regex = /^(\+49|0)(\s?\d{2,3}){1,2}\s?\d{6,7}$/;

  return regex.test(number);
}
module.exports = isPhoneNumber;
