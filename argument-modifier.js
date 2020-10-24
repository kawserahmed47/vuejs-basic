new Vue({
    el:"#app",
    data:{
        title:"Vue Js - Argument Modifier",
        name: "Kawser Ahmed",
    },
    methods: {
        updateName(newName, event){
            this.name = newName;
            console.log(event);
        },

        handleForm(event){
            // event.preventDefault(); //no needs it in Vue js
            console.log("Success");

        }
    },
});