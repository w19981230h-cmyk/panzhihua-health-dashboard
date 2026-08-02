const legacyMedicalScaleCatalog = [
  ['高血压',[
    '高血压患者随访管理量表',
    'ASCVD汇总队列方程（PCE）10年风险评估',
    'Framingham一般心血管风险评分',
    'Hill-Bone高血压治疗依从性量表',
    '高血压自我照护量表（HBP-SCP）',
    '高血压知识水平量表（HK-LS）',
    'Morisky用药依从性量表8项版（MMAS-8）',
    '国际体力活动问卷短版（IPAQ-SF）',
    '匹兹堡睡眠质量指数（PSQI）',
    '患者健康问卷抑郁量表（PHQ-9）'
  ]],
  ['糖尿病',[
    '芬兰糖尿病风险评分（FINDRISC）',
    'ADA 2型糖尿病风险测试',
    '糖尿病自我管理行为量表（SDSCA）',
    '糖尿病痛苦量表17项版（DDS-17）',
    '糖尿病问题领域量表（PAID）',
    '糖尿病赋能量表短版（DES-SF）',
    '糖尿病知识问卷24项版（DKQ-24）',
    '糖尿病特异性生活质量量表（ADDQoL-19）',
    '低血糖恐惧量表Ⅱ（HFS-II）',
    '世界卫生组织幸福感指数（WHO-5）'
  ]],
  ['冠心病',[
    '西雅图心绞痛量表19项版（SAQ-19）',
    '西雅图心绞痛量表简版（SAQ-7）',
    '加拿大心血管学会心绞痛分级（CCS）',
    '杜克活动状态指数（DASI）',
    'Rose心绞痛问卷',
    'MacNew心脏病生活质量问卷',
    'HeartQoL缺血性心脏病生活质量量表',
    'GRACE 2.0急性冠脉综合征风险评分',
    'TIMI不稳定心绞痛/NSTEMI风险评分',
    'EuroQol五维健康量表（EQ-5D-5L）'
  ]],
  ['脑卒中',[
    '美国国立卫生研究院卒中量表（NIHSS）',
    '改良美国国立卫生研究院卒中量表（mNIHSS）',
    '改良Rankin量表（mRS）',
    'Barthel指数（BI）',
    'Fugl-Meyer运动功能评定量表（FMA）',
    'Berg平衡量表（BBS）',
    '蒙特利尔认知评估量表（MoCA）',
    '卒中影响量表（SIS）',
    '进食评估工具10项版（EAT-10）',
    '卒中后抑郁筛查量表（PHQ-9）'
  ]],
  ['COPD',[
    '慢性阻塞性肺疾病评估测试（CAT）',
    '改良英国医学研究委员会呼吸困难量表（mMRC）',
    '临床COPD问卷（CCQ）',
    '圣乔治呼吸问卷（SGRQ）',
    'BODE多维预后指数',
    'ADO预后指数',
    'DOSE疾病严重度指数',
    'DECAF急性加重死亡风险评分',
    'COPD急性加重症状日记（EXACT-PRO）',
    '医院焦虑抑郁量表（HADS）'
  ]],
  ['慢性肾病CKD',[
    '肾脏疾病生活质量量表（KDQOL-36）',
    '慢性肾病自我管理量表（CKD-SM）',
    '肾脏疾病知识调查量表（KiKS）',
    '肾脏疾病自我效能问卷（KSEQ）',
    '透析症状指数（DSI）',
    '埃德蒙顿症状评估系统肾病版（ESAS-r:Renal）',
    '营养不良-炎症评分（MIS）',
    '主观全面营养评估（SGA）',
    'FRAIL衰弱筛查量表',
    '慢性肾病抑郁筛查量表（PHQ-9）'
  ]],
  ['血脂异常',[
    'SCORE2 10年心血管风险评估',
    'SCORE2-OP老年人心血管风险评估',
    'AHA PREVENT-ASCVD风险评估',
    'ASCVD汇总队列方程（PCE）风险评估',
    'Framingham一般心血管风险评分',
    'QRISK3心血管风险评估',
    'PROCAM冠心病风险评分',
    '荷兰脂质诊所网络家族性高胆固醇血症评分（DLCN）',
    'Simon Broome家族性高胆固醇血症诊断评估',
    '他汀相关肌肉症状临床指数（SAMS-CI）'
  ]],
  ['肥胖/减重管理',[
    '埃德蒙顿肥胖分期系统（EOSS）',
    'EOSS-2肥胖并发症风险筛查工具',
    '成人体重指数（BMI）肥胖分级评估',
    '腰围与中心性肥胖风险分层评估',
    '体重对生活质量影响量表简版（IWQOL-Lite）',
    '三因素饮食问卷修订18项版（TFEQ-R18）',
    '暴食量表（BES）',
    '荷兰进食行为问卷（DEBQ）',
    '耶鲁食物成瘾量表2.0（YFAS 2.0）',
    '体重管理自我效能生活方式问卷短版（WEL-SF）'
  ]]
];

