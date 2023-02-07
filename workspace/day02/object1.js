let account = {
    owner: '강민구',
    password: "1234",
    money: 100000,
    accountNumber: "1234-1234-12"
};

account.age = 20;

account.deposit = (money) => {
    this.money -= money;
};

account.deposit(3000);

console.log(account.money);