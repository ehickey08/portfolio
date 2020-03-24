import pythonQuest from '../assets/pythonQuest.png';
import voluntier from '../assets/voluntier.png';
import treasure from '../assets/treasure-hunt.png';
import creditCard from '../assets/creditcard.gif';
import icn from '../assets/map2.png'
import budgetScreenShot from '../assets/budget-shot.PNG'
import potluckPlanner from '../assets/potluck-planner.png'

export const projects = [
    {
        title: 'Python Quest',
        description:
            'A multi-user dungeon game allowing users to interact and communicate while escaping.',
        roles: [
            'Implemented a RESTful API using Django to provide front end client with rooms, items, and locations of other players',
            "Managed global state through React's Context API with actions and reducers",
            "Responsible for creating channels to allow players to communicate and track each other's movements",
        ],
        stack: [
            'PusherJS',
            'Django',
            'RESTful API',
            'React',
            'Styled-Components',
        ],
        liveSite: 'https://python-quest.netlify.com/',
        repo: 'https://github.com/muddy-pythonistas',
        image: pythonQuest,
    },
    {
        title: 'Lambda Treasure Hunt',
        description:
            'A comprehensive client built to traverse the mazes, collect treasures, and mine Lambda coins provided by the Lambda treasure hunt.',
        roles: [
            'Designed breadth first search algorithm for traversing the 500 rooms in the shortest path possible',
            'Created algorithms to allow for automated blockchain mining and traversing of the rooms for gold',
            'Incorporated a CPU class to read and convert binary code into player instructions.',
        ],
        stack: [
            'Graphs',
            'Breadth First Search',
            'Depth First Traversal',
            'Algorithms',
            'Context API',
        ],
        liveSite: '',
        repo: 'https://github.com/ehickey08/react-treasure-hunt',
        image: treasure,
    },
    {
        title: 'VolunTier',
        description:
            'A platform built to connect local nonprofits with potential volunteers passionate about their causes.',

        roles: [
            'Worked with a team of six developers and two UX designers to create a product, implement user research, develop web pages based on high fidelity prototypes, and redesign based on stakeholders requests and user testing',
            'Utilized Google Maps API to allow users to have an easier experience finding events nearby ',
            'Refactored forms to be modular, multi-step forms to improve user experience',
        ],
        stack: [
            'Google Firestore',
            'Google Maps',
            'Recharts',
            'React',
            'Cypress',
            'Sentry',
        ],
        liveSite: 'https://voluntier-platform.netlify.com/',
        repo: 'https://github.com/Lambda-School-Labs/volunteer-platform-fe',
        image: voluntier,
    },
    {
        title: 'Potluck Planner',
        description:
            'A web application built to allow users to efficiently plan and organize potluck meals with friends and family.',
        roles: [
            'Senior Front End Developer responsible for management two junior developers',
            'Used React-Testing-Library to thoroughly test individual components and their logic',
            'Managed local state in classical components as well as global state for functional components using Context and React Hooks',
        ],
        stack: [
            'React',
            'React Hooks',
            'Context API',
            'React-Testing Library',
            'Moment',
            'Axios',
            'Semantic UI',
        ],
        liveSite: 'https://potluckplannerapp.netlify.com/',
        repo: 'https://github.com/ehickey08/potluckPlanner',
        image: potluckPlanner,
    },
    {
        title: 'Child Nutrition Tracker',
        description:
            'A project built to track and screen children in regions of high child malnutrition. ',
        roles: [
            'Incorporated amCharts in order to display an interactive global map for user friendly navigation',
            'Managed global state with Redux along with immutable reducers',
            'Organized sample data with bar charts provided by amCharts as well as using MomentJS for time and date management',
        ],
        stack: [
            'React',
            'Redux',
            'amCharts',
            'Ant Design',
            'Moment',
            'Styled-Components',
        ],
        liveSite: 'https://icn-tracking.netlify.com/',
        repo: 'https://github.com/intlChildNutrition/intlChildNutrition-FE',
        image: icn,
    },
    {
        title: 'Budget Builder',
        description:
            'A platform built with input from freefrom.org in order to raise empathy for those wanting to escape domestic violence. ',
        roles: [
            'Sole Back End Developer responsible for designing database schema, implementing a RESTful API, and working with team of Front End Developers',
            'Properly documented and provided test end points using API Docs',
            'Managed user authentication and authorization with JSON Web Token',
        ],
        stack: ['Express', 'Knex', 'Jest', 'Bcrypt', 'JWT', 'PostgreSQL'],
        liveSite: 'https://dv-empathy.herokuapp.com/',
        repo: 'https://github.com/DV-Empathy-Builder/back-end',
        image: budgetScreenShot,
    },
    {
        title: 'Credit Card Form',
        description:
            'An interactive credit card form with number formatting, validation, and card-type detection. ',
        roles: [
            'Implemented RegEx logic in order to validate credit card information',
            'Used basic CSS along with styled-components to make the form user friendly and interactive',
        ],
        stack: ['React', 'Styled-Components', 'Regular Expressions'],
        liveSite: '',
        repo: 'https://github.com/ehickey08/credit-card-form',
        image: creditCard,
    },
];
