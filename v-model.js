new Vue({
    el:"#app",
    data:{
        title: "Vue Js V-Model",
        name: "Kawser Ahmed",
        formData:{
            firstName: '',
            lastName: '',

        }
    },
    methods: {
        formHandle(){
            console.log("Working");
            console.log(this.formData)

        }
    },
})