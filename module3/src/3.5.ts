{
  // access modifiers
  class BankAccount {
    readonly id: number;
    name: string;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    addDeposit(amount: number) {
      this._balance += amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const poorAccount = new BankAccount(111, "Mr. Poor", 20);
  poorAccount.addDeposit(30);
  console.log(poorAccount.getBalance());
}
