const recipeBaseRows = [
  ['芹菜炒香干', '午餐', '菜品', ['高血压', '糖尿病'], 210, 16.8, 8.6, 19.5, true],
  ['燕麦鸡蛋粥', '早餐', '主食', ['糖尿病'], 280, 13.2, 7.1, 42.6, true],
  ['清蒸鲈鱼', '晚餐', '菜品', ['高血压', '高脂血症'], 230, 31.5, 8.2, 6.3, true],
  ['杂粮饭', '午餐', '主食', ['糖尿病', '肥胖'], 180, 5.2, 1.8, 37.4, true],
  ['菠菜豆腐汤', '晚餐', '汤羹', ['高血压'], 120, 9.6, 5.1, 8.7, false],
  ['西兰花炒虾仁', '午餐', '菜品', ['高血压', '糖尿病'], 160, 22.4, 5.7, 9.8, true],
  ['红豆薏米粥', '早餐', '主食', ['肥胖'], 190, 6.4, 1.5, 39.2, true],
  ['香菇鸡胸肉', '午餐', '菜品', ['高脂血症', '肥胖'], 225, 32.6, 7.2, 10.3, true],
  ['南瓜小米粥', '早餐', '主食', ['高血压'], 155, 4.1, 1.2, 33.8, true],
  ['番茄炖牛腩', '晚餐', '菜品', ['高血压'], 310, 27.8, 16.5, 14.2, true],
  ['无糖豆浆', '加餐', '饮品', ['糖尿病', '肥胖'], 86, 7.8, 3.6, 5.4, true],
  ['冬瓜海带汤', '晚餐', '汤羹', ['高血压', '肥胖'], 95, 4.3, 2.1, 13.6, true]
];

const ingredientPresets = [
  [['芹菜', '150g'], ['香干', '80g']],
  [['燕麦', '50g'], ['鸡蛋', '1个']],
  [['鲈鱼', '200g'], ['姜丝', '5g']],
  [['糙米', '50g'], ['小米', '30g']],
  [['菠菜', '100g'], ['豆腐', '120g']],
  [['西兰花', '150g'], ['虾仁', '100g']]
];

const recipeRows = Array.from({ length: 100 }, (_, index) => {
  const seed = recipeBaseRows[index % recipeBaseRows.length];
  const ingredients = ingredientPresets[index % ingredientPresets.length].map(([name, amount]) => ({ name, amount }));
  return {
    id: `recipe-${index + 1}`,
    name: index < recipeBaseRows.length ? seed[0] : `${seed[0]} ${String(index + 1).padStart(3, '0')}`,
    meal: seed[1],
    category: seed[2],
    diseases: [...seed[3]],
    calories: seed[4] + (index % 4) * 5,
    protein: seed[5],
    fat: seed[6],
    carbs: seed[7],
    enabled: index % 9 === 4 ? false : seed[8],
    ingredients,
    steps: `1. 准备${ingredients.map(item => item.name).join('、')}。\n2. 将食材处理后烹饪至熟，少油少盐调味。`,
    image: '',
    thumb: index % 6 + 1,
    createdAt: `2024-05-${String(28 - index % 26).padStart(2, '0')} ${String(8 + index % 10).padStart(2, '0')}:${String(index % 6 * 10).padStart(2, '0')}`
  };
});

const RECIPE_VIRTUAL_TOTAL = 25690;
const recipeState = { query: '', meal: '', category: '', disease: '', enabled: '', page: 1, size: 10 };

function escapeRecipeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}

function showRecipeToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showRecipeToast.timer);
  showRecipeToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function recipeSelect(label, id, options) {
  return `<label class="recipe-filter">
    <span>${label}</span>
    <div class="recipe-select-wrap recipe-ant-select" data-recipe-select>
      <button class="recipe-ant-select-trigger" type="button" role="combobox" aria-label="${label}" aria-haspopup="listbox" aria-expanded="false">
        <span class="recipe-ant-select-value is-placeholder">请选择${label}</span><i class="recipe-ant-select-arrow" aria-hidden="true"></i>
      </button>
      <input id="${id}" type="hidden" value="">
      <div class="recipe-ant-select-dropdown" role="listbox" aria-label="${label}" hidden>
        <button class="recipe-ant-select-option selected" type="button" role="option" data-value="" aria-selected="true"><span>全部</span><i aria-hidden="true">✓</i></button>
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
        <label class="recipe-filter recipe-name-filter"><span>食谱名称</span><div class="recipe-search">
          <input id="recipeSearch" type="search" placeholder="请输入食谱名称" autocomplete="off">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg>
        </div></label>
        ${recipeSelect('餐次', 'recipeMeal', ['早餐', '午餐', '晚餐', '加餐'])}
        ${recipeSelect('食谱分类', 'recipeCategory', ['主食', '菜品', '汤羹', '饮品'])}
        ${recipeSelect('适用病种', 'recipeDisease', ['高血压', '糖尿病', '高脂血症', '肥胖', '高尿酸血症'])}
        ${recipeSelect('状态', 'recipeEnabled', ['启用', '停用'])}
        <button class="recipe-column-button" id="recipeColumnButton" type="button" aria-label="管理显示列">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3" width="13" height="17" rx="2"></rect><path d="M8 3v17m4-17v10"></path><circle cx="18" cy="17" r="4"></circle><path d="M18 15v4m-2-2h4"></path></svg>
        </button>
        <button class="recipe-create-button" id="recipeCreate" type="button"><b>+</b><span>新建食谱</span></button>
      </div>
    </section>
    <section class="recipe-list-card">
      <div class="recipe-table-wrap">
        <table class="recipe-table">
          <thead><tr><th>食谱图片</th><th>食谱名称</th><th>餐次</th><th>食谱分类</th><th>食材及用量</th><th>热量(kcal)</th><th>蛋白质(g)</th><th>脂肪(g)</th><th>碳水(g)</th><th>适用病种</th><th>状态</th><th>创建时间</th><th>操作</th></tr></thead>
          <tbody id="recipeTableBody"></tbody>
        </table>
        <div class="recipe-empty" id="recipeEmpty" hidden>暂无符合条件的食谱</div>
      </div>
      <footer class="recipe-pagination"><span id="recipeTotal">共 25,690 条</span><div class="recipe-pages">
        <button class="recipe-page-arrow" id="recipePrevPage" type="button" disabled>‹</button><div class="recipe-page-numbers" id="recipePageNumbers"></div><button class="recipe-page-arrow" id="recipeNextPage" type="button">›</button>
        <label class="recipe-size"><select id="recipePageSize" aria-label="每页条数"><option value="10">10条/页</option><option value="20">20条/页</option></select><i></i></label><span>跳至</span><input id="recipeJumpPage" type="number" min="1" aria-label="跳转页码"><span>页</span>
      </div></footer>
    </section>`;
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
    value.textContent = option.dataset.value || '全部';
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

function filteredRecipes() {
  const query = recipeState.query.trim().toLowerCase();
  return recipeRows.filter(row =>
    (!query || row.name.toLowerCase().includes(query)) &&
    (!recipeState.meal || row.meal === recipeState.meal) &&
    (!recipeState.category || row.category === recipeState.category) &&
    (!recipeState.disease || row.diseases.includes(recipeState.disease)) &&
    (!recipeState.enabled || (recipeState.enabled === '启用') === row.enabled)
  );
}

function recipeVirtualTotal(rows = filteredRecipes()) {
  if (!rows.length) return 0;
  if (rows.length === recipeRows.length) return RECIPE_VIRTUAL_TOTAL;
  return Math.max(rows.length, Math.round(RECIPE_VIRTUAL_TOTAL * rows.length / recipeRows.length));
}

function recipePageCount() {
  return Math.max(1, Math.ceil(recipeVirtualTotal() / recipeState.size));
}

function recipeImage(row) {
  if (row.image) return `<img class="recipe-image" src="${escapeRecipeHtml(row.image)}" alt="${escapeRecipeHtml(row.name)}">`;
  return `<span class="recipe-thumb recipe-thumb-${row.thumb || 1}" role="img" aria-label="${escapeRecipeHtml(row.name)}"></span>`;
}

function renderRecipes() {
  const rows = filteredRecipes();
  const virtualTotal = recipeVirtualTotal(rows);
  const totalPages = Math.max(1, Math.ceil(virtualTotal / recipeState.size));
  recipeState.page = Math.min(Math.max(1, recipeState.page), totalPages);
  const offset = (recipeState.page - 1) * recipeState.size;
  const shown = rows.length ? Array.from({ length: recipeState.size }, (_, index) => rows[(offset + index) % rows.length]) : [];
  recipeBody.innerHTML = shown.map(row => `
    <tr data-recipe-id="${row.id}">
      <td>${recipeImage(row)}</td>
      <td><strong class="recipe-title">${escapeRecipeHtml(row.name)}</strong></td>
      <td><span class="recipe-tag blue">${escapeRecipeHtml(row.meal || '--')}</span></td>
      <td><span class="recipe-tag green">${escapeRecipeHtml(row.category || '--')}</span></td>
      <td><div class="recipe-ingredients-summary" title="${escapeRecipeHtml(row.ingredients.map(item => `${item.name} ${item.amount}`).join('、'))}">${row.ingredients.map(item => `${escapeRecipeHtml(item.name)} ${escapeRecipeHtml(item.amount)}`).join('、')}</div></td>
      <td>${row.calories ?? '--'}</td><td>${row.protein ?? '--'}</td><td>${row.fat ?? '--'}</td><td>${row.carbs ?? '--'}</td>
      <td><div class="recipe-disease-tags">${row.diseases.length ? row.diseases.map(value => `<span>${escapeRecipeHtml(value)}</span>`).join('') : '--'}</div></td>
      <td><span class="recipe-status ${row.enabled ? 'active' : 'inactive'}"><i aria-hidden="true"></i>${row.enabled ? '启用' : '停用'}</span></td>
      <td>${escapeRecipeHtml(row.createdAt)}</td>
      <td><div class="recipe-actions"><button class="recipe-more-actions" type="button" data-recipe-more aria-expanded="false">更多<i></i></button><div class="recipe-action-menu" hidden>
        <button type="button" data-recipe-action="查看">查看</button><button type="button" data-recipe-action="编辑">编辑</button><button type="button" data-recipe-action="复制">复制</button><button type="button" data-recipe-action="${row.enabled ? '停用' : '启用'}">${row.enabled ? '停用' : '启用'}</button><button type="button" data-recipe-action="删除">删除</button>
      </div></div></td>
    </tr>`).join('');
  recipeEmpty.hidden = shown.length > 0;
  recipePage.querySelector('#recipeTotal').textContent = `共 ${virtualTotal.toLocaleString('zh-CN')} 条`;
  renderRecipePagination(totalPages);
}

function renderRecipePagination(totalPages) {
  const page = recipeState.page;
  let pages = page <= 3 ? [1, 2, 3, 4, 5] : page >= totalPages - 2 ? [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages] : [page - 2, page - 1, page, page + 1, page + 2];
  pages = [...new Set(pages.filter(value => value > 0 && value <= totalPages))];
  recipePage.querySelector('#recipePageNumbers').innerHTML = pages.map(value => `<button type="button" data-recipe-page="${value}" class="${value === page ? 'active' : ''}">${value}</button>`).join('') + (pages.at(-1) < totalPages ? `<span>…</span><button type="button" data-recipe-page="${totalPages}">${totalPages}</button>` : '');
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

function ingredientRow(item = { name: '', amount: '' }) {
  return `<div class="recipe-ingredient-row"><input name="ingredientName" required maxlength="30" value="${escapeRecipeHtml(item.name)}" placeholder="请输入食材名称"><input name="ingredientAmount" required maxlength="20" value="${escapeRecipeHtml(item.amount)}" placeholder="如：100g"><button type="button" data-remove-ingredient aria-label="删除该食材">删除</button></div>`;
}

function formOptions(values, selected = '') {
  return `<option value="">请选择</option>${values.map(value => `<option value="${value}" ${value === selected ? 'selected' : ''}>${value}</option>`).join('')}`;
}

function closeRecipeModal() {
  const backdrop = document.querySelector('#modalBackdrop');
  backdrop.classList.remove('show');
  backdrop.querySelector('.modal').classList.remove('recipe-form-modal', 'recipe-detail-modal');
}

function openRecipeForm(editRow = null) {
  const backdrop = document.querySelector('#modalBackdrop');
  const modal = backdrop.querySelector('.modal');
  const body = document.querySelector('#modalBody');
  modal.classList.add('recipe-form-modal');
  document.querySelector('#modalTitle').textContent = editRow ? '编辑食谱' : '新建食谱';
  const diseases = ['高血压', '糖尿病', '高脂血症', '肥胖', '高尿酸血症'];
  const currentIngredients = editRow?.ingredients?.length ? editRow.ingredients : [{ name: '', amount: '' }];
  body.innerHTML = `<form class="recipe-create-form" id="recipeCreateForm" novalidate>
    <section class="recipe-form-section recipe-basic-section"><h3>基本信息</h3><div class="recipe-form-grid">
      <label class="recipe-field"><span><b>*</b>食谱名称</span><input name="name" required maxlength="30" value="${escapeRecipeHtml(editRow?.name || '')}" placeholder="请输入食谱名称"><small data-error-for="name"></small></label>
      <label class="recipe-field"><span>餐次</span><select name="meal">${formOptions(['早餐', '午餐', '晚餐', '加餐'], editRow?.meal)}</select></label>
      <label class="recipe-field"><span>食谱分类</span><select name="category">${formOptions(['主食', '菜品', '汤羹', '饮品'], editRow?.category)}</select></label>
      <div class="recipe-field recipe-image-field"><span>食谱图片</span><label class="recipe-upload-box"><input name="image" type="file" accept="image/png,image/jpeg,image/webp"><span class="recipe-upload-preview" data-image-preview>${editRow?.image ? `<img src="${escapeRecipeHtml(editRow.image)}" alt="预览">` : '<b>＋</b><em>点击上传图片</em><small>支持 JPG、PNG、WEBP</small>'}</span></label></div>
    </div></section>
    <section class="recipe-form-section"><div class="recipe-section-title"><h3><b>*</b>食材及用量</h3><button type="button" data-add-ingredient>＋ 添加食材</button></div><div class="recipe-ingredient-head"><span>食材名称</span><span>用量</span><span></span></div><div class="recipe-ingredient-list" data-ingredient-list>${currentIngredients.map(ingredientRow).join('')}</div><p class="recipe-section-error" data-ingredient-error></p></section>
    <section class="recipe-form-section"><h3>营养信息</h3><div class="recipe-nutrition-grid">
      <label class="recipe-field"><span>热量（kcal）</span><input name="calories" type="number" min="0" step="0.1" value="${editRow?.calories ?? ''}" placeholder="请输入"></label>
      <label class="recipe-field"><span>蛋白质（g）</span><input name="protein" type="number" min="0" step="0.1" value="${editRow?.protein ?? ''}" placeholder="请输入"></label>
      <label class="recipe-field"><span>脂肪（g）</span><input name="fat" type="number" min="0" step="0.1" value="${editRow?.fat ?? ''}" placeholder="请输入"></label>
      <label class="recipe-field"><span>碳水（g）</span><input name="carbs" type="number" min="0" step="0.1" value="${editRow?.carbs ?? ''}" placeholder="请输入"></label>
    </div></section>
    <section class="recipe-form-section"><h3>适用病种 <span class="recipe-optional">（可多选）</span></h3><div class="recipe-disease-options">${diseases.map(value => `<label><input type="checkbox" name="diseases" value="${value}" ${editRow?.diseases?.includes(value) ? 'checked' : ''}><span>${value}</span></label>`).join('')}</div></section>
    <section class="recipe-form-section recipe-required-section"><label class="recipe-field"><span><b>*</b>制作步骤</span><textarea name="steps" required maxlength="2000" rows="5" placeholder="请输入制作步骤，可按序号分步描述">${escapeRecipeHtml(editRow?.steps || '')}</textarea><small data-error-for="steps"></small></label></section>
    <section class="recipe-form-section recipe-status-section"><div class="recipe-field"><span><b>*</b>状态</span><div class="recipe-status-options"><label><input type="radio" name="enabled" value="true" ${(editRow?.enabled ?? true) ? 'checked' : ''}><span>启用</span></label><label><input type="radio" name="enabled" value="false" ${editRow && !editRow.enabled ? 'checked' : ''}><span>停用</span></label></div></div></section>
    <div class="recipe-form-actions"><button type="button" data-recipe-cancel>取消</button><button class="primary" type="submit">${editRow ? '保存修改' : '保存食谱'}</button></div>
  </form>`;
  backdrop.classList.add('show');
  let uploadedImage = editRow?.image || '';
  const form = body.querySelector('#recipeCreateForm');
  form.querySelector('[name="name"]').focus();
  form.querySelector('[data-add-ingredient]').addEventListener('click', () => {
    form.querySelector('[data-ingredient-list]').insertAdjacentHTML('beforeend', ingredientRow());
    form.querySelector('.recipe-ingredient-row:last-child input').focus();
  });
  form.addEventListener('click', event => {
    const remove = event.target.closest('[data-remove-ingredient]');
    if (!remove) return;
    const rows = form.querySelectorAll('.recipe-ingredient-row');
    if (rows.length === 1) {
      rows[0].querySelectorAll('input').forEach(input => { input.value = ''; });
      rows[0].querySelector('input').focus();
    } else remove.closest('.recipe-ingredient-row').remove();
  });
  form.querySelector('[name="image"]').addEventListener('change', event => {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) { showRecipeToast('图片大小不能超过 3MB'); event.target.value = ''; return; }
    const reader = new FileReader();
    reader.addEventListener('load', () => { uploadedImage = String(reader.result); form.querySelector('[data-image-preview]').innerHTML = `<img src="${uploadedImage}" alt="图片预览">`; });
    reader.readAsDataURL(file);
  });
  form.querySelector('[data-recipe-cancel]').addEventListener('click', closeRecipeModal);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const steps = form.elements.steps.value.trim();
    const ingredientNames = [...form.querySelectorAll('[name="ingredientName"]')];
    const ingredientAmounts = [...form.querySelectorAll('[name="ingredientAmount"]')];
    let valid = true;
    form.querySelector('[data-error-for="name"]').textContent = name ? '' : '请输入食谱名称';
    form.querySelector('[data-error-for="steps"]').textContent = steps ? '' : '请输入制作步骤';
    if (!name || !steps) valid = false;
    const ingredients = ingredientNames.map((input, index) => ({ name: input.value.trim(), amount: ingredientAmounts[index].value.trim() }));
    const ingredientsValid = ingredients.length && ingredients.every(item => item.name && item.amount);
    form.querySelector('[data-ingredient-error]').textContent = ingredientsValid ? '' : '请完整填写食材名称和用量';
    ingredientNames.forEach((input, index) => input.classList.toggle('invalid', !ingredients[index].name));
    ingredientAmounts.forEach((input, index) => input.classList.toggle('invalid', !ingredients[index].amount));
    if (!ingredientsValid) valid = false;
    if (!valid) { form.querySelector(':invalid, .invalid')?.focus(); return; }
    const data = new FormData(form);
    const numberOrEmpty = key => data.get(key) === '' ? '' : Number(data.get(key));
    const payload = {
      id: editRow?.id || `recipe-${Date.now()}`,
      name,
      image: uploadedImage,
      thumb: editRow?.thumb || 1,
      meal: String(data.get('meal') || ''),
      category: String(data.get('category') || ''),
      ingredients,
      calories: numberOrEmpty('calories'), protein: numberOrEmpty('protein'), fat: numberOrEmpty('fat'), carbs: numberOrEmpty('carbs'),
      diseases: data.getAll('diseases').map(String),
      steps,
      enabled: data.get('enabled') === 'true',
      createdAt: editRow?.createdAt || new Date().toLocaleString('zh-CN', { hour12: false }).replaceAll('/', '-')
    };
    if (editRow) Object.assign(editRow, payload); else recipeRows.unshift(payload);
    recipeState.page = 1;
    closeRecipeModal();
    renderRecipes();
    showRecipeToast(editRow ? '食谱修改成功' : '食谱新增成功');
  });
}

