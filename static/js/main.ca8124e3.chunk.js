(this["webpackJsonptask-assigner"]=this["webpackJsonptask-assigner"]||[]).push([[0],{54:function(e,a,r){e.exports=r(68)},59:function(e,a,r){},60:function(e,a,r){},66:function(e,a,r){},68:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),o=r(9),c=r.n(o),l=(r(59),r(91)),s=(r(60),r(33)),i=r(21),m=(r(66),r(92)),u=r(90),E=r(100),d=r(93),O=r(94),b=r(95),j=r(96),p=r(97),f=r(98),k=r(86),w=r(89),v=r(99);var g=function(e,a){var r=[];return e.workOrderList.jobs.forEach((function(e){e.workOrders[a]&&r.push({jobName:e.jobName,workOrderName:e.workOrders[a]})})),r};var S=Object(i.b)((function(e,a){var r=a.dateIndex;return{workOrders:g(e,r)}}),(function(e,a){var r=a.dateIndex,t=a.employeeIndex,n=a.employeeName,o=a.handleClose;return{assignTask:function(a){e(function(e,a,r){return{type:"ASSIGN_TASK",dateIndex:e,employeeName:a,workOrder:r}}(r,n,a)),e(function(e,a,r){return{type:"UPDATE_EMPLOYEE_ASSIGMENT",dateIndex:e,employeeIndex:a,workOrder:r}}(r,t,a)),o()}}}))((function(e){var a=e.workOrders,r=e.assignTask;return n.a.createElement("div",{style:{padding:16}},a.length?a.map((function(e,a){return n.a.createElement(k.a,{key:a,className:"task clickable",onClick:function(){return r(e)}},e.workOrderName,n.a.createElement(w.a,{variant:"middle"}),e.jobName)})):n.a.createElement(u.a,{variant:"body2"},"No Tasks available for this date"))})),h=Object(t.memo)(S);var y=Object(i.b)((function(e){return{isLoading:e.assignmentTable.isLoading,employees:e.assignmentTable.employees,error:e.assignmentTable.error}}),(function(e){return{fetchEmployees:function(){return e({type:"FETCH_EMPLOYEEES"})},saveEmployeeAssignment:function(){return e({type:"SAVE_EMP_ASSIGNMT"})}}}))((function(e){var a=e.isLoading,r=e.employees,o=e.error,c=e.fetchEmployees,i=e.saveEmployeeAssignment,g=Object(t.useState)(null),S=Object(s.a)(g,2),y=S[0],N=S[1],_=Object(t.useState)(""),T=Object(s.a)(_,2),R=T[0],x=T[1],C=Object(t.useState)(""),L=Object(s.a)(C,2),A=L[0],I=L[1],D=Object(t.useState)(""),F=Object(s.a)(D,2),M=F[0],H=F[1],P=function(e,a,r){return function(t){N(t.currentTarget),x(e),I(a),H(r)}},W=function(){N(null)},K=Boolean(y),Y=K?"simple-popover":void 0;return Object(t.useEffect)((function(){c()}),[]),n.a.createElement(l.a,{container:!0,item:!0,justify:"flex-end"},a?n.a.createElement(m.a,{color:"primary"}):o?n.a.createElement(u.a,null,"Some Error Occurred"):n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{item:!0,xs:6},n.a.createElement(u.a,{variant:"h6"},"Assign Tasks!")),n.a.createElement(l.a,{item:!0,xs:3},n.a.createElement(E.a,{variant:"contained",color:"primary",onClick:i},"Save")),n.a.createElement(d.a,null,n.a.createElement(O.a,{className:"table"},n.a.createElement(b.a,null,n.a.createElement(j.a,{className:"headers"},n.a.createElement(p.a,null,"Employee Name"),n.a.createElement(p.a,null,"20 April"),n.a.createElement(p.a,null," 21 April"),n.a.createElement(p.a,null," 22 April"),n.a.createElement(p.a,null," 23 April"),n.a.createElement(p.a,null," 24 April"),n.a.createElement(p.a,null," 25 April"))),n.a.createElement(f.a,null,r.map((function(e,a){return n.a.createElement(j.a,{key:a,className:"table-row"},n.a.createElement(p.a,{component:"th",scope:"row"},e.Name),e.workOrders.map((function(r,t){return n.a.createElement(p.a,{key:t,onClick:P(t,a,e.Name)},r&&n.a.createElement(k.a,{className:"task"},r.workOrderName,n.a.createElement(w.a,{variant:"middle"}),r.jobName))})))}))))),n.a.createElement(v.a,{id:Y,open:K,anchorEl:y,onClose:W,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"center"},style:{minHeight:500,minWidth:600}},n.a.createElement(h,{handleClose:W,dateIndex:R,employeeIndex:A,employeeName:M}))))})),N=Object(t.memo)(y),_=r(15);var T=Object(i.b)((function(e){return{isLoading:e.workOrderList.isLoading,jobs:e.workOrderList.jobs,error:e.workOrderList.error}}),(function(e){return{fetchWorkOrders:function(){return e({type:"FETCH_WORK_ORDERS"})}}})),R=Object(_.d)(t.memo,T)((function(e){var a=e.isLoading,r=e.error,o=e.fetchWorkOrders,c=e.jobs;return Object(t.useEffect)((function(){o()}),[]),n.a.createElement(l.a,{container:!0,item:!0,justify:"center"},a?n.a.createElement(m.a,{color:"primary"}):r?n.a.createElement(u.a,null,"Some Error Occurred"):n.a.createElement(d.a,null,n.a.createElement(O.a,{className:"table"},n.a.createElement(f.a,null,c.map((function(e,a){return n.a.createElement(j.a,{key:a,className:"table-row no-borders"},n.a.createElement(p.a,null),n.a.createElement(p.a,null,e.workOrders[0]&&n.a.createElement(k.a,{className:"task"},e.workOrders[0],n.a.createElement(w.a,{variant:"middle"}),e.jobName)),n.a.createElement(p.a,null,e.workOrders[1]&&n.a.createElement(k.a,{className:"task"},e.workOrders[1],n.a.createElement(w.a,{variant:"middle"}),e.jobName)),n.a.createElement(p.a,null,e.workOrders[2]&&n.a.createElement(k.a,{className:"task"},e.workOrders[2],n.a.createElement(w.a,{variant:"middle"}),e.jobName)),n.a.createElement(p.a,null,e.workOrders[3]&&n.a.createElement(k.a,{className:"task"},e.workOrders[3],n.a.createElement(w.a,{variant:"middle"}),e.jobName)),n.a.createElement(p.a,null,e.workOrders[4]&&n.a.createElement(k.a,{className:"task"},e.workOrders[4],n.a.createElement(w.a,{variant:"middle"}),e.jobName)),n.a.createElement(p.a,null,e.workOrders[5]&&n.a.createElement(k.a,{className:"task"},e.workOrders[5],n.a.createElement(w.a,{variant:"middle"}),e.jobName)))}))))))}));var x=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null),n.a.createElement("main",null,n.a.createElement(l.a,{container:!0,className:"container"},n.a.createElement(N,null),n.a.createElement(R,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=r(50),L=r(32),A=r(11),I={isLoading:!0,employees:[],error:!1};var D={isLoading:!0,jobs:[],error:!1};var F=Object(_.c)({assignmentTable:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_EMPLOYEES_INIT":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!0});case"FETCH_EMPLOYEES_SUCCESS":var r=a.employees;return r=r.map((function(e){return{Name:e.Name,workOrders:[null,null,null,null,null,null]}})),Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,error:!1,employees:r});case"FETCH_EMPLOYEES_ERROR":return Object(A.a)(Object(A.a)({},e),{},{error:!0});case"UPDATE_EMPLOYEE_ASSIGMENT":var t=Object(L.a)(e.employees);return t[a.employeeIndex].workOrders[a.dateIndex]=a.workOrder,Object(A.a)(Object(A.a)({},e),{},{employees:t});default:return e}},workOrderList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_WORK_ORDERS_INIT":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!0});case"FETCH_WORK_ORDERS_SUCCESS":var r=a.jobs;return r=r.map((function(e){var a=[null,null,null,null,null,null];return e.workorders.forEach((function(e,r){a[new Date(e.Date).getDate()%20]=e.name})),{jobName:e.jobname,workOrders:a}})),Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,jobsAssigned:a.jobs,jobs:r,error:!1});case"FETCH_WORK_ORDERS_ERROR":return Object(A.a)(Object(A.a)({},e),{},{isLoading:!1,error:!0});case"ASSIGN_TASK":var t,n;for(n=0;n<e.jobs.length;n++)if(e.jobs[n].jobName===a.workOrder.jobName){t=Object(A.a)({},e.jobs[n]);break}t.workOrders[a.dateIndex]=null;var o,c,l,s=Object(L.a)(e.jobs);for(s[n]=t,n=0;n<e.jobsAssigned.length;n++)if(e.jobsAssigned[n].jobname===a.workOrder.jobName){o=Object(A.a)({},e.jobsAssigned[n]);break}for(c=0;c<o.workorders.length;c++)if(new Date(o.workorders[c].Date).getDate()%20==a.dateIndex){l=Object(A.a)({},o.workorders[c]);break}l.Employee=a.employeeName;var i=Object(L.a)(e.jobsAssigned);return i[n].workorders[c]=l,Object(A.a)(Object(A.a)({},e),{},{jobs:s,jobsAssigned:i});default:return e}}}),M=r(17),H=r.n(M),P=r(18),W=function(e){return e.workOrderList.jobsAssigned},K=H.a.mark(G),Y=H.a.mark(B),U=H.a.mark(J);function G(e){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.a)({type:"FETCH_EMPLOYEES_INIT"});case 2:return e.prev=2,e.next=5,fetch("getEmployees.json").then((function(e){return e.json()}));case 5:return a=e.sent,e.next=8,Object(P.a)({type:"FETCH_EMPLOYEES_SUCCESS",employees:a.Employess});case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(2),e.next=14,Object(P.a)({type:"FETCH_EMPLOYEES_ERROR"});case 14:case"end":return e.stop()}}),K,null,[[2,10]])}function B(e){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.b)(W);case 2:return a=e.sent,e.next=5,fetch("postWorkOrders.json",{method:"POST",body:JSON.stringify({job:a})});case 5:case"end":return e.stop()}}),Y)}function J(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)("FETCH_EMPLOYEEES",G);case 2:return e.next=4,Object(P.c)("SAVE_EMP_ASSIGNMT",B);case 4:case"end":return e.stop()}}),U)}var V=H.a.mark(X),z=H.a.mark($);function X(e){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.a)({type:"FETCH_WORK_ORDERS_INIT"});case 2:return e.prev=2,e.next=5,fetch("getWorkOrders.json").then((function(e){return e.json()}));case 5:return a=e.sent,e.next=8,Object(P.a)({type:"FETCH_WORK_ORDERS_SUCCESS",jobs:a.job});case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(2),e.next=14,Object(P.a)({type:"FETCH_WORK_ORDERS_ERROR"});case 14:case"end":return e.stop()}}),V,null,[[2,10]])}function $(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)("FETCH_WORK_ORDERS",X);case 2:case"end":return e.stop()}}),z)}var q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,Q=Object(C.a)(),Z=Object(_.e)(F,q(Object(_.a)(Q)));Q.run(J),Q.run($),c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,{store:Z},n.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.ca8124e3.chunk.js.map