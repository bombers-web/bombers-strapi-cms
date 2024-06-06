'use strict';

/**
 * player service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::player.player', {
    only: ['find'],
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    }
});