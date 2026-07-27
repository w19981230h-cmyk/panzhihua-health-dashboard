const hypertensionSymptoms=[
  '无症状','头痛头晕','恶心呕吐','眼花耳鸣','呼吸困难',
  '心悸胸闷','鼻衄出血不止','四肢发麻','下肢水肿','其他（请说明）'
];

function questionLabel(index,label,type,required=true){
  return `<div class="scale-preview-question-head"><span class="scale-preview-type">${type}</span><p>${required?'<b>*</b>':''}<strong>${String(index).padStart(2,'0')}</strong>${label}</p></div>`;
}

function textQuestion(index,label,placeholder='请输入',suffix=''){
  return `<section class="scale-preview-question">${questionLabel(index,label,'单行文本')}
    <div class="scale-preview-input-wrap"><input type="text" inputmode="decimal" placeholder="${placeholder}">${suffix?`<span>${suffix}</span>`:''}</div>
  </section>`;
}

function radioQuestion(index,label,options,type='单选'){
  return `<section class="scale-preview-question">${questionLabel(index,label,type)}
    <div class="scale-preview-options">${options.map(option=>`<label><input type="radio" name="preview-q${index}"><i></i><span>${option}</span></label>`).join('')}</div>
  </section>`;
}

function hypertensionFollowupQuestions(){
  return `
    <section class="scale-preview-question">${questionLabel(1,'随访日期','日期')}
      <label class="scale-preview-date"><input type="date" aria-label="随访日期"></label>
    </section>
    ${radioQuestion(2,'随访方式',['门诊','家庭','电话'])}
    <section class="scale-preview-question">${questionLabel(3,'上次随访至今是否出现以下症状？（可多选）','多选')}
      <div class="scale-preview-options">${hypertensionSymptoms.map(option=>`<label><input type="checkbox"><i></i><span>${option}</span></label>`).join('')}</div>
    </section>
    ${textQuestion(4,'本次诊室收缩压平均值','请输入收缩压','mmHg')}
    ${textQuestion(5,'本次诊室舒张压平均值','请输入舒张压','mmHg')}
    ${textQuestion(6,'本次测量心率','请输入心率','次/分钟')}
    ${textQuestion(7,'当前体重','请输入体重','kg')}
    ${textQuestion(8,'体质指数（BMI）','请输入 BMI','kg/m²')}
    ${textQuestion(9,'日吸烟量','请输入每日支数','支/日')}
    ${textQuestion(10,'日饮酒量','请输入每日饮酒量','两/日')}
    ${textQuestion(11,'每周运动次数','请输入次数','次/周')}
    ${textQuestion(12,'每次运动时长','请输入时长','分钟/次')}
    ${radioQuestion(13,'目前摄盐情况',['轻','中','重'])}
    ${radioQuestion(14,'服药依从性',['规律','间断','不服药'])}
    ${radioQuestion(15,'是否出现药物不良反应',['无','有'])}
    ${radioQuestion(16,'此次随访分类',['控制满意','控制不满意','药物不良反应','并发症'])}
    <section class="scale-preview-question">${questionLabel(17,'辅助检查及其他需要说明的情况','多行文本',false)}
      <textarea placeholder="请输入辅助检查结果或其他说明"></textarea>
    </section>
    <section class="scale-preview-question">${questionLabel(18,'下次随访日期','日期')}
      <label class="scale-preview-date"><input type="date" aria-label="下次随访日期"></label>
    </section>`;
}

const diseaseQuestionProfiles={
  糖尿病:[
    ['近期空腹血糖值','mmol/L'],['近期餐后2小时血糖值','mmol/L'],['糖化血红蛋白（HbA1c）','%'],
    ['过去两周是否发生低血糖症状',['从未','偶尔','经常']],['是否按医嘱规律用药',['规律','间断','未用药']]
  ],
  冠心病:[
    ['近一周胸痛或胸闷发生次数','次/周'],['症状通常持续时间','分钟'],['活动是否诱发症状',['否','是']],
    ['休息或含服药物后是否缓解',['完全缓解','部分缓解','不缓解']],['目前日常活动受限程度',['无','轻度','中度','重度']]
  ],
  脑卒中:[
    ['当前肢体活动受限程度',['无','轻度','中度','重度']],['是否存在言语表达困难',['否','是']],
    ['是否存在吞咽困难',['否','是']],['日常生活是否需要他人协助',['不需要','部分需要','完全需要']],['近两周是否出现情绪低落',['否','偶尔','经常']]
  ],
  COPD:[
    ['近一周咳嗽程度',['无','轻度','中度','重度']],['近一周咳痰程度',['无','轻度','中度','重度']],
    ['活动后呼吸困难程度',['无','轻度','中度','重度']],['过去一年急性加重次数','次'],['吸入装置是否按医嘱使用',['是','否']]
  ],
  慢性肾病CKD:[
    ['近期估算肾小球滤过率（eGFR）','mL/min/1.73m²'],['近期尿白蛋白肌酐比（UACR）','mg/g'],
    ['是否出现下肢水肿',['否','是']],['近一周乏力程度',['无','轻度','中度','重度']],['是否按医嘱规律用药',['规律','间断','未用药']]
  ],
  血脂异常:[
    ['近期总胆固醇（TC）','mmol/L'],['近期低密度脂蛋白胆固醇（LDL-C）','mmol/L'],
    ['近期高密度脂蛋白胆固醇（HDL-C）','mmol/L'],['近期甘油三酯（TG）','mmol/L'],['是否按医嘱使用调脂药物',['是','否']]
  ],
  '肥胖/减重管理':[
    ['当前体重','kg'],['当前腰围','cm'],['当前体质指数（BMI）','kg/m²'],
    ['每周中等强度运动次数','次/周'],['当前减重行为准备度',['尚未准备','准备开始','正在行动','持续维持']]
  ]
};

