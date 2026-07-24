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
    if(i===4)return `<td><span class="management-tag status-${managementStatuses.indexOf(v)+1}">${v}</span></td>`;
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
  const labels=dashboardPeriodLabels(start,end,granularity);
  const comparison=granularity==='日'?'较昨日':granularity==='周'?'较上周':'较上月';
  root.querySelectorAll('.metric-card footer,.mini-metrics.four small').forEach(node=>{
    node.childNodes.forEach(child=>{
      if(child.nodeType===Node.TEXT_NODE&&child.textContent.trim().startsWith('较')){
        child.textContent=`${comparison} `;
      }
    });
  });
  const note=root.querySelector('.dash-footer>span:first-child');
  if(note)note.textContent=`注：当前按${granularity}统计，数据范围 ${formatDashboardDate(start)} ~ ${formatDashboardDate(end)}`;
  const lineChart=dashboardChartMap.trendLineChart;
  const barChart=dashboardChartMap.resourceBarChart;
  if(!lineChart||!barChart)return;
  const rateBases=[68,57,42,28];
  lineChart.setOption({
    xAxis:{data:labels},
    series:rateBases.map((base,seriesIndex)=>({
      data:labels.map((_,index)=>Number((base+Math.sin((index+seriesIndex)*1.15)*4+index%3).toFixed(1)))
    }))
  });
  const aggregationScale=granularity==='日'?1:granularity==='周'?6.6:29.5;
  const resourceBases=[520,215,118,72];
  barChart.setOption({
    xAxis:{data:labels},
    series:resourceBases.map((base,seriesIndex)=>({
      data:labels.map((_,index)=>Math.round((base+((index*37+seriesIndex*19)%95))*aggregationScale))
    }))
  });
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

