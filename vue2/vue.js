var app = new Vue({
    el: '#app',
    data: {
      message: '页面加载于 ' + new Date().toLocaleString(),
      scool : {
        class : '123',
        name : 'zheeng'
      },
      contant : '<a href="#">xiang</a>',
    },
    methods : {
      doIt : function(){
        alert("v-on函数");
      },
      doIt1 : function(p1, p2){
        alert(p1 + "v-on函数"+ p2 +"补充");
      },
      changename:function(){
        this.scool.name = "xiang";
      }
    }
  })

var app1 = new Vue({
    el :"#app1",
    data : {
        num :1,
    },
    methods:{
        add :function(){
            if(this.num<10){
                this.num++;
            }
            else{
                alert("最大了");
            }
        },
        sub :function(){
            if(this.num>0)
            this.num--;
            else
            alert("最小了");
        }
    }
})

var app2 = new Vue({
    el : "#app2",
    data : {
        isShow : false,
        age : 17
    },
    methods : {
        changeIsShow:function(){
            this.isShow = !this.isShow;
        },
        toggleIsShow:function(){
            this.isShow = !this.isShow;
        },
        addAge:function(){
            this.age ++;
        }
    },
})

var app3 = new Vue({
    el : "#app3",
    data :{
        imgSrc : "./img/1.jpg",
        imgTitle : "赵今麦",
        isActive:false
    },
    methods:{
        toggleActive:function(){
            this.isActive = !this.isActive;
        }
    }
})

var mask = new Vue({
    el : "#mask",
    data : {
        
        index : 3,
        imgArr : [
            "./img/1.jpg",
            "./img/2.jpg",
            "./img/3.jpg",
            "./img/4.jpg",
            "./img/5.jpg",
            "./img/6.jpg"
        ],  
    },
    methods : {
        prev:function(){
            this.index--;
        },
        next:function(){
            this.index++;
        }
    }
})

var app4 = new Vue({
    el : "#app4",
    data : {
        arr : ["z","x","y","g"],
        veg : [{name:"xilangua"},
                {name:"hualangxi"},
                {name:"langhuaxi"}]
    },
    methods : {
        add:function(){
            this.veg.push({name:"egg"});
        },
        remove:function(){
            this.veg.shift();
        }
    }
})

var app5 = new Vue({
    el : "#app5",
    data : {
        message:"message"
    },
    methods :{
        getM:function(){
            document.write(this.message);
        },
        setM:function(){
            this.message ="new message";
        }
    }
})