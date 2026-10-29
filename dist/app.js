const menu=document.querySelector('.menu');const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus()}});
const dialog=document.querySelector('#quote-dialog');let quoteTrigger;
document.querySelectorAll('[data-quote]').forEach(b=>b.addEventListener('click',()=>{quoteTrigger=b;dialog.showModal()}));
dialog?.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog?.addEventListener('close',()=>quoteTrigger?.focus());
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.querySelectorAll('[data-enquiry]').forEach(form=>{form.querySelector('[name="Name"]').addEventListener('input',e=>e.target.setCustomValidity(e.target.value.trim()?'':'Please enter your name.'));form.addEventListener('submit',e=>{e.preventDefault();const name=form.querySelector('[name="Name"]');name.setCustomValidity(name.value.trim()?'':'Please enter your name.');if(!form.reportValidity())return;const lines=['Hello PROCARE INSURANCE,',form.dataset.enquiry,''];for(const [label,value]of new FormData(form)){if(value.trim())lines.push(label+': '+value.trim())}window.location.assign('https://wa.me/919061666607?text='+encodeURIComponent(lines.join('\n')))});});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

document.querySelectorAll('[data-logo-row]').forEach(row=>{
  const viewport=row.querySelector('.logo-window');
  const group=row.querySelector('.logo-group');
  const sizeCards=()=>viewport.style.setProperty('--logo-card-width',Math.min(208,Math.max(0,(viewport.clientWidth-16)/2))+'px');
  sizeCards();new ResizeObserver(sizeCards).observe(viewport);
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const copy=group.cloneNode(true);
  copy.setAttribute('aria-hidden','true');
  copy.inert=true;
  copy.querySelectorAll('img').forEach(img=>img.alt='');
  group.parentNode.appendChild(copy);
  let manualUntil=0, userPaused=reduced.matches, hovering=false, focused=false, previous=0, position=0;
  function update(){copy.hidden=reduced.matches;copy.style.display=reduced.matches?'none':'';}
  function tick(now){const elapsed=previous?Math.min(now-previous,50):0;previous=now;
    const bounds=viewport.getBoundingClientRect();
    if(now>manualUntil&&!userPaused&&!hovering&&!focused&&!reduced.matches&&!document.hidden&&bounds.bottom>0&&bounds.top<window.innerHeight){position+=elapsed*.085;if(position>=group.offsetWidth)position-=group.offsetWidth;viewport.scrollLeft=position;}else{position=viewport.scrollLeft;}
    window.requestAnimationFrame(tick);
  }
  viewport.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')hovering=true;});
  viewport.addEventListener('pointerleave',()=>hovering=false);
  viewport.addEventListener('focusin',()=>focused=true);
  viewport.addEventListener('focusout',()=>focused=false);
  function manual(){manualUntil=performance.now()+3500;}
  viewport.addEventListener('pointerdown',manual);
  viewport.addEventListener('wheel',manual,{passive:true});
  viewport.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key))manual();});
  reduced.addEventListener('change',()=>{userPaused=reduced.matches;viewport.scrollLeft=0;position=0;update();});
  update();window.requestAnimationFrame(tick);
});

const quickQuote=document.querySelector('#quick-quote-form');
quickQuote?.addEventListener('submit',event=>{event.preventDefault();if(!quickQuote.reportValidity())return;const category=quickQuote.querySelector('select').value;window.open('https://wa.me/919747064184?text='+encodeURIComponent('Hello PROCARE INSURANCE, I would like a quote for '+category+'. Please guide me on the next steps.'),'_blank','noopener,noreferrer');});
