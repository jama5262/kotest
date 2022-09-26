"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[9266],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92438:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Konform Matchers",slug:"konform-matchers.html",sidebar_label:"Konform"},s=void 0,c={unversionedId:"assertions/konform",id:"version-5.4/assertions/konform",title:"Konform Matchers",description:"Kotest provides various matchers for use with Konform.",source:"@site/versioned_docs/version-5.4/assertions/konform.md",sourceDirName:"assertions",slug:"/assertions/konform-matchers.html",permalink:"/docs/assertions/konform-matchers.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/assertions/konform.md",tags:[],version:"5.4",frontMatter:{title:"Konform Matchers",slug:"konform-matchers.html",sidebar_label:"Konform"},sidebar:"assertions",previous:{title:"SQL",permalink:"/docs/assertions/sql-matchers.html"},next:{title:"Klock",permalink:"/docs/assertions/klock-matchers.html"}},u={},m=[],d={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kotest provides various matchers for use with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/konform-kt/konform"},"Konform"),".\nThey can be used in your tests to assert that a given object is validated or fails validation."),(0,o.kt)("p",null,"To use these matchers add ",(0,o.kt)("inlineCode",{parentName:"p"},"implementation 'io.kotest.extensions:kotest-assertions-konform:<version>'")," to your build. This module is available for both JVM and JS targets."),(0,o.kt)("p",null,"Let's start with a basic data class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class UserProfile(\n   val fullName: String,\n   val age: Int?\n)\n")),(0,o.kt)("p",null,"Then given a ",(0,o.kt)("inlineCode",{parentName:"p"},"UserProfile")," validator like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val validateUser = Validation<UserProfile> {\n  UserProfile::fullName {\n     minLength(4)\n     maxLength(100)\n  }\n\n  UserProfile::age ifPresent {\n     minimum(21)\n     maximum(99)\n  }\n}\n")),(0,o.kt)("p",null,"We can test that instances pass validation like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val alice = UserProfile("Alice", 25)\nvalidateUser shouldBeValid alice\n')),(0,o.kt)("p",null,"And we can test that instances fail validation with specific error messages like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bob = UserProfile("bob", 18)\nvalidateUser.shouldBeInvalid(bob) {\n  it.shouldContainError(UserProfile::fullName, "must have at least 4 characters")\n  it.shouldContainError(UserProfile::age, "must be at least \'21\'")\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Matcher"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"validation.shouldBeValid(value)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the validation is valid for the given value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"validation.shouldBeInvalid(value)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the validation is invalid for the given value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"validation.shouldBeInvalid(value) { block }")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the validation is invalid for the given value, and then, runs the block with invalid value")))))}p.isMDXComponent=!0}}]);