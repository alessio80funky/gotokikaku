const GAS_WEBAPP_URL = "";

const form = document.getElementById("resForm");

const statusEl = document.getElementById("status");

const submitBtn = document.getElementById("submitBtn");

const nameEl = document.getElementById("name");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const peopleEl = document.getElementById("people");
const NoteEl = document.getElementById("note");

function setStatus(text, ok){
    statusEl.textContent= text;
    statusEl.className = "status" + (ok ? "ok" : "ng")
}

function buildPayload(){
    return{
        name: nameEl.value,
        date: dateEl.value,
        time: timeEl.value,
        people: Number(peopleEl.value),
        note: NoteEl.value,

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

     if(!GAS_WEBAPP_URL || GAS_WEBAPP_URL.includes("")){
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
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(payload),
     })

     const data = await res.json();

     if (data.ok){
        setStatus("送信しました" , true);
        form.reset();
        peopleEl.value = "1";
     }else{
        setStatus("送信失敗", false)
     }
 }catch(error){
    setStatus("401: 通信エラー", false)
 }finally{
    submitBtn.disabled = false;
 }

})







