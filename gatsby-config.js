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
      path: "/get-credential/index.md",
    },
    pages: [
      {
        title: "Adobe Express Embed SDK",
        path: "https://developer.adobe.com/express/embed-sdk",
      },
      {
        title: "Guides",
        path: "/guides/index.md",
      },
      {
        title: "SDK References",
        menu: [
          {
            title: "v4 Reference",
            description: "🟢 Current version",
            path: "/v4/index.md",
          },
          // {
          //   title: "v4 Reference",
          //   description: "🟠 Legacy docs",
          //   path: "/reference/",
          // },
          {
            title: "v3 Reference",
            description: "🟠 Deprecated soon",
            path: "/v3/reference/index.md",
          },
          {
            title: "v2 Reference",
            description: "🔴 Deprecated",
            path: "/v2/reference/index.md",
          },
          {
            title: "v1 Reference",
            description: "🔴 Deprecated",
            path: "/v1/reference/index.md",
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
          title: "Overview",
          path: "/guides/index.md",
      },
      {
        title: "Getting Started",
        path: "/guides/quickstart/index.md",
        pages: [
          {
            title: "Quickstart",
            path: "/guides/quickstart/index.md",
          },
        ],
      },
      {
        title: "Tools",
        path: "/guides/full-editor/index.md",
        pages: [
          {
            title: "Full editor",
            path: "/guides/full-editor/index.md",
            pages: [
              {
                title: "Create new project",
                path: "/guides/full-editor/create-project/index.md",
              },
              {
                title: "Edit existing project",
                path: "/guides/full-editor/edit-project/index.md",
              },
            ],
          },
          {
            title: "Modules",
            path: "/guides/modules/index.md",
          },
          {
            title: "Quick actions",
            path: "/guides/quick-actions/index.md",
          },
        ],
      },
      {
        title: "Concepts",
        path: "/guides/concepts/migration-v3-v4.md",
        pages: [
          {
            title: "V3 to V4 Migration guide",
            path: "/guides/concepts/migration-v3-v4.md",
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
        path: "/guides/tutorials/index.md",
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
        path: "/guides/review/index.md",
      },
      {
        title: "Changelog",
        path: "/guides/changelog/index.md",
      },
      {
        title: "Troubleshooting",
        path: "/guides/troubleshooting/faq/index.md",
        pages: [
          {
            title: "FAQ",
            path: "/guides/troubleshooting/faq/index.md",
          },
        ],
      },
      // {
      //   title: 'Community forum',
      //   path: 'https://community.adobe.com/t5/adobe-express-embed-sdk/ct-p/ct-express-embed-sdk?page=1&sort=latest_replies&lang=all&tabid=all',
      // },
      {
        title: "v1 Reference",
        path: "/v1/reference/index.md",
        header: true,
        pages: [
          {
            title: "Initialize SDK",
            path: "/v1/reference/index.md",
          },
          {
            title: "Full editor",
            path: "/v1/reference/full-editor/index.md",
          },
          {
            title: "Quick actions",
            path: "/v1/reference/quick-actions/index.md",
          },
          {
            title: "Shared types",
            path: "/v1/reference/shared-types/index.md",
          },
        ],
      },
      {
        title: "v2 Reference",
        path: "/v2/reference/index.md",
        header: true,
        pages: [
          {
            title: "Initialize SDK",
            path: "/v2/reference/index.md",
          },
          {
            title: "Full editor",
            path: "/v2/reference/full-editor/index.md",
          },
          {
            title: "Quick actions",
            path: "/v2/reference/quick-actions/index.md",
          },
          {
            title: "Shared types",
            path: "/v2/reference/shared-types/index.md",
          },
        ],
      },
      {
        title: "Overview",
        path: "/v3/reference/index.md",
      },
      {
        title: "Initialize SDK",
        path: "/v3/reference/initialize/index.md",
      },
      {
        title: "v3 Reference",
        path: "/v3/reference/CCEverywhere/index.md",
        pages: [
          {
            title: "createDesign",
            path: "/v3/reference/CCEverywhere/create-design/index.md",
          },
          {
            title: "editDesign",
            path: "/v3/reference/CCEverywhere/edit-design/index.md",
          },
          {
            title: "openQuickAction",
            path: "/v3/reference/CCEverywhere/quick-actions/index.md",
          },
          {
            title: "close",
            path: "/v3/reference/CCEverywhere/close/index.md",
          },
          {
            title: "terminate",
            path: "/v3/reference/CCEverywhere/terminate/index.md",
          },
        ],
      },
      {
        title: "Types",
        path: "/v3/reference/types/index.md",
      },
      {
        title: "Overview",
        path: "/reference/index.md",
      },
      {
        title: "initialize",
        path: "/reference/initialize/index.md",
      },
      {
        title: "CCEverywhere",
        path: "/reference/CCEverywhere/index.md",
        expanded: "true",
        pages: [
          {
            title: "editor",
            path: "/reference/CCEverywhere/editor/index.md",
          },
          {
            title: "quickAction",
            path: "/reference/CCEverywhere/quickAction/index.md",
          },
          {
            title: "module",
            path: "/reference/CCEverywhere/miniEditor/index.md",
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
        path: "/reference/types/index.md",
      },
      {
        title: "Overview",
        path: "/v4/index.md",
      },
      {
        title: "Entrypoints",
        path: "/v4/index.md",
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
