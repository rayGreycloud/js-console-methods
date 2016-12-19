// Console Methods
// Based on examples by Wes Bos JavaScript30

// Clearing
console.clear();

console.log("CONSOLE METHODS");

// Regular
console.log('This is regular console.log');

// Interpolated
console.log('This console.log includes an %s', 'interpolated string')

// Styled
console.log(
  '%c Using %c before the text injects styles',
  'font-size:50px; background:yellow;'
);

// Warning!
console.warn('Using console.warn adds yellow warning icon with highlight text and stack trace.');

// Error :|
console.error('Using console.error adds red error icon with highlight text and stack trace.');

// Info
console.info('Using console.info adds blue info icon with text.')

// Testing
console.log('Assertion: 1 < 3');
console.assert(1 < 3, 'That is incorrect.');
console.log('Assertion: 1 > 3');
console.assert(1 > 3, 'That is incorrect.');

// Viewing DOM Elements
let p = document.querySelector('p');
console.log('Viewing DOM element with console.log looks like this:');
console.log(p);
console.log('Viewing DOM element using console.dir provides dropdown.');
console.dir(p);

// Grouping together
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];
const cats = [{ name: 'Stampy', age: 4}, { name: 'Blackie', age: 2}, {name: 'Coco', age: 10}];

console.log('Using console.group allows related logs to be grouped together');

dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
});

console.log('Using console.groupCollapsed makes grouped logs collapsed by default');
cats.forEach(cat => {
  console.groupCollapsed(`${cat.name}`);
  console.log(`${cat.name} is ${cat.age} years old.`);
  console.log(`${cat.name} is ${cat.age * 7} dog years old.`);
  console.groupEnd(`${cat.name}`);
});

// Counting
console.log('Using console.count tracks number of times called on item');
console.count('dogs');
console.count('dogs');
console.count('cats');
console.count('cats');
console.count('cats');

// Timing
console.log('Using console.time provides time elapsed performing enclosed code');
console.time('fetching data');
fetch('https://api.github.com/users/rayGreycloud')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// Tables
console.log('Using console.table creates table of array of objects passed in');
console.table(dogs);
console.table(cats);
