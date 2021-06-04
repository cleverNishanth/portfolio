import tea__station from './images/projects/teastation.png'
import image__galary from './images/projects/imagegalary.png'
import disney from './images/projects/disney.png'
import github from './images/projects/github.png'
import portfolio from './images/projects/portfolio.png'

const projectData = [
  {
    id: 0,
    title: 'Tea Station',
    description: `Tea station is a simple html and css project. This app was created using HTML5 and  CSS3, and deployed on Netlify. 
    And this app doesnt have any special funcnality. It's just a simple project.`,
    technologies: 'HTML5, CSS3, GitHub, Netlify',
    image: tea__station,
    date_created: 'May 2021',
    link: 'https://clevernishanth-html-css-teastation.netlify.app/',
  },
  {
    id: 1,
    title: 'Image Galary',
    description: `Image Galary is a simple React project. This app uses a pixabay.com api, and deployed on Netlify. 
    It's really cool app. Please click the image to checkout this app.`,
    technologies:
      'HTML5, CSS3, GitHub, Netlify, JavaScript, React, TailwindCss',
    image: image__galary,
    date_created: 'June 2021',
    link: 'https://clevernishanth-react-image-galary.netlify.app/',
  },
  {
    id: 2,
    title: 'Disney Clone',
    description: `Disney Clone is a clone of Disney Plus using React JS, It's a two page application. Please click the image to visit the page.`,
    technologies: 'HTML5, CSS3, GitHub, Netlify, JavaScript, React',
    image: disney,
    date_created: 'May 2021',
    link: 'https://clevernishanth-react-disney-clone.netlify.app/',
  },
  {
    id: 3,
    title: 'Github Search',
    description: `It's a github users search app, it's really a big app. It's have a authendication also. If you don't want to use your own details means just use this mail and password(test@gmail.com, @test123). This apps uses a auth0 for authendication purpose`,
    technologies: 'HTML5, CSS3, GitHub, Netlify, JavaScript, React, Auth0',
    image: github,
    date_created: 'June 2021',
    link: 'http://clevernishanth-react-github-search.netlify.app/',
  },
  {
    id: 5,
    title: 'Portfolio',
    description: `This app based on a arcade game. It's not a game, it's just a simple portfolio. This app contain all my projects with links. This app created using React JS`,
    technologies:
      'HTML5, CSS3, GitHub, Netlify, JavaScript, React, TailwindCss',
    image: portfolio,
    date_created: 'June 2021',
    link: 'https://clevernishanth-react-portfolio.netlify.app/',
  },
]

export default projectData