const medicalScaleCatalog = [
  ['高血压',[
    '国家基本公共卫生高血压患者随访服务记录表','家庭血压监测7日记录表','诊室血压规范测量记录表',
    '高血压分级与心血管危险分层评估','ASCVD汇总队列方程（PCE）10年风险评估','Hill-Bone高血压治疗依从性量表',
    '高血压自我照护量表（HBP-SCP）','高血压知识水平量表（HK-LS）','Morisky用药依从性量表8项版（MMAS-8）',
    '国际体力活动问卷短版（IPAQ-SF）','匹兹堡睡眠质量指数（PSQI）','患者健康问卷抑郁量表（PHQ-9）',
    '广泛性焦虑障碍量表（GAD-7）','世界卫生组织幸福感指数（WHO-5）'
  ]],
  ['糖尿病',[
    '芬兰糖尿病风险评分（FINDRISC）','ADA 2型糖尿病风险测试','国家基本公共卫生2型糖尿病患者随访服务记录表',
    '糖尿病自我管理行为量表（SDSCA）','糖尿病痛苦量表17项版（DDS-17）','糖尿病问题领域量表（PAID）',
    '糖尿病赋能量表短版（DES-SF）','糖尿病知识问卷24项版（DKQ-24）','糖尿病特异性生活质量量表（ADDQoL-19）',
    '低血糖恐惧量表Ⅱ（HFS-II）','Clarke低血糖感知受损问卷','密歇根糖尿病神经病变筛查量表（MNSI）',
    '糖尿病足溃疡风险分级评估','糖尿病治疗满意度问卷（DTSQ）','患者健康问卷抑郁量表（PHQ-9）'
  ]],
  ['慢阻肺',[
    '慢性阻塞性肺疾病评估测试（CAT）','改良英国医学研究委员会呼吸困难量表（mMRC）','临床COPD问卷（CCQ）',
    '圣乔治呼吸问卷（SGRQ）','BODE多维预后指数','ADO预后指数','DOSE疾病严重度指数','DECAF急性加重死亡风险评分',
    'COPD急性加重症状日记（EXACT-PRO）','慢阻肺急性加重风险评估表','吸入装置使用技术评估清单',
    '医院焦虑抑郁量表（HADS）','匹兹堡睡眠质量指数（PSQI）'
  ]],
  ['慢性肾脏病',[
    '肾脏疾病生活质量量表（KDQOL-36）','慢性肾病自我管理量表（CKD-SM）','肾脏疾病知识调查量表（KiKS）',
    '肾脏疾病自我效能问卷（KSEQ）','CKD-EPI估算肾小球滤过率评估','肾衰竭风险方程（KFRE）','透析症状指数（DSI）',
    '埃德蒙顿症状评估系统肾病版（ESAS-r:Renal）','营养不良-炎症评分（MIS）','主观全面营养评估（SGA）',
    'FRAIL衰弱筛查量表','5-D瘙痒量表','透析患者液体摄入依从性量表','慢性肾病抑郁筛查量表（PHQ-9）'
  ]],
  ['冠心病',[
    '西雅图心绞痛量表19项版（SAQ-19）','西雅图心绞痛量表简版（SAQ-7）','加拿大心血管学会心绞痛分级（CCS）',
    '杜克活动状态指数（DASI）','Rose心绞痛问卷','MacNew心脏病生活质量问卷','HeartQoL缺血性心脏病生活质量量表',
    'GRACE 2.0急性冠脉综合征风险评分','TIMI不稳定心绞痛/NSTEMI风险评分','EuroQol五维健康量表（EQ-5D-5L）',
    '心脏康复运动风险分层评估','患者健康问卷抑郁量表（PHQ-9）','广泛性焦虑障碍量表（GAD-7）'
  ]],
  ['脑卒中',[
    '美国国立卫生研究院卒中量表（NIHSS）','改良美国国立卫生研究院卒中量表（mNIHSS）','改良Rankin量表（mRS）',
    'Barthel指数（BI）','Fugl-Meyer运动功能评定量表（FMA）','Berg平衡量表（BBS）','蒙特利尔认知评估量表（MoCA）',
    '卒中影响量表（SIS）','进食评估工具10项版（EAT-10）','卒中后抑郁筛查量表（PHQ-9）','洼田饮水试验',
    'Morse跌倒风险评估量表','简易营养评价法短表（MNA-SF）','Zarit照顾者负担量表（ZBI）','卒中患者自我效能量表（SSEQ）'
  ]],
  ['肺癌',[
    '欧洲癌症研究与治疗组织生命质量核心量表（EORTC QLQ-C30）','肺癌特异生命质量量表（EORTC QLQ-LC13）',
    '癌症治疗功能评价肺癌量表（FACT-L）','安德森症状评估量表肺癌模块（MDASI-LC）','美国东部肿瘤协作组体力状况评分（ECOG-PS）',
    'Karnofsky功能状态评分（KPS）','数字疼痛评分量表（NRS）','患者主观整体营养评估（PG-SGA）',
    '医院焦虑抑郁量表（HADS）','肺癌患者症状负担量表（LCSS）','患者报告结局不良事件标准（PRO-CTCAE）',
    'Fagerström尼古丁依赖测试（FTND）'
  ]],
  ['结直肠癌',[
    '欧洲癌症研究与治疗组织生命质量核心量表（EORTC QLQ-C30）','结直肠癌特异生命质量量表（EORTC QLQ-CR29）',
    '癌症治疗功能评价结直肠癌量表（FACT-C）','低位前切除综合征评分（LARS）','Wexner肛门失禁评分','Bristol大便性状量表',
    '美国东部肿瘤协作组体力状况评分（ECOG-PS）','患者主观整体营养评估（PG-SGA）','数字疼痛评分量表（NRS）',
    '医院焦虑抑郁量表（HADS）','造口患者自我效能量表（SSES）','造口生活质量量表（Stoma-QOL）',
    '患者报告结局不良事件标准（PRO-CTCAE）'
  ]],
  ['超重/肥胖',[
    '埃德蒙顿肥胖分期系统（EOSS）','EOSS-2肥胖并发症风险筛查工具','成人体重指数（BMI）肥胖分级评估',
    '腰围与中心性肥胖风险分层评估','体重对生活质量影响量表简版（IWQOL-Lite）','三因素饮食问卷修订18项版（TFEQ-R18）',
    '暴食量表（BES）','荷兰进食行为问卷（DEBQ）','耶鲁食物成瘾量表2.0（YFAS 2.0）',
    '体重管理自我效能生活方式问卷短版（WEL-SF）','STOP-Bang阻塞性睡眠呼吸暂停筛查问卷',
    '国际体力活动问卷短版（IPAQ-SF）','患者健康问卷抑郁量表（PHQ-9）','24小时膳食回顾调查表'
  ]]
];

