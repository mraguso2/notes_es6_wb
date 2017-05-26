// importing a named export, "uniq", from lodash
import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
// default import - can name it anything and don't need { }
import apiKey from './src/config';
// named import - needs to exact name in module and need { }
import { restEndpoint as endPoint, greet  } from './src/config';

import User, { createURL, gravatar } from './src/user';


console.log(apiKey);
console.log(endPoint);
const ages = [1,1,4,52,12,4];

console.log(uniq(ages));

greet({ 
  name: 'Mike', 
  beerChoice: 'IPA' 
});

const mike = new User('Mike Raguso', 'michael.raguso@gmail.com', 'mikeraguso.com');
console.log(mike);

const profile = createURL(mike.name);
console.log(profile);

const image = gravatar(mike.email);
