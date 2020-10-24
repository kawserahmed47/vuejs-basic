const app1 = new Vue({
    el:"#app1",
    data:{
        title:"Vue JS Multiple Instance 1",
        name:"Kawser ",
    },
    methods: {
        changeOne(){
            app2.name= "Kawser";
        }
    },

});

const app2 = new Vue({
    el:"#app2",
    data:{
        title:"Vue JS Multiple Instance 2",
        name:"Ahmed",
    },
    methods:{
        changeTwo(){
            app1.name="Ahmed";
        }
    }
})