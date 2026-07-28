const columns = ['姓名','就诊卡号','年龄','性别','纳管状态','手机号码','最近就诊科室','最近诊断','最近手术','最近就诊日期','已加入团队','操作'];
const managementStatuses = ['公卫已纳，医院待纳','医院已纳，公卫待纳','双方未纳管'];
const teams = ['高血压规范管理','糖尿病健康管理','心脑血管康复管理','慢阻肺随访管理','代谢综合征管理'];
const baseRows = [
  ['王建华','PZH260701','62岁','男','139****4287','心血管内科','原发性高血压（2级）','冠状动脉支架植入术','2026-07-22','高血压规范管理'],
  ['李秀英','PZH260702','58岁','女','182****2136','内分泌科','2型糖尿病','无手术史','2026-07-22','糖尿病健康管理'],
  ['张国强','PZH260703','67岁','男','135****9307','神经内科','脑梗死恢复期','颈动脉支架植入术','2026-07-21','心脑血管康复管理'],
  ['刘桂芳','PZH260704','64岁','女','130****5311','心血管内科','高血压合并冠心病','冠状动脉旁路移植术','2026-07-21','心脑血管康复管理'],
  ['陈志明','PZH260705','55岁','男','133****1232','呼吸与危重症医学科','慢性阻塞性肺疾病','无手术史','2026-07-20','慢阻肺随访管理'],
  ['杨淑兰','PZH260706','61岁','女','130****5937','内分泌科','2型糖尿病伴周围神经病变','无手术史','2026-07-20','糖尿病健康管理'],
  ['周永康','PZH260707','70岁','男','185****0963','肾内科','慢性肾脏病3期','动静脉内瘘成形术','2026-07-19','高血压规范管理'],
  ['赵春梅','PZH260708','49岁','女','156****8247','全科医学科','高脂血症','无手术史','2026-07-19','代谢综合征管理'],
  ['黄德胜','PZH260709','65岁','男','137****8912','心血管内科','冠状动脉粥样硬化性心脏病','经皮冠状动脉介入治疗','2026-07-18','心脑血管康复管理'],
  ['何玉珍','PZH260710','72岁','女','138****5621','老年医学科','高血压合并2型糖尿病','白内障超声乳化摘除术','2026-07-18','高血压规范管理'],
  ['吴建军','PZH260711','53岁','男','186****7710','内分泌科','2型糖尿病伴高脂血症','无手术史','2026-07-17','糖尿病健康管理'],
  ['徐晓梅','PZH260712','57岁','女','177****8402','心血管内科','原发性高血压（1级）','无手术史','2026-07-17','高血压规范管理'],
  ['孙启明','PZH260713','60岁','男','131****6609','消化内科','非酒精性脂肪性肝病','腹腔镜胆囊切除术','2026-07-16','代谢综合征管理'],
  ['郑丽华','PZH260714','46岁','女','159****1298','内分泌科','肥胖症合并胰岛素抵抗','无手术史','2026-07-16','代谢综合征管理'],
  ['冯志刚','PZH260715','68岁','男','136****7734','神经内科','短暂性脑缺血发作','无手术史','2026-07-15','心脑血管康复管理'],
  ['唐美琴','PZH260716','63岁','女','188****6301','呼吸与危重症医学科','慢性阻塞性肺疾病稳定期','无手术史','2026-07-14','慢阻肺随访管理'],
  ['褚文博','PZH260717','59岁','男','155****4780','心血管内科','高血压合并心房颤动','心脏射频消融术','2026-07-14','心脑血管康复管理'],
  ['卫晓燕','PZH260718','52岁','女','176****5528','内分泌科','2型糖尿病','无手术史','2026-07-13','糖尿病健康管理'],
  ['蒋伟民','PZH260719','66岁','男','132****9036','老年医学科','高血压合并高尿酸血症','无手术史','2026-07-12','高血压规范管理'],
  ['沈慧敏','PZH260720','48岁','女','180****7155','营养科','代谢综合征','无手术史','2026-07-11','代谢综合征管理'],
  ['韩志峰','PZH260721','71岁','男','137****2881','呼吸与危重症医学科','慢性阻塞性肺疾病急性加重期','无创呼吸机辅助通气','2026-07-10','慢阻肺随访管理'],
  ['杨文倩','PZH260722','54岁','女','158****9450','心血管内科','原发性高血压（2级）','无手术史','2026-07-09','高血压规范管理'],
  ['朱建国','PZH260723','69岁','男','139****6147','神经内科','脑梗死后遗症','去骨瓣减压术','2026-07-08','心脑血管康复管理'],
  ['秦素芳','PZH260724','56岁','女','181****3072','内分泌科','2型糖尿病伴视网膜病变','视网膜激光光凝术','2026-07-07','糖尿病健康管理'],
  ['尤志浩','PZH260725','45岁','男','153****8264','风湿免疫科','高尿酸血症伴痛风','无手术史','2026-07-06','代谢综合征管理'],
  ['许明霞','PZH260726','60岁','女','187****4319','肾内科','糖尿病肾病','无手术史','2026-07-05','糖尿病健康管理'],
  ['何志远','PZH260727','57岁','男','134****1906','营养科','肥胖症合并高脂血症','腹腔镜袖状胃切除术','2026-07-04','代谢综合征管理'],
  ['罗桂英','PZH260728','73岁','女','189****6742','全科医学科','高血压合并慢性心力衰竭','心脏起搏器植入术','2026-07-03','高血压规范管理']
].map((row,index)=>[...row.slice(0,4),managementStatuses[index%managementStatuses.length],...row.slice(4)]);

const state={page:1,size:10,query:'',team:'',managementStatus:[],gender:'',minAge:'',maxAge:'',visible:columns.map(()=>true)};
const $=s=>document.querySelector(s);
const head=$('#tableHead'),body=$('#tableBody'),empty=$('#emptyState');
const managementSelect=$('#managementStatusSelect');
const managementTrigger=$('#managementStatusTrigger');
const managementTags=$('#managementStatusTags');
const managementPlaceholder=$('#managementStatusPlaceholder');
const managementDropdown=$('#managementStatusDropdown');
const managementClear=$('#managementStatusClear');

function filteredRows(){
  const q=state.query.trim().toLowerCase();
  return baseRows.filter(r=>{
    const age=parseInt(r[2]);
    return (!q||[r[0],r[1],r[5]].some(v=>v.toLowerCase().includes(q)))&&
      (!state.team||r[10]===state.team)&&(!state.managementStatus.length||state.managementStatus.includes(r[4]))&&(!state.gender||r[3]===state.gender)&&
      (!state.minAge||age>=+state.minAge)&&(!state.maxAge||age<=+state.maxAge);
  });
}

function renderHead(){head.innerHTML=columns.map((c,i)=>state.visible[i]?`<th>${c}</th>`:'').join('')}
function render(){
  const rows=filteredRows(),pages=Math.max(1,Math.ceil(rows.length/state.size));
  state.page=Math.min(state.page,pages);
  const shown=rows.slice((state.page-1)*state.size,state.page*state.size);
  body.innerHTML=shown.map((r,rowIndex)=>`<tr>${r.map((v,i)=>{
    if(!state.visible[i])return '';
    if(i===4)return `<td title="${v}">${v}</td>`;
    if(i===5)return `<td><span class="phone">${v}<svg><use href="#i-eye"/></svg></span></td>`;
    return `<td title="${v}">${v}</td>`;
  }).join('')}${state.visible[11]?`<td><div class="actions"><button class="link-button record" data-name="${r[0]}">档案</button><button class="link-button group" data-name="${r[0]}">选择分组</button></div></td>`:''}</tr>`).join('');
  empty.classList.toggle('show',!shown.length);
  $('#totalText').textContent=`共 ${rows.length} 条`;
  $('#prevPage').disabled=state.page===1;$('#nextPage').disabled=state.page===pages;
  $('#pageButtons').innerHTML=Array.from({length:pages},(_,i)=>`<button class="${state.page===i+1?'active':''}" data-page="${i+1}">${i+1}</button>`).join('');
  $('#jumpPage').max=pages;
}
function showToast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.classList.remove('show'),1800)}
function setManagementSelectOpen(open){
  managementSelect.classList.toggle('open',open);
  managementDropdown.hidden=!open;
  managementTrigger.setAttribute('aria-expanded',String(open));
}
function updateManagementSelect(){
  const shown=state.managementStatus.slice(0,2);
  managementTags.innerHTML=shown.map(value=>`<span class="ant-select-selection-item" title="${value}"><span>${value}</span><button type="button" data-remove-status="${value}" aria-label="删除${value}">×</button></span>`).join('')+
    (state.managementStatus.length>2?`<span class="ant-select-selection-rest">+${state.managementStatus.length-2}</span>`:'');
  managementPlaceholder.hidden=state.managementStatus.length>0;
  managementClear.hidden=state.managementStatus.length===0;
  managementDropdown.querySelectorAll('.ant-select-option').forEach(option=>{
    const selected=state.managementStatus.includes(option.dataset.value);
    option.classList.toggle('selected',selected);
    option.setAttribute('aria-selected',String(selected));
  });
}
function toggleManagementStatus(value){
  state.managementStatus=state.managementStatus.includes(value)
    ?state.managementStatus.filter(item=>item!==value)
    :[...state.managementStatus,value];
  state.page=1;
  updateManagementSelect();
  render();
}
function openModal(name,type='group'){
  const patient=baseRows.find(row=>row[0]===name);
  $('#modalTitle').textContent=type==='record'?`${name}的患者档案`:`为${name}选择分组`;
  $('#modalBody').innerHTML=type==='record'?`<dl class="record-grid">
    <div><dt>就诊卡号</dt><dd>${patient[1]}</dd></div><div><dt>基本信息</dt><dd>${patient[2]} · ${patient[3]}</dd></div>
    <div><dt>最近科室</dt><dd>${patient[6]}</dd></div><div><dt>就诊日期</dt><dd>${patient[9]}</dd></div>
    <div class="wide"><dt>主要诊断</dt><dd>${patient[7]}</dd></div><div class="wide"><dt>手术/操作史</dt><dd>${patient[8]}</dd></div>
    <div class="wide"><dt>管理团队</dt><dd>${patient[10]}</dd></div>
  </dl>`:`<div class="team-options">${teams.map(t=>`<label class="team-option"><input type="radio" name="team" value="${t}" ${patient[10]===t?'checked':''}><span>${t}</span></label>`).join('')}</div>`;
  $('#modalBackdrop').classList.add('show');
}

