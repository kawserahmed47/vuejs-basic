Vue.component('Ahmed',{
//    data:{
//         title:"Vue JS Component",
//         name: "Kawser Ahmed",
//     },
    data(){
        return{
            // title:"Vue JS Component",
            name: "Kawser Ahmed",
        }
    },
    template: `<p>{{name}}</p>`

})


new Vue({
    el:"#app",
    // data:{
    //     title:"Vue JS Component",
    //     name: "Kawser Ahmed",
    // }
})