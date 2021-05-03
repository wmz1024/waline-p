const Application = require('@waline/vercel');

module.exports = Application({
  async postSave(comment) {
    disallowIPList: ['8.8.8.8'],
  },
});
