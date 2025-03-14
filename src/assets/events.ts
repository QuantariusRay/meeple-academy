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
    eventDate: 'July 11-13, 2025',
    eventTime: '9:00 AM - 12:00 PM',
    eventImage: '/events/adventure-con.png',
    altDesc: 'AdventureCon by Meeple Academy',
    eventDescription: 'Our yearly capstone event.',
    about: 'The Best Weekend of Gaming in Northwest Arkansas',
    venueName: 'Four Points by Sheraton',
    venueSite: 'www.adventure-con.com',
    venueAddress: '211 SE Walton Blvd, Bentonville, AR 72712'
  },
  {
    eventId: 3,
    eventName: 'Games on a Train',
    eventDate: 'April 27th, 2025',
    eventTime: '7:30 AM - 5:30 PM',
    eventImage: '/events/train.png',
    altDesc: 'Games on a Train by Meeple Academy',
    eventDescription: 'Join us for a day of train themed games while riding on a train from Springdale to Van Buren. The train ride is a day-long, 134 mile round trip through the Boston Mountains, trestles, and tunnel',
    about: 'Join us for a day of gaming on a train ride through the Ozarks.',
    venueName: 'A&M Railroad',
    venueSite: 'https://amtrainrides.com/',
    venueAddress: '305 E Emma ave Springdale, AR 72764'
  }
];
