/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const isBrowser = typeof window !== "undefined";

export const onClientEntry = () => {
  // set adobe analytics window object
  if (isBrowser) {
    window._satellite = window._satellite || {};
    window.alloy_all = window.alloy_all || {};
    window.alloy_all.data = window.alloy_all.data || {};
    window.alloy_all.data._adobe_corpnew =
      window.alloy_all.data._adobe_corpnew || {};
    window.alloy_all.data._adobe_corpnew =
      window.alloy_all.data._adobe_corpnew || {};
    window.alloy_all.data._adobe_corpnew.web =
      window.alloy_all.data._adobe_corpnew.web || {};
    window.alloy_all.data._adobe_corpnew.web.webPageDetails =
      window.alloy_all.data._adobe_corpnew.web.webPageDetails || {};
  }
};

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (isBrowser) {
    // Example use from add-ons
    // if (window.location.pathname.indexOf("guides") >= 0) {
    //   // find the link within the .developers-live-announcement and attach the link text as the daa-ll
    //   document
    //     .querySelectorAll(".developers-live-announcement a")
    //     .forEach((link) => {
    //       link.setAttribute(
    //         "daa-ll",
    //         `developers-live-announcement | ${link.textContent}`
    //       );
    //     });
    // }

    function watchAndFireAnalytics() {
      // eslint-disable-next-line no-undef
      if (
        typeof window._satellite !== "undefined" &&
        typeof window._satellite.track === "function"
      ) {
        // eslint-disable-next-line no-undef
        _satellite.track("state", {
          xdm: {},
          data: {
            _adobe_corpnew: {
              web: {
                webPageDetails: {
                  customPageName: location.href,
                },
              },
            },
          },
        });

        clearInterval(intervalId);
      }
    }

    // watch if analytics is online then track page
    const intervalId = setInterval(watchAndFireAnalytics, 1000);
  }
};
