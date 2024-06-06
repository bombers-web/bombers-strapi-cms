'use strict';

/**
 * coach router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::coach.coach', {
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    }
});