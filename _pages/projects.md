---
layout: single
title: "项目"
permalink: /projects/
author_profile: true
---

<section class="portfolio-page-intro">
  <p class="portfolio-eyebrow">项目</p>
  <h1>把真实做过的系统整理成作品集。</h1>
  <p>这里不再放练习占位项目，而是整理我已经做出界面、流程和演示素材的个人项目。每个项目都包含核心定位、技术标签、当前状态和后续补充入口。</p>
</section>

<section class="portfolio-project-grid portfolio-project-grid--page">
  <article class="portfolio-project-card portfolio-project-card--with-image">
    <img class="portfolio-project-card__image" src="/images/projects/info-center/home-dashboard.png" alt="个人信息中心首页仪表盘" />
    <div class="portfolio-project-card__top">
      <h2>个人信息中心</h2>
      <span class="portfolio-status portfolio-status--built">已打通原型</span>
    </div>
    <p>一个本地优先的信息聚合系统，把技术动态、校园通知、网页文本和手动导入统一处理，自动完成摘要、分类、优先级评分、事件抽取、日历提醒和每日简报生成。</p>
    <div class="portfolio-tags"><span>信息聚合</span><span>人工智能分析</span><span>本地数据库</span><span>日历提醒</span><span>反馈学习</span></div>
    <div class="portfolio-flow" data-project-flow aria-label="个人信息中心流程图">
      <div class="portfolio-flow__track">
        <button type="button" data-flow-detail="技术动态、订阅源、校园通知和手动文本进入同一个信息入口。">多源输入</button>
        <button type="button" data-flow-detail="统一清洗标题、来源、时间和正文，保存到本地数据库中。">清洗入库</button>
        <button type="button" data-flow-detail="调用人工智能能力生成摘要、分类标签、优先级和事件线索。">智能分析</button>
        <button type="button" data-flow-detail="把截止时间、活动信息和重要事项转成提醒与日历事件。">事件提醒</button>
        <button type="button" data-flow-detail="每天汇总高价值信息，形成可复盘的个人简报。">每日简报</button>
      </div>
      <p class="portfolio-flow__note" data-flow-note>悬停或点击模块查看说明。</p>
    </div>
    <div class="portfolio-card-actions">
      <span class="portfolio-button portfolio-button--disabled">代码仓库待补</span>
      <span class="portfolio-button portfolio-button--disabled">详情待补</span>
    </div>
  </article>

  <article class="portfolio-project-card portfolio-project-card--with-image">
    <img class="portfolio-project-card__image" src="/images/projects/studying-agent/learning-workspace.svg" alt="课堂学习助手工作台" />
    <div class="portfolio-project-card__top">
      <h2>课堂学习助手</h2>
      <span class="portfolio-status portfolio-status--progress">持续完善</span>
    </div>
    <p>一个本地优先的人工智能学习助手，把课件解析、课堂录音转写、笔记生成、知识库问答和学习记录管理整合到同一个学习工作台。</p>
    <div class="portfolio-tags"><span>课件解析</span><span>录音转写</span><span>学习笔记</span><span>知识库问答</span><span>安全渲染</span></div>
    <div class="portfolio-flow" data-project-flow aria-label="课堂学习助手流程图">
      <div class="portfolio-flow__track">
        <button type="button" data-flow-detail="导入课件、讲义或课堂资料，先把学习材料放进统一工作台。">课件导入</button>
        <button type="button" data-flow-detail="把课堂录音转成可检索文本，减少课后整理的负担。">录音转写</button>
        <button type="button" data-flow-detail="根据资料和转写内容生成结构化笔记与重点片段。">结构笔记</button>
        <button type="button" data-flow-detail="围绕本地资料继续追问，让课堂内容变成可互动知识库。">知识问答</button>
        <button type="button" data-flow-detail="保存学习历史、复习线索和后续需要追踪的问题。">复习记录</button>
      </div>
      <p class="portfolio-flow__note" data-flow-note>悬停或点击模块查看说明。</p>
    </div>
    <div class="portfolio-card-actions">
      <span class="portfolio-button portfolio-button--disabled">代码仓库待补</span>
      <span class="portfolio-button portfolio-button--disabled">详情待补</span>
    </div>
  </article>

  <article class="portfolio-project-card portfolio-project-card--with-image">
    <img class="portfolio-project-card__image" src="/images/projects/jarvis/dashboard-overview.png" alt="多智能体贾维斯系统仪表盘" />
    <div class="portfolio-project-card__top">
      <h2>多智能体贾维斯系统</h2>
      <span class="portfolio-status portfolio-status--progress">系统实验</span>
    </div>
    <p>一个本地人工智能工作流操作层，把简单请求走快速路径，把复杂任务送入可追踪的多智能体认知循环，并展示路由、耗时、执行阶段和错误信息。</p>
    <div class="portfolio-tags"><span>智能体系统</span><span>任务路由</span><span>可观测流程</span><span>本地记忆</span><span>仪表盘</span></div>
    <div class="portfolio-flow" data-project-flow aria-label="多智能体贾维斯系统流程图">
      <div class="portfolio-flow__track">
        <button type="button" data-flow-detail="用户用自然语言提出请求，系统先识别意图和复杂度。">用户请求</button>
        <button type="button" data-flow-detail="简单任务走快速路径，复杂任务进入多智能体流程。">路由判断</button>
        <button type="button" data-flow-detail="规划、执行、仲裁和恢复模块协作处理复杂任务。">智能体循环</button>
        <button type="button" data-flow-detail="记录模型选择、耗时、错误和关键执行阶段。">执行审计</button>
        <button type="button" data-flow-detail="在仪表盘里查看状态、链路、结果和系统健康度。">仪表盘</button>
      </div>
      <p class="portfolio-flow__note" data-flow-note>悬停或点击模块查看说明。</p>
    </div>
    <div class="portfolio-card-actions">
      <span class="portfolio-button portfolio-button--disabled">代码仓库待补</span>
      <span class="portfolio-button portfolio-button--disabled">详情待补</span>
    </div>
  </article>

  <article class="portfolio-project-card portfolio-project-card--with-image">
    <img class="portfolio-project-card__image" src="/images/projects/better-question/overview.svg" alt="问得更好学习疑点转换器界面" />
    <div class="portfolio-project-card__top">
      <h2>问得更好</h2>
      <span class="portfolio-status portfolio-status--built">已形成闭环</span>
    </div>
    <p>一个面向大学生的学习提问诊断工具，把模糊疑点转化为高质量问题、学习卡片、自测题和复习任务，帮助学生从“不会问”走向“会复盘”。</p>
    <div class="portfolio-tags"><span>学习诊断</span><span>提问生成</span><span>资料导入</span><span>复习队列</span><span>结构校验</span></div>
    <div class="portfolio-flow" data-project-flow aria-label="问得更好流程图">
      <div class="portfolio-flow__track">
        <button type="button" data-flow-detail="学生先输入模糊、零散或表达不清的学习疑点。">模糊疑点</button>
        <button type="button" data-flow-detail="系统判断疑点背后的知识缺口、课程位置和表达问题。">缺口诊断</button>
        <button type="button" data-flow-detail="生成问老师、问同学、自学检索和继续追问的多个版本。">问题改写</button>
        <button type="button" data-flow-detail="把一次疑问沉淀为概念解释、例子和可复习卡片。">学习卡片</button>
        <button type="button" data-flow-detail="继续生成自测题和复习任务，把提问变成学习闭环。">复习任务</button>
      </div>
      <p class="portfolio-flow__note" data-flow-note>悬停或点击模块查看说明。</p>
    </div>
    <div class="portfolio-card-actions">
      <span class="portfolio-button portfolio-button--disabled">代码仓库待补</span>
      <span class="portfolio-button portfolio-button--disabled">详情待补</span>
    </div>
  </article>

  <article class="portfolio-project-card portfolio-project-card--with-image">
    <img class="portfolio-project-card__image" src="/images/projects/xinchacha/home.png" alt="心察伙伴小程序首页" />
    <div class="portfolio-project-card__top">
      <h2>心察伙伴</h2>
      <span class="portfolio-status portfolio-status--built">最小可用版本</span>
    </div>
    <p>一个微信小程序形态的轻量级文本情绪风险辅助分析工具，支持聊天文本输入、风险指数展示、分级解释、陪伴建议、隐私设置和紧急资源提示。</p>
    <div class="portfolio-tags"><span>微信小程序</span><span>文本分析</span><span>情绪风险提示</span><span>本地缓存</span><span>安全文案</span></div>
    <div class="portfolio-flow" data-project-flow aria-label="心察伙伴流程图">
      <div class="portfolio-flow__track">
        <button type="button" data-flow-detail="用户输入或粘贴聊天文本，先明确分析对象和隐私边界。">文本输入</button>
        <button type="button" data-flow-detail="系统识别情绪压力、危险信号和需要关注的语言特征。">风险识别</button>
        <button type="button" data-flow-detail="用非诊断式文案解释风险等级和可能的文本信号。">分级解释</button>
        <button type="button" data-flow-detail="提供温和、可执行的陪伴建议，避免制造恐慌。">陪伴建议</button>
        <button type="button" data-flow-detail="在高风险场景下提示现实支持渠道和紧急资源。">资源提示</button>
      </div>
      <p class="portfolio-flow__note" data-flow-note>悬停或点击模块查看说明。</p>
    </div>
    <div class="portfolio-card-actions">
      <span class="portfolio-button portfolio-button--disabled">代码仓库待补</span>
      <span class="portfolio-button portfolio-button--disabled">详情待补</span>
    </div>
  </article>
