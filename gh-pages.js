import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/tonyflow90/wmp-project-3d-website.git',
        user: {
            name: 'Keno Bohlen', // update to use your name
            email: 'tonyflow90@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);