function openRecipeDetail(row) {
  const backdrop = document.querySelector('#modalBackdrop');
  backdrop.querySelector('.modal').classList.add('recipe-detail-modal');
  document.querySelector('#modalTitle').textContent = '食谱详情';
  document.querySelector('#modalBody').innerHTML = `<div class="recipe-detail"><div class="recipe-detail-hero">${recipeImage(row)}<div><h3>${escapeRecipeHtml(row.name)}</h3><p>${escapeRecipeHtml(row.meal || '--')} · ${escapeRecipeHtml(row.category || '--')} · ${row.enabled ? '启用' : '停用'}</p></div></div><dl><dt>食材及用量</dt><dd>${row.ingredients.map(item => `${escapeRecipeHtml(item.name)} ${escapeRecipeHtml(item.amount)}`).join('、')}</dd><dt>营养信息</dt><dd>热量 ${row.calories || '--'} kcal　蛋白质 ${row.protein || '--'} g　脂肪 ${row.fat || '--'} g　碳水 ${row.carbs || '--'} g</dd><dt>适用病种</dt><dd>${row.diseases.join('、') || '--'}</dd><dt>制作步骤</dt><dd class="recipe-detail-steps">${escapeRecipeHtml(row.steps).replaceAll('\n', '<br>')}</dd></dl></div>`;
  backdrop.classList.add('show');
}

