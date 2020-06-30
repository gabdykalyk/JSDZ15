const MONOBNANK = 'monobank';
const PRIVATBANK = 'privat24';
const MEGABANK = 'megabank';
const ESHEODINBANK = 'esheodinbank';
const NOVIIBANK = 'noviibank';

let MONOBNANK_BALANCE = 100;
let PRIVATBANK_BALANCE = 1000;
let MEGABANK_BALANCE = -1000;
let ESHEODINBANK_BALANCE = 2300;
let NOVIIBANK_BALANCE = -400;

let userBank = null;

function getBalance(bankName) {
    if (bankName === MONOBNANK) {
        return MONOBNANK_BALANCE;
    }

    if (bankName === PRIVATBANK) {
        return PRIVATBANK_BALANCE;
    }

    if (bankName === MEGABANK) {
        return MEGABANK_BALANCE;
    }

    if (bankName === ESHEODINBANK) {
        return ESHEODINBANK_BALANCE;
    }

    if (bankName === NOVIIBANK) {
        return NOVIIBANK_BALANCE;
    }
}

function getMoney(bankName, money) {
    if (bankName === MONOBNANK) {
        MONOBNANK_BALANCE -= money;

        return money;
    }

    if (bankName === PRIVATBANK) {
        PRIVATBANK_BALANCE -= money;
        
        return money;
    }

    if (bankName === MEGABANK) {
        MEGABANK_BALANCE -= money;
        
        return money;
    }

    if (bankName === ESHEODINBANK) {
        ESHEODINBANK_BALANCE -= money;

        return money;
    }

    if (bankName === NOVIIBANK) {
        NOVIIBANK_BALANCE -= money;
        
        return money;
    }
}

function addMoney(bankName, money) {
    if (bankName === MONOBNANK) {
        MONOBNANK_BALANCE += money;

        return MONOBNANK_BALANCE;
    }

    if (bankName === PRIVATBANK) {
        PRIVATBANK_BALANCE += money;
        
        return PRIVATBANK_BALANCE;
    }

    if (bankName === MEGABANK) {
        MEGABANK_BALANCE += money;
        
        return MEGABANK_BALANCE;
    }

    if (bankName === ESHEODINBANK) {
        ESHEODINBANK_BALANCE += money;

        return ESHEODINBANK_BALANCE;
    }

    if (bankName === NOVIIBANK) {
        NOVIIBANK_BALANCE += money;

        return NOVIIBANK_BALANCE;
    }
}

function chooseBank(expectedBankName) {
    const currentBank = confirm(`Ваш банк ${expectedBankName}?`);

    return currentBank;
}

function getBank() {
    const isMonobank = chooseBank(MONOBNANK); 
    
    if (isMonobank) {
        return MONOBNANK;
    }

    const isPrivatBank = chooseBank(PRIVATBANK); 
    
    if (isPrivatBank) {
        return PRIVATBANK;
    }

    const isMegaBank = chooseBank(MEGABANK);

    if (isMegaBank) {
        return MEGABANK;
    }

    const isEsheOdinBank = chooseBank(ESHEODINBANK); 
    
    if (isEsheOdinBank) {
        return ESHEODINBANK;
    }

    const isNoviiBank = chooseBank(NOVIIBANK);

    if (isNoviiBank) {
        return NOVIIBANK;
    }

    return null;
}

function update() {
    const bankBalance = getBalance(userBank);

    bankName.innerText = userBank;
    currentBalance.innerText = `${bankBalance}$`;
}

function chooseBankAccount() {
    userBank = getBank();

    if (userBank) {
        update();
    } else {
        alert('Вы не выбрали банк');
    }
}

function askToAddMoney() {
    const money = +prompt(`Сколько вы желаете внести на счет ${userBank}`);

    if (money) {
        const amount = addMoney(userBank, money);

        alert(`Теперь на счету банка ${userBank} – ${amount}$`);
        update();
    } else {
        alert('Неверное значение! Попробуйте еще раз!');
    }
}

function askToGetMoney() {
    const money = +prompt(`Сколько вы желаете cнять со счета ${userBank}`);
    const currentBalance = getBalance(userBank);;

    if (currentBalance >= money) {
        const amount = getMoney(userBank, money);

        alert(`Вы сняли ${amount}$ с банка – ${userBank}`);
        update();
    } else {
        alert('Недостаточно средств');
    }
}

// NoMegaBank BEGIN

function chooseNewBankAccountNoMegaBank() {
    userBank = NoMegaBank();

    if (userBank) {
        update();
    } else {
        alert('Вы не выбрали банк');
    }
}

