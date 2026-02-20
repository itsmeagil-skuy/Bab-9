const quizData = [
{q:"1. わかります artinya…", a:["suka","mengerti","ada","cepat"], correct:1},
{q:"2. すき［な］ berarti…", a:["benci","pandai","suka","jelek"], correct:2},
{q:"3. へた［な］ berarti…", a:["pandai","tidak pandai","suka","cepat"], correct:1},
{q:"4. やきゅう adalah…", a:["sepak bola","tenis","baseball","basket"], correct:2},
{q:"5. りょこう berarti…", a:["olahraga","perjalanan","janji","konser"], correct:1},
{q:"6. かんじ adalah…", a:["huruf latin","katakana","kanji","gambar"], correct:2},
{q:"7. たくさん berarti…", a:["sedikit","banyak","cepat","tidak suka"], correct:1},
{q:"8. ぜんぜん digunakan dengan kalimat…", a:["positif","lampau","negatif","tanya"], correct:2},
{q:"9. ようじ berarti…", a:["janji","urusan","waktu","tiket"], correct:1},
{q:"10. チケット artinya…", a:["uang kecil","janji","tiket","gambar"], correct:2},
{q:"11. おっと digunakan untuk menyebut…", a:["suami sendiri","suami orang lain","anak","istri orang lain"], correct:0},
{q:"12. ごしゅじん digunakan untuk…", a:["istri sendiri","suami sendiri","suami orang lain","anak"], correct:2},
{q:"13. はやく artinya…", a:["lambat","cepat","banyak","sedikit"], correct:1},
{q:"14. どうして berarti…", a:["kapan","bagaimana","kenapa","siapa"], correct:2},
{q:"15. だいたい berarti…", a:["sangat","kira-kira","tidak sama sekali","cepat"], correct:1},
{q:"16. ざんねんです artinya…", a:["senang sekali","sayang sekali","tidak apa-apa","boleh"], correct:1},
{q:"17. こども berarti…", a:["ayah","ibu","anak","suami"], correct:2},
{q:"18. カラオケ adalah…", a:["konser","karaoke","drama","lagu"], correct:1},
{q:"19. りょうり berarti…", a:["minuman","makanan/masakan","olahraga","gambar"], correct:1},
{q:"20. あります berarti…", a:["mengerti","ada/mempunyai","cepat","suka"], correct:1},

{q:"21. Saya suka musik.", a:["わたしは おんがくが すきです。","わたしは おんがくを すきです。","わたしは おんがくに すきです。","わたしは おんがくと すきです。"], correct:0},
{q:"22. Saya tidak suka baseball.", a:["やきゅうが すきです。","やきゅうが きらいです。","やきゅうを きらいです。","やきゅうは すきです。"], correct:1},
{q:"23. Dia pandai bahasa Jepang.", a:["にほんごが じょうずです。","にほんごを じょうずです。","にほんごに じょうずです。","にほんごは へたです。"], correct:0},
{q:"24. Saya tidak pandai menyanyi.", a:["うたが じょうずです。","うたが へたです。","うたを へたです。","うたは じょうずです。"], correct:1},
{q:"25. Kenapa kamu cepat pulang?", a:["どうして はやく かえりますか。","どうして かえりますか はやく。","はやく どうして かえりますか。","かえりますか どうして。"], correct:0},
{q:"26. Saya cepat pulang karena ada janji.", a:["やくそくが ありますから、はやく かえります。","やくそくを ありますから、かえります。","やくそくが あります、かえります。","やくそくに ありますから、かえります。"], correct:0},
{q:"27. Saya mengerti sedikit bahasa Jepang.", a:["にほんごが すこし わかります。","にほんごを すこし わかります。","にほんごが たくさん わかります。","にほんごは すこし あります。"], correct:0},
{q:"28. Saya tidak mengerti sama sekali.", a:["ぜんぜん わかります。","ぜんぜん わかりません。","よく わかりません。","すこし わかります。"], correct:1},
{q:"29. Bagaimana kalau bersama?", a:["いっしょに いかがですか。","いっしょに どうして。","いっしょが すきですか。","いっしょを いきますか。"], correct:0},
{q:"30. Tolong pinjamkan.", a:["ください。","かしてください。","あります。","いかがですか。"], correct:1}
];

// generate soal
const quizContainer = document.getElementById("quiz");

quizData.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<p>${item.q}</p>` +
        item.a.map((choice, i) =>
            `<label><input type="radio" name="q${index}" value="${i}"> ${choice}</label><br>`
        ).join("");
    quizContainer.appendChild(div);
});

function submitQuiz(){
    let score = 0;

    quizData.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if(selected && parseInt(selected.value) === item.correct){
            score++;
        }
    });

    const finalScore = (score/quizData.length)*100;
    document.getElementById("result").innerHTML =
        `Nilai Anda: ${finalScore.toFixed(0)} <br>` +
        (finalScore >= 85 ? "LULUS 🎉" : "BELUM LULUS ❌ (KKM 85)");
}
