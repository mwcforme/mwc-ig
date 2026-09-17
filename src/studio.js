const $=id=>document.getElementById(id), canvas=$('canvas');
const NAVY='#0b1028',WHITE='#fafaf7',GRAY='#62697a';
const TEMPLATES=[
 {id:'editorial',name:'Note to self',tag:'note to self',headline:'Book the\nappointment.',body:'That question you keep putting off? Write it down.',callout:'Bring it with you.'},
 {id:'statement',name:'Marker poster',tag:'A reminder from MWC',headline:'STOP\nPUTTING\nYOU LAST.',body:'Make some time for your health.'},
 {id:'split',name:'Photo contact sheet',tag:'Outside the to-do list',headline:'Leave room for you.',body:'Start with one conversation.',photo:'fathers-day-fd-slide-1-beach'},
 {id:'checklist',name:'Screenshot checklist',tag:'Save this for your visit',headline:'Bring these.\nAsk anything.',benefits:'Your questions|Your medication list|Changes you have noticed|What you want to work on',body:'A few notes are enough to start.'},
 {id:'myth',name:'Cross-out / rewrite',tag:'Change the script',headline:'I’ll ask\nsome other time.',accent:'Put it on\nthe calendar.',body:'You can start with one question.'},
 {id:'quote',name:'Message exchange',tag:'A question worth asking',headline:'Where do I even\nstart?',callout:'Tell your clinician what has changed.'},
 {id:'number',name:'Big number / list',tag:'Before your next visit',headline:'things to\nwrite down',accent:'3',benefits:'What has changed|When it started|What you want to ask'},
 {id:'question',name:'Question sticker',tag:'Ask MWC',headline:'What’s the\none question\non your mind?',body:'Write it down for your next visit.'},
 {id:'photo',name:'Photo caption strip',tag:'A little room in your week',headline:'MAKE TIME\nFOR YOU.',body:'Your health belongs on the list.',photo:'fathers-day-fathers-day-slide-2'},
 {id:'comparison',name:'Side-by-side',tag:'At your next appointment',headline:'Try asking it this way.',accent:'Instead of|Ask',benefits:'Is this normal?|What could explain this?|What now?|What are my options?',body:'Bring the question. Start there.'},
 {id:'steps',name:'Step stack',tag:'Keep it simple',headline:'Your next move.',benefits:'Write the question|Book a conversation|Talk it through',body:'One step is a start.'},
 {id:'appointment',name:'Calendar reminder',tag:'A reminder from MWC',headline:'Make time\nfor you.',body:'Put your health on the calendar.',callout:'Book a conversation'}
];
const keys=['format','eyebrow','headline','accent','body','callout','benefits','cta','footer','position','darkness','color','scale'];
const photoNames=['Trackside portrait','Outdoor workout','Beach escape','Patio conversation','American spirit','Campaign portrait','Community gathering','Evening sky'];
let active='editorial',images={},logos={},ready=false,grid=false,timer,drafts={};
function initial(t){return {format:'portrait',eyebrow:t.tag,headline:t.headline,accent:t.accent||'',body:t.body||'',callout:t.callout||'',benefits:t.benefits||'',cta:'BOOKMWC.COM',footer:'',position:t.id==='split'?'100':t.id==='photo'?'70':'50',darkness:'18',color:'#ee6b06',scale:'1',photoKey:t.photo||'fathers-day-fd-slide-1-beach',custom:null}}
TEMPLATES.forEach(t=>drafts[t.id]=initial(t));
function state(){return {...drafts[active],...Object.fromEntries(keys.map(k=>[k,$(k).value]))}}
function loadFields(){keys.forEach(k=>$(k).value=drafts[active][k]);const relevant={accent:['myth','number','comparison'],benefits:['checklist','number','comparison','steps'],callout:['editorial','quote','appointment']};for(const [k,ids] of Object.entries(relevant))$(k).closest('.field').classList.toggle('hidden',!ids.includes(active));const isPhoto=['split','photo'].includes(active);$('position').closest('.field').classList.toggle('hidden',!isPhoto);$('darkness').closest('.field').classList.toggle('hidden',active!=='photo');$('photos').style.opacity=isPhoto?'1':'.5';$('body').closest('.field').classList.toggle('hidden',['quote','number'].includes(active));$('listHint').textContent=({checklist:4,number:3,comparison:4,steps:3}[active]||3)+' maximum; separate with |';$('accent').closest('.field').firstChild.textContent=active==='number'?'Number ':active==='comparison'?'Column labels (separate with |) ':'Replacement text '}
function toast(s){$('toast').textContent=s;clearTimeout(timer);timer=setTimeout(()=>$('toast').textContent='',4200)}
function loadImage(src){return new Promise((resolve,reject)=>{const im=new Image;im.onload=()=>resolve(im);im.onerror=()=>reject(Error('Image could not be opened'));im.src=src})}
function brandAssets(){let a=document.createElement('canvas');a.width=740;a.height=183;let c=a.getContext('2d');c.drawImage(images.brand,350,940,740,183,0,0,740,183);let d=c.getImageData(0,0,740,183);for(let i=0;i<d.data.length;i+=4){const alpha=Math.max(0,Math.min(255,(d.data[i]-20)*1.35));d.data[i]=250;d.data[i+1]=250;d.data[i+2]=247;d.data[i+3]=alpha}c.putImageData(d,0,0);logos.light=a;let b=document.createElement('canvas');b.width=740;b.height=183;let z=b.getContext('2d');z.drawImage(a,0,0);z.globalCompositeOperation='source-in';z.fillStyle=NAVY;z.fillRect(0,0,740,183);logos.dark=b}
// Essential content stays within these conservative studio margins.
// Feed portrait additionally protects a centered square crop. These are studio
// constraints, not a claim that every Instagram placement has identical overlays.
const SAFE_ZONES={portrait:{left:80,right:80,top:175,bottom:175},square:{left:80,right:80,top:80,bottom:80},story:{left:80,right:80,top:270,bottom:390}};
function safeRect(format){const H={portrait:1350,square:1080,story:1920}[format],z=SAFE_ZONES[format];return {x:z.left,y:z.top,w:1080-z.left-z.right,h:H-z.top-z.bottom,H,...z}}
function paint(target,id,s){
 const z=safeRect(s.format),H=z.H,c=target.getContext('2d');target.width=1080;target.height=H;
 const contentH=z.h-(s.footer.trim()?110:0);const X=p=>z.x+p*z.w,Y=p=>z.y+p*contentH,W=p=>p*z.w,V=p=>p*contentH;
 const A=s.color,ink=NAVY,paper='#f4f4ed',white='#ffffff';
 const dark=['statement','quote','question','photo','steps'].includes(id);
 let bg=dark?ink:id==='number'?A:paper;
 c.fillStyle=bg;c.fillRect(0,0,1080,H);
 target._layoutBoxes=[];target._warnings=[];target._safe=z;
 const rect=(x,y,w,h,col)=>{c.fillStyle=col;c.fillRect(x,y,w,h)};
 const stroke=(x,y,w,h,col=ink,weight=3)=>{c.strokeStyle=col;c.lineWidth=weight;c.strokeRect(x,y,w,h)};
 function round(x,y,w,h,col,r=24){c.fillStyle=col;c.beginPath();c.roundRect(x,y,w,h,r);c.fill()}
 function font(size,style){const f={bold:'700 SIZEpx Arial, sans-serif',plain:'SIZEpx Arial, sans-serif',condensed:'SIZEpx Impact, "Arial Narrow", sans-serif',note:'700 SIZEpx "Courier New", monospace',hand:'SIZEpx "Segoe Print", "Comic Sans MS", cursive'};c.font=(f[style]||f.plain).replace('SIZE',size)}
 function wrap(str,w,size,style){font(size,style);let result=[];for(const para of String(str).split('\n')){let line='';for(const word of para.split(/\s+/).filter(Boolean)){if(c.measureText((line?line+' ':'')+word).width<=w){line+=(line?' ':'')+word;continue}if(line)result.push(line);line='';for(const ch of word){if(line&&c.measureText(line+ch).width>w){result.push(line);line=''}line+=ch}}if(line)result.push(line)}return result}
 function record(type,x,y,w,h,content){target._layoutBoxes.push({type,x,y,w,h,content});if(x<z.x-.1||y<z.y-.1||x+w>z.x+z.w+.1||y+h>z.y+z.h+.1)target._warnings.push('Content outside safe zone')}
 // Logical layout boxes are tested; measured glyph bounds are recorded separately.
 function text(str,x,y,w,h,size=64,style='bold',color=dark?paper:ink,align='left'){
  if(!String(str||'').trim())return;
  let fs=size*(size>=45?Number(s.scale):1),ls=wrap(str,w-8,fs,style),leading=style==='condensed'?1.03:1.14;
  while(fs>12&&ls.length*fs*leading>h){fs-=1;ls=wrap(str,w-8,fs,style)}
  if(fs<22||ls.length*fs*leading>h+.1)target._warnings.push('Shorten copy for readable type');
  record('text-box',x,y,w,h,str);font(fs,style);c.fillStyle=color;c.textBaseline='alphabetic';c.textAlign='left';
  // Place the actual ink, including ascenders, within the allocated row.
  ls.forEach((l,i)=>{const m=c.measureText(l);const left=m.actualBoundingBoxLeft||0,right=m.actualBoundingBoxRight||m.width,inkWidth=left+right;const tx=align==='center'?x+(w-inkWidth)/2+left:align==='right'?x+w-right:x+Math.max(0,left);const asc=m.actualBoundingBoxAscent||fs*.78;const desc=m.actualBoundingBoxDescent||fs*.22;const ty=y+i*fs*leading+fs*.88;
   c.fillText(l,tx,ty);target._layoutBoxes.push({type:'glyph',x:tx-(m.actualBoundingBoxLeft||0),y:ty-asc,w:(m.actualBoundingBoxLeft||0)+(m.actualBoundingBoxRight||m.width),h:asc+desc,content:l});
  });
 }
 function T(str,x,y,w,h,fs=64,style='bold',color=dark?paper:ink,align='left'){text(str,X(x),Y(y),W(w),V(h),fs,style,color,align)}
 function logo(x,y,w=.25,light=dark){const px=X(x),py=Y(y),ww=W(w),hh=ww*183/740;c.drawImage(light?logos.light:logos.dark,px,py,ww,hh);record('logo',px,py,ww,hh,'MWC logo')}
 function photo(x,y,w,h,key=s.photoKey,pos=Number(s.position)/100){const im=s.custom?images[s.custom]:images[key];if(!im)return;const scale=Math.max(w/im.width,h/im.height),sw=w/scale,sh=h/scale;c.drawImage(im,(im.width-sw)*pos,(im.height-sh)*.30,sw,sh,x,y,w,h)}
 function slash(x1,y1,x2,y2,col=A,width=7){c.strokeStyle=col;c.lineWidth=width;c.lineCap='round';c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();c.lineCap='butt'}
 function scribble(x,y,w,col=A){slash(x,y,x+w,y-5,col,6);slash(x+4,y+10,x+w*.94,y+3,col,3)}
 function list(max){let a=s.benefits.split('|').map(t=>t.trim()).filter(Boolean);if(a.length>max)target._warnings.push(`Use no more than ${max} list items`);return a.slice(0,max)}
 if(id==='editorial'){
  // A note pinned to the feed, with a ruled page rather than a brand header.
  rect(30,z.y-70,1020,z.h+120,'#e5e6df');rect(48,z.y-46,984,z.h+85,white);
  for(let yy=Y(.22);yy<Y(.88);yy+=V(.086))rect(55,yy,970,2,'#cbd3db');rect(X(.07),z.y-46,2,z.h+85,'#eea49b');
  T(s.eyebrow,.12,.018,.85,.045,31,'note');
  T(s.headline,.12,.14,.85,.30,78,'note',ink);
  rect(X(.10),Y(.50),W(.88),V(.175),white);T(s.body,.12,.51,.82,.15,37,'note',ink);
  T(s.callout,.12,.73,.85,.09,35,'hand',ink);scribble(X(.13),Y(.845),W(.61));
  logo(.12,.89,.22,false);T(s.cta,.51,.90,.49,.04,24,'note',ink,'right');
 }
 if(id==='statement'){
  T(s.eyebrow,0,.01,1,.05,31,'plain',paper);
  T(s.headline,0,.13,1,.53,172,'condensed',white);
  // A rough marker band behind one short supporting line.
  c.save();c.translate(X(-.035),Y(.705));c.rotate(-.028);rect(0,0,W(1.04),V(.115),A);c.restore();
  T(s.body,.025,.72,.95,.083,40,'bold',ink);
  logo(0,.86,.31,true);T(s.cta,.58,.89,.42,.04,26,'bold',paper,'right');
 }
 if(id==='split'){
  // Contact sheet: repeated crops are from the supplied photo, not generated faces.
  rect(0,0,1080,H,ink);photo(28,z.y-70,655,V(.60),s.photoKey,.85);const detail=images['mwc-250-slide-4'];const ds=Math.max(350/detail.width,V(.48)/detail.height);c.drawImage(detail,(detail.width-350/ds)/2,(detail.height-V(.48)/ds)/2,350/ds,V(.48)/ds,705,z.y+25,350,V(.48));
  rect(665,z.y-76,100,V(.12),'#eeead4');rect(45,Y(.38),240,V(.028),paper);rect(X(-.015),Y(.413),W(1.03),V(.065),ink);
  T(s.eyebrow,0,.42,1,.045,29,'bold',paper);
  rect(0,Y(.50),1080,V(.35),paper);T(s.headline,0,.525,1,.18,85,'bold',ink);
  T(s.body,0,.73,1,.09,32,'plain',ink);logo(0,.88,.24,true);T(s.cta,.54,.90,.46,.04,26,'bold',white,'right');
 }
 if(id==='checklist'){
  T(s.eyebrow,0,.01,.70,.05,29,'note',GRAY);logo(.76,.005,.24,false);
  T(s.headline,0,.12,1,.22,92,'bold',ink);
  list(4).forEach((it,i)=>{let yy=.405+i*.115;stroke(X(.006),Y(yy)+7,35,35,ink,4);if(i===0){slash(X(.01),Y(yy)+24,X(.025),Y(yy)+39,A,5);slash(X(.025),Y(yy)+39,X(.055),Y(yy)+2,A,5)}T(it,.095,yy,.90,.09,39,'plain',ink)});
  T(s.body,0,.88,1,.06,28,'plain',GRAY);T(s.cta,0,.95,1,.04,26,'bold',ink);
 }
 if(id==='myth'){
  rect(0,Y(.50),1080,H-Y(.50),A);
  T(s.eyebrow,0,.01,1,.05,29,'bold',ink);
  T(s.headline,0,.15,1,.25,82,'bold',ink);slash(X(.01),Y(.27),X(.94),Y(.22),A,10);slash(X(.08),Y(.30),X(.98),Y(.27),A,5);
  T(s.accent,0,.54,1,.23,89,'bold',ink);T(s.body,0,.81,1,.07,31,'plain',ink);
  logo(0,.92,.24,false);T(s.cta,.55,.93,.45,.04,26,'bold',ink,'right');
 }
 if(id==='quote'){
  // Everyday message bubbles with no fabricated sender or patient attribution.
  T(s.eyebrow,0,.01,1,.055,30,'plain',paper);
  round(X(0),Y(.16),W(.91),V(.30),paper,35);T(s.headline,.045,.19,.82,.23,62,'plain',ink);
  round(X(.16),Y(.52),W(.84),V(.24),A,35);T(s.callout,.205,.55,.74,.17,49,'bold',ink);
  logo(0,.86,.27,true);T(s.cta,.57,.89,.43,.04,26,'bold',white,'right');
 }
 if(id==='number'){
  T(s.eyebrow,0,.01,1,.045,28,'bold',ink);
  T(s.accent,0,.085,.42,.33,330,'condensed',ink);
  T(s.headline,.44,.13,.56,.24,56,'bold',ink);
  list(3).forEach((it,i)=>{let yy=.46+i*.135;rect(X(0),Y(yy),W(1),V(.104),i%2===0?ink:paper);T(String(i+1),.025,yy+.017,.09,.07,43,'condensed',i%2===0?paper:ink);T(it,.145,yy+.024,.815,.064,35,'bold',i%2===0?paper:ink)});
  logo(0,.905,.24,false);T(s.cta,.56,.93,.44,.04,26,'bold',ink,'right');
 }
 if(id==='question'){
  // A question sticker, not an editorial headline and footer.
  round(X(.05),Y(.10),W(.90),V(.67),paper,28);rect(X(.05),Y(.10),W(.90),V(.095),A);
  T(s.eyebrow,.085,.124,.83,.05,29,'bold',ink,'center');T(s.headline,.105,.25,.79,.30,75,'bold',ink,'center');
  round(X(.105),Y(.615),W(.79),V(.088),'#e4e6e9',8);T(s.body,.13,.631,.74,.055,30,'plain',ink,'center');
  logo(.34,.835,.32,true);T(s.cta,0,.925,1,.045,28,'bold',white,'center');
 }
 if(id==='photo'){
  photo(0,0,1080,H);rect(0,0,1080,H,`rgba(11,16,40,${s.darkness/100})`);
  rect(X(-.015),Y(0)-12,W(.34),86,ink);logo(0,.005,.31,true);
  rect(0,Y(.48),1080,V(.36),paper);T(s.eyebrow,0,.50,1,.045,26,'bold',ink);T(s.headline,0,.565,1,.17,84,'condensed',ink);T(s.body,0,.755,1,.06,29,'plain',ink);
  rect(X(-.015),Y(.91)-8,W(1.03),V(.09),ink);T(s.cta,0,.918,1,.04,27,'bold',white);
 }
 if(id==='comparison'){
  rect(0,0,540,H,ink);rect(540,0,540,H,A);
  rect(0,Y(.01),1080,V(.25),paper);T(s.eyebrow,0,.025,1,.04,27,'plain',ink);T(s.headline,0,.095,1,.13,67,'bold',ink);
  const heads=s.accent.split('|');T(heads[0]||'Instead',0,.32,.46,.075,36,'bold',white);T(heads[1]||'Try this',.55,.32,.45,.075,36,'bold',ink);
  list(4).forEach((it,i)=>T(it,i%2?.55:0,.45+Math.floor(i/2)*.19,.45,.155,43,'plain',i%2?ink:white));
  rect(0,Y(.85),1080,V(.15)+z.bottom,paper);T(s.body,0,.865,1,.045,27,'plain',ink);logo(0,.936,.22,false);T(s.cta,.5,.948,.5,.035,25,'bold',ink,'right');
 }
 if(id==='steps'){
  logo(.73,.005,.27,true);T(s.eyebrow,0,.01,.66,.05,27,'plain',white);
  T(s.headline,0,.15,1,.22,92,'bold',white);
  list(3).forEach((it,i)=>{const xx=i*.07,yy=.435+i*.13;rect(X(xx),Y(yy),W(1-xx),V(.106),i===1?A:paper);T(String(i+1),xx+.022,yy+.017,.07,.07,42,'condensed',ink);T(it,xx+.14,yy+.025,.825-xx,.065,34,'bold',ink)});
  T(s.body,0,.865,1,.055,30,'plain',white);T(s.cta,0,.95,1,.04,26,'bold',white);
 }
 if(id==='appointment'){
  T(s.eyebrow,0,.01,1,.04,27,'note',ink);
  stroke(X(.10),Y(.13),W(.80),V(.59),ink,5);rect(X(.10),Y(.13),W(.80),V(.09),A);
  rect(X(.25),Y(.10),12,V(.075),ink);rect(X(.73),Y(.10),12,V(.075),ink);
  T(s.headline,.15,.265,.70,.235,87,'bold',ink,'center');T(s.body,.155,.54,.69,.135,33,'plain',ink,'center');
  T(s.callout,0,.77,1,.075,40,'hand',ink,'center');scribble(X(.24),Y(.856),W(.54));
  logo(0,.918,.25,false);T(s.cta,.54,.934,.46,.04,27,'bold',ink,'right');
 }
 if(s.footer.trim())text(s.footer,z.x,z.y+z.h-92,z.w,92,26,'plain',dark?paper:ink);
 // Check the actual ink as well as the requested boxes; don't certify clipping.
 for(const b of target._layoutBoxes)if(b.x<z.x-.5||b.y<z.y-.5||b.x+b.w>z.x+z.w+.5||b.y+b.h>z.y+z.h+.5)target._warnings.push('Content outside safe zone');
 target._warnings=[...new Set(target._warnings)];
}
function drawSafeGuides(){const over=$('safeOverlay'),z=safeRect($('format').value);over.width=1080;over.height=z.H;const c=over.getContext('2d');c.fillStyle='rgba(223,55,55,.12)';c.fillRect(0,0,1080,z.y);c.fillRect(0,z.y+z.h,1080,z.bottom);c.fillRect(0,z.y,z.x,z.h);c.fillRect(z.x+z.w,z.y,z.right,z.h);c.strokeStyle='#22c1c3';c.lineWidth=3;c.setLineDash([12,9]);c.strokeRect(z.x,z.y,z.w,z.h);over.hidden=!$('safeGuides').checked;const note=$('safeNote');note.textContent=$('format').value==='story'?'Story: 270 px top / 390 px bottom / 80 px sides kept clear.':$('format').value==='portrait'?'Portrait: 175 px top & bottom / 80 px sides. Essential copy stays within a centered square crop.':'Square: 80 px clear on every edge.';}