const scaleCreators={
  高血压:['李晓蓉','王建国','陈雪梅'],糖尿病:['周敏','刘蓉','何志强'],慢阻肺:['杨军','罗芳','张涛'],
  慢性肾脏病:['杜琳','蒋伟','赵倩'],冠心病:['徐明','郭静','韩磊'],脑卒中:['郑华','冯雨','邓凯'],
  肺癌:['唐丽','宋健','彭欣'],结直肠癌:['吴涛','秦芳','谢晨'],'超重/肥胖':['林佳','马莉','叶青']
};
const versionLabels=['V1.0','V1.1','V2.0','V2.1'];

const scaleRows=medicalScaleCatalog.flatMap(([disease,names],diseaseIndex)=>names.map((scaleName,localIndex)=>({
  disease,
  name:`【${disease}】${scaleName}`,
  plans:1+(localIndex*2+diseaseIndex)%7,
  tasks:18+((localIndex+2)*(diseaseIndex+4)*11)%286,
  version:versionLabels[(localIndex+diseaseIndex)%versionLabels.length],
  versions:1+(localIndex+diseaseIndex)%4,
  creator:scaleCreators[disease][localIndex%scaleCreators[disease].length],
  createdAt:`2026/${String(7-Math.floor(diseaseIndex/3)).padStart(2,'0')}/${String(26-(localIndex%18)).padStart(2,'0')} ${String(8+(localIndex%9)).padStart(2,'0')}:${String(10+(localIndex*7)%50).padStart(2,'0')}:00`,
  published:localIndex<names.length-1,
  enabled:localIndex<names.length-1&&localIndex%6!==5
})));

