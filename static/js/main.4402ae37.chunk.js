(this.webpackJsonpcanvas=this.webpackJsonpcanvas||[]).push([[0],{19:function(e,t,i){e.exports={spinContainer:"index_spinContainer__1W96v",icon:"index_icon__KnjaX",spin:"index_spin__2sOJ2"}},2:function(e,t,i){e.exports={mainContainer:"index_mainContainer__24SA7",sideContainer:"index_sideContainer__1Axkq",foldSideBar:"index_foldSideBar__3fUQj",sideHeader:"index_sideHeader__cs2t5",sideItem:"index_sideItem__3-ibi",sideItemContainer:"index_sideItemContainer__2rr4s",sideItemIcon:"index_sideItemIcon__1zWcc",sideFooter:"index_sideFooter__1GXLk",foldIconContainer:"index_foldIconContainer__3MHnR",contentContainer:"index_contentContainer__1AOZe",footerContainer:"index_footerContainer__11bhc"}},40:function(e,t,i){},41:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),n=i(24),l=i.n(n),a=i(8),d=i(3),o=i(11),r=i(12),j=i(13),f=i(14),h=i(19),b=i.n(h),x=i(0),p=function(e){Object(j.a)(i,e);var t=Object(f.a)(i);function i(e){var c;return Object(o.a)(this,i),(c=t.call(this,e)).timer=void 0,c.state={dot:""},c.timer=setInterval((function(){var e=c.state.dot;e.length>=3?c.setState({dot:""}):c.setState({dot:e+"."})}),500),c}return Object(r.a)(i,[{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.dot;return Object(x.jsxs)("div",{className:b.a.spinContainer,style:this.props.style||{},children:[Object(x.jsx)("div",{className:b.a.icon}),Object(x.jsxs)("div",{children:["loading",e]})]})}}]),i}(c.Component),m=i(2),O=i.n(m),v=function(e){Object(j.a)(i,e);var t=Object(f.a)(i);function i(e){var c;return Object(o.a)(this,i),(c=t.call(this,e)).preStatus=void 0,c.changeFoldBar=function(){c.setState({foldBar:!c.state.foldBar})},c.state={foldBar:!1},c.preStatus=!0,c}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){document.body.clientWidth<=1e3?(e.preStatus&&!e.state.foldBar&&e.setState({foldBar:!0}),e.preStatus=!1):(!e.preStatus&&e.state.foldBar&&e.setState({foldBar:!1}),e.preStatus=!0)}))}},{key:"render",value:function(){var e=this.state.foldBar,t=e?"calc(100% - 50px)":"",i=e?Object(x.jsxs)("svg",{d:"1629427717474",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"15276",children:[Object(x.jsx)("path",{d:"M64 160m32 0l832 0q32 0 32 32l0 0q0 32-32 32l-832 0q-32 0-32-32l0 0q0-32 32-32Z","p-id":"15277",fill:"#ffffff"}),Object(x.jsx)("path",{d:"M362.666667 373.333333m32 0l533.333333 0q32 0 32 32l0 0q0 32-32 32l-533.333333 0q-32 0-32-32l0 0q0-32 32-32Z","p-id":"15278",fill:"#ffffff"}),Object(x.jsx)("path",{d:"M362.666667 586.666667m32 0l533.333333 0q32 0 32 32l0 0q0 32-32 32l-533.333333 0q-32 0-32-32l0 0q0-32 32-32Z","p-id":"15279",fill:"#ffffff"}),Object(x.jsx)("path",{d:"M64 800m32 0l832 0q32 0 32 32l0 0q0 32-32 32l-832 0q-32 0-32-32l0 0q0-32 32-32Z","p-id":"15280",fill:"#ffffff"}),Object(x.jsx)("path",{d:"M258.88 527.808l-145.664 98.858667a32 32 0 0 1-49.984-26.474667v-197.717333a32 32 0 0 1 49.984-26.453334l145.664 98.837334a32 32 0 0 1 0 52.949333z","p-id":"15281",fill:"#ffffff"})]}):Object(x.jsxs)("svg",{d:"1629427923210",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1360",children:[Object(x.jsx)("path",{d:"M64 160m32 0l832 0q32 0 32 32l0 0q0 32-32 32l-832 0q-32 0-32-32l0 0q0-32 32-32Z","p-id":"1361",fill:"#ffffff"}),Object(x.jsx)("path",{d:"M362.666667 373.333333m32 0l533.333333 0q32 0 32 32l0 0q0 32-32 32l-533.333333 0q-32 0-32-32l0 0q0-32 32-32Z","p-id":"1362",fill:"#ffffff"}),Object(x.jsx)("path",{d:"M362.666667 586.666667m32 0l533.333333 0q32 0 32 32l0 0q0 32-32 32l-533.333333 0q-32 0-32-32l0 0q0-32 32-32Z","p-id":"1363",fill:"#ffffff"}),Object(x.jsx)("path",{d:"M64 800m32 0l832 0q32 0 32 32l0 0q0 32-32 32l-832 0q-32 0-32-32l0 0q0-32 32-32Z","p-id":"1364",fill:"#ffffff"}),Object(x.jsx)("path",{d:"M80.917333 527.808l145.685334 98.858667a32 32 0 0 0 49.962666-26.474667v-197.717333a32 32 0 0 0-49.962666-26.453334l-145.685334 98.837334a32 32 0 0 0 0 52.949333z","p-id":"1365",fill:"#ffffff"})]});return Object(x.jsxs)("div",{className:O.a.mainContainer,children:[Object(x.jsxs)("div",{className:O.a.sideContainer,style:e?{width:"50px"}:{},children:[Object(x.jsx)("div",{className:O.a.sideHeader,children:Object(x.jsx)(a.b,{to:"/home",children:Object(x.jsx)("svg",{d:"1629375778626",className:"icon",viewBox:"0 0 1026 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1204",children:Object(x.jsx)("path",{d:"M1017.395322 622.848l-452.0448-499.6096c-14.0288-15.5136-32.9728-24.064-53.3504-24.064 0 0 0 0 0 0-20.3264 0-39.2704 8.5504-53.3504 24.064l-452.0448 499.6096c-9.472 10.496-8.6528 26.6752 1.792 36.1472 4.9152 4.4544 11.0592 6.6048 17.152 6.6048 6.9632 0 13.9264-2.816 18.9952-8.448l109.0048-120.4736 0 410.5216c0 42.3424 34.4576 76.8 76.8 76.8l563.2 0c42.3424 0 76.8-34.4576 76.8-76.8l0-410.5216 109.0048 120.4736c9.472 10.496 25.6512 11.3152 36.1472 1.792s11.3152-25.6512 1.792-36.1472zM614.400122 972.8l-204.8 0 0-230.4c0-14.1312 11.4688-25.6 25.6-25.6l153.6 0c14.1312 0 25.6 11.4688 25.6 25.6l0 230.4zM819.200122 947.2c0 14.1312-11.4688 25.6-25.6 25.6l-128 0 0-230.4c0-42.3424-34.4576-76.8-76.8-76.8l-153.6 0c-42.3424 0-76.8 34.4576-76.8 76.8l0 230.4-128 0c-14.1312 0-25.6-11.4688-25.6-25.6l0-467.0976 291.84-322.56c4.1984-4.6592 9.6768-7.2192 15.36-7.2192s11.1616 2.56 15.36 7.2192l291.84 322.56 0 467.0976z","p-id":"1205",fill:"#ffffff"})})})}),Object(x.jsx)(a.b,{to:"/spin",className:O.a.sideItem,replace:!0,children:Object(x.jsxs)("div",{className:O.a.sideItemContainer,children:[Object(x.jsx)("div",{className:O.a.sideItemIcon,children:Object(x.jsx)("svg",{d:"1629427316978",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6153",children:Object(x.jsx)("path",{d:"M384 128a128 128 0 1 1 255.936-0.064A128 128 0 0 1 384 128z m271.552 112.448a128 128 0 1 1 255.936-0.064 128 128 0 0 1-255.936 0.064zM832 512a64 64 0 1 1 128 0 64 64 0 0 1-128 0z m-112.448 271.552a64 64 0 1 1 128 0 64 64 0 0 1-128 0zM448 896a64 64 0 0 1 128 0 64 64 0 0 1-128 0z m-271.552-112.448a64 64 0 0 1 128 0 64 64 0 0 1-128 0z m-32-543.104a96 96 0 0 1 192 0 96 96 0 0 1-192 0zM56 512a72 72 0 1 1 144 0 72 72 0 0 1-144 0z",fill:"#ffffff","p-id":"6154"})})}),Object(x.jsx)("div",{children:"Spin"})]})}),Object(x.jsx)(a.b,{to:"/liquid",className:O.a.sideItem,replace:!0,children:Object(x.jsxs)("div",{className:O.a.sideItemContainer,children:[Object(x.jsx)("div",{className:O.a.sideItemIcon,children:Object(x.jsx)("svg",{d:"1629427371672",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6410",children:Object(x.jsx)("path",{d:"M512 924.544a295.552 295.552 0 0 1-295.552-295.552C216.448 431.957333 512 99.413333 512 99.413333s295.552 332.501333 295.552 529.493334A295.552 295.552 0 0 1 512 924.586667z",fill:"#29B6F6","p-id":"6411"})})}),Object(x.jsx)("div",{children:"Liquid"})]})}),Object(x.jsx)(a.b,{to:"/images",className:O.a.sideItem,replace:!0,children:Object(x.jsxs)("div",{className:O.a.sideItemContainer,children:[Object(x.jsx)("div",{className:O.a.sideItemIcon,children:Object(x.jsxs)("svg",{d:"1629427408564",className:"icon",viewBox:"0 0 1152 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7230",children:[Object(x.jsx)("path",{d:"M1088 128l-64 0 0-64c0-35.2-28.8-64-64-64l-896 0c-35.2 0-64 28.8-64 64l0 768c0 35.2 28.8 64 64 64l64 0 0 64c0 35.2 28.8 64 64 64l896 0c35.2 0 64-28.8 64-64l0-768c0-35.2-28.8-64-64-64zM128 192l0 640-63.872 0c-0.032-0.032-0.096-0.064-0.128-0.128l0-767.776c0.032-0.032 0.064-0.096 0.128-0.128l895.776 0c0.032 0.032 0.096 0.064 0.128 0.128l0 63.872-768 0c-35.2 0-64 28.8-64 64l0 0zM1088 959.872c-0.032 0.032-0.064 0.096-0.128 0.128l-895.776 0c-0.032-0.032-0.096-0.064-0.128-0.128l0-767.776c0.032-0.032 0.064-0.096 0.128-0.128l895.776 0c0.032 0.032 0.096 0.064 0.128 0.128l0 767.776z","p-id":"7231",fill:"#ffffff"}),Object(x.jsx)("path",{d:"M960 352c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96z","p-id":"7232",fill:"#ffffff"}),Object(x.jsx)("path",{d:"M1024 896l-768 0 0-128 224-384 256 320 64 0 224-192z","p-id":"7233",fill:"#ffffff"})]})}),Object(x.jsx)("div",{children:"Images"})]})}),Object(x.jsx)(a.b,{to:"/markdown",className:O.a.sideItem,replace:!0,children:Object(x.jsxs)("div",{className:O.a.sideItemContainer,children:[Object(x.jsx)("div",{className:O.a.sideItemIcon,children:Object(x.jsx)("svg",{d:"1629427470452",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8233",children:Object(x.jsx)("path",{d:"M950 128H74C33.16 128 0 162.76 0 205.54v612.84C0 861.18 33.16 896 74 896h876c40.76 0 74-34.82 74-77.62V205.54C1024 162.76 990.84 128 950 128zM576 736h-128V512l-96 128-96-128v224H128V288h128l96 160 96-160h128z m192 0l-160-224h96.1L704 288h128v224h96z","p-id":"8234",fill:"#ffffff"})})}),Object(x.jsx)("div",{children:"Markdown"})]})}),Object(x.jsx)(a.b,{to:"/marketing",className:O.a.sideItem,replace:!0,children:Object(x.jsxs)("div",{className:O.a.sideItemContainer,children:[Object(x.jsx)("div",{className:O.a.sideItemIcon,children:Object(x.jsxs)("svg",{d:"1629427514381",className:"icon",viewBox:"0 0 1706 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9979",children:[Object(x.jsx)("path",{d:"M518.826667 791.893333l-92.16 9.102223-12.515556-44.373334L364.088889 577.991111 540.444444 648.533333l19.342223 69.404445 2.275555 9.102222c9.102222 30.72-11.377778 61.44-43.235555 64.853333z",fill:"#2767F4","p-id":"9980"}),Object(x.jsx)("path",{d:"M583.68 970.524444c0 26.168889-25.031111 46.648889-50.062222 45.511112l-76.231111-2.275556c-46.648889-1.137778-86.471111-32.995556-100.124445-77.368889l-91.022222-308.337778-4.551111-4.551111 157.013333 1.137778L469.902222 807.822222c54.613333 68.266667 38.684444 47.786667 76.231111 98.986667 12.515556 19.342222 36.408889 37.546667 37.546667 63.715555z",fill:"#3973F4","p-id":"9981"}),Object(x.jsx)("path",{d:"M1173.048889 474.453333v12.515556c-3.413333 302.648889-113.777778 517.688889-223.004445 426.666667-93.297778-73.955556-179.768889-178.631111-292.408888-213.902223-95.573333-29.582222-197.973333-37.546667-296.96-44.373333-31.857778-2.275556-62.577778-3.413333-93.297778-4.551111-22.755556-1.137778-46.648889-1.137778-69.404445-1.137778C64.853333 649.671111 13.653333 562.062222 9.102222 491.52v-10.24c0-93.297778 75.093333-168.391111 168.391111-168.391111h111.502223l86.471111-2.275556c170.666667-9.102222 288.995556-43.235556 455.111111-168.391111 28.444444-21.617778 58.026667-44.373333 81.92-70.542222 23.893333-25.031111 52.337778-55.751111 89.884444-55.751111 93.297778-1.137778 170.666667 204.8 170.666667 458.524444z",fill:"#4988FD","p-id":"9982"}),Object(x.jsx)("path",{d:"M1191.253333 458.524444v28.444445c-1.137778 20.48-1.137778 39.822222-3.413333 60.302222-4.551111 62.577778-14.791111 121.742222-27.306667 172.942222-1.137778 3.413333-1.137778 6.826667-2.275555 9.102223-5.688889 21.617778-12.515556 42.097778-19.342222 61.44-1.137778 2.275556-2.275556 5.688889-3.413334 7.964444-1.137778 2.275556-2.275556 5.688889-3.413333 7.964444-14.791111 36.408889-31.857778 65.991111-50.062222 86.471112-1.137778 1.137778-2.275556 2.275556-3.413334 4.551111-2.275556 2.275556-4.551111 5.688889-7.964444 7.964444-1.137778 1.137778-2.275556 2.275556-3.413333 2.275556-18.204444 15.928889-37.546667 25.031111-58.026667 25.031111-13.653333 0-27.306667-4.551111-40.96-12.515556-2.275556-1.137778-4.551111-2.275556-6.826667-4.551111-1.137778-1.137778-2.275556-1.137778-3.413333-2.275555-1.137778-1.137778-3.413333-2.275556-4.551111-3.413334-56.888889-47.786667-101.262222-168.391111-118.328889-319.715555-5.688889-45.511111-7.964444-93.297778-7.964445-142.222223 0-47.786667 2.275556-94.435556 7.964445-137.671111 10.24-88.746667 27.306667-158.151111 52.337778-217.315555 9.102222-13.653333 18.204444-22.755556 26.168889-30.72C938.666667 37.546667 969.386667 6.826667 1008.071111 6.826667c101.262222 0 180.906667 200.248889 183.182222 451.697777z",fill:"#3973F4","p-id":"9983"}),Object(x.jsx)("path",{d:"M969.386667 476.728889c0 73.955556-59.164444 133.12-133.12 133.12-4.551111-42.097778-7.964444-87.608889-7.964445-135.395556 0-45.511111 2.275556-89.884444 6.826667-130.844444h1.137778c73.955556 0 133.12 59.164444 133.12 133.12z",fill:"#DFECFD","p-id":"9984"}),Object(x.jsx)("path",{d:"M233.244444 492.657778c0 58.026667 12.515556 112.64 34.133334 158.151111-22.755556-1.137778-46.648889-1.137778-69.404445-1.137778C64.853333 649.671111 13.653333 562.062222 9.102222 491.52v-10.24c0-93.297778 75.093333-168.391111 168.391111-168.391111h102.4c-29.582222 47.786667-46.648889 111.502222-46.648889 179.768889z",fill:"#3973F4","p-id":"9985"}),Object(x.jsx)("path",{d:"M1455.217778 216.177778c-9.102222 0-17.066667-4.551111-20.48-13.653334-5.688889-11.377778 0-25.031111 11.377778-30.72l5.688888-2.275555c11.377778-5.688889 25.031111 0 30.72 11.377778s0 25.031111-11.377777 30.72l-5.688889 2.275555c-3.413333 1.137778-6.826667 2.275556-10.24 2.275556zM1252.693333 309.475556c-9.102222 0-17.066667-4.551111-20.48-13.653334-5.688889-11.377778 0-25.031111 11.377778-30.72l122.88-56.888889c11.377778-5.688889 25.031111 0 30.72 11.377778s0 25.031111-11.377778 30.72L1262.933333 307.2c-3.413333 1.137778-6.826667 2.275556-10.24 2.275556zM1443.84 494.933333c-12.515556 0-22.755556-9.102222-22.755556-21.617777 0-12.515556 9.102222-22.755556 21.617778-23.893334l229.831111-9.102222c12.515556-1.137778 22.755556 9.102222 23.893334 21.617778 0 12.515556-9.102222 22.755556-21.617778 23.893333l-230.968889 9.102222zM1276.586667 501.76c-12.515556 0-22.755556-9.102222-22.755556-21.617778 0-12.515556 9.102222-22.755556 21.617778-23.893333l77.368889-3.413333c12.515556-1.137778 22.755556 9.102222 23.893333 21.617777 0 12.515556-9.102222 22.755556-21.617778 23.893334l-78.506666 3.413333c1.137778 0 1.137778 0 0 0zM1549.653333 876.088889c-4.551111 0-7.964444-1.137778-11.377777-3.413333l-35.271112-21.617778c-10.24-6.826667-13.653333-20.48-7.964444-31.857778 6.826667-10.24 20.48-13.653333 31.857778-7.964444l35.271111 21.617777c10.24 6.826667 13.653333 20.48 7.964444 31.857778-5.688889 6.826667-12.515556 11.377778-20.48 11.377778zM1427.911111 800.995556c-4.551111 0-7.964444-1.137778-11.377778-3.413334l-192.284444-118.328889c-10.24-6.826667-13.653333-20.48-7.964445-31.857777 6.826667-10.24 20.48-13.653333 31.857778-7.964445l192.284445 118.328889c10.24 6.826667 13.653333 20.48 7.964444 31.857778-4.551111 7.964444-12.515556 11.377778-20.48 11.377778z",fill:"#4988FD","p-id":"9986"})]})}),Object(x.jsx)("div",{children:"Marketing"})]})}),Object(x.jsx)(a.b,{to:"/imageCube",className:O.a.sideItem,replace:!0,children:Object(x.jsxs)("div",{className:O.a.sideItemContainer,children:[Object(x.jsx)("div",{className:O.a.sideItemIcon,children:Object(x.jsx)("svg",{d:"1629427644479",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13206",children:Object(x.jsx)("path",{d:"M138.715429 781.568l336.420571 191.140571c24.868571 14.153143 48 14.573714 73.728 0l336.420571-191.140571c39.862857-22.710857 61.714286-45.860571 61.714286-107.995429V334.134857c0-47.561143-18.852571-74.569143-53.997714-94.72l-302.994286-172.269714c-52.717714-30.427429-104.155429-29.988571-156.013714 0l-302.994286 172.288c-35.145143 20.132571-53.997714 47.140571-53.997714 94.72v339.419428c0 62.134857 21.851429 85.284571 61.714286 107.995429zM512 476.013714L185.417143 291.291429l279.003428-159.451429c32.585143-18.413714 61.714286-18.834286 95.158858 0l278.985142 159.451429zM179.017143 721.554286c-24.448-13.714286-32.585143-27.008-32.585143-50.139429V351.707429l329.563429 188.16v350.555428z m665.984 0l-296.996572 168.850285V539.849143l329.563429-188.141714V671.451429c0 23.131429-8.137143 36.425143-32.566857 50.139428z","p-id":"13207",fill:"#ffffff"})})}),Object(x.jsx)("div",{children:"ImageCube"})]})}),Object(x.jsx)("div",{className:O.a.sideFooter,children:Object(x.jsx)("div",{className:O.a.foldIconContainer,onClick:this.changeFoldBar,children:i})})]}),Object(x.jsx)("div",{className:O.a.contentContainer,style:{width:t},children:this.props.children}),Object(x.jsxs)("div",{className:O.a.footerContainer,children:[Object(x.jsx)("div",{className:O.a.websiteInfo,children:"Site Powered by React. Design and Developed by Zilong Yao."}),Object(x.jsxs)("div",{className:O.a.link,children:[Object(x.jsxs)("span",{children:[Object(x.jsx)(a.b,{to:"/home",children:"home"})," | "]}),Object(x.jsxs)("span",{children:[Object(x.jsx)("a",{href:"https://zly201.github.io/",children:"blog"})," | "]}),Object(x.jsxs)("span",{children:[Object(x.jsx)("a",{href:"https://github.com/zly201/",children:"github"})," | "]}),Object(x.jsx)("span",{children:Object(x.jsx)("a",{href:"mailto:yaozilong@bytedance.com",children:"contact us"})})]}),Object(x.jsx)("div",{className:O.a.copyright,children:"Copyright \xa92021 Zilong Yao, All Rights Reserved."})]})]})}}]),i}(c.Component),u=s.a.lazy((function(){return i.e(9).then(i.bind(null,770))})),w=s.a.lazy((function(){return i.e(5).then(i.bind(null,774))})),g=s.a.lazy((function(){return i.e(6).then(i.bind(null,776))})),z=s.a.lazy((function(){return Promise.all([i.e(2),i.e(8)]).then(i.bind(null,777))})),M=s.a.lazy((function(){return i.e(7).then(i.bind(null,771))})),C=s.a.lazy((function(){return i.e(10).then(i.bind(null,772))})),_=s.a.lazy((function(){return i.e(11).then(i.bind(null,773))})),I=function(){return Object(x.jsx)(v,{children:Object(x.jsx)(c.Suspense,{fallback:Object(x.jsx)(p,{}),children:Object(x.jsxs)(d.d,{children:[Object(x.jsx)(d.b,{exact:!0,path:"/home",component:u}),Object(x.jsx)(d.b,{exact:!0,path:"/spin",component:p}),Object(x.jsx)(d.b,{exact:!0,path:"/liquid",component:w}),Object(x.jsx)(d.b,{exact:!0,path:"/images",component:g}),Object(x.jsx)(d.b,{exact:!0,path:"/markdown",component:z}),Object(x.jsx)(d.b,{exact:!0,path:"/marketing",component:M}),Object(x.jsx)(d.b,{exact:!0,path:"/imageCube",component:C}),Object(x.jsx)(d.b,{exact:!0,path:"/saveAsHTML",component:_}),Object(x.jsx)(d.a,{to:"/home"})]})})})};var N=function(){for(var e=!1,t=navigator.userAgent.toLowerCase(),i=["iphone","ipad","ipod","android","linux","windows phone"],c=0;c<i.length;c++)-1!==t.indexOf(i[c])&&(e=!0);return e?Object(x.jsx)("div",{style:{textAlign:"center",margin:"200px 20px 0 20px"},children:"Sorry, this website does not support mobile access for the time being, please visit on PC."}):Object(x.jsx)(a.a,{children:Object(x.jsx)(I,{})})};i(40);l.a.render(Object(x.jsx)(N,{}),document.getElementById("root"))}},[[41,1,4]]]);