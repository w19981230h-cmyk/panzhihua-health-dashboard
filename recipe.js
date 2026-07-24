const recipeRows = [
  {
    name: '芹菜炒香干',
    category: '菜品',
    meal: '午餐',
    diseases: ['高血压', '糖尿病'],
    tags: ['低盐', '低脂', '高纤维'],
    calories: 210,
    source: '系统预置',
    enabled: true,
    updatedAt: '2024-05-20 14:30'
  },
  {
    name: '燕麦鸡蛋粥',
    category: '汤粥',
    meal: '早餐',
    diseases: ['糖尿病'],
    tags: ['低糖', '低脂', '高纤维'],
    calories: 280,
    source: '系统预置',
    enabled: true,
    updatedAt: '2024-05-18 10:15'
  },
  {
    name: '清蒸鲈鱼',
    category: '菜品',
    meal: '晚餐',
    diseases: ['高血压', '高脂血症'],
    tags: ['低盐', '低脂', '高蛋白'],
    calories: 230,
    source: '系统预置',
    enabled: true,
    updatedAt: '2024-05-16 09:40'
  },
  {
    name: '杂粮饭',
    category: '主食',
    meal: '午餐',
    diseases: ['糖尿病', '肥胖'],
    tags: ['低GI', '高纤维', '饱腹感强'],
    calories: 180,
    source: '用户新建',
    enabled: true,
    updatedAt: '2024-05-15 14:20'
  },
  {
    name: '菠菜豆腐汤',
    category: '汤粥',
    meal: '晚餐',
    diseases: ['高血压'],
    tags: ['低盐', '低脂', '补钙'],
    calories: 120,
    source: '用户新建',
    enabled: false,
    updatedAt: '2024-05-14 11:05'
  },
  {
    name: '西兰花炒虾仁',
    category: '菜品',
    meal: '午餐',
    diseases: ['高血压', '糖尿病'],
    tags: ['低脂', '高蛋白', '高纤维'],
    calories: 160,
    source: '系统预置',
    enabled: true,
    updatedAt: '2024-05-12 08:50'
  }
];

const recipeState = {
  query: '',
  category: '',
  meal: '',
  disease: '',
  healthTag: '',
  source: '',
  enabled: '',
  page: 1
};

function recipeSelect(label, id, options) {
  return `<label class="recipe-filter">
    <span>${label}</span>
    <div class="recipe-select-wrap">
      <select id="${id}">
        <option value="">全部</option>
        ${options.map(option => `<option value="${option}">${option}</option>`).join('')}
      </select>
      <i aria-hidden="true"></i>
    </div>
  </label>`;
}

