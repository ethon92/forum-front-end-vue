(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fdfc446"],{be6c:function(t,e,a){"use strict";a("b0c0");var n=a("2fa3");e["a"]={categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){return n["b"].post("/admin/categories",t)},delete:function(t){return n["b"].delete("/admin/categories/".concat(t))},update:function(t){var e=t.categoryId,a=t.name;return n["b"].put("/admin/categories/".concat(e),{name:a})}},restaurants:{get:function(){return n["b"].get("/admin/restaurants")},getDetail:function(t){var e=t.restaurantId;return n["b"].get("/admin/restaurants/".concat(e))},create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},update:function(t){var e=t.restaurantId,a=t.formData;return n["b"].put("/admin/restaurants/".concat(e),a)},delete:function(t){var e=t.restaurantId;return n["b"].delete("/admin/restaurants/".concat(e))}},users:{get:function(){return n["b"].get("/admin/users")},update:function(t){var e=t.userId,a=t.isAdmin;return n["b"].put("/admin/users/".concat(e),{isAdmin:a})}}}},e01a:function(t,e,a){"use strict";var n=a("23e7"),r=a("83ab"),s=a("da84"),i=a("e330"),o=a("1a2d"),c=a("1626"),u=a("3a9b"),d=a("577e"),l=a("9bf2").f,m=a("e893"),g=s.Symbol,p=g&&g.prototype;if(r&&c(g)&&(!("description"in p)||void 0!==g().description)){var f={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=u(p,this)?new g(t):void 0===t?g():g(t);return""===t&&(f[e]=!0),e};m(v,g),v.prototype=p,p.constructor=v;var b="Symbol(test)"==String(g("test")),h=i(p.toString),_=i(p.valueOf),y=/^Symbol\((.*)\)[^)]+$/,w=i("".replace),C=i("".slice);l(p,"description",{configurable:!0,get:function(){var t=_(this),e=h(t);if(o(f,t))return"";var a=b?C(e,7,-1):w(e,y,"$1");return""===a?void 0:a}}),n({global:!0,forced:!0},{Symbol:v})}},f91c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[t.isLoading?a("Spinner"):a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),a("div",{staticClass:"well"},[a("ul",{staticClass:"list-unstyled"},[a("li",[a("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),a("li",[a("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),a("li",[a("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),a("div",{staticClass:"col-md-8"},[a("p",[t._v(t._s(t.restaurant.description))])])]),a("hr"),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v("回上一頁")])],1)},r=[],s=a("5530"),i=a("1da1"),o=(a("96cf"),a("b0c0"),a("a4d3"),a("e01a"),a("2708")),c=a("be6c"),u=a("2fa3"),d=a("2375"),l={name:"AdminRestaurant",mixins:[o["a"]],components:{Spinner:d["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",tel:"",address:"",openingHours:"",description:""},isLoading:!0}},mounted:function(){var t=this.$route.params.id;this.fetchAdminRestaurant(t)},beforeRouteUpdate:function(t,e){var a=t.params.id;this.fetchAdminRestaurant(a),e()},methods:{fetchAdminRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r,i,o,d,l,m,g,p,f,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isLoading=!0,a.prev=1,a.next=4,c["a"].restaurants.getDetail({restaurantId:t});case 4:n=a.sent,r=n.data,i=r.restaurant,o=i.id,d=i.name,l=i.tel,m=i.address,g=i.opening_hours,p=i.description,f=i.image,v=i.Category,e.restaurant=Object(s["a"])(Object(s["a"])({},e.restaurant),{},{id:o,name:d,tel:l,address:m,openingHours:g,description:p,image:f,categoryName:v.name}),e.isLoading=!1,a.next=16;break;case 11:a.prev=11,a.t0=a["catch"](1),e.isLoading=!1,console.log("error",a.t0),u["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 16:case"end":return a.stop()}}),a,null,[[1,11]])})))()}}},m=l,g=a("2877"),p=Object(g["a"])(m,n,r,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-3fdfc446.cf5fb3bf.js.map