renderHead();render();
$('#searchInput').addEventListener('input',e=>{state.query=e.target.value;state.page=1;render()});
$('#teamSelect').addEventListener('change',e=>{state.team=e.target.value;state.page=1;render()});
managementSelect.addEventListener('click',event=>{
  const remove=event.target.closest('[data-remove-status]');
  if(remove){event.stopPropagation();toggleManagementStatus(remove.dataset.removeStatus);return}
  const option=event.target.closest('.ant-select-option');
  if(option){event.stopPropagation();toggleManagementStatus(option.dataset.value);return}
  if(event.target.closest('#managementStatusClear')){
    event.stopPropagation();state.managementStatus=[];state.page=1;updateManagementSelect();render();return;
  }
  if(event.target.closest('.ant-select-selector'))setManagementSelectOpen(managementDropdown.hidden);
});
managementTrigger.addEventListener('keydown',event=>{
  if(event.key==='Enter'||event.key===' '){event.preventDefault();setManagementSelectOpen(managementDropdown.hidden)}
  if(event.key==='Escape')setManagementSelectOpen(false);
});
document.addEventListener('click',event=>{if(!managementSelect.contains(event.target))setManagementSelectOpen(false)});
$('#genderFilter').addEventListener('change',e=>{state.gender=e.target.value;state.page=1;render()});
['minAge','maxAge'].forEach(id=>$('#'+id).addEventListener('input',e=>{state[id]=e.target.value;state.page=1;render()}));
$('#moreFilter').addEventListener('click',()=>$('#advancedFilter').classList.toggle('open'));
$('#resetFilter').addEventListener('click',()=>{state.query=state.team=state.gender=state.minAge=state.maxAge='';state.managementStatus=[];$('#searchInput').value='';$('#teamSelect').value='';$('#genderFilter').value='';$('#minAge').value=$('#maxAge').value='';updateManagementSelect();setManagementSelectOpen(false);render()});
$('#clearSearch').addEventListener('click',()=>$('#resetFilter').click());
$('#prevPage').addEventListener('click',()=>{if(state.page>1){state.page--;render()}});$('#nextPage').addEventListener('click',()=>{const p=Math.ceil(filteredRows().length/state.size);if(state.page<p){state.page++;render()}});
$('#pageButtons').addEventListener('click',e=>{if(e.target.dataset.page){state.page=+e.target.dataset.page;render()}});
$('#pageSize').addEventListener('change',e=>{state.size=+e.target.value;state.page=1;render()});
$('#jumpPage').addEventListener('change',e=>{const p=Math.ceil(filteredRows().length/state.size);state.page=Math.max(1,Math.min(+e.target.value||1,p));render();e.target.value='' });
body.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.classList.contains('record'))openModal(b.dataset.name,'record');if(b.classList.contains('group'))openModal(b.dataset.name)});
$('#closeModal').addEventListener('click',()=>$('#modalBackdrop').classList.remove('show'));$('#modalBackdrop').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.classList.remove('show')});
$('#modalBody').addEventListener('change',e=>{if(e.target.name==='team'){showToast(`已选择“${e.target.value}”`);setTimeout(()=>$('#modalBackdrop').classList.remove('show'),350)}});
$('#columnButton').addEventListener('click',()=>{[6,7,8].forEach(i=>state.visible[i]=!state.visible[i]);renderHead();render();showToast(state.visible[6]?'已显示诊疗信息列':'已隐藏诊疗信息列')});
$('#collapseBtn').addEventListener('click',()=>$('#sidebar').classList.toggle('collapsed'));
document.querySelectorAll('.subnav button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.subnav button').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-group').forEach(x=>x.classList.remove('current'));
  document.querySelector('.nav-item.dashboard').classList.remove('active');
  btn.classList.add('active');
  btn.closest('.nav-group').classList.add('current');
  const opensPerformanceDashboard=btn.dataset.page==='单病种质效管理看板';
  setDashboardMode(opensPerformanceDashboard);
  if(!opensPerformanceDashboard)$('#pageTitle').textContent=btn.dataset.page;
  showToast(`已切换至${btn.dataset.page}`);
}));

const directListPages={
  patients:'全部患者',
  recipes:'食谱管理',
  articles:'文章管理',
  scales:'量表管理',
  assessments:'评估报告'
};

window.addEventListener('load',()=>{
  const pageName=directListPages[new URLSearchParams(window.location.search).get('page')];
  if(!pageName)return;
  const button=[...document.querySelectorAll('.subnav button')].find(item=>item.dataset.page===pageName);
  if(button)button.click();
});
document.querySelectorAll('.nav-toggle').forEach(btn=>btn.addEventListener('click',()=>{
  const group=btn.closest('.nav-group');
  const open=group.classList.toggle('open');
  btn.setAttribute('aria-expanded',String(open));
  btn.querySelector('b').textContent='⌃';
}));
document.querySelector('.nav-item.dashboard').addEventListener('click',e=>{
  document.querySelectorAll('.subnav button').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-group').forEach(x=>x.classList.remove('current'));
  e.currentTarget.classList.add('active');
  $('#pageTitle').textContent='工作台';
  setDashboardMode(false);
  showToast('已切换至工作台');
});

function buildDashboardSelect(label,options,filterKey=''){
  return `<div class="dash-ant-select dash-filter" data-selected-index="0"${filterKey?` data-filter-key="${filterKey}"`:''}>
    <button class="dash-ant-select-selector" type="button" role="combobox" aria-label="${label}" aria-haspopup="listbox" aria-expanded="false">
      <span class="dash-ant-select-value">${label}</span><span class="dash-ant-select-arrow" aria-hidden="true"></span>
    </button>
    <div class="dash-ant-select-dropdown" role="listbox" hidden>
      ${options.map((option,index)=>`<button class="dash-ant-select-option${index===0?' selected':''}" type="button" role="option" data-index="${index}" data-value="${option}" aria-selected="${index===0}"><span>${option}</span><i aria-hidden="true">✓</i></button>`).join('')}
    </div>
  </div>`;
}