function buildPerformanceDashboard(){
  const macroMetrics=[
    ['i-user','管理患者数','32568','人','5.2%',''],
    ['i-task','随访覆盖率','85.6','%','3.1%',''],
    ['i-box','随访完成率','78.3','%','2.4%','green'],
    ['i-file','任务完成率','82.6','%','2.7%',''],
    ['i-ai','消息推送成功率','94.7','%','1.8%','orange'],
    ['i-grid','智能外呼接通率','71.2','%','1.6%',''],
    ['i-user','外呼随访完成率','63.8','%','2.2%','green'],
    ['i-settings','异常闭环率','90.5','%','2.9%','orange']
  ];
  const resourceMetrics=[['消息推送次数','125689','次'],['AI外呼次数','86542','次'],['人工外呼次数','15326','次'],['医生人工处理量','8652','次'],['AI完成量','68945','次']];
  const barDates=['05-01','05-06','05-11','05-16','05-21','05-26','05-31'];
  const resourceBars=barDates.map((d,i)=>`<div class="bar-set"><i style="height:${22+i%2*4}%;background:#45b49b"></i><i style="height:${82-i*2}%;background:#397bf0"></i><i style="height:${62-i}%;background:#6fa5f6"></i><i style="height:${20+i%3*3}%;background:#ff8b2d"></i><label>${d}</label></div>`).join('');
  const macroCards=macroMetrics.map(([icon,label,value,unit,rise,tone])=>`<article class="metric-card"><span class="metric-icon ${tone}"><svg><use href="#${icon}"/></svg></span><div><small>${label}</small><strong data-base="${value}" data-unit="${unit}" data-kind="${unit==='人'?'int':'decimal'}">${Number(value).toLocaleString()}<em>${unit}</em></strong></div><footer>较上月 <b>↑ ${rise}</b></footer></article>`).join('');
  const resourceCards=resourceMetrics.map(([label,value,unit])=>`<article class="mini-card"><span>${label}</span><strong data-base="${value}" data-unit="${unit}" data-kind="int">${Number(value).toLocaleString()} <small>${unit}</small></strong></article>`).join('');
  const root=document.createElement('section');
  root.id='performanceDashboard';
  root.className='performance-dashboard';
  root.hidden=true;
  root.innerHTML=`
    <header class="dash-page-head">
      <h1>单病种绩效看板</h1>
    </header>
    <div class="dash-canvas">
    <div class="dash-filter-row">
      <div class="dash-date ant-picker ant-picker-range" id="dashRangePicker">
        <button class="dash-range-trigger" id="dashRangeTrigger" type="button" aria-label="统计日期范围" aria-haspopup="dialog" aria-expanded="false">
          <span class="dash-range-value" id="dashStartText">2025/05/01</span>
          <span class="ant-picker-range-separator" aria-hidden="true">→</span>
          <span class="dash-range-value" id="dashEndText">2025/05/31</span>
          <svg class="dash-calendar-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4m8-4v4M3 10h18"/></svg>
        </button>
        <input id="dashStartDate" type="hidden" value="2025-05-01">
        <input id="dashEndDate" type="hidden" value="2025-05-31">
        <div class="dash-range-dropdown" id="dashRangeDropdown" role="dialog" aria-label="选择统计日期范围" hidden>
          <div class="dash-calendar-panels" id="dashCalendarPanels"></div>
        </div>
      </div>
      ${buildDashboardSelect('医疗集团',['医疗集团','区域医联体'])}
      ${buildDashboardSelect('医疗机构',['医疗机构','市中心医院','社区卫生中心'])}
      ${buildDashboardSelect('团队',['团队','高血压管理团队'])}
      ${buildDashboardSelect('个人',['个人','羊医生'])}
    </div>
    <section class="dash-section">
      <h2 class="section-title">宏观成效指标</h2>
      <div class="macro-grid">${macroCards}</div>
    </section>
    <div class="dashboard-middle">
      <section class="dash-panel">
        <h2 class="section-title">慢性病成效指标</h2>
        <div class="mini-metrics four">
          ${[['血压达标率','68.3'],['血糖达标率','61.7'],['用药依从率','72.6'],['复查完成率','65.4']].map(([t,v],i)=>`<article class="mini-card"><span>${t}</span><strong data-base="${v}" data-unit="%" data-kind="decimal">${v}%</strong><small>较上月 <b>↑ ${[2.5,1.8,2.1,1.6][i]}%</b></small></article>`).join('')}
        </div>
        <div class="chart-card line-chart"><h3>指标达标率趋势</h3><div class="echart-box" id="trendLineChart"></div></div>
      </section>
      <section class="dash-panel">
        <h2 class="section-title">服务资源应用情况</h2>
        <div class="mini-metrics five">${resourceCards}</div>
        <div class="resource-charts">
          <div class="chart-card"><h3>服务方式占比</h3><div class="echart-box" id="servicePieChart"></div></div>
          <div class="chart-card"><h3>资源使用趋势</h3><div class="echart-box" id="resourceBarChart"></div></div>
        </div>
      </section>
    </div>
    <div class="dashboard-bottom">
      <section class="dash-panel">
        <h2 class="section-title">流程统计</h2>
        <div class="flow-layout">
          <div class="funnel-chart" id="referralFunnelChart"></div>
          <div class="flow-stats">${[['向上级转诊率','53.3%'],['向下级转诊率','46.7%'],['转诊成功率','86.7%'],['转诊闭环率','86.0%']].map(([t,v])=>`<article class="mini-card"><span>${t}</span><strong>${v}</strong><small>较上月 <b>↑ 2.1%</b></small></article>`).join('')}</div>
          <div class="reason-table"><h3>转诊原因分布 TOP5</h3><table><thead><tr><th>转诊原因</th><th>人数</th><th>占比</th></tr></thead><tbody><tr><td>病情加重</td><td>856</td><td>36.3%</td></tr><tr><td>诊断明确</td><td>542</td><td>23.0%</td></tr><tr><td>治疗方案调整</td><td>368</td><td>15.6%</td></tr><tr><td>检查需求</td><td>302</td><td>12.8%</td></tr><tr><td>其他</td><td>288</td><td>12.3%</td></tr></tbody></table></div>
        </div>
      </section>
      <section class="dash-panel">
        <h2 class="section-title">人群分析</h2>
        <div class="crowd-tabs" id="crowdTabs"><button class="active">年龄分布</button><button>性别分布</button><button>地区分布</button><button>疾病分布</button><button>风险等级</button><button>控制情况</button><button>依从性</button></div>
        <div class="crowd-charts">
          <div class="age-donut-wrap"><div class="echart-box" id="agePieChart"></div></div>
          <div class="crowd-bars-wrap"><h3>不同人群随访完成率对比</h3><div class="echart-box" id="crowdBarChart"></div></div>
        </div>
      </section>
    </div>
    <footer class="dash-footer"><span>注：数据统计截止至 2025-05-31 23:59:59，较上月数据为 2025-04-01 ~ 2025-04-30</span><span id="dashUpdateTime">数据更新时间：2025-06-01 09:30:00</span><button class="dash-refresh" id="dashRefresh">⟳　刷新</button></footer>
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
  root.querySelector('#crowdTabs').addEventListener('click',event=>{
    if(event.target.tagName!=='BUTTON')return;
    root.querySelectorAll('#crowdTabs button').forEach(button=>button.classList.remove('active'));
    event.target.classList.add('active');
    showToast(`已切换至${event.target.textContent}`);
  });
  root.querySelector('#dashRefresh').addEventListener('click',()=>{
    refreshDashboardMetrics();
    root.querySelector('#dashUpdateTime').textContent=`数据更新时间：${new Date().toLocaleString('zh-CN',{hour12:false})}`;
    showToast('看板数据已刷新');
  });
  return root;
}

function refreshDashboardMetrics(){
  const root=$('#performanceDashboard');
  if(!root)return;
  const offset=[...root.querySelectorAll('.dash-filter')].reduce((sum,select)=>sum+Number(select.dataset.selectedIndex||0),0);
  const factor=1+offset*.006;
  root.querySelectorAll('[data-base]').forEach(node=>{
    const value=Number(node.dataset.base)*factor;
    const unit=node.dataset.unit||'';
    const formatted=node.dataset.kind==='int'?Math.round(value).toLocaleString():value.toFixed(1);
    node.innerHTML=`${formatted}<em>${unit}</em>`;
  });
}

let dashboardCharts=[];
let dashboardChartMap={};
let dashboardChartsReady=false;

function initDashboardCharts(){
  if(dashboardChartsReady||!window.echarts)return;
  const root=$('#performanceDashboard');
  const create=(id,option)=>{
    const chart=window.echarts.init(root.querySelector('#'+id),null,{renderer:'canvas'});
    chart.setOption(option);
    dashboardCharts.push(chart);
    dashboardChartMap[id]=chart;
  };
  const textColor='#52627a';
  const axisLine={lineStyle:{color:'#dfe6f0'}};
  const splitLine={lineStyle:{color:'#edf1f6'}};
  const tooltip={trigger:'axis',backgroundColor:'rgba(20,34,58,.94)',borderWidth:0,textStyle:{color:'#fff',fontSize:12},padding:[9,12]};

  create('trendLineChart',{
    color:['#397bf0','#45b49b','#ff8b2d','#765cd7'],tooltip,
    legend:{top:2,itemWidth:10,itemHeight:6,textStyle:{color:textColor,fontSize:11}},
    grid:{left:42,right:18,top:42,bottom:28},
    xAxis:{type:'category',boundaryGap:false,data:['05-01','05-06','05-11','05-16','05-21','05-26','05-31'],axisLine,axisTick:{show:false},axisLabel:{color:textColor}},
    yAxis:{type:'value',min:0,max:100,axisLabel:{color:textColor,formatter:'{value}%'},axisLine:{show:false},axisTick:{show:false},splitLine},
    series:[
      {name:'血压达标率',type:'line',smooth:.32,symbol:'circle',symbolSize:6,data:[68,73,67,72,69,75,71],lineStyle:{width:2.5},areaStyle:{opacity:.035}},
      {name:'血糖达标率',type:'line',smooth:.32,symbol:'circle',symbolSize:6,data:[57,61,56,63,58,65,62],lineStyle:{width:2.5}},
      {name:'用药依从率',type:'line',smooth:.32,symbol:'circle',symbolSize:6,data:[42,47,44,49,45,51,48],lineStyle:{width:2.5}},
      {name:'复查完成率',type:'line',smooth:.32,symbol:'circle',symbolSize:6,data:[28,32,29,34,31,36,33],lineStyle:{width:2.5}}
    ]
  });

  create('servicePieChart',{
    color:['#397bf0','#45b49b','#ff8b2d','#765cd7','#6c7b96'],
    tooltip:{trigger:'item',formatter:'{b}<br/>{c}%'},
    legend:{orient:'vertical',right:8,top:'center',itemWidth:10,itemHeight:10,textStyle:{color:textColor,fontSize:11}},
    series:[{name:'服务方式',type:'pie',radius:['42%','66%'],center:['34%','53%'],label:{show:false},emphasis:{scale:true,scaleSize:8,label:{show:true,fontSize:13,fontWeight:700,formatter:'{d}%'}},data:[
      {value:46.5,name:'AI外呼'},{value:31.2,name:'消息推送'},{value:10.3,name:'人工外呼'},{value:5.8,name:'医生人工处理'},{value:6.2,name:'其他'}
    ]}]
  });

  create('resourceBarChart',{
    color:['#397bf0','#45b49b','#ff8b2d','#765cd7'],tooltip,
    legend:{top:2,itemWidth:10,itemHeight:7,textStyle:{color:textColor,fontSize:10}},
    grid:{left:46,right:14,top:42,bottom:30},
    xAxis:{type:'category',data:['05-01','05-06','05-11','05-16','05-21','05-26','05-31'],axisLine,axisTick:{show:false},axisLabel:{color:textColor,fontSize:10}},
    yAxis:{type:'value',axisLine:{show:false},axisTick:{show:false},axisLabel:{color:textColor,fontSize:10},splitLine},
    series:[
      {name:'AI外呼次数',type:'bar',barMaxWidth:10,data:[15800,16200,15700,15400,14900,14600,14100],itemStyle:{borderRadius:[3,3,0,0]}},
      {name:'消息推送次数',type:'bar',barMaxWidth:10,data:[6200,6800,6500,7200,6900,7400,7100],itemStyle:{borderRadius:[3,3,0,0]}},
      {name:'人工外呼次数',type:'bar',barMaxWidth:10,data:[3400,3600,4100,3700,3900,4200,4000],itemStyle:{borderRadius:[3,3,0,0]}},
      {name:'人工处理量',type:'bar',barMaxWidth:10,data:[2100,2300,2200,2500,2400,2600,2350],itemStyle:{borderRadius:[3,3,0,0]}}
    ]
  });

  create('referralFunnelChart',{
    color:['#397bf0','#72a8f2','#a9c9ef'],
    tooltip:{trigger:'item',formatter:'{b}<br/>{c} 人'},
    series:[{name:'转诊流程',type:'funnel',left:'8%',top:8,bottom:8,width:'84%',min:0,max:2026,minSize:'48%',maxSize:'100%',sort:'descending',gap:3,label:{show:true,position:'inside',color:'#fff',fontSize:10,formatter:'{b}  {c}'},labelLine:{show:false},itemStyle:{borderColor:'#fff',borderWidth:1},emphasis:{label:{fontSize:12,fontWeight:700}},data:[
      {value:2026,name:'完成评估'},{value:1256,name:'向上转诊'},{value:1100,name:'向下转诊'}
    ]}]
  });

  create('agePieChart',{
    color:['#68a2f5','#45b49b','#ff8b2c','#7a5bd8','#63728d'],
    tooltip:{trigger:'item',formatter:'{b}<br/>{c}%'},
    legend:{orient:'vertical',right:10,top:'center',itemWidth:10,itemHeight:10,textStyle:{color:textColor,fontSize:11}},
    graphic:[{type:'text',left:'31%',top:'47%',z:100,style:{text:'32,568 人',fill:'#17223a',font:'700 15px sans-serif',textAlign:'center',textVerticalAlign:'middle'}}],
    series:[{name:'年龄分布',type:'pie',radius:['43%','68%'],center:['31%','52%'],label:{show:false},emphasis:{scaleSize:7},data:[
      {value:1.2,name:'18岁以下'},{value:12.5,name:'18-40岁'},{value:45.3,name:'41-60岁'},{value:35.6,name:'61-80岁'},{value:5.4,name:'80岁以上'}
    ]}]
  });

  create('crowdBarChart',{
    color:['#397bf0'],
    tooltip:{trigger:'axis',axisPointer:{type:'shadow'},valueFormatter:value=>value+'%'},
    grid:{left:42,right:16,top:25,bottom:34},
    xAxis:{type:'category',data:['18岁以下','18-40岁','41-60岁','61-80岁','80岁以上'],axisLine,axisTick:{show:false},axisLabel:{color:textColor,fontSize:10}},
    yAxis:{type:'value',min:0,max:100,axisLabel:{color:textColor,formatter:'{value}%'},axisLine:{show:false},axisTick:{show:false},splitLine},
    series:[{name:'随访完成率',type:'bar',barWidth:28,data:[60.3,72.1,79.6,81.3,76.8],label:{show:true,position:'top',formatter:'{c}%',color:'#1c2a44',fontWeight:700,fontSize:10},itemStyle:{borderRadius:[4,4,0,0]}}]
  });

  dashboardChartsReady=true;
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
