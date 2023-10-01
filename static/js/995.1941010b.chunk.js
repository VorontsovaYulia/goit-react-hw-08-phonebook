"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[995],{995:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t,a,i=r(6727),l=r(9434),o=r(5705),s=r(971),d=r(8022),c=r(168),u=r(6487),m=(0,u.zo)(o.l0)(t||(t=(0,c.Z)(["\n       display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    flex-direction: column;\n    align-items: flex-end;\n    padding: 20px 0;\n    align-content: space-around;\n"]))),x=u.zo.label(a||(a=(0,c.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n"]))),h=r(208),f=r(184),p=function(){var n=i.Ry().shape({name:i.Z_().min(2,"Too Short!").max(70,"Too Long!").matches(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0404\u0454\u0406\u0456\u0407\u0457\u0490\u0491\s]+$/,"Only alphabets and spaces are allowed").required("Required"),number:i.Z_().required("Required").matches(/^\+?\d{2} ?-?\(?\d{3}\)? ?-?\d{3} ?-?\d{2} ?-?\d{2}$/,"Intenational format number(12 symbol)")}),e=(0,l.I0)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(o.J9,{validationSchema:n,initialValues:{name:"",number:""},onSubmit:function(n,r){e((0,h.uK)({name:n.name,number:n.number})),r.resetForm()},children:(0,f.jsxs)(m,{children:[(0,f.jsx)(x,{children:(0,f.jsx)(o.gN,{component:s.n,label:"Name",name:"name",variant:"standard",sx:{width:400}})}),(0,f.jsx)(x,{children:(0,f.jsx)(o.gN,{component:s.n,label:"Number",name:"number",variant:"standard",type:"string",sx:{width:400}})}),(0,f.jsx)(d.Z,{variant:"contained",type:"submit",children:"Add contact"})]})})})},j=r(2791),b=r(9836),g=r(3382),Z=r(9281),v=r(5855),w=r(5527),k=r(9439),y=r(3994),C=r(4554),S=r(890),T=r(237),_=r(232),z=r(383),F=r(1889),I=r(645),L=r(3044),q=function(n){var e=n.item,r=e.name,t=e.number,a=e.id,i=(0,j.useState)(!1),o=(0,k.Z)(i,2),s=o[0],c=o[1],u=(0,l.I0)(),m=function(){return c(!1)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(y.Z,{component:"th",scope:"row",children:(0,f.jsx)(L.Z,{src:"/broken-image.jpg",sx:{backgroundColor:"#1976d2"}})}),(0,f.jsx)(y.Z,{align:"right",children:r}),(0,f.jsx)(y.Z,{align:"right",children:t}),(0,f.jsx)(y.Z,{align:"right",children:(0,f.jsx)(F.ZP,{item:!0,xs:8,children:(0,f.jsx)(I.Z,{onClick:function(n){return c(!0)}})})}),(0,f.jsx)(y.Z,{align:"right",children:(0,f.jsx)(F.ZP,{item:!0,xs:8,children:(0,f.jsx)(z.Z,{onClick:function(){return u((0,h.GK)(a))}})})}),(0,f.jsx)(T.Z,{open:s,onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,f.jsxs)(C.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[(0,f.jsx)(S.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Edit Contact"}),(0,f.jsxs)(C.Z,{component:"form",onSubmit:function(n){n.preventDefault(),console.dir(n.currentTarget);var e=new FormData(n.currentTarget),r={id:a,contact:{name:e.get("name"),number:e.get("number")}};console.log(r),u((0,h.Tk)(r)),m()},children:[(0,f.jsx)(_.Z,{id:"standard-basic",name:"name",variant:"standard",defaultValue:r}),(0,f.jsx)(_.Z,{id:"standard-basic",name:"number",variant:"standard",defaultValue:t}),(0,f.jsx)(d.Z,{type:"submit",children:"Done"})]}),(0,f.jsx)(S.Z,{id:"modal-modal-description",sx:{mt:2}})]})})]})},N=function(n){return n.contacts.items},D=function(n){return n.filter},R=function(){var n=(0,l.v9)(N),e=(0,l.v9)(D),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})),t=(0,l.I0)(),a=(0,l.v9)((function(n){return n.contacts.isLoading}));return(0,j.useEffect)((function(){t((0,h.yF)())}),[t]),a?"Loading":(0,f.jsx)("div",{children:(0,f.jsx)(Z.Z,{component:w.Z,children:(0,f.jsx)(b.Z,{sx:{minWidth:650},"aria-label":"simple table",children:(0,f.jsx)(g.Z,{children:r.map((function(n){return(0,f.jsx)(v.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:(0,f.jsx)(q,{item:n})},n.id)}))})})})})},V=r(6895),A=function(){var n=(0,l.I0)();return(0,f.jsx)("div",{children:(0,f.jsx)(_.Z,{label:"Search contact",id:"filled-size-small",variant:"filled",size:"small",onChange:function(e){return n((0,V.W)(e.currentTarget.value))},name:"filter"})})},E=function(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(p,{}),(0,f.jsx)(A,{}),(0,f.jsx)(R,{})]})}}}]);
//# sourceMappingURL=995.1941010b.chunk.js.map