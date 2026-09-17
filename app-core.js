const DB={
  url:'https://pnyoozmgiwftnyuefsgr.supabase.co',
  key:'sb_publishable_LeZfLoRAvtqTMuLHaqjxbA_1rasUioY',
  token(){return localStorage.getItem('nova_token')||''},
  refreshToken(){return localStorage.getItem('nova_refresh_token')||''},
  saveSession(s){if(s?.access_token)localStorage.setItem('nova_token',s.access_token);if(s?.refresh_token)localStorage.setItem('nova_refresh_token',s.refresh_token)},
  clearSession(){localStorage.removeItem('nova_token');localStorage.removeItem('nova_refresh_token')},
  async request(path,opt={}){
    const r=await fetch(this.url+path,opt);let j=null;try{j=await r.json()}catch{}
    if(!r.ok){const e=new Error(j?.msg||j?.message||j?.error_description||j?.error||('HTTP '+r.status));e.status=r.status;e.data=j;throw e}return j
  },
  async refresh(){const rt=this.refreshToken();if(!rt)throw new Error('Keine Sitzung');const j=await this.request('/auth/v1/token?grant_type=refresh_token',{method:'POST',headers:{apikey:this.key,'Content-Type':'application/json'},body:JSON.stringify({refresh_token:rt})});this.saveSession(j);return j.access_token},
  async authRequest(path,opt={}){
    let token=this.token();if(!token)throw new Error('Nicht angemeldet');
    const make=()=>fetch(this.url+path,{...opt,headers:{apikey:this.key,Authorization:'Bearer '+token,...(opt.headers||{})}});
    let r=await make();if(r.status===401&&this.refreshToken()){try{token=await this.refresh();r=await make()}catch{this.clearSession()}}
    let j=null;try{j=await r.json()}catch{}if(!r.ok){const e=new Error(j?.msg||j?.message||j?.error_description||j?.error||('HTTP '+r.status));e.status=r.status;e.data=j;throw e}return j
  },
  async user(){return this.authRequest('/auth/v1/user')},
  esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))},
  euro(n){return new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(Number(n)||0)},
  date(v){try{return new Intl.DateTimeFormat('de-DE',{dateStyle:'medium'}).format(new Date(v))}catch{return ''}}
};
window.DB=DB;

(function polishFlows(){
  const run=()=>{
    document.querySelectorAll('.securePay').forEach(el=>el.remove());
    document.querySelectorAll('.choice.disabled').forEach(el=>{if(/sicher bezahlen/i.test(el.textContent||''))el.remove()});
    document.querySelectorAll('.security .muted').forEach(el=>{
      if(/sicher bezahlen/i.test(el.textContent||''))el.textContent='Abholung und Barzahlung sind aktuell der unterstützte Ablauf. Bleib für Absprachen im DeinBasar-Chat und teile keine TANs, SMS-Codes, Passwörter oder Kreditkartendaten.';
    });
    if(/konto\.html$/i.test(location.pathname)){
      document.querySelectorAll('.actions').forEach(box=>{
        if(box.querySelector('a[href="verkaufen.html"]')&&!box.querySelector('a[data-merchant-entry]')){
          const a=document.createElement('a');a.href='mein-stand.html';a.className='btn light';a.dataset.merchantEntry='1';a.textContent='🏪 Mein Stand / Händler-Shop';
          box.querySelector('a[href="verkaufen.html"]').insertAdjacentElement('afterend',a);
        }
      });
    }
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();