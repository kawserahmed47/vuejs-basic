const temp = `<h1>{{title}}</h1>`

const app1 =new Vue({
    // el:"#app",
    data:{
        title:"Vue Js Mount and Template",
        name:"Kawser Ahmed",
    },
    // template:`<h1>{{title}}</h1>`
    template:temp,
})

setTimeout(()=>{
    app1.$mount('#app');
},2000)