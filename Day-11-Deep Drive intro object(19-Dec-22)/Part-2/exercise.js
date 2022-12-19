/*

Total Number-20

1. What is the value of the keyword this in the following example: (3)
const data = this;
console.log(data);

What does this function output? Why?
function logThis(){
    return this;
}

logThis(); // ?

*/

const data = this;
console.log(data)

function logThis() {
  return this;
}

logThis();

// There this mean the global of the pc

/*

2. What does this function output? Why? (2)
const instructor = {
    firstName: 'Adnan',
    sayHi(){
        console.log("Hello! " + this.firstName);
    }
}
instructor.sayHi() // ?
*/
const instructor = {
  firstName: "Adnan",
  sayHi() {
    console.log("Hello! " + this.firstName);
  },
};

console.log(instructor.sayHi())

// The Function out put is undefined

/*

3. What does this function output? Why? (3)
const instructor = {
    firstName: 'Adnan',
    info: {
        catOwner: true,
        boatOwner: false
    },
    displayInfo: function(){
        console.log("Cat owner? "+ '-' + this.catOwner);
    }
}

instructor.displayInfo() // ?
Bind this to get correct output ex: "Cat owner?-true "
*/

const instructo = {
  firstName: "Adnan",
  info: {
    catOwner: true,
    boatOwner: false,
  },
  displayInfo: function () {
    console.log("Cat owner? " + "-" + this.catOwner);
  },
};

instructo.displayInfo();

/*


4.What does this function output? Why? (3)
const instructor = {
    firstName: 'Adnan',
    info: {
        catOwner: true,
        boatOwner: false,
        displayLocation: function(){
            return  `Residing ${this.data.location}`;
        },
        data: {
            location: "Dhaka"
        }
    },
}
instructor.info.displayLocation() // ?
*/

const instruct = {
  firstName: "Adnan",
  info: {
    catOwner: true,
    boatOwner: false,
    displayLocation: function () {
      return `Residing ${this.data.location}`;
    },
    data: {
      location: "Dhaka",
    },
  },
};
instruct.info.displayLocation();

/*


5.What does this function output? Why? (3)
const instructor = {
    firstName: 'Adnan',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return  `Residing ${this.data.location}`;
        },
        data: {
            location: "Dahaka",
            logLocation: this.displayLocation
        }
    },
}

instructor.info.data.logLocation() // Why might we be getting an error here?
*/

const instruc = {
  firstName: "Adnan",
  info: {
    catOwner: true,
    boatOwner: true,
    displayLocation: function () {
      return `Residing ${this.data.location}`;
    },
    data: {
      location: "Dahaka",
      logLocation: this.displayLocation,
    },
  },
};

instruc.info.data.logLocation(); 