function buildRecipePage() {
  const page = document.createElement('section');
  page.id = 'recipePage';
  page.className = 'recipe-page';
  page.hidden = true;
  page.innerHTML = `
    <section class="recipe-filter-card">
      <div class="recipe-filter-grid">
        <label class="recipe-filter recipe-name-filter">
          <span>食谱名称</span>
          <div class="recipe-search">
            <input id="recipeSearch" type="search" placeholder="请输入食谱名称" autocomplete="off">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg>
          </div>
        </label>
        ${recipeSelect('食谱分类', 'recipeCategory', ['菜品', '汤粥', '主食'])}
        ${recipeSelect('适用餐次', 'recipeMeal', ['早餐', '午餐', '晚餐'])}
        ${recipeSelect('适用病种', 'recipeDisease', ['高血压', '糖尿病', '高脂血症', '肥胖'])}
        ${recipeSelect('健康标签', 'recipeHealthTag', ['低盐', '低糖', '低脂', '高蛋白', '高纤维', '低GI', '补钙'])}
        ${recipeSelect('食谱来源', 'recipeSource', ['系统预置', '用户新建'])}
        ${recipeSelect('启用状态', 'recipeEnabled', ['启用', '停用'])}
        <button class="recipe-create-button" id="recipeCreate" type="button"><b>＋</b>新建食谱</button>
      </div>
      <div class="recipe-more-row">
        <button id="recipeMoreFilters" type="button" aria-expanded="false">
          <span class="recipe-more-arrow">›</span>
          <strong>展开更多筛选</strong>
          <span class="recipe-more-chevron">⌄</span>
        </button>
      </div>
    </section>

    <section class="recipe-list-card">
      <div class="recipe-table-wrap">
        <table class="recipe-table">
          <thead>
            <tr>
              <th>食谱图片</th>
              <th>食谱名称</th>
              <th>食谱分类</th>
              <th>适用餐次</th>
              <th>适用病种</th>
              <th>健康标签</th>
              <th>每份热量(千卡)</th>
              <th>食谱来源</th>
              <th>启用状态</th>
              <th>更新时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody id="recipeTableBody"></tbody>
        </table>
        <div class="recipe-empty" id="recipeEmpty" hidden>暂无符合条件的食谱</div>
      </div>
      <footer class="recipe-pagination">
        <span id="recipeTotal">共 20,356 条</span>
        <div class="recipe-pages">
          <button class="recipe-page-arrow" type="button" disabled>‹</button>
          <button class="active" type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <span>…</span>
          <button type="button">1018</button>
          <button class="recipe-page-arrow" type="button">›</button>
          <label class="recipe-size"><select><option>20条/页</option><option>50条/页</option></select><i></i></label>
          <span>跳至</span><input type="number" min="1" aria-label="跳转页码"><span>页</span>
        </div>
      </footer>
    </section>
  `;
  document.querySelector('.main-content').appendChild(page);
  return page;
}

const recipePage = buildRecipePage();
const recipeBody = recipePage.querySelector('#recipeTableBody');
const recipeEmpty = recipePage.querySelector('#recipeEmpty');

function recipeTone(value) {
  const tones = {
    菜品: 'green',
    汤粥: 'purple',
    主食: 'orange',
    早餐: 'orange',
    午餐: 'blue',
    晚餐: 'blue',
    低盐: 'red',
    低糖: 'blue',
    低脂: 'green',
    高蛋白: 'purple',
    高纤维: 'red',
    低GI: 'green',
    饱腹感强: 'purple',
    补钙: 'blue'
  };
  return tones[value] || 'plain';
}

function renderRecipes() {
  const query = recipeState.query.trim().toLowerCase();
  const rows = recipeRows.filter(row =>
    (!query || row.name.toLowerCase().includes(query)) &&
    (!recipeState.category || row.category === recipeState.category) &&
    (!recipeState.meal || row.meal === recipeState.meal) &&
    (!recipeState.disease || row.diseases.includes(recipeState.disease)) &&
    (!recipeState.healthTag || row.tags.includes(recipeState.healthTag)) &&
    (!recipeState.source || row.source === recipeState.source) &&
    (!recipeState.enabled || (recipeState.enabled === '启用') === row.enabled)
  );

  recipeBody.innerHTML = rows.map((row, index) => `
    <tr>
      <td><span class="recipe-thumb recipe-thumb-${recipeRows.indexOf(row) + 1}" role="img" aria-label="${row.name}"></span></td>
      <td><strong class="recipe-title">${row.name}</strong></td>
      <td><span class="recipe-tag ${recipeTone(row.category)}">${row.category}</span></td>
      <td><span class="recipe-tag ${recipeTone(row.meal)}">${row.meal}</span></td>
      <td><div class="recipe-diseases">${row.diseases.map(value => `<span>${value}</span>`).join('')}</div></td>
      <td><div class="recipe-health-tags">${row.tags.map(value => `<span class="recipe-tag ${recipeTone(value)}">${value}</span>`).join('')}</div></td>
      <td><span class="recipe-calories">${row.calories}</span></td>
      <td>${row.source}</td>
      <td>
        <button class="recipe-switch ${row.enabled ? 'on' : ''}" type="button" data-recipe-switch="${recipeRows.indexOf(row)}" aria-pressed="${row.enabled}">
          <i></i>
        </button>
        <small class="recipe-switch-label">${row.enabled ? '启用' : '停用'}</small>
      </td>
      <td>${row.updatedAt}</td>
      <td>
        <div class="recipe-actions">
          <button type="button" data-recipe-action="查看" data-recipe-name="${row.name}">查看</button>
          <button type="button" data-recipe-action="编辑" data-recipe-name="${row.name}">编辑</button>
          <button type="button" data-recipe-action="复制" data-recipe-name="${row.name}">复制</button>
          <button type="button" data-recipe-action="${row.enabled ? '停用' : '启用'}" data-recipe-name="${row.name}">${row.enabled ? '停用' : '启用'}</button>
          <button type="button" data-recipe-action="删除" data-recipe-name="${row.name}">删除</button>
        </div>
      </td>
    </tr>
  `).join('');

  recipeEmpty.hidden = rows.length > 0;
  recipePage.querySelector('#recipeTotal').textContent = rows.length === recipeRows.length ? '共 20,356 条' : `共 ${rows.length} 条`;
}

