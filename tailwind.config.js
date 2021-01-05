module.exports = {
    purge: [
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
        'public/**/*.html',
    ],
    theme: {
        extend: {
            colors: {
                teal: "#2E9BA6",
                teal2: "#038695",
                lightgray: "#d1cac3",
                shineblack: "#242442",
                ashblack: "#5a675e",
                dullteal: "#7ad8e0",
                myOrange: "#F89259",
                hoverOrange: "#f89234",
                bodyColor: "#2FC6E3"
            },
            backgroundImage: theme => ({
                'travel': "url('.\pexels-vincent-rivaud-2265876.jpg')"
            })
        },
    },
    variants: {},
    plugins: [],
};