export interface CardType {
  text: string;
  imgSrc: string;
}

export interface CardsType {
  [key: string]: CardType;
}

export const hobbies: CardsType = {
  music: {
    text: `I LOVE music - especially rock music. Top artists would be Queens of
            the Stone Age, DOWN, The Smashing Pumpkins, Led Zeppelin and Black
            Sabbath.`,
    imgSrc: '/imgs/music.jpg',
  },
  painting: {
    text: ` While I'm not a great artist, I still love painting my silly landscapes. I'm proud of them and that will show in a future project I'm working on ;)`,
    imgSrc: '/imgs/painting.jpg',
  },
  hiking: {
    text: `In my opinion, the best place a person can be is outside the city. Mountains, beaches, woods - all of them are where a person ought to be.`,
    imgSrc: '/imgs/pirin.jpeg',
  },
  gaming: {
    text: `I love boardgames, TCGs (Trading Card Games) and video games. My favorites are Resident Evil, Singularity, Cyberpunk 2077, Magic: The Gathering and Warhammer 40,000.`,
    imgSrc: '/imgs/gaming.jpg',
  },
};
