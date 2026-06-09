<script setup>
import {ref, useTemplateRef} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// 1. 定义一个普通变量来存储 Swiper 实例
let swiperInstance = null;

// 2. 当 Swiper 初始化完成时，将实例存下来
const onSwiper = (swiper) => {
    swiperInstance = swiper;
};

// 3. 切换函数直接调用实例方法
const prevSlide = () => {
    if (swiperInstance) {
        swiperInstance.slidePrev();
    }
};

const nextSlide = () => {
    if (swiperInstance) {
        swiperInstance.slideNext();
    }
};

/* 在 Vue 组件 script 部分添加 */

const appScreens = [
    // --- Tool 模块 ---
    { id: 18, img: new URL('@/assets/images/Tool/ToolList.png', import.meta.url).href, title: '工具列表' },
    { id: 14, img: new URL('@/assets/images/Tool/Escape.png', import.meta.url).href, title: '逃离工具' },
    { id: 17, img: new URL('@/assets/images/Tool/SimulateWechatSetting.png', import.meta.url).href, title: '模拟微信设置' },
    { id: 16, img: new URL('@/assets/images/Tool/SimulateWechat.png', import.meta.url).href, title: '模拟微信' },
    { id: 15, img: new URL('@/assets/images/Tool/RelationCalc.png', import.meta.url).href, title: '亲戚关系计算器' },

    // --- 根目录 ---
    { id: 1, img: new URL('@/assets/images/treehole.png', import.meta.url).href, title: '树洞' },

    // --- Relation 模块 ---
    { id: 9, img: new URL('@/assets/images/Relation/RelationGraph.png', import.meta.url).href, title: '社交关系星图' },
    { id: 8, img: new URL('@/assets/images/Relation/Contacts.png', import.meta.url).href, title: '联系人列表' },
    { id: 7, img: new URL('@/assets/images/Relation/AddContact.png', import.meta.url).href, title: '添加联系人' },
    { id: 10, img: new URL('@/assets/images/Relation/Remind.png', import.meta.url).href, title: '提醒' },

    // --- Grow 模块 ---
    { id: 4, img: new URL('@/assets/images/grow/SocialTask.png', import.meta.url).href, title: '社交任务' },
    { id: 2, img: new URL('@/assets/images/grow/SocialSimulate.png', import.meta.url).href, title: '社交模拟' },
    { id: 3, img: new URL('@/assets/images/grow/SocialSimulateSetting.png', import.meta.url).href, title: '社交模拟配置' },

    // --- Mine 模块 ---
    { id: 6, img: new URL('@/assets/images/mine/Record.png', import.meta.url).href, title: '成长档案' },
    { id: 5, img: new URL('@/assets/images/mine/AddRecord.png', import.meta.url).href, title: '添加成长' },

    // --- Setting 模块 ---
    { id: 12, img: new URL('@/assets/images/Setting/Setting.png', import.meta.url).href, title: '设置列表' },
    { id: 13, img: new URL('@/assets/images/Setting/Subscribe.png', import.meta.url).href, title: '订阅' },
    { id: 11, img: new URL('@/assets/images/Setting/Feedback.png', import.meta.url).href, title: '反馈' },
];

</script>

<template>
    <div class="page-container">
        <!-- 头部Hero区 -->
        <header class="hero">
            <div class="logo-container">
                <img src="/public/icon.jpg" class="app-logo" />
            </div>
            <h1>你好，心伴</h1>
            <p>温和社交练习 · 拥抱每一个细微成长</p>
        </header>

        <!-- 核心演示区：带手机框的轮播 -->
        <section class="demo-section">
            <!-- 左侧按钮 (上一页) -->
            <!--            <button class="nav-btn prev-btn" @click="prevSlide">‹</button>-->
            <div class="phone-frame">
                <swiper
                    ref="swiperRef"
                    @swiper="onSwiper"
                    :modules="[Pagination, Autoplay]"
                    :pagination="{ clickable: true }"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }"
                    loop=true
                    class="my-swiper"
                >
                    <swiper-slide v-for="screen in appScreens" :key="screen.img">
                        <img :src="screen.img" class="app-screen-img" />
                    </swiper-slide>
                </swiper>
            </div>
            <!-- 右侧按钮 (下一页) -->
            <!--            <button class="nav-btn next-btn" @click="nextSlide">›</button>-->
        </section>

        <!-- 亮点功能卡片区 -->
        <section class="features">
            <!--            <div class="feature-card">-->
            <!--                <div class="card-left">-->
            <!--                    <img src="../public/icon.jpg" class="icon" /> &lt;!&ndash; 小icon或者截图的一部分 &ndash;&gt;-->
            <!--                </div>-->
            <!--                <div class="card-right">-->
            <!--                    <h3>树洞 · 情绪放风</h3>-->
            <!--                    <p>匿名倾诉，真人模拟陪伴，不用怕说错话。</p>-->
            <!--                </div>-->
            <!--            </div>-->
            <!-- 更多卡片... -->
        </section>

        <!-- 底部 -->
        <footer>
            <p>感谢你的浏览</p>
        </footer>
    </div>
</template>

<style scoped lang="scss">
.page-container {
    background-color: #FFFCF5;
    min-height: 100vh;
    padding: 40px;
}

.hero {
    text-align: center;
    padding: 30px 0;
}

/* 顶部演示区域 - 改为 Flex 居中 */
.demo-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; /* 按钮和手机框之间的间距 */
    padding: 20px 0;
}

/* 按钮样式 - 圆润好看 */
.nav-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    //background-color: #FFD54F; /* 用你App里的暖黄色 */
    background-color: rgba(255, 213, 79, 0.8);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    color: #4A4A4A;
    font-size: 28px;
    cursor: pointer;
    //box-shadow: 0 4px 10px rgba(255, 213, 79, 0.4);
    transition: all 0.2s ease;
}

.nav-btn:active {
    transform: scale(0.9);
}

/* 手机框模拟器效果 */
.phone-frame {
    width: 393px;  /* 模拟iPhone宽度 */
    height: 852px;
    margin: 0 auto;
    border: 10px solid #333; /* 边框模拟手机壳 */
    border-radius: 64px;
    background: white;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    overflow: hidden; /* 保证截图圆角不溢出 */
    position: relative;
}

/* 截图图片充满手机框 */
.app-screen-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* 功能卡片留白、圆角 */
.feature-card {
    display: flex;
    background: white;
    margin: 20px;
    padding: 15px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(249, 236, 213, 0.5); /* 暖色阴影 */
}

.app-logo,
.icon {
    width: 100px;
    height: 100px;
    border-radius: 10px;
}

</style>