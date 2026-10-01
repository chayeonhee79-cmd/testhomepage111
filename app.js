'use strict';
(() => {
  const data = window.SITE_CONTENT;
  const dialog = document.querySelector('#info-window');
  const body = document.querySelector('#dialog-body');
  let opener = null;
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const link = (label, url) => {
    const node = element('a', '', label);
    node.href = url;
    if (url.startsWith('https://')) { node.target = '_blank'; node.rel = 'noopener noreferrer'; }
    return node;
  };
  data.faculty.forEach((person, index) => {
    const row = element('button', 'faculty-row');
    row.type = 'button'; row.dataset.window = `faculty-${index}`;
    row.append(element('span', 'faculty-num', String(index + 1).padStart(2,'0')));
    const name = element('span', 'faculty-name', person.name);
    name.append(element('small', '', person.role));
    row.append(name, element('span', 'faculty-fields', person.fields), element('span', 'row-open', '소개 열기 ＋'));
    document.querySelector('#faculty-list').append(row);
  });
  data.achievements.forEach((item,index) => {
    const row = element('button','achievement-row');
    row.type='button'; row.dataset.window=`achievement-${index}`;
    const title = element('span');
    title.append(element('span','category',item.category),element('strong','',item.title));
    row.append(element('span','achievement-year',item.year),title,element('span','row-open','소식 열기 ＋'));
    document.querySelector('#achievement-list').append(row);
  });
  data.resources.forEach(item => {
    const card=element('button','resource-card');card.type='button';card.dataset.window=item.id;
    card.append(element('span','',`${item.number} / GUIDE`),element('h3','',item.title),element('p','',item.description),element('span','row-open','정보 보기 ＋'));
    document.querySelector('#resource-list').append(card);
  });
  function resetWindow() {
    dialog.classList.remove('maximized');
    dialog.style.left='';dialog.style.top='';dialog.style.margin='';
    document.querySelector('#maximize-window').setAttribute('aria-label','창 크기 확대');
  }
  function showWindow(id, trigger) {
    let info=data.windows[id];
    body.replaceChildren();
    if (id.startsWith('faculty-')) {
      const person=data.faculty[Number(id.split('-')[1])];
      if (!person) return;
      info={label:'PEOPLE / FACULTY',title:person.name,paragraphs:[person.role],links:[['공식 교수진 소개','https://icms.pknu.ac.kr/ps1/6390']]};
      const profile=element('dl','profile-detail');
      profile.append(element('dt','','연구 분야'),element('dd','',person.fields),element('dt','','이메일'));
      const email=element('dd');email.append(link(person.email,`mailto:${person.email}`));profile.append(email,element('dt','','전화번호'));
      const phone=element('dd');phone.append(link(person.phone,`tel:${person.phone.replaceAll('-','')}`));profile.append(phone);
      body.append(profile);
    } else if(id.startsWith('achievement-')) {
      const item=data.achievements[Number(id.split('-')[1])];
      if (!item) return;
      info={label:`IMPACT / ${item.category}`,title:item.title,paragraphs:[item.description],links:[['공식 전공성과 게시판에서 원문 확인','https://icms.pknu.ac.kr/ps1/6856']]};
    }
    if (!info) return;
    document.querySelector('#dialog-label').textContent=info.label;
    document.querySelector('#dialog-title').textContent=info.title;
    const paragraphs=document.createDocumentFragment();
    (info.paragraphs||[]).forEach(text=>paragraphs.append(element('p','',text)));
    body.prepend(paragraphs);
    if (info.heading) body.append(element('h3','',info.heading));
    if (info.items) { const list=element('ul');info.items.forEach(text=>list.append(element('li','',text)));body.append(list); }
    if(info.note)body.append(element('p','detail-note',info.note));
    if(info.links){const links=element('div','detail-links');info.links.forEach(([label,url])=>links.append(link(label,url)));body.append(links);}
    opener=trigger;resetWindow();dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';
  }
  document.addEventListener('click', event=>{
    const trigger=event.target.closest('[data-window]');
    if(trigger)showWindow(trigger.dataset.window,trigger);
  });
  document.querySelector('#close-window').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{document.body.style.overflow='';resetWindow();opener?.focus({preventScroll:true});});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
  document.querySelector('#maximize-window').addEventListener('click',event=>{
    const expanded=dialog.classList.toggle('maximized');
    dialog.style.left='';dialog.style.top='';dialog.style.margin='';
    event.currentTarget.setAttribute('aria-label',expanded?'창 크기 복원':'창 크기 확대');
  });
  const bar=document.querySelector('.dialog-bar');
  let dragging=null;
  bar.addEventListener('pointerdown',event=>{
    if(event.target.closest('button')||dialog.classList.contains('maximized')||window.innerWidth<=760)return;
    const rect=dialog.getBoundingClientRect();
    dragging={offsetX:event.clientX-rect.left,offsetY:event.clientY-rect.top};
    dialog.style.margin='0';dialog.style.left=`${rect.left}px`;dialog.style.top=`${rect.top}px`;
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener('pointermove',event=>{
    if(!dragging)return;
    const rect=dialog.getBoundingClientRect();
    dialog.style.left=`${Math.max(0,Math.min(innerWidth-rect.width,event.clientX-dragging.offsetX))}px`;
    dialog.style.top=`${Math.max(0,Math.min(innerHeight-rect.height,event.clientY-dragging.offsetY))}px`;
  });
  const stopDragging=()=>{dragging=null;};
  bar.addEventListener('pointerup',stopDragging);bar.addEventListener('pointercancel',stopDragging);bar.addEventListener('lostpointercapture',stopDragging);
  window.addEventListener('resize',()=>{if(dialog.open)resetWindow();});
  const menuButton=document.querySelector('.menu-button');
  const menu=document.querySelector('#mobile-menu');
  menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(expanded));menu.hidden=!expanded;});
  menu.querySelectorAll('a').forEach(item=>item.addEventListener('click',()=>{menu.hidden=true;menuButton.setAttribute('aria-expanded','false');}));
})();
