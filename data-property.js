new Vue({
    el:"#app",
    data:{
        title:"Vue Js Data Property",
        smartphones:['iPhone','Samsung','Nokia'],
        student:{
            name:"Kawser Ahmed",
            id:12345678,
            dept:"CSE",
        },
        greeting(){
            return "Hello World";
        }

    }
})