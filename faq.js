const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

faqData.forEach((val) => {
  const accordianBody = document.getElementsByClassName("accordian_body");
  const faq = document.createElement("div");
  const faq_header = document.createElement("div");
  const h3 = document.createElement("h3");
  const btn = document.createElement("button");
  const para = document.createElement("p");

  h3.innerText = val.question;
  btn.innerText = "+";
  para.innerText = val.answer;

  faq.classList.add("faq");
  faq_header.classList.add("faq_header");
  btn.classList.add("show_btn");
  para.classList.add("hidden");

  accordianBody[0].appendChild(faq);
  faq.appendChild(faq_header);
  faq_header.appendChild(h3);
  faq_header.appendChild(btn);
  faq.appendChild(para);

  btn.addEventListener("click", () => {
    if (btn.innerText == "+") {
      btn.innerText = "-";
      para.style.display = "block";
    } else {
      btn.innerText = "+";
      para.style.display = "none";
    }
  });
});
