export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    email: chance.email(),
    address: chance.address(),
    city: chance.city(),
    country: chance.country(),
    phone: chance.phone(),
    birthday: chance.birthday({ string: true }),
    avatar: chance.avatar(),
    twitter: chance.twitter(),
    facebook: chance.facebook(),
    googlePlus: chance.google_plus(),
    linkedin: chance.linkedin(),
    ip: chance.ip(),
    color: chance.color(),
    company: chance.company(),
    profession: chance.profession(),
    guid: chance.guid(),
    website: chance.url(),
    favorite: chance.bool({ likelihood: 30 }),
  };
  response.status(200).json(jokes);
}
