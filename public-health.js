const phCategories = [
  '公卫已纳，医院待纳',
  '医院已纳，公卫待纳',
  '双方未纳管'
];

const phCategoryClass = value => value === phCategories[0] ? 'public' : value === phCategories[1] ? 'hospital' : 'unmanaged';
const phRegions = ['东区','西区','仁和区','米易县','盐边县'];
const phOrganizations = ['攀枝花市中心医院','攀枝花市中西医结合医院','攀枝花学院附属医院','仁和区人民医院','米易县人民医院'];
const phTaskTeams = ['高血压管理团队','糖尿病管理团队','冠心病管理团队','脑卒中管理团队','慢阻肺管理团队','慢性肾病管理团队','血脂异常管理团队','肥胖减重管理团队'];
const phTeams = ['心血管慢病管理团队','糖尿病管理团队','呼吸慢病管理团队','家庭医生管理团队'];
const phDoctors = ['张海明','李医生','王医生','刘医生','陈医生'];
const phMedicalGroups = ['攀枝花市紧密型城市医疗集团','攀枝花学院附属医院医联体'];
const phTaskTypes = [
  '健康评估',
  '常规随访',
  '复诊提醒',
  '用药依从性评估',
  '异常指标处置',
  '并发症筛查',
  '生活方式指导',
  '饮食干预',
  '运动指导',
  '指标监测',
  '公卫备案确认',
  '医院纳管确认'
];
const phStatuses = ['未开始','进行中','已完成','已终止'];
const phPriorities = ['高','中','低'];

function phDate(offset, withTime = false) {
  const date = new Date(2026, 7, 2, 9, 20);
  date.setDate(date.getDate() - offset);
  const pad = value => String(value).padStart(2, '0');
  const day = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  return withTime ? `${day} ${pad(date.getHours())}:${pad((offset * 7 + 13) % 60)}` : day;
}

const phPatientRows = window.patientBaseRows || [];
function phDiseaseTeam(diagnosis) {
  if (/慢性肾|肾病/.test(diagnosis)) return phTaskTeams[5];
  if (/糖尿病/.test(diagnosis)) return phTaskTeams[1];
  if (/冠状|冠心/.test(diagnosis)) return phTaskTeams[2];
  if (/脑梗|脑缺血|脑卒中/.test(diagnosis)) return phTaskTeams[3];
  if (/慢性阻塞|慢阻肺/.test(diagnosis)) return phTaskTeams[4];
  if (/高脂|血脂/.test(diagnosis)) return phTaskTeams[6];
  if (/肥胖|代谢综合/.test(diagnosis)) return phTaskTeams[7];
  return phTaskTeams[0];
}

const publicHealthTasks = Array.from({length: phPatientRows.length * 3}, (_, index) => {
  const patient = phPatientRows[index % phPatientRows.length];
  const taskType = phTaskTypes[index % phTaskTypes.length];
  const status = phStatuses[(index + Math.floor(index / 6)) % phStatuses.length];
  const team = phDiseaseTeam(patient[7]);
  const startAt = phDate(index % 26, true);
  return {
    id: `GW202608${String(index + 1).padStart(4, '0')}`,
    taskName: `${team.replace('管理团队','')}${taskType}任务`,
    patient: patient[0],
    cardNumber: patient[1],
    age: Number.parseInt(patient[2], 10),
    gender: patient[3],
    category: patient[4],
    phone: patient[5],
    taskType,
    diagnosis: patient[7],
    team,
    person: phDoctors[index % phDoctors.length],
    owner: index % 6 === 0 ? '--' : phDoctors[index % phDoctors.length],
    startAt,
    endAt: status === '未开始' || status === '进行中' ? '--' : phDate((index % 26) - 3, true),
    status,
    result: status === '已完成' ? '任务已完成' : status === '已终止' ? '任务已终止' : '--'
  };
});

const phStatTotals = [1186,942,1538,1274,886,1396,1057,1642,1018,1247,1459,934,1586,1112,1328,872,1694,1206,978,1421,1163,1615,918,1294,1517,1084,1726,1029,1367,907,1608,1146,1283,965,1472,1104];
const phPublicShares = [.302,.287,.318,.294,.276,.311,.299,.323,.284,.307,.291,.315];
const phHospitalShares = [.238,.254,.229,.246,.262,.233,.249,.221,.258,.237,.251,.226];
const phAutoShares = [.746,.782,.731,.805,.768,.754,.793,.719,.776,.812,.738,.765];
const phGenerateShares = [.836,.792,.864,.818,.851,.807,.879,.825,.798,.867,.842,.813];
const phCompleteShares = [.804,.768,.832,.791,.846,.813,.779,.854,.821,.786,.839,.808];
const phManagedShares = [.684,.637,.711,.668,.726,.692,.651,.704,.673,.719,.662,.697];

const publicHealthStats = Array.from({length: 36}, (_, index) => {
  const total = phStatTotals[index];
  const publicOnly = Math.round(total * phPublicShares[index % phPublicShares.length]);
  const hospitalOnly = Math.round(total * phHospitalShares[index % phHospitalShares.length]);
  const unmanaged = total - publicOnly - hospitalOnly;
  const autoIdentified = Math.round(unmanaged * phAutoShares[index % phAutoShares.length]);
  const generated = Math.round(autoIdentified * phGenerateShares[index % phGenerateShares.length]);
  const assigned = Math.round(generated * ([.934,.958,.921,.969,.946,.912][index % 6]));
  const completed = Math.round(generated * phCompleteShares[index % phCompleteShares.length]);
  const managed = Math.round(completed * phManagedShares[index % phManagedShares.length]);
  return {
    id: index + 1,
    date: phDate(Math.floor(index / phRegions.length)),
    region: phRegions[index % phRegions.length],
    medicalGroup: index % 2 ? '攀枝花市紧密型城市医疗集团' : '攀枝花学院附属医院医联体',
    organization: phOrganizations[index % phOrganizations.length],
    team: phTeams[index % phTeams.length],
    person: phDoctors[index % phDoctors.length],
    total,
    publicOnly,
    hospitalOnly,
    unmanaged,
    autoIdentified,
    generated,
    assigned,
    pending: autoIdentified - generated,
    completed,
    managed,
    overdue: Math.round(generated * ([.031,.024,.038,.019,.027,.034][index % 6]))
  };
});

const phTrendPublic = [842,876,903,891,928,956,941,982,1016,998,1037,1068,1054,1092,1118];
const phTrendHospital = [691,706,734,721,748,772,759,793,817,806,839,861,852,879,901];
const phTrendUnmanaged = [1236,1274,1311,1288,1342,1376,1355,1408,1451,1427,1479,1518,1496,1542,1577];
const publicHealthTrend = Array.from({length:15},(_,index)=>{
  const unmanaged=phTrendUnmanaged[index];
  const autoIdentified=Math.round(unmanaged*[.758,.771,.764,.779,.767][index%5]);
  const generated=Math.round(autoIdentified*[.831,.846,.838,.852][index%4]);
  const completed=Math.round(generated*[.792,.807,.801,.816,.809][index%5]);
  const managed=Math.round(completed*[.671,.684,.676,.692][index%4]);
  return {date:phDate(14-index),publicOnly:phTrendPublic[index],hospitalOnly:phTrendHospital[index],unmanaged,autoIdentified,generated,completed,managed};
});

