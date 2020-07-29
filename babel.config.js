module.exports = (api) => {
    api.cache(true);

    return {
        presets: ['@babel/env'],
        ignore: [function(filepath) {
            if (filepath.includes('my-npm-pkg')) {
                return false;
            }

            return filepath.includes('node_modules');
        }]
    };
};
