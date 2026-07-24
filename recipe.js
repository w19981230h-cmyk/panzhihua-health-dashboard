const recipeRows = [
  {
    name: '芹菜炒香干',
    category: '菜品',
    meal: '午餐',
    diseases: ['高血压', '糖尿病'],
    tags: ['低盐', '低脂', '高纤维'],
    calories: 210,
    source: '文件导入',
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
    source: '文件导入',
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
    source: '文件导入',
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
    source: '手动新增',
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
    source: '手动新增',
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
    source: '文件导入',
    enabled: true,
    updatedAt: '2024-05-12 08:50'
  },
  {
    name: '红豆薏米粥',
    category: '汤粥',
    meal: '早餐',
    diseases: ['肥胖'],
    tags: ['低脂', '高纤维', '饱腹感强'],
    calories: 190,
    source: '文件导入',
    enabled: true,
    updatedAt: '2024-05-10 09:20'
  },
  {
    name: '香菇鸡胸肉',
    category: '菜品',
    meal: '午餐',
    diseases: ['高脂血症', '肥胖'],
    tags: ['低脂', '高蛋白'],
    calories: 225,
    source: '文件导入',
    enabled: true,
    updatedAt: '2024-05-08 16:10'
  },
  {
    name: '南瓜小米粥',
    category: '汤粥',
    meal: '早餐',
    diseases: ['高血压'],
    tags: ['低盐', '低脂'],
    calories: 155,
    source: '手动新增',
    enabled: true,
    updatedAt: '2024-05-07 10:35'
  },
  {
    name: '番茄炖牛腩',
    category: '菜品',
    meal: '晚餐',
    diseases: ['高血压'],
    tags: ['低盐', '高蛋白'],
    calories: 310,
    source: '文件导入',
    enabled: true,
    updatedAt: '2024-05-06 14:15'
  },
  {
    name: '紫薯杂粮饭',
    category: '主食',
    meal: '午餐',
    diseases: ['糖尿病', '肥胖'],
    tags: ['低GI', '高纤维', '饱腹感强'],
    calories: 205,
    source: '手动新增',
    enabled: false,
    updatedAt: '2024-05-05 11:30'
  },
  {
    name: '冬瓜海带汤',
    category: '汤粥',
    meal: '晚餐',
    diseases: ['高血压', '肥胖'],
    tags: ['低盐', '低脂'],
    calories: 95,
    source: '文件导入',
    enabled: true,
    updatedAt: '2024-05-03 09:45'
  },
  {
    name: '清炒时蔬',
    category: '菜品',
    meal: '午餐',
    diseases: ['高血压', '高脂血症'],
    tags: ['低盐', '低脂', '高纤维'],
    calories: 110,
    source: '文件导入',
    enabled: true,
    updatedAt: '2024-05-02 15:40'
  },
  {
    name: '山药排骨汤',
    category: '汤粥',
    meal: '晚餐',
    diseases: ['高脂血症'],
    tags: ['高蛋白', '补钙'],
    calories: 285,
    source: '手动新增',
    enabled: true,
    updatedAt: '2024-04-30 13:25'
  },
  {
    name: '全麦蔬菜卷',
    category: '主食',
    meal: '早餐',
    diseases: ['糖尿病', '肥胖'],
    tags: ['低GI', '高纤维', '饱腹感强'],
    calories: 175,
    source: '文件导入',
    enabled: true,
    updatedAt: '2024-04-28 08:40'
  },
  {
    name: '虾仁蒸蛋',
    category: '菜品',
    meal: '晚餐',
    diseases: ['高血压'],
    tags: ['低盐', '高蛋白', '补钙'],
    calories: 165,
    source: '文件导入',
    enabled: true,
    updatedAt: '2024-04-25 10:50'
  },
  {
    name: '荞麦凉面',
    category: '主食',
    meal: '午餐',
    diseases: ['糖尿病', '肥胖'],
    tags: ['低GI', '低脂', '高纤维'],
    calories: 240,
    source: '手动新增',
    enabled: false,
    updatedAt: '2024-04-23 16:20'
  },
  {
    name: '菌菇豆腐煲',
    category: '菜品',
    meal: '晚餐',
    diseases: ['高血压', '高脂血症'],
    tags: ['低盐', '低脂', '补钙'],
    calories: 185,
    source: '文件导入',
    enabled: true,
    updatedAt: '2024-04-20 12:10'
  },
  {
    name: '玉米鸡肉沙拉',
    category: '菜品',
    meal: '午餐',
    diseases: ['肥胖', '高脂血症'],
    tags: ['低脂', '高蛋白', '高纤维'],
    calories: 220,
    source: '手动新增',
    enabled: true,
    updatedAt: '2024-04-18 09:35'
  },
  {
    name: '莲藕瘦肉汤',
    category: '汤粥',
    meal: '晚餐',
    diseases: ['高血压'],
    tags: ['低盐', '高蛋白'],
    calories: 195,
    source: '文件导入',
    enabled: true,
    updatedAt: '2024-04-15 14:05'
  }
];

