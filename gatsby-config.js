/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    pages: [
      {
        title: 'Adobe Express Embed SDK',
        path: 'https://developer.adobe.com/express/embed-sdk',
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'SDK References',
        menu: [{
          title: 'Reference',
          description: 'v3 Reference',
          path: '/reference/'
        }, {
         title: 'v2 Reference [Deprecated soon]',
         description: 'v2 Reference',
         path: '/v2/reference/'
       }, {
        title: 'v1 Reference [Deprecated soon]',
        description: 'v1 Reference',
        path: '/v1/reference/'
      }],
      },
    ],
    subPages: [
      {
        title: 'Overview',
        path: '/guides/',
      },
      {
        title: 'Quickstart',
        path: '/guides/quickstart/',
      },
      {
        title: 'Full editor',
        path: '/guides/full_editor/',
        pages: [
          {
            title: 'Create new project',
            path: '/guides/full_editor/create_project/'
          },
          {
            title: 'Edit existing project',
            path: '/guides/full_editor/edit_project/'
          }, 
          {
            title: 'Customization',
            path: '/guides/full_editor/customization/'
          }
        ]
      },
      {
        title: 'Quick actions',
        path: '/guides/quick_actions/',
        pages: [
          {
            title: 'Image quick actions',
            path: '/guides/quick_actions/image/'
          },
          {
            title: 'Video quick actions',
            path: '/guides/quick_actions/video/'
          }
        ]
      },
      {
        title: 'Submission and Review',
        path: '/guides/review/'
      },
      {
        title: 'Changelog',
        path: '/guides/changelog/'
      },
      {
        title: 'Support and FAQ',
        path: '/guides/support/'
      },
      {
        title: 'v1 Reference',
        path: '/v1/reference/',
        header: true,
        pages: [
          {
            title: 'Initialize SDK', 
            path: '/v1/reference/', 
          },
          {
            title: 'Full editor', 
            path: '/v1/reference/full_editor/'
          },
          {
            title: 'Quick actions', 
            path: '/v1/reference/quick_actions/'
          },
          {
            title: 'Shared types', 
            path: '/v1/reference/shared_types/'
          }
        ]
      },
      {
        title: 'v2 Reference',
        path: '/v2/reference/',
        header: true,
        pages: [
          {
            title: 'Initialize SDK', 
            path: '/v2/reference/', 
          },
          {
            title: 'Full editor', 
            path: '/v2/reference/full_editor/'
          },
          {
            title: 'Quick actions', 
            path: '/v2/reference/quick_actions/'
          },
          {
            title: 'Shared types', 
            path: '/v2/reference/shared_types/'
          }
        ]
      },
      {
        title: 'Overview',
        path:'/reference/',
      },
      {
        title: 'Initialize SDK',
        path:'/reference/initialize/',
      },
      {
        title: 'CCEverywhere',
        path: '/reference/CCEverywhere/',
        pages: [
          {
            title: 'openQuickAction',
            path: '/reference/CCEverywhere/quick_actions/',
          }, 
          {
            title: 'createDesign', 
            path: '/reference/CCEverywhere/full_editor/create_design/'
          },
          {
            title: 'editDesign', 
            path: '/reference/CCEverywhere/full_editor/create_design/'
          }
        ]
      },
      {
        title: 'Shared types', 
        path: '/reference/shared_types/'
      },
      {
        title: 'Full editor', 
        path: '/reference/full_editor/'
      },
      {
        title: 'Quick actions', 
        path: '/reference/quick_actions/'
      },
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/express/embed-sdk/docs/'
};
