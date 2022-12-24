window.onload = function(){
    // 生命周期函数： vue实例在某个时间点会自动执行的函数

    // vue MVVM模式
    var btn1 = new Vue({

        el : "#app",
        data : {
            todoValue : "",
            lists: []
        },
        methods: {
            handleBtnClicks:function(){
                this.lists.push(this.todoValue);
            },
        },
    })

    // 全局组件
    // Vue.component('TodoItem',{
    //     props: ['content', 'index'],
    //     template : "<li @click='remove'>{{content}}</li>",
    //     methods:{
    //         remove: function(){
    //             this.$emit('delete', this.index);
    //         }
    //     }
    // });

    // 局部组件
    var TodoItem = {
        props: ['content', 'index'],
        template : "<li @click='remove'>{{content}}</li>",
        methods:{
            remove: function(){
                this.$emit('delete', this.index);
            }
        }
    }

    var btn = new Vue({
        el : "#app1",
        // 局部组件注册
        // 父子组件数据流为单向，夫组件可以直接改变子组件数据。
        // 但反过来不行，防止子组件改变父组件数据之后导致其他组件错误
        components: {
            TodoItem : TodoItem
        },
        data : {
            todoValue : "",
            lists: [],
            fisrtName : "Dell",
            lastName : "Bee",
            // 有冗余的数据时，才使用监听器
            fullName: "Dell Bee", 
            age :12
        },
        methods: {
            handleBtnClicks:function(){
                this.lists.push(this.todoValue);
                this.todoValue="";
            },
            handleItemDelete:function(index){
                this.lists.splice(index, 1);
            },
            // fullName: function(){
            //     // 渲染之后任何改变都要重新渲染一次
            //     console.log("methods:计算了一次");
            //         return this.fisrtName +" "+ this.lastName;
            // }
        },
        // 计算属性
        computed: {
            // fullName: {
            //     get: function(){
            //         // 页面渲染之后有缓存机制，页面未改变时调用缓存
            //         console.log("computed:计算了一次");
            //         return this.fisrtName +" "+ this.lastName;
            //     },
            //     set: function(value){
            //         var arr = value.splice(" ");
            //         this.fisrtName = arr[0];
            //         this.lastName = arr[1]; 
            //     }
            // }
        },
        // 监听器
        watch: {
            lastName: function(){
                // 页面渲染之后有缓存机制，页面未改变时调用缓存
                console.log("watch:计算了一次");
                this.fullName = this.fisrtName +" "+ this.lastName;
            },
            firstName: function(){
                // 页面渲染之后有缓存机制，页面未改变时调用缓存
                console.log("watch:计算了一次");
                this.fullName = this.fisrtName +" "+ this.lastName;
            }
        }
    })

    btn.age = 19;
    btn.lastName = "19";
    // console.log(btn.fullName());
    console.log(btn.lastName);
    console.log(btn.fisrtName);
    // console.log(btn.fullName);
    
// jquery MVP模式
    function Page(){}   
    $.extend(Page.prototype, {
        init: function(){
            this.bindEvents()
        },
        bindEvents: function(){
            var btn = $('#btn');
            btn.on('click', $.proxy(this.handleBtnclick, this))
        },
        handleBtnclick: function(){
            var inputElem = $("#input");
            var inputValue = inputElem.val();
            var ulElem = $("#list");
            ulElem.append('<li>'+ inputValue +'</li>');
            inputElem.val('');
        }
    })

    var page = new Page();
    page.init();

    
    var vm = new Vue({
        
    })

    var app2 = new Vue({
        el: "#app2",
        data: {
            actived : "",
            isActive: false,
            styleObj: {
                color : "red",
            },
            show: false,
            change : "b",
            Info:{name :"zheng",
                  age : 14},
            list:["x", "z", "c", "b"]
        },
        methods: {
            handle2click: function(){
                this.actived = this.actived === "actived" ?
                    "" : "actived";
            },
            handle4click: function(){
                this.styleObj.color = this.styleObj.color === 
                "black" ? "red" : "black";
            },
            handle3click: function(){
                this.isActive = !this.isActive;
            }
        }
    })

    // 往数组添加数据，且能直接再界面上显示
    Vue.set(app2.Info, "adress", "beijing");
    app2.$set(app2.Info, "adress", "beijing");

    // 组件细节
    var vm1 = new Vue({
        el: "#root",
        data:{
            total: 0,
        },
        methods:{
            handClick: function(){
                console.log(this.$refs.reference)
            },
            handleClick: function(){
                this.total = this.$refs.One.number +
                             this.$refs.Two.number;
            }
        }
    })


    var vm2 = new Vue({
        el: "#root2"
    })
    var vm4 = new Vue({
        el: "#root4"
    })

    var vm3 = new Vue({
        el: "#root3",
        methods: {
            childclick: function(){
                alert('VueClick')
            },
            childtwoclick: function(){
                alert('VueClick')
            }
        }
    })
}

Vue.component('row', {
    // 组件中定义基本数据必须使用函数形式
    data: function(){
        return {contant:'This is Row'}
    },
    template: "<tr><td>{{contant}} </td></tr>"
})

Vue.component('counter', {
    template: '<div @click="handleClick">{{number}} </div>',
    data: function(){
        return{number: 0}
    },
    methods: {
        handleClick: function(){
            // 当handleClick 方法被调用时，事件change也会被调用
            this.number++;
            this.$emit('change');
        }
    }
})

Vue.component('child', {

    props: {        
        content: {
            // 约束父组件传值为String类、Number类
            type:[String, Number],
            // 该参数为必传
            required: true,
            // 默认值
            default: 'default',
            // 校验器
            validator: function(value){
                // 传入值长度是否大于5
                return (value.length > 5)
            }
        }
    },
    template: '<div>{{content}}</div>'
})

Vue.component('childtwo', {
    // 正常调用
    // template: '<div @click="hendlechildclick">Chlid</div>',
    // 绑定原生事件
    template: '<div>Chlid</div>',
    methods: {
        hendlechildclick: function(){
            // 调用自定义事件
            this.$emit('click');
            alert("childclick");
        }
    }
})

// 使每个Vue都用个bus值
Vue.prototype.bus = new Vue()

Vue.component('brochild', {
    data :function(){
        return {selfCount: this.contsnt}
    },
    props:{
        contsnt: String
    },
    template: '<div @click="handbroClick">{{selfCount}} </div>',
    methods:{
        handbroClick: function(){
            this.bus.$emit('chagebro', this.selfCount)
        }
    },
    // 样式挂载时触发该mounted函数
    mounted: function() {
        var this_ = this;
        this.bus.$on('chagebro', function(msg) {
            this_.selfCount = msg;
        })
    },
})