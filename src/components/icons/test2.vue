<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// --- 你的图片列表（保持原样）---
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

const swiperInstance = ref(null);
const activeIndex = ref(0);

const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
    swiper.on('slideChange', () => {
        activeIndex.value = swiper.realIndex;
    });
};

const goToSlide = (idx) => {
    if (swiperInstance.value) {
        swiperInstance.value.slideTo(idx);
    }
};

// swiper 配置
const swiperConfig = {
    modules: [Pagination, Autoplay],
    pagination: { clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true,
    effect: 'slide',
    speed: 600,
};
</script>

<template>
    <div class="page-container">
        <!-- 头部 -->
        <header class="hero">
            <div class="logo-wrapper">
                <img src="/public/icon.jpg" class="app-logo" alt="心伴logo" />
            </div>
            <h1>你好，心伴</h1>
            <p>温和社交练习 · 拥抱每一个细微成长</p>
        </header>

        <!-- 功能标签（点击跳转） -->
        <div class="feature-tabs">
            <div
                v-for="(screen, idx) in appScreens"
                :key="screen.id"
                class="tab-item"
                :class="{ active: activeIndex === idx }"
                @click="goToSlide(idx)"
            >
                {{ screen.title }}
            </div>
        </div>

        <!-- 手机框轮播 -->
        <section class="demo-section">
            <div class="phone-frame">
                <div class="phone-screen">
                    <swiper
                        v-bind="swiperConfig"
                        @swiper="onSwiper"
                        class="my-swiper"
                    >
                        <swiper-slide v-for="screen in appScreens" :key="screen.img">
                            <img :src="screen.img" class="app-screen-img" />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </section>

        <!-- 底部 -->
        <footer class="footer">
            <p>感谢你的浏览 · 欢迎联系我</p>
        </footer>
    </div>
</template>

<style scoped lang="scss">
/* 全局 */
.page-container {
    background-color: #FFFCF5;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 头部 */
.hero {
    text-align: center;
    padding: 30px 20px 10px;
    width: 100%;
}
.logo-wrapper {
    margin-bottom: 10px;
}
.app-logo {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(249, 217, 117, 0.3);
}
.hero h1 {
    font-size: 28px;
    font-weight: 700;
    color: #3d2c1b;
    margin: 8px 0 4px;
}
.hero p {
    font-size: 16px;
    color: #7a6a5a;
    font-weight: 400;
}

/* 功能标签 */
.feature-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin: 20px 10px 10px;
    max-width: 500px;
}
.tab-item {
    background: white;
    padding: 6px 16px;
    border-radius: 30px;
    font-size: 13px;
    color: #5a4a3a;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.04);
}
.tab-item:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.tab-item.active {
    background: #F9D975;
    color: #3d2c1b;
    font-weight: 600;
    border-color: #F9D975;
}

/* 手机框 */
.demo-section {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
}
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
.phone-screen {
    width: 100%;
    height: 100%;
    border-radius: 34px;
    overflow: hidden;
    background: white;
}
.app-screen-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.my-swiper {
    width: 100%;
    height: 100%;
}

/* 底部 */
.footer {
    margin-top: 30px;
    color: #aaa;
    font-size: 14px;
}

/* --- 新增：响应式适配 --- */

/* 当屏幕宽度 >= 768px（平板/桌面）时应用 */
@media (min-width: 768px) {
    /* 1. 给整体内容加一个最大宽度，居中显示 */
    .page-container {
        max-width: 800px;
        margin: 0 auto;   /* 居中 */
        padding: 20px 40px; /* 两侧留一点呼吸空间 */
    }


    /* 3. 功能标签限制宽度，排整齐 */
    .feature-tabs {
        max-width: 600px;  /* 限制宽度，不让他们散得太开 */
        gap: 10px;         /* 稍微加大间距 */
    }
    .tab-item {
        padding: 8px 20px; /* 标签变大一点，好点 */
        font-size: 14px;
    }

    /* 4. 标题稍微大一点 */
    .hero h1 {
        font-size: 36px;
    }
    .hero p {
        font-size: 18px;
    }
}

/* 当屏幕宽度 >= 1200px（大桌面）时，如果还想再大一点 */
@media (min-width: 1200px) {

}
</style>