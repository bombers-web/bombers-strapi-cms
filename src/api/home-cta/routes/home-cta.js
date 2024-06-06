'use strict';

/**
 * home-cta router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-cta.home-cta', {
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    }
});