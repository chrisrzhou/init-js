import { readFile } from './file.js';

export { validateConfig };

const validateConfig = () => {
  try {
    const config = JSON.parse(readFile('config.json'));
    return config;
  } catch (error) {
    console.log(error);
    return null;
  }
};
