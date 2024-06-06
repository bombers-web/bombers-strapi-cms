'use strict';

/**
 * game router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::game.game', {
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    }
});