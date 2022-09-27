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
        title: 'Embed SDK',
        path: '/'
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'Reference',
        path: '/reference/'
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Quickstart',
        path: '/guides/',
      },
      {
        title: 'Configure OAuth', 
        path: '/guides/authorization/'
      },
      {
        title: 'Local Development',
        path: '/guides/local/'
      },
      {
        title: 'Embed Express Editor',
        path: '/guides/ccx_editor/',
        pages: [
          {
            title: 'Create New Project',
            path: '/guides/ccx_editor/create_project/'
          },
          {
            title: 'Edit Existing Project',
            path: '/guides/ccx_editor/edit_project/'
          }, 
          {
            title: 'Customization',
            path: '/guides/ccx_editor/customization/'
          }
        ]
      },
      {
        title: 'Embed Quick Actions',
        path: '/guides/quick_actions/',
        pages: [
          {
            title: 'Image Quick Actions',
            path: '/guides/quick_actions/image/'
          },
          {
            title: 'Video Quick Actions',
            path: '/guides/quick_actions/video/'
          }
        ]
      },
      {
        title: 'Changelog',
        path: '/guides/changelog/'
      },
      {
        title: 'Components',
        path: '/reference',
        header: true,
        pages: [
          {
            title: 'Initialize SDK', 
            path: '/reference/', 
          },
          {
            title: 'Express Editor', 
            path: '/reference/ccx_editor/'
          },
          {
            title: 'Shared Types', 
            path: '/reference/shared_types/'
          },
          {
            title: 'Quick Actions', 
            path: '/reference/quick_actions/'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/embed-sdk/docs/'
};
