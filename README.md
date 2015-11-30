Sometimes you want to create one bundle with webpack and use it on several pages, conditionaly changing entry module on different pages.
I.e. you have two pages, both reference bundle.js, but page1 should startup with module1 and page2 - module2.

You will get into little trouble here - webpack only allow one entry point in one bundle.

This repo shows one possible way to workaround this issue.

And do like this:

```html
page1.html:
<script src="bundle.js" webpack-entry-module="module-for-page1"></script>

page2.html:
<script src="bundle.js" webpack-entry-module="module-for-page2"></script>
```

Main idea:  
You set special entry point [webpack-entry-module](https://github.com/artin-phares/webpack-entry-module/blob/master/example/src/webpack-entry-module.js) when building.  
When running, it extracts module you want to startup with from script-tag attribute, and conditionaly requires it.

But it is boring to specify all modules you want to startup with manually.  
That's why there is [gulp task](https://github.com/artin-phares/webpack-entry-module/blob/master/gulpfile.js) which generates [webpack-entry-module](https://github.com/artin-phares/webpack-entry-module/blob/master/example/src/webpack-entry-module.js) automatically when building.
