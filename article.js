const articleDiseaseCatalog = [
  ['高血压', [
    '家庭血压监测的正确方法','低盐饮食实用指南','降压药物规律服用手册','清晨高血压管理要点',
    '老年高血压居家照护','高血压患者运动处方','体位性低血压预防指南','高血压靶器官损害早期识别',
    '血压波动常见原因分析','高血压急症识别与就医','冬夏季血压管理注意事项','高血压合并睡眠呼吸暂停管理',
    '高血压复诊前准备清单','高血压治疗常见误区','戒烟限酒与血压控制','高血压长期自我管理计划'
  ]],
  ['糖尿病', [
    '居家血糖监测操作指南','糖尿病健康餐盘搭配方法','低血糖识别与应急处理','糖尿病足日常检查与护理',
    '口服降糖药用药注意事项','胰岛素规范注射操作手册','糖化血红蛋白指标解读','糖尿病患者安全运动指南',
    '糖尿病慢性并发症筛查','糖尿病视网膜病变防治','糖尿病肾病早期管理','糖尿病生病期间管理原则',
    '糖尿病患者旅行准备清单','糖尿病与口腔健康管理','糖尿病合并肥胖体重管理','糖尿病定期复诊项目清单'
  ]],
  ['冠心病', [
    '冠心病二级预防管理指南','心绞痛症状识别与记录','硝酸甘油正确使用方法','冠脉支架术后随访手册',
    '抗血小板药物服用须知','冠心病血脂控制目标解读','冠心病患者心脏康复计划','冠心病安全运动强度评估',
    '冠心病低脂膳食指导','戒烟对冠心病康复的益处','急性心肌梗死预警信号','冠心病患者情绪与睡眠管理',
    '冠心病居家心率血压监测','冠心病合并糖尿病管理','冬季冠心病防护要点','冠心病复查项目与时间表'
  ]],
  ['脑卒中', [
    'FAST脑卒中早期识别法','脑卒中出院后康复计划','偏瘫患者居家肢体训练','卒中后吞咽障碍安全进食',
    '脑卒中患者防跌倒指南','卒中后血压规范管理','脑卒中抗血小板治疗须知','卒中后血脂达标管理',
    '预防脑卒中复发的关键措施','卒中后语言康复训练方法','卒中后认知功能训练','卒中后抑郁识别与支持',
    '脑卒中照护者实用手册','卒中患者居家环境改造','卒中康复期营养指导','脑卒中定期复诊检查清单'
  ]],
  ['慢阻肺（COPD）', [
    '慢阻肺稳定期居家管理','吸入装置规范使用方法','缩唇呼吸与腹式呼吸训练','慢阻肺急性加重预警信号',
    '慢阻肺患者肺康复计划','慢阻肺长期氧疗注意事项','慢阻肺患者戒烟行动指南','慢阻肺营养风险与饮食建议',
    '慢阻肺冬季防护要点','慢阻肺疫苗接种建议','慢阻肺排痰训练方法','呼吸困难时的应对步骤',
    '慢阻肺居家血氧监测','慢阻肺常用药物管理','慢阻肺合并焦虑睡眠管理','慢阻肺复诊评估项目清单'
  ]],
  ['慢性肾病', [
    '慢性肾病分期与指标解读','肾功能检查报告怎么看','慢性肾病低盐饮食指南','慢性肾病优质低蛋白饮食',
    '慢性肾病高钾食物管理','慢性肾病磷摄入管理','慢性肾病饮水与容量管理','慢性肾病血压控制目标',
    '糖尿病肾病日常管理','需要谨慎使用的伤肾药物','肾性贫血筛查与治疗','慢性肾病矿物质骨代谢管理',
    '透析患者血管通路保护','慢性肾病水肿观察记录','慢性肾病感染预防指南','慢性肾病定期复查清单'
  ]],
  ['血脂异常', [
    '血脂检查报告指标解读','他汀类药物规范使用指南','不同人群血脂控制目标','血脂异常膳食管理原则',
    '减少反式脂肪摄入的方法','改善血脂的运动计划','血脂异常与体重管理','家族性高胆固醇血症筛查',
    '甘油三酯升高如何管理','联合降脂药物使用须知','他汀相关肌肉症状识别','冠心病患者强化降脂管理',
    '控糖限酒与甘油三酯管理','开始降脂治疗后的复查安排','血脂治疗常见误区','血脂长期达标管理计划'
  ]],
  ['肥胖/减重管理', [
    'BMI与腰围健康风险解读','科学设定阶段减重目标','减重健康餐盘搭配指南','选择低能量密度食物',
    '减重期间蛋白质摄入建议','减重有氧运动入门计划','减重抗阻训练实用指南','减少久坐的日常行动方案',
    '睡眠不足为何影响减重','减重行为记录与目标管理','情绪性进食识别与应对','减重平台期的调整方法',
    '预防减重后体重反弹','减重药物使用注意事项','代谢手术术后生活管理','减重成功后的体重维持'
  ]]
];

