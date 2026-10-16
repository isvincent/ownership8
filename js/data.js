/* 所有權的物權特性 — 教材內容資料（繁中／英文）
   課本：公民與社會 2　第5章 權利關係與財產權保障　第二節（p.109–115） */

window.LESSONS = [
  {
    id: 'intro', icon: '🧭', color: '#ff7a59', page: 1, book: 'p.109',
    title: { zh: '導言：人、物與物權', en: 'Intro: persons, things & real rights' },
    blocks: [
      { t: 'q', zh: '什麼是所有權？所有權有何特性？法律如何保障與限制所有權？', en: 'What is ownership? What are its traits? How does the law protect and limit it?' },
      { t: 'lead', zh: '財產權保障人民可依據財產的狀態，自由使用、收益及處分的權利，其目的在於確保人民可持有維繫個人生存及自由發展人格之生活資源。我國法律如何規範所有權的物權特性、保障與限制？',
        en: 'Property rights let people freely use, profit from and dispose of their property, ensuring they hold the resources needed to live and develop. How does our law regulate, protect and limit ownership?' },
      { t: 'p', zh: '從古羅馬時期就奠定了「私有財產神聖不可侵犯」原則，以維護私有財產權。在工業革命後，工人領取薪資以維持生活條件，因此，私有財產權的保障成為人們勤奮工作的動力之一，同時也促使資源運作更有效率。',
        en: 'Since ancient Rome the principle "private property is sacred and inviolable" has protected private property. After the Industrial Revolution, workers lived on wages, so protecting private property became a motive for hard work and made resource use more efficient.' },
      { t: 'p', zh: '民法以「人」為權利主體、以「物」為權利客體。權利客體是指受權利主體支配之各項權利的對象或內容，不僅包括「物」，也包括專利權、著作權等精神產物。',
        en: 'The Civil Code treats persons as subjects of rights and things as objects. Objects of rights are what subjects control — not only things, but also intellectual products such as patents and copyrights.' },
      { t: 'p', zh: '物權是指權利主體對物直接支配、享受其利益，並具有排他性的權利，而所有權為物權的一種，以下將探討物權中「所有權」的特性，以及法律對所有權有何保障與限制。',
        en: 'A real right is the right to directly control a thing and enjoy its benefits, excluding others. Ownership is one kind of real right; below we explore its traits and how the law protects and limits it.' },
      { t: 'fig', fig: 'subjectObject' },
      { t: 'dict', title: { zh: '小辭典｜物', en: 'Glossary | Things' },
        zh: '民法上的「物」區分為不動產及動產。不動產指土地及附著在土地上之定著物（例如：房子）；動產則是不動產以外的東西，例如：手機、衣服與汽機車等。從法律的觀點，寵物也是「物」，屬於動產的一種。',
        en: 'Things are immovables or movables. Immovables are land and fixtures on it (e.g. houses); movables are everything else — phones, clothes, vehicles. Legally a pet is also a thing — a movable.' }
    ]
  },
  {
    id: 'what', icon: '🏛️', color: '#3b82f6', page: 2, book: 'p.110',
    title: { zh: '一、什麼是所有權？', en: '1. What is ownership?' },
    blocks: [
      { t: 'key', zh: '所有權，是指所有權人可以自由的使用、收益、處分所有物，並且排除他人干涉的權利。', en: 'Ownership is the right of the owner to freely use, profit from and dispose of a thing, and to exclude interference by others.' },
      { t: 'fig', fig: 'powers' },
      { t: 'h', zh: '(一) 國家為什麼需要保障所有權？', en: '(1) Why must the state protect ownership?' },
      { t: 'p', zh: '保障人民私有財產的所有權是現代市場經濟制度的核心，當物的所有權界定清楚後，人們可以透過交易來分配各自擁有的物品，來達成彼此最大利益並滿足雙方需求。',
        en: 'Protecting private ownership is the core of the modern market economy. Once ownership is clearly defined, people can trade what they own to reach mutual maximum benefit and satisfy both sides.' },
      { t: 'p', zh: '現代民主國家透過憲法與法律的規定，使得所有權獲得保障，我國憲法第15條規定人民之財產權，應予保障。然而，為了維護公共利益，國家必須藉由正當程序對所有權加以限制，因此，所有權並非受到絕對的保護。',
        en: 'Democracies protect ownership through constitutions and laws; Article 15 of our Constitution guarantees property rights. Yet to safeguard public interest the state may limit ownership through due process, so ownership is not absolutely protected.' },
      { t: 'law', title: '憲法第15條', zh: '人民之生存權、工作權及財產權，應予保障。', en: 'The right of existence, the right of work and the right of property shall be guaranteed to the people.' },
      { t: 'h', zh: '(二) 所有權保障如何減少對他人的負面影響？', en: '(2) How does protecting ownership reduce harm to others?' },
      { t: 'p', zh: '若自然資源屬於無主物，當有人因為私利而排放廢水進而汙染河川生態時，全體人民只能接受環境公害。然而，從社會契約論的觀點出發，國家的出現就是源於人民讓渡部分權利，進而追求全體的利益極大化，因此自然資源歸於政府的財產，其具有支配、管理河川的權力，供人民日常生活自由使用之餘，透過法律規範來防止環境公害對多數人民造成影響。',
        en: 'If natural resources were ownerless, anyone could pollute a river for private gain and everyone would have to bear the harm. From the social-contract view, the state exists because people cede some rights to maximise common good; natural resources thus belong to the government, which controls and manages rivers for everyday free use while preventing pollution by law.' },
      { t: 'p', zh: '透過落實所有權的保障與管理，可以避免對多數人民造成負面影響，縱使無法完全避免，也可以透過協商加以處理。',
        en: 'Protecting and managing ownership avoids harm to the majority; even when harm cannot be fully avoided, it can be handled through negotiation.' },
      { t: 'img', src: 'assets/pig.jpg', cap: { zh: '圖5-2-1　養豬場排放的廢水：臺灣豬隻養殖業過去曾大量排放廢水汙染環境，若國家未落實有效管理，會導致社會無法有效率地運作。', en: 'Fig. 5-2-1 Wastewater from a pig farm. Taiwan’s hog farms once discharged large amounts of wastewater; without effective state management society cannot run efficiently.' } }
    ]
  },
  {
    id: 'traits', icon: '🔑', color: '#10b981', page: 3, book: 'p.111',
    title: { zh: '(三) 所有權的特性', en: '(3) Characteristics of ownership' },
    blocks: [
      { t: 'p', zh: '依據民法的規範，所有權具有以下四種特性：', en: 'Under the Civil Code, ownership has four characteristics:' },
      { t: 'trait', n: 1, zh: '直接支配性', en: 'Direct control',
        body: { zh: '所有權人對所有物有直接支配的權利，換言之，不需要其他人的同意或許可，所有權人可依照自己的意思占有、使用、收益與處分標的物。', en: 'The owner directly controls the thing: without anyone’s consent, the owner may possess, use, profit from and dispose of it at will.' } },
      { t: 'trait', n: 2, zh: '保護絕對性', en: 'Absolute protection',
        body: { zh: '所有權屬於絕對權，意即所有權人可以向任何人主張所有權，任何人都不得干涉他人的所有權行使。', en: 'Ownership is an absolute right: the owner can assert it against anyone, and no one may interfere with its exercise.' } },
      { t: 'trait', n: 3, zh: '排他性', en: 'Exclusivity',
        body: { zh: '一個物品只會有一個所有權，不會同時存在兩個所有權，但同一個所有權可能由數人共享，即「共有」。', en: 'One thing has only one ownership — never two at the same time — but one ownership may be shared by several people: co-ownership.' } },
      { t: 'fig', fig: 'fig522' }
    ]
  },
  {
    id: 'priority', icon: '⚖️', color: '#8b5cf6', page: 4, book: 'p.112',
    title: { zh: '4. 優先性：物權 vs 債權', en: '4. Priority: real rights vs. claims' },
    blocks: [
      { t: 'trait', n: 4, zh: '優先性', en: 'Priority',
        body: { zh: '所有權具有優先性，指除法律另有規定外，對於同一物的所有權會優先於債權。相較於契約，如果一個物品其契約約定的權利（債權）與所有權衝突時，所有權優先債權。', en: 'Unless the law provides otherwise, ownership of a thing prevails over creditor’s rights in it. If a contractual right (a claim) conflicts with ownership, ownership wins.' } },
      { t: 'example', title: { zh: '例', en: 'Example' },
        zh: '小辰原本與元元約定要以5千元的價格把電腦賣給元元，卻中途反悔將電腦賣給出價6千元的阿庭。小辰將電腦交付給阿庭後，此時阿庭享有對電腦的物權，優先於元元的債權，元元不得主張比阿庭先成立買賣契約，而認為阿庭無電腦所有權。',
        en: 'Xiao-Chen agreed to sell his computer to Yuan-Yuan for $5,000, then changed his mind and sold it to A-Ting for $6,000. Once delivered to A-Ting, A-Ting holds the real right, which prevails over Yuan-Yuan’s claim; Yuan-Yuan cannot argue that A-Ting lacks ownership just because her contract came first.' },
      { t: 'fig', fig: 'fig523' },
      { t: 'dict', title: { zh: '小辭典｜債權相對性與物權絕對性', en: 'Glossary | Relative claims vs. absolute real rights' },
        zh: '債權是僅得對特定人主張之權利，只有相對效力；反之，物權則是得對不特定人主張之權利，屬於絕對權。在圖5-2-3 的案例中，小辰、元元雙方成立買賣契約，由於是債權契約，只有相對效力，不能對抗優先取得電腦所有權的阿庭。',
        en: 'A claim can be asserted only against a specific person — it is relative. A real right can be asserted against anyone — it is absolute. In Fig. 5-2-3 the sales contract between Xiao-Chen and Yuan-Yuan creates only a relative claim, which cannot defeat A-Ting, who obtained ownership first.' },
      { t: 'think', title: { zh: '請想想看', en: 'Think about it' }, items: [
        { zh: '為什麼物權須優先於債權，倘若法律不是這樣規範，對於阿庭會有什麼影響呢？', en: 'Why must real rights prevail over claims? If the law were different, how would A-Ting be affected?',
          ref: { zh: '參考思路：若債權可對抗物權，阿庭付了錢、拿到電腦仍可能被元元追討，交易安全無法保障，人們不敢交易；物權優先能讓「已交付、已取得」的狀態穩定。', en: 'Hint: if claims beat real rights, A-Ting could lose a computer she paid for and received; trade would be unsafe. Priority keeps completed transfers stable.' } },
        { zh: '日常生活中的買賣契約，原則上只要買賣雙方同意，契約隨即成立，不須訂定書面契約，倘若其中一方反悔時，對於當事人會有什麼影響呢？買賣雙方的權益該如何保障呢？', en: 'Everyday sales contracts form once both sides agree, with no written contract needed. If one side backs out, what happens to the parties? How can both be protected?',
          ref: { zh: '參考思路：反悔方可能須負違約責任（如賠償），但另一方難以取得標的物；可用書面契約、收據、訂金、對話紀錄保存證據，必要時請求損害賠償。', en: 'Hint: the party who backs out may be liable for breach (e.g. damages), but the other cannot get the item itself; keep written contracts, receipts, deposits or chat records as evidence.' } }
      ] }
    ]
  },
  {
    id: 'protect', icon: '🛡️', color: '#ef4444', page: 5, book: 'p.113',
    title: { zh: '(四) 所有權的保障', en: '(4) Protection of ownership' },
    blocks: [
      { t: 'p', zh: '權利如果被侵害，必須有救濟方式，為了保障上述物權的特性，民法第767條規定：', en: 'A right that is infringed needs a remedy. To protect these traits, Civil Code Article 767 provides:' },
      { t: 'law', title: '民法第767條第1項', zh: '所有人對於無權占有或侵奪其所有物者，得請求返還之。對於妨害其所有權者，得請求除去之。有妨害其所有權之虞者，得請求防止之。', en: 'An owner may demand the return of the thing from anyone who possesses it without right or takes it; may demand removal of any interference; and may demand prevention where interference is threatened.' },
      { t: 'trait', n: 1, zh: '所有物返還請求權', en: 'Claim for return', body: { zh: '當他人無權占有或侵奪所有權人之所有物時，所有權人可以向其要求返還。', en: 'When another possesses or seizes the thing without right, the owner may demand its return.' } },
      { t: 'trait', n: 2, zh: '妨害除去請求權', en: 'Claim to remove interference', body: { zh: '雖未占有所有權人之物，但其行為已妨害所有權人的權利行使時，所有權人得請求除去其妨害。', en: 'When someone does not possess the thing but their conduct already interferes with the owner’s rights, the owner may demand its removal.' } },
      { t: 'trait', n: 3, zh: '妨害防止請求權', en: 'Claim to prevent interference', body: { zh: '所有權人對於可能會妨害所有權行使的行為，可以預先要求他人不得從事該行為。', en: 'For acts that may interfere with ownership, the owner may require others in advance not to do them.' } },
      { t: 'fig', fig: 'fig524' },
      { t: 'tip', zh: '若小辰的權利被侵害，可提起訴訟請求法院命對方返還物品，或是回復損壞的物品。', en: 'If Xiao-Chen’s rights are infringed, he can sue and ask the court to order the return of the item or the restoration of damaged property.' }
    ]
  },
  {
    id: 'limit', icon: '🚧', color: '#f59e0b', page: 6, book: 'p.114',
    title: { zh: '二、所有權保障的限制', en: '2. Limits on the protection of ownership' },
    blocks: [
      { t: 'p', zh: '古羅馬採取絕對所有權原則，意即不干涉個人的使用方式與目的。而隨著資本主義社會的興起，對所有權的限制成為新趨勢，避免權利過度擴張，以保障社會大眾的權益。我國民法對所有權的限制，可分為以下兩點說明：',
        en: 'Ancient Rome followed absolute ownership — no interference with how or why people used things. With capitalism, limiting ownership became a trend to stop rights from over-expanding and to protect the public. Our Civil Code limits ownership in two ways:' },
      { t: 'h', zh: '(一) 所有權的限制', en: '(1) Restrictions on ownership' },
      { t: 'trait', n: 1, zh: '物權必須由法律規定，不能自行創設', en: 'Real rights are fixed by law, not created at will',
        body: { zh: '物權優先於債權，又具有保護絕對性，因此，對於物權的保障必須要考慮周全，不能由當事人自行約定。因此民法規定「物權除依法律或習慣外，不得創設」，此概念又被稱為「物權法定主義」。', en: 'Because real rights prevail over claims and are absolutely protected, they must be carefully defined and cannot be agreed freely by parties. The Civil Code says “real rights cannot be created except by law or custom” — the numerus clausus principle (物權法定主義).' } },
      { t: 'trait', n: 2, zh: '不動產物權必須要登記', en: 'Real rights in immovables must be registered',
        body: { zh: '相較於動產，由於不動產的市場價值高，因此民法規定不動產的取得、變更、喪失等必須依法登記，且登記後才產生所有權，藉以保障不動產之交易安全，此概念又被稱為「不動產登記生效主義」。', en: 'Immovables are valuable, so their acquisition, change or loss must be registered, and ownership arises only after registration, protecting transaction safety — the registration-effectiveness principle.' } },
      { t: 'example', title: { zh: '例', en: 'Example' }, zh: '陳太太要將房屋賣給林先生，在簽訂契約後，雙方必須到地政事務所進行移轉登記，才能正式將房屋所有權轉移給林先生。', en: 'Mrs. Chen sells her house to Mr. Lin. After signing, both must go to the land office for transfer registration before ownership formally passes to Mr. Lin.' },
      { t: 'fig', fig: 'transfer' },
      { t: 'dict', title: { zh: '小辭典｜所有權移轉', en: 'Glossary | Transfer of ownership' },
        zh: '1. 不動產登記生效要件主義：不動產物權行為，非經登記，不生效力（民法第758條第1項），反面解釋，即須經登記，始生效力。故登記為不動產物權行為之特別生效要件。此處所稱「登記」，專指地政機關所辦理，土地登記簿上之登記。\n2. 動產交付移轉所有權：「動產物權之讓與，非將動產交付，不生效力。」（民法第761條第1項）交付，即占有的移轉，為動產物權行為的公示方法。',
        en: '1. Registration requirement for immovables: a juristic act on real rights in immovables has no effect without registration (Art. 758 I). Registration — on the land register kept by the land office — is the special condition of effectiveness.\n2. Delivery for movables: “the transfer of a real right in a movable has no effect unless the movable is delivered” (Art. 761 I). Delivery — transfer of possession — is the public sign of the act.' }
    ]
  },
  {
    id: 'public', icon: '🏮', color: '#ec4899', page: 7, book: 'p.115',
    title: { zh: '(二) 私有財產與公共利益的調和', en: '(2) Balancing private property and public interest' },
    blocks: [
      { t: 'p', zh: '現代社會中，人與人的互動更加緊密，若完全地保障所有權，有時會影響公共利益，此時需要限制部分所有權以謀求社會的發展。像是在臺灣，氣候炎熱潮濕常有雨，在房屋建築上就有了「騎樓」的設計，各戶人家將一樓房屋內縮，保留空間以供行人行走。',
        en: 'In modern society people interact closely; fully protecting ownership can hurt public interest, so some ownership must be limited for social development. In hot, humid, rainy Taiwan, buildings have the qilou arcade: each house sets back its ground floor to leave a walkway for pedestrians.' },
      { t: 'fig', fig: 'arcade' },
      { t: 'p', zh: '相對於有形的物權，民法也保障了無形的財產：智慧財產權，保障創作者的權益、肯定智慧的成果並更進一步鼓勵創作。但漸漸的，有人開始質疑智慧財產權的保障反而減緩創作的發展，且並非所有人都是為了獲利才願意發明與創造。像是開放原始碼的運動便多少帶有反著作權的色彩，追求真正的創作自由。因此法律也應保障一定的合理使用權，以同時兼顧創作者的權益與人類智慧成果的發展。',
        en: 'Beyond tangible property, the law also protects intangible property — intellectual property — to secure creators’ interests and encourage creation. Some, however, argue IP protection slows creative development, and not everyone creates for profit; the open-source movement carries an anti-copyright flavour in pursuit of creative freedom. The law should therefore guarantee some fair use, balancing creators’ interests with the growth of human knowledge.' },
      { t: 'dict', title: { zh: '小辭典｜開放原始碼', en: 'Glossary | Open source' },
        zh: '原始碼就是在電腦等資訊設備上所使用的應用軟體之原始程式碼。這在商業軟體上，多是無法被使用者所檢視及改寫。開放原始碼運動強調資訊的自由流通與共享，以對抗商業公司的壟斷。',
        en: 'Source code is the original program code of software. In commercial software users usually cannot view or modify it. The open-source movement stresses the free flow and sharing of information against corporate monopoly.' },
      { t: 'forum', title: { zh: '公民論壇｜智慧財產權是保障還是限制？', en: 'Civic forum | Is IP a protection or a restriction?' },
        zh: '我國著作權法第1條規定：「為保障著作人著作權益，調和社會公共利益，促進國家文化發展，特制訂本法。」透過法律保障從事創作之人的權益，藉以鼓勵其從事精神創作活動，使人類之文化資產更為豐富；同時也須顧及知識與創作的傳播，以利於社會文化的發展與競爭。因此著作的使用，在不同領域與目的下有不同的規範。\n若沒有過去知識的累積，可能無法造成現今的進步；但若只著眼於公共利益，人們恐失去創作、發明的動力。',
        en: 'Copyright Act Art. 1: “This Act is enacted to protect the rights of authors, balance social public interest, and promote national cultural development.” Protecting creators encourages creative work and enriches culture, while knowledge must also spread for society to develop and compete; use of works is regulated differently by field and purpose.\nWithout past knowledge there is no progress today — but if we look only at public interest, people may lose the drive to create and invent.',
        ask: { zh: '請想想看：智慧財產權的保障應如何與公共利益有所調和呢？', en: 'Think: how should IP protection be balanced with public interest?' } },
      { t: 'p', zh: '本節對於權利主體與權利客體中所有權的探討，是從財產使用的角度探討民法的保障和規範。下一節將從管理的角度，探究生活中常見的財產分配制度，也就是夫妻財產的分配規範以及遺產繼承。',
        en: 'This section examined ownership from the angle of using property. The next section looks at management — common property-distribution systems such as marital property and inheritance.' }
    ]
  }
];

