const columns = ['姓名','就诊卡号','年龄','性别','手机号码','最近就诊科室','最近诊断','最近就诊日期','已加入团队','用户类型','纳管状态','操作'];
const userTypes = ['公卫用户','医院用户','公卫及医院用户'];
const managementStatuses = ['公卫已纳，医院待纳','医院已纳，公卫待纳','双方未纳管'];
const baseRows = [
  ['王大雷','--','36岁','男','139****4287','--','--','--','--'],
  ['蔡文姬','--','18岁','女','182402136','--','--','--','90天减重管理'],
  ['王欢欢','--','21岁','女','182****2136','--','--','--','90天减重管理'],
  ['连泽杰','--','26岁','男','135****9307','--','--','--','测试团队'],
  ['李虎虎','--','46岁','男','130****5311','--','--','--','测试团队2'],
  ['李铭','--','29岁','男','133****1232','--','--','--','--'],
  ['李三','--','32岁','男','130****5937','--','--','--','--'],
  ['彭培林','--','56岁','男','185****0963','--','--','--','--'],
  ['曾翔','--','34岁','男','156****8247','--','--','--','测试团队2'],
  ['张阿姨','--','64岁','女','123****8912','--','--','--','勿动 桔梗90天陪跑团春晓测试0714'],
  ['陈静','A100238','42岁','女','138****5621','内分泌科','2型糖尿病','2026-07-18','90天减重管理'],
  ['赵子昂','A100239','28岁','男','186****7710','营养科','超重','2026-07-15','测试团队'],
  ['孙晓梅','--','51岁','女','177****8402','心内科','高血压','2026-07-11','--'],
  ['周启明','A100241','39岁','男','131****6609','全科','脂肪肝','2026-07-09','测试团队2'],
  ['吴丽','--','24岁','女','159****1298','--','--','--','--'],
  ['郑强','A100243','47岁','男','136****7734','骨科','腰椎间盘突出','2026-06-29','--'],
  ['冯琴','--','33岁','女','188****6301','妇科','--','2026-06-25','90天减重管理'],
  ['褚文博','A100245','61岁','男','155****4780','心内科','冠心病','2026-06-21','测试团队'],
  ['卫晓雨','--','22岁','女','176****5528','--','--','--','--'],
  ['蒋伟','A100247','45岁','男','132****9036','消化内科','慢性胃炎','2026-06-13','测试团队2'],
  ['沈琳','--','30岁','女','180****7155','营养科','--','2026-06-08','90天减重管理'],
  ['韩峰','A100249','58岁','男','137****2881','呼吸科','慢性支气管炎','2026-05-30','--'],
  ['杨倩','--','27岁','女','158****9450','--','--','--','--'],
  ['朱建国','A100251','66岁','男','139****6147','神经内科','脑梗恢复期','2026-05-19','测试团队'],
  ['秦芳','--','37岁','女','181****3072','内分泌科','甲状腺结节','2026-05-14','--'],
  ['尤浩','A100253','41岁','男','153****8264','全科','高尿酸血症','2026-05-02','测试团队2'],
  ['许悦','--','20岁','女','187****4319','--','--','--','--'],
  ['何志远','A100255','54岁','男','134****1906','营养科','肥胖症','2026-04-22','90天减重管理']
].map((row,index)=>[...row,userTypes[index%userTypes.length],managementStatuses[index%managementStatuses.length]]);

const state={page:1,size:10,query:'',team:'',userType:'',gender:'',minAge:'',maxAge:'',visible:columns.map(()=>true)};
const $=s=>document.querySelector(s);
const head=$('#tableHead'),body=$('#tableBody'),empty=$('#emptyState');

