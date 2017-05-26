import slug from 'slug';
import { url } from './config';
import base64 from 'base-64';

// default export
export default function User(name, email, website) {
  return { name, email, website };
}

// named export
export function createURL(name) {
  return `${url}/users/${slug(name)}`;
}

// named export
export function gravatar(email) {
  const hash = base64.encode(email);
  const photoURL = `https://gravatar.com/avatar/${hash}`;
  return photoURL;
}