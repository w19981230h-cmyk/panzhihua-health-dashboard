const assessmentDiseaseCatalog = [
  {
    disease:'糖尿病',
    themes:[
      ['2型糖尿病发生风险评估','发病风险'],['FINDRISC糖尿病风险评估','风险筛查'],
      ['糖尿病慢性并发症风险评估','并发症'],['糖尿病足风险分级评估','糖尿病足'],
      ['糖尿病视网膜病变风险筛查','眼底风险'],['糖尿病肾病风险评估','肾脏风险'],
      ['糖尿病低血糖风险评估','低血糖'],['糖尿病自我管理能力评估','自我管理'],
      ['糖尿病用药依从性评估','治疗依从'],['糖尿病生活质量评估','生活质量']
    ]
  },
  {
    disease:'高血压',
    themes:[
      ['高血压心血管总体风险分层','总体风险'],['家庭血压监测质量评估','血压监测'],
      ['高血压用药依从性评估','治疗依从'],['高血压靶器官损害风险评估','靶器官'],
      ['高血压盐摄入风险评估','生活方式'],['高血压合并睡眠呼吸暂停风险评估','睡眠风险'],
      ['体位性低血压风险评估','体位血压'],['高血压自我管理能力评估','自我管理'],
      ['血压异常升高预警评估','风险预警'],['高血压相关生活质量评估','生活质量']
    ]
  },
  {
    disease:'慢性肾病',
    themes:[
      ['慢性肾病高危人群筛查','风险筛查'],['KDIGO慢性肾病风险分层','风险分层'],
      ['KFRE肾衰竭风险评估','肾衰风险'],['eGFR快速下降风险评估','肾功能'],
      ['蛋白尿进展风险评估','蛋白尿'],['慢性肾病矿物质骨代谢风险评估','骨代谢'],
      ['肾性贫血风险评估','肾性贫血'],['慢性肾病容量负荷评估','容量管理'],
      ['慢性肾病用药依从性评估','治疗依从'],['慢性肾病症状负担评估','症状负担']
    ]
  },
  {
    disease:'慢阻肺',
    themes:[
      ['COPD评估测试（CAT）','症状评估'],['改良版MRC呼吸困难评估','呼吸困难'],
      ['COPD-PS风险筛查','风险筛查'],['BODE综合预后评估','预后评估'],
      ['慢阻肺急性加重风险评估','急性加重'],['吸入装置使用规范评估','吸入治疗'],
      ['尼古丁依赖程度评估','戒烟管理'],['肺康复参与准备度评估','肺康复'],
      ['慢阻肺营养风险评估','营养风险'],['慢阻肺自我管理能力评估','自我管理']
    ]
  },
  {
    disease:'心血管10年风险',
    themes:[
      ['China-PAR心血管10年风险评估','China-PAR'],['Framingham心血管风险评估','Framingham'],
      ['WHO心血管风险评估','WHO风险'],['ASCVD汇总队列风险评估','ASCVD'],
      ['SCORE2心血管风险评估','SCORE2'],['冠心病10年风险综合评估','冠心病'],
      ['脑卒中10年风险综合评估','脑卒中'],['血脂异常相关心血管风险评估','血脂风险'],
      ['吸烟相关心血管风险评估','吸烟风险'],['心血管家族史风险评估','家族史']
    ]
  },
  {
    disease:'减重管理',
    themes:[
      ['BMI与腰围综合风险评估','体格评估'],['Edmonton肥胖分期评估','肥胖分期'],
      ['减重行为准备度评估','行为准备'],['膳食行为模式评估','膳食行为'],
      ['IPAQ身体活动水平评估','身体活动'],['暴食风险筛查','进食行为'],
      ['STOP-Bang睡眠呼吸暂停风险评估','睡眠风险'],['肌少性肥胖风险评估','肌少风险'],
      ['肥胖相关代谢风险评估','代谢风险'],['减重后体重反弹风险评估','体重维持']
    ]
  }
];