const phTaskState = {page: 1, size: 20, team: phTaskTeams[0], query: '', category: '', type: '', startDate: '', endDate: '', status: ''};
const phStatState = {page: 1, size: 20, startDate: '2026-07-01', endDate: '2026-08-02', region: '', group: '', organization: '', team: '', person: ''};

function phOptions(values, placeholder) {
  return `<option value="">${placeholder}</option>${values.map(value => `<option value="${value}">${value}</option>`).join('')}`;
}

function phTaskSelect(key, label, values) {
  return `<div class="task-ant-select" data-task-filter-key="${key}" data-placeholder="${label}" data-value="">
    <button class="task-ant-select-selector" type="button" role="combobox" aria-label="${label}" aria-haspopup="listbox" aria-expanded="false">
      <span class="task-ant-select-value placeholder">${label}</span><span class="task-ant-clear" data-task-clear-filter="${key}" role="button" tabindex="0" aria-label="清除${label}" hidden>×</span><span class="task-ant-select-arrow" aria-hidden="true"></span>
    </button>
    <div class="task-ant-select-dropdown" role="listbox" hidden>
      <button class="task-ant-select-option selected" type="button" role="option" data-value="" aria-selected="true"><span>${label}</span><i aria-hidden="true">✓</i></button>
      ${values.map(value => `<button class="task-ant-select-option" type="button" role="option" data-value="${value}" aria-selected="false"><span>${value}</span><i aria-hidden="true">✓</i></button>`).join('')}
    </div>
  </div>`;
}

function phTaskDatePicker(key, label) {
  return `<div class="task-ant-date" data-task-date-key="${key}" data-label="${label}">
    <button class="task-ant-date-selector" type="button" aria-label="${label}" aria-haspopup="dialog" aria-expanded="false">
      <span class="task-ant-date-value placeholder">${label}</span>
      <span class="task-ant-clear" data-task-clear-filter="${key}" role="button" tabindex="0" aria-label="清除${label}" hidden>×</span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M8 3v4m8-4v4M3 10h18"></path></svg>
    </button>
    <input id="${key === 'startDate' ? 'phTaskStartDate' : 'phTaskEndDate'}" type="hidden" value="">
    <div class="task-ant-date-dropdown" role="dialog" aria-label="选择${label}" hidden></div>
  </div>`;
}

function phStatSelect(key, label, values) {
  return `<div class="dash-ant-select ph-stat-select" data-stat-key="${key}" data-value="">
    <button class="dash-ant-select-selector" type="button" role="combobox" aria-label="${label}" aria-haspopup="listbox" aria-expanded="false">
      <span class="dash-ant-select-value">${label}</span><span class="dash-ant-select-arrow" aria-hidden="true"></span>
    </button>
    <div class="dash-ant-select-dropdown" role="listbox" hidden>
      <button class="dash-ant-select-option selected" type="button" role="option" data-value="" aria-selected="true"><span>${label}</span><i aria-hidden="true">✓</i></button>
      ${values.map(value => `<button class="dash-ant-select-option" type="button" role="option" data-value="${value}" aria-selected="false"><span>${value}</span><i aria-hidden="true">✓</i></button>`).join('')}
    </div>
  </div>`;
}

function phPaginationItems(pageCount, current) {
  if (pageCount <= 7) return Array.from({length: pageCount}, (_, index) => index + 1);
  const items = [1];
  if (current > 4) items.push('ellipsis-left');
  const start = Math.max(2, current - 1);
  const end = Math.min(pageCount - 1, current + 1);
  for (let page = start; page <= end; page += 1) items.push(page);
  if (current < pageCount - 3) items.push('ellipsis-right');
  items.push(pageCount);
  return items;
}

function phShowToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(phShowToast.timer);
  phShowToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function buildPublicHealthTaskPage() {
  const page = document.createElement('section');
  page.id = 'publicHealthTaskPage';
  page.className = 'ph-page ph-task-page';
  page.hidden = true;
  page.innerHTML = `
    <section class="ph-team-panel" aria-label="团队切换">
      <div class="ph-team-switcher" id="phTaskTeams"></div>
    </section>
    <section class="ph-list-panel ph-task-list-panel">
      <div class="ph-task-query" aria-label="任务查询">
        ${phTaskDatePicker('startDate','任务开始时间')}
        ${phTaskSelect('category','全部纳管状态',phCategories)}
        ${phTaskSelect('type','全部任务类型',phTaskTypes)}
        ${phTaskDatePicker('endDate','任务结束时间')}
        <label class="ph-search"><svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m15.5 15.5 4.5 4.5"></path></svg><input id="phTaskSearch" type="search" placeholder="任务名称/患者姓名"></label>
        <div class="ph-toolbar-space"></div>
        <button class="task-ant-button task-ant-button-default ph-query-reset" id="phTaskReset" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 5v6h-6"></path></svg><span>重置</span></button>
        <button class="task-ant-button task-ant-button-primary ph-query-submit" id="phTaskQuery" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m15.5 15.5 4.5 4.5"></path></svg><span>查询</span></button>
      </div>
      <div class="ph-task-status-row">
        <div class="ph-status-tabs" id="phTaskStatusTabs" aria-label="任务状态筛选"></div>
        <div class="ph-task-actions">
          <button class="ph-primary-button" id="phTaskExport" type="button">导出</button>
        </div>
      </div>
      <div class="ph-table-wrap ph-task-table-wrap">
        <table class="ph-table ph-task-table">
          <thead><tr><th>任务名称</th><th>患者姓名</th><th>性别</th><th>年龄</th><th>纳管状态</th><th>任务类型</th><th>任务开始时间</th><th>任务结束时间</th><th>状态</th><th>操作</th></tr></thead>
          <tbody id="phTaskBody"></tbody>
        </table>
      </div>
      <footer class="ph-pagination">
        <span id="phTaskTotal"></span><button id="phTaskPrev" type="button">‹</button><div id="phTaskPages"></div><button id="phTaskNext" type="button">›</button>
        <select id="phTaskPageSize" aria-label="每页条数"><option value="10">10 条/页</option><option value="20" selected>20 条/页</option></select><span>跳至</span><input id="phTaskJump" type="number" min="1"><span>页</span>
      </footer>
    </section>
    <div class="ph-drawer-mask" id="phTaskDrawer" hidden>
      <aside class="ph-drawer" role="dialog" aria-modal="true" aria-labelledby="phDrawerTitle">
        <header><div><span>公卫任务处理</span><h2 id="phDrawerTitle">任务详情</h2></div><button id="phDrawerClose" type="button" aria-label="关闭">×</button></header>
        <div class="ph-drawer-content" id="phDrawerContent"></div>
        <footer><button id="phDrawerCancel" type="button">取消</button><button class="primary" id="phDrawerSave" type="button">保存处理结果</button></footer>
      </aside>
    </div>`;
  document.querySelector('.main-content').appendChild(page);
  return page;
}

