<style lang="less" scoped>
    .date{
        display: flex;
        flex-direction: column;
        .top{ 
            flex:1;
            color:#009393;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #00ffff
            
            // border:1px #00ffff solid;
        }
        .bottom{
            display: table-cell;
            flex:2;
            color:#009393;
            display: flex; 
            justify-content: center;
            align-items: center;
            background-color:#D9ffff;
            // border:1px #D9ffff solid;
        }
    }
</style>

<template>
    <div class="date">
        <div class="top">
            NOV
        </div>
        <div class="bottom">
            {{dateList[2]}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            month:['','JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEPT','OCT','NOV','DEC'],
            dataList:[],
        }
    },
    props:{
        time:{
            type:String//2018-11-10
        }
    },
    methods:{
        init(){
            this.dateList = this.time.split("-");
        }
    },
    created(){
        this.init();
    },
    mounted(){
       this.$el.style.setProperty("height",this.$el.offsetWidth*1.5+'px');
    }
}
</script>
