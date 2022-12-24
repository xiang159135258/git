window.onload = function(){
    new Vue({
        el : ".box",
        data : {
            message : [],
            index : 0,
        },
        
        methods: {
            getdata:function(){
                this.message.push();
                this.index++;
            },
            removedata:function(){     
                this.message = [];
            }
        }
    })   
    var app=new Vue({
        el:"#todoapp",
        data:{
            list:["听音乐","散步","敲代码"],
            inputValue:"好好学习"
        },
        methods:{
            add:function(){
                this.list.push(this.inputValue);
            },
            remove:function(index){
                this.list.splice(index,1);
            },
            clear:function(){
                this.list=[];
            }
        }
    })
}