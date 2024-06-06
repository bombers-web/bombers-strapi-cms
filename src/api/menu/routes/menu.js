'use strict';

/**
 * menu router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::menu.menu', {
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    }
});