(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(15),i=n.n(o),r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=n(35),l=n(116),u=n(127),d=n(128),h=n(124),f=n(129),b=n(132),j=n(130),p=n(37);n(71),n(72);p.a.initializeApp({apiKey:"AIzaSyCRRVLfkNwEKbZcbjXD_R-LdzvbOpTA_CY",authDomain:"todoist-todo.firebaseapp.com",databaseURL:"https://todoist-todo-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"todoist-todo",storageBucket:"todoist-todo.appspot.com",messagingSenderId:"438637651897",appId:"1:438637651897:web:3a1ccbf3631b9d8300f868"});var g=p.a.auth(),m=p.a.database(),v=new p.a.auth.GoogleAuthProvider,x=n(45),O=n(131),k=n(126),w=n(60),y=n(121),C=n(125),S=n(123),W=n(122),N=n(119),A=n(9),I=Object(l.a)({root:{maxWidth:290,margin:"5px 5px",minWidth:290},media:{height:140}}),B=function(e){var t=e.id,n=e.task,o=e.status,i=I(),r=Object(a.useContext)(D);return Object(A.jsxs)(N.a,{className:i.root,children:[Object(A.jsxs)(y.a,{children:[Object(A.jsx)(W.a,{className:i.media,image:"https://source.unsplash.com/1600x900/?programming,coding,laptop,",title:"Contemplative Reptile"}),Object(A.jsx)(S.a,{id:t,onClick:function(e){e.target.style.textDecoration="line-through"},children:"pending"===o?Object(A.jsx)(h.a,{gutterBottom:!0,variant:"subtitle1",component:"h2",children:n}):Object(A.jsx)(h.a,{style:{textDecoration:"line-through"},gutterBottom:!0,variant:"subtitle1",component:"h2",children:n})})]}),Object(A.jsxs)(C.a,{children:[Object(A.jsx)(k.a,{onClick:function(e){m.ref("users/"+r.uid).child(t).update({status:"completed"}),document.getElementById(t).style.textDecoration="line-through"},size:"small",color:"primary",children:"Finished"}),Object(A.jsx)(k.a,{onClick:function(){m.ref("users/"+r.uid).child(t).remove()},size:"small",color:"primary",children:"Delete"})]})]})},E=Object(l.a)((function(e){return{form:{marginTop:e.spacing(3),marginBottom:e.spacing(3),display:"flex",justifyContent:"center"},input:{marginRight:e.spacing(1)},gridContainer:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}})),R=function(){var e=E(),t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],i=n[1],r=Object(a.useState)([]),c=Object(s.a)(r,2),l=c[0],u=c[1],d=Object(a.useContext)(D);return Object(a.useEffect)((function(){d&&(m.ref("users/"+d.uid).on("child_added",(function(e){u((function(t){return[].concat(Object(x.a)(t),[{key:e.key,item:e.val().item,status:e.val().status}])}))})),m.ref("users/"+d.uid).on("child_removed",(function(e){u((function(t){for(var n=0;n<t.length;n++)if(t[n].key===e.key){t.splice(n,n+1);break}return Object(x.a)(t)}))})))}),[d]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("form",{className:e.form,autoComplete:"off",onSubmit:function(e){e.preventDefault(),d?m.ref("users/"+d.uid).push({timestamp:w.a.database.ServerValue.TIMESTAMP,item:o,status:"pending"}):alert("Please login before adding Task"),document.getElementById("basic-outlined").value="",i("")},children:[Object(A.jsx)(O.a,{className:e.input,id:"basic-outlined",label:"Task",variant:"outlined",onChange:function(e){i(e.target.value)}}),Object(A.jsx)(k.a,{disabled:!o,type:"submit",variant:"contained",color:"textSecondary",children:"Add Task"})]}),Object(A.jsx)("div",{className:e.gridContainer,children:l.map((function(e){return Object(A.jsx)(B,{id:e.key,task:e.item,status:e.status},e.key)}))})]})},T=Object(l.a)((function(e){return{root:{flexGrow:1,marginBottom:"5px",display:"flex"},title:{flexGrow:1},navbar:{backgroundImage:"linear-gradient(to right, green , yellow)"}}})),D=Object(a.createContext)(),P=function(){var e=T(),t=Object(a.useState)(null),n=Object(s.a)(t,2),o=n[0],i=n[1];return Object(a.useEffect)((function(){var e=g.onAuthStateChanged((function(e){i(e||null)}));return function(){e()}}),[]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:e.root,children:Object(A.jsx)(u.a,{position:"static",className:e.navbar,children:Object(A.jsxs)(d.a,{children:[Object(A.jsx)(h.a,{variant:"h5",className:e.title,children:"Swiss"}),Object(A.jsx)(f.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:function(){o?g.signOut().then((function(){alert("You have successfully logged out."),i(null)})).catch((function(e){alert(e.message)})):g.signInWithPopup(v).then((function(e){var t=e.user;i(t)})).catch((function(e){alert(e.message)}))},children:o?Object(A.jsx)(b.a,{alt:"Remy Sharp",src:o.photoURL}):Object(A.jsx)(j.a,{})})]})})}),Object(A.jsx)(D.Provider,{value:o,children:Object(A.jsx)(R,{})})]})},L=(n(81),function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(P,{})})}),z=document.getElementById("root");i.a.render(Object(A.jsx)(a.StrictMode,{children:Object(A.jsx)(L,{})}),z),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");r?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):c(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):c(t,e)}))}}()}},[[82,1,2]]]);
//# sourceMappingURL=main.654f0296.chunk.js.map