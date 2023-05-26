// 变量导入路径
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerComponent } from './features/server/server.component';

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

// |--@Component元数据说明
// |--继承于Directive装饰器
// |--selector: string // CSS选择器用于在模板中标记出该指令，并触发该指令的实例化
// |--inputs: string[] // 列举某个指令的一组可供数据绑定的输入属性
// |--outputsstring[] // 列举一组可供事件绑定的输出属性
// |--providers: Provider[] // 一组依赖注入令牌，它允许DI系统为这个指令或组件提供依赖
// |--exportAs: string // 定义一个名字，用于在模板中把该指令赋值给一个变量
// |--queries: {[key: string]: any;} // 配置一些查询，它们将被注入到该指令中
// |--host: {[key: string]: string;} // 使用一组键值对，把类的属性映射到宿主元素的绑定（属性，属和事件）
// |--jit: true // 如果为真，则该指令/组件将会被AOT编译器忽略，始终使用JIT编译
// |--自身的元数据
// |--changeDetection: ChangeDetectionStrategy // 用于当前组件的变更检测策略
// |--viewProviders: Provider[] // 定义一组可注入对象，它们在视图的各个子节点中可用
// |--moduleId: string // 包含该组件的那个模块的 ID。该组件必须能解析模板和样式表中使用的相对 URL。 SystemJS 在每个模块中都导出了 __moduleName 变量。在 CommonJS 中，它可以设置为 module.id。
// |--templateUrl/template: string // Angular 组件模板文件的 URL/Angular 组件的内联模板
// |--styleUrls/styles: string[] // Angular 组件样式文件的 URL/Angular 组件的内联样式
// |--animations: any[] // 一个或多个动画 trigger() 调用，包含一些 state() 和 transition() 定义
// |--encapsulation: ViewEncapsulation // 改写默认的插值表达式起止分界符（{{ 和 }}）
// |--interpolation: [string, string] // 供模板和 CSS 样式使用的样式封装策略
// |--entryComponents: Array<Type<any> | any[]> // 一个组件的集合，它应该和当前组件一起编译。对于这里列出的每个组件，Angular 都会创建一个 ComponentFactory 并保存进 ComponentFactoryResolver 中。
// |--preserveWhitespaces: boolean // 如果为true 则保留，为 false 则从编译后的模板中移除可能多余的空白字符。 空白字符就是指那些能在 JavaScript 正则表达式中匹配 \s 的字符。默认为 false，除非通过编译器选项改写了它
