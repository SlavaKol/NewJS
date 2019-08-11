let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};


for (let i = 0; i < 2; i++) {
    let s = prompt('Введите ' + i + 
                   ' обязательную статью расходов в этом месяце'),
        m = prompt('Во сколько обойдется?');
    if ( (typeof(s)) === 'string' && (typeof(s)) != null && typeof(m) != null &&
          typeof(m) === 'string' && s != '' && m != '') {
        appData.expenses.s = m;
    } else {
        alert('Введите правильные данные');
        i--;
    }


};

appData.moneyForDay = appData.budget/30;
alert("Ежеднвный расход: " + appData.moneyForDay + " уев");


