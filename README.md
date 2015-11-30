Why?
---

Sometimes you want to create one bundle with webpack and use it on several pages, conditionaly changing entry module on different pages.
I.e. you have two pages, both reference bundle.js, but page1 should startup with module1 and page2 - with module2.

You will get into little trouble here - webpack only allows one entry point (startup module) in one bundle.

This repo shows one possible way to workaround this issue.

And do like this:

```html
page1.html:
<script src="bundle.js" webpack-entry-module="module-for-page1.js"></script>

page2.html:
<script src="bundle.js" webpack-entry-module="module-for-page2.js"></script>
```

How?
---

Main idea:  
You set special [webpack-entry-module](https://github.com/artin-phares/webpack-entry-module/blob/master/example/src/webpack-entry-module.js) as entry point when building.  
When running, it extracts name of startup module from script-tag attribute, and conditionaly requires it.

But it is boring to specify all possible startup modules manually.  
That's why there is [gulp task](https://github.com/artin-phares/webpack-entry-module/blob/master/gulpfile.js) which generates [webpack-entry-module](https://github.com/artin-phares/webpack-entry-module/blob/master/example/src/webpack-entry-module.js) automatically when building.

Run example:
---

1. git clone https://github.com/artin-phares/webpack-entry-module.git
2. cd webpack-entry-module/
3. npm install (npm install gulp -g)
4. gulp