</section>

<section class="portfolio-section">
  <div class="portfolio-section__header">
    <p class="portfolio-eyebrow">项目细节</p>
    <h2>每个项目解决的问题</h2>
  </div>
  <div class="portfolio-detail-list">
    <article class="portfolio-detail-card">
      <h3>个人信息中心</h3>
      <p>重点在于把信息从“看过就忘”的碎片，转成可搜索、可提醒、可复盘的个人信息资产。系统不是简单阅读器，而是围绕个人行动建立信息处理闭环。</p>
      <ul>
        <li>多源信息聚合：技术趋势、订阅源、校园通知和手动文本。</li>
        <li>人工智能分析：摘要、分类、优先级评分和事件抽取。</li>
        <li>结果落地：日历事件、截止提醒、每日简报和导出能力。</li>
      </ul>
    </article>

    <article class="portfolio-detail-card">
      <h3>课堂学习助手</h3>
      <p>重点在于让课堂资料不止停留在一次性记录，而是沉淀为可以继续追问、检索和复习的个人知识库。</p>
      <ul>
        <li>支持课件解析、录音转写、结构化笔记和学习记录。</li>
        <li>把文件、问答、片段和历史记录统一纳入本地数据中心。</li>
        <li>对生成内容建立安全渲染边界，降低页面展示风险。</li>
      </ul>
    </article>

    <article class="portfolio-detail-card">
      <h3>多智能体贾维斯系统</h3>
      <p>重点在于让智能体系统更快、更透明：简单任务快速返回，复杂任务进入可追踪的规划、执行、仲裁和恢复流程。</p>
      <ul>
        <li>区分快速路径和复杂任务认知循环。</li>
        <li>展示模型选择原因、执行阶段耗时和错误信息。</li>
        <li>保留会话、任务、审计日志和本地状态维护。</li>
      </ul>
    </article>

    <article class="portfolio-detail-card">
      <h3>问得更好</h3>
      <p>重点在于把“我不懂”转换成真正可回答、可追问、可复习的问题，帮助学习者建立提问和复盘能力。</p>
      <ul>
        <li>诊断原始疑点背后的知识缺口和课程框架位置。</li>
        <li>生成问老师、问同学、自学检索和继续追问的多个版本。</li>
        <li>把一次问答沉淀为学习卡片、自测题和复习队列。</li>
      </ul>
    </article>

    <article class="portfolio-detail-card">
      <h3>心察伙伴</h3>
      <p>重点在于以温和、非诊断式的方式辅助用户察觉文本中的情绪风险，同时提供隐私设置、历史记录和现实支持资源。</p>
      <ul>
        <li>将聊天文本转化为心理危险指数和分级解释。</li>
        <li>提供文本信号、陪伴建议、安全提示和紧急资源入口。</li>
        <li>通过本地缓存跑通历史记录、设置和收藏闭环。</li>
      </ul>
    </article>
  </div>
</section>
