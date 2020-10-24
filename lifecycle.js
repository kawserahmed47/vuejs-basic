new Vue({
    el:"#app",
    data:{
        name:"Kawser Ahmed",
        title:"Vue Js- Lifecycle",
    },
    methods: {
        updateName(){
            this.name = "Change My Name";
        },
        killIt(){
            this.$destroy();
        }
    },
   
    beforeCreate() {
        console.log("Running before create");
        
    },

    created() {
        console.log("Running created");
        
    },

    beforeMount() {
        console.log("Running before Mount");
    },
    mounted() {
        console.log("Mounted");
    },
    beforeUpdate() {
        console.log("Before Update");
    },

    updated() {
        console.log("Updated");
    },

    beforeDestroy() {
        console.log("Before Destroy");
        
    },
    destroyed() {
        console.log("Destroyed");
    },
   
})