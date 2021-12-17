这个项目主要用到了 css3 新特性 animation 和 transform 实现了正方体的三位旋转

右边的没啥好说的，让它在那一直转就行了，左边的话这个框内的图片是可以拖动的，主要用到了 dragstart，dragOver 等属性，唯一要注意的就是调用 onDrop 的话一定要在 dragOver 中使用 e.preventDefault，一开始我以为这是 React 里的 bug，最终在  stackoverflow 上找到了[解答](https://stackoverflow.com/questions/32084053/why-is-ondrop-not-working)

![image-20210815132052058](./static/image-20210815132052058.png)

您可以访问[此处](https://zly201.github.io/canvas/#/imageCube)进行预览