'use strict';
(() => {
  const data = window.SITE_CONTENT;
  const element = (tag, className, text) => {const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;};
  const link = (label,url,className='') => {const node=element('a',className,label);node.href=url;if(url.startsWith('https://')){node.target='_blank';node.rel='noopener noreferrer';}return node;};
  function content(parent,info){
    (info.paragraphs||[]).forEach(text=>parent.append(element('p','',text)));
    if(info.heading)parent.append(element('h4','',info.heading));
    if(info.items){const list=element('ul');info.items.forEach(text=>list.append(element('li','',text)));parent.append(list);}
    if(info.note)parent.append(element('p','note',info.note));
    if(info.links){const links=element('div','links');info.links.forEach(([label,url])=>links.append(link(label,url)));parent.append(links);}
  }
  [['undergraduate','학사과정','학부 · 사회복지학전공'],['graduate','석사·박사과정','일반대학원 · 사회복지학과'],['global','석사과정','글로벌정책대학원 · 사회복지학과']].forEach(([id,degree,title],index)=>{
    const article=element('article','education-article');article.id=id;
    const heading=element('div','education-title');heading.append(element('span','degree',degree),element('h3','',title));
    const body=element('div','education-body');content(body,data.sections[id]);
    article.append(element('span','education-number',String(index+1).padStart(2,'0')),heading,body);document.querySelector('#education-list').append(article);
  });
  data.faculty.forEach((person,index)=>{
    const article=element('article','faculty-card');const contact=element('div','faculty-contact');contact.append(link(person.email,`mailto:${person.email}`),link(person.phone,`tel:${person.phone.replaceAll('-','')}`));
    article.append(element('span','number',`0${index+1} / FACULTY`),element('h3','',person.name),element('p','role',person.role),element('p','fields',person.fields),contact);document.querySelector('#faculty-list').append(article);
  });
  data.achievements.forEach(item=>{
    const article=element('article','achievement-card');const top=element('div','achievement-top');top.append(element('span','',item.category),element('span','',item.year));
    article.append(top,element('h3','',item.title),element('p','',item.description),link('공식 게시판에서 원문 확인','https://icms.pknu.ac.kr/ps1/6856','underlined'));document.querySelector('#achievement-list').append(article);
  });
  data.resources.forEach(item=>{const article=element('article','resource-card');article.id=item.id;article.append(element('span','number',`${item.number} / GUIDE`),element('h3','',item.title));content(article,data.sections[item.id]);document.querySelector('#resource-list').append(article);});
  const button=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
  button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));nav.classList.toggle('menu-open',open);});
  nav.querySelectorAll('a').forEach(item=>item.addEventListener('click',()=>{button.setAttribute('aria-expanded','false');nav.classList.remove('menu-open');}));
})();