function buildPublicHealthStatsPage() {
  const page = document.createElement('section');
  page.id = 'publicHealthStatsPage';
  page.className = 'ph-page ph-stats-page';
  page.hidden = true;
  page.innerHTML = `
    <section class="ph-stats-filter dash-filter-row">
      <div class="dash-date ant-picker ant-picker-range ph-stat-date" id="phStatDatePicker">
        <button class="dash-range-trigger" id="phStatDateTrigger" type="button" aria-label="统计日期范围" aria-haspopup="dialog" aria-expanded="false">
          <span class="dash-range-value" id="phStatStartText">2026/07/01</span><span class="ant-picker-range-separator">→</span><span class="dash-range-value" id="phStatEndText">2026/08/02</span>
          <svg class="dash-calendar-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4m8-4v4M3 10h18"/></svg>
        </button>
        <div class="dash-range-dropdown" id="phStatDateDropdown" role="dialog" aria-label="选择统计日期范围" hidden><div class="dash-calendar-panels" id="phStatCalendarPanels"></div></div>
      </div>
      ${phStatSelect('region','全市',phRegions)}
      ${phStatSelect('group','全部医疗集团',phMedicalGroups)}
      ${phStatSelect('organization','全部机构',phOrganizations)}
      ${phStatSelect('team','全部团队',phTeams)}
      ${phStatSelect('person','全部',phDoctors)}
    </section>
    <section class="ph-summary-panel ph-stat-summary">
      <header class="ph-section-title"><h2>公卫纳管概况</h2><span class="ph-live-update">更新于：<time id="phStatUpdatedAt">2026-08-02 09:30</time><button id="phStatRefresh" type="button" aria-label="刷新实时数据" title="刷新实时数据"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6v5h-5M4 18v-5h5M6.1 9a7 7 0 0 1 11.5-2.1L20 11M4 13l2.4 4.1A7 7 0 0 0 17.9 15"></path></svg></button></span></header>
      <div class="ph-stat-kpis" id="phStatKpis"></div>
    </section>
    <div class="ph-chart-grid">
      <section class="ph-chart-card"><header class="ph-section-title"><h2>纳管人群分布</h2></header><div id="phCategoryChart"></div></section>
      <section class="ph-chart-card"><header class="ph-section-title"><h2>纳管人数趋势</h2></header><div id="phTrendChart"></div></section>
      <section class="ph-chart-card ph-funnel-card"><header class="ph-section-title"><h2>任务处理漏斗</h2></header><div id="phFunnelChart"></div></section>
    </div>
    <section class="ph-list-panel ph-stat-list-panel">
      <header class="ph-section-title ph-table-title"><h2>公卫纳管明细</h2><div><button class="ph-primary-button" id="phStatExport" type="button">导出</button></div></header>
      <div class="ph-table-wrap ph-stat-table-wrap">
        <table class="ph-table ph-stat-table">
          <thead><tr><th>统计日期</th><th>所属区域</th><th>医疗集团</th><th>机构</th><th>团队</th><th>公卫已纳<br>医院待纳</th><th>医院已纳<br>公卫待纳</th><th>双方未纳管</th><th>自动识别</th><th>已生成任务</th><th>待生成任务</th><th>已完成任务</th><th>纳管成功</th><th>完成率</th><th>操作</th></tr></thead>
          <tbody id="phStatBody"></tbody>
        </table>
      </div>
      <footer class="ph-pagination">
        <span id="phStatTotal"></span><button id="phStatPrev" type="button">‹</button><div id="phStatPages"></div><button id="phStatNext" type="button">›</button>
        <select id="phStatPageSize" aria-label="每页条数"><option value="10">10 条/页</option><option value="20" selected>20 条/页</option></select><span>跳至</span><input id="phStatJump" type="number" min="1"><span>页</span>
      </footer>
    </section>`;
  document.querySelector('.main-content').appendChild(page);
  return page;
}

const phTaskPage = buildPublicHealthTaskPage();
const phStatsPage = buildPublicHealthStatsPage();

function filteredPublicHealthTasks() {
  const query = phTaskState.query.trim().toLowerCase();
  return publicHealthTasks.filter(task =>
    (!phTaskState.team || task.team === phTaskState.team) &&
    (!query || `${task.id}${task.taskName}${task.patient}${task.cardNumber}${task.phone}`.toLowerCase().includes(query)) &&
    (!phTaskState.category || task.category === phTaskState.category) &&
    (!phTaskState.type || task.taskType === phTaskState.type) &&
    (!phTaskState.status || task.status === phTaskState.status) &&
    (!phTaskState.startDate || task.startAt.slice(0, 10) >= phTaskState.startDate) &&
    (!phTaskState.endDate || (task.endAt !== '--' && task.endAt.slice(0, 10) <= phTaskState.endDate))
  );
}

function renderPublicHealthTaskTeams() {
  const teams = phTaskTeams.map(team => ({value: team, label: team, note: '病种患者任务管理'}));
  phTaskPage.querySelector('#phTaskTeams').innerHTML = teams.map(team => {
    const count = publicHealthTasks.filter(task => task.team === team.value).length;
    return `<button type="button" class="ph-team-card${phTaskState.team === team.value ? ' active' : ''}" data-task-team="${team.value}">
      <span class="ph-team-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"></circle><path d="M3.5 18c.4-3.1 2.2-5 5.5-5s5.1 1.9 5.5 5M16 7.5h4M18 5.5v4M15.5 13.5h4.5M15.5 16.5h4.5"></path></svg></span>
      <span class="ph-team-copy"><strong>${team.label}</strong><small>${team.note}</small></span>
      <em>${count}</em>
      ${phTaskState.team === team.value ? '<i aria-hidden="true">✓</i>' : ''}
    </button>`;
  }).join('');
}

function renderPublicHealthTaskStatuses() {
  const teamRows = publicHealthTasks.filter(task => !phTaskState.team || task.team === phTaskState.team);
  const statuses = [{value: '', label: '全部'}, ...phStatuses.map(status => ({value: status, label: status}))];
  phTaskPage.querySelector('#phTaskStatusTabs').innerHTML = statuses.map(status => {
    const count = status.value ? teamRows.filter(task => task.status === status.value).length : teamRows.length;
    return `<button type="button" class="ph-status-tab${phTaskState.status === status.value ? ' active' : ''}" data-task-status="${status.value}">${status.label}<span>(${count})</span></button>`;
  }).join('');
}

function renderPublicHealthTasks() {
  renderPublicHealthTaskTeams();
  renderPublicHealthTaskStatuses();
  const rows = filteredPublicHealthTasks();
  const pageCount = Math.max(1, Math.ceil(rows.length / phTaskState.size));
  phTaskState.page = Math.min(phTaskState.page, pageCount);
  const pageRows = rows.slice((phTaskState.page - 1) * phTaskState.size, phTaskState.page * phTaskState.size);
  phTaskPage.querySelector('#phTaskBody').innerHTML = pageRows.map(task => `
    <tr>
      <td><strong class="ph-task-name">${task.taskName}</strong></td>
      <td><strong>${task.patient}</strong></td>
      <td>${task.gender}</td><td>${task.age}岁</td>
      <td>${task.category}</td>
      <td>${task.taskType}</td><td>${task.startAt}</td><td>${task.endAt}</td>
      <td><span class="ph-status ph-status-subtle status-${task.status}">${task.status}</span></td>
      <td><div class="ph-row-actions"><button type="button" data-task-action="查看" data-id="${task.id}">查看</button></div></td>
    </tr>`).join('') || '<tr><td colspan="10" class="ph-empty">没有找到符合条件的任务</td></tr>';
  phTaskPage.querySelector('#phTaskTotal').textContent = `共 ${rows.length} 条`;
  phTaskPage.querySelector('#phTaskPrev').disabled = phTaskState.page === 1;
  phTaskPage.querySelector('#phTaskNext').disabled = phTaskState.page === pageCount;
  phTaskPage.querySelector('#phTaskPages').innerHTML = phPaginationItems(pageCount, phTaskState.page).map(item => typeof item === 'string' ? '<span>…</span>' : `<button type="button" class="${item === phTaskState.page ? 'active' : ''}" data-task-page="${item}">${item}</button>`).join('');
  phTaskPage.querySelector('#phTaskJump').max = pageCount;
}

