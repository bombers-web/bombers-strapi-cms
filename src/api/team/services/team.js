'use strict';

/**
 * team service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::team.team', {
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    }
});