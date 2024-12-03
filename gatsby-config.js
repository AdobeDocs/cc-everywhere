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
    template_id: process.env.GATSBY_TEMPLATE_ID,
    product_name: process.env.GATSBY_PRODUCT_NAME,
    docs: {
      title: "Get credentials",
      path: "/get-credential/",
    },
    pages: [
      {
        title: "Adobe Express Embed SDK",
        path: "https://developer.adobe.com/express/embed-sdk",
      },
      {
        title: "Guides",
        path: "/guides/",
      },
      {
        title: "SDK References",
        menu: [
          {
            title: "v4 Reference",
            description: "🟢 Current version",
            path: "/v4/",
          },
          // {
          //   title: "v4 Reference",
          //   description: "🟠 Legacy docs",
          //   path: "/reference/",
          // },
          {
            title: "v3 Reference",
            description: "🟠 Deprecated soon",
            path: "/v3/reference/",
          },
          {
            title: "v2 Reference",
            description: "🔴 Deprecated",
            path: "/v2/reference/",
          },
          {
            title: "v1 Reference",
            description: "🔴 Deprecated",
            path: "/v1/reference/",
          },
        ],
      },
      {
        title: "Community",
        path: "https://developer.adobe.com/express/community",
      },
    ],
    subPages: [
      {
        title: "Getting Started",
        path: "/guides/",
        pages: [
          {
            title: "Overview",
            path: "/guides/",
          },
          {
            title: "Quickstart",
            path: "/guides/quickstart/",
          },
        ],
      },
      {
        title: "Tools",
        path: "/guides/full_editor/",
        pages: [
          {
            title: "Full editor",
            path: "/guides/full_editor/",
            pages: [
              {
                title: "Create new project",
                path: "/guides/full_editor/create_project/",
              },
              {
                title: "Edit existing project",
                path: "/guides/full_editor/edit_project/",
              },
            ],
          },
          {
            title: "Modules",
            path: "/guides/modules/",
          },
          {
            title: "Quick actions",
            path: "/guides/quick_actions/",
          },
        ],
      },
      {
        title: "Concepts",
        path: "/guides/concepts/migration_v3_v4.md",
        pages: [
          {
            title: "V3 to V4 Migration guide",
            path: "/guides/concepts/migration_v3_v4.md",
          },
          // {
          //   title: "UI Customization",
          //   path: "/guides/concepts/customization.md",
          // },
         {
         title: "Error Handling",
          path: "/guides/concepts/error-handling.md",
          },
        ],
      },
      {
        title: "Tutorials",
        path: "/guides/tutorials/",
        pages: [
          {
            title: "Embed SDK integration tutorial",
            path: "/guides/tutorials/getting-started.md",
          },
          {
            title: "Full Editor tutorial",
            path: "/guides/tutorials/full-editor.md",
          },
        ],
      },
      {
        title: "Submission and review",
        path: "/guides/review/",
      },
      {
        title: "Changelog",
        path: "/guides/changelog/",
      },
      {
        title: "Troubleshooting",
        path: "/guides/troubleshooting/faq.md",
        pages: [
          {
            title: "FAQ",
            path: "/guides/troubleshooting/faq.md",
          },
        ],
      },
      // {
      //   title: 'Community forum',
      //   path: 'https://community.adobe.com/t5/adobe-express-embed-sdk/ct-p/ct-express-embed-sdk?page=1&sort=latest_replies&lang=all&tabid=all',
      // },
      {
        title: "v1 Reference",
        path: "/v1/reference/",
        header: true,
        pages: [
          {
            title: "Initialize SDK",
            path: "/v1/reference/",
          },
          {
            title: "Full editor",
            path: "/v1/reference/full_editor/",
          },
          {
            title: "Quick actions",
            path: "/v1/reference/quick_actions/",
          },
          {
            title: "Shared types",
            path: "/v1/reference/shared_types/",
          },
        ],
      },
      {
        title: "v2 Reference",
        path: "/v2/reference/",
        header: true,
        pages: [
          {
            title: "Initialize SDK",
            path: "/v2/reference/",
          },
          {
            title: "Full editor",
            path: "/v2/reference/full_editor/",
          },
          {
            title: "Quick actions",
            path: "/v2/reference/quick_actions/",
          },
          {
            title: "Shared types",
            path: "/v2/reference/shared_types/",
          },
        ],
      },
      {
        title: "Overview",
        path: "/v3/reference/index.md",
      },
      {
        title: "Initialize SDK",
        path: "/v3/reference/initialize/",
      },
      {
        title: "v3 Reference",
        path: "/v3/reference/CCEverywhere/",
        pages: [
          {
            title: "createDesign",
            path: "/v3/reference/CCEverywhere/create_design/",
          },
          {
            title: "editDesign",
            path: "/v3/reference/CCEverywhere/edit_design/",
          },
          {
            title: "openQuickAction",
            path: "/v3/reference/CCEverywhere/quick_actions/",
          },
          {
            title: "close",
            path: "/v3/reference/CCEverywhere/close/",
          },
          {
            title: "terminate",
            path: "/v3/reference/CCEverywhere/terminate/",
          },
        ],
      },
      {
        title: "Types",
        path: "/v3/reference/types/",
      },
      {
        title: "Overview",
        path: "/reference/",
      },
      {
        title: "initialize",
        path: "/reference/initialize/",
      },
      {
        title: "CCEverywhere",
        path: "/reference/CCEverywhere/",
        expanded: "true",
        pages: [
          {
            title: "editor",
            path: "/reference/CCEverywhere/editor/",
          },
          {
            title: "quickAction",
            path: "/reference/CCEverywhere/quickAction/",
          },
          {
            title: "module",
            path: "/reference/CCEverywhere/miniEditor/",
          },
          // {
          //   title: 'close',
          //   path: '/reference/CCEverywhere/close/',
          // },
          // {
          //   title: 'terminate',
          //   path: '/reference/CCEverywhere/terminate/',
          // },
        ],
      },
      {
        title: "Types",
        path: "/reference/types/",
      },
      {
        title: "Overview",
        path: "/v4/index.md",
      },
      {
        title: "Entrypoints",
        path: "/v4/",
        header: true,
        pages: [
          {
            title: "CC Everywhere",
            path: "/v4/sdk/src/3p/CCEverywhere/classes/CCEverywhere.md",
          },
          {
            title: "Editor",
            path: "/v4/sdk/src/workflows/3p/EditorWorkflow/classes/EditorWorkflow.md",
          },
          {
            title: "Module",
            path: "/v4/sdk/src/workflows/3p/ModuleWorkflow/classes/ModuleWorkflow.md",
          },
          {
            title: "Quick Action",
            path: "/v4/sdk/src/workflows/3p/QuickActionWorkflow/classes/QuickActionWorkflow.md",
          },
        ],
      },
      {
        title: "APIs Reference",
        path: "/v4/",
        header: true,
        pages: [...require("./api-refs-sidebar.json")],
      },
    ],
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    FAST_DEV: true,
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || "/express/embed-sdk/docs/",
};
