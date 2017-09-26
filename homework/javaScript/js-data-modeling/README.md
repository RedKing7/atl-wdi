[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  2. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  3. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

Email address:
- username
- password
- inbox
- outbox

User:
- username
- password
- primary email address
- secondary email address(es)
```
const Email = {
  username: String,
  password: String,
  inbox: [Messages],
  outbox: [Messages]
}

const User = {
  username: String,
  password: String,
  primaryEmail: Email,
  secondaryEmails: [Email]
}

const exampleEmail = {
  username: 'john.doe@example.com',
  password: 'p@SsW0rD',
  inbox: [...],
  outbox: [...]
}

const exampleUser = {
  username: 'John_Doe321',
  password: 'p@SsW0rD',
  primaryEmail: exampleEmail,
  secondaryEmails: []
}
```

### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.

Radio Station:
- playlists
- genre
- popularity

Playlist:
- albums
- songs
- artists
```
const RadioStation = {
  playlists: [Playlist],
  genre: String,
  popularity: Number
}

const Playlist = {
  albums: [Albums],
  songs: [Songs],
  artists: [Artists]
}

const examplePlaylist = {
  albums: [smokeAndMirrors, nightVisions],
  songs: [demons, iBetMyLife, shots],
  artists: [imagineDragons]
}

const exampleStation = {
  playlists: [examplePlaylist, ...],
  genre: 'Alternative',
  popularity: 76
}
```

### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.


Band:
- name
- tours
- top songs

Tours:
- dates
- ticket prices
- next show
```
const Tour = {
  dates: [Date],
  ticketPrices: [Number],
  nextShow: [Date]
}

const Band = {
  name: String,
  tours: [Tour],
  topSongs: [String]
}

exampleTour = {
  dates: [Nov4, May3, ...],
  ticketPrices: [100, 95, 130],
  nextShow: [Nov4]
}

exampleBand = {
  name: 'Relient K',
  tours: [exampleTour],
  topSongs: ['Be My Escape', 'Deathbed', 'Who I am Hates Who I've Been']
}
```

### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.


Coffeeshop:
- name
- location
- drinks
- shopping cart
- past orders

Drink:
- name
- ingredients
- price
- picture
```
const Drink = {
  name: String
  pictureUrl: String,
  price: Number,
  ingredients: String
}

const Coffeshop = {
  name: String,
  location: String,
  drinks: [Drink],
  cart: [Drink],
  pastOrder: [Drink]
}

const exampleDrink = {
  name: 'Pink Drink',
  pictureUrl: 'exampleImage.png',
  price: 10,
  ingredients: 'Strawberry, cream, etc...'
}

const exampleShop = {
  name: 'Starbucks',
  location: 'Ponce De Leon Ave.',
  drinks: [exampleDrink, ...],
  cart: [exampleDrink, ...],
  pastOrder: []
}
```

### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.


Team:
- name
- sport
- stats
- players

Player:
- name
- stats
```
const Player = {
  name: String,
  stats: Stats
}

const Team = {
  name: String,
  sport: String,
  stats: Stats,
  players: [Player]
}

const examplePlayer = {
  name: 'John Doe'.
  stats: Stats
}

const exampleTeam = {
  name: 'Tractors',
  sport: 'Football',
  stats: Stats,
  players: [examplePlayer, ...]
}
```


### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

A.
- How will this data be used?
- What information is necessary and needs to be accessible directly?


### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add your Github link to Schoology along with your name and you comfort level with the homework.
