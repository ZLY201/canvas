很早之前就想做一个图片墙了，曾经尝试过实现一个 demo，不过失败了

这个是仿照 google 图片的布局，需要满足以下条件：

1. 图片的显示需要按照原有比例缩放处理
2. 图片不能被裁减
3. 随着窗口 resize 图片也需要重新缩放
4. 图片需要进行懒加载

在网上搜寻了一圈后发现大多数都是采用 js 来实时改变布局状态，终于在 github 上找到了一篇关于[纯 css 实现的 google photos 照片布局方式](https://github.com/xieranmaya/blog/issues/4)

大体思路上述文章已经写的非常清楚了，首先我们需要一个 mainContainer 来放置所有的图片，为了使得图片自适应宽度，显然 mainContainer 需要用到 flex 布局，而后对于每个图片，需要一个 imageContainer 存放图片，假设图片的宽高为 width 和 height，我们可以固定 imageContainer 的高度为 200px，那么 imageContainer-width 应当为 \`${width * 200 / height}px\` (为了保证和图片宽高比一致)，同理 flex-grow 也为相同值 (让图片按比例占满一行) 由此我们就完成了第一步 —— 让图片按比例缩放

当然，为了不影响页面的正常加载，我们需要提前得知图片的宽高信息

有一点值得注意的是，如果你不要添加 loading 图片，原文中的 absolute 布局是不必要的，但是为了为用户带来更加好的体验，我们可以为 imageContainer 中的 div 添加 loading 图片，就像这样

```js
<div className={style.imageContainer}
     style={{
       width: `${width * 200 / height}px`,
       flexGrow: width / height,
     }}>
  <div style={{
    paddingTop: `${height * 100 / width}%`,
    backgroundImage: `url(${process.env.PUBLIC_URL}/loading.gif)`,
    backgroundSize: '120px 120px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }} ref={this.imgContainer} />
  <img src={imgSrc}
       className={style.image} title={imgInfo} alt={imgInfo}
       {...props}
       style={this.state.loaded ? {} : { display: 'none' }}
       onLoad={this.onLoad} />
</div>
```

如此我们的任务就完成了 80%，结下来的目标就是实现图片懒加载了

首先我们需要知道懒加载的原理是监听容器的 onSroll 事件，当元素在可视范围之内的时候才会去加载它

我们可以使用 element.getBoundingClientRect 方法来获取当前元素在可视窗口内的位置信息，该方法的返回值会随着滚动条改变，那么我们可以很好的判断当前元素是否在当前窗口内

```javascript
const viewHeight = this.props.viewHeight;
const rect = imgContainer.getBoundingClientRect();
if (rect.top < viewHeight) {
  update();
}
```

当元素不在范围内时，我们将 img 设为隐藏模式，那么页面就会显示 div 的 background-image，当监听到 onSCroll 事件时判断其是否在范围内，然后实施加载动作

但是有一个问题，React 会先调用自组建的 componentDidMount 再调用父组件的，这时自组件无法拿到真实的 viewHeight 从而导致首屏渲染失败

解决方法：使用 setTimeOut 将 update 函数改成一个微任务延时触发

但是延时触发会引入新的问题，由于这个项目是一个单页面应用，当组件切换时会将当前组件 unMount，而在微任务中我们大概率会触发 setState 操作，从而导致错误

解决方法：增加变量 _isMounted 表示当前组件状态，在 setState 前判断当前组件是否为挂载状态

在切换路由的时候如若网速较慢，则会等待当前图片加载完成后才能切换成功，需要在组件卸载时中断图片的加载，即设置其 src 为空值

您可以访问[此处](https://zly201.github.io/canvas/#/images)进行预览