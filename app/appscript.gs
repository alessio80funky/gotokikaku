//予約データを書き込むシート名を指定する
const SHEET_NAME = "reservations";

//アクセス確認ロジック
function doGet(){
  return ContentService
  //APIが動いたら下記のメッセージを表示
    .createTextOutput("Ok:API同期できました")
    .setMimeType(ContentService.MimeType.TEXT)
}
