let tar = document.getElementById("header-content");
let ham = document.getElementById("hamburger");

ham.addEventListener("click", function (event) {
  tar.classList.toggle("header-content_active");
});

function show1Alert() {
    alert("達文西機械手臂輔助手術系統，由手術控制台、手術台車及影像台車等設備所組成。\n\n手術控制台 (Surgeon Console)：提供放大影像、手動與腳踏板的多維度控制，外科醫師利用此控制台進行遠端手術。\n\n手術台車 (Surgical Cart)：由4支（同時最多使用2支）機械手臂組成，可攜帶手術工具和相機，執行指令，進行微創操作。\n\n影像台車 (Vision Cart)：連接控制台和手術台車，確保高品質即時影像傳輸，並具有3D視覺以及5～10倍放大視野的效果。");
  }

  function show2Alert() {
    alert("達文西手臂手術目前廣泛使用於一般外科、大腸直腸外科、泌尿外科、胸腔外科、婦科以及耳鼻喉頭頸科及心臟外科等。");
  }

   function show3Alert() {
    alert("和傳統手術相比達文西手術具有以下幾種優勢：\n\n穩定度：機械手臂能做出和人手一樣甚至優於人手的精細動作，且不具備醫師手部顫動動作的問題，降低手術過程中不必要的傷害和風險，提升手術品質。\n\n更佳的視野：控制台提供了放大10倍及3D立體的高解析度影像，方便外科醫師進行更準確無誤的手術操作。\n\n外科醫師的工作環境：透過控制台的遠端手術，使醫師得以在較舒適的環境中執行手術，特別是長時間複雜和高難度的手術，間接延長外科醫師手術生涯的壽命。");
  }

   function show4Alert() {
    alert("1.缺乏觸覺回饋，醫師難以感知組織的質地、硬度和壓力。\n\n2.突發性故障問題：當手術中機械手臂出現故障，會導致手術中斷，影響醫院排程，增加患者的風險。\n\n3.實際操作依然依賴醫師的經驗和視覺判斷。");
  }
