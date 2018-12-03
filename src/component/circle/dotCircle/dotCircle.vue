<style>
    .swiper-slide{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .swiper-container{
        width: 580px;
    }
</style>
<template>  
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper" style="height:200px">
                <img src="./img/TB17NcBp4TpK1RjSZFKSuu2wXXa.jpg" class="swiper-slide"/>
                <img src="./img/TB18Wl7hkvoK1RjSZFwSuwiCFXa.jpg" class="swiper-slide"/>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev" style="height: 18px;"></div>
            <div class="swiper-button-next" style="height: 18px;"></div>
            
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
    data(){
        return{

        }
    },
    methods:{
        init(){
            var mySwiper = new Swiper ('.swiper-container', {
                 autoplay:true,//等同于以下设置
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                
                //如果需要分页器
                pagination: {
                     el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
                // 如果需要滚动条
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                // },
            })     
        }
    },
    mounted(){
        this.init();
    }

}
</script>