function setRecipeMode(enabled) {
  const main = document.querySelector('.main-content');
  recipePage.hidden = !enabled;
  main.classList.toggle('recipe-mode', enabled);
  if (enabled) {
    document.querySelector('#pageTitle').hidden = true;
    document.querySelector('.customer-card').hidden = true;
    const dashboard = document.querySelector('#performanceDashboard');
    if (dashboard) dashboard.hidden = true;
    recipePage.scrollTop = 0;
  }
}

recipePage.querySelector('#recipeSearch').addEventListener('input', event => {
  recipeState.query = event.target.value;
  renderRecipes();
});

[
  ['recipeCategory', 'category'],
  ['recipeMeal', 'meal'],
  ['recipeDisease', 'disease'],
  ['recipeHealthTag', 'healthTag'],
  ['recipeSource', 'source'],
  ['recipeEnabled', 'enabled']
].forEach(([id, key]) => recipePage.querySelector(`#${id}`).addEventListener('change', event => {
  recipeState[key] = event.target.value;
  renderRecipes();
}));

recipePage.querySelector('#recipeMoreFilters').addEventListener('click', event => {
  const button = event.currentTarget;
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  button.querySelector('strong').textContent = expanded ? '展开更多筛选' : '收起更多筛选';
  button.classList.toggle('expanded', !expanded);
});

recipePage.querySelector('#recipeCreate').addEventListener('click', () => {
  document.querySelector('#toast').textContent = '已打开新建食谱';
  document.querySelector('#toast').classList.add('show');
  setTimeout(() => document.querySelector('#toast').classList.remove('show'), 1800);
});

recipeBody.addEventListener('click', event => {
  const switchButton = event.target.closest('[data-recipe-switch]');
  if (switchButton) {
    const row = recipeRows[Number(switchButton.dataset.recipeSwitch)];
    row.enabled = !row.enabled;
    renderRecipes();
    return;
  }
  const action = event.target.closest('[data-recipe-action]');
  if (!action) return;
  const toast = document.querySelector('#toast');
  toast.textContent = `已选择${action.dataset.recipeAction}“${action.dataset.recipeName}”`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
});

document.querySelectorAll('.subnav button').forEach(button => button.addEventListener('click', () => {
  const page = button.dataset.page;
  const opensRecipe = page === '食谱管理';
  setRecipeMode(opensRecipe);
  if (!opensRecipe && page !== '单病种质效管理看板') {
    document.querySelector('#pageTitle').hidden = false;
    document.querySelector('.customer-card').hidden = false;
  }
}));

document.querySelector('.nav-item.dashboard').addEventListener('click', () => {
  setRecipeMode(false);
  document.querySelector('#pageTitle').hidden = false;
  document.querySelector('.customer-card').hidden = false;
});

renderRecipes();