let currentTaskId = '';
function openPublicHealthTask(task, readonly = false) {
  currentTaskId = task.id;
  const drawer = phTaskPage.querySelector('#phTaskDrawer');
  phTaskPage.querySelector('#phDrawerTitle').textContent = `${task.patient} · ${task.id}`;
  phTaskPage.querySelector('#phDrawerContent').innerHTML = `
    <section><h3>患者基本信息</h3><dl class="ph-detail-grid"><div><dt>姓名</dt><dd>${task.patient}</dd></div><div><dt>性别/年龄</dt><dd>${task.gender} / ${task.age}岁</dd></div><div><dt>就诊卡号</dt><dd>${task.cardNumber}</dd></div><div><dt>联系方式</dt><dd>${task.phone}</dd></div><div class="wide"><dt>纳管状态</dt><dd>${task.category}</dd></div></dl></section>
    <section><h3>任务信息</h3><dl class="ph-detail-grid"><div class="wide"><dt>任务名称</dt><dd>${task.taskName}</dd></div><div><dt>所属团队</dt><dd>${task.team}</dd></div><div><dt>任务类型</dt><dd>${task.taskType}</dd></div><div><dt>任务开始时间</dt><dd>${task.startAt}</dd></div><div><dt>任务结束时间</dt><dd>${task.endAt}</dd></div><div><dt>当前状态</dt><dd>${task.status}</dd></div><div><dt>负责人</dt><dd>${task.owner}</dd></div></dl></section>
    <section><h3>处理结果</h3><label class="ph-drawer-field"><span>处理结论</span><select id="phTaskResult" ${readonly ? 'disabled' : ''}><option value="">请选择处理结论</option><option>已完成医院纳管</option><option>已完成公卫备案</option><option>已完成双方纳管</option><option>不符合纳管条件</option><option>患者拒绝</option><option>无法联系</option><option>信息错误</option><option>转其他机构处理</option></select></label><label class="ph-drawer-field"><span>处理说明</span><textarea id="phTaskNote" ${readonly ? 'disabled' : ''} placeholder="填写联系情况、判断依据和后续建议">${task.result === '--' ? '' : task.result}</textarea></label></section>
    <section><h3>操作记录</h3><ol class="ph-timeline"><li><b>系统生成任务</b><span>${task.startAt}</span><p>根据患者病种及健康管理计划生成任务。</p></li><li><b>${task.owner === '--' ? '等待处理' : `已分配给${task.owner}`}</b><span>${task.startAt}</span></li></ol></section>`;
  phTaskPage.querySelector('#phDrawerSave').hidden = readonly;
  drawer.hidden = false;
  requestAnimationFrame(() => drawer.classList.add('show'));
}

function closePublicHealthDrawer() {
  const drawer = phTaskPage.querySelector('#phTaskDrawer');
  drawer.classList.remove('show');
  setTimeout(() => { drawer.hidden = true; }, 180);
}

function filteredPublicHealthStats() {
  return publicHealthStats.filter(row =>
    (!phStatState.startDate || row.date >= phStatState.startDate) &&
    (!phStatState.endDate || row.date <= phStatState.endDate) &&
    (!phStatState.region || row.region === phStatState.region) &&
    (!phStatState.group || row.medicalGroup === phStatState.group) &&
    (!phStatState.organization || row.organization === phStatState.organization) &&
    (!phStatState.team || row.team === phStatState.team) &&
    (!phStatState.person || row.person === phStatState.person)
  );
}

function phStatsAggregate(rows) {
  return rows.reduce((sum, row) => {
    ['total','publicOnly','hospitalOnly','unmanaged','autoIdentified','generated','assigned','pending','completed','managed','overdue'].forEach(key => { sum[key] += row[key]; });
    return sum;
  }, {total:0, publicOnly:0, hospitalOnly:0, unmanaged:0, autoIdentified:0, generated:0, assigned:0, pending:0, completed:0, managed:0, overdue:0});
}

function phYesterdayComparison(rows) {
  const dates=[...new Set(rows.map(row=>row.date))].sort((a,b)=>b.localeCompare(a));
  const latest=phStatsAggregate(rows.filter(row=>row.date===dates[0]));
  const previous=phStatsAggregate(rows.filter(row=>row.date===dates[1]));
  const latestRate=latest.generated?latest.completed/latest.generated*100:0;
  const previousRate=previous.generated?previous.completed/previous.generated*100:0;
  return {latest,previous,rate:latestRate-previousRate};
}

function phChangeNote(value, unit='人', digits=0) {
  if(Math.abs(value)<10**(-digits)/2)return '<span class="ph-kpi-change flat">较昨日持平</span>';
  const direction=value>=0?'增加':'减少';
  const className=value>=0?'up':'down';
  const amount=Math.abs(value).toFixed(digits);
  return `<span class="ph-kpi-change ${className}">较昨日${direction} ${amount}${unit}</span>`;
}

let phCharts = {};
function initPublicHealthCharts() {
  if (!window.echarts) return;
  ['category','trend','funnel'].forEach(key => {
    const element = phStatsPage.querySelector(`#ph${key[0].toUpperCase()}${key.slice(1)}Chart`);
    if (element && !phCharts[key]) phCharts[key] = echarts.init(element);
  });
  renderPublicHealthCharts();
}

function renderPublicHealthCharts() {
  if (!phCharts.category) return;
  const aggregate = phStatsAggregate(filteredPublicHealthStats());
  const cityAggregate = phStatsAggregate(publicHealthStats.filter(row=>(!phStatState.startDate||row.date>=phStatState.startDate)&&(!phStatState.endDate||row.date<=phStatState.endDate)));
  const colors = ['#35b99d','#f2aa3f','#ef6b73'];
  phCharts.category.setOption({color:colors,tooltip:{trigger:'item'},legend:{orient:'vertical',right:'8%',top:'middle',textStyle:{color:'#51617d'}},series:[{type:'pie',radius:['52%','72%'],center:['34%','52%'],label:{show:false},data:[{name:'公卫已纳，医院待纳',value:aggregate.publicOnly},{name:'医院已纳，公卫待纳',value:aggregate.hospitalOnly},{name:'双方未纳管',value:aggregate.unmanaged}]}]},true);
  const trendScale={publicOnly:cityAggregate.publicOnly?aggregate.publicOnly/cityAggregate.publicOnly:0,hospitalOnly:cityAggregate.hospitalOnly?aggregate.hospitalOnly/cityAggregate.hospitalOnly:0,unmanaged:cityAggregate.unmanaged?aggregate.unmanaged/cityAggregate.unmanaged:0};
  const visibleTrend=publicHealthTrend.filter(day=>(!phStatState.startDate||day.date>=phStatState.startDate)&&(!phStatState.endDate||day.date<=phStatState.endDate));
  const days=visibleTrend.map(day=>day.date);
  const trendKeys=['publicOnly','hospitalOnly','unmanaged'];
  phCharts.trend.setOption({color:colors,tooltip:{trigger:'axis'},legend:{top:4,textStyle:{color:'#51617d'}},grid:{left:48,right:24,top:46,bottom:34},xAxis:{type:'category',data:days.map(day=>day.slice(5)),axisLine:{lineStyle:{color:'#dfe5ef'}},axisLabel:{color:'#73809a'}},yAxis:{type:'value',splitLine:{lineStyle:{color:'#eef2f7'}},axisLabel:{color:'#73809a'}},series:['公卫已纳，医院待纳','医院已纳，公卫待纳','双方未纳管'].map((name,index)=>({name,type:'line',smooth:true,symbolSize:6,data:visibleTrend.map(day=>Math.round(day[trendKeys[index]]*trendScale[trendKeys[index]]))}))},true);
  phCharts.funnel.setOption({color:['#2f7df4','#679eed','#9fc0e8','#d3e2f3'],tooltip:{trigger:'item'},series:[{type:'funnel',left:'12%',top:14,bottom:10,width:'76%',minSize:'38%',maxSize:'100%',sort:'descending',gap:2,label:{show:true,position:'inside',color:'#24436f',formatter:'{b}  {c}'},data:[{name:'自动识别',value:aggregate.autoIdentified},{name:'已生成任务',value:aggregate.generated},{name:'已完成',value:aggregate.completed},{name:'纳管成功',value:aggregate.managed}]}]},true);
}

