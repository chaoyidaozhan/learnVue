<style lang="less" scoped>
    .itemListAll{
        font-size: 10px;
        color: rgb(102, 102, 102);
        display: flex;
        flex-direction: column;
        cursor: pointer;
        -webkit-border-radius: 50%;
        .itemAll{
            overflow: hidden;
            display: flex;
            .picture{
                flex:1;
                display: flex;
                float:left;
                .img2Out{
                    flex:1;
                    position: relative;
                    text-align: center;
                    vertical-align: middle;
                    display: table-cell;
                    .img2{
                    }
                }
            }
            .right{
                flex:10;
                display: flex;
                flex-direction: column;
                margin-left: 3px;
                float:left;
                width: 134px;
                .title{
                    flex:1;
                }
                .praise{
                    flex:1;
                    display: flex;
                    height: 7px;
                    .img{
                        float:left;
                        flex:1;
                    }
                    .address{
                        float:left;
                        flex:1;
                        color: #BEBEBE;
                    }
                    .time{
                        float:left;
                        flex:2;
                        color: #BEBEBE;
                    }
                    .isApply{
                        float: right;
                        flex:1;
                        color:red;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="itemListAll">
        <div :class="'itemList'+item.id" 
        style="border-bottom:0.5px solid #E0E0E0;" 
        v-for="item in list" 
        :key="item.id" >
                <div class="itemAll">
                    <div class="picture">
                        <div class="img2Out">
                            <date :time="item.time"/>
                            <!-- <img class="img2" :src="item.picture"/> -->
                        </div>
                    </div>
                    <div class="right">
                        <div class="title">
                            {{item.title}}
                        </div>
                        <div class="praise">
                            <div class="address">{{item.address}}</div>
                            <div class="time">{{item.time}}</div>
                            <div class="isApply" v-if="item.isApply==='1'">
                                报名中
                            </div>
                            <div v-else>
                                已报名
                            </div>
                        </div>
                    </div>
                 </div>
        </div>
    </div>
</template>
<script>
import list from "./test/data.vue";
import date from "./date";
export default {
    mixins:[list],
    components:{
        date,
    },
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
        let rights=this.$el.querySelectorAll(".right");
        for(let right of rights){
            let rightHeight=right.offsetHeight/10;
            right.style.setProperty("font-size", rightHeight+'px');
        }
    }
}
</script>

