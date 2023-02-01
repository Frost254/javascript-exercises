const findTheOldest = (person) => {
  let oldestPerson = person[0];
    if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
  }
  for (let i = 1; i < person.length; i++) {
    let currentPerson = person[i];
    if ((currentPerson.death - currentPerson.birth) > (oldestPerson.death - oldestPerson.birth)) {
      oldestPerson = currentPerson;
    }
}
  return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
