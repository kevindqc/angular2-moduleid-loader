# angular2-moduleid-loader

## What is moduleId

`ModuleId` is a metadata property you can set when defining a component (in the `@Component` section). When using CommonJS, it allows you to use relative path inside the `templateUrl` and `styleUrls` metadata properties.
For example, if your `.ts` files are in the same folder as your `.html` files, instead of having:

```
@Component(
{
  selector: 'my-component',
  templateUrl: 'app/my/my.component.ts'
})
export class MyComponent {}
```

You can have:
```
@Component(
{
  moduleId: module.id,
  selector: 'my-component',
  templateUrl: 'my.component.ts'
})
export class MyComponent {}
```

More information here: https://angular.io/docs/ts/latest/cookbook/component-relative-paths.html

If you try to use `moduleId: module.id` when using Webpack, you get this error when loading the bundled website:

```
Error: moduleId should be a string in "MyComponent". See https://goo.gl/wIDDiL for more information. If you're using Webpack you should inline the template and the styles, see https://goo.gl/X2J8zc.
```

With this loader, you can keep the `moduleId: module.id` and your code will work whether you are using Webpack or not.

This is handy if you are using something that does its own bundling (for example using [karma-typescript](https://github.com/monounity/karma-typescript/) for testing) and needs the `moduleId` to handle your relative paths.
