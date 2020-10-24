new Vue({
    el:"#app",
    data:{
        title:"Vue Js Method",
        name:"Kawser Ahmed",
        // greeting(){
        //     return "Hello Data";
        // }
    },

    methods: {
        greeting(){
            return "Hello Method";
        },

        myName(){
            return this.name;
        }


        
    },


})