function filteredRows(){
  const q=state.query.trim().toLowerCase();
  return baseRows.filter(r=>{
    const age=parseInt(r[2]);
    return (!q||[r[0],r[1],r[4]].some(v=>v.toLowerCase().includes(q)))&&
      (!state.team||r[8]===state.team)&&(!state.userType||r[9]===state.userType)&&(!state.gender||r[3]===state.gender)&&
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
    if(i===4)return `<td><span class="phone">${v}<svg><use href="#i-eye"/></svg></span></td>`;
    if(i===9)return `<td><span class="user-type-tag">${v}</span></td>`;
    if(i===10)return `<td><span class="management-tag status-${managementStatuses.indexOf(v)+1}">${v}</span></td>`;
    return `<td title="${v}">${v}</td>`;
  }).join('')}${state.visible[11]?`<td><div class="actions"><button class="link-button record" data-name="${r[0]}">档案</button><button class="link-button group" data-name="${r[0]}">选择分组</button></div></td>`:''}</tr>`).join('');
  empty.classList.toggle('show',!shown.length);
  $('#totalText').textContent=`共 ${rows.length} 条`;
  $('#prevPage').disabled=state.page===1;$('#nextPage').disabled=state.page===pages;
  $('#pageButtons').innerHTML=Array.from({length:pages},(_,i)=>`<button class="${state.page===i+1?'active':''}" data-page="${i+1}">${i+1}</button>`).join('');
  $('#jumpPage').max=pages;
}
function showToast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.classList.remove('show'),1800)}
function openModal(name,type='group'){
  $('#modalTitle').textContent=type==='record'?`${name}的患者档案`:`为${name}选择分组`;
  $('#modalBody').innerHTML=type==='record'?`<p>姓名：${name}</p><p>患者健康档案详情已载入。</p>`:`<div class="team-options">${['90天减重管理','测试团队','测试团队2'].map(t=>`<label class="team-option"><input type="radio" name="team" value="${t}"><span>${t}</span></label>`).join('')}</div>`;
  $('#modalBackdrop').classList.add('show');
}

renderHead();render();
$('#searchInput').addEventListener('input',e=>{state.query=e.target.value;state.page=1;render()});
$('#teamSelect').addEventListener('change',e=>{state.team=e.target.value;state.page=1;render()});
$('#userTypeSelect').addEventListener('change',e=>{state.userType=e.target.value;state.page=1;render()});
$('#genderFilter').addEventListener('change',e=>{state.gender=e.target.value;state.page=1;render()});
['minAge','maxAge'].forEach(id=>$('#'+id).addEventListener('input',e=>{state[id]=e.target.value;state.page=1;render()}));
$('#moreFilter').addEventListener('click',()=>$('#advancedFilter').classList.toggle('open'));
$('#resetFilter').addEventListener('click',()=>{state.query=state.team=state.userType=state.gender=state.minAge=state.maxAge='';$('#searchInput').value='';$('#teamSelect').value='';$('#userTypeSelect').value='';$('#genderFilter').value='';$('#minAge').value=$('#maxAge').value='';render()});
$('#clearSearch').addEventListener('click',()=>$('#resetFilter').click());
$('#prevPage').addEventListener('click',()=>{if(state.page>1){state.page--;render()}});$('#nextPage').addEventListener('click',()=>{const p=Math.ceil(filteredRows().length/state.size);if(state.page<p){state.page++;render()}});
$('#pageButtons').addEventListener('click',e=>{if(e.target.dataset.page){state.page=+e.target.dataset.page;render()}});
$('#pageSize').addEventListener('change',e=>{state.size=+e.target.value;state.page=1;render()});
$('#jumpPage').addEventListener('change',e=>{const p=Math.ceil(filteredRows().length/state.size);state.page=Math.max(1,Math.min(+e.target.value||1,p));render();e.target.value='' });
body.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.classList.contains('record'))openModal(b.dataset.name,'record');if(b.classList.contains('group'))openModal(b.dataset.name)});
$('#closeModal').addEventListener('click',()=>$('#modalBackdrop').classList.remove('show'));$('#modalBackdrop').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.classList.remove('show')});
$('#modalBody').addEventListener('change',e=>{if(e.target.name==='team'){showToast(`已选择“${e.target.value}”`);setTimeout(()=>$('#modalBackdrop').classList.remove('show'),350)}});
$('#columnButton').addEventListener('click',()=>{state.visible[5]=!state.visible[5];state.visible[6]=!state.visible[6];renderHead();render();showToast(state.visible[5]?'已显示诊疗信息列':'已隐藏诊疗信息列')});
$('#collapseBtn').addEventListener('click',()=>$('#sidebar').classList.toggle('collapsed'));
document.querySelectorAll('.subnav button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.subnav button').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-group').forEach(x=>x.classList.remove('current'));
  document.querySelector('.nav-item.dashboard').classList.remove('active');
  btn.classList.add('active');
  btn.closest('.nav-group').classList.add('current');
  $('#pageTitle').textContent=btn.dataset.page;
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
  showToast('已切换至工作台');
});