const dashboardDrilldownData={
  city:['全市','东区','西区','仁和区','米易县','盐边县'],
  medicalGroup:{
    全市:['医疗集团','攀枝花市紧密型城市医疗集团','攀枝花学院附属医院医联体'],
    东区:['医疗集团','攀枝花市紧密型城市医疗集团','攀枝花学院附属医院医联体'],
    西区:['医疗集团','攀枝花市紧密型城市医疗集团'],
    仁和区:['医疗集团','攀枝花市紧密型城市医疗集团'],
    米易县:['医疗集团','攀枝花市县域医疗共同体'],
    盐边县:['医疗集团','攀枝花市县域医疗共同体']
  },
  organization:{
    医疗集团:['机构','攀枝花市中心医院','攀枝花市中西医结合医院','攀枝花学院附属医院','仁和区人民医院'],
    攀枝花市紧密型城市医疗集团:['机构','攀枝花市中心医院','攀枝花市中西医结合医院','仁和区人民医院'],
    攀枝花学院附属医院医联体:['机构','攀枝花学院附属医院','攀枝花市第二人民医院'],
    攀枝花市县域医疗共同体:['机构','米易县人民医院','盐边县人民医院']
  },
  team:{
    机构:['团队','心血管慢病管理团队','糖尿病管理团队','呼吸慢病管理团队','家庭医生管理团队'],
    攀枝花市中心医院:['团队','心血管慢病管理团队','糖尿病管理团队','呼吸慢病管理团队'],
    攀枝花市中西医结合医院:['团队','中西医慢病联合管理团队','健康管理团队'],
    攀枝花学院附属医院:['团队','高血压管理团队','糖尿病管理团队'],
    攀枝花市第二人民医院:['团队','老年慢病管理团队'],
    仁和区人民医院:['团队','家庭医生管理团队'],
    米易县人民医院:['团队','县域慢病管理团队'],
    盐边县人民医院:['团队','县域慢病管理团队']
  },
  person:{
    团队:['个人','张医生','李医生','王医生','刘医生'],
    心血管慢病管理团队:['个人','张医生','王医生'],
    糖尿病管理团队:['个人','李医生','刘医生'],
    呼吸慢病管理团队:['个人','陈医生','赵医生'],
    中西医慢病联合管理团队:['个人','周医生','何医生'],
    健康管理团队:['个人','孙医生','杨医生'],
    高血压管理团队:['个人','张医生','陈医生'],
    老年慢病管理团队:['个人','何医生','周医生'],
    家庭医生管理团队:['个人','刘医生','赵医生'],
    县域慢病管理团队:['个人','王医生','杨医生']
  }
};

function setDashboardSelectOptions(select,options){
  select.dataset.selectedIndex='0';
  const value=options[0];
  const trigger=select.querySelector('.dash-ant-select-selector');
  trigger.setAttribute('aria-label',value);
  select.querySelector('.dash-ant-select-value').textContent=value;
  select.querySelector('.dash-ant-select-dropdown').innerHTML=options.map((option,index)=>`
    <button class="dash-ant-select-option${index===0?' selected':''}" type="button" role="option" data-index="${index}" data-value="${option}" aria-selected="${index===0}">
      <span>${option}</span><i aria-hidden="true">✓</i>
    </button>`).join('');
}

function updateDashboardDrilldown(root,changedKey){
  const order=['city','medicalGroup','organization','team','person'];
  const changedIndex=order.indexOf(changedKey);
  order.slice(changedIndex+1).forEach(key=>{
    const select=root.querySelector(`[data-filter-key="${key}"]`);
    if(!select)return;
    let parentValue='';
    if(key==='medicalGroup')parentValue=root.querySelector('[data-filter-key="city"] .dash-ant-select-value')?.textContent.trim();
    if(key==='organization')parentValue=root.querySelector('[data-filter-key="medicalGroup"] .dash-ant-select-value')?.textContent.trim();
    if(key==='team')parentValue=root.querySelector('[data-filter-key="organization"] .dash-ant-select-value')?.textContent.trim();
    if(key==='person')parentValue=root.querySelector('[data-filter-key="team"] .dash-ant-select-value')?.textContent.trim();
    const options=dashboardDrilldownData[key][parentValue]||dashboardDrilldownData[key][Object.keys(dashboardDrilldownData[key])[0]];
    setDashboardSelectOptions(select,options);
  });
}

function parseDashboardDate(value){
  const [year,month,day]=value.split('-').map(Number);
  return new Date(year,month-1,day);
}

function formatDashboardDate(date,separator='-'){
  const year=date.getFullYear();
  const month=String(date.getMonth()+1).padStart(2,'0');
  const day=String(date.getDate()).padStart(2,'0');
  return [year,month,day].join(separator);
}

function addDashboardMonths(date,amount){
  return new Date(date.getFullYear(),date.getMonth()+amount,1);
}

function buildDashboardCalendar(monthDate,panelIndex,start,end){
  const year=monthDate.getFullYear();
  const month=monthDate.getMonth();
  const firstDay=new Date(year,month,1);
  const mondayOffset=(firstDay.getDay()+6)%7;
  const gridStart=new Date(year,month,1-mondayOffset);
  const today=new Date();
  today.setHours(0,0,0,0);
  const cells=Array.from({length:42},(_,index)=>{
    const date=new Date(gridStart);
    date.setDate(gridStart.getDate()+index);
    date.setHours(0,0,0,0);
    const dateValue=formatDashboardDate(date);
    const isStart=start&&date.getTime()===start.getTime();
    const isEnd=end&&date.getTime()===end.getTime();
    const isInRange=start&&end&&date>start&&date<end;
    const classes=[
      'dash-calendar-cell',
      date.getMonth()!==month?'outside':'',
      date.getTime()===today.getTime()?'today':'',
      isStart?'range-start':'',
      isEnd?'range-end':'',
      isInRange?'in-range':''
    ].filter(Boolean).join(' ');
    return `<button class="${classes}" type="button" role="gridcell" data-date="${dateValue}" aria-label="${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日" aria-selected="${Boolean(isStart||isEnd)}"><span>${date.getDate()}</span></button>`;
  }).join('');
  const previousControls=panelIndex===0?`<div class="dash-calendar-nav start"><button type="button" data-calendar-move="-12" aria-label="上一年">«</button><button type="button" data-calendar-move="-1" aria-label="上个月">‹</button></div>`:'';
  const nextControls=panelIndex===1?`<div class="dash-calendar-nav end"><button type="button" data-calendar-move="1" aria-label="下个月">›</button><button type="button" data-calendar-move="12" aria-label="下一年">»</button></div>`:'';
  return `<section class="dash-calendar-panel" aria-label="${year}年${month+1}月">
    <header class="dash-calendar-header">${previousControls}<strong>${year}年 ${month+1}月</strong>${nextControls}</header>
    <div class="dash-calendar-week" aria-hidden="true">${['一','二','三','四','五','六','日'].map(day=>`<span>${day}</span>`).join('')}</div>
    <div class="dash-calendar-grid" role="grid">${cells}</div>
  </section>`;
}

function inferDashboardGranularity(start,end){
  const dayCount=Math.max(1,Math.round((end-start)/86400000)+1);
  if(dayCount<=62)return '日';
  if(dayCount<=370)return '周';
  return '月';
}

function dashboardPeriodLabels(start,end,granularity){
  const labels=[];
  const cursor=new Date(start);
  if(granularity==='月'){
    cursor.setDate(1);
    while(cursor<=end){
      labels.push(`${cursor.getFullYear()}/${String(cursor.getMonth()+1).padStart(2,'0')}`);
      cursor.setMonth(cursor.getMonth()+1);
    }
    return labels;
  }
  if(granularity==='周'){
    while(cursor<=end){
      const weekEnd=new Date(Math.min(end.getTime(),new Date(cursor.getFullYear(),cursor.getMonth(),cursor.getDate()+6).getTime()));
      labels.push(`${String(cursor.getMonth()+1).padStart(2,'0')}/${String(cursor.getDate()).padStart(2,'0')}-${String(weekEnd.getMonth()+1).padStart(2,'0')}/${String(weekEnd.getDate()).padStart(2,'0')}`);
      cursor.setDate(cursor.getDate()+7);
    }
    return labels;
  }
  while(cursor<=end){
    labels.push(`${String(cursor.getMonth()+1).padStart(2,'0')}-${String(cursor.getDate()).padStart(2,'0')}`);
    cursor.setDate(cursor.getDate()+1);
  }
  return labels;
}

function updateDashboardTimeCharts(root,granularity,start,end){
  root.dataset.granularity=granularity;
  const note=root.querySelector('.dash-footer>span:first-child');
  if(note)note.textContent=`注：当前按${granularity}统计，数据范围 ${formatDashboardDate(start)} ~ ${formatDashboardDate(end)}`;
}