/* 學習指引 */
window.GUIDE = {
  goals: [
    { zh: '區分權利主體與權利客體，說出動產與不動產的差別。', en: 'Distinguish subjects and objects of rights; tell movables from immovables.' },
    { zh: '說明所有權的意義與國家保障所有權的理由。', en: 'Explain what ownership is and why the state protects it.' },
    { zh: '以生活案例辨識所有權四特性。', en: 'Identify the four traits of ownership in real cases.' },
    { zh: '運用民法第767條三種請求權處理權利受侵害的情境。', en: 'Apply the three claims of Civil Code Art. 767.' },
    { zh: '說明物權法定主義、不動產登記生效與動產交付。', en: 'Explain numerus clausus, registration and delivery.' },
    { zh: '評析私有財產與公共利益、智慧財產權與合理使用的調和。', en: 'Evaluate the balance between private property, IP and public interest.' }
  ],
  steps: [
    { icon: '👀', min: 5, zh: '暖身：看「首頁」概念地圖，猜猜看你的手機、你家房子、你養的貓在法律上是什麼？', en: 'Warm-up: look at the concept map — what are your phone, house and cat in law?' },
    { icon: '📖', min: 15, zh: '精讀：依序閱讀 7 個教材單元，每讀完一單元按「✅ 我讀完了」。', en: 'Read the 7 units in order; tap “✅ Done” after each.' },
    { icon: '🎮', min: 10, zh: '動手：到「互動實驗室」操作 7 個視覺化元件，驗證你的理解。', en: 'Try the 7 widgets in the Lab.' },
    { icon: '✏️', min: 10, zh: '演練：完成「例題習題」的基本題、進階題、素養題。', en: 'Do the basic, advanced and literacy exercises.' },
    { icon: '🏋️', min: 5, zh: '複習：用「練習」的閃卡與快問快答反覆演練到 80% 以上。', en: 'Drill flashcards and quick quizzes until 80%+.' },
    { icon: '📝', min: 10, zh: '檢核：完成 20 題單元測驗，錯題回到對應頁次複習。', en: 'Take the 20-question test and review mistakes.' },
    { icon: '📊', min: 2, zh: '反思：到「學習歷程」寫下心得並下載紀錄。', en: 'Reflect in the Learning Log and download it.' }
  ],
  myths: [
    { wrong: { zh: '先簽約的人一定拿得到東西。', en: 'Whoever signs first always gets the item.' }, right: { zh: '債權只有相對效力，不能對抗已取得物權的第三人（優先性）。', en: 'A claim is relative and cannot defeat a third party who already holds the real right.' } },
    { wrong: { zh: '買房簽約付款後就是屋主。', en: 'Signing and paying makes you the house owner.' }, right: { zh: '不動產須到地政事務所完成移轉登記才取得所有權。', en: 'Ownership of a house passes only on registration at the land office.' } },
    { wrong: { zh: '所有權受絕對保護，國家不能限制。', en: 'Ownership is absolute and the state cannot limit it.' }, right: { zh: '為了公共利益，國家可依正當程序限制所有權。', en: 'The state may limit ownership through due process for public interest.' } },
    { wrong: { zh: '排他性代表一個東西只能屬於一個人。', en: 'Exclusivity means a thing can belong to only one person.' }, right: { zh: '一物只有一個所有權，但這個所有權可以由數人「共有」。', en: 'One thing has one ownership, but several people can co-own it.' } },
    { wrong: { zh: '寵物是家人，所以在法律上不是物。', en: 'Pets are family, so legally they are not things.' }, right: { zh: '從法律觀點，寵物屬於動產（但仍受動物保護法保護）。', en: 'Legally pets are movables (still protected by animal-welfare law).' } }
  ],
  keywords: ['權利主體', '權利客體', '物權', '動產', '不動產', '所有權', '使用・收益・處分', '憲法第15條', '社會契約論', '直接支配性', '保護絕對性', '排他性', '共有', '優先性', '債權相對性', '物權絕對性', '民法第767條', '返還請求權', '妨害除去請求權', '妨害防止請求權', '物權法定主義', '不動產登記生效主義', '動產交付', '騎樓', '智慧財產權', '開放原始碼', '合理使用']
};

