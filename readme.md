Clone this repository, then:

* `npm i && npm run build`
* this will install and build everything.

Now:
* when you run `npm start`
* you will get the famous error

````
No metadata found. There is more than once class-validator version installed probably. You need to flatten your dependencies.
````

In order to solve it:
* we need to flatten dependencies
* `npm dedupe` (or `npm ddp`)
* and then `npm start` will work