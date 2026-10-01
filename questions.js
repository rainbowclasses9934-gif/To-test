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

// 1. Mathematics (Subject Code: 1)
addTest(1, "MATH_CH01_T01", "Mock Test 1 (Algebra & Roots)", 15, [
    {
        q: "What is the value of \\(\\sqrt{144} + \\sqrt{25}\\)?",
        options: ["17", "19", "21", "13"],
        ans: 0
    },
    {
        q: "Solve equation: <code>let x = 10; x += 5;</code> What is x?",
        options: ["10", "15", "5", "Error"],
        ans: 1
    }
]);

addTest(1, "MATH_CH02_T01", "Mock Test 2 (Geometry)", 20, [
    {
        q: "What is the area of a circle with radius \\(r\\)?",
        options: ["\\(2\\pi r\\)", "\\(\\pi r^2\\)", "\\(\\frac{1}{2}\\pi r^2\\)", "\\(\\pi d\\)"],
        ans: 1
    }
]);

// 2. Science (Subject Code: 2)
addTest(2, "SCI_CH01_T01", "Physics Basic Test", 10, [
    {
        q: "What is the SI unit of Force?",
        options: ["Joule", "Newton", "Pascal", "Watt"],
        ans: 1
    }
]);

// 3. Social Science (Subject Code: 3)
// यहाँ आप Subject Code 3 के लिए पेस्ट करेंगे

// 4. Reasoning (Subject Code: 4)
// यहाँ आप Subject Code 4 के लिए पेस्ट करेंगे
