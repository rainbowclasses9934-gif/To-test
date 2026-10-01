// questions.js

// Subject Codes Definition:
// 1 = Mathematics
// 2 = Science
// 3 = Social Science
// 4 = Reasoning

const quizDatabase = {
    1: { title: "Mathematics", tests: [] },
    2: { title: "Science", tests: [] },
    3: { title: "Social Science", tests: [] },
    4: { title: "Reasoning", tests: [] }
};

/**
 * ऑटोमेटिक टेस्ट ऐड करने वाला हेल्पर फ़ंक्शन
 * @param {number} subjectCode - विषय का कोड (1: Math, 2: Science, 3: Social, 4: Reasoning)
 * @param {string} testCode - चैप्टर या टेस्ट का कोड (उदा: "MTH_CH1_T1")
 * @param {string} testTitle - टेस्ट का नाम/टाइटल
 * @param {number} timeMinutes - टेस्ट के लिए टाइमिंग (मिनट में)
 * @param {Array} questionsArray - प्रश्नों का एरे
 */
function addTest(subjectCode, testCode, testTitle, timeMinutes, questionsArray) {
    if (quizDatabase[subjectCode]) {
        quizDatabase[subjectCode].tests.push({
            testId: testCode,
            title: testTitle,
            timeMinutes: timeMinutes,
            questions: questionsArray
        });
    }
}


// =========================================================================
// 👇 आप नीचे बस इस तरह अपना कोड पेस्ट करते जाएं (Paste Your Tests Below)
// =========================================================================
addTest(1, 6, "Practice 1", 30, [
    {
        q: "'जूठन' शीर्षक आत्मकथा के लेखक कौन हैं?",
        options: ["बालकृष्ण भट्ट", "ओमप्रकाश वाल्मीकि", "अज्ञेय", "नामवर सिंह"],
        ans: 1
    },
    {
        q: "ओमप्रकाश वाल्मीकि का जन्म कब हुआ था?",
        options: ["30 जून 1950", "20 मई 1948", "15 अगस्त 1952", "10 जनवरी 1945"],
        ans: 0
    },
    {
        q: "ओमप्रकाश वाल्मीकि का जन्म-स्थान कहाँ है?",
        options: ["बरला, मुजफ्फरनगर (उत्तर प्रदेश)", "सिमरिया, बेगूसराय (बिहार)", "जीअनपुर, वाराणसी (उत्तर प्रदेश)", "जमुई (बिहार)"],
        ans: 0
    },
    {
        q: "ओमप्रकाश वाल्मीकि की माता का क्या नाम था?",
        options: ["मकुंदी देवी", "वागेश्वरी देवी", "विद्यावती देवी", "सुभद्रा देवी"],
        ans: 0
    },
    {
        q: "ओमप्रकाश वाल्मीकि के पिता का क्या नाम था?",
        options: ["छोटनलाल", "नागर सिंह", "महेश्वर सिंह", "रंजीत सिंह"],
        ans: 0
    }
]);

