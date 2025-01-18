const quizData = [
  {
    question: "What does VPC Peering primarily enable?",
    options: [
      "a) Secure connections over the public internet.",
      "b) High-speed, dedicated connections to Google Cloud.",
      "c) Private connectivity between two VPC networks.",
      "d) Connecting an on-premises network to Google Cloud."
    ],
    answer: "c"
  },
  {
    question: "Which of the following is crucial for VPC Peering?",
    options: [
      "a) Overlapping subnet ranges between peered VPCs.",
      "b) Using public IP addresses.",
      "c) Non-overlapping subnet ranges between peered VPCs.",
      "d) Using IPsec VPN tunnels."
    ],
    answer: "c"
  },
  {
    question: "What technology does Cloud VPN use to secure connections?",
    options: [
      "a) TLS encryption",
      "b) SSH encryption",
      "c) IPsec VPN tunnels",
      "d) BGP routing"
    ],
    answer: "c"
  },
  {
    question: "According to the document, what is the uptime SLA for Cloud VPN (Classic) and HA VPN?",
    options: [
      "a) 99.99% for Classic VPN, 99.9% for HA VPN.",
      "b) 99.9% for both Classic and HA VPN.",
      "c) 99.9% for Classic VPN, 99.99% for HA VPN.",
      "d) 99.99% for both Classic and HA VPN."
    ],
    answer: "c"
  },
  {
    question: "Which gateway type uses two external IP addresses for redundancy?",
    options: [
      "a) Classic VPN.",
      "b) HA VPN.",
      "c) Dedicated Interconnect.",
      "d) Partner Interconnect."
    ],
    answer: "b"
  },
  {
    question: "What is the recommended maximum transmission unit (MTU) for an on-premises VPN gateway connecting to Cloud VPN, as stated in the document?",
    options: [
      "a) 1500 bytes.",
      "b) 1460 bytes.",
      "c) 9000 bytes.",
      "d) No specific MTU."
    ],
    answer: "b"
  },
  {
    question: "What are the two flavors of Cloud Interconnect?",
    options: [
      "a) Classic and HA.",
      "b) Private and Public.",
      "c) Dedicated and Partner.",
      "d) Direct and Indirect."
    ],
    answer: "c"
  },
  {
    question: "Which type of Cloud Interconnect is better suited for lower bandwidth requirements (starting from 50 Mbps)?",
    options: [
      "a) Dedicated Interconnect.",
      "b) Partner Interconnect.",
      "c) Classic Interconnect.",
      "d) HA Interconnect."
    ],
    answer: "b"
  },
  {
    question: "What routing protocol is used by Cloud Interconnect to exchange routes?",
    options: [
      "a) Static routing.",
      "b) OSPF",
      "c) RIP",
      "d) BGP"
    ],
    answer: "d"
  },
  {
    question: "What is the key benefit of HA VPN?",
    options: [
      "a) Lower cost compared to classic VPN",
      "b) Connecting two subnets in the same VPC network.",
      "c) 99.99% service availability.",
      "d) Direct physical connection to a Google co-location facility."
    ],
    answer: "c"
  },
  {
    question: "For full redundancy, how many tunnels are typically required for HA VPN?",
    options: [
      "a) 1 tunnel.",
      "b) 2 or 4 tunnels.",
      "c) 3 tunnels.",
      "d) 5 tunnels."
    ],
    answer: "b"
  }
];

const quizForm = document.getElementById("quiz-form");
const resultsDiv = document.getElementById("results");

// Dynamically generate quiz questions
quizData.forEach((q, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  questionDiv.innerHTML = `
    <p>${index + 1}. ${q.question}</p>
    <div class="options">
      ${q.options.map(opt => `
        <label>
          <input type="radio" name="question${index}" value="${opt[0]}">
          ${opt}
        </label>
      `).join("")}
    </div>
  `;

  quizForm.appendChild(questionDiv);
});

// Submit quiz
document.getElementById("submit-btn").addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption && selectedOption.value === q.answer) {
      score++;
    }
  });

  // Display results and answer key
  resultsDiv.innerHTML = `
    <p>Your score: ${score} out of ${quizData.length}</p>
    <p>Answer Key:</p>
    <ol>
      ${quizData.map((q, index) => {
        const correctOption = q.options.find(opt => opt.startsWith(q.answer));
        return `<li>${index + 1}. ${correctOption}</li>`;
      }).join("")}
    </ol>
  `;
});