/* 例題、習題（教材的「例」「請想想看」「公民論壇」＋自編基本題／進階題／素養題） */
window.EXERCISES = {
  basic: [
    { q: { zh: '下列哪一項在法律上屬於「動產」？', en: 'Which is a movable?' }, o: [{ zh: '土地', en: 'Land' }, { zh: '公寓', en: 'An apartment' }, { zh: '家裡養的貓', en: 'A pet cat' }, { zh: '透天厝', en: 'A townhouse' }], a: 2, ex: { zh: '寵物在法律上屬於動產；土地及其定著物（房屋）是不動產。', en: 'Pets are movables; land and buildings are immovables.' } },
    { q: { zh: '所有權人可以「自由的使用、收益、處分所有物，並且排除他人干涉」。其中把房子出租收租金屬於哪一項？', en: 'Renting out a house for rent is which power?' }, o: [{ zh: '使用', en: 'Use' }, { zh: '收益', en: 'Profit' }, { zh: '處分', en: 'Disposal' }, { zh: '排除干涉', en: 'Exclusion' }], a: 1, ex: { zh: '收益是取得物所產生的利益，例如租金、利息、果實。', en: 'Profit means taking the benefits a thing yields: rent, interest, fruit.' } },
    { q: { zh: '「一個物品只會有一個所有權」描述的是哪一種特性？', en: '“One thing has one ownership” describes:' }, o: [{ zh: '直接支配性', en: 'Direct control' }, { zh: '保護絕對性', en: 'Absolute protection' }, { zh: '排他性', en: 'Exclusivity' }, { zh: '優先性', en: 'Priority' }], a: 2, ex: { zh: '排他性：一物一所有權，但可由數人共有。', en: 'Exclusivity: one thing, one ownership, possibly co-owned.' } },
    { q: { zh: '民法第767條沒有規定下列哪一種請求權？', en: 'Which claim is NOT in Art. 767?' }, o: [{ zh: '所有物返還請求權', en: 'Return' }, { zh: '妨害除去請求權', en: 'Removal' }, { zh: '妨害防止請求權', en: 'Prevention' }, { zh: '契約履行請求權', en: 'Contract performance' }], a: 3, ex: { zh: '767條是物上請求權：返還、除去、防止；契約履行屬債權。', en: 'Art. 767 covers return, removal and prevention; contract performance is a claim.' } },
    { q: { zh: '動產所有權的移轉，以什麼作為公示方法？', en: 'What is the public sign for transferring a movable?' }, o: [{ zh: '登記', en: 'Registration' }, { zh: '交付', en: 'Delivery' }, { zh: '公證', en: 'Notarisation' }, { zh: '口頭承諾', en: 'A verbal promise' }], a: 1, ex: { zh: '民法第761條：動產物權之讓與，非將動產交付，不生效力。', en: 'Art. 761: delivery is required.' } }
  ],
  advanced: [
    { q: { zh: '阿明與小美共同出資買一臺鋼琴，兩人都是所有人。下列敘述何者正確？', en: 'Ming and Mei jointly buy a piano. Which is correct?' }, o: [{ zh: '鋼琴上有兩個所有權', en: 'The piano has two ownerships' }, { zh: '鋼琴只有一個所有權，由兩人共有', en: 'One ownership shared by both' }, { zh: '違反排他性，契約無效', en: 'It breaks exclusivity, so it is void' }, { zh: '只有先付款的人才是所有人', en: 'Only the first payer owns it' }], a: 1, ex: { zh: '排他性不排斥共有：同一個所有權可由數人共享。', en: 'Exclusivity allows co-ownership of a single ownership.' } },
    { q: { zh: '小華向房東租屋，房東卻在租期內把房子賣給第三人並完成登記。依課文「優先性」的概念，下列推論何者最合理？', en: 'A landlord sells the leased house to a third party and registers it. By the priority idea, which inference is most reasonable?' }, o: [{ zh: '一般而言，物權優先於債權，但法律可能另有規定保護承租人', en: 'Generally real rights prevail, but the law may make exceptions protecting tenants' }, { zh: '租約一定優先於所有權', en: 'The lease always beats ownership' }, { zh: '新屋主沒有取得所有權', en: 'The buyer did not become owner' }, { zh: '小華可以主張自己是房屋所有人', en: 'Hua can claim to own the house' }], a: 0, ex: { zh: '課文強調「除法律另有規定外」所有權優先於債權；民法第425條「買賣不破租賃」即為保護承租人的例外規定（延伸知識）。', en: 'Ownership prevails “unless the law provides otherwise”; Art. 425 (sale does not break a lease) is such an exception (extension).' } },
    { q: { zh: '工廠準備在小辰家旁開挖地基，可能造成小辰的房屋龜裂，但尚未動工。小辰可主張？', en: 'A factory plans to dig next to Chen’s house, which may crack it, but has not started. Chen may claim:' }, o: [{ zh: '所有物返還請求權', en: 'Return' }, { zh: '妨害除去請求權', en: 'Removal' }, { zh: '妨害防止請求權', en: 'Prevention' }, { zh: '無法主張，因為還沒受損', en: 'Nothing, since no harm yet' }], a: 2, ex: { zh: '「有妨害其所有權之虞者，得請求防止之」——尚未發生但可能妨害，即可預先請求防止。', en: 'A threatened interference can be prevented in advance.' } },
    { q: { zh: '甲、乙約定創設一種「可對抗任何人的電腦優先使用權」並寫入契約。依物權法定主義，此約定的效力為何？', en: 'A and B agree by contract to create a new “right to use the computer first, enforceable against anyone”. Under numerus clausus:' }, o: [{ zh: '只要雙方同意即成為物權', en: 'It becomes a real right by consent' }, { zh: '不能自行創設物權，此約定最多只在雙方間有債權效力', en: 'They cannot create a real right; at most it binds them as a claim' }, { zh: '須經地政事務所登記才成為物權', en: 'It becomes a real right after registration' }, { zh: '可對抗第三人', en: 'It binds third parties' }], a: 1, ex: { zh: '物權除依法律或習慣外，不得創設（民法第757條）；當事人約定只能產生相對的債權效力。', en: 'Real rights cannot be created except by law or custom (Art. 757); a private agreement only creates a relative claim.' } }
  ],
  literacy: [
    { scene: { zh: '🏠 情境：小安的家人在網路上看到一間二手屋，賣方說「先匯訂金、簽約，房子就是你的」。', en: '🏠 Scenario: An online seller tells An’s family “pay a deposit and sign, and the house is yours.”' },
      q: { zh: '請運用「不動產登記生效主義」提醒小安家人：何時才真正取得房屋所有權？可以如何保障自己的交易安全？', en: 'Using the registration principle, when does the family really own the house, and how can they stay safe?' },
      ref: { zh: '須到地政事務所完成所有權移轉登記才取得所有權；可先申請謄本確認登記名義人、透過代書或履約保證、價金分階段給付，避免付款後拿不到產權。', en: 'Only after transfer registration at the land office. Check the land register, use a scrivener or escrow, and pay in stages.' } },
    { scene: { zh: '🎵 情境：社團想把一首流行歌改編成校慶影片配樂並上傳 YouTube。', en: '🎵 Scenario: A club wants to rework a pop song as background music for a school video on YouTube.' },
      q: { zh: '請從「智慧財產權保障」與「合理使用」兩個角度，提出你的建議做法。', en: 'Give your advice from both IP protection and fair use angles.' },
      ref: { zh: '公開上傳屬於公開傳輸，超出課堂教學的合理使用範圍的可能性高；建議取得授權、改用 CC 授權或公眾領域音樂，並標示出處，兼顧創作者權益與分享。', en: 'Public upload likely exceeds fair use; seek permission or use CC / public-domain music with attribution.' } },
    { scene: { zh: '🌧️ 情境：某路段店家把騎樓堆滿商品與機車，行人只能走到車道上。', en: '🌧️ Scenario: Shops fill the arcade with goods and scooters, forcing pedestrians onto the road.' },
      q: { zh: '騎樓空間屬於店家的私有財產，為什麼仍應讓行人通行？請以「私有財產與公共利益的調和」說明，並提出一項改善建議。', en: 'The arcade is private property; why should pedestrians still pass? Explain with the balance idea and suggest one fix.' },
      ref: { zh: '若完全保障所有權會影響公共利益（行人安全），故須限制部分所有權；可由政府劃設騎樓整平、勸導與取締占用，或社區協商設置固定擺放區。', en: 'Full protection would harm public safety, so some ownership is limited; the city can level arcades, enforce rules, or negotiate set display zones.' } }
  ]
};