recipePage.querySelector('#recipeSearch').addEventListener('input', event => { recipeState.query = event.target.value; recipeState.page = 1; renderRecipes(); });
[['recipeMeal', 'meal'], ['recipeCategory', 'category'], ['recipeDisease', 'disease'], ['recipeEnabled', 'enabled']].forEach(([id, key]) => recipePage.querySelector(`#${id}`).addEventListener('change', event => { recipeState[key] = event.target.value; recipeState.page = 1; renderRecipes(); }));
recipePage.querySelector('#recipePrevPage').addEventListener('click', () => { if (recipeState.page > 1) { recipeState.page -= 1; renderRecipes(); } });
recipePage.querySelector('#recipeNextPage').addEventListener('click', () => { if (recipeState.page < recipePageCount()) { recipeState.page += 1; renderRecipes(); } });
recipePage.querySelector('#recipePageNumbers').addEventListener('click', event => { const button = event.target.closest('[data-recipe-page]'); if (button) { recipeState.page = Number(button.dataset.recipePage); renderRecipes(); } });
recipePage.querySelector('#recipePageSize').addEventListener('change', event => { recipeState.size = Number(event.target.value); recipeState.page = 1; renderRecipes(); });
recipePage.querySelector('#recipeJumpPage').addEventListener('change', event => { recipeState.page = Math.min(recipePageCount(), Math.max(1, Number(event.target.value) || 1)); event.target.value = ''; renderRecipes(); });
recipePage.querySelector('#recipeColumnButton').addEventListener('click', () => showRecipeToast('列表已展示全部新增字段'));
recipePage.querySelector('#recipeCreate').addEventListener('click', () => openRecipeForm());

