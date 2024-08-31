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
    eventId: 2,
    eventName: 'AdventureCon',
    eventDate: 'Coming Soon!',
    eventTime: '9:00 AM - 12:00 PM',
    eventImage: '/events/adventure-con.png',
    altDesc: 'AdventureCon by Meeple Academy',
    eventDescription: 'Our yearly capstone event.',
    about: 'The Best Weekend of Gaming in Northwest Arkansas',
    venueName: 'Four Points by Sheraton',
    venueSite: 'www.adventure-con.com',
    venueAddress: '211 SE Walton Blvd, Bentonville, AR 72712'
  }
];
