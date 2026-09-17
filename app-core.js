const DB={
  url:'https://pnyoozmgiwftnyuefsgr.supabase.co',
  key:'sb_publishable_LeZfLoRAvtqTMuLHaqjxbA_1rasUioY',
  token(){return localStorage.getItem('nova_token')||''},
  refreshToken(){return localStorage.getItem('nova_refresh_token')||''},
  saveSession(s){if(s?.access_token)localStorage.setItem('nova_token',s.access_token);if(s?.refresh_token)localStorage.setItem('nova_refresh_token',s.refresh_token);if(s?.access_token&&/konto\.html$/i.test(location.pathname)){const back=this.safeReturn(new URLSearchParams(location.search).get('return'));if(back)setTimeout(()=>location.href=back,0)}},
  clearSession(){localStorage.removeItem('nova_token');localStorage.removeItem('nova_refresh_token')},
  async request(path,opt={}){const r=await fetch(this.url+path,opt);let j=null;try{j=await r.json()}catch{}if(!r.ok){const e=new Error(j?.msg||j?.message||j?.error_description||j?.error||('HTTP '+r.status));e.status=r.status;e.data=j;throw e}return j},
  async refresh(){const rt=this.refreshToken();if(!rt)throw new Error('Keine Sitzung');const j=await this.request('/auth/v1/token?grant_type=refresh_token',{method:'POST',headers:{apikey:this.key,'Content-Type':'application/json'},body:JSON.stringify({refresh_token:rt})});this.saveSession(j);return j.access_token},
  async authRequest(path,opt={}){let token=this.token();if(!token)throw new Error('Nicht angemeldet');const make=()=>fetch(this.url+path,{...opt,headers:{apikey:this.key,Authorization:'Bearer '+token,...(opt.headers||{})}});let r=await make();if(r.status===401&&this.refreshToken()){try{token=await this.refresh();r=await make()}catch{this.clearSession()}}let j=null;try{j=await r.json()}catch{}if(!r.ok){const e=new Error(j?.msg||j?.message||j?.error_description||j?.error||('HTTP '+r.status));e.status=r.status;e.data=j;throw e}return j},
  async user(){return this.authRequest('/auth/v1/user')},
  esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))},
  euro(n){return new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(Number(n)||0)},
  date(v){try{return new Intl.DateTimeFormat('de-DE',{dateStyle:'medium'}).format(new Date(v))}catch{return ''}},
  loginUrl(returnTo){const target=returnTo||location.pathname.split('/').pop()+location.search+location.hash;return 'konto.html?return='+encodeURIComponent(target)},
  safeReturn(v){if(!v)return'';try{const d=decodeURIComponent(v);if(/^https?:/i.test(d)||d.startsWith('//')||d.includes('\\')||d.includes('/'))return'';if(!/^[a-zA-Z0-9_.?=&%#-]+$/.test(d))return'';return d}catch{return''}}
};
window.DB=DB;
(function polishFlows(){const run=()=>{document.querySelectorAll('.securePay').forEach(el=>el.remove());document.querySelectorAll('.choice.disabled').forEach(el=>{if(/sicher bezahlen/i.test(el.textContent||''))el.remove()});if(!/konto\.html$/i.test(location.pathname)){document.querySelectorAll('a[href="konto.html"]').forEach(a=>{if(/einloggen|registrieren/i.test(a.textContent||''))a.href=DB.loginUrl()})}if(/konto\.html$/i.test(location.pathname)){document.querySelectorAll('.actions').forEach(box=>{if(box.querySelector('a[href="verkaufen.html"]')&&!box.querySelector('a[href="mein-stand.html"]')){const a=document.createElement('a');a.href='mein-stand.html';a.className='btn light';a.textContent='🏪 Mein Stand / Händler-Shop';box.querySelector('a[href="verkaufen.html"]').insertAdjacentElement('afterend',a)}})}};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run()})();