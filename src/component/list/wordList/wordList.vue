<style lang="less" scoped>
    .itemListAll{
        color: rgb(102, 102, 102);
        cursor: pointer;
        -webkit-border-radius: 50%;
        flex-direction: column;
        display: flex;
        .itemAll{
             display: flex;
            .left{
                flex:3;
                display: flex;
                flex-direction: column;
                .title{
                    flex:1;
                }
                .word{
                    flex:1;
                }
                .praise{
                    flex:1;
                    display: flex;
                    .img{
                    }
                    .zan{
                        flex:1;
                    }
                    .address{
                        flex:1;
                    }
                    .time{
                        flex:1;
                    }
                }
            }
            .picture{
                flex:1;
                display: flex;
                align-item: center;
                just-content: center;
                .img2{
                    width:1em;
                    height:6.1em;
                    flex:1;
                    padding:10px;
                }
            }
        }
    }
</style>
<template>
    <div class="itemListAll">
        <div :class="'itemList'+item.id" 
        style="border-bottom:0.5px solid #656626;flex:1;" 
        v-for="item in list" 
        :key="item.id" >
            <div class="itemAll">
                <div class="left">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="word">
                        {{item.word}}
                    </div>
                    <div class="praise">
                        <img class="img" src="../../../img/test.jpg" @click="changePraise(item)"/> 
                        <div class="zan">x{{item.praise}}赞</div>
                        <div class="address">{{item.name}}</div>
                        <div class="time">{{item.time}}</div>
                    </div>
                </div>
                <div class="picture">
                    <img class="img2" :src="item.picture"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import list from "./test/data.vue";
export default {
    mixins:[list],
    data(){
        return {
            
        }
    },
    methods:{
        changePraise(item){
            item.praise=item.praise+1;
        }
    },
    mounted(){
        let itemListAll=this.$el;
        let titles=this.$el.querySelectorAll(".title");
        for(let title of titles){
            title.style.setProperty("font-size",itemListAll.offsetWidth/20+'px');
        }
        let imgs=this.$el.querySelectorAll(".img");
        for(let img of imgs){
            img.style.setProperty("width", itemListAll.offsetWidth/30+"px");
            img.style.setProperty("height", itemListAll.offsetWidth/30+"px");
        }
    }
}
</script>