scaleRows[0].children=[{
  ...scaleRows[0],
  plans:'',
  versions:'--',
  children:undefined
}];

const scaleState = {query:'',disease:'',page:1,size:20,expanded:new Set([0])};

function buildScalePage(){
  const page=document.createElement('section');
  page.id='scalePage';
  page.className='scale-page';
  page.hidden=true;
  page.innerHTML=`
    <section class="scale-card">
      <header class="scale-toolbar">
        <label class="scale-search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m15.5 15.5 4.5 4.5"></path></svg>
          <input id="scaleSearch" type="search" placeholder="搜索名称" autocomplete="off">
        </label>
        <label class="scale-disease-filter">
          <select id="scaleDiseaseFilter" aria-label="按病种筛选">
            <option value="">全部病种（${scaleRows.length}）</option>
            ${medicalScaleCatalog.map(([disease,names])=>`<option value="${disease}">${disease}（${names.length}）</option>`).join('')}
          </select><i aria-hidden="true"></i>
        </label>
        <button class="scale-column-button" type="button" aria-label="管理显示列">
          <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-columns"></use></svg>
        </button>
        <div class="scale-create-wrap">
          <button class="scale-create-button" id="scaleCreateButton" type="button" aria-haspopup="menu" aria-expanded="false">
            <span class="scale-sparkles" aria-hidden="true">✦</span><span>新建量表</span><i aria-hidden="true"></i>
          </button>
          <div class="scale-create-menu" id="scaleCreateMenu" role="menu" hidden>
            <button type="button" role="menuitem" data-create-scale="blank">新建空白量表</button>
            <button type="button" role="menuitem" data-create-scale="template">从模板创建</button>
          </div>
        </div>
      </header>
      <div class="scale-table-wrap">
        <table class="scale-table">
          <colgroup><col class="name"><col class="plans"><col class="tasks"><col class="version"><col class="versions"><col class="creator"><col class="created"><col class="status"><col class="enabled"><col class="actions"></colgroup>
          <thead><tr><th>名称</th><th>绑定方案</th><th>任务数</th><th>版本号</th><th>版本数量</th><th>创建人员</th><th>创建时间</th><th>状态</th><th>启用版本</th><th>操作</th></tr></thead>
          <tbody id="scaleTableBody"></tbody>
        </table>
        <div class="scale-empty" id="scaleEmpty" hidden>暂无符合条件的量表</div>
      </div>
      <footer class="scale-pagination">
        <span id="scaleTotal">共 ${scaleRows.length} 条</span>
        <button class="scale-page-arrow" id="scalePrev" type="button" aria-label="上一页">‹</button>
        <div class="scale-page-numbers" id="scalePageNumbers"></div>
        <button class="scale-page-arrow" id="scaleNext" type="button" aria-label="下一页">›</button>
        <label class="scale-size"><select aria-label="每页条数"><option value="20">20 条/页</option></select><i></i></label>
        <span>跳至</span><input id="scaleJump" type="number" min="1" aria-label="跳转页码"><span>页</span>
      </footer>
    </section>`;
  document.querySelector('.main-content').appendChild(page);
  return page;
}

const scalePage=buildScalePage();
const scaleBody=scalePage.querySelector('#scaleTableBody');

function scaleStatus(row){
  return `<span class="scale-status ${row.published?'published':'draft'}"><i></i>${row.published?'已发布':'未发布'}</span>`;
}

function scaleSwitch(row,index,child=false){
  return `<button class="scale-switch${row.enabled?' checked':''}" type="button" role="switch" aria-checked="${row.enabled}" aria-label="${row.enabled?'停用':'启用'}${row.name}" data-scale-toggle="${index}"${child?' data-child="true"':''}><span></span></button>`;
}

