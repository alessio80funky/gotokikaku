//予約データを書き込むシート名を指定する
const SHEET_NAME = "res";

//アクセス確認ロジック
function doGet(){
  //初期化
  return ContentService
  //APIが動いたら下記のメッセージを表示
    .createTextOutput("Ok:API同期できました")
    .setMimeType(ContentService.MimeType.TEXT)
}

// JavaScriptからデータが送られてきた時の処理（POST）
function doPost(e) {
  try {
    // このGASが紐づいているスプレッドシートを取得
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // 指定した名前のシートを取得
    const sheet = ss.getSheetByName(SHEET_NAME);

    // シートが存在しない場合はエラーを投げる
    if (!sheet) throw new Error(`Sheet not found: ${SHEET_NAME}`);

    // 送られてきた生データ（JSON文字列）を取得
    const raw = e.postData && e.postData.contents ? e.postData.contents : "{}";

    // JSON文字列をJavaScriptのオブジェクトに変換
    const data = JSON.parse(raw);

    // 必須項目を配列で定義
    const required = ["name", "date", "time", "people"];

    // 必須項目が全部入っているかチェック
    for (const key of required) {
      if (!data[key]) throw new Error(`必須項目見つからない: ${key}`);
    }

    // スプレッドシートに書き込む1行分の配列を作る
    const row = [
      new Date(),                  // 送信された時刻
      String(data.name),           // 名前
      String(data.date),           // 日付
      String(data.time),           // 時間
      Number(data.people),         // 人数（数値）
      String(data.note || ""),     // メモ（空でもOK）
    ];

    // スプレッドシートの最後の行に1行追加
    sheet.appendRow(row);

    // 成功したことをフロント側に返すデータ
    const res = { ok: true, message: "予約を受け付けました" };

    // 初期化
    return ContentService
      .createTextOutput(JSON.stringify(res))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // 何かエラーが起きた場合のレスポンス
    const res = { ok: false, message: String(err) };

    // 初期化
    return ContentService
      .createTextOutput(JSON.stringify(res))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