function genericDiseaseQuestions(disease){
  const profile=diseaseQuestionProfiles[disease]||diseaseQuestionProfiles.糖尿病;
  return profile.map(([label,config],index)=>
    Array.isArray(config)
      ?radioQuestion(index+1,label,config)
      :textQuestion(index+1,label,'请输入',config)
  ).join('');
}

function stripDiseasePrefix(name){
  return name.replace(/^【[^】]+】/,'');
}

function buildScalePreview(){
  const root=document.createElement('section');
  root.id='scalePreviewPage';
  root.className='scale-preview-page';
  root.hidden=true;
  root.innerHTML=`
    <header class="scale-preview-header">
      <button class="scale-preview-back" type="button" id="scalePreviewBack"><span aria-hidden="true">‹</span>返回</button>
      <strong id="scalePreviewHeaderTitle">高血压患者随访管理量表</strong>
      <button class="scale-preview-edit" type="button" id="scalePreviewEdit">
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10.8 4H4.7A1.7 1.7 0 0 0 3 5.7v9.6A1.7 1.7 0 0 0 4.7 17h9.6a1.7 1.7 0 0 0 1.7-1.7V9.2"/><path d="m8.1 12.1.4-2.4 6.2-6.2a1.25 1.25 0 0 1 1.8 0 1.25 1.25 0 0 1 0 1.8l-6.2 6.2-2.2.6Z"/></svg>
        编辑
      </button>
    </header>
    <nav class="scale-preview-device-tabs" aria-label="预览设备">
      <button class="active" type="button" data-preview-device="desktop">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="1.5"></rect><path d="M8 21h8M12 17v4"></path></svg>
        <span>电脑预览</span>
      </button>
      <button type="button" data-preview-device="mobile">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"></rect><path d="M10 5h4M11 19h2"></path></svg>
        <span>手机预览</span>
      </button>
    </nav>
    <main class="scale-preview-canvas">
      <div class="scale-preview-geometry geometry-one"></div>
      <div class="scale-preview-geometry geometry-two"></div>
      <article class="scale-preview-form" id="scalePreviewForm">
        <h1 id="scalePreviewTitle">高血压患者随访管理量表</h1>
        <p class="scale-preview-description" id="scalePreviewDescription"></p>
        <div id="scalePreviewQuestions"></div>
        <p class="scale-preview-note">本页面仅用于量表题型预览，不保存填写内容，也不替代医务人员诊断与处置。</p>
      </article>
    </main>`;
  document.body.appendChild(root);
  return root;
}

const scalePreviewPage=buildScalePreview();
const previewDescription='本量表用于高血压患者规范随访，记录症状、血压和心率等体征、生活方式、服药依从性及随访分类。题目依据《国家基本公共卫生服务规范（第三版）》高血压患者随访服务记录表设计。';

function openScalePreview(row){
  const displayName=stripDiseasePrefix(row.name);
  const isHypertensionFollowup=row.disease==='高血压'&&displayName.includes('随访管理');
  scalePreviewPage.classList.remove('mobile-mode');
  scalePreviewPage.querySelectorAll('[data-preview-device]').forEach(button=>
    button.classList.toggle('active',button.dataset.previewDevice==='desktop')
  );
  scalePreviewPage.querySelector('#scalePreviewHeaderTitle').textContent=displayName;
  scalePreviewPage.querySelector('#scalePreviewTitle').textContent=displayName;
  scalePreviewPage.querySelector('#scalePreviewDescription').textContent=isHypertensionFollowup
    ?previewDescription
    :`本页面根据“${displayName}”的评估主题展示对应题型。实际应用时应由具备资质的医疗机构结合量表授权、适用人群和临床流程进行确认。`;
  scalePreviewPage.querySelector('#scalePreviewQuestions').innerHTML=isHypertensionFollowup
    ?hypertensionFollowupQuestions()
    :genericDiseaseQuestions(row.disease);
  scalePreviewPage.dataset.scaleName=row.name;
  scalePreviewPage.hidden=false;
  document.documentElement.classList.add('scale-preview-open');
  scalePreviewPage.querySelector('.scale-preview-canvas').scrollTop=0;
}

function closeScalePreview(){
  scalePreviewPage.hidden=true;
  document.documentElement.classList.remove('scale-preview-open');
}

window.addEventListener('open-scale-preview',event=>openScalePreview(event.detail));
scalePreviewPage.querySelector('#scalePreviewBack').addEventListener('click',closeScalePreview);
scalePreviewPage.querySelector('#scalePreviewEdit').addEventListener('click',()=>{
  const toast=document.querySelector('#toast');
  toast.textContent='已进入当前量表的编辑入口';
  toast.classList.add('show');
  clearTimeout(openScalePreview.toastTimer);
  openScalePreview.toastTimer=setTimeout(()=>toast.classList.remove('show'),1800);
});
scalePreviewPage.querySelector('.scale-preview-device-tabs').addEventListener('click',event=>{
  const button=event.target.closest('[data-preview-device]');
  if(!button)return;
  scalePreviewPage.querySelectorAll('[data-preview-device]').forEach(item=>item.classList.toggle('active',item===button));
  scalePreviewPage.classList.toggle('mobile-mode',button.dataset.previewDevice==='mobile');
  scalePreviewPage.querySelector('.scale-preview-canvas').scrollTop=0;
});