function renderPublicHealthStats() {
  const rows = filteredPublicHealthStats();
  const yesterday = phYesterdayComparison(rows);
  const aggregate = yesterday.latest;
  const completionRate = aggregate.generated ? aggregate.completed / aggregate.generated * 100 : 0;
  const managedRate = aggregate.completed ? aggregate.managed / aggregate.completed * 100 : 0;
  const metrics = [
    ['公卫已纳，医院待纳',aggregate.publicOnly,'人',phChangeNote(yesterday.latest.publicOnly-yesterday.previous.publicOnly)],
    ['医院已纳，公卫待纳',aggregate.hospitalOnly,'人',phChangeNote(yesterday.latest.hospitalOnly-yesterday.previous.hospitalOnly)],
    ['双方未纳管',aggregate.unmanaged,'人',phChangeNote(yesterday.latest.unmanaged-yesterday.previous.unmanaged)],
    ['系统自动识别',aggregate.autoIdentified,'人',phChangeNote(yesterday.latest.autoIdentified-yesterday.previous.autoIdentified)],
    ['任务完成率',completionRate.toFixed(1),'%',phChangeNote(yesterday.rate,'个百分点',1)]
  ];
  phStatsPage.querySelector('#phStatKpis').innerHTML = metrics.map(([label,value,unit,note],index)=>`<article><span class="ph-kpi-icon kpi-${index+1}"><svg viewBox="0 0 24 24"><path d="M7 3h10v4H7zM5 6h14v15H5zM8 11h8M8 15h6"></path></svg></span><div><small>${label}</small><strong>${typeof value === 'number' ? value.toLocaleString('zh-CN') : value}<em>${unit}</em></strong><p>${note}</p></div></article>`).join('');
  const pageCount = Math.max(1, Math.ceil(rows.length / phStatState.size));
  phStatState.page = Math.min(phStatState.page, pageCount);
  const pageRows = rows.slice((phStatState.page - 1) * phStatState.size, phStatState.page * phStatState.size);
  phStatsPage.querySelector('#phStatBody').innerHTML = pageRows.map(row => `
    <tr><td>${row.date}</td><td>${row.region}</td><td title="${row.medicalGroup}">${row.medicalGroup}</td><td title="${row.organization}">${row.organization}</td><td title="${row.team}">${row.team}</td><td>${row.publicOnly}</td><td>${row.hospitalOnly}</td><td><span class="ph-number-link danger">${row.unmanaged}</span></td><td>${row.autoIdentified}</td><td>${row.generated}</td><td>${row.pending}</td><td>${row.completed}</td><td>${row.managed}</td><td>${(row.completed/Math.max(1,row.generated)*100).toFixed(1)}%</td><td><div class="ph-stat-actions"><button type="button" data-stat-action="查看" data-id="${row.id}">查看</button></div></td></tr>`).join('');
  phStatsPage.querySelector('#phStatTotal').textContent = `共 ${rows.length} 条`;
  phStatsPage.querySelector('#phStatPrev').disabled = phStatState.page === 1;
  phStatsPage.querySelector('#phStatNext').disabled = phStatState.page === pageCount;
  phStatsPage.querySelector('#phStatPages').innerHTML = phPaginationItems(pageCount, phStatState.page).map(item => typeof item === 'string' ? '<span>…</span>' : `<button type="button" class="${item === phStatState.page ? 'active' : ''}" data-stat-page="${item}">${item}</button>`).join('');
  phStatsPage.querySelector('#phStatJump').max = pageCount;
  renderPublicHealthCharts();
}

function setPublicHealthMode(pageName) {
  const taskEnabled = pageName === '公卫任务清单';
  const statEnabled = pageName === '公卫纳管明细';
  phTaskPage.hidden = !taskEnabled;
  phStatsPage.hidden = !statEnabled;
  document.querySelector('.main-content').classList.toggle('ph-mode', taskEnabled || statEnabled);
  if (!taskEnabled && !statEnabled) return;
  document.querySelector('#pageTitle').hidden = false;
  document.querySelector('#pageTitle').textContent = pageName;
  document.querySelector('.customer-card').hidden = true;
  ['#performanceDashboard','#recipePage','#scalePage','#assessmentReportPage','#articlePage'].forEach(selector => {
    const element = document.querySelector(selector);
    if (element) element.hidden = true;
  });
  if (taskEnabled) renderPublicHealthTasks();
  if (statEnabled) {
    renderPublicHealthStats();
    requestAnimationFrame(() => {
      initPublicHealthCharts();
      Object.values(phCharts).forEach(chart => chart.resize());
    });
  }
}

const phTaskDateMonths = {startDate: new Date(2026, 7, 1), endDate: new Date(2026, 7, 1)};
const phTaskDateValue = date => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
function renderPublicHealthTaskCalendar(picker) {
  const key=picker.dataset.taskDateKey;
  const month=phTaskDateMonths[key];
  const selected=phTaskState[key];
  const first=new Date(month.getFullYear(),month.getMonth(),1);
  const gridStart=new Date(month.getFullYear(),month.getMonth(),1-((first.getDay()+6)%7));
  const cells=Array.from({length:42},(_,index)=>{
    const date=new Date(gridStart);
    date.setDate(gridStart.getDate()+index);
    const value=phTaskDateValue(date);
    const outside=date.getMonth()!==month.getMonth();
    return `<button class="task-ant-calendar-cell${outside?' outside':''}${selected===value?' selected':''}" type="button" data-task-date-value="${value}" aria-label="${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日" aria-selected="${selected===value}">${date.getDate()}</button>`;
  }).join('');
  picker.querySelector('.task-ant-date-dropdown').innerHTML=`
    <header class="task-ant-calendar-header"><button type="button" data-task-month-move="-1" aria-label="上个月">‹</button><strong>${month.getFullYear()}年 ${month.getMonth()+1}月</strong><button type="button" data-task-month-move="1" aria-label="下个月">›</button></header>
    <div class="task-ant-calendar-week" aria-hidden="true">${['一','二','三','四','五','六','日'].map(day=>`<span>${day}</span>`).join('')}</div>
    <div class="task-ant-calendar-grid">${cells}</div>`;
}
function closePublicHealthTaskQueryPopups(except) {
  phTaskPage.querySelectorAll('.task-ant-select,.task-ant-date').forEach(control=>{
    if(control===except)return;
    control.classList.remove('open');
    const trigger=control.querySelector('[aria-expanded]');
    const dropdown=control.querySelector('.task-ant-select-dropdown,.task-ant-date-dropdown');
    if(trigger)trigger.setAttribute('aria-expanded','false');
    if(dropdown)dropdown.hidden=true;
  });
}
function resetPublicHealthTaskQueryControls() {
  phTaskPage.querySelectorAll('.task-ant-select').forEach(select=>{
    select.dataset.value='';
    const label=select.dataset.placeholder;
    const value=select.querySelector('.task-ant-select-value');
    value.textContent=label;
    value.classList.add('placeholder');
    select.querySelector('.task-ant-clear').hidden=true;
    select.querySelectorAll('.task-ant-select-option').forEach(option=>{
      const selected=option.dataset.value==='';
      option.classList.toggle('selected',selected);
      option.setAttribute('aria-selected',String(selected));
    });
  });
  phTaskPage.querySelectorAll('.task-ant-date').forEach(picker=>{
    picker.querySelector('input').value='';
    const value=picker.querySelector('.task-ant-date-value');
    value.textContent=picker.dataset.label;
    value.classList.add('placeholder');
    picker.querySelector('.task-ant-clear').hidden=true;
  });
  closePublicHealthTaskQueryPopups();
}