const assessmentScenes=['','（初筛）','（年度随访）','（重点人群）'];
const assessmentReports=Array.from({length:200},(_,index)=>{
  const catalog=assessmentDiseaseCatalog[index%assessmentDiseaseCatalog.length];
  const sequence=Math.floor(index/assessmentDiseaseCatalog.length);
  const [theme,dimension]=catalog.themes[sequence%catalog.themes.length];
  const scene=assessmentScenes[Math.floor(sequence/catalog.themes.length)%assessmentScenes.length];
  return {
    id:`AR${String(index+1).padStart(4,'0')}`,
    disease:catalog.disease,
    name:`${theme}${scene}`,
    tags:[catalog.disease,dimension],
    scales:1+(index%3),
    output:index%7===0?'规则生成':'AI 生成',
    status:index%11===0?'未发布':'已发布',
    enabled:index%9!==0
  };
});

const assessmentState = {query:'', output:'', status:'', page:1, size:20};

function buildAssessmentReportPage(){
  const page=document.createElement('section');
  page.id='assessmentReportPage';
  page.className='assessment-report-page';
  page.hidden=true;
  page.innerHTML=`
    <section class="assessment-report-card">
      <header class="assessment-toolbar">
        <label class="assessment-search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m15.5 15.5 4.5 4.5"></path></svg>
          <input id="assessmentSearch" type="search" placeholder="评估标题" autocomplete="off">
        </label>
        <div class="assessment-dropdown" data-assessment-dropdown="output">
          <button class="assessment-dropdown-trigger placeholder" id="assessmentOutput" type="button" aria-haspopup="listbox" aria-expanded="false">
            <span>输出报告&nbsp;&nbsp;请选择</span><i aria-hidden="true"></i>
          </button>
          <div class="assessment-dropdown-menu" role="listbox" aria-label="输出报告" hidden>
            <button class="assessment-dropdown-option selected placeholder" type="button" role="option" aria-selected="true" data-value="">输出报告&nbsp;&nbsp;请选择</button>
            <button class="assessment-dropdown-option" type="button" role="option" aria-selected="false" data-value="AI 生成">AI 生成</button>
            <button class="assessment-dropdown-option" type="button" role="option" aria-selected="false" data-value="规则生成">规则生成</button>
          </div>
        </div>
        <div class="assessment-dropdown" data-assessment-dropdown="status">
          <button class="assessment-dropdown-trigger placeholder" id="assessmentStatus" type="button" aria-haspopup="listbox" aria-expanded="false">
            <span>状态&nbsp;&nbsp;请选择</span><i aria-hidden="true"></i>
          </button>
          <div class="assessment-dropdown-menu" role="listbox" aria-label="状态" hidden>
            <button class="assessment-dropdown-option selected placeholder" type="button" role="option" aria-selected="true" data-value="">状态&nbsp;&nbsp;请选择</button>
            <button class="assessment-dropdown-option" type="button" role="option" aria-selected="false" data-value="已发布">已发布</button>
            <button class="assessment-dropdown-option" type="button" role="option" aria-selected="false" data-value="未发布">未发布</button>
          </div>
        </div>
        <button class="assessment-add" id="assessmentAdd" type="button"><b aria-hidden="true">＋</b>添加评估</button>
      </header>
      <div class="assessment-table-wrap">
        <table class="assessment-table">
          <colgroup><col class="name"><col class="scales"><col class="output"><col class="status"><col class="self"><col class="actions"></colgroup>
          <thead><tr>
            <th>评估名称</th><th>关联量表</th><th>输出报告</th><th>状态</th>
            <th><span class="assessment-help-title">开放自主评估 <button type="button" aria-label="自主评估说明" data-assessment-help>?</button></span></th>
            <th>操作</th>
          </tr></thead>
          <tbody id="assessmentTableBody"></tbody>
        </table>
        <div class="assessment-empty" id="assessmentEmpty" hidden>暂无符合条件的评估报告</div>
      </div>
      <footer class="assessment-pagination">
        <span id="assessmentTotal">共 200 条</span>
        <button class="assessment-page-arrow" id="assessmentPrev" type="button" aria-label="上一页">‹</button>
        <div class="assessment-page-numbers" id="assessmentPageNumbers"></div>
        <button class="assessment-page-arrow" id="assessmentNext" type="button" aria-label="下一页">›</button>
        <label class="assessment-size"><select aria-label="每页条数"><option value="20">20 条/页</option></select><i></i></label>
      </footer>
    </section>`;
  document.querySelector('.main-content').appendChild(page);
  return page;
}

