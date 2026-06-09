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

        <!-- 在 <section class="demo-section"> 后面添加 -->
        <section class="project-info">
            <div class="info-card">
                <h2 class="project-title">心伴 · 社交辅助AI</h2>
                <p class="project-desc">
                    一款面向社交焦虑人群的陪伴型App，集AI倾诉、社交关系可视化、社交模拟训练、实用工具于一体。
                    <br>从0到1独立完成前端设计与开发，覆盖12+核心页面，代码量6000+行。
                </p>

                <!-- 技术栈标签 -->
                <div class="tech-tags">
                    <span>Vue3</span>
                    <span>Pinia</span>
                    <span>Vite</span>
                    <span>Vant4</span>
                    <span>ECharts</span>
                    <span>Capacitor</span>
                    <span>DeepSeek API</span>
                    <span>智谱 API</span>
                </div>

                <!-- 功能亮点 -->
                <div class="features-grid">
                    <div class="feature-item">
                        <span class="feature-icon">💬</span>
                        <div>
                            <strong>AI倾诉</strong>
                            <p>接入DeepSeek API，流式逐字渲染</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🌐</span>
                        <div>
                            <strong>社交关系星图</strong>
                            <p>ECharts力引导图，节点映射亲疏</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">🎭</span>
                        <div>
                            <strong>AI社交模拟</strong>
                            <p>4个场景角色扮演，练习尴尬应对</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">📱</span>
                        <div>
                            <strong>跨端集成</strong>
                            <p>Capacitor构建iOS原生，模拟器运行</p>
                        </div>
                    </div>
                </div>

                <!-- ✅ 新增：页面导航（整合标签列表） -->
                <div class="page-nav">
                    <div class="nav-label">📌 页面导航 · 点击跳转</div>
                    <div class="nav-scroll">
                        <div
                            v-for="(screen, idx) in appScreens"
                            :key="screen.id"
                            class="nav-tag"
                            :class="{ active: activeIndex === idx }"
                            @click="goToSlide(idx)"
                        >
                            {{ screen.title }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 底部 -->
        <footer class="footer">
            <p>仅展示部分页面</p>
            <p>感谢你的浏览 · 欢迎联系我😊</p>
        </footer>
    </div>
</template>

<style scoped lang="scss">
/* 全局 */
.page-container {
    background: linear-gradient(rgb(239 206 232 / 0.2) 0% ,rgba(255,252,245,1) 100%);
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column; /* 默认手机端：垂直排列 */
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
    box-shadow: 0 10px 20px rgba(0,0,0,0.1), 0 0 0 3px rgba(255,255,255,0.8);
}
.hero h1 {
    font-size: 28px;
    font-weight: 700;
    color: #3d2c1b;
    margin: 8px 0 12px;
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
    //width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
}
.phone-frame {
    box-sizing: content-box;
    width: 393px;  /* 模拟iPhone宽度 */
    height: 852px;
    margin: 0 auto;
    border: 10px solid #333; /* 边框模拟手机壳 */
    border-radius: 64px;
    background: white;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    overflow: hidden;
    position: relative;
}
.phone-screen {
    width: 100%;
    height: 100%;
    //border-radius: 34px;
    overflow: hidden;
    background: white;
}
.app-screen-img {
    width: 100%;
    height: 100%;
    /* 使用 contain 确保图片完整显示，不会变形或被裁剪 */
    object-fit: contain;
}

.my-swiper {
    width: 100%;
    height: 100%;
}

/* 底部 */
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    color: #aaa;
    font-size: 14px;

    p {
        padding-bottom: 10px;
    }
}

/* 项目信息区域 - 默认小屏样式 */
.project-info {
    width: 100%;
    max-width: 500px;
    padding: 0 20px 20px;
    margin-top: 20px;
}