function initDashboardRangePicker(root){
  const picker=root.querySelector('#dashRangePicker');
  const trigger=root.querySelector('#dashRangeTrigger');
  const dropdown=root.querySelector('#dashRangeDropdown');
  const panels=root.querySelector('#dashCalendarPanels');
  const startInput=root.querySelector('#dashStartDate');
  const endInput=root.querySelector('#dashEndDate');
  const startText=root.querySelector('#dashStartText');
  const endText=root.querySelector('#dashEndText');
  let start=parseDashboardDate(startInput.value);
  let end=parseDashboardDate(endInput.value);
  let panelMonth=new Date(start.getFullYear(),start.getMonth(),1);
  let choosingEnd=false;

  const renderPanels=()=>{
    panels.innerHTML=buildDashboardCalendar(panelMonth,0,start,end)+
      buildDashboardCalendar(addDashboardMonths(panelMonth,1),1,start,end);
  };
  const setOpen=open=>{
    picker.classList.toggle('open',open);
    dropdown.hidden=!open;
    trigger.setAttribute('aria-expanded',String(open));
    if(open)renderPanels();
  };
  const updateValues=()=>{
    startInput.value=start?formatDashboardDate(start):'';
    endInput.value=end?formatDashboardDate(end):'';
    startText.textContent=start?formatDashboardDate(start,'/'):'开始日期';
    endText.textContent=end?formatDashboardDate(end,'/'):'结束日期';
    if(start&&end)updateDashboardTimeCharts(root,inferDashboardGranularity(start,end),start,end);
    refreshDashboardMetrics();
  };

  trigger.addEventListener('click',()=>{
    panelMonth=new Date((start||new Date()).getFullYear(),(start||new Date()).getMonth(),1);
    choosingEnd=false;
    setOpen(dropdown.hidden);
  });
  trigger.addEventListener('keydown',event=>{if(event.key==='Escape')setOpen(false)});
  dropdown.addEventListener('click',event=>{
    const move=event.target.closest('[data-calendar-move]');
    if(move){
      panelMonth=addDashboardMonths(panelMonth,Number(move.dataset.calendarMove));
      renderPanels();
      return;
    }
    const cell=event.target.closest('[data-date]');
    if(!cell)return;
    const selected=parseDashboardDate(cell.dataset.date);
    if(!choosingEnd){
      start=selected;
      end=null;
      choosingEnd=true;
      updateValues();
      renderPanels();
      return;
    }
    const firstDate=start;
    if(selected<firstDate){
      start=selected;
      end=firstDate;
    }else{
      end=selected;
    }
    choosingEnd=false;
    updateValues();
    renderPanels();
    setOpen(false);
  });
  document.addEventListener('click',event=>{if(!event.composedPath().includes(picker))setOpen(false)});
  updateValues();
}

const dashboardDiseaseProfiles={
  '慢性肾病 CKD':{
    total:4285,newPatients:214,rates:[84.7,89.3,6.4],
    age:[['35岁以下',.3],['35–44岁',3.8],['45–54岁',14.9],['55–64岁',31.6],['65–74岁',32.8],['75岁及以上',16.6]],
    gender:[['男性',55.1],['女性',44.9]],
    comorbidity:[['单纯慢性肾病',32.4],['合并高血压',38.6],['合并糖尿病',18.2],['合并心血管疾病',7.1],['其他共病',3.7]],
    risk:[['低风险',8.4],['中风险',24.7],['高风险',39.2],['极高风险',27.7]],
    control:[['病情稳定',58.4],['需调整方案',22.6],['重点干预',12.1],['近期无有效监测',6.9]],
    adherence:[['依从性良好',71.3],['依从性一般',21.4],['依从性较差',7.3]],
    source:[['门诊就诊',35.8],['住院患者',39.2],['体检中心',7.6],['社区筛查',14.1],['双向转诊',3.3]]
  },
  '高血压':{
    total:12856,newPatients:732,rates:[88.4,92.1,4.9],
    age:[['35岁以下',1.8],['35–44岁',7.6],['45–54岁',18.9],['55–64岁',31.7],['65–74岁',27.4],['75岁及以上',12.6]],
    gender:[['男性',51.8],['女性',48.2]],
    comorbidity:[['单纯高血压',41.6],['合并糖尿病',21.8],['合并血脂异常',18.4],['合并冠心病',10.7],['合并慢性肾病',7.5]],
    risk:[['低风险',17.8],['中风险',33.6],['高风险',32.1],['极高风险',16.5]],
    control:[['血压已达标',62.8],['临界控制',18.7],['血压未达标',14.1],['近期无有效测量',4.4]],
    adherence:[['依从性良好',69.4],['依从性一般',22.8],['依从性较差',7.8]],
    source:[['门诊就诊',41.2],['住院患者',18.6],['体检中心',19.8],['社区筛查',18.7],['双向转诊',1.7]]
  },
  '糖尿病':{
    total:9732,newPatients:568,rates:[86.9,90.8,5.6],
    age:[['35岁以下',1.4],['35–44岁',6.8],['45–54岁',20.7],['55–64岁',33.2],['65–74岁',26.1],['75岁及以上',11.8]],
    gender:[['男性',49.7],['女性',50.3]],
    comorbidity:[['单纯糖尿病',36.8],['合并高血压',32.6],['合并血脂异常',16.9],['合并慢性肾病',8.7],['其他共病',5.0]],
    risk:[['低风险',14.6],['中风险',34.8],['高风险',35.2],['极高风险',15.4]],
    control:[['血糖已达标',57.6],['临界控制',21.9],['血糖未达标',15.8],['近期无有效测量',4.7]],
    adherence:[['依从性良好',67.1],['依从性一般',24.5],['依从性较差',8.4]],
    source:[['门诊就诊',43.6],['住院患者',20.4],['体检中心',17.2],['社区筛查',16.9],['双向转诊',1.9]]
  },
  '冠心病':{
    total:2571,newPatients:126,rates:[85.8,90.2,5.9],
    age:[['35岁以下',.2],['35–44岁',2.9],['45–54岁',12.8],['55–64岁',29.7],['65–74岁',35.1],['75岁及以上',19.3]],
    gender:[['男性',62.7],['女性',37.3]],
    comorbidity:[['稳定性冠心病',42.5],['合并高血压',27.6],['合并糖尿病',15.9],['合并心力衰竭',8.4],['其他共病',5.6]],
    risk:[['低风险',5.8],['中风险',21.4],['高风险',42.7],['极高风险',30.1]],
    control:[['病情稳定',64.2],['需复查评估',19.6],['重点干预',11.7],['近期失联',4.5]],
    adherence:[['依从性良好',74.8],['依从性一般',19.3],['依从性较差',5.9]],
    source:[['门诊就诊',39.4],['住院患者',43.7],['体检中心',4.8],['社区筛查',8.6],['双向转诊',3.5]]
  },
  '脑卒中':{
    total:2746,newPatients:142,rates:[83.6,88.9,7.2],
    age:[['35岁以下',.3],['35–44岁',3.4],['45–54岁',13.1],['55–64岁',28.8],['65–74岁',34.6],['75岁及以上',19.8]],
    gender:[['男性',59.8],['女性',40.2]],
    comorbidity:[['缺血性脑卒中',68.4],['出血性脑卒中',14.2],['合并高血压',9.6],['合并房颤',4.8],['其他',3.0]],
    risk:[['低风险',6.1],['中风险',23.7],['高风险',41.8],['极高风险',28.4]],
    control:[['康复稳定',52.7],['持续康复中',27.4],['重点干预',13.6],['近期失联',6.3]],
    adherence:[['依从性良好',65.8],['依从性一般',25.6],['依从性较差',8.6]],
    source:[['门诊就诊',25.8],['住院患者',52.6],['体检中心',2.1],['社区筛查',14.9],['双向转诊',4.6]]
  },
  '慢阻肺 COPD':{
    total:2119,newPatients:108,rates:[82.7,87.6,7.8],
    age:[['35岁以下',.1],['35–44岁',1.7],['45–54岁',10.6],['55–64岁',28.2],['65–74岁',37.8],['75岁及以上',21.6]],
    gender:[['男性',68.9],['女性',31.1]],
    comorbidity:[['稳定期慢阻肺',55.6],['合并高血压',18.3],['合并肺心病',11.8],['合并糖尿病',7.4],['其他共病',6.9]],
    risk:[['低风险',9.7],['中风险',31.2],['高风险',38.6],['极高风险',20.5]],
    control:[['病情稳定',56.9],['症状控制一般',24.8],['近期急性加重',12.7],['近期失联',5.6]],
    adherence:[['依从性良好',63.7],['依从性一般',26.9],['依从性较差',9.4]],
    source:[['门诊就诊',31.7],['住院患者',45.8],['体检中心',2.9],['社区筛查',15.8],['双向转诊',3.8]]
  },
  '血脂异常':{
    total:6584,newPatients:394,rates:[89.1,92.8,4.3],
    age:[['35岁以下',2.6],['35–44岁',11.8],['45–54岁',25.4],['55–64岁',31.6],['65–74岁',20.7],['75岁及以上',7.9]],
    gender:[['男性',53.6],['女性',46.4]],
    comorbidity:[['单纯血脂异常',38.9],['合并高血压',29.8],['合并糖尿病',17.4],['合并冠心病',9.3],['其他共病',4.6]],
    risk:[['低风险',22.4],['中风险',37.8],['高风险',27.5],['极高风险',12.3]],
    control:[['血脂已达标',59.8],['临界控制',22.7],['血脂未达标',13.6],['近期无有效测量',3.9]],
    adherence:[['依从性良好',68.7],['依从性一般',23.7],['依从性较差',7.6]],
    source:[['门诊就诊',36.2],['住院患者',12.4],['体检中心',31.7],['社区筛查',18.1],['双向转诊',1.6]]
  },
  '肥胖/减重管理':{
    total:3927,newPatients:286,rates:[87.5,90.6,5.1],
    age:[['35岁以下',8.7],['35–44岁',22.6],['45–54岁',30.8],['55–64岁',24.7],['65–74岁',10.1],['75岁及以上',3.1]],
    gender:[['男性',42.8],['女性',57.2]],
    comorbidity:[['单纯肥胖',34.7],['合并脂肪肝',24.8],['合并高血压',19.6],['合并糖尿病',12.7],['其他共病',8.2]],
    risk:[['低风险',24.1],['中风险',39.7],['高风险',27.8],['极高风险',8.4]],
    control:[['减重达标',31.6],['持续干预中',45.8],['效果不佳',17.4],['近期失联',5.2]],
    adherence:[['依从性良好',61.9],['依从性一般',28.4],['依从性较差',9.7]],
    source:[['门诊就诊',28.7],['住院患者',5.6],['体检中心',38.4],['社区筛查',25.9],['双向转诊',1.4]]
  }
};

