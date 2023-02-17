# Record

### UI 框架

```sh
1. material.angular.io
2. ng-zorro ng.ant.design
3. element-angular
```

### 问题

1. angular.json 中 styles 优先级是由上往下执行 下面的样式会覆盖上面的样式

```json
  "styles": [
    "node_modules/ng-zorro-antd/ng-zorro-antd.min.css",
    "src/styles.css"
  ],
```