function scaleActions(row,index,child=false){
  if(child){
    return `<div class="scale-child-actions">
      <button type="button" aria-label="查看${row.name}">
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 3.5H4.8a1.3 1.3 0 0 0-1.3 1.3V7M13 3.5h2.2a1.3 1.3 0 0 1 1.3 1.3V7M7 16.5H4.8a1.3 1.3 0 0 1-1.3-1.3V13M13 16.5h2.2a1.3 1.3 0 0 0 1.3-1.3V13"/><circle cx="10" cy="10" r="2.25"/></svg>
      </button>
      <button type="button" aria-label="编辑${row.name}">
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10.8 4H4.7A1.7 1.7 0 0 0 3 5.7v9.6A1.7 1.7 0 0 0 4.7 17h9.6a1.7 1.7 0 0 0 1.7-1.7V9.2"/><path d="m8.1 12.1.4-2.4 6.2-6.2a1.25 1.25 0 0 1 1.8 0 1.25 1.25 0 0 1 0 1.8l-6.2 6.2-2.2.6Z"/></svg>
      </button>
      <button class="danger" type="button" aria-label="删除${row.name}">
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 6h11M8 6V3.8h4V6m2 0-.7 10H6.7L6 6m2.4 3v4.5m3.2-4.5v4.5"/></svg>
      </button>
    </div>`;
  }
  return `<div class="scale-actions"><button class="scale-preview" type="button" data-scale-preview="${index}">预览</button><button class="scale-more" type="button" data-scale-more="${index}" aria-label="更多操作" aria-haspopup="menu" aria-expanded="false">···</button><div class="scale-action-menu" role="menu" hidden><button type="button" role="menuitem" data-scale-action="编辑">编辑</button><button type="button" role="menuitem" data-scale-action="复制">复制</button><button type="button" role="menuitem" data-scale-action="删除">删除</button></div></div>`;
}

function renderScaleRow(row,index,child=false){
  const expanded=scaleState.expanded.has(index);
  return `<tr class="${child?'scale-child-row':''}">
    <td><div class="scale-name-cell">${child?'<span class="scale-child-indent"></span>':`<button class="scale-expand${row.children?' has-children':''}" type="button" data-scale-expand="${index}" aria-label="${expanded?'收起':'展开'}${row.name}" aria-expanded="${expanded}"><i></i></button>`}<span title="${row.name}">${row.name}</span></div></td>
    <td>${row.plans}</td><td>${row.tasks}</td><td>${row.version}</td><td>${row.versions}</td><td>${row.creator}</td><td>${row.createdAt}</td>
    <td>${scaleStatus(row)}</td><td>${scaleSwitch(row,index,child)}</td><td>${scaleActions(row,index,child)}</td>
  </tr>`;
}

function filteredScales(){
  const query=scaleState.query.trim().toLowerCase();
  const diseaseMatch=medicalScaleCatalog.find(([disease])=>disease.toLowerCase()===query);
  return scaleRows.map((row,index)=>({row,index})).filter(({row})=>{
    if(scaleState.disease&&row.disease!==scaleState.disease)return false;
    if(!query)return true;
    if(diseaseMatch)return row.disease.toLowerCase()===query;
    return row.name.toLowerCase().includes(query);
  });
}

function renderScalePageNumbers(pageCount){
  const numbers=scalePage.querySelector('#scalePageNumbers');
  numbers.innerHTML=Array.from({length:pageCount},(_,index)=>`<button type="button" data-scale-page="${index+1}" class="${scaleState.page===index+1?'active':''}">${index+1}</button>`).join('');
}

function renderScales(){
  const filtered=filteredScales();
  const pageCount=Math.max(1,Math.ceil(filtered.length/scaleState.size));
  scaleState.page=Math.min(scaleState.page,pageCount);
  const visible=filtered.slice((scaleState.page-1)*scaleState.size,scaleState.page*scaleState.size);
  scaleBody.innerHTML=visible.map(({row,index})=>{
    const parent=renderScaleRow(row,index);
    const children=row.children&&scaleState.expanded.has(index)?row.children.map(child=>renderScaleRow(child,index,true)).join(''):'';
    return parent+children;
  }).join('');
  scalePage.querySelector('#scaleEmpty').hidden=visible.length>0;
  scalePage.querySelector('#scaleTotal').textContent=`共 ${filtered.length} 条`;
  scalePage.querySelector('#scalePrev').disabled=scaleState.page===1;
  scalePage.querySelector('#scaleNext').disabled=scaleState.page===pageCount;
  scalePage.querySelector('#scaleJump').max=String(pageCount);
  renderScalePageNumbers(pageCount);
}

function closeScaleMenus(){
  scalePage.querySelector('#scaleCreateMenu').hidden=true;
  scalePage.querySelector('#scaleCreateButton').setAttribute('aria-expanded','false');
  scalePage.querySelectorAll('.scale-action-menu').forEach(menu=>menu.hidden=true);
  scalePage.querySelectorAll('.scale-more').forEach(button=>button.setAttribute('aria-expanded','false'));
}

function scaleToast(message){
  const toast=document.querySelector('#toast');
  toast.textContent=message;
  toast.classList.add('show');
  clearTimeout(scaleToast.timer);
  scaleToast.timer=setTimeout(()=>toast.classList.remove('show'),1800);
}

