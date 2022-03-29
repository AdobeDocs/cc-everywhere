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
        title: 'CC Everywhere SDK',
        path: '/'
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'References',
        path: '/reference/'
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Quickstart Guide',
        path: '/guides/',
        pages: [
          {
            title: 'Local Development',
            path: '/guides/local/'
          },
        ]
      },
      {
        title: 'CCX Editor Component',
        path: '/guides/ccx_editor/',
        pages: [
          {
            title: 'Creating New Project',
            path: '/guides/ccx_editor/create_project/'
          },
          {
            title: 'Editing Existing Project',
            path: '/guides/ccx_editor/edit_project/'
          }, 
          {
            title: 'Customization',
            path: '/guides/ccx_editor/customization/'
          }
        ]
      },
      {
        title: 'Quick Actions Component',
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
        title: 'Support',
        path: '/support/',
        header: true,
        pages: [
          {
            title: 'Help',
            path: '/support/'
          },
          {
            title: 'FAQ',
            path: '/support/FAQ/'
          },
          {
            title: 'How to contribute',
            path: '/support/contribute/'
          }
        ]
      },
      {
        title: 'Community',
        path: '/support/community/',
        header: true,
        pages: [
          {
            title: 'Information',
            path: '/support/community/'
          }
        ]
      },
      {
        title: 'Components',
        path: '/reference',
        header: true,
        pages: [
          // {
          //   title: 'Authorization', 
          //   path: '/reference/authorization/'
          // },
          {
            title: 'Initialize SDK', 
            path: '/reference/'
          },
          {
            title: 'CCX Editor', 
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
  pathPrefix: process.env.PATH_PREFIX || '/cc-everywhere/'
};
