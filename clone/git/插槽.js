window.onload = function(){
    Vue.component('temp', {
        template:"<div>"+
                // 有命名的插槽只使用对应命名的插槽
                "<slot name='head'></slot>" +
                "<div >content</div>" +
                "<slot name='foot'></slot>"+
                // 没有特地命名的插槽调用全部没有被命名的模板
                "<slot></slot>"+
                "<slot></slot>"+"</div>"
    })
    
    Vue.component('child', {
        data: function(){
            return {
                list: [1, 2, 3, 4, 5]
            }
        },
        template:"<div>"+
        "<ul>"+
        "<slot v-for='item of list' :item=item ></slot>"+
        "</ul>"+
        "</div>"
    })
    

    Vue.component("child-one", {
        // v-once指令：将模板保存进缓存，这样反复删除时不需要系统反复创建，而是调用缓存。提高运行速度
        template:'<div v-once>child-one</div>'
    })
    Vue.component("child-two", {
        template:'<div v-once>child-two</div>'
    })

    var app = new Vue({
        el: "#root"
    })
    var app = new Vue({
        el: "#root1"
    })

    var app1 = new Vue({
        el: "#root2",
        data :{
            type: "child-one"
        },
        methods: {
            handkleBtnClick : function (){
                this.type = this.type === 'child-one' ? 'child-two': 'child-one'
            }
        },
    })

    var dy = new Vue({
        el: '#dynamic',
        data: {
            show: true,
        },
        methods: {
            handleChilk: function(){
                this.show = !this.show;
            },
            handleBeforeEnter: function(el){
                // el : transition所包含的div样式
                el.style.color = 'red';
            },
            handleEnter: function(el, done){
                setTimeout(() =>  {
                    el.style.color = 'green';
                }, 2000)
                setTimeout(() =>  {
                    done();
                }, 4000)
            },
            handleAfterEnter: function(el){
                el.style.color = 'blue';
            }

        }
    })

    new Vue({
        el: "#velocityjs",
        data: {
            show: true,
        },
        methods: {
            handleChilk: function(){
                this.show = !this.show;
            },
            handleBeforeEnter: function(el){
                el.style.opacity = 0;
            },
            handleEnter: function(el, done){
                Velocity(el, {
                    opacity :1
                },{
                    duration: 1000,
                    complete: done
                })
            },
            handleAfterEnter: function(el){
                console.log("动画结束")
            }

        }
    })

    new Vue({
        el: "#moreComponent",
        data: {
            show: true,
            componentId: 'child-one'
        },
        methods: {
            handleChilk: function(){
                // this.show = !this.show;
                this.componentId = this.componentId === 'child-one' ? 'child-two' : 'child-one'
            },
        }
    })

    new Vue({
        el: "#listadd",
        data: {
            count: 0,
            list:[]
        },
        methods:{
            handleAddlist: function(){
                this.list.push({
                    id: this.count++,
                    title: 'hello word'
                })
            }
        }
    })


    // 对动画进行封装
    Vue.component('fades', {
        props:['show'],
        template:"<transition @before-enter='handleBeforeEnter' @enter='handleEnter' @after-enter='handleAfterEnter' > <slot v-if='show'></slot></transition>",
        methods: {
            handleBeforeEnter: function(el){
                el.style.color = 'red';
            },
            handleEnter: function(el, done){
                setTimeout(() =>  {
                    el.style.color = 'green';
                }, 2000)
                setTimeout(() =>  {
                    done();
                }, 4000)
            },
            handleAfterEnter: function(el){
                el.style.color = 'blue';
            }
        }
    })
    new Vue({
        el: "#fengzhuang",
        data: {
            show: true
        },
        methods: {
            handleChilk: function(){
                this.show = !this.show;
            },
        }
    })
}