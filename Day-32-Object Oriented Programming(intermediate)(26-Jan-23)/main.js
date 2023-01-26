const profile = {
    name: 'Rifat',
    _age: 20,
    get age() {
        return this._age + ' years old'
    },

    set age(number) {
        if(number < 18) throw('Hello')   
        this._age = number
    }
}

profile.age = 20




console.log(profile.age)


function Profile(name, age) {
    this.name = name
    this.age = age  
    this.getInfo() = function () {
        return `${this.name} - ${this.age}`
    }
}
const uProfile = new Profile('Rifat', 13)
console.log(uProfile)
