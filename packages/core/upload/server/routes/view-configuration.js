'use strict';

const { ACTIONS } = require('../constants');

module.exports = {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/configuration',
      handler: 'view-configuration.findViewConfiguration',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'PUT',
      path: '/configuration',
      handler: 'view-configuration.updateViewConfiguration',
      config: {
        policies: [
          'admin::isAuthenticatedAdmin',
          {
            name: 'admin::hasPermissions',
            config: {
              actions: [ACTIONS.configureView],
            },
          },
        ],
      },
    },
  ],
};