const dashboardDiseaseAnalysisProfiles={
  '慢性肾病 CKD':[
    ['单纯慢性肾病',25.8],['合并高血压',30.7],['合并糖尿病',14.8],['合并血脂异常',8.6],
    ['合并心血管病',7.2],['合并高尿酸',6.1],['合并脑血管病',3.9],['其他共病',2.9]
  ],
  '高血压':[
    ['单纯高血压',34.6],['合并糖尿病',18.8],['合并血脂异常',16.4],['合并冠心病',9.7],
    ['合并慢性肾病',7.5],['合并脑卒中',5.8],['合并肥胖',4.6],['其他共病',2.6]
  ],
  '糖尿病':[
    ['单纯糖尿病',30.8],['合并高血压',27.6],['合并血脂异常',14.9],['合并慢性肾病',8.7],
    ['合并冠心病',6.9],['合并肥胖',5.4],['合并脂肪肝',3.6],['其他共病',2.1]
  ],
  '冠心病':[
    ['单纯冠心病',35.5],['合并高血压',22.6],['合并糖尿病',13.9],['合并血脂异常',9.8],
    ['合并心力衰竭',7.4],['合并慢性肾病',5.1],['合并脑卒中',3.4],['其他共病',2.3]
  ],
  '脑卒中':[
    ['缺血性脑卒中',54.4],['出血性脑卒中',12.2],['合并高血压',13.6],['合并房颤',5.8],
    ['合并糖尿病',5.0],['合并血脂异常',4.2],['合并冠心病',2.8],['其他共病',2.0]
  ],
  '慢阻肺 COPD':[
    ['稳定期慢阻肺',44.6],['合并高血压',15.3],['合并肺心病',10.8],['合并糖尿病',7.4],
    ['合并冠心病',6.9],['合并骨质疏松',6.2],['合并慢性肾病',4.1],['其他共病',4.7]
  ],
  '血脂异常':[
    ['单纯血脂异常',31.9],['合并高血压',24.8],['合并糖尿病',14.4],['合并冠心病',8.3],
    ['合并脂肪肝',7.6],['合并肥胖',6.4],['合并慢性肾病',3.9],['其他共病',2.7]
  ],
  '肥胖/减重管理':[
    ['单纯肥胖',27.7],['合并脂肪肝',19.8],['合并高血压',16.6],['合并糖尿病',10.7],
    ['合并血脂异常',9.2],['合并高尿酸',6.8],['合并睡眠呼吸暂停',5.6],['其他共病',3.6]
  ]
};

const dashboardRegionPercent=[['东区',31.6],['仁和区',24.8],['西区',15.7],['米易县',15.1],['盐边县',12.8]];

function allocateDashboardPopulation(total,distribution){
  let allocated=0;
  return distribution.map(([name,percent],index)=>{
    const value=index===distribution.length-1?total-allocated:Math.round(total*percent/100);
    allocated+=value;
    return {name,value};
  });
}

let dashboardLiveTick=0;