recipeBody.addEventListener('click', event => {
  const more = event.target.closest('[data-recipe-more]');
  if (more) {
    const menu = more.nextElementSibling;
    recipeBody.querySelectorAll('.recipe-action-menu').forEach(item => { if (item !== menu) item.hidden = true; });
    menu.hidden = !menu.hidden;
    more.setAttribute('aria-expanded', String(!menu.hidden));
    return;
  }
  const actionButton = event.target.closest('[data-recipe-action]');
  if (!actionButton) return;
  const rowElement = actionButton.closest('tr');
  const row = recipeRows.find(item => item.id === rowElement.dataset.recipeId);
  if (!row) return;
  actionButton.closest('.recipe-action-menu').hidden = true;
  const action = actionButton.dataset.recipeAction;
  if (action === '查看') openRecipeDetail(row);
  if (action === '编辑') openRecipeForm(row);
  if (action === '复制') { recipeRows.unshift({ ...row, id: `recipe-${Date.now()}`, name: `${row.name} 副本`, diseases: [...row.diseases], ingredients: row.ingredients.map(item => ({ ...item })), createdAt: new Date().toLocaleString('zh-CN', { hour12: false }).replaceAll('/', '-') }); recipeState.page = 1; renderRecipes(); showRecipeToast('食谱复制成功'); }
  if (action === '启用' || action === '停用') { row.enabled = action === '启用'; renderRecipes(); showRecipeToast(`已${action}“${row.name}”`); }
  if (action === '删除') { const index = recipeRows.indexOf(row); if (index >= 0) recipeRows.splice(index, 1); renderRecipes(); showRecipeToast('食谱已删除'); }
});