function NoMegaBank() {
    const isMonobank = chooseBank(MONOBNANK);

    if (isMonobank) {
        return MONOBNANK;
    }

    const isPrivatBank = chooseBank(PRIVATBANK);

    if (isPrivatBank) {
        return PRIVATBANK;
    }

    const isEsheOdinBank = chooseBank(ESHEODINBANK);

    if (isEsheOdinBank) {
        return ESHEODINBANK;
    }

    const isNoviiBank = chooseBank(NOVIIBANK);

    if (isNoviiBank) {
        return NOVIIBANK;
    }

    return null;
}

//NoMegaBank FINISH

// NoMonoBank BEGIN

function chooseNewBankAccountNoMonoBank() {
    userBank = NoMonoBank();

    if (userBank) {
        update();
    } else {
        alert('Вы не выбрали банк');
    }
}

function NoMonoBank() {
    const isPrivatBank = chooseBank(PRIVATBANK);

    if (isPrivatBank) {
        return PRIVATBANK;
    }

    const isMegaBank = chooseBank(MEGABANK);

    if (isMegaBank) {
        return MEGABANK;
    }

    const isEsheOdinBank = chooseBank(ESHEODINBANK);

    if (isEsheOdinBank) {
        return ESHEODINBANK;
    }

    const isNoviiBank = chooseBank(NOVIIBANK);

    if (isNoviiBank) {
        return NOVIIBANK;
    }

    return null;
}

//NoMonoBank FINISH

// NoPrivatBank BEGIN

function chooseNewBankAccountNoPrivatBank() {
    userBank = NoPrivatBank();

    if (userBank) {
        update();
    } else {
        alert('Вы не выбрали банк');
    }
}

function NoPrivatBank() {
    const isMonobank = chooseBank(MONOBNANK);

    if (isMonobank) {
        return MONOBNANK;
    }

    const isMegaBank = chooseBank(MEGABANK);

    if (isMegaBank) {
        return MEGABANK;
    }

    const isEsheOdinBank = chooseBank(ESHEODINBANK);

    if (isEsheOdinBank) {
        return ESHEODINBANK;
    }

    const isNoviiBank = chooseBank(NOVIIBANK);

    if (isNoviiBank) {
        return NOVIIBANK;
    }

    return null;
}

//NoPrivatBank FINISH

// NoEsheOdinBank BEGIN

function chooseNewBankAccountNoEsheOdinBank() {
    userBank = NoEsheOdinBank();

    if (userBank) {
        update();
    } else {
        alert('Вы не выбрали банк');
    }
}

function NoEsheOdinBank() {
    const isMonobank = chooseBank(MONOBNANK);

    if (isMonobank) {
        return MONOBNANK;
    }

    const isPrivatBank = chooseBank(PRIVATBANK);

    if (isPrivatBank) {
        return PRIVATBANK;
    }

    const isMegaBank = chooseBank(MEGABANK);

    if (isMegaBank) {
        return MEGABANK;
    }


    const isNoviiBank = chooseBank(NOVIIBANK);

    if (isNoviiBank) {
        return NOVIIBANK;
    }

    return null;
}

//NoEsheOdinBank FINISH

// NoNoviiBank BEGIN

function chooseNewBankAccountNoNoviiBank() {
    userBank = NoNoviiBank();

    if (userBank) {
        update();
    } else {
        alert('Вы не выбрали банк');
    }
}

function NoNoviiBank() {
    const isMonobank = chooseBank(MONOBNANK);

    if (isMonobank) {
        return MONOBNANK;
    }

    const isPrivatBank = chooseBank(PRIVATBANK);

    if (isPrivatBank) {
        return PRIVATBANK;
    }

    const isMegaBank = chooseBank(MEGABANK);

    if (isMegaBank) {
        return MEGABANK;
    }

    const isEsheOdinBank = chooseBank(ESHEODINBANK);

    if (isEsheOdinBank) {
        return ESHEODINBANK;
    }


    return null;
}

//NoNoviiBank FINISH

function deleteBank() {
    if (userBank === MEGABANK) {
        chooseNewBankAccountNoMegaBank()
    } else if (userBank === MONOBNANK) {
        chooseNewBankAccountNoMonoBank()
    } else if (userBank === PRIVATBANK) {
        chooseNewBankAccountNoPrivatBank()
    } else if (userBank === ESHEODINBANK) {
        chooseNewBankAccountNoEsheOdinBank()
    } else if (userBank === NOVIIBANK) {
        chooseNewBankAccountNoNoviiBank()
    } 
}

chooseBankAccount();

