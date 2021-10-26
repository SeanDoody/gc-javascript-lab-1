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

    console.log(calculatePaycheck(10, 20));
    console.log(calculatePaycheck(10, 40));
    console.log(calculatePaycheck(10, 50));
    console.log(calculatePaycheck(12, 60));

    console.log(calculateMillion(10, 50));

})();