function buildPerformanceDashboard(){
  const dashboardCurrentTime=new Date().toLocaleString('zh-CN',{
    hour12:false,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'
  });
  const overviewGroups=[
    ['i-user','新增入组',[['新增入组人数','214','人','6.1%','up']]],
    ['i-user','当前在管',[['当前在管人数','4,285','人','0.9%','up']]],
    ['i-task','任务执行',[
      ['应完成任务数','3,152','项','1.4%','up'],
      ['已完成任务数','2,815','项','1.2%','up'],
      ['任务完成率','89.3','%','0.1 个百分点','up'],
      ['逾期任务数','337','项','3.4%','down']
    ]],
    ['i-operation','失访情况',[
      ['失访人数','274','人','1.8%','down'],
      ['失访率','6.4','%','0.2 个百分点','down']
    ]]
  ];
  const kpiCards=overviewGroups.map(([icon,title,metrics])=>`
    <article class="quality-kpi-card${metrics.length===1?' single':''} metric-count-${metrics.length}">
      <header><span class="quality-kpi-icon"><svg><use href="#${icon}"/></svg></span><h3>${title}</h3></header>
      <div class="quality-kpi-metrics">
        ${metrics.map(([label,value,unit,change,direction])=>`
          <div class="quality-kpi-metric">
            <h4>${label}</h4>
            <strong>${value}<em>${unit}</em></strong>
            ${change?`<footer>较昨日 <b class="${direction}">${direction==='up'?'↑':'↓'} ${change}</b></footer>`:''}
          </div>`).join('')}
      </div>
    </article>`).join('');
  const serviceItems=[
    ['i-file','2,815','消息发送次数'],
    ['i-bell','2,669','消息触达次数'],
    ['i-grid','94.8%','消息触达率'],
    ['i-ai','1,843','AI外呼次数'],
    ['i-operation','1,482','AI接通次数'],
    ['i-task','1,338','AI完成随访次数'],
    ['i-grid','90.3%','AI完成率'],
    ['i-bell','330','人工外呼次数'],
    ['i-task','268','人工完成随访次数'],
    ['i-settings','146','人工干预次数']
  ];
  const serviceCards=serviceItems.map(([icon,value,label],index)=>`
    <article class="quality-service-item ${index<4?'ai':'manual'}">
      <span><svg><use href="#${icon}"/></svg></span>
      <strong>${value}</strong>
      <small>${label}</small>
    </article>`);
  const root=document.createElement('section');
  root.id='performanceDashboard';
  root.className='performance-dashboard quality-dashboard';
  root.hidden=true;
  root.innerHTML=`
    <header class="dash-page-head">
      <h1>单病种质控管理看板</h1>
    </header>
    <div class="dash-canvas">
      <div class="dash-filter-row">
        <div class="dash-date ant-picker ant-picker-range" id="dashRangePicker">
          <button class="dash-range-trigger" id="dashRangeTrigger" type="button" aria-label="统计日期范围" aria-haspopup="dialog" aria-expanded="false">
            <span class="dash-range-value" id="dashStartText">2026/02/04</span>
            <span class="ant-picker-range-separator" aria-hidden="true">→</span>
            <span class="dash-range-value" id="dashEndText">2026/03/05</span>
            <svg class="dash-calendar-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4m8-4v4M3 10h18"/></svg>
          </button>
          <input id="dashStartDate" type="hidden" value="2026-02-04">
          <input id="dashEndDate" type="hidden" value="2026-03-05">
          <div class="dash-range-dropdown" id="dashRangeDropdown" role="dialog" aria-label="选择统计日期范围" hidden>
            <div class="dash-calendar-panels" id="dashCalendarPanels"></div>
          </div>
        </div>
        ${buildDashboardSelect('全市',dashboardDrilldownData.city,'city')}
        ${buildDashboardSelect('医疗集团',dashboardDrilldownData.medicalGroup['全市'],'medicalGroup')}
        ${buildDashboardSelect('机构',dashboardDrilldownData.organization['医疗集团'],'organization')}
        ${buildDashboardSelect('团队',dashboardDrilldownData.team['机构'],'team')}
        ${buildDashboardSelect('个人',dashboardDrilldownData.person['团队'],'person')}
      </div>
      <section class="quality-panel quality-overview">
        <header class="quality-panel-head">
          <h2>管理成效总览 <i aria-hidden="true">ⓘ</i></h2>
          <div class="quality-update">
            <span id="dashUpdateTime">数据更新时间：${dashboardCurrentTime}</span>
            <button class="dash-refresh-icon" id="dashRefresh" type="button" aria-label="刷新实时数据" title="刷新实时数据">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.34 5.66M20 4v7h-7"/></svg>
            </button>
          </div>
        </header>
        <div class="quality-kpi-grid">${kpiCards}</div>
      </section>
      <section class="quality-panel quality-services">
        <header class="quality-panel-head"><h2>服务资源应用情况</h2></header>
        <div class="quality-service-strip">${serviceCards.join('')}</div>
      </section>
      <div class="quality-two-column">
        <section class="quality-panel quality-diseases">
          <header class="quality-panel-head"><h2>病种分析 <i aria-hidden="true">ⓘ</i></h2></header>
          <div class="quality-disease-chart" id="diseaseDistributionChart"></div>
        </section>
        <section class="quality-panel quality-referral">
          <header class="quality-panel-head"><h2>上下级转诊统计 <i aria-hidden="true">ⓘ</i></h2></header>
          <div class="quality-referral-grid">
            <article>
              <h3>上转</h3>
              <div class="quality-funnel-chart" id="upReferralChart"></div>
              <footer><span>上转随访完成率</span><strong>66.1%</strong></footer>
            </article>
            <article>
              <h3>下转</h3>
              <div class="quality-funnel-chart" id="downReferralChart"></div>
              <footer><span>下转随访完成率</span><strong>79.3%</strong></footer>
            </article>
          </div>
        </section>
      </div>
      <div class="quality-two-column quality-crowd-source-row">
        <section class="quality-panel quality-crowd">
          <header class="quality-panel-head"><h2>人群分析</h2></header>
          <nav class="quality-analysis-tabs" aria-label="人群分析维度">
            <button class="active" type="button" data-analysis-key="age" aria-selected="true">年龄分布</button>
            <button type="button" data-analysis-key="gender" aria-selected="false">性别分布</button>
            <button type="button" data-analysis-key="region" aria-selected="false">地区分布（TOP10）</button>
            <button type="button" data-analysis-key="risk" aria-selected="false">风险等级分布</button>
            <button type="button" data-analysis-key="control" aria-selected="false">控制情况分布</button>
            <button type="button" data-analysis-key="adherence" aria-selected="false">依从性分布</button>
          </nav>
          <div class="quality-region-level" id="regionLevelSwitch" hidden>
            <strong><span>四川省</span><i>›</i><span>攀枝花市</span></strong>
            <span class="quality-region-badge">区县级</span>
          </div>
          <div class="quality-crowd-chart" id="crowdAnalysisChart"></div>
        </section>
        <section class="quality-panel quality-source">
          <header class="quality-panel-head"><h2>人群来源分布 <i aria-hidden="true">ⓘ</i></h2></header>
          <div class="quality-source-chart" id="sourceDonutChart"></div>
        </section>
      </div>
      <footer class="dash-footer">
        <span>注：当前按日统计，数据范围 2026-02-04 ~ 2026-03-05</span>
      </footer>
    </div>
  `;
  document.querySelector('.main-content').appendChild(root);
  initDashboardRangePicker(root);
  const dashboardSelects=[...root.querySelectorAll('.dash-ant-select')];
  const closeDashboardSelects=except=>dashboardSelects.forEach(select=>{
    if(select===except)return;
    select.classList.remove('open');
    select.querySelector('.dash-ant-select-selector').setAttribute('aria-expanded','false');
    select.querySelector('.dash-ant-select-dropdown').hidden=true;
  });
  root.querySelector('.dash-filter-row').addEventListener('click',event=>{
    const option=event.target.closest('.dash-ant-select-option');
    if(option){
      const select=option.closest('.dash-ant-select');
      select.dataset.selectedIndex=option.dataset.index;
      select.querySelector('.dash-ant-select-value').textContent=option.dataset.value;
      select.querySelectorAll('.dash-ant-select-option').forEach(item=>{
        const selected=item===option;
        item.classList.toggle('selected',selected);
        item.setAttribute('aria-selected',String(selected));
      });
      updateDashboardDrilldown(root,select.dataset.filterKey);
      closeDashboardSelects();
      refreshDashboardMetrics();
      return;
    }
    const trigger=event.target.closest('.dash-ant-select-selector');
    if(trigger){
      const select=trigger.closest('.dash-ant-select');
      const willOpen=!select.classList.contains('open');
      closeDashboardSelects(select);
      select.classList.toggle('open',willOpen);
      trigger.setAttribute('aria-expanded',String(willOpen));
      select.querySelector('.dash-ant-select-dropdown').hidden=!willOpen;
      return;
    }
    closeDashboardSelects();
  });
  dashboardSelects.forEach(select=>select.querySelector('.dash-ant-select-selector').addEventListener('keydown',event=>{
    if(event.key==='Enter'||event.key===' '){
      event.preventDefault();
      event.currentTarget.click();
    }
    if(event.key==='Escape')closeDashboardSelects();
  }));
  document.addEventListener('click',event=>{if(!root.contains(event.target))closeDashboardSelects()});
  root.querySelector('#dashRefresh').addEventListener('click',()=>{
    dashboardLiveTick+=1;
    refreshDashboardMetrics();
    root.querySelector('#dashUpdateTime').textContent=`数据更新时间：${new Date().toLocaleString('zh-CN',{hour12:false,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'})}`;
    root.querySelector('#dashRefresh').classList.add('refreshing');
    setTimeout(()=>root.querySelector('#dashRefresh')?.classList.remove('refreshing'),320);
    showToast('实时数据已更新');
  });
  return root;
}

