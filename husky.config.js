// const runInstall = "npm install"

module.exports = {
  hooks: {
    // "post-checkout": `if [[ $HUSKY_GIT_PARAMS =~ 1$ ]]; then ${runInstall}; fi`,
    // "post-merge": runInstall,
    // "post-rebase": runInstall,
    "pre-commit": "lint-staged",
  },
};