function render(){if(!ready)return;drafts[active]=state();paint(canvas,active,drafts[active]);$('dimensions').textContent=`1080 × ${canvas.height} px`;drawSafeGuides();const warnings=canvas._warnings;$('fitWarning').textContent=warnings.join('. ');$('status').textContent=warnings.length?'Adjust copy to export':'Ready to export';document.querySelectorAll('[data-layout]').forEach(b=>{b.classList.toggle('active',b.dataset.layout===active);b.setAttribute('aria-pressed',b.dataset.layout===active)});document.querySelectorAll('.photo').forEach(b=>b.classList.toggle('active',!drafts[active].custom&&b.dataset.key===drafts[active].photoKey));if(grid)drawGrid();}
function select(id){drafts[active]=state();active=id;loadFields();setGrid(false);render()}
function drawGrid(){let flags=[];for(const b of $('collection').children){paint(b.firstChild,b.dataset.id,{...drafts[b.dataset.id],format:'portrait'});if(b.firstChild._warnings.length)flags.push(TEMPLATES.find(t=>t.id===b.dataset.id).name+': '+b.firstChild._warnings.join(', '))}if(flags.length){$('fitWarning').textContent=flags.join('. ');$('status').textContent='Adjust copy to export'}}
function setGrid(v){grid=v;$('collection').classList.toggle('hidden',!v);$('canvasWrap').style.display=v?'none':'block';$('guideControls').hidden=v;document.querySelector('.stage').classList.toggle('gridmode',v);$('singleView').classList.toggle('active',!v);$('gridView').classList.toggle('active',v);$('previewNote').textContent=v?'Your 12-template collection • Click a post to edit':'Instagram preview • Export matches this canvas';$('export').textContent=v?'↓ Export grid PNG':'↓ Export PNG';if(v)drawGrid()}
function download(blob,name){const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),10000)}
keys.forEach(k=>$(k).addEventListener('input',render));$('safeGuides').onchange=drawSafeGuides;$('singleView').onclick=()=>setGrid(false);$('gridView').onclick=()=>setGrid(true);
$('export').onclick=()=>{render();const checks=grid?[...$('collection').children].map(b=>b.firstChild):[canvas];if(checks.some(c=>c._warnings.length))return toast('Shorten flagged copy or reduce list items before exporting.');let out=canvas;if(grid){out=document.createElement('canvas');out.width=3240;out.height=5400;const c=out.getContext('2d');[...$('collection').children].forEach((b,i)=>c.drawImage(b.firstChild,(i%3)*1080,Math.floor(i/3)*1350))}out.toBlob(b=>{if(!b)return toast('Export failed. Please try again.');download(b,grid?'MWC-template-grid.png':`MWC-${active}-${$('format').value}.png`);toast('Full-resolution PNG exported.')},'image/png')};
$('save').onclick=()=>{drafts[active]=state();download(new Blob([JSON.stringify({version:2,active,drafts})],{type:'application/json'}),'MWC-studio-project.json');toast('All 12 template drafts saved.')};$('load').onclick=()=>$('project').click();
$('project').onchange=async e=>{let f=e.target.files[0];if(!f)return;try{const p=JSON.parse(await f.text());if(p.version!==2||!TEMPLATES.some(t=>t.id===p.active))throw Error();let clean={};for(const t of TEMPLATES){const d=p.drafts[t.id];if(!d||keys.some(k=>typeof d[k]!=='string')||!['portrait','square','story'].includes(d.format)||!['1','0.85','1.12'].includes(d.scale)||!/^#[0-9a-f]{6}$/i.test(d.color)||!Object.hasOwn(ASSETS,d.photoKey)||d.photoKey==='brand'||!Number.isFinite(+d.position)||+d.position<0||+d.position>100||!Number.isFinite(+d.darkness)||+d.darkness<0||+d.darkness>65)throw Error();clean[t.id]={...initial(t),...Object.fromEntries(keys.map(k=>[k,d[k].slice(0,$(k).maxLength>0?$(k).maxLength:1000)])),photoKey:d.photoKey,custom:null};if(d.custom){if(typeof d.custom!=='string'||!/^data:image\/(png|jpeg|webp);base64,/.test(d.custom))throw Error();images[d.custom]=await loadImage(d.custom);clean[t.id].custom=d.custom}}drafts=clean;active=p.active;loadFields();render();toast('Your collection is open.')}catch{toast('Choose a project saved by this 12-template studio.')}e.target.value=''};
$('upload').onchange=async e=>{const f=e.target.files[0];if(!f)return;if(!['image/jpeg','image/png','image/webp'].includes(f.type)||f.size>25*1024*1024)return toast('Choose a JPG, PNG or WebP under 25 MB.');try{const src=await new Promise((resolve,reject)=>{const r=new FileReader;r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(f)});images[src]=await loadImage(src);if(!['split','photo'].includes(active))select('split');drafts[active].custom=src;render();toast('Your supplied photo is ready.')}catch{toast('Image could not be opened. Try another file.')}e.target.value=''};
$('reset').onclick=()=>{drafts[active]=initial(TEMPLATES.find(t=>t.id===active));loadFields();render();toast('This template has been reset.')};
async function init(){try{await Promise.all(Object.entries(ASSETS).map(async([k,v])=>images[k]=await loadImage(v)));brandAssets();TEMPLATES.forEach(t=>{const b=document.createElement('button');b.className='layout';b.dataset.layout=t.id;b.setAttribute('aria-label',t.name);const thumb=document.createElement('canvas');paint(thumb,t.id,initial(t));const name=document.createElement('b');name.textContent=t.name;b.append(thumb,name);b.onclick=()=>select(t.id);$('templates').append(b);const g=document.createElement('button');g.dataset.id=t.id;g.title=t.name;g.setAttribute('aria-label','Edit '+t.name);g.append(document.createElement('canvas'));g.onclick=()=>select(t.id);$('collection').append(g)});Object.keys(ASSETS).filter(k=>k!=='brand').forEach((k,i)=>{let b=document.createElement('button');b.className='photo';b.dataset.key=k;b.title=photoNames[i];b.setAttribute('aria-label',photoNames[i]);const im=document.createElement('img');im.src=ASSETS[k];im.alt=photoNames[i];b.append(im);b.onclick=()=>{if(!['split','photo'].includes(active))select('split');drafts[active].photoKey=k;drafts[active].custom=null;render()};$('photos').append(b)});ready=true;loadFields();render();$('export').disabled=false}catch(e){$('status').textContent='Could not load studio';console.error(e);toast('Reload the studio to load the included images.')}}init();