const taskFilterBindings = [['#phTaskSearch','query','input']];
taskFilterBindings.forEach(([selector,key,eventName]) => phTaskPage.querySelector(selector).addEventListener(eventName,event => { phTaskState[key]=event.target.value; phTaskState.page=1; renderPublicHealthTasks(); }));
phTaskPage.querySelector('.ph-task-query').addEventListener('click',event=>{
  const clear=event.target.closest('[data-task-clear-filter]');
  if(clear){
    event.preventDefault();
    event.stopPropagation();
    const key=clear.dataset.taskClearFilter;
    phTaskState[key]='';
    phTaskState.page=1;
    const control=clear.closest('.task-ant-select,.task-ant-date');
    if(control.classList.contains('task-ant-select')){
      control.dataset.value='';
      const valueNode=control.querySelector('.task-ant-select-value');
      valueNode.textContent=control.dataset.placeholder;
      valueNode.classList.add('placeholder');
      control.querySelectorAll('.task-ant-select-option').forEach(item=>{
        const selected=item.dataset.value==='';
        item.classList.toggle('selected',selected);
        item.setAttribute('aria-selected',String(selected));
      });
    }else{
      control.querySelector('input').value='';
      const valueNode=control.querySelector('.task-ant-date-value');
      valueNode.textContent=control.dataset.label;
      valueNode.classList.add('placeholder');
    }
    clear.hidden=true;
    closePublicHealthTaskQueryPopups();
    renderPublicHealthTasks();
    return;
  }
  const option=event.target.closest('.task-ant-select-option');
  if(option){
    const select=option.closest('.task-ant-select');
    const key=select.dataset.taskFilterKey;
    const value=option.dataset.value;
    phTaskState[key]=value;
    phTaskState.page=1;
    select.dataset.value=value;
    const valueNode=select.querySelector('.task-ant-select-value');
    valueNode.textContent=value||select.dataset.placeholder;
    valueNode.classList.toggle('placeholder',!value);
    select.querySelector('.task-ant-clear').hidden=!value;
    select.querySelectorAll('.task-ant-select-option').forEach(item=>{
      const selected=item===option;
      item.classList.toggle('selected',selected);
      item.setAttribute('aria-selected',String(selected));
    });
    closePublicHealthTaskQueryPopups();
    renderPublicHealthTasks();
    return;
  }
  const selectTrigger=event.target.closest('.task-ant-select-selector');
  if(selectTrigger){
    const select=selectTrigger.closest('.task-ant-select');
    const open=!select.classList.contains('open');
    closePublicHealthTaskQueryPopups(select);
    select.classList.toggle('open',open);
    selectTrigger.setAttribute('aria-expanded',String(open));
    select.querySelector('.task-ant-select-dropdown').hidden=!open;
    return;
  }
  const move=event.target.closest('[data-task-month-move]');
  if(move){
    const picker=move.closest('.task-ant-date');
    const key=picker.dataset.taskDateKey;
    phTaskDateMonths[key]=new Date(phTaskDateMonths[key].getFullYear(),phTaskDateMonths[key].getMonth()+Number(move.dataset.taskMonthMove),1);
    renderPublicHealthTaskCalendar(picker);
    return;
  }
  const day=event.target.closest('[data-task-date-value]');
  if(day){
    const picker=day.closest('.task-ant-date');
    const key=picker.dataset.taskDateKey;
    phTaskState[key]=day.dataset.taskDateValue;
    phTaskState.page=1;
    picker.querySelector('input').value=phTaskState[key];
    const valueNode=picker.querySelector('.task-ant-date-value');
    valueNode.textContent=phTaskState[key].replaceAll('-','/');
    valueNode.classList.remove('placeholder');
    picker.querySelector('.task-ant-clear').hidden=false;
    closePublicHealthTaskQueryPopups();
    renderPublicHealthTasks();
    return;
  }
  const dateTrigger=event.target.closest('.task-ant-date-selector');
  if(dateTrigger){
    const picker=dateTrigger.closest('.task-ant-date');
    const key=picker.dataset.taskDateKey;
    if(phTaskState[key]){
      const [year,month]=phTaskState[key].split('-').map(Number);
      phTaskDateMonths[key]=new Date(year,month-1,1);
    }
    const open=!picker.classList.contains('open');
    closePublicHealthTaskQueryPopups(picker);
    picker.classList.toggle('open',open);
    dateTrigger.setAttribute('aria-expanded',String(open));
    picker.querySelector('.task-ant-date-dropdown').hidden=!open;
    if(open)renderPublicHealthTaskCalendar(picker);
  }
});
phTaskPage.querySelector('#phTaskReset').addEventListener('click', () => {
  Object.assign(phTaskState,{page:1,query:'',category:'',type:'',startDate:'',endDate:'',status:''});
  taskFilterBindings.forEach(([selector]) => { phTaskPage.querySelector(selector).value=''; });
  resetPublicHealthTaskQueryControls();
  renderPublicHealthTasks();
});
phTaskPage.querySelector('#phTaskQuery').addEventListener('click', () => { phTaskState.page=1; renderPublicHealthTasks(); });
phTaskPage.querySelector('#phTaskSearch').addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();phTaskState.page=1;renderPublicHealthTasks();}});
phTaskPage.querySelector('#phTaskTeams').addEventListener('click', event => { const button=event.target.closest('[data-task-team]'); if(!button)return; phTaskState.team=button.dataset.taskTeam; phTaskState.page=1; renderPublicHealthTasks(); });
phTaskPage.querySelector('#phTaskStatusTabs').addEventListener('click', event => { const button=event.target.closest('[data-task-status]'); if(!button)return; phTaskState.status=button.dataset.taskStatus; phTaskState.page=1; renderPublicHealthTasks(); });
phTaskPage.querySelector('#phTaskPages').addEventListener('click', event => { const button=event.target.closest('[data-task-page]'); if(!button)return; phTaskState.page=Number(button.dataset.taskPage); renderPublicHealthTasks(); });
phTaskPage.querySelector('#phTaskPrev').addEventListener('click',()=>{if(phTaskState.page>1){phTaskState.page-=1;renderPublicHealthTasks();}});
phTaskPage.querySelector('#phTaskNext').addEventListener('click',()=>{const pages=Math.ceil(filteredPublicHealthTasks().length/phTaskState.size);if(phTaskState.page<pages){phTaskState.page+=1;renderPublicHealthTasks();}});
phTaskPage.querySelector('#phTaskPageSize').addEventListener('change',event=>{phTaskState.size=Number(event.target.value);phTaskState.page=1;renderPublicHealthTasks();});
phTaskPage.querySelector('#phTaskJump').addEventListener('change',event=>{const pages=Math.max(1,Math.ceil(filteredPublicHealthTasks().length/phTaskState.size));phTaskState.page=Math.min(pages,Math.max(1,Number(event.target.value)||1));event.target.value='';renderPublicHealthTasks();});
phTaskPage.querySelector('#phTaskExport').addEventListener('click',()=>phShowToast('公卫任务清单已导出'));
phTaskPage.querySelector('#phTaskBody').addEventListener('click', event => {
  const more=event.target.closest('[data-task-more]');
  if(more){const menu=more.nextElementSibling;phTaskPage.querySelectorAll('.ph-action-menu').forEach(item=>{if(item!==menu)item.hidden=true;});menu.hidden=!menu.hidden;return;}
  const action=event.target.closest('[data-task-action]');
  if(!action)return;
  const task=publicHealthTasks.find(item=>item.id===action.dataset.id);
  if(action.dataset.taskAction==='处理')openPublicHealthTask(task,false);
  if(action.dataset.taskAction==='查看')openPublicHealthTask(task,true);
});
phTaskPage.querySelector('#phDrawerClose').addEventListener('click',closePublicHealthDrawer);
phTaskPage.querySelector('#phDrawerCancel').addEventListener('click',closePublicHealthDrawer);
phTaskPage.querySelector('#phTaskDrawer').addEventListener('click',event=>{if(event.target===event.currentTarget)closePublicHealthDrawer();});
phTaskPage.querySelector('#phDrawerSave').addEventListener('click',()=>{const result=phTaskPage.querySelector('#phTaskResult').value;if(!result){phShowToast('请选择处理结论');return;}const task=publicHealthTasks.find(item=>item.id===currentTaskId);task.result=result;task.status='已完成';task.endAt=phDate(0,true);task.owner=task.owner==='--'?'张海明':task.owner;closePublicHealthDrawer();renderPublicHealthTasks();phShowToast('处理结果已保存');});

