function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)) return true;
    else return false;
  }