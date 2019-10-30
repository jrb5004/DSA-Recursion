function powerCalculator(base, exp) {
    if (exp <= 0) {
      return 'must be a valid int'
    }
    if (exp == 1) {
      return 0
    }
    exp --
    return base * base + powerCalculator(base, exp)
   }
   console.log(powerCalculator(10, 1))