(function () {

    function calculatePaycheck(wage, hours) {
        let paycheck = 0;
        
        if (hours <= 40) {
            paycheck = hours * wage;
        } else {
            paycheck = 40 * wage;
            paycheck += (hours - 40) * wage * 1.5;
        }
        return paycheck;
    }

    function calculateMillion(wage, hours) {
        const weeklyPay = calculatePaycheck(wage, hours);
        return Math.ceil(1000000 / weeklyPay);
    }

    console.log('extended challenge start');
    console.log('paycheck for 20 hours at $10/hour:');
    console.log(calculatePaycheck(10, 20));
    console.log('paycheck for 40 hours at $10/hour:');
    console.log(calculatePaycheck(10, 40));
    console.log('paycheck for 50 hours at $10/hour:');
    console.log(calculatePaycheck(10, 50));
    console.log('paycheck for 60 hours at $12/hour:');
    console.log(calculatePaycheck(12, 60));
    console.log('number of weeks to earn $1 million, working 50 hours/week at $10/hour:');
    console.log(calculateMillion(10, 50));
    console.log('exended challenge end');

})();