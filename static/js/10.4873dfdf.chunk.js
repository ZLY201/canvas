(this.webpackJsonpcanvas=this.webpackJsonpcanvas||[]).push([[10],{698:function(e,t,n){e.exports={Container:"index_Container__2e17M",inputContainer:"index_inputContainer__1x07V",input:"index_input__1C60x",inputContent:"index_inputContent__30E6G",cubeContainer:"index_cubeContainer__2i1Au",cube:"index_cube__n3R3E",run:"index_run__3tJNs",top:"index_top__mDnRg",bottom:"index_bottom__38ZXc",front:"index_front__3E8tt",back:"index_back__34iJ0",left:"index_left__1TPwP",right:"index_right__SaSTH"}},772:function(e,t,n){"use strict";n.r(t);var i=n(11),a=n(12),r=n(13),c=n(14),o=n(1),s=n.n(o),l=n(698),u=n.n(l),d=n(0),g=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(e){var a;Object(i.a)(this,n),(a=t.call(this,e)).input=void 0,a.addFile=function(e){var t=a.state.files,n=t.length||0,i=/.+\.(jpg|jpeg|gif|bmp|png)$/;for(var r in e){var c=(n+parseInt(r))%6;!isNaN(c)&&i.test(e[r].name)&&(t[c]=e[r])}a.setState(t),6===t.length&&a.run()},a.selectFiles=function(){var e=a.input.current;e&&e.click()},a.dragOver=function(e){e.preventDefault()},a.drop=function(e){e.preventDefault(),e.stopPropagation(),a.addFile(e.dataTransfer.files)},a.click=function(e){a.addFile(e.target.files)},a.dragstart=function(e){try{e.dataTransfer.setData("index",e.target.getAttribute("data-index"))}catch(t){return void console.error(t)}},a.removeFile=function(e){var t=a.state.files,n=parseInt(e.dataTransfer.getData("index"));t.splice(n,1),a.setState(t)},a.run=function(){for(var e=a.state.files,t=[],n=function(n){t.push(new Promise((function(t){var i=new FileReader;i.onload=function(e){var n;t("url(".concat(null===(n=e.target)||void 0===n?void 0:n.result,")"))},i.readAsDataURL(e[n])})))},i=0;i<6;++i)n(i);Promise.all(t).then((function(e){var t=a.state.cubeList;e.forEach((function(e,n){t[n].backgroundImage=e})),a.setState(t)}))};return a.state={cubeList:[{direction:"top",backgroundImage:null},{direction:"bottom",backgroundImage:null},{direction:"front",backgroundImage:null},{direction:"back",backgroundImage:null},{direction:"left",backgroundImage:null},{direction:"right",backgroundImage:null}],files:[]},a.input=s.a.createRef(),a}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.cubeList,i=t.files,a=i.length||0?Object(d.jsx)("ul",{style:{color:"black",textAlign:"left"},children:i.map((function(t,n){return Object(d.jsx)("li",{draggable:!0,onDragStart:e.dragstart,"data-index":n,children:t.name},n)}))}):Object(d.jsxs)(d.Fragment,{children:["Please click me to choose or drag image",Object(d.jsx)("br",{}),"File name will display here and cube will run",Object(d.jsx)("br",{}),"Tips: the cube needs six images"]});return Object(d.jsxs)("div",{className:u.a.Container,onDragOver:this.dragOver,onDrop:this.removeFile,children:[Object(d.jsx)("div",{className:u.a.inputContainer,children:Object(d.jsxs)("div",{className:u.a.input,onClick:this.selectFiles,onDrop:this.drop,children:[Object(d.jsx)("div",{className:u.a.inputContent,children:a}),Object(d.jsx)("input",{type:"file",multiple:!0,accept:"image/gif, image/png, image/jpg, image/jpeg\uff0c image/bmp",ref:this.input,onChange:this.click})]})}),Object(d.jsx)("div",{className:u.a.cubeContainer,children:Object(d.jsx)("div",{className:u.a.cube,children:n.map((function(e){return Object(d.jsx)("div",{style:{backgroundImage:e.backgroundImage},className:u.a[e.direction]},e.direction)}))})})]})}}]),n}(o.Component);t.default=g}}]);