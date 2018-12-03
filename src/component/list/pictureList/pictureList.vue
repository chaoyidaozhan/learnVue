<style lang="less" scoped>
    .itemListAll{
        color: rgb(102, 102, 102);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        -webkit-border-radius: 50%;
        .itemImg{
            display: flex;
            font-size:1.3em;
            .mark{
                width:1.3em;
                height:1.3em;
                margin-left:2.1em;
            }
            .word{
            }
        }
    }
</style>
<template>
    <div class="itemListAll">
        <div :class="'itemList'+item.id" 
        @mouseenter="changeStyle(item.id)" 
        @mouseleave="blurStyle(item.id)" 
        v-for="item in picList" 
        :key="item.id">
            <div class="itemImg" v-show="item.word==='更多标签' && show===false">
                <img :src="item.picture" class="mark"/>
                <div class="word" @click="changeShow(item.id)">
                    {{item.word}}
                </div>
            </div>
            <div class="itemImg" v-show="item.word!=='更多标签'">
                <img :src="item.picture" class="mark"/>
                <div class="word">
                    {{item.word}}
                </div>
            </div>
        </div>
        <div :class="'itemList'+item.id" 
        @mouseenter="changeStyle(item.id)" 
        @mouseleave="blurStyle(item.id)" 
        v-for="item in leftList" v-if="show"
        :key="item.id">
            <div class="itemImg">
                <img :src="item.picture" class="mark"/>
                <div class="word">
                    {{item.word}}
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
            picList:[],
            leftList:[],
            show:false,
        }
    },
    methods:{
        changeStyle(e){
            let cc = this.$el.querySelector(".itemList" + e);
            cc.style.setProperty("text-decoration", "underline");
        },
        blurStyle(e){
            let bc = this.$el.querySelector(".itemList" + e);
            bc.style.setProperty("text-decoration", "none");
        },
        changeShow(e){
            let cs = this.$el.querySelector(".itemList" + e);
            cs.style.setProperty("display", "none");
            this.show=true;
        }
    },
    created(){
        this.picList=this.list.slice(0,10);
        this.picList.push({id:this.list.length+1,picture:require('../../../img/test.jpg'),word:'更多标签'});
        this.leftList=this.list.slice(10);
    },
    mounted(){
        // let itemImgs=this.$el.querySelectorAll(".itemImg");
        // let markImgs=this.$el.querySelectorAll(".mark");
        // for(let itemImg of itemImgs){
        //     itemImg.style.setProperty("font-size", this.$el.offsetWidth/10);
        // }
        // for(let markImg of markImgs){
        //     markImg.style.setProperty("width", this.$el.offsetWidth/10);
        //     markImg.style.setProperty("margin-left", this.$el.offsetWidth/10);
        // }
    }
}
</script>