.info-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
    border: 1px solid rgba(255, 255, 255, 0.5);

    /* ===== 新增：页面导航 ===== */
    .page-nav {
        margin-top: 20px;
        padding-top: 16px;
        border-top: 1px solid rgba(0,0,0,0.06);
    }

    .nav-label {
        font-size: 13px;
        color: #8a7a6a;
        margin-bottom: 10px;
        font-weight: 500;
    }

    .nav-scroll {
        display: flex;
        gap: 8px;
        overflow-x: auto;
        padding-bottom: 4px;
        scrollbar-width: thin; /* Firefox */
        -webkit-overflow-scrolling: touch;

        /* 隐藏滚动条（可选） */
        &::-webkit-scrollbar {
            height: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background: #ddd;
            border-radius: 4px;
        }
    }

    .nav-tag {
        flex-shrink: 0;
        padding: 6px 16px;
        border-radius: 30px;
        font-size: 12px;
        color: #5a4a3a;
        background: rgba(255, 255, 255, 0.6);
        border: 1px solid rgba(0,0,0,0.06);
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;

        &:hover {
            background: rgba(249, 217, 117, 0.3);
            transform: translateY(-1px);
        }

        &.active {
            background: #F9D975;
            border-color: #F9D975;
            font-weight: 600;
            box-shadow: 0 2px 8px rgba(249, 217, 117, 0.25);
        }
    }

    /* ===== 大屏适配（>=1024px）修改 ===== */
    @media (min-width: 1024px) {
        .page-container {
            grid-template-columns: 420px 1fr;  /* 左侧固定，右侧自适应 */
            grid-template-rows: auto 1fr auto;
            gap: 40px;
            padding: 60px 80px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .hero {
            grid-column: 1 / span 2;
            grid-row: 1;
            text-align: center;
            padding-bottom: 20px;
        }

        .demo-section {
            grid-column: 1;
            grid-row: 2;
            padding: 0;
            justify-content: center;
            align-self: center;  /* 垂直居中 */
        }

        /* 右侧只保留 project-info */
        .project-info {
            grid-column: 2;
            grid-row: 2;
            max-width: none;
            padding: 0;
            margin: 0;
            align-self: start;
        }

        .info-card {
            padding: 32px;
        }

        /* 删除原来的 .feature-tabs 独立样式 */
        .feature-tabs {
            display: none;  /* 不再需要，已整合到卡片内 */
        }

        .footer {
            grid-column: 1 / span 2;
            grid-row: 3;
            margin-top: 20px;
            text-align: center;
        }
    }

}

.project-title {
    font-size: 22px;
    font-weight: 700;
    color: #3d2c1b;
    margin: 0 0 8px;
}

.project-desc {
    font-size: 15px;
    color: #5a4a3a;
    line-height: 1.6;
    margin-bottom: 16px;
}

/* 技术栈标签 */
.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;

    span {
        background: #f0ece6;
        padding: 4px 14px;
        border-radius: 20px;
        font-size: 12px;
        color: #4a3a2a;
        font-weight: 500;
    }
}

/* 功能亮点网格 */
.features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 20px;
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    background: white;
    padding: 12px;
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,0.04);

    .feature-icon {
        font-size: 20px;
        flex-shrink: 0;
        margin-top: 2px;
    }

    strong {
        display: block;
        font-size: 14px;
        color: #3d2c1b;
    }
    p {
        font-size: 12px;
        color: #7a6a5a;
        margin: 2px 0 0;
    }
}

@media (min-width: 1024px) {
    /* 整体容器改为两栏：左栏为手机框，右栏为项目介绍 + 标签（上下排列） */
    .page-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3,auto);
        justify-items: center;
        align-items: center;
        gap: 40px;
        padding: 60px 150px;
        //max-width: 1200px;
        margin: 0 auto;
        width: 100%;
    }

    /* 头部：横跨两列 */
    .hero {
        grid-column: 1 / span 2;
        grid-row: 1;
        text-align: center;
        padding-bottom: 20px;
    }
    .hero h1 { font-size: 40px; }
    .hero p { font-size: 18px; }
    .app-logo {
        width: 120px;
        height: 120px;
        border-radius: 30px;
        box-shadow: 0 8px 20px rgba(249, 217, 117, 0.3);
    }

    /* 左栏：手机框 */
    .demo-section {
        grid-column: 1;
        grid-row: 2 ;
        padding: 0;
        justify-content: center;
    }

    /* 右栏：项目介绍 + 标签（上下排列） */
    .project-info {
        grid-column: 2;
        grid-row: 2;
        //max-width: none;
        padding: 0;
        margin: 0;
        //align-self: start;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    /* 项目信息卡片（新增） */
    .info-card {
        padding: 32px;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 8px 24px rgba(0,0,0,0.06);
    }

    /* 底部：横跨两列 */
    .footer {
        grid-column: 1 / span 2;
        grid-row: 3;
        margin-top: 20px;
        text-align: center;
    }
}
@media (min-width: 2000px) {
    .page-container {
        padding: 60px 300px;
    }
}
</style>