const assessmentPage=buildAssessmentReportPage();
const assessmentBody=assessmentPage.querySelector('#assessmentTableBody');

function assessmentToast(message){
  const toast=document.querySelector('#toast');
  toast.textContent=message;
  toast.classList.add('show');
  clearTimeout(assessmentToast.timer);
  assessmentToast.timer=setTimeout(()=>toast.classList.remove('show'),1800);
}

function filteredAssessmentReports(){
  const query=assessmentState.query.trim().toLowerCase();
  return assessmentReports.filter(row=>
    (!query||[row.name,row.disease,...row.tags].some(value=>value.toLowerCase().includes(query)))&&
    (!assessmentState.output||row.output===assessmentState.output)&&
    (!assessmentState.status||row.status===assessmentState.status)
  );
}

function assessmentSwitch(row,index){
  return `<button class="assessment-switch${row.enabled?' checked':''}" type="button" role="switch" aria-checked="${row.enabled}" aria-label="${row.enabled?'关闭':'开放'}${row.name}自主评估" data-assessment-toggle="${index}"><span></span></button>`;
}

function renderAssessmentReports(){
  const rows=filteredAssessmentReports();
  const pages=Math.max(1,Math.ceil(rows.length/assessmentState.size));
  assessmentState.page=Math.min(assessmentState.page,pages);
  const start=(assessmentState.page-1)*assessmentState.size;
  const visible=rows.slice(start,start+assessmentState.size);
  assessmentBody.innerHTML=visible.map(row=>{
    const sourceIndex=assessmentReports.indexOf(row);
    return `<tr>
      <td><div class="assessment-name"><span title="${row.name}">${row.name}</span><div>${row.tags.map((tag,index)=>`<em class="${index===0&&tag==='预置'?'blue':''}">${tag}</em>`).join('')}</div></div></td>
      <td>${row.scales} 张量表</td>
      <td>${row.output}</td>
      <td><span class="assessment-status ${row.status==='未发布'?'draft':''}"><i></i>${row.status}</span></td>
      <td>${assessmentSwitch(row,sourceIndex)}</td>
      <td><div class="assessment-actions"><button type="button" data-assessment-action="编辑" data-index="${sourceIndex}">编辑</button><button type="button" data-assessment-action="更多" data-index="${sourceIndex}">更多</button></div></td>
    </tr>`;
  }).join('');
  assessmentPage.querySelector('#assessmentEmpty').hidden=visible.length>0;
  assessmentPage.querySelector('#assessmentTotal').textContent=`共 ${rows.length} 条`;
  assessmentPage.querySelector('#assessmentPrev').disabled=assessmentState.page===1;
  assessmentPage.querySelector('#assessmentNext').disabled=assessmentState.page===pages;
  const pageValues=assessmentPageValues(pages,assessmentState.page);
  assessmentPage.querySelector('#assessmentPageNumbers').innerHTML=pageValues.map(value=>
    value==='…'
      ?'<span class="assessment-page-ellipsis">…</span>'
      :`<button type="button" class="${assessmentState.page===value?'active':''}" data-assessment-page="${value}">${value}</button>`
  ).join('');
}

function assessmentPageValues(total,current){
  if(total<=7)return Array.from({length:total},(_,index)=>index+1);
  const values=[1];
  const start=Math.max(2,current-1);
  const end=Math.min(total-1,current+1);
  if(start>2)values.push('…');
  for(let page=start;page<=end;page++)values.push(page);
  if(end<total-1)values.push('…');
  values.push(total);
  return values;
}

function setAssessmentReportMode(enabled){
  assessmentPage.hidden=!enabled;
  document.querySelector('.main-content').classList.toggle('assessment-report-mode',enabled);
  if(enabled){
    document.querySelector('#pageTitle').hidden=false;
    document.querySelector('#pageTitle').textContent='评估报告';
    document.querySelector('.customer-card').hidden=true;
    const dashboard=document.querySelector('#performanceDashboard');
    const recipe=document.querySelector('#recipePage');
    const scale=document.querySelector('#scalePage');
    if(dashboard)dashboard.hidden=true;
    if(recipe)recipe.hidden=true;
    if(scale)scale.hidden=true;
    assessmentPage.scrollTop=0;
    renderAssessmentReports();
  }
}

