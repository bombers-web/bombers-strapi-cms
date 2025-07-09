# St. Louis Bombers Rugby Club

This is the design document to create user profiles for club members.

# Requirements

1. Club members can log in and edit their own player profiles
2. Admins can edit anyone’s profile
3. Unauthorized users cannot access or edit any player profiles

# Architecture

1. Link Players to Users
   We already have a player content type. Extend it to include a relation to Strapi’s built-in User model:

// player/content-types/player/schema.json
"attributes": {
...
"user": {
"type": "relation",
"relation": "oneToOne",
"target": "plugin::users-permissions.user",
"private": false
}
}
This lets us associate a player profile with a specific user account.

2. Set Up Roles
   Strapi has a default authenticated role. We can add a custom role like admin-editor or just use authenticated + admin. My recommendation is to use authenticated + admin.

Player (authenticated) Can only update their own player profile
Admin Can update any player profile

3. Custom Controller Logic for Access Control
   Update the player controller to restrict who can update what:

example:
// src/api/player/controllers/player.js

const { sanitize } = require('@strapi/utils');

module.exports = {
async update(ctx) {
const { id } = ctx.params;
const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized("You must be logged in to update a profile.");
    }

    // Get the player with related user
    const player = await strapi.entityService.findOne('api::player.player', id, {
      populate: ['user'],
    });

    if (!player) {
      return ctx.notFound("Player not found.");
    }

    // Check if this is the player's own profile or user is admin
    const isOwner = player.user?.id === user.id;
    const isAdmin = user.role?.name === 'admin';

    if (!isOwner && !isAdmin) {
      return ctx.unauthorized("You can only update your own profile.");
    }

    // Proceed with the update
    const updatedPlayer = await strapi.entityService.update('api::player.player', id, {
      data: ctx.request.body,
    });

    return sanitize.contentAPI.output(updatedPlayer, ctx);

},
};

4. Frontend Logic
   When a user logs in, fetch their user ID and related player ID.

Use that to call an authenticated PUT /api/players/:id request.

Admins can see a dashboard of all player profiles and edit any.

What We Need to Do

Add user relation to the player content type

Link each player to the correct user on registration

Use custom logic in the update controller to restrict edit rights

Add permissions in Strapi for authenticated users to update players

Add a frontend form to update the profile

# References

https://docs.strapi.io/cms/features/users-permissions
https://docs.strapi.io/cms/features/users-permissions#endpoints
https://docs.strapi.io/cms/features/users-permissions#roles-and-permissions
https://docs.strapi.io/cms/backend-customization/controllers
