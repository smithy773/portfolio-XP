export interface ProjectProps {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
  github: string;
}

interface Projects {
  [key: string]: ProjectProps;
}

export const projects: Projects = {
  hangman: {
    title: 'Hangman',
    description: 'The classic Hangman game, but made online.',
    imgSrc: '/imgs/hangman.PNG',
    link: 'https://hangman-ts.web.app',
    github: 'https://github.com/smithy773/hangman-game-TS-React',
  },
  viaoutd: {
    title: 'VIAOutdoors',
    description: `A forum for sharing your outdoor experiences.`,
    imgSrc: '/imgs/viaoutd.png',
    link: 'https://via-outdoors-d6d97.web.app',
    github: 'https://github.com/GIPHY-Web-Team-Project/VIA-Outdoor-Forum',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Frontend Mentor - Newsletter Sign Up exercise',
    imgSrc: '/imgs/newsletter.png',
    link: 'https://smithy773.github.io/newsletter-sign-up-with-success-message-main/',
    github:
      'https://github.com/smithy773/newsletter-sign-up-with-success-message-main',
  },
  github: {
    title: 'My GitHub profile',
    description: 'Follow my GitHub profile for more!',
    imgSrc: '/imgs/github.PNG',
    link: 'https://github.com/smithy773',
    github: '',
  },
};