assessmentPage.querySelector('#assessmentSearch').addEventListener('input',event=>{
  assessmentState.query=event.target.value;
  assessmentState.page=1;
  renderAssessmentReports();
});
function closeAssessmentDropdowns(except=null){
  assessmentPage.querySelectorAll('[data-assessment-dropdown]').forEach(dropdown=>{
    if(dropdown===except)return;
    dropdown.classList.remove('open');
    dropdown.querySelector('.assessment-dropdown-trigger').setAttribute('aria-expanded','false');
    dropdown.querySelector('.assessment-dropdown-menu').hidden=true;
  });
}

assessmentPage.querySelectorAll('[data-assessment-dropdown]').forEach(dropdown=>{
  const trigger=dropdown.querySelector('.assessment-dropdown-trigger');
  const menu=dropdown.querySelector('.assessment-dropdown-menu');
  trigger.addEventListener('click',event=>{
    event.stopPropagation();
    const willOpen=!dropdown.classList.contains('open');
    closeAssessmentDropdowns(dropdown);
    dropdown.classList.toggle('open',willOpen);
    trigger.setAttribute('aria-expanded',String(willOpen));
    menu.hidden=!willOpen;
  });
  menu.addEventListener('click',event=>{
    const option=event.target.closest('[data-value]');
    if(!option)return;
    const value=option.dataset.value;
    dropdown.querySelectorAll('[data-value]').forEach(item=>{
      const selected=item===option;
      item.classList.toggle('selected',selected);
      item.setAttribute('aria-selected',String(selected));
    });
    trigger.querySelector('span').innerHTML=option.innerHTML;
    trigger.classList.toggle('placeholder',value==='');
    if(dropdown.dataset.assessmentDropdown==='output')assessmentState.output=value;
    if(dropdown.dataset.assessmentDropdown==='status')assessmentState.status=value;
    assessmentState.page=1;
    closeAssessmentDropdowns();
    renderAssessmentReports();
  });
});

document.addEventListener('click',event=>{
  if(!event.target.closest('[data-assessment-dropdown]'))closeAssessmentDropdowns();
});

document.addEventListener('keydown',event=>{
  if(event.key==='Escape')closeAssessmentDropdowns();
});
assessmentPage.querySelector('#assessmentAdd').addEventListener('click',()=>assessmentToast('开始添加评估'));
assessmentPage.querySelector('[data-assessment-help]').addEventListener('click',()=>assessmentToast('开启后，患者可自主发起并完成该评估'));
assessmentBody.addEventListener('click',event=>{
  const toggle=event.target.closest('[data-assessment-toggle]');
  if(toggle){
    const row=assessmentReports[Number(toggle.dataset.assessmentToggle)];
    row.enabled=!row.enabled;
    renderAssessmentReports();
    assessmentToast(row.enabled?'已开放自主评估':'已关闭自主评估');
    return;
  }
  const action=event.target.closest('[data-assessment-action]');
  if(action)assessmentToast(`${action.dataset.assessmentAction}“${assessmentReports[Number(action.dataset.index)].name}”`);
});
assessmentPage.querySelector('#assessmentPrev').addEventListener('click',()=>{if(assessmentState.page>1){assessmentState.page--;renderAssessmentReports()}});
assessmentPage.querySelector('#assessmentNext').addEventListener('click',()=>{
  const pages=Math.max(1,Math.ceil(filteredAssessmentReports().length/assessmentState.size));
  if(assessmentState.page<pages){assessmentState.page++;renderAssessmentReports()}
});
assessmentPage.querySelector('#assessmentPageNumbers').addEventListener('click',event=>{
  const button=event.target.closest('[data-assessment-page]');
  if(button){assessmentState.page=Number(button.dataset.assessmentPage);renderAssessmentReports()}
});

document.querySelectorAll('.subnav button').forEach(button=>button.addEventListener('click',()=>setAssessmentReportMode(button.dataset.page==='评估报告')));
document.querySelector('.nav-item.dashboard').addEventListener('click',()=>setAssessmentReportMode(false));

renderAssessmentReports();
