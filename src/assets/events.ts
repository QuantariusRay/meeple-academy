export interface GameEvent {
  eventId: number;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventImage: string;
  altDesc: string;
  eventDescription: string;
  venueName: string;
  venueAddress: string;
  venueSite: string;
  about: string;
}

export const events: GameEvent[] = [
  {
    eventId: 1,
    eventName: 'Board Game Night at the Botanical',
    eventDate: 'Every Monday',
    eventTime: '6:00 PM - 11:00 PM',
    eventImage: '/events/botanical.jpeg',
    altDesc: 'Botanical Game Nights on Mondays',
    eventDescription: 'Come enjoy a chill night of boardgames at one of the best atmospheres in Bentonville.',
    about: 'Join us for an evening of fun, wine, and premium draft beers at a great location in Downtown Bentonville. This weekly event is a great opportunity to connect with like-minded individuals in your community and build meaningful relationships in a relaxed and welcoming environment.',
    venueName: 'The Botanical',
    venueSite: 'https://www.botanicalnwa.com/',
    venueAddress: '713 SW A St, Bentonville, AR 72712'
  },
  {
    eventId: 2,
    eventName: 'Board Games at Fay Beerworks',
    eventDate: 'Every Tuesday',
    eventTime: '6:00 PM - 9:00 PM',
    eventImage: '/events/fay.jpeg',
    altDesc: 'Fayetteville Beerworks Game Night',
    eventDescription: 'Come enjoy a drink and play a game',
    about: '',
    venueName: 'Fayetteville Beerworks',
    venueSite: 'https://www.fayettevillebeerworks.com/',
    venueAddress: '2649 E Mission Blvd #1, Fayetteville, AR 72703'
  },
  {
    eventId: 3,
    eventName: 'AdventureCon',
    eventDate: 'May 24 - May 26',
    eventTime: '9:00 AM - 11:00 PM',
    eventImage: '/events/adventure-con.png',
    altDesc: 'AdventureCon by Meeple Academy',
    eventDescription: 'Come enjoy a drink and play a game',
    about: 'The Best Weekend of Gaming in Northwest Arkansas',
    venueName: 'Four Points by Sheraton',
    venueSite: 'www.adventure-con.com',
    venueAddress: '211 SE Walton Blvd, Bentonville, AR 72712'
  }
];
