class UserNotFW {
  // You can have a lot of duplicated names and that uses a lot of memory.
  // I am going to test how much memory I need
  constructor(fullname) {
    this.fullname = fullname;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomString = () => {
  let result = [];
  for (let x = 0; x < 10; x++) {
    result.push(String.fromCharCode(65 + getRandomInt(26)));
  }
};

class UsersFW {
  constructor(fullName) {
    let getOrAdd = function (s) {
      let idx = UsersFW.strings.indexOf(s);
      if (idx !== -1) return idx;
      else {
        UsersFW.strings.push(s);
        return UsersFW.strings.length - 1;
      }
    };

    this.names = fullName.split(" ").map(getOrAdd);
  }
}
UsersFW.strings = [];

let firstNames = [];
let lastNames = [];

// Not Lightweight
let users = [];
// Lightweight
let usersFW = [];

for (let i = 0; i < 100; i++) {
  firstNames.push(randomString());
  lastNames.push(randomString());
}

for (let first of firstNames) {
  for (let last of lastNames) {
    users.push(new UserNotFW(`${first} ${last}`));
    usersFW.push(new UsersFW(`${first} ${last}`));
  }
}

let usersFWLength = [usersFW, UsersFW.strings]
  .map((item) => JSON.stringify(item).length)
  .reduce((x, y) => x + y);

console.log(`10k users take up approx. ${JSON.stringify(users).length} chars`);
console.log(`10k flyweight users take up approx. ${usersFWLength} chars`);
