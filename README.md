# React Tracking Hotjar

[![Build Status](https://travis-ci.org/realalexbarge/react-tracking-hotjar.svg?branch=master)](https://travis-ci.org/realalexbarge/react-tracking-hotjar) [![dependencies Status](https://david-dm.org/realalexbarge/react-tracking-hotjar/status.svg)](https://david-dm.org/realalexbarge/react-tracking-hotjar) [![devDependencies Status](https://david-dm.org/realalexbarge/react-tracking-hotjar/dev-status.svg)](https://david-dm.org/realalexbarge/react-tracking-hotjar?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Un-official module to easily add Hotjar pageview tracking to react apps. It functions as a tiny wrapper for the native script tag and window api. After initialization the Hotjar script is injected into the document.

# Installation

With [npm](https://www.npmjs.com/):

```bash
npm install react-tracking-hotjar --save
```

# Usage

### With npm

Before tracking any page views or events the tracker needs to be imported and initialized with the custom tracking id:

```js
import HotjarTracking from 'react-tracking-hotjar';
HotjarTracking.initialize('TRACKING_ID');
```

There is also a method to expose the raw hj tracking object from the window:

```js
HotjarTracking.getTracker();
```
