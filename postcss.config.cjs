const mode = process.env.NODE_ENV;
const cssnano = require('cssnano');
const dev = mode === 'development';


const config = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
  },
};

if(!dev){
  config.plugins.cssnano = {
    preset: "default",
  };
}

module.exports = config;