function refreshDashboardMetrics(){
  const root=$('#performanceDashboard');
  if(!root)return;
  const diseaseName='慢性肾病 CKD';
  const baseProfile=dashboardDiseaseProfiles[diseaseName]||dashboardDiseaseProfiles['慢性肾病 CKD'];
  const cityIndex=Number(root.querySelector('[data-filter-key="city"]')?.dataset.selectedIndex||0);
  const medicalGroupIndex=Number(root.querySelector('[data-filter-key="medicalGroup"]')?.dataset.selectedIndex||0);
  const organizationIndex=Number(root.querySelector('[data-filter-key="organization"]')?.dataset.selectedIndex||0);
  const teamIndex=Number(root.querySelector('[data-filter-key="team"]')?.dataset.selectedIndex||0);
  const personIndex=Number(root.querySelector('[data-filter-key="person"]')?.dataset.selectedIndex||0);
  const cityFactors=[1,.34,.16,.22,.15,.13];
  const medicalGroupFactors=[1,.62,.38];
  const organizationFactors=[1,.42,.31,.27,.24];
  const teamFactors=[1,.38,.34,.28,.24];
  const personFactors=[1,.36,.33,.31];
  const factor=(cityFactors[cityIndex]||1)*(medicalGroupFactors[medicalGroupIndex]||1)*
    (organizationFactors[organizationIndex]||1)*(teamFactors[teamIndex]||1)*(personFactors[personIndex]||1);
  const rateOffset=cityIndex*.04+medicalGroupIndex*.1+organizationIndex*.2-teamIndex*.1+personIndex*.08;
  const liveTotal=baseProfile.total+dashboardLiveTick*Math.max(1,Math.round(baseProfile.total*.0004));
  const liveNewPatients=baseProfile.newPatients+dashboardLiveTick*Math.max(1,Math.round(baseProfile.newPatients*.003));
  const profile={
    ...baseProfile,
    name:diseaseName,
    total:Math.max(1,Math.round(liveTotal*factor)),
    newPatients:Math.max(1,Math.round(liveNewPatients*factor)),
    rates:[
      Number(Math.min(99.5,baseProfile.rates[0]+rateOffset+dashboardLiveTick*.1).toFixed(1)),
      Number(Math.min(99.5,baseProfile.rates[1]+rateOffset*.7+dashboardLiveTick*.1).toFixed(1)),
      Number(Math.max(1,baseProfile.rates[2]-rateOffset*.3-dashboardLiveTick*.1).toFixed(1))
    ]
  };
  const completedTasks=Math.round(profile.total*.657);
  const expectedTasks=Math.max(completedTasks,Math.round(completedTasks/(profile.rates[1]/100)));
  const overdueTasks=Math.max(0,expectedTasks-completedTasks);
  const overviewValues=[
    [profile.newPatients,'人','int'],
    [profile.total,'人','int'],
    [expectedTasks,'项','int'],
    [completedTasks,'项','int'],
    [profile.rates[1],'%','decimal'],
    [overdueTasks,'项','int'],
    [Math.round(profile.total*profile.rates[2]/100),'人','int'],
    [profile.rates[2],'%','decimal']
  ];
  root.querySelectorAll('.quality-kpi-metric strong').forEach((node,index)=>{
    const [value,unit,kind]=overviewValues[index];
    node.innerHTML=`${kind==='int'?Number(value).toLocaleString('zh-CN'):Number(value).toFixed(1)}<em>${unit}</em>`;
  });
  const dayChanges=[
    `${(3.1+(baseProfile.newPatients%8)*.5).toFixed(1)}%`,
    `${(0.8+(baseProfile.total%7)*.1).toFixed(1)}%`,
    `${(1.1+(baseProfile.total%4)*.1).toFixed(1)}%`,
    `${(1.0+(baseProfile.total%5)*.1).toFixed(1)}%`,
    `${(0.1+(baseProfile.total%3)*.1).toFixed(1)} 个百分点`,
    `${(2.6+(baseProfile.total%5)*.2).toFixed(1)}%`,
    `${(1.4+(baseProfile.total%4)*.2).toFixed(1)}%`,
    `${(0.1+(baseProfile.total%3)*.1).toFixed(1)} 个百分点`
  ];
  const dayDirections=['up','up','up','up','up','down','down','down'];
  root.querySelectorAll('.quality-kpi-metric footer').forEach((footer,index)=>{
    const direction=dayDirections[index];
    footer.innerHTML=`较昨日 <b class="${direction}">${direction==='up'?'↑':'↓'} ${dayChanges[index]}</b>`;
  });
  const messageSent=Math.round(profile.total*.657);
  const messageReached=Math.round(messageSent*.948);
  const aiOutbound=Math.round(profile.total*.43);
  const aiConnected=Math.round(aiOutbound*.804);
  const aiCompleted=Math.round(aiConnected*.903);
  const manualOutbound=Math.round(profile.total*.077);
  const manualCompleted=Math.round(manualOutbound*.812);
  const serviceValues=[
    messageSent.toLocaleString('zh-CN'),
    messageReached.toLocaleString('zh-CN'),
    `${(messageReached/messageSent*100).toFixed(1)}%`,
    aiOutbound.toLocaleString('zh-CN'),
    aiConnected.toLocaleString('zh-CN'),
    aiCompleted.toLocaleString('zh-CN'),
    `${(aiCompleted/aiConnected*100).toFixed(1)}%`,
    manualOutbound.toLocaleString('zh-CN'),
    manualCompleted.toLocaleString('zh-CN'),
    Math.round(profile.total*.034).toLocaleString('zh-CN')
  ];
  root.querySelectorAll('.quality-service-item strong').forEach((node,index)=>node.textContent=serviceValues[index]);
  dashboardRuntime.updateProfile?.(profile);
}

let dashboardCharts=[];
let dashboardChartMap={};
let dashboardChartsReady=false;
let dashboardRuntime={};

