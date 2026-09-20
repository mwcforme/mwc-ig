// Provisional context cues, not a banned-word list or a Meta adjudication.
const POLICY_LINKS={
 attributes:'https://transparency.meta.com/en-gb/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/',
 health:'https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness/',
 drugs:'https://transparency.meta.com/en-gb/policies/ad-standards/restricted-goods-services/drugs-pharmaceuticals/',
 standards:'https://transparency.meta.com/policies/ad-standards/'
};
function screenCreative(copy,warnings){
 const findings=[];
 const add=(title,type,evidence,reason,fix,policy)=>findings.push({label:'Potential risk',title,type,evidence,reason,fix,policy});
 for(const text of copy){
  const sentences=text.split(/(?<=[.!?])\s+|\n/);
  for(const sentence of sentences){
   const health=/\b(low testosterone|low t|erectile dysfunction|impotence|depress(?:ed|ion)|anxiety|diabet\w*|obes\w*|overweight|brain fog|exhausted|fatigue|infertil\w*)\b/i;
   if(/\b(you|your|you're|you’re)\b/i.test(sentence)&&health.test(sentence))add('Possible viewer health attribution','Content policy',sentence,'This sentence combines viewer-directed wording with a health condition or symptom. Context determines whether it implies a personal attribute; “you” alone is not a violation.','Describe the service rather than suggesting the viewer has a condition. For example: “Explore evaluation options with a clinician.” Preserve the actual offer.',POLICY_LINKS.attributes);
   if(/\b(guaranteed?|cure[sd]?|risk.free|100\s*%|no side effects|permanent results)\b/i.test(sentence))add('Outcome claim needs context','Content policy',sentence,'This may express an absolute outcome or safety claim. A refund guarantee or a negated claim may have a different meaning. Clinical substantiation is separate from platform policy.','Check the claim’s meaning and evidence. Remove unsupported certainty and accurately describe the service and material limitations.',POLICY_LINKS.standards);
   if(/\d\s*%|\b\d+(?:\.\d+)?\s*[x×]\b/i.test(sentence)&&/testosterone|risk|heart|loss|reduc|increase|production|cortisol|hormone/i.test(sentence))add('Quantified health claim','Content policy',sentence,'A numeric health claim needs a matching source, population, outcome, and timeframe. This checker cannot verify its accuracy.','Verify clinical substantiation and ensure the wording matches the evidence; omit unsupported numbers.',POLICY_LINKS.health);
   if(/\b(ashamed|disgusting|unattractive|hate your body|fix your body)\b/i.test(sentence))add('Possible negative self-perception framing','Content policy',sentence,'This wording can frame health or appearance through shame. Review the complete context and imagery.','Use neutral service-focused language without judging the viewer’s body or worth.',POLICY_LINKS.health);
  }
 }
 const full=copy.join('\n');
 if(/\b(TRT|testosterone therapy|testosterone replacement|prescription|semaglutide|tirzepatide|sildenafil|tadalafil)\b/i.test(full))add('Treatment classification and permissions','Authorization/targeting',full.match(/.{0,45}\b(TRT|testosterone therapy|testosterone replacement|prescription|semaglutide|tirzepatide|sildenafil|tadalafil)\b.{0,65}/i)?.[0]||full,'Treatment wording requires context to distinguish a general clinical service from prescription promotion. Missing permissions are not evidence that permission is absent.','Confirm the actual offer, destination, country, age targeting, and any applicable advertiser authorization.',POLICY_LINKS.drugs);
 for(const warning of warnings)findings.push({label:'Potential risk',title:'Studio layout warning',type:'Quality recommendation',evidence:warning,reason:'This comes from the studio’s readability and safe-zone checks, not a verified Meta rejection rule.',fix:'Shorten the copy, reduce list items, or adjust type size and review the preview.',policy:null});
 findings.push({label:'Unable to assess',title:'Current policy wording',type:'Content policy',evidence:'Official policy retrieval attempted September 20, 2026: HTTP 429.',reason:'The supplied reference library is dated September 20, 2026. This offline checker does not retrieve live policy text. All policy cues above are provisional.',fix:'Open the applicable official references and confirm current wording before a substantive policy decision.',policy:POLICY_LINKS.standards});
 findings.push({label:'Unable to assess',title:'Photo and embedded text',type:'Content policy',evidence:'No visual analysis or OCR was performed.',reason:'Editable text checks do not assess nudity, suggestiveness, transformations, shocking content, or text inside a photograph.',fix:'Inspect the complete exported image, including any uploaded photo and baked-in text.',policy:POLICY_LINKS.health});
 findings.push({label:'Unable to assess',title:'Destination and lead form',type:'Destination/form policy',evidence:'No destination or lead form was fetched.',reason:'A website printed on the creative does not establish destination functionality, offer consistency, or appropriate form questions.',fix:'Review the actual destination and form alongside this creative.',policy:POLICY_LINKS.standards});
 findings.push({label:'Unable to assess',title:'Targeting and rights evidence',type:'Authorization/targeting',evidence:'Country, age targeting and permissions have not been supplied to this checker.',reason:'Eligibility depends on the actual offer and account context.',fix:'Confirm the applicable targeting and advertiser permissions. Separately verify photo and likeness rights.',policy:POLICY_LINKS.standards});
 return findings;
}
let complianceReport=null;
$('compliance').onclick=()=>{
 if(!ready)return;
 render();
 const copy=canvas._layoutBoxes.filter(b=>b.type==='text-box').map(b=>String(b.content));
 const findings=screenCreative(copy,canvas._warnings);
 const risks=findings.filter(f=>f.label==='Potential risk').length;
 complianceReport={reviewedAt:new Date().toISOString(),template:active,format:state().format,scope:'Current post only: rendered editable text and studio layout checks. Other collection posts are not assessed.',copy,findings};
 $('complianceSummary').textContent=(risks?`${risks} item${risks===1?'':'s'} to review.`:'No automated text or layout flags found.')+' Manual review remains required. Current post only.';
 $('complianceScope').textContent=`Template: ${active}\nFormat: ${state().format}\nChecked: ${complianceReport.reviewedAt}\n${complianceReport.scope}\n\n`+copy.join('\n\n');
 $('complianceFindings').replaceChildren();
 for(const f of findings){
  const card=document.createElement('article');card.className='review-finding';
  const title=document.createElement('h3');title.textContent=f.title;
  card.append(title);
  for(const text of [`${f.label} · ${f.type}`,`Evidence: ${f.evidence}`,f.reason,`Next step: ${f.fix}`]){const p=document.createElement('p');p.textContent=text;card.append(p)}
  if(f.policy){const a=document.createElement('a');a.href=f.policy;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Official Meta reference';card.append(a)}
  $('complianceFindings').append(card);
 }
 $('complianceDialog').showModal();
};
$('closeCompliance').onclick=()=>$('complianceDialog').close();
$('downloadCompliance').onclick=()=>{
 if(!complianceReport)return;
 const r=complianceReport;
 const report=`MWC ad compliance preflight\n${r.reviewedAt}\nTemplate: ${r.template} / ${r.format}\n${r.scope}\nProvisional local screening; not Meta approval.\n\nReviewed copy\n${r.copy.join('\n\n')}\n\n`+r.findings.map(f=>`${f.label} | ${f.type} | ${f.title}\nEvidence: ${f.evidence}\n${f.reason}\nNext step: ${f.fix}\n${f.policy||'Studio guidance; not a Meta policy requirement.'}`).join('\n\n');
 download(new Blob([report],{type:'text/plain;charset=utf-8'}),`MWC-${r.template}-compliance-review.txt`);
};
