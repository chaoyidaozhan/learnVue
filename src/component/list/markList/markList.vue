<style lang="less" scoped>
    .itemListAll{
        color: rgb(102, 102, 102);
        cursor: pointer;
        -webkit-border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // font-size: 10px;
        .mark{
            float: left;
        }
        .word{
        }
    }
</style>
<template>
    <div class="itemListAll">
        <div :class="'itemList'+item.id" 
        style="display:flex;" 
        @mouseenter="changeColor(item.id)" 
        @mouseleave="blurColor(item.id)"  
        v-for="item in list" 
        :key="item.id">
            <div class="mark" v-bind:style="{'font-family':item.font}">1</div>
            <div class="word">{{item.word}}</div>
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
        changeColor(e){
            let cc = this.$el.querySelector(".itemList" + e);
            cc.style.setProperty("background-color","#238123");
            cc.style.setProperty("color","#ffffff");
        },
        blurColor(e){
            let bc = this.$el.querySelector(".itemList" + e);
            bc.style.setProperty("background-color","#ffffff");
            bc.style.setProperty("color","rgb(102, 102, 102)");
        }
    },
    mounted(){
        this.$el.style.setProperty("font-size", this.$el.offsetWidth/10+"px");
    }
}
</script>

