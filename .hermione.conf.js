module.exports = {
    plugins: {
        'html-reporter/hermione': {
            enabled: true,
            path: '../../hermione/hermione-reports',
            defaultView: 'all',
            baseHost: 'localhost:8000',
            errorPatterns: [
                'Parameter .* must be a string',
                {
                    name: 'Cannot read property of undefined',
                    pattern: 'Cannot read property .* of undefined'
                }
            ]
        }
    },
    baseUrl: 'http://dev.mirkrestikom.ru/',
    sets: {
        desktop: {
            files: '../../hermione/test/'
        }
    },
    browsers: {
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },
    screenshotsDir: "../../hermione/screens/",
    compositeImage: true,
};