
class Job:
    def __init__(self, time: int, money_gained: int, old_money: int):
        self.time = time
        self.old_money = old_money
        self.money_gained = money_gained
        self.average = (time / money_gained) * 100
    def work(self):
        for second in range(self.time):
            self.old_money = self.old_money + self.average
            basic.pause(100)

class OfficeJob(Job):
    def __init__(self, time: int, money_gained: int, old_money: int):
        self.__init__ = Job(time, (money_gained * 500), old_money)

class Purchase:
    def __init__(self, money_lost: int, old_money: int):
        self.old_money = old_money
        self.money_lost = money_lost
    def buy(self):
        if self.old_money > self.money_lost:
            self.old_money = self.old_money - self.money_lost
money = 0