function setScaleMode(enabled){
  scalePage.hidden=!enabled;
  document.querySelector('.main-content').classList.toggle('scale-mode',enabled);
  if(enabled){
    document.querySelector('#pageTitle').hidden=false;
    document.querySelector('#pageTitle').textContent='量表管理';
    document.querySelector('.customer-card').hidden=true;
    const recipe=document.querySelector('#recipePage');
    if(recipe)recipe.hidden=true;
    scalePage.scrollTop=0;
    renderScales();
  }
}

scalePage.querySelector('#scaleSearch').addEventListener('input',event=>{
  scaleState.query=event.target.value;
  scaleState.page=1;
  renderScales();
});

scalePage.querySelector('#scaleDiseaseFilter').addEventListener('change',event=>{
  scaleState.disease=event.target.value;
  scaleState.page=1;
  renderScales();
});

scaleBody.addEventListener('click',event=>{
  const expand=event.target.closest('[data-scale-expand]');
  if(expand){
    const index=Number(expand.dataset.scaleExpand);
    if(!scaleRows[index].children)return;
    scaleState.expanded.has(index)?scaleState.expanded.delete(index):scaleState.expanded.add(index);
    renderScales();
    return;
  }
  const toggle=event.target.closest('[data-scale-toggle]');
  if(toggle){
    const index=Number(toggle.dataset.scaleToggle);
    const row=toggle.dataset.child?scaleRows[index].children[0]:scaleRows[index];
    row.enabled=!row.enabled;
    if(scaleRows[index].children)scaleRows[index].children[0].enabled=row.enabled;
    renderScales();
    return;
  }
  const preview=event.target.closest('[data-scale-preview]');
  if(preview){
    const row=scaleRows[Number(preview.dataset.scalePreview)];
    window.dispatchEvent(new CustomEvent('open-scale-preview',{detail:{...row}}));
    return;
  }
  const more=event.target.closest('[data-scale-more]');
  if(more){
    const menu=more.nextElementSibling;
    const willOpen=menu.hidden;
    closeScaleMenus();
    menu.hidden=!willOpen;
    more.setAttribute('aria-expanded',String(willOpen));
    return;
  }
  const action=event.target.closest('[data-scale-action]');
  if(action){scaleToast(`已选择${action.dataset.scaleAction}量表`);closeScaleMenus()}
});

scalePage.querySelector('#scaleCreateButton').addEventListener('click',event=>{
  event.stopPropagation();
  const menu=scalePage.querySelector('#scaleCreateMenu');
  const willOpen=menu.hidden;
  closeScaleMenus();
  menu.hidden=!willOpen;
  event.currentTarget.setAttribute('aria-expanded',String(willOpen));
});
scalePage.querySelector('#scaleCreateMenu').addEventListener('click',event=>{
  const item=event.target.closest('[data-create-scale]');
  if(!item)return;
  scaleToast(item.dataset.createScale==='blank'?'开始新建空白量表':'请选择量表模板');
  closeScaleMenus();
});
scalePage.querySelector('.scale-column-button').addEventListener('click',()=>scaleToast('已打开显示列设置'));
scalePage.querySelector('#scalePrev').addEventListener('click',()=>{if(scaleState.page>1){scaleState.page--;renderScales()}});
scalePage.querySelector('#scaleNext').addEventListener('click',()=>{
  const pages=Math.ceil(filteredScales().length/scaleState.size);
  if(scaleState.page<pages){scaleState.page++;renderScales()}
});
scalePage.querySelector('#scalePageNumbers').addEventListener('click',event=>{
  const button=event.target.closest('[data-scale-page]');
  if(button){scaleState.page=Number(button.dataset.scalePage);renderScales()}
});
scalePage.querySelector('#scaleJump').addEventListener('change',event=>{
  const pages=Math.max(1,Math.ceil(filteredScales().length/scaleState.size));
  scaleState.page=Math.min(pages,Math.max(1,Number(event.target.value)||1));
  event.target.value='';
  renderScales();
});

document.addEventListener('click',event=>{if(!event.target.closest('.scale-actions')&&!event.target.closest('.scale-create-wrap'))closeScaleMenus()});
document.querySelectorAll('.subnav button').forEach(button=>button.addEventListener('click',()=>setScaleMode(button.dataset.page==='量表管理')));
document.querySelector('.nav-item.dashboard').addEventListener('click',()=>setScaleMode(false));

renderScales();
