(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["f5d1289e"],{6332:function(t,e,a){},bd77:function(t,e,a){"use strict";var r=a("6332"),s=a.n(r);s.a},e8a4:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex q-pa-md",staticStyle:{"max-width":"350px",margin:"auto"}},[a("q-card",{staticClass:"card",attrs:{flat:""}},[a("q-form",{on:{submit:t.ingresar}},[a("q-input",{attrs:{required:"",type:"text",onkeyup:"javascript:this.value=this.value.toLowerCase();",label:"Ingresa tu Nombre"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),a("q-input",{staticClass:"q-mb-md",attrs:{type:"password",label:"Ingresa tu contraseña"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),a("q-btn",{staticClass:"btn-inicio",attrs:{type:"submit",label:"Iniciar sesión"}})],1),a("q-btn",{staticClass:"full-width",attrs:{flat:"",to:"/Registro",label:"Registrarse"}}),a("q-item",[t._v("\n      2020 Nx@ Licencia nXweb\n    ")])],1)],1)},s=[],n=(a("d93a"),a("0012"),a("5b54"),a("2bf3"),a("b7dd"),a("ef92"),a("9289")),o=a.n(n),i=a("94ea");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){o()(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var u={data:function(){return{formData:{email:"",password:""}}},methods:l({},Object(i["b"])("store",["cant"]),{ingresar:function(){localStorage.Nombre=this.formData.email,this.cant(this.formData.email)}})},f=u,p=(a("bd77"),a("a6c2")),b=Object(p["a"])(f,r,s,!1,null,null,null);e["default"]=b.exports}}]);