const articleExternalSources = [
  ['国家卫生健康委','www.nhc.gov.cn'],
  ['中华医学会','www.cma.org.cn'],
  ['中国疾病预防控制中心','www.chinacdc.cn']
];

function articleCreatedAt(index) {
  const date = new Date(Date.UTC(2026, 6, 26, 15, 38, 20) - index * 697 * 60 * 1000);
  const pad = value => String(value).padStart(2, '0');
  return `${date.getUTCFullYear()}/${pad(date.getUTCMonth() + 1)}/${pad(date.getUTCDate())} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`;
}

const articleRows = articleDiseaseCatalog.flatMap(([disease, titles], diseaseIndex) => {
  const count = diseaseIndex < 5 ? 16 : 15;
  return titles.slice(0, count).map((title, localIndex) => ({ disease, title, diseaseIndex, localIndex }));
}).map((article, index) => {
  const external = index % 7 === 5;
  const source = articleExternalSources[index % articleExternalSources.length];
  return {
    id: index + 1,
    disease: article.disease,
    title: article.title,
    sourceType: external ? '权威转载' : '本地创建',
    sourceName: external ? source[0] : '--',
    sourceLink: external ? source[1] : '--',
    plans: (article.localIndex * 3 + article.diseaseIndex) % 10,
    status: index % 11 === 8 ? '未发布' : '已发布',
    creator: '张海明',
    createdAt: articleCreatedAt(index)
  };
});

const articleState = {
  query: '',
  page: 1,
  size: 20
};

function buildArticlePage() {
  const page = document.createElement('section');
  page.id = 'articlePage';
  page.className = 'article-page';
  page.hidden = true;
  page.innerHTML = `
    <section class="article-card">
      <header class="article-toolbar">
        <label class="article-search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m15.5 15.5 4.5 4.5"></path></svg>
          <input id="articleSearch" type="search" placeholder="搜索名称" autocomplete="off">
        </label>
        <button class="article-toolbar-icon settings" type="button" id="articleColumns" aria-label="显示设置" title="显示设置">
          <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-article-settings"></use></svg>
        </button>
        <span class="article-toolbar-spacer"></span>
        <button class="article-toolbar-icon wechat" type="button" id="articleWechatSync" aria-label="微信同步" title="微信同步">
          <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wechat-sync"></use></svg>
        </button>
        <span class="article-toolbar-separator" aria-hidden="true"></span>
        <button class="article-add" type="button" id="articleAdd">
          <span class="sparkle" aria-hidden="true">✦</span>
          <span>新建文章</span>
          <span class="arrow" aria-hidden="true"></span>
        </button>
      </header>
      <div class="article-table-wrap">
        <table class="article-table">
          <colgroup>
            <col class="index"><col class="title"><col class="source-type"><col class="source-name"><col class="source-link">
            <col class="plan"><col class="status"><col class="creator"><col class="time"><col class="actions">
          </colgroup>
          <thead><tr>
            <th>序号</th><th>文章名称</th><th>来源类型</th><th>来源名称</th><th>来源链接</th>
            <th>绑定方案</th><th>状态</th><th>创建人员</th><th>创建时间</th><th>操作</th>
          </tr></thead>
          <tbody id="articleTableBody"></tbody>
        </table>
        <div class="article-empty" id="articleEmpty" hidden>暂无符合条件的文章</div>
      </div>
      <footer class="article-pagination">
        <span id="articleTotal">共 125 条</span>
        <button id="articlePrev" type="button" aria-label="上一页">‹</button>
        <div class="article-page-numbers" id="articlePageNumbers"></div>
        <button id="articleNext" type="button" aria-label="下一页">›</button>
        <label class="article-size">
          <select id="articlePageSize" aria-label="每页条数">
            <option value="20">20 条/页</option>
          </select><i aria-hidden="true"></i>
        </label>
        <span>跳至</span>
        <input class="article-jump" id="articleJump" type="number" min="1" aria-label="跳转页码">
        <span>页</span>
      </footer>
    </section>`;
  document.querySelector('.main-content').appendChild(page);
  return page;
}

const articlePage = buildArticlePage();
const articleBody = articlePage.querySelector('#articleTableBody');

function articleToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(articleToast.timer);
  articleToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function filteredArticles() {
  const query = articleState.query.trim().toLowerCase();
  return articleRows.filter(row => !query || row.title.toLowerCase().includes(query));
}

function articlePaginationItems(pageCount, currentPage) {
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, index) => index + 1);
  if (currentPage <= 4) return [1, 2, 3, 4, 5, 'ellipsis', pageCount];
  if (currentPage >= pageCount - 3) {
    return [1, 'ellipsis', pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount];
  }
  return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', pageCount];
}