/* 練習題庫（與測驗分開，可反覆演練） */
window.CARDS = [
  ['權利主體', '享有權利、負擔義務的「人」（自然人與法人）。', 'Subject of rights', 'The “person” who holds rights and duties.'],
  ['權利客體', '受權利主體支配的對象或內容，包括「物」與專利權、著作權等精神產物。', 'Object of rights', 'What subjects control: things and intellectual products.'],
  ['物權', '權利主體對物直接支配、享受其利益，並具有排他性的權利。', 'Real right', 'Right to directly control and benefit from a thing, excluding others.'],
  ['不動產', '土地及附著在土地上之定著物（例如房子）。', 'Immovable', 'Land and fixtures on it, e.g. houses.'],
  ['動產', '不動產以外的東西，例如手機、衣服、汽機車、寵物。', 'Movable', 'Everything else: phones, clothes, vehicles, pets.'],
  ['所有權', '可以自由使用、收益、處分所有物，並排除他人干涉的權利。', 'Ownership', 'Right to freely use, profit from, dispose of a thing and exclude others.'],
  ['直接支配性', '不需他人同意或許可，依自己的意思占有、使用、收益與處分。', 'Direct control', 'Act on the thing at will without consent.'],
  ['保護絕對性', '所有權是絕對權，可以向任何人主張，任何人不得干涉。', 'Absolute protection', 'Assertable against anyone.'],
  ['排他性', '一物只有一個所有權，但同一所有權可由數人共有。', 'Exclusivity', 'One ownership per thing, may be co-owned.'],
  ['優先性', '除法律另有規定外，同一物的所有權優先於債權。', 'Priority', 'Ownership prevails over claims unless law says otherwise.'],
  ['債權相對性', '債權僅得對特定人主張，只有相對效力。', 'Relativity of claims', 'Claims bind only specific persons.'],
  ['所有物返還請求權', '他人無權占有或侵奪所有物時，可要求返還。', 'Claim for return', 'Demand return from unlawful possessors.'],
  ['妨害除去請求權', '未占有但已妨害權利行使時，可請求除去妨害。', 'Claim for removal', 'Remove an existing interference.'],
  ['妨害防止請求權', '對可能妨害的行為，可預先要求他人不得從事。', 'Claim for prevention', 'Prevent a threatened interference.'],
  ['物權法定主義', '物權除依法律或習慣外，不得創設。', 'Numerus clausus', 'Real rights only by law or custom.'],
  ['不動產登記生效主義', '不動產物權非經登記，不生效力（民法758）。', 'Registration principle', 'No effect without registration (Art. 758).'],
  ['動產交付', '動產物權之讓與，非將動產交付，不生效力（民法761）。', 'Delivery of movables', 'No effect without delivery (Art. 761).'],
  ['騎樓', '一樓內縮供行人通行，是限制部分所有權以謀公共利益的例子。', 'Qilou arcade', 'Set-back walkway: limiting ownership for public good.'],
  ['開放原始碼', '強調資訊自由流通與共享，以對抗商業公司壟斷的運動。', 'Open source', 'Movement for free sharing of code against monopoly.'],
  ['合理使用', '在一定範圍內不經授權利用著作，兼顧創作者權益與知識發展。', 'Fair use', 'Limited use without permission balancing authors and knowledge.']
];