function initDashboardCharts(){
  if(dashboardChartsReady||!window.echarts)return;
  const root=$('#performanceDashboard');
  const create=(id,option)=>{
    const node=root.querySelector('#'+id);
    if(!node)return null;
    const chart=window.echarts.init(node,null,{renderer:'canvas'});
    chart.setOption(option);
    dashboardCharts.push(chart);
    dashboardChartMap[id]=chart;
    return chart;
  };
  const textColor='#516485';
  const titleColor='#132a57';
  const axisLine={lineStyle:{color:'#dfe6f0'}};
  const splitLine={lineStyle:{color:'#e9eef7'}};
  const tooltipBase={backgroundColor:'rgba(18,42,87,.95)',borderWidth:0,textStyle:{color:'#fff',fontSize:14,fontWeight:400},padding:[9,12]};
  const blueGradient=new window.echarts.graphic.LinearGradient(0,0,1,0,[
    {offset:0,color:'#4d9cff'},{offset:1,color:'#1768ed'}
  ]);
  const verticalBlueGradient=new window.echarts.graphic.LinearGradient(0,0,0,1,[
    {offset:0,color:'#1768ed'},{offset:1,color:'#69adff'}
  ]);
  const formatCount=value=>Number(value).toLocaleString('zh-CN');
  const buildCrowdSets=profile=>({
    age:{label:'年龄分布',view:'pie',total:profile.total,data:allocateDashboardPopulation(profile.total,profile.age)},
    gender:{label:'性别分布',view:'rose',total:profile.total,data:allocateDashboardPopulation(profile.total,profile.gender)},
    region:{
      label:'区县分布',
      view:'bar',
      total:profile.total,
      data:allocateDashboardPopulation(profile.total,dashboardRegionPercent)
    },
    risk:{label:'风险等级分布',view:'pie',total:profile.total,data:allocateDashboardPopulation(profile.total,profile.risk)},
    control:{label:'控制情况分布',view:'pie',total:profile.total,data:allocateDashboardPopulation(profile.total,profile.control)},
    adherence:{label:'依从性分布',view:'pie',total:profile.total,data:allocateDashboardPopulation(profile.total,profile.adherence)}
  });
  let currentProfile={...dashboardDiseaseProfiles['慢性肾病 CKD'],name:'慢性肾病 CKD'};
  let crowdSets=buildCrowdSets(currentProfile);
  let currentCrowdKey='age';
  const crowdColors=['#2d87f5','#38d1c0','#75b8ca','#ffba45','#a47af4','#7487a6'];
  const crowdOption=key=>{
    const set=crowdSets[key];
    const total=set.total||set.data.reduce((sum,item)=>sum+item.value,0);
    const percentage=value=>`${(value/total*100).toFixed(1)}%`;
    if(set.view==='bar'){
      return {
        color:crowdColors,
        title:{show:false},
        legend:{show:false},
        tooltip:{...tooltipBase,trigger:'axis',axisPointer:{type:'shadow'},formatter:params=>`${params[0].name}<br/>${formatCount(params[0].value)} 人（${percentage(params[0].value)}）`},
        grid:{left:112,right:112,top:18,bottom:16},
        xAxis:{type:'value',show:false,max:value=>Math.ceil(value.max*1.32)},
        yAxis:{type:'category',inverse:true,data:set.data.map(item=>item.name),axisLine:{show:false},axisTick:{show:false},axisLabel:{color:titleColor,fontSize:14,fontWeight:700}},
        series:[{name:set.label,type:'bar',barWidth:set.data.length>6?10:16,data:set.data.map(item=>item.value),label:{show:true,position:'right',distance:10,color:titleColor,fontSize:14,fontWeight:400,formatter:params=>`${formatCount(params.value)}  (${percentage(params.value)})`},itemStyle:{color:blueGradient,borderRadius:4}}]
      };
    }
    const lookup=Object.fromEntries(set.data.map(item=>[item.name,item]));
    return {
      color:crowdColors,
      title:{show:true,text:formatCount(total),subtext:'总人数',left:'28%',top:'39%',textAlign:'center',textStyle:{color:titleColor,fontSize:14,fontWeight:400},subtextStyle:{color:textColor,fontSize:14,fontWeight:400,lineHeight:24}},
      tooltip:{...tooltipBase,trigger:'item',formatter:params=>`${params.name}<br/>${formatCount(params.value)} 人（${percentage(params.value)}）`},
      legend:{
        show:true,orient:'vertical',right:'2%',top:'middle',itemWidth:9,itemHeight:9,itemGap:12,
        textStyle:{color:textColor,fontSize:14,fontWeight:400,lineHeight:24,rich:{name:{width:96,color:titleColor,fontSize:14,fontWeight:700},num:{width:126,align:'right',color:textColor,fontSize:14,fontWeight:400}}},
        formatter:name=>{const item=lookup[name];return `{name|${name}} {num|${formatCount(item.value)}人（${percentage(item.value)}）}`;}
      },
      xAxis:{show:false},
      yAxis:{show:false},
      series:[{name:set.label,type:'pie',roseType:set.view==='rose'?'radius':false,radius:set.view==='rose'?['34%','72%']:['47%','70%'],center:['28%','52%'],label:{show:false},emphasis:{scaleSize:6},data:set.data}]
    };
  };
  const crowdChart=create('crowdAnalysisChart',crowdOption('age'));
  const regionLevelSwitch=root.querySelector('#regionLevelSwitch');
  root.querySelector('.quality-analysis-tabs').addEventListener('click',event=>{
    const button=event.target.closest('[data-analysis-key]');
    if(!button||button.classList.contains('active'))return;
    root.querySelectorAll('.quality-analysis-tabs button').forEach(item=>{
      const selected=item===button;
      item.classList.toggle('active',selected);
      item.setAttribute('aria-selected',String(selected));
    });
    currentCrowdKey=button.dataset.analysisKey;
    regionLevelSwitch.hidden=currentCrowdKey!=='region';
    root.querySelector('.quality-crowd').classList.toggle('show-region-level',currentCrowdKey==='region');
    crowdChart.setOption(crowdOption(currentCrowdKey),true);
  });
  const sourceOption=profile=>{
    const sourceData=allocateDashboardPopulation(profile.total,profile.source);
    const sourceLookup=Object.fromEntries(sourceData.map(item=>[item.name,item]));
    const sourcePercent=value=>`${(value/profile.total*100).toFixed(1)}%`;
    return {
      color:['#257df5','#38cfbf','#ffb842','#9c7cf2','#98a6bd'],
      tooltip:{...tooltipBase,trigger:'item',formatter:params=>`${params.name}<br/>${formatCount(params.value)} 人（${sourcePercent(params.value)}）`},
      title:{text:formatCount(profile.total),subtext:'总人数',left:'28%',top:'40%',textAlign:'center',textStyle:{color:titleColor,fontSize:14,fontWeight:400},subtextStyle:{color:textColor,fontSize:14,fontWeight:400,lineHeight:24}},
      legend:{
        orient:'vertical',right:'2%',top:'middle',itemWidth:9,itemHeight:9,itemGap:14,
        textStyle:{fontSize:14,fontWeight:400,lineHeight:24,color:textColor,rich:{name:{width:88,color:titleColor,fontSize:14,fontWeight:700},num:{width:108,align:'right',color:textColor,fontSize:14,fontWeight:400}}},
        formatter:name=>{const item=sourceLookup[name];return `{name|${name}} {num|${formatCount(item.value)}人（${sourcePercent(item.value)}）}`;}
      },
      series:[{type:'pie',radius:['47%','70%'],center:['28%','52%'],label:{show:false},data:sourceData}]
    };
  };
  const sourceChart=create('sourceDonutChart',sourceOption(currentProfile));

  const diseaseAnalysisData=profile=>allocateDashboardPopulation(
    profile.total,
    dashboardDiseaseAnalysisProfiles[profile.name]||profile.comorbidity
  );
  const verticalBarOption=(profile,data=diseaseAnalysisData(profile))=>{
    const percentages=data.map(item=>`${(item.value/profile.total*100).toFixed(1)}%`);
    const maxValue=Math.max(...data.map(item=>item.value));
    const rawStep=maxValue/4;
    const magnitude=10**Math.floor(Math.log10(rawStep));
    const normalizedStep=rawStep/magnitude;
    const stepFactor=normalizedStep<=1?1:normalizedStep<=2?2:normalizedStep<=2.5?2.5:normalizedStep<=5?5:10;
    const axisStep=stepFactor*magnitude;
    const axisMax=Math.ceil(maxValue/axisStep)*axisStep;
    return {
      tooltip:{
        ...tooltipBase,
        trigger:'axis',
        axisPointer:{type:'shadow'},
        formatter:params=>`${params[0].name}<br/>${formatCount(params[0].value)} 人（${percentages[params[0].dataIndex]}）`
      },
      grid:{left:50,right:18,top:38,bottom:74},
      xAxis:{
        type:'category',
        data:data.map(item=>item.name),
        axisLine,
        axisTick:{show:false},
        axisLabel:{
          interval:0,
          color:'#536888',
          fontFamily:'Microsoft YaHei, sans-serif',
          fontSize:11,
          fontWeight:400,
          lineHeight:16,
          formatter:value=>value.replace(/^单纯/,'单纯\n').replace(/^合并/,'合并\n')
        }
      },
      yAxis:{
        type:'value',
        min:0,
        max:axisMax,
        interval:axisStep,
        axisLine:{show:false},
        axisTick:{show:false},
        axisLabel:{color:textColor,fontSize:14,fontWeight:700,formatter:value=>formatCount(value)},
        splitLine
      },
      series:[{
        type:'bar',
        barMaxWidth:34,
        data:data.map(item=>item.value),
        label:{
          show:true,
          position:'top',
          distance:6,
          color:titleColor,
          fontSize:14,
          fontWeight:400,
          formatter:params=>formatCount(params.value)
        },
        itemStyle:{color:verticalBlueGradient,borderRadius:[5,5,0,0]}
      }]
    };
  };
  const diseaseChart=create('diseaseDistributionChart',verticalBarOption(currentProfile));

  const funnelOption=(name,data,max)=>({
    color:['#d8e8fb','#e1edfb','#eaf3fc','#f0f6fd'],
    tooltip:{...tooltipBase,trigger:'item',formatter:params=>`${params.name}<br/>${formatCount(params.value)} 人`},
    series:[{
      name,type:'funnel',left:'4%',top:4,bottom:2,width:'92%',min:0,max,minSize:'34%',maxSize:'100%',sort:'descending',gap:2,
      label:{show:true,position:'inside',color:'#2f466e',fontSize:14,fontWeight:400,formatter:params=>`${params.name}    ${formatCount(params.value)} 人`},
      labelLine:{show:false},itemStyle:{borderColor:'#fff',borderWidth:0,borderRadius:3},emphasis:{label:{fontWeight:400}}
    ,data}]
  });
  const referralData=profile=>{
    const abnormal=Math.max(1,Math.round(profile.total*.132));
    const recommend=Math.max(1,Math.round(profile.total*.071));
    const arrival=Math.max(1,Math.round(recommend*.78));
    const enrolled=Math.max(1,Math.round(recommend*.661));
    const suggested=Math.max(1,Math.round(profile.total*.052));
    const transferred=Math.max(1,Math.round(suggested*.91));
    const received=Math.max(1,Math.round(suggested*.85));
    const followed=Math.max(1,Math.round(suggested*.793));
    return {
      up:[{value:abnormal,name:'筛查发现异常'},{value:recommend,name:'推荐上转'},{value:arrival,name:'到院就诊'},{value:enrolled,name:'确认入组'}],
      down:[{value:suggested,name:'建议下转'},{value:transferred,name:'转出'},{value:received,name:'基层接收'},{value:followed,name:'基层随访'}]
    };
  };
  const initialReferral=referralData(currentProfile);
  const upReferralChart=create('upReferralChart',funnelOption('上转流程',initialReferral.up,initialReferral.up[0].value));
  const downReferralChart=create('downReferralChart',funnelOption('下转流程',initialReferral.down,initialReferral.down[0].value));

  dashboardRuntime.updateProfile=profile=>{
    currentProfile=profile;
    crowdSets=buildCrowdSets(profile);
    crowdChart.setOption(crowdOption(currentCrowdKey),true);
    sourceChart.setOption(sourceOption(profile),true);
    diseaseChart.setOption(verticalBarOption(profile),true);
    const referrals=referralData(profile);
    upReferralChart.setOption(funnelOption('上转流程',referrals.up,referrals.up[0].value),true);
    downReferralChart.setOption(funnelOption('下转流程',referrals.down,referrals.down[0].value),true);
    const referralRates=root.querySelectorAll('.quality-referral-grid footer strong');
    if(referralRates[0])referralRates[0].textContent=`${(referrals.up[3].value/referrals.up[1].value*100).toFixed(1)}%`;
    if(referralRates[1])referralRates[1].textContent=`${(referrals.down[3].value/referrals.down[0].value*100).toFixed(1)}%`;
  };

  dashboardChartsReady=true;
  refreshDashboardMetrics();
  const initialRangeStart=parseDashboardDate(root.querySelector('#dashStartDate').value);
  const initialRangeEnd=parseDashboardDate(root.querySelector('#dashEndDate').value);
  updateDashboardTimeCharts(
    root,
    inferDashboardGranularity(initialRangeStart,initialRangeEnd),
    initialRangeStart,
    initialRangeEnd
  );
  window.addEventListener('resize',()=>dashboardCharts.forEach(chart=>chart.resize()),{passive:true});
}

const performanceDashboard=buildPerformanceDashboard();
updateManagementSelect();
function setDashboardMode(enabled){
  const main=document.querySelector('.main-content');
  $('#pageTitle').hidden=enabled;
  document.querySelector('.customer-card').hidden=enabled;
  performanceDashboard.hidden=!enabled;
  main.classList.toggle('dashboard-mode',enabled);
  if(enabled){
    performanceDashboard.scrollIntoView({block:'start'});
    requestAnimationFrame(()=>{
      initDashboardCharts();
      dashboardCharts.forEach(chart=>chart.resize());
    });
  }
}