document.addEventListener('click', event => {
  if (!event.target.closest('.recipe-actions')) recipeBody.querySelectorAll('.recipe-action-menu').forEach(menu => { menu.hidden = true; });
  if (!event.composedPath().includes(recipePage)) closeRecipeSelects();
});

document.querySelector('#closeModal').addEventListener('click', () => document.querySelector('#modalBackdrop .modal').classList.remove('recipe-form-modal', 'recipe-detail-modal'));
document.querySelector('#modalBackdrop').addEventListener('click', event => { if (event.target === event.currentTarget) event.currentTarget.querySelector('.modal').classList.remove('recipe-form-modal', 'recipe-detail-modal'); });
document.querySelectorAll('.subnav button').forEach(button => button.addEventListener('click', () => {
  const page = button.dataset.page;
  const opensRecipe = page === '食谱管理';
  setRecipeMode(opensRecipe);
  if (!opensRecipe && page !== '单病种质效管理看板') { document.querySelector('#pageTitle').hidden = false; document.querySelector('.customer-card').hidden = false; }
}));
document.querySelector('.nav-item.dashboard').addEventListener('click', () => { setRecipeMode(false); document.querySelector('#pageTitle').hidden = false; document.querySelector('.customer-card').hidden = false; });

renderRecipes();