window.TF = [
  ['寵物在法律上屬於動產。', 'Pets are movables in law.', true],
  ['專利權、著作權也屬於權利客體。', 'Patents and copyrights are also objects of rights.', true],
  ['所有權在我國受到絕對保護，國家不得限制。', 'Ownership is absolutely protected and cannot be limited.', false],
  ['憲法第15條規定人民之財產權應予保障。', 'Art. 15 of the Constitution protects property rights.', true],
  ['同一臺電腦可以同時存在兩個所有權。', 'One computer can have two ownerships at once.', false],
  ['同一個所有權可以由數人共有。', 'One ownership can be shared by several people.', true],
  ['債權可以對任何人主張，屬於絕對權。', 'Claims can be asserted against anyone.', false],
  ['物權得對不特定人主張，屬於絕對權。', 'Real rights can be asserted against anyone.', true],
  ['小辰把電腦交付給阿庭後，元元可以要求阿庭返還電腦。', 'After delivery to A-Ting, Yuan-Yuan can demand the computer from A-Ting.', false],
  ['他人無權占有我的物品時，我可以主張所有物返還請求權。', 'I can demand return from an unlawful possessor.', true],
  ['妨害防止請求權必須等到損害發生後才能主張。', 'The prevention claim requires harm first.', false],
  ['當事人可以自行約定創設新的物權種類。', 'Parties may create new kinds of real rights by agreement.', false],
  ['房屋買賣簽約後，所有權就立即移轉給買方。', 'House ownership passes on signing.', false],
  ['動產物權之讓與，非將動產交付，不生效力。', 'Transfer of a movable needs delivery.', true],
  ['騎樓設計是限制部分所有權以謀公共利益的例子。', 'Arcades limit ownership for public good.', true],
  ['開放原始碼運動強調資訊的自由流通與共享。', 'Open source stresses free sharing of information.', true],
  ['古羅馬採取絕對所有權原則。', 'Ancient Rome followed absolute ownership.', true],
  ['資本主義興起後，對所有權的限制成為新趨勢。', 'With capitalism, limiting ownership became a trend.', true],
  ['土地登記是指在地政機關辦理之土地登記簿上的登記。', 'Registration means entry in the land register at the land office.', true],
  ['著作權法的目的只在保障著作人，不考慮公共利益。', 'Copyright law only protects authors, ignoring public interest.', false]
];

