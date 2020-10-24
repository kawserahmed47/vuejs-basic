new Vue({
    el:"#app",
    data:{
        title: "Vue JS - Conditional Rendering",

        id:1,
        name: "Kawser Ahmed",
        age: 16,
        conditionalAge:18,
    },
    methods: {
        checkUser(){
            return this.id==1 ? true:false;
        }  
    },
})