function renderArticles() {
  const rows = filteredArticles();
  const pageCount = Math.max(1, Math.ceil(rows.length / articleState.size));
  articleState.page = Math.min(articleState.page, pageCount);
  const start = (articleState.page - 1) * articleState.size;
  const visibleRows = rows.slice(start, start + articleState.size);

  articleBody.innerHTML = visibleRows.map((row, index) => `
    <tr>
      <td>${start + index + 1}</td>
      <td><span class="article-title" title="${row.title}">${row.title}</span></td>
      <td>${row.sourceType}</td>
      <td>${row.sourceName}</td>
      <td>${row.sourceLink}</td>
      <td>${row.plans}</td>
      <td><span class="article-status${row.status === '未发布' ? ' draft' : ''}">${row.status}</span></td>
      <td>${row.creator}</td>
      <td>${row.createdAt}</td>
      <td>
        <div class="article-actions">
          <button type="button" data-article-action="预览" data-id="${row.id}">预览</button>
          <button type="button" data-article-action="编辑" data-id="${row.id}">编辑</button>
          <button type="button" data-article-action="${row.status === '未发布' ? '发布' : '下架'}" data-id="${row.id}">${row.status === '未发布' ? '发布' : '下架'}</button>
          <button class="danger" type="button" data-article-action="删除" data-id="${row.id}">删除</button>
        </div>
      </td>
    </tr>`).join('');

  articlePage.querySelector('#articleEmpty').hidden = visibleRows.length > 0;
  articlePage.querySelector('#articleTotal').textContent = `共 ${rows.length} 条`;
  articlePage.querySelector('#articlePrev').disabled = articleState.page === 1;
  articlePage.querySelector('#articleNext').disabled = articleState.page === pageCount;
  articlePage.querySelector('#articlePageNumbers').innerHTML = articlePaginationItems(pageCount, articleState.page).map(item => {
    if (item === 'ellipsis') return '<span class="article-page-ellipsis" aria-hidden="true">…</span>';
    return `<button type="button" class="${item === articleState.page ? 'active' : ''}" data-article-page="${item}">${item}</button>`;
  }).join('');
  articlePage.querySelector('#articleJump').max = pageCount;
}

function setArticleMode(enabled) {
  articlePage.hidden = !enabled;
  document.querySelector('.main-content').classList.toggle('article-mode', enabled);
  if (!enabled) return;

  document.querySelector('#pageTitle').hidden = false;
  document.querySelector('#pageTitle').textContent = '文章管理';
  document.querySelector('.customer-card').hidden = true;
  ['#performanceDashboard', '#recipePage', '#scalePage', '#assessmentReportPage'].forEach(selector => {
    const element = document.querySelector(selector);
    if (element) element.hidden = true;
  });
  articleState.page = 1;
  renderArticles();
}

articlePage.querySelector('#articleSearch').addEventListener('input', event => {
  articleState.query = event.target.value;
  articleState.page = 1;
  renderArticles();
});

articlePage.querySelector('#articlePageNumbers').addEventListener('click', event => {
  const button = event.target.closest('[data-article-page]');
  if (!button) return;
  articleState.page = Number(button.dataset.articlePage);
  renderArticles();
});

articlePage.querySelector('#articlePrev').addEventListener('click', () => {
  if (articleState.page > 1) {
    articleState.page -= 1;
    renderArticles();
  }
});

articlePage.querySelector('#articleNext').addEventListener('click', () => {
  const pageCount = Math.max(1, Math.ceil(filteredArticles().length / articleState.size));
  if (articleState.page < pageCount) {
    articleState.page += 1;
    renderArticles();
  }
});

articlePage.querySelector('#articleJump').addEventListener('change', event => {
  const pageCount = Math.max(1, Math.ceil(filteredArticles().length / articleState.size));
  const target = Math.min(pageCount, Math.max(1, Number(event.target.value) || 1));
  articleState.page = target;
  event.target.value = '';
  renderArticles();
});

articleBody.addEventListener('click', event => {
  const button = event.target.closest('[data-article-action]');
  if (!button) return;
  const row = articleRows.find(item => item.id === Number(button.dataset.id));
  articleToast(`${button.dataset.articleAction}“${row.title}”`);
});

articlePage.querySelector('#articleColumns').addEventListener('click', () => articleToast('已打开显示设置'));
articlePage.querySelector('#articleWechatSync').addEventListener('click', () => articleToast('正在同步微信内容'));
articlePage.querySelector('#articleAdd').addEventListener('click', () => articleToast('开始新建文章'));

document.querySelectorAll('.subnav button').forEach(button => {
  button.addEventListener('click', () => setArticleMode(button.dataset.page === '文章管理'));
});

document.querySelector('.nav-item.dashboard').addEventListener('click', () => setArticleMode(false));

renderArticles();
