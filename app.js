const $=s=>document.querySelector(s);
const modal=$("#modal"), modalContent=$("#modalContent"), toast=$("#toast");

const data={
 health:{
  label:"SHREYAN HEALTH+",
  doctor:"Dr. Harshal Patil",
  quals:"MBBS · MD · CCEBDM · CCGDM",
  role:"Family Physician & Diabetes Care",
  phone:"977 966 5055",
  address:"Shop No. 55, Vision Flora, Pimple Saudagar, Pune – 411027",
  items:[
   ["01","Family Healthcare","Everyday health concerns, preventive care and personalised consultations."],
   ["02","Diabetes Care","Education, monitoring and long-term management support."],
   ["03","Preventive Care","Practical guidance and regular health check-ins."],
   ["04","Follow-up Care","A clearer way to stay connected when ongoing care is needed."]
  ]
 },
 dental:{
  label:"SHREEYAN DENTAL CARE",
  doctor:"Dr. Pradnya Patil",
  quals:"BDS · Cosmetic & Dental Surgeon",
  role:"Cosmetic & Dental Surgeon",
  phone:"9156 969 311",
  address:"Sai Prem Park A Wing, Shop No. 03, Seven Star Lane, Pimple Saudagar, Pune – 411027",
  items:[
   ["01","Dental Consultations","Professional dental assessment and treatment planning."],
   ["02","Oral Health","Simple guidance for hygiene, prevention and everyday care."],
   ["03","Smile Care","A dedicated path for patients exploring cosmetic concerns."],
   ["04","Preventive Dentistry","Helpful education for proactive dental care."]
  ]
 }
};

function showToast(msg){toast.textContent=msg;toast.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>toast.classList.remove("show"),2500)}
function closeModal(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true")}
function openBooking(){
 modalContent.innerHTML=`<div class="eyebrow"><i></i> CHOOSE YOUR PRACTICE</div>
 <h2>Where would you like<br><em>to begin?</em></h2>
 <p>Choose the Shreyan practice and connect directly. This prototype is ready to become a real appointment flow.</p>
 <div class="modal-actions">
  <a href="https://wa.me/919779665055?text=Hello%20Shreyan%20Health%2B%2C%20I%27d%20like%20to%20book%20an%20appointment." target="_blank">Health+ · WhatsApp ↗</a>
  <a class="alt" href="tel:+919779665055">Call Health+</a>
  <a href="https://wa.me/919156969311?text=Hello%20Shreyan%20Dental%20Care%2C%20I%27d%20like%20to%20book%20an%20appointment." target="_blank">Dental Care · WhatsApp ↗</a>
  <a class="alt" href="tel:+919156969311">Call Dental Care</a>
 </div>`;
 modal.classList.add("show");modal.setAttribute("aria-hidden","false");
}
function openPractice(type){
 const d=data[type];
 modalContent.innerHTML=`<div class="eyebrow"><i></i> ${d.label}</div>
 <h2>${d.doctor}</h2>
 <p><strong>${d.quals}</strong><br>${d.role}</p>
 <div class="modal-list">${d.items.map(x=>`<div><b>${x[0]} · ${x[1]}</b>${x[2]}</div>`).join("")}</div>
 <p style="margin-top:20px"><strong>Visit</strong><br>${d.address}</p>
 <div class="modal-actions">
  <a href="https://wa.me/91${d.phone.replace(/\D/g,"")}?text=Hello%20${encodeURIComponent(d.label)}%2C%20I%27d%20like%20to%20book%20an%20appointment." target="_blank">WhatsApp · ${d.phone} ↗</a>
  <a class="alt" href="tel:+91${d.phone.replace(/\D/g,"")}">Call ${d.phone}</a>
 </div>`;
 modal.classList.add("show");modal.setAttribute("aria-hidden","false");
}
function openArticle(){
 modalContent.innerHTML=`<div class="eyebrow"><i></i> SHREEYAN JOURNAL · PREVIEW</div>
 <h2>Useful information,<br><em>beautifully explained.</em></h2>
 <p>The Journal is a future-ready section for doctor-approved health articles, short explainers, FAQs and videos.</p>
 <div class="modal-list">
  <div><b>Know your numbers</b>Visual explanations for common health measurements.</div>
  <div><b>Understand diabetes better</b>Patient-friendly educational content for everyday understanding.</div>
  <div><b>Your everyday smile check</b>Simple oral-health guidance between visits.</div>
 </div>`;
 modal.classList.add("show");modal.setAttribute("aria-hidden","false");
}
function switchCare(type,btn){
 document.querySelectorAll(".care-tabs button").forEach(x=>x.classList.remove("active"));
 document.querySelectorAll(".care-panel").forEach(x=>x.classList.remove("active"));
 btn.classList.add("active");$("#"+(type==="health"?"healthCare":"dentalCare")).classList.add("active");
}
function faq(btn){btn.classList.toggle("open")}
function toggleMenu(){showToast("Mobile navigation — sections are ready to connect.")}
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
window.addEventListener("scroll",()=>{
 const h=document.documentElement.scrollHeight-innerHeight;
 $("#scrollbar").style.width=(scrollY/h*100)+"%";
});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));