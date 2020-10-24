new Vue({
    el:"#app",
    data:{
        title:"Vue Js Event",
        name: "Kawser Ahmed",
        x:0,
        y:0,
    },
    methods: {
        updateName(){
            this.name="Change My Name";
        },

        getCord(event){
            this.x= event.clientX;
            this.y= event.clientY;

        }
    },
})