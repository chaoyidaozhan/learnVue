<style lang="less" scoped>
    .all{
        position:absolute;
        left:50%;
        transform: translateX(-50%);
        display:flex;
        flex:1;
        .middle{
            flex:1;
            height:1000px;
        }
 
        .left,.right{
            height:800px;
            flex:1 1 100px;/* 左右两列固定宽 */
        }

        .left{
            order:-1;/* 让left居于左侧 */
        }  
    }
</style>
<template>
    <div>
        <div class="all">
            <div class="middle">
                <dot-circle />
                <word-list />
            </div>
            <div class="left">
                <markList />
                <pictureList />
            </div>
            <div class="right">
                <!-- <arrow-circle /> -->
                <word-date-list style="margin-top:220px"/>
            </div>
        </div>
    </div>
</template>
<script>
import markList from "./list/markList/markList.vue"
import pictureList from "./list/pictureList/pictureList.vue"
import wordDateList from "./list/wordDateList/wordDateList.vue"
import wordList from "./list/wordList/wordList.vue"
import dotCircle from "./circle/dotCircle/dotCircle.vue"
import arrowCircle from "./circle/arrowCircle/arrowCircle.vue"

export default {
    components:{
        markList,
        pictureList,
        wordDateList,
        wordList,
        dotCircle,
        arrowCircle
    }
}
</script>

