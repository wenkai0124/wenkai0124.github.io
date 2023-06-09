# markdown 语法

## 标题

```markdown
# 标题 1
```

```markdown
## 标题 2
```

```markdown
### 标题 3
```

## 引用

> 引用 1
>
> > 引用 2

```markdown
> 引用 1
>
> > 引用 1
```

## 颜色加粗

<span class="cor-tip">主色绿</span>

```markdown
<span class="cor-tip">主色绿</span>
```

<span class="cor-da">来个红</span>

```markdown
<span class="cor-da">来个红</span>
```

<span class="cor-wa">淡淡的黄</span>

```markdown
<span class="cor-wa">淡淡的黄</span>
```

<span class="cor-in">男人深沉灰</span>

```markdown
<span class="cor-in">男人深沉灰</span>
```

## 加粗

不加粗**加粗**

```markdown
**加粗**
```

## 斜体

不斜体 _斜体_

```markdown
_斜体_
```

## 框框

::: tip 提示
123456
:::

```markdown
::: tip 提示
123456
:::
```

::: warning 警告
123456
:::

```markdown
::: warning 警告
123456
:::
```

::: danger 错误
123456
:::

```markdown
::: danger 错误
123456
:::
```

::: info 提示
123456
:::

```markdown
::: info 提示
123456
:::
```

::: details 折叠面板

```javascript
var a = 1;
```

:::

````markdown
::: details 折叠面板

```javascript
var a = 1;
```

:::
````

## 分割线

---

```markdown
---
```

## 图片

![logo](/assets/logo.png "这是头像")

```markdown
![logo](/assets/logo.png "这是头像")
```

## 超链接

[github](https://github.com/wenkai0124/wenkai0124.github.io)

```markdown
[github](https://github.com/wenkai0124/wenkai0124.github.io)
```

## 无序列表

- 列表 1
  - 子列表
    - 孙列表
- 列表 2

```markdown
- 列表 1
  - 子列表
    - 孙列表
- 列表 2
```

## 有序列表

1. 列表 1
   1. 子列表
      1. 孙列表
1. 列表 2

```markdown
1. 列表 1
   1. 子列表
      1. 孙列表
1. 列表 2
```

## 表格

| 姓名 | 技能 | 排行 |
| ---- | :--: | ---: |
| 刘备 |  哭  | 大哥 |
| 关羽 |  打  | 二哥 |
| 张飞 |  骂  | 三弟 |

```markdown
| 姓名 | 技能 | 排行 |
| ---- | :--: | ---: |
| 刘备 |  哭  | 大哥 |
| 关羽 |  打  | 二哥 |
| 张飞 |  骂  | 三弟 |
```

## 代码

这里是`代码内容`代码

```markdown
`代码内容`
```

## 代码块

```javascript
var a = 15;
```

````markdown
```javascript
var a = 15;
```
````

## 输出目录

> 这边就不出输出了 右侧有导航栏

```markdown
[[toc]]
```