/* 情境分類練習：判斷特性或請求權 */
window.CASES = [
  { s: '小辰決定把自己的舊電腦送給表弟，不用問任何人。', e: 'Chen gives his old PC to a cousin without asking anyone.', k: 'trait', a: '直接支配性' },
  { s: '房子出租多年，屋主仍能向任何人主張「這是我的房子」。', e: 'After years of renting out, the owner can still assert the house is his against anyone.', k: 'trait', a: '保護絕對性' },
  { s: '三兄弟一起繼承一塊土地，土地上只有一個所有權。', e: 'Three brothers inherit one plot; it has a single ownership.', k: 'trait', a: '排他性' },
  { s: '賣家先口頭答應賣給甲，後來把機車交付給乙，乙取得所有權。', e: 'Seller promised A, but delivered the scooter to B; B owns it.', k: 'trait', a: '優先性' },
  { s: '小美把自己畫的作品拿去賣掉。', e: 'Mei sells her own painting.', k: 'trait', a: '直接支配性' },
  { s: '別人撿到你的手機後占為己有，拒絕歸還。', e: 'Someone keeps your phone after finding it.', k: 'claim', a: '所有物返還請求權' },
  { s: '鄰居的冷氣滴水長期滴在你家的陽臺上。', e: 'A neighbour’s AC drips onto your balcony constantly.', k: 'claim', a: '妨害除去請求權' },
  { s: '隔壁工地準備把吊車停在你家的屋頂上方作業。', e: 'A crane next door is about to operate over your roof.', k: 'claim', a: '妨害防止請求權' },
  { s: '同學把你借他的腳踏車騎回家，說「這台現在是我的」。', e: 'A classmate keeps your bike, saying it is his now.', k: 'claim', a: '所有物返還請求權' },
  { s: '有人在你家門口堆放廢棄家具，讓你無法進出。', e: 'Someone dumps furniture at your door, blocking it.', k: 'claim', a: '妨害除去請求權' },
  { s: '借電腦前先約定「不可更動電腦設定」。', e: 'Before lending, you set the rule “do not change settings”.', k: 'claim', a: '妨害防止請求權' },
  { s: '房屋買賣須到地政事務所辦理移轉登記才生效。', e: 'House transfer takes effect after registration.', k: 'limit', a: '不動產登記生效主義' },
  { s: '雙方約定創設法律沒有規定的新物權，不發生物權效力。', e: 'A new real right made up by contract has no real-right effect.', k: 'limit', a: '物權法定主義' },
  { s: '把手機賣給朋友，交給他之後所有權才移轉。', e: 'A phone passes to the buyer when handed over.', k: 'limit', a: '動產交付' }
];
window.CASE_KINDS = {
  trait: ['直接支配性', '保護絕對性', '排他性', '優先性'],
  claim: ['所有物返還請求權', '妨害除去請求權', '妨害防止請求權'],
  limit: ['物權法定主義', '不動產登記生效主義', '動產交付']
};

