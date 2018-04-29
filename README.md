discrete-ui
===========

A custom, minimal UI library built by Discrete New York.

Early stages project. this repo encapsulates the UI modules to be used on
discretenewyork.com

Installation
------------

Clone or download this repo. Note that the blacktie icons are not included in
version control. You'll have to download and install those icons yourself.

`cd` into the project directory and run:

    $ npm install
    [ allow installation to complete ]
    $ npm start

The "Demo" view should open at localhost:8080.

Usage
------

There is currently no "distribution" build for this repo. We use it on our website by including it as a submodule
of our main repo. This allows agile bug fixes. The only concern is that you need to include everything in this
project's dependencies in your own, because you require directly from the source files, which need to be transpiled.


---

When making changes, you have to build the project & then re-install in whatever project you are using it in.

Build the package first, then install in your project by pointing to the built package path:

    $ cd /path/to/discrete-ui/
    $ npm run build
    $ cd /path/to/myProject
    $ npm i --save /path/to/discrete-ui

The SVG sprite is extracted from the rest of the bundle, but in usage the relative path to the SVG file
is in the module directory, not that of the application build.

To fix this use CopyWebpackPlugin:

    new CopyWebpackPlugin([{
      from: 'node_modules/discrete-ui/dist/*.svg',
      to: 'path/to/build',
      flatten: true
    }])

With the dev server you also have to force the dev server to write the file to the filesystem.
Use write-file-webpack-plugin for this. Simply include `new WriteFilePlugin()` in the plugin list.
