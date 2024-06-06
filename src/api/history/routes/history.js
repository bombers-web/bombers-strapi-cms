'use strict';

/**
 * history router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::history.history', {
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    }
});