// 各問題: question=問題文、choices=4択、answer=正解の番号（0〜3）
const questions = [
{question:'日本国憲法の三大原則のうち、政治のあり方を最終的に国民が決めるという原則は？',choices:['平和主義','国民主権','三権分立','基本的人権の尊重'],answer:1},
{question:'日本国憲法第25条で保障されている権利は？',choices:['参政権','請求権','生存権','自由権'],answer:2},
{question:'国会・内閣・裁判所が権力を分担する仕組みは？',choices:['地方自治','議院内閣制','国民主権','三権分立'],answer:3},
{question:'日本で法律を制定する国の機関は？',choices:['国会','内閣','最高裁判所','日本銀行'],answer:0},
{question:'国の行政権を担う機関は？',choices:['裁判所','内閣','国会','地方議会'],answer:1},
{question:'裁判所が法律や命令などの憲法適合性を審査する権限は？',choices:['行政権','立法権','違憲審査権','予算議決権'],answer:2},
{question:'日本の国会を構成する二つの議院は？',choices:['上院と下院','衆議院と参議院','内閣と衆議院','国会と地方議会'],answer:1},
{question:'内閣総理大臣を指名するのは？',choices:['国会','最高裁判所','天皇が独自に決定','都道府県知事'],answer:0},
{question:'地方公共団体の長を住民が直接選ぶ選挙は？',choices:['間接選挙','世襲','直接選挙','抽選'],answer:2},
{question:'日本国憲法で国民の三大義務に含まれないものは？',choices:['納税','勤労','子どもに普通教育を受けさせること','投票'],answer:3},
{question:'国会の種類で、毎年1回召集されるものは？',choices:['通常国会','特別国会','臨時国会','地方議会'],answer:0},
{question:'衆議院の優越が認められる理由として適切なのは？',choices:['議員数が少ないから','任期が短く解散があり民意を反映しやすいから','議員の年齢が高いから','裁判を行うから'],answer:1},
{question:'内閣が国会に対して連帯して責任を負う制度は？',choices:['大統領制','直接民主制','議院内閣制','裁判員制度'],answer:2},
{question:'国の予算案を作成する機関は？',choices:['内閣','国会','最高裁判所','選挙管理委員会'],answer:0},
{question:'裁判を受ける権利は、基本的人権のどの分類に含まれる？',choices:['社会権','請求権','参政権','自由権'],answer:1},
{question:'選挙権や被選挙権は何という権利に分類される？',choices:['社会権','自由権','参政権','請求権'],answer:2},
{question:'労働三権に含まれないものは？',choices:['団結権','団体交渉権','団体行動権','請願権'],answer:3},
{question:'労働者が労働組合を結成する権利は？',choices:['団結権','団体交渉権','団体行動権','生存権'],answer:0},
{question:'表現の自由は主にどの権利に分類される？',choices:['社会権','自由権','参政権','請求権'],answer:1},
{question:'すべての人が法の下で平等であると定める憲法の条文は？',choices:['第9条','第25条','第14条','第96条'],answer:2},
{question:'日本国憲法第9条が関係する三大原則は？',choices:['国民主権','基本的人権の尊重','地方自治','平和主義'],answer:3},
{question:'国民が憲法改正の承認について投票することを何という？',choices:['国民投票','住民監査請求','国勢調査','請願'],answer:0},
{question:'日本国憲法の改正案を国会が発議するために必要なのは？',choices:['各議院の出席議員の過半数','各議院の総議員の3分の2以上の賛成','衆議院だけの全会一致','内閣の全会一致'],answer:1},
{question:'裁判員制度で裁判員が参加するのは主にどの裁判？',choices:['すべての民事裁判','行政裁判だけ','重大な刑事事件の第一審','最高裁判所のすべての裁判'],answer:2},
{question:'刑事裁判で罪を犯したと疑われて起訴された人は？',choices:['原告','証人','裁判官','被告人'],answer:3},
{question:'刑事事件で被疑者を起訴する役割を持つのは？',choices:['検察官','弁護人','裁判員','国会議員'],answer:0},
{question:'裁判所の判断に不服がある場合、上級裁判所に審理を求める制度は？',choices:['国民審査','上訴','住民投票','行政監査'],answer:1},
{question:'地方自治の本旨を構成する二つの考え方は？',choices:['立法と行政','自由と平等','住民自治と団体自治','中央集権と三権分立'],answer:2},
{question:'地方公共団体が制定するきまりは？',choices:['法律','政令','条約','条例'],answer:3},
{question:'地方公共団体の議会の議員は誰が選ぶ？',choices:['住民','内閣','国会','裁判所'],answer:0},
{question:'住民が首長の解職を請求する制度は？',choices:['国民審査','リコール','弾劾裁判','違憲審査'],answer:1},
{question:'国や地方公共団体が公共サービスのために集めるお金は？',choices:['配当','利子','税金','賃金'],answer:2},
{question:'所得が多いほど税率が高くなる仕組みは？',choices:['比例代表制','逆進課税','定額課税','累進課税'],answer:3},
{question:'所得税はどの種類の税に当たる？',choices:['直接税','間接税','関税のみ','地方消費税'],answer:0},
{question:'消費税は一般にどの種類の税に当たる？',choices:['直接税','間接税','固定資産税','法人住民税'],answer:1},
{question:'国の収入を歳入というのに対し、支出を何という？',choices:['需要','供給','歳出','国債'],answer:2},
{question:'市場で価格が決まるときに重要な二つの要素は？',choices:['立法と行政','輸出と輸入だけ','貯蓄と税金だけ','需要と供給'],answer:3},
{question:'一般に、他の条件が同じなら需要が増えたとき価格はどうなりやすい？',choices:['上がる','下がる','必ずゼロになる','必ず変わらない'],answer:0},
{question:'企業が商品やサービスを生産するために必要な資金などを提供する家計の役割は？',choices:['立法','生産要素の提供','裁判','通貨発行'],answer:1},
{question:'日本の中央銀行は？',choices:['ゆうちょ銀行','世界銀行','日本銀行','地方銀行'],answer:2},
{question:'日本銀行が行う仕事に含まれないものは？',choices:['銀行券の発行','金融政策','銀行の銀行','法律の制定'],answer:3},
{question:'物価が継続的に上昇することを何という？',choices:['インフレーション','デフレーション','円高','貿易黒字'],answer:0},
{question:'物価が継続的に下落することを何という？',choices:['インフレーション','デフレーション','円安','財政赤字'],answer:1},
{question:'社会保障制度のうち、年金や医療保険などは？',choices:['公的扶助','公衆衛生','社会保険','社会福祉'],answer:2},
{question:'生活に困窮する人に最低限度の生活を保障する制度は？',choices:['社会保険','企業年金','労働組合','生活保護'],answer:3},
{question:'国際連合の本部がある都市は？',choices:['ニューヨーク','ロンドン','パリ','ジュネーブ'],answer:0},
{question:'国際連合で平和と安全の維持に主要な責任を負う機関は？',choices:['総会','安全保障理事会','国際司法裁判所','事務局'],answer:1},
{question:'持続可能な開発目標の略称は？',choices:['GDP','ODA','SDGs','NGO'],answer:2},
{question:'政府開発援助の略称は？',choices:['NPO','WTO','WHO','ODA'],answer:3},
{question:'国境を越えて活動する民間の非政府組織の略称は？',choices:['NGO','GDP','IMF','EU'],answer:0}
];
const historyQuestions = [
{question:'江戸幕府を開いた人物は？',choices:['徳川家康','織田信長','豊臣秀吉','徳川吉宗'],answer:0},
{question:'参勤交代を制度化した将軍は？',choices:['徳川家康','徳川家光','徳川綱吉','徳川慶喜'],answer:1},
{question:'享保の改革を行った将軍は？',choices:['徳川家斉','徳川家光','徳川吉宗','徳川慶喜'],answer:2},
{question:'寛政の改革を進めた老中は？',choices:['田沼意次','水野忠邦','井伊直弼','松平定信'],answer:3},
{question:'天保の改革を進めた老中は？',choices:['水野忠邦','松平定信','田沼意次','大久保利通'],answer:0},
{question:'1853年に浦賀に来航したアメリカの人物は？',choices:['ハリス','ペリー','マッカーサー','ザビエル'],answer:1},
{question:'1854年に日本がアメリカと結んだ条約は？',choices:['日米修好通商条約','下関条約','日米和親条約','ポーツマス条約'],answer:2},
{question:'1867年に徳川慶喜が政権を朝廷に返したことは？',choices:['版籍奉還','廃藩置県','地租改正','大政奉還'],answer:3},
{question:'1871年に藩を廃止して府県を置いた政策は？',choices:['廃藩置県','版籍奉還','徴兵令','学制'],answer:0},
{question:'1873年に出された、国民に兵役を義務づける法令は？',choices:['地租改正条例','徴兵令','治安維持法','五箇条の御誓文'],answer:1},
{question:'1889年に発布された憲法は？',choices:['日本国憲法','十七条の憲法','大日本帝国憲法','武家諸法度'],answer:2},
{question:'1894年に始まった日本と清の戦争は？',choices:['日露戦争','西南戦争','戊辰戦争','日清戦争'],answer:3}
];
const collections = {civics:{title:'中学3年 公民',questions},history:{title:'中学2年 歴史',questions:historyQuestions}};
let currentCollection = collections.civics;
const $=id=>document.getElementById(id);
let active=[],index=0,answers=[];
function show(page){for(const id of ['home','intro','quiz','result'])$(id).classList.toggle('hidden',id!==page)}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function begin(items,isReview=false){active=items.map(item=>({...item}));index=0;answers=[];$('mode').textContent=`${currentCollection.title}｜${isReview?'間違えた問題の復習':'ランダム10問'}`;show('quiz');render()}
function newRound(){begin(shuffle(currentCollection.questions).slice(0,10))}
function render(){const q=active[index];$('progress').textContent=`${index+1} / ${active.length}問`;$('question').textContent=q.question;$('feedback').textContent='';$('feedback').className='feedback';$('next').classList.add('hidden');$('next').textContent=index===active.length-1?'結果を見る →':'次の問題へ →';$('choices').replaceChildren();q.choices.forEach((choice,i)=>{const b=document.createElement('button');b.className='choice';b.textContent=`${i+1}. ${choice}`;b.addEventListener('click',()=>answer(i));$('choices').append(b)})}
function answer(chosen){if(answers.length!==index)return;const q=active[index],correct=chosen===q.answer;answers.push({question:q,correct});[...$('choices').children].forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('correct');if(i===chosen&&!correct)b.classList.add('wrong')});$('feedback').className=`feedback ${correct?'good':'bad'}`;$('feedback').textContent=correct?'○ 正解！':`× 不正解　正解：${q.choices[q.answer]}`;$('next').classList.remove('hidden')}
function results(){show('result');const count=answers.filter(a=>a.correct).length;const missed=answers.filter(a=>!a.correct).map(a=>a.question);$('score').textContent=`${count} / ${answers.length}問 正解`;$('summary').textContent=`正答率 ${Math.round(count/answers.length*100)}%`;$('history').replaceChildren();answers.forEach((a,i)=>{const s=document.createElement('span');s.className=a.correct?'ok':'ng';s.textContent=`${i+1}問 ${a.correct?'○':'×'}`;$('history').append(s)});$('retry').classList.toggle('hidden',missed.length===0);$('retry').textContent=`間違えた${missed.length}問を復習する`;$('retry').onclick=()=>begin(missed,true)}
document.querySelectorAll('[data-subject]').forEach(b=>b.onclick=()=>{currentCollection=collections[b.dataset.subject];$('intro-title').textContent=currentCollection.title;$('intro-info').textContent=`全${currentCollection.questions.length}問からランダムで10問出題します。`;show('intro')});$('intro-back').onclick=()=>show('home');$('start').onclick=newRound;$('again').onclick=newRound;$('back').onclick=()=>show('home');$('next').onclick=()=>{if(index+1===active.length)results();else{index++;render()}};
