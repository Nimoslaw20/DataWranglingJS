class Person {
    constructor({age, name, gender, balance,company, email, phone, address}) {
        this.age = age;
        this.name = name;
        this.gender =  gender;
        this.balance = balance;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.address = address;
        
    }

    getUser() {
        return this;
    }

   get isRich (){
       return this.balance < 4000;
   }

   get isWorking (){
       return this.company != null;
   }
}


module.exports = Person;
