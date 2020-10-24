new Vue({
    el:"#app",
    data:{
        title:"Vue Js - Loop",
        name: "Kawser Ahmed",
        smartphones:['iPhone','Samsung','Nokia'],
        student:{
            name:"Kawser",
            id:123456789,
            dept:"CSE",
        }
    },
    methods: {
        update(){
            setTimeout(()=>{
                this.name = "Change My Name"
            },2000)
        }
    },

})