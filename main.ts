class Job {
    time: number
    old_money
    money_gained: number
    average: number
    constructor(time: number, money_gained: number, old_money: any) {
        this.time = time
        this.old_money = old_money
        this.money_gained = money_gained
        this.average = time / money_gained * 100
    }
    
    public work() {
        for (let second = 0; second < this.time; second++) {
            this.old_money = this.old_money + this.average
            basic.pause(100)
        }
    }
    
}

class OfficeJob extends Job {
}

class Purchase {
    old_money: number
    money_lost: number
    constructor(money_lost: number, old_money: number) {
        this.old_money = old_money
        this.money_lost = money_lost
    }
    
    public buy() {
        if (this.old_money > this.money_lost) {
            this.old_money = this.old_money - this.money_lost
        }
        
    }
    
}

let money = 0
