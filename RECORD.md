# Record

### UI Library

```sh
1. material.angular.io
2. ng-zorro ng.ant.design
3. element-angular
```

### Attentions

```sh
  npm install -g json


json -f tsconfig.json -I -e "this.compilerOptions.paths['@app/*'] = ['src/app/core/*']"
json -f tsconfig.json -I -e "this.compilerOptions.paths['@shared/*'] = ['src/app/shared/*']"
json -f tsconfig.json -I -e "this.compilerOptions.paths['@modules/*'] = ['src/app/modules/*']"
json -f tsconfig.json -I -e "this.compilerOptions.paths['@env'] = ['src/environments/environment']"

```

### Questions

1. angular.json 中 styles 优先级是由上往下执行 下面的样式会覆盖上面的样式

```json
  "styles": [
    "node_modules/ng-zorro-antd/ng-zorro-antd.min.css",
    "src/styles.css"
  ],
```

### Reference Projects

1. https://github.com/mathisGarberg/angular-folder-structure

core
features | modules
shared
data