function phParseStatDate(value){
  const [year,month,day]=value.split('-').map(Number);
  return new Date(year,month-1,day);
}
function phFormatStatDate(date,separator='-'){
  return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join(separator);
}
function phAddStatMonths(date,amount){return new Date(date.getFullYear(),date.getMonth()+amount,1);}
function phBuildStatCalendar(monthDate,panelIndex,start,end){
  const year=monthDate.getFullYear();
  const month=monthDate.getMonth();
  const firstDay=new Date(year,month,1);
  const gridStart=new Date(year,month,1-(firstDay.getDay()+6)%7);
  const today=new Date(); today.setHours(0,0,0,0);
  const cells=Array.from({length:42},(_,index)=>{
    const date=new Date(gridStart); date.setDate(gridStart.getDate()+index); date.setHours(0,0,0,0);
    const value=phFormatStatDate(date);
    const isStart=start&&date.getTime()===start.getTime();
    const isEnd=end&&date.getTime()===end.getTime();
    const classes=['dash-calendar-cell',date.getMonth()!==month?'outside':'',date.getTime()===today.getTime()?'today':'',isStart?'range-start':'',isEnd?'range-end':'',start&&end&&date>start&&date<end?'in-range':''].filter(Boolean).join(' ');
    return `<button class="${classes}" type="button" role="gridcell" data-stat-date="${value}" aria-label="${year}年${date.getMonth()+1}月${date.getDate()}日" aria-selected="${Boolean(isStart||isEnd)}"><span>${date.getDate()}</span></button>`;
  }).join('');
  const previous=panelIndex===0?'<div class="dash-calendar-nav start"><button type="button" data-stat-calendar-move="-12" aria-label="上一年">«</button><button type="button" data-stat-calendar-move="-1" aria-label="上个月">‹</button></div>':'';
  const next=panelIndex===1?'<div class="dash-calendar-nav end"><button type="button" data-stat-calendar-move="1" aria-label="下个月">›</button><button type="button" data-stat-calendar-move="12" aria-label="下一年">»</button></div>':'';
  return `<section class="dash-calendar-panel"><header class="dash-calendar-header">${previous}<strong>${year}年 ${month+1}月</strong>${next}</header><div class="dash-calendar-week" aria-hidden="true">${['一','二','三','四','五','六','日'].map(day=>`<span>${day}</span>`).join('')}</div><div class="dash-calendar-grid" role="grid">${cells}</div></section>`;
}
function initPublicHealthStatRangePicker(){
  const picker=phStatsPage.querySelector('#phStatDatePicker');
  const trigger=phStatsPage.querySelector('#phStatDateTrigger');
  const dropdown=phStatsPage.querySelector('#phStatDateDropdown');
  const panels=phStatsPage.querySelector('#phStatCalendarPanels');
  const startText=phStatsPage.querySelector('#phStatStartText');
  const endText=phStatsPage.querySelector('#phStatEndText');
  let start=phParseStatDate(phStatState.startDate);
  let end=phParseStatDate(phStatState.endDate);
  let panelMonth=new Date(start.getFullYear(),start.getMonth(),1);
  let choosingEnd=false;
  const renderPanels=()=>{panels.innerHTML=phBuildStatCalendar(panelMonth,0,start,end)+phBuildStatCalendar(phAddStatMonths(panelMonth,1),1,start,end);};
  const setOpen=open=>{picker.classList.toggle('open',open);dropdown.hidden=!open;trigger.setAttribute('aria-expanded',String(open));if(open)renderPanels();};
  trigger.addEventListener('click',event=>{event.stopPropagation();closePublicHealthStatSelects();panelMonth=new Date(start.getFullYear(),start.getMonth(),1);choosingEnd=false;setOpen(dropdown.hidden);});
  dropdown.addEventListener('click',event=>{
    event.stopPropagation();
    const move=event.target.closest('[data-stat-calendar-move]');
    if(move){panelMonth=phAddStatMonths(panelMonth,Number(move.dataset.statCalendarMove));renderPanels();return;}
    const cell=event.target.closest('[data-stat-date]');
    if(!cell)return;
    const selected=phParseStatDate(cell.dataset.statDate);
    if(!choosingEnd){start=selected;end=null;choosingEnd=true;startText.textContent=phFormatStatDate(start,'/');endText.textContent='结束日期';renderPanels();return;}
    if(selected<start){end=start;start=selected;}else end=selected;
    phStatState.startDate=phFormatStatDate(start);
    phStatState.endDate=phFormatStatDate(end);
    phStatState.page=1;
    startText.textContent=phFormatStatDate(start,'/');
    endText.textContent=phFormatStatDate(end,'/');
    choosingEnd=false;
    setOpen(false);
    renderPublicHealthStats();
  });
  document.addEventListener('click',event=>{if(!event.composedPath().includes(picker))setOpen(false);});
}