/* 進階與延伸 */
window.EXTEND = [
  { icon: '📜', title: { zh: '相關法條卡', en: 'Key statutes' }, laws: [
    ['憲法第15條', '人民之生存權、工作權及財產權，應予保障。'],
    ['民法第757條', '物權除依法律或習慣外，不得創設。'],
    ['民法第758條第1項', '不動產物權，依法律行為而取得、設定、喪失及變更者，非經登記，不生效力。'],
    ['民法第761條第1項', '動產物權之讓與，非將動產交付，不生效力。但受讓人已占有動產者，於讓與合意時，即生效力。'],
    ['民法第765條', '所有人，於法令限制之範圍內，得自由使用、收益、處分其所有物，並排除他人之干涉。'],
    ['民法第767條第1項', '所有人對於無權占有或侵奪其所有物者，得請求返還之。對於妨害其所有權者，得請求除去之。有妨害其所有權之虞者，得請求防止之。'],
    ['民法第817條第1項', '數人按其應有部分，對於一物有所有權者，為共有人。'],
    ['著作權法第1條', '為保障著作人著作權益，調和社會公共利益，促進國家文化發展，特制定本法。']
  ] },
  { icon: '🔍', title: { zh: '延伸一：民法第765條「於法令限制之範圍內」', en: 'Extension 1: Art. 765 “within the limits of law”' },
    zh: '課文說所有權可「自由」使用、收益、處分，但民法第765條同時寫明「於法令限制之範圍內」。例如：建築要符合建築法規、古蹟所有人不得任意拆除、土地可能因公共建設被依法徵收（須給予補償）。這正呼應課文「所有權並非受到絕對的保護」。',
    en: 'Art. 765 grants freedom “within the limits of laws and regulations”: building codes, protected heritage, or lawful expropriation with compensation — echoing that ownership is not absolute.' },
  { icon: '🌊', title: { zh: '延伸二：公地悲劇與財產權界定', en: 'Extension 2: Tragedy of the commons' },
    zh: '經濟學家哈定（Garrett Hardin）提出「公地悲劇」：無人負責的共有資源（牧場、漁場、河川）容易被過度使用或汙染。課文以養豬場廢水為例，說明自然資源若是「無主物」就會產生環境公害；明確的權利歸屬與管理（政府管理、法律規範、協商）是解方之一。',
    en: 'Garrett Hardin’s “tragedy of the commons”: unowned shared resources get overused or polluted. Clear rights, management and negotiation help — just like the pig-farm example.' },
  { icon: '🤝', title: { zh: '延伸三：寇斯定理與「協商」', en: 'Extension 3: The Coase theorem' },
    zh: '課文提到負面影響「縱使無法完全避免，也可以透過協商加以處理」。經濟學家寇斯（Ronald Coase）認為：在財產權界定清楚、交易成本夠低時，當事人可以透過協商達成有效率的結果。這就是「所有權界定清楚」的重要性。',
    en: 'Coase argued that with clear property rights and low transaction costs, parties can bargain to an efficient outcome — why defining ownership matters.' },
  { icon: '🏘️', title: { zh: '延伸四：買賣不破租賃', en: 'Extension 4: Sale does not break a lease' },
    zh: '優先性的「除法律另有規定外」有哪些例子？民法第425條規定，出租人於租賃物交付後、承租人占有中，縱將其所有權讓與第三人，租賃契約對受讓人仍繼續存在。這是法律為保護承租人生活安定所設的例外。',
    en: 'Art. 425: if leased property is transferred while the tenant is in possession, the lease continues against the new owner — a statutory exception protecting tenants.' },
  { icon: '©️', title: { zh: '延伸五：創用 CC 與合理使用', en: 'Extension 5: Creative Commons & fair use' },
    zh: '創用CC（Creative Commons）讓創作者用「姓名標示、非商業性、禁止改作、相同方式分享」等條件，事先授權大眾使用，是在著作權框架下兼顧分享的做法。著作權法第65條則以「利用目的與性質、著作性質、利用質量比例、對市場的影響」等因素判斷是否合理使用。',
    en: 'Creative Commons licenses (BY, NC, ND, SA) let creators pre-authorise sharing. Copyright Act Art. 65 weighs purpose, nature, amount and market effect to judge fair use.' },
  { icon: '🎯', title: { zh: '探究任務：我的財產地圖', en: 'Inquiry: My property map' },
    zh: '列出你擁有的 10 樣東西，分成動產／不動產／智慧財產三類；選其中一樣，說明它的取得方式（交付或登記）、你如何行使「使用、收益、處分」，以及若被侵害你可以主張哪一種請求權。完成後到「學習歷程」寫下心得。',
    en: 'List 10 things you own as movable / immovable / IP. Pick one: how was it acquired, how do you use/profit/dispose of it, and which claim would you use if it were infringed?' }
];

