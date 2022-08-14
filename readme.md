Focus Indicator (focus-indicator)
---

[![Travis](https://img.shields.io/travis/sarbbottam/focus-indicator.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/sarbbottam/focus-indicator)
[![MIT License](https://img.shields.io/npm/l/watch-and-rsync.svg?maxAge=2592000&style=flat-square)](http://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=2592000&style=flat-square)](http://makeapullrequest.com)

Display focus indicator for the active intractable element in a webpage.

![Animation - Focus Indicator Chrome extension in action](http://i.imgur.com/cVp2hlL.gif)

## Fork Details

The functionality hasn't been altered from the original, but the extension has been updated to manifest V3 and the icon has been changed to more easily distinguish between the enabled and disabled states.

The structure of the repo has also been rearranged to allow easy installation as an unpacked extension.

## Installation

  Load Unpacked Extension
  1. Download the repository with the green **Clone or download** button on the top right of the page.
  2. Unzip the downloaded file and place the folder in a suitable permanent location. 
  3. On your Chromium browser's extensions page enable **Developer mode**.
  4. Click **Load unpacked** and select the folder of the repository you downloaded.

## Why?

While accessing any digital interface, focus indicator, is very important.
Focus indicator highlights the active intractable component or control.
It is true for web pages also.

By default, every browser highlights the active intractable element.
But sometimes, web developers, suppress it, which creates the problem.

For example, when accessing [abc NEWS](http://abcnews.go.com/), via keyboard, active intractable elements are not visually identifiable.

[Focus Indicator](https://sarbbottam.github.io/accessibility,/javascript,/browser/extension/2016/06/17/focus-indicator-browser-extension/) extension, to the rescue.
As the name suggests, it highlights the active intractable element in a webpage.

If you prefer accessing web pages via keyboard, this extension will be super helpful.

## Features / Notable characteristics

- it can be easily turned on and off using the extension icon
  - either by clicking
  - or by navigating to the focus-indicator icon, using `tab` key and pressing `space`
- color of the focus indicator icon identifies the current state, ie, enabled or disabled
  - ![enabled focus indicator icon](src/icons/enabled/16.png) enabled focus indicator icon
  - ![disabled focus indicator icon](src/icons/disabled/16.png) disabled focus indicator icon
- when enabled, it supersedes existing `:focus{outline: <styles>}`, if any
- focus indicator gently animates, once, when displayed
- focus indicator color and width can be customized
- focus indicator can alert the user when invisible elements are focused, if desired
![Focus Indicator Options](http://i.imgur.com/0a12Dgx.png)

## Installation

[![Focus Indicator for Chrome](http://i.imgur.com/m6gHC4g.png)](https://chrome.google.com/webstore/detail/focus-indicator/heeoeadndnhebmfebjccbhmccmaoedlf?hl=en-US)

## Screencast

<a href="https://www.youtube.com/watch?v=r-AYcPC-Dsg" title="Screencast - Focus Indicator Chrome extension in action">
  <img src="http://i.imgur.com/qqEXCal.png" alt="Screencast - Focus Indicator Chrome extension in action" style="display: block; max-width:100%; margin: auto"/>
</a>

I also wrote about it at [Focus Indicator - Browser(Chrome) Extension](https://sarbbottam.github.io/accessibility,/javascript,/browser/extension/2016/06/17/focus-indicator-browser-extension/)

## Contributing

Please refer [Contributing guidelines](contributing.md) to enhance your contribution experience.
