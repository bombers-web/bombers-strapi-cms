'use strict';

/**
 * menu-item router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::menu-item.menu-item', {
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    }
});