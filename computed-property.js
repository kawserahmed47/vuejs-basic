new Vue({
    el:"#app",
    data:{
        title:"Vue JS - Computed Property",
        name: "Kawser Ahmed",
        a:0,
        b:0,
        salary:100,
    },
    


        computed: {
            addToA(){
                console.log("add A");
                return this.a + this.salary;
            },
            addToB(){
                console.log("add B");
                return this.b + this.salary;
            },
        },


})