import pythonQuest from '../assets/pythonQuest.png';
import voluntier from '../assets/voluntier.png';
import treasure from '../assets/treasure-hunt.png';

export const projects = [
    {
        title: 'VolunTier',
        description:
            'A platform built to connect local nonprofits with potential volunteers passionate about their causes.',
        stack: [
            'Google Firestore',
            'Google Maps',
            'Recharts',
            'React',
            'Cypress',
            'Sentry',
        ],
        liveSite: 'https://volunteer-platform.netlify.com/',
        repo: 'https://github.com/Lambda-School-Labs/volunteer-platform-fe',
        image: voluntier,
    },
    {
        title: 'Python Quest',
        description:
            'A multi-user dungeon game allowing users to interact and communicate while escaping.',
        stack: ['PusherJS', 'Django', 'React', 'Styled-Components'],
        liveSite: 'https://python-quest.netlify.com/',
        repo: 'https://github.com/muddy-pythonistas',
        image: pythonQuest,
    },
    {
        title: 'React Treasure Hunt',
        description:
            'A comprehensive client built to traverse the mazes, collect treasures, and mine Lambda coins provided by the Lambda treasure hunt.',
        stack: ['Graphs', 'Breadth First Search', 'Algorithms', 'React'],
        liveSite: '',
        repo: 'https://github.com/ehickey08/react-treasure-hunt',
        image: treasure,
    },
    {
        title: 'Potluck Planner',
        description:
            'A web application built to allow users to efficiently plan and organize potluck meals with friends and family.',
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
        image: '',
    },
    {
        title: 'Child Nutrition Tracker',
        description:
            'A project built to track and screen children in regions of high child malnutrition. ',
        stack: [
            'React',
            'Redux',
            'amCharts',
            'Ant Design',
            ' Moment',
            'Styled-Components',
        ],
        liveSite: 'https://icn-tracking.netlify.com/',
        repo: 'https://github.com/intlChildNutrition/intlChildNutrition-FE',
        image: '',
    },
    {
        title: 'Budget Builder',
        description:
            'A platform built with input from freefrom.org in order to raise empathy for those wanting to escape domestic violence. ',
        stack: ['Express', 'Knex', 'Jest', 'Bcrypt', 'JWT', 'PostgreSQL'],
        liveSite: 'https://dv-empathy.herokuapp.com/',
        repo: 'https://github.com/DV-Empathy-Builder/back-end',
        image: '',
    },
    {
        title: 'Credit Card Form',
        description:
            'An interactive credit card form with number formatting, validation, and card-type detection. ',
        stack: ['React', 'Styled-Components'],
        liveSite: '',
        repo: 'https://github.com/ehickey08/credit-card-form',
        image: '',
    },
];

