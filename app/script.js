const GAS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzNtTdM9IvNIDOLzvSFjUo42WENugpqkyz_kP1-35b0tZ7VLMYyapYu5thRUC_T9-Av/exec";

const form = document.getElementById("resForm");

const statusEl = document.getElementById("status");

const submitBtn = document.getElementById("submitBtn");

const nameEl = document.getElementById("name");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const peopleEl = document.getElementById("people");
const noteEl = document.getElementById("note");

function setStatus(text, ok){
    statusEl.textContent= text;
    statusEl.className = "status " + (ok ? "ok" : "ng")
}

function buildPayload(){
    return{
        name: String(nameEl.value),
        date: String(dateEl.value),
        time: String(timeEl.value),
        people: Number(peopleEl.value),
        note: String(noteEl.value),

    }
}

function validate(payload){
    if(!payload.name) return "お名前入れて下さい";
    if(!payload.date) return "日付選んでください";
    if(!payload.time) return "時間選んでください";
    if(!payload.people || payload.people === 0) return "人数1名以上入力して下さい。";
    return null;
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

     if(!GAS_WEBAPP_URL){
        setStatus("GASのURLを設定されていない", false);
        return;
     }

     const payload = buildPayload();

     const err = validate(payload);
     if(err){
        setStatus(err, false);
        return;
     }

     submitBtn.disabled = true;

     setStatus("送信中。。。", true);

 try{
     const res = await fetch(GAS_WEBAPP_URL, {
        method: "POST",
        headers:{"Content-Type": "text/plain"},
        body:JSON.stringify(payload),
     })

     const text = await res.text();

     let data;
     try{
      data = JSON.parse(text);
     }catch{
      data = {ok: false, message: text}
     }
   if(data.ok){
      setStatus("送信しました", true)
      form.reset();
      peopleEl.value = "1";
   }
 }catch(error){
    setStatus("401: 通信エラー", false)
 }finally{
    submitBtn.disabled = false;
 }

})







