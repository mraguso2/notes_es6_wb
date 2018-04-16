// config.js is a good place to put API keys and rest endpoints
// easier to manage and maintain

// variables are always scoped, either to fn or block or to that module

/* In order to make this apiKey available outside of this module you need
 * to export it. Two types of export in es6:
 * 1. default export: export as default and you can import it as any name that you like
 * 2. named export: you export as a name and you have to import it as that same name
 * Default is made for main thing that module does
*/

// Because exported as default, you can name it anything when you import it
// can only have 1 default export
const apiKey = 'abc123';
export default apiKey;

// Named export
export const restEndpoint = 'http://wesbos.com/wp-json/wp/v2/posts';

export const url = 'http://wesbos.com';

export function greet(user) {
  console.log(`Welcome ${user.name} to Jimmy's Sports Bar`);
  brewFn(user);
}

function brewFn(user) {
  console.log(`${user.name}, looks like you enjoy ${user.beerChoice}'s. We have ${beerList[user.beerChoice.toLowerCase()]} on Tap today.`);
}

const beerList = {
  lager: 'Landshark',
  ipa: 'Wicked Weed Pernicious',
  stout: 'Bell\'s Kalamazoo',
  paleAle: 'Sierra Nevada'
};