const recipeSeedRows = recipeRows.map(row => ({...row, diseases:[...row.diseases], tags:[...row.tags]}));
while (recipeRows.length < 100) {
  const seed = recipeSeedRows[recipeRows.length % recipeSeedRows.length];
  const sequence = recipeRows.length + 1;
  recipeRows.push({
    ...seed,
    name: `${seed.name} ${String(sequence).padStart(3, '0')}`,
    diseases: [...seed.diseases],
    tags: [...seed.tags],
    calories: seed.calories + (sequence % 5) * 5,
    enabled: sequence % 7 !== 0,
    updatedAt: `2024-04-${String(30 - sequence % 28).padStart(2, '0')} ${String(8 + sequence % 10).padStart(2, '0')}:${String(sequence % 6 * 10).padStart(2, '0')}`
  });
}

const RECIPE_VIRTUAL_TOTAL = 25690;
const RECIPE_PAGE_SIZE = 20;

const recipeState = {
  query: '',
  category: '',
  meal: '',
  disease: '',
  healthTag: '',
  source: '',
  enabled: '',
  page: 1,
  size: RECIPE_PAGE_SIZE
};

function recipeSelect(label, id, options, compact = false) {
  const placeholder = compact ? `请选择${label}` : '全部';
  return `<label class="recipe-filter">
    <span>${label}</span>
    <div class="recipe-select-wrap recipe-ant-select" data-recipe-select>
      <button class="recipe-ant-select-trigger" type="button" role="combobox" aria-label="${label}" aria-haspopup="listbox" aria-expanded="false">
        <span class="recipe-ant-select-value is-placeholder">${placeholder}</span>
        <i class="recipe-ant-select-arrow" aria-hidden="true"></i>
      </button>
      <input id="${id}" type="hidden" value="">
      <div class="recipe-ant-select-dropdown" role="listbox" aria-label="${label}" hidden>
        <button class="recipe-ant-select-option selected" type="button" role="option" data-value="" aria-selected="true"><span>${placeholder}</span><i aria-hidden="true">✓</i></button>
        ${options.map(option => `<button class="recipe-ant-select-option" type="button" role="option" data-value="${option}" aria-selected="false"><span>${option}</span><i aria-hidden="true">✓</i></button>`).join('')}
      </div>
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
      <div class="recipe-toolbar">
        <label class="recipe-filter recipe-name-filter">
          <span>食谱名称</span>
          <div class="recipe-search">
            <input id="recipeSearch" type="search" placeholder="请输入食谱名称" autocomplete="off">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg>
          </div>
        </label>
        ${recipeSelect('食谱分类', 'recipeCategory', ['菜品', '汤粥', '主食'], true)}
        ${recipeSelect('适用餐次', 'recipeMeal', ['早餐', '午餐', '晚餐'], true)}
        <button class="recipe-more-button" id="recipeMoreFilters" type="button" aria-expanded="false">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16l-6 7v6l-4 2v-8Z"></path><path d="M17 17h5m-2.5-2.5v5"></path></svg>
          <span>更多筛选</span>
        </button>
        <button class="recipe-column-button" id="recipeColumnButton" type="button" aria-label="管理显示列">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3" width="13" height="17" rx="2"></rect><path d="M8 3v17m4-17v10"></path><circle cx="18" cy="17" r="4"></circle><path d="M18 15v4m-2-2h4"></path></svg>
        </button>
        <button class="recipe-create-button" id="recipeCreate" type="button"><b>＋</b>新建食谱</button>
      </div>
      <div class="recipe-extra-filters" id="recipeExtraFilters" hidden>
        ${recipeSelect('适用病种', 'recipeDisease', ['高血压', '糖尿病', '高脂血症', '肥胖'], true)}
        ${recipeSelect('健康标签', 'recipeHealthTag', ['低盐', '低糖', '低脂', '高蛋白', '高纤维', '低GI', '补钙'], true)}
        ${recipeSelect('来源', 'recipeSource', ['手动新增', '文件导入'], true)}
        ${recipeSelect('状态', 'recipeEnabled', ['启用', '停用'], true)}
      </div>
    </section>

    <section class="recipe-list-card">
      <div class="recipe-table-wrap">
        <table class="recipe-table">
          <thead>
            <tr>
              <th>食谱名称</th>
              <th>健康标签</th>
              <th>每份热量(千卡)</th>
              <th>来源</th>
              <th>状态</th>
              <th>创建时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody id="recipeTableBody"></tbody>
        </table>
        <div class="recipe-empty" id="recipeEmpty" hidden>暂无符合条件的食谱</div>
      </div>
      <footer class="recipe-pagination">
        <span id="recipeTotal">共 25,690 条</span>
        <div class="recipe-pages">
          <button class="recipe-page-arrow" id="recipePrevPage" type="button" disabled>‹</button>
          <div class="recipe-page-numbers" id="recipePageNumbers"></div>
          <button class="recipe-page-arrow" id="recipeNextPage" type="button">›</button>
          <label class="recipe-size"><select id="recipePageSize" aria-label="每页条数"><option value="20" selected>20条/页</option></select><i></i></label>
          <span>跳至</span><input id="recipeJumpPage" type="number" min="1" max="1000" aria-label="跳转页码">
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
const recipeSelects = [...recipePage.querySelectorAll('[data-recipe-select]')];

function closeRecipeSelects(except) {
  recipeSelects.forEach(select => {
    if (select === except) return;
    select.classList.remove('open');
    select.querySelector('.recipe-ant-select-trigger').setAttribute('aria-expanded', 'false');
    select.querySelector('.recipe-ant-select-dropdown').hidden = true;
  });
}

recipePage.addEventListener('click', event => {
  const option = event.target.closest('.recipe-ant-select-option');
  if (option) {
    const select = option.closest('[data-recipe-select]');
    const input = select.querySelector('input[type="hidden"]');
    input.value = option.dataset.value;
    const value = select.querySelector('.recipe-ant-select-value');
    value.textContent = option.textContent.replace('✓', '').trim();
    value.classList.toggle('is-placeholder', !option.dataset.value);
    select.querySelectorAll('.recipe-ant-select-option').forEach(item => {
      const selected = item === option;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    closeRecipeSelects();
    input.dispatchEvent(new Event('change', { bubbles: true }));
    return;
  }
  const trigger = event.target.closest('.recipe-ant-select-trigger');
  if (trigger) {
    const select = trigger.closest('[data-recipe-select]');
    const willOpen = !select.classList.contains('open');
    closeRecipeSelects(select);
    select.classList.toggle('open', willOpen);
    trigger.setAttribute('aria-expanded', String(willOpen));
    select.querySelector('.recipe-ant-select-dropdown').hidden = !willOpen;
    return;
  }
  closeRecipeSelects();
});

recipeSelects.forEach(select => select.querySelector('.recipe-ant-select-trigger').addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    event.currentTarget.click();
  }
  if (event.key === 'Escape') closeRecipeSelects();
}));

document.addEventListener('click', event => {
  if (!event.composedPath().includes(recipePage)) closeRecipeSelects();
});

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

  const totalPages = Math.ceil(RECIPE_VIRTUAL_TOTAL / recipeState.size);
  recipeState.page = Math.min(Math.max(1, recipeState.page), totalPages);
  const offset = (recipeState.page - 1) * recipeState.size;
  const shown = rows.length ? Array.from({length: recipeState.size}, (_, index) => rows[(offset + index) % rows.length]) : [];

  recipeBody.innerHTML = shown.map(row => `
    <tr>
      <td><strong class="recipe-title">${row.name}</strong></td>
      <td><div class="recipe-health-tags">${row.tags.map(value => `<span class="recipe-tag ${recipeTone(value)}">${value}</span>`).join('')}</div></td>
      <td><span class="recipe-calories">${row.calories}</span></td>
      <td>${row.source}</td>
      <td><span class="recipe-status ${row.enabled ? 'active' : 'inactive'}"><i aria-hidden="true"></i>${row.enabled ? '启用' : '停用'}</span></td>
      <td>${row.updatedAt}</td>
      <td>
        <div class="recipe-actions">
          <button class="recipe-more-actions" type="button" data-recipe-more aria-expanded="false">更多<i></i></button>
          <div class="recipe-action-menu" hidden>
            <button type="button" data-recipe-action="查看" data-recipe-name="${row.name}">查看</button>
            <button type="button" data-recipe-action="编辑" data-recipe-name="${row.name}">编辑</button>
            <button type="button" data-recipe-action="复制" data-recipe-name="${row.name}">复制</button>
            <button type="button" data-recipe-action="${row.enabled ? '停用' : '启用'}" data-recipe-name="${row.name}">${row.enabled ? '停用' : '启用'}</button>
            <button type="button" data-recipe-action="删除" data-recipe-name="${row.name}">删除</button>
          </div>
        </div>
      </td>
    </tr>
  `).join('');

  recipeEmpty.hidden = shown.length > 0;
  recipePage.querySelector('#recipeTotal').textContent = '共 25,690 条';
  renderRecipePagination(totalPages);
}

function renderRecipePagination(totalPages) {
  const page = recipeState.page;
  let pages;
  if (page <= 3) pages = [1,2,3,4,5];
  else if (page >= totalPages - 2) pages = [totalPages-4,totalPages-3,totalPages-2,totalPages-1,totalPages];
  else pages = [page-2,page-1,page,page+1,page+2];
  const numbers = recipePage.querySelector('#recipePageNumbers');
  numbers.innerHTML = pages.map(value => `<button type="button" data-recipe-page="${value}" class="${value === page ? 'active' : ''}">${value}</button>`).join('') +
    (pages.at(-1) < totalPages ? `<span>…</span><button type="button" data-recipe-page="${totalPages}">${totalPages}</button>` : '');
  recipePage.querySelector('#recipePrevPage').disabled = page === 1;
  recipePage.querySelector('#recipeNextPage').disabled = page === totalPages;
  recipePage.querySelector('#recipeJumpPage').max = String(totalPages);
}

function setRecipeMode(enabled) {
  const main = document.querySelector('.main-content');
  recipePage.hidden = !enabled;
  main.classList.toggle('recipe-mode', enabled);
  if (enabled) {
    document.querySelector('#pageTitle').textContent = '食谱管理';
    document.querySelector('#pageTitle').hidden = false;
    document.querySelector('.customer-card').hidden = true;
    const dashboard = document.querySelector('#performanceDashboard');
    if (dashboard) dashboard.hidden = true;
    recipePage.scrollTop = 0;
  }
}

recipePage.querySelector('#recipeSearch').addEventListener('input', event => {
  recipeState.query = event.target.value;
  recipeState.page = 1;
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
  recipeState.page = 1;
  renderRecipes();
}));

recipePage.querySelector('#recipePrevPage').addEventListener('click', () => {
  if (recipeState.page > 1) {
    recipeState.page -= 1;
    renderRecipes();
  }
});

recipePage.querySelector('#recipeNextPage').addEventListener('click', () => {
  const totalPages = Math.ceil(RECIPE_VIRTUAL_TOTAL / recipeState.size);
  if (recipeState.page < totalPages) {
    recipeState.page += 1;
    renderRecipes();
  }
});

recipePage.querySelector('#recipePageNumbers').addEventListener('click', event => {
  const button = event.target.closest('[data-recipe-page]');
  if (!button) return;
  recipeState.page = Number(button.dataset.recipePage);
  renderRecipes();
});

recipePage.querySelector('#recipeJumpPage').addEventListener('change', event => {
  const totalPages = Math.ceil(RECIPE_VIRTUAL_TOTAL / recipeState.size);
  recipeState.page = Math.min(totalPages, Math.max(1, Number(event.target.value) || 1));
  event.target.value = '';
  renderRecipes();
});

recipePage.querySelector('#recipeMoreFilters').addEventListener('click', event => {
  const button = event.currentTarget;
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  button.querySelector('span').textContent = expanded ? '更多筛选' : '收起筛选';
  button.classList.toggle('expanded', !expanded);
  recipePage.querySelector('#recipeExtraFilters').hidden = expanded;
});

recipePage.querySelector('#recipeColumnButton').addEventListener('click', () => {
  const toast = document.querySelector('#toast');
  toast.textContent = '已打开显示列设置';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
});

recipePage.querySelector('#recipeCreate').addEventListener('click', () => {
  const backdrop = document.querySelector('#modalBackdrop');
  const body = document.querySelector('#modalBody');
  document.querySelector('#modalTitle').textContent = '新建食谱';
  body.innerHTML = `<form class="recipe-create-form" id="recipeCreateForm">
    <label><span>食谱名称</span><input name="name" required maxlength="30" placeholder="请输入食谱名称"></label>
    <label><span>健康标签</span><input name="tags" placeholder="多个标签请用逗号分隔"></label>
    <label><span>每份热量（千卡）</span><input name="calories" required type="number" min="0" max="5000" placeholder="请输入热量"></label>
    <label><span>来源</span><select name="source"><option>手动新增</option><option>文件导入</option></select></label>
    <label><span>状态</span><select name="enabled"><option value="true">启用</option><option value="false">停用</option></select></label>
    <div class="recipe-form-actions"><button type="button" data-recipe-cancel>取消</button><button class="primary" type="submit">保存食谱</button></div>
  </form>`;
  backdrop.classList.add('show');
  body.querySelector('[name="name"]').focus();
  body.querySelector('[data-recipe-cancel]').addEventListener('click', () => backdrop.classList.remove('show'));
  body.querySelector('#recipeCreateForm').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    recipeRows.unshift({
      name: String(data.get('name')).trim(),
      category: '',
      meal: '',
      diseases: [],
      tags: String(data.get('tags') || '').split(/[,，]/).map(value => value.trim()).filter(Boolean),
      calories: Number(data.get('calories')),
      source: String(data.get('source')),
      enabled: data.get('enabled') === 'true',
      updatedAt: new Date().toLocaleString('zh-CN', {hour12: false}).replaceAll('/', '-')
    });
    backdrop.classList.remove('show');
    renderRecipes();
    const toast = document.querySelector('#toast');
    toast.textContent = '食谱新增成功';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
  });
});

recipeBody.addEventListener('click', event => {
  const more = event.target.closest('[data-recipe-more]');
  if (more) {
    const menu = more.nextElementSibling;
    recipeBody.querySelectorAll('.recipe-action-menu').forEach(item => {
      if (item !== menu) item.hidden = true;
    });
    const willOpen = menu.hidden;
    menu.hidden = !willOpen;
    more.setAttribute('aria-expanded', String(willOpen));
    return;
  }
  const action = event.target.closest('[data-recipe-action]');
  if (!action) return;
  action.closest('.recipe-action-menu').hidden = true;
  const toast = document.querySelector('#toast');
  toast.textContent = `已选择${action.dataset.recipeAction}“${action.dataset.recipeName}”`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
});

document.addEventListener('click', event => {
  if (event.target.closest('.recipe-actions')) return;
  recipeBody.querySelectorAll('.recipe-action-menu').forEach(menu => menu.hidden = true);
  recipeBody.querySelectorAll('[data-recipe-more]').forEach(button => button.setAttribute('aria-expanded', 'false'));
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