const phStatSelectOrder=['region','group','organization','team','person'];
const phStatSelectLabels={region:'全市',group:'全部医疗集团',organization:'全部机构',team:'全部团队',person:'全部'};
function closePublicHealthStatSelects(except) {
  phStatsPage.querySelectorAll('.ph-stat-select').forEach(select=>{
    if(select===except)return;
    select.classList.remove('open');
    select.querySelector('.dash-ant-select-selector').setAttribute('aria-expanded','false');
    select.querySelector('.dash-ant-select-dropdown').hidden=true;
  });
}
function resetPublicHealthStatSelect(key) {
  const select=phStatsPage.querySelector(`.ph-stat-select[data-stat-key="${key}"]`);
  select.dataset.value='';
  select.querySelector('.dash-ant-select-value').textContent=phStatSelectLabels[key];
  select.querySelectorAll('.dash-ant-select-option').forEach((option,index)=>{
    option.classList.toggle('selected',index===0);
    option.setAttribute('aria-selected',String(index===0));
  });
  phStatState[key]='';
}
phStatsPage.querySelectorAll('.ph-stat-select').forEach(select=>{
  const trigger=select.querySelector('.dash-ant-select-selector');
  trigger.addEventListener('click',event=>{
    event.stopPropagation();
    const opens=!select.classList.contains('open');
    closePublicHealthStatSelects(select);
    select.classList.toggle('open',opens);
    trigger.setAttribute('aria-expanded',String(opens));
    select.querySelector('.dash-ant-select-dropdown').hidden=!opens;
  });
  select.querySelector('.dash-ant-select-dropdown').addEventListener('click',event=>{
    const option=event.target.closest('.dash-ant-select-option');
    if(!option)return;
    event.stopPropagation();
    const key=select.dataset.statKey;
    const value=option.dataset.value;
    select.dataset.value=value;
    select.querySelector('.dash-ant-select-value').textContent=value||phStatSelectLabels[key];
    select.querySelectorAll('.dash-ant-select-option').forEach(item=>{
      const selected=item===option;
      item.classList.toggle('selected',selected);
      item.setAttribute('aria-selected',String(selected));
    });
    phStatState[key]=value;
    phStatSelectOrder.slice(phStatSelectOrder.indexOf(key)+1).forEach(resetPublicHealthStatSelect);
    phStatState.page=1;
    select.classList.remove('open');
    trigger.setAttribute('aria-expanded','false');
    select.querySelector('.dash-ant-select-dropdown').hidden=true;
    renderPublicHealthStats();
  });
});
initPublicHealthStatRangePicker();
phStatsPage.querySelector('#phStatRefresh').addEventListener('click',event=>{
  const now=new Date();
  const pad=value=>String(value).padStart(2,'0');
  phStatsPage.querySelector('#phStatUpdatedAt').textContent=`${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  event.currentTarget.classList.remove('refreshing');
  void event.currentTarget.offsetWidth;
  event.currentTarget.classList.add('refreshing');
  renderPublicHealthStats();
  phShowToast('实时数据已更新');
});
phStatsPage.querySelector('#phStatPages').addEventListener('click',event=>{const button=event.target.closest('[data-stat-page]');if(!button)return;phStatState.page=Number(button.dataset.statPage);renderPublicHealthStats();});
phStatsPage.querySelector('#phStatPrev').addEventListener('click',()=>{if(phStatState.page>1){phStatState.page-=1;renderPublicHealthStats();}});
phStatsPage.querySelector('#phStatNext').addEventListener('click',()=>{const pages=Math.ceil(filteredPublicHealthStats().length/phStatState.size);if(phStatState.page<pages){phStatState.page+=1;renderPublicHealthStats();}});
phStatsPage.querySelector('#phStatPageSize').addEventListener('change',event=>{phStatState.size=Number(event.target.value);phStatState.page=1;renderPublicHealthStats();});
phStatsPage.querySelector('#phStatJump').addEventListener('change',event=>{const pages=Math.max(1,Math.ceil(filteredPublicHealthStats().length/phStatState.size));phStatState.page=Math.min(pages,Math.max(1,Number(event.target.value)||1));event.target.value='';renderPublicHealthStats();});
phStatsPage.querySelector('#phStatExport').addEventListener('click',()=>phShowToast('公卫纳管明细已导出'));
phStatsPage.querySelector('#phStatBody').addEventListener('click',event=>{const button=event.target.closest('[data-stat-action="查看"]');if(!button)return;const row=publicHealthStats.find(item=>item.id===Number(button.dataset.id));document.querySelector('#modalTitle').textContent=`${row.organization} · 公卫统计详情`;document.querySelector('#modalBody').innerHTML=`<dl class="record-grid"><div><dt>统计日期</dt><dd>${row.date}</dd></div><div><dt>所属区域</dt><dd>${row.region}</dd></div><div class="wide"><dt>医疗集团</dt><dd>${row.medicalGroup}</dd></div><div class="wide"><dt>机构 / 团队</dt><dd>${row.organization} / ${row.team}</dd></div><div><dt>数据回流</dt><dd>${row.total.toLocaleString('zh-CN')} 人</dd></div><div><dt>自动识别</dt><dd>${row.autoIdentified.toLocaleString('zh-CN')} 人</dd></div><div><dt>已生成任务</dt><dd>${row.generated.toLocaleString('zh-CN')} 项</dd></div><div><dt>已完成任务</dt><dd>${row.completed.toLocaleString('zh-CN')} 项</dd></div><div><dt>纳管成功</dt><dd>${row.managed.toLocaleString('zh-CN')} 人</dd></div><div><dt>任务完成率</dt><dd>${(row.completed/Math.max(1,row.generated)*100).toFixed(1)}%</dd></div></dl>`;document.querySelector('#modalBackdrop').classList.add('show');});

document.addEventListener('click',event=>{closePublicHealthStatSelects();if(!event.target.closest('.ph-task-query'))closePublicHealthTaskQueryPopups();if(event.target.closest('.ph-row-actions'))return;phTaskPage.querySelectorAll('.ph-action-menu').forEach(menu=>menu.hidden=true);});
const publicHealthNavButtons=[...document.querySelectorAll('.subnav button')].filter(button=>['公卫任务清单','公卫纳管明细'].includes(button.dataset.page));
publicHealthNavButtons.forEach(button=>button.addEventListener('click',event=>{
  event.stopImmediatePropagation();
  document.querySelectorAll('.subnav button').forEach(item=>item.classList.remove('active'));
  document.querySelectorAll('.nav-group').forEach(group=>group.classList.remove('current'));
  document.querySelector('.nav-item.dashboard')?.classList.remove('active');
  button.classList.add('active');
  button.closest('.nav-group')?.classList.add('current');
  setPublicHealthMode(button.dataset.page);
  phShowToast(`已切换至${button.dataset.page}`);
},{capture:true}));
document.querySelectorAll('.subnav button').forEach(button=>{
  if(publicHealthNavButtons.includes(button))return;
  button.addEventListener('click',()=>setPublicHealthMode(''));
});
document.querySelector('.nav-item.dashboard').addEventListener('click',()=>setPublicHealthMode(''));
window.addEventListener('resize',()=>Object.values(phCharts).forEach(chart=>chart.resize()),{passive:true});

renderPublicHealthTasks();
renderPublicHealthStats();
