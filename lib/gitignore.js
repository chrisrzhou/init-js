export {createGitignoreFile};

const GITIGNORE = `.DS_Store
*.d.ts
*.log
coverage/
dist/
node_modules/
package-lock.json
`;

const createGitignoreFile = () => {
  return GITIGNORE;
};
