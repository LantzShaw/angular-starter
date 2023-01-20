// 变量导入路径
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerComponent } from './server/server.component';

// 声明路由
const routes: Routes = [
  {
    // 默认路由路径
    path: 'home',
    // 默认路由组件
    component: ServerComponent,
  },
];
// @angular/cli 打包的最小单位
/**
 * @angular/cli 会检查所有 @NgModule 和路由配置，如果你配置了异步模块，cli 会自动把模块切分成独立的 chunk（块）
 * 其它框架基本上都需要你自己去配置 webpack，自己定义切分 chunck 的规则而Angular 里面，打包和切分的动作是 @angular/cli 自动处理的，不需要你干预
 * @NgModule 元数据类型图表
 * */
@NgModule({
  // 导入模块
  imports: [RouterModule.forRoot(routes)],
  // 导出模块
  exports: [RouterModule],
})
// 导出控制器
export class AppRoutingModule {}
// |--@NgModule元数据说明
// |--declarations: [] // 属于该模块的可声明对象（组件、指令和管道）的列表
// |--providers: [] // 依赖注入提供商的列表
// |--imports: [] // 被导入的模块列表
// |--exports: [] // 可导出的模块的可声明对象（组件、指令、管道类）列表
// |--bootstrap: [AppComponent] // 自动启动的组件列表,应用根组件才有
// |--entryComponents: [] // 可动态加载进视图的组件列表
