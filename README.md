discrete-ui
===========

A custom, minimal UI library built by Discrete New York.

Early stages project. this repo encapsulates the UI modules to be used on
discretenewyork.com

Installation
------------

Clone or download this repo. `cd` into the project directory and run:

    $ yarn install
    [ allow installation to complete ]
    $ npm start

The "Demo" view should open at localhost:8080.


Usage
------

There is currently no "distribution" build for this repo. We use it on our website by including it as a submodule
of our main repo. This allows agile bug fixes. The only concern is that you need to include everything in this
project's dependencies in your own, because you require directly from the source files, which need to be transpiled.