/* 介面文字 */
window.I18N = {
  zh: {
    title: '所有權的物權特性', subtitle: '公民與社會 2・第5章第二節・互動學習網',
    nav_home: '首頁', nav_guide: '學習指引', nav_learn: '教材', nav_ex: '例題習題', nav_lab: '互動實驗室', nav_ext: '進階延伸', nav_prac: '練習', nav_quiz: '測驗', nav_log: '學習歷程', nav_dl: '下載',
    settings: '⚙️ 顯示與操作設定', s_full: '全螢幕', s_sound: '音效', s_device: '裝置', s_layout: '版面', s_lang: '語言', s_font: '字體', s_theme: '色系',
    on: '開啟', off: '關閉', auto: '自動', phone: '手機', tablet: '平板', desktop: '電腦', portrait: '直式', landscape: '橫式', small: '縮小', normal: '標準', large: '放大', system: '跟隨系統', light: '亮色', dark: '暗色',
    start: '開始學習', progress: '學習進度', done: '✅ 我讀完了', doneAlready: '已完成 ✓', viewPage: '📄 看課本原頁', next: '下一單元 →', prev: '← 上一單元',
    check: '檢查答案', showRef: '看參考答案', yourAns: '寫下你的想法…', correct: '答對了！', wrong: '再想想！', answer: '答案',
    q_start: '開始測驗', q_submit: '交卷', q_retry: '再測一次', q_review: '錯題檢討', q_time: '用時', q_score: '分數',
    log_title: '學習歷程紀錄', log_dl_csv: '下載 CSV', log_dl_txt: '下載文字檔', log_dl_json: '下載 JSON', log_clear: '清除紀錄', log_note: '寫下今天的學習心得…', log_save: '儲存心得', log_name: '姓名／座號', log_empty: '目前還沒有紀錄，開始學習吧！'
  },
  en: {
    title: 'Ownership as a Real Right', subtitle: 'Civics & Society 2 · Ch.5 §2 · Interactive course',
    nav_home: 'Home', nav_guide: 'Guide', nav_learn: 'Lessons', nav_ex: 'Exercises', nav_lab: 'Lab', nav_ext: 'Extension', nav_prac: 'Practice', nav_quiz: 'Test', nav_log: 'Log', nav_dl: 'Downloads',
    settings: '⚙️ Display & controls', s_full: 'Fullscreen', s_sound: 'Sound', s_device: 'Device', s_layout: 'Layout', s_lang: 'Language', s_font: 'Font', s_theme: 'Theme',
    on: 'On', off: 'Off', auto: 'Auto', phone: 'Phone', tablet: 'Tablet', desktop: 'Desktop', portrait: 'Portrait', landscape: 'Landscape', small: 'Small', normal: 'Normal', large: 'Large', system: 'System', light: 'Light', dark: 'Dark',
    start: 'Start learning', progress: 'Progress', done: '✅ Done reading', doneAlready: 'Completed ✓', viewPage: '📄 Textbook page', next: 'Next →', prev: '← Previous',
    check: 'Check', showRef: 'Show reference', yourAns: 'Write your thoughts…', correct: 'Correct!', wrong: 'Try again!', answer: 'Answer',
    q_start: 'Start test', q_submit: 'Submit', q_retry: 'Retry', q_review: 'Review mistakes', q_time: 'Time', q_score: 'Score',
    log_title: 'Learning log', log_dl_csv: 'Download CSV', log_dl_txt: 'Download TXT', log_dl_json: 'Download JSON', log_clear: 'Clear', log_note: 'Write today’s reflection…', log_save: 'Save note', log_name: 'Name / No.', log_empty: 'No records yet — start learning!'
  }
};
