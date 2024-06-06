'use strict';

/**
 * article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::article.article', {
    only: ['find'],
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    }
});