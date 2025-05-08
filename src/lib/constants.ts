export const SOCIAL_LINKS = {
  github: "https://github.com/ThongLai",
  linkedin: "https://www.linkedin.com/in/thong-lai/",
  twitter: "https://twitter.com",
};

export type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  reference?: string;
  github?: string;
  demo?: string;
  thesis?: string;
  poster?: string;
  report?: string;
  notebook?: string;
};

export type SkillType = {
  name: string;
  icon: string;
};

export const SKILLS: SkillType[] = [
  { name: "Python", icon: "logos:python" },
  { name: "TensorFlow", icon: "logos:tensorflow" },
  { name: "Pytorch", icon: "logos:pytorch" },
  { name: "MATLAB", icon: "vscode-icons:file-type-matlab" },
  { name: "C/C++", icon: "logos:c-plusplus" },
  { name: "Java", icon: "logos:java" },
  { name: "AWS", icon: "logos:aws" },
  { name: "Azure", icon: "logos:azure" },
  { name: "Docker", icon: "logos:docker" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "JavaScript", icon: "logos:javascript" },
];

export const PROJECTS: ProjectType[] = [
  {
    title: "Explainable AI (XAI) in Deep Learning Models for Credit Card Fraud Detection",
    description: "Research on applying XAI methods for Deep Learning architectures widely known to be used in detecting credit card transaction fraud, including CNN and LSTM with attention mechanisms, trained on Sparkov's synthetic dataset. The main contribution lies in the integration and comparative analysis of three Explainable AI methods: SHAP, LIME and Anchors. Research further evaluates the effectiveness of each XAI method based on Faithfulness, Monotonicity, and Completeness metrics.",
    tags: ["Python", "TensorFlow", "XAI", "SHAP", "LIME", "Anchors"],
    image: "https://raw.githubusercontent.com/ThongLai/Credit-Card-Transaction-Fraud-Detection-Using-Explainable-AI/main/visualisation/poster.jpg",
    github: "https://github.com/ThongLai/Credit-Card-Transaction-Fraud-Detection-Using-Explainable-AI",
    thesis: "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/ThongLai/Credit-Card-Transaction-Fraud-Detection-Using-Explainable-AI/main/Report%20Documentation.pdf",
    poster: "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/ThongLai/Credit-Card-Transaction-Fraud-Detection-Using-Explainable-AI/main/poster.pdf",
  },
  {
    title: "Cluster and Cloud Benchmarking",
    description: "This project demonstrates the deployment and benchmarking of a virtual computer cluster on Microsoft Azure. The system consists of three Ubuntu 22.04 nodes (one headnode and two compute nodes) connected through a shared virtual network (HPC-vnet), using OpenMPI for parallel processing.",
    tags: ["C", "Python", "Azure", "Cloud", "OpenMPI"],
    image: "https://raw.githubusercontent.com/ThongLai/Cluster-and-Cloud-Benchmarking/main/diagrams/clusters.png",
    github: "https://github.com/ThongLai/Cluster-and-Cloud-Benchmarking",
    notebook: "https://mybinder.org/v2/gh/ThongLai/Cluster-and-Cloud-Benchmarking/main?urlpath=%2Fdoc%2Ftree%2Fdata_visualisation.ipynb",
    report: "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/ThongLai/Cluster-and-Cloud-Benchmarking/main/Laboratory%20report.pdf",
  },
  {
    title: "Learnspot Content Scraping",
    description: "A Python tool designed to automatically scrape contents for students from Year 1 to Year 10-11, 11+, and Year 12-13 (A-levels). The scraper extracts quizzes and practice exams from various educational websites using Selenium, Beautiful Soup, LLM models (OpenAI API) and OCR (MathPix API).",
    tags: ["Python", "Selenium", "BeautifulSoup", "LLM", "OpenAI"],
    image: "https://dev-learnspot.kryptomind.net/_next/image?url=%2Fimages%2Fquiz-mode.png&w=1920&q=75",
    github: "https://github.com/ThongLai/Learnspot-content-scraping",
  },
  {
    title: "Prompting AI Chat for Customer Service - Learnspot",
    description: "Using Prompting techniques to develop a chatbot system for helping customer questions. The chatbot is designed to serve as a customer service assistant for the Learnspot website, a platform that aids students in preparing for tests and connecting with tutors. Using prompting techniques to assist with customer inquiries and prevent hallucinations. The assistant is programmed to respond in a friendly and helpful manner, providing concise answers and asking relevant follow-up.",
    tags: ["Python", "LLM", "OpenAI"],
    image: "https://dev-learnspot.kryptomind.net/_next/image?url=%2Fimages%2Fai-tutor-chat.png&w=1920&q=75",
    notebook: "https://www.kaggle.com/code/minhthonglai/learnspot-prompting-aichat",
    demo: "https://www.kaggle.com/embed/minhthonglai/learnspot-prompting-aichat?kernelSessionId=192684269",
  },
  {
    title: "McGill-FIAM Asset Management Hackathon: Investment Allocation",
    description: "Our solution for the McGill-FIAM Asset Management Hackathon. The hackathon challenges participants to apply machine learning (ML) techniques and data-driven approaches to design innovative portfolio trading strategies. At LYTA Strategy Analytics, we developed a mixed long-short investment strategy using advanced ML techniques, achieving significant performance gains over traditional market benchmarks.",
    tags: ["Python", "ML", "Finance", "Big Data"],
    image: "https://storage.googleapis.com/kaggle-datasets-images/5735876/9439451/b42e38debb41a7d1e280e763876422ad/dataset-cover.png?t=2024-11-29-21-05-30",
    github: "https://github.com/ThongLai/Investment-Allocation-Analysis_McGill-Hackathon",
    report: "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/ThongLai/Investment-Allocation-Analysis_McGill-Hackathon/main/Deck%20-%20LYTA%20Strategy%20Analytics.pdf",
    notebook: "https://mybinder.org/v2/gh/ThongLai/Investment-Allocation-Analysis_McGill-Hackathon/main?urlpath=%2Fdoc%2Ftree%2Fmain_notebook.ipynb",
  },
  {
    title: "Eye-tracking in Reading Comprehension: Anomaly Detection",
    description: "Collaborating with a PhD candidate on a significant project involving the analysis of an eye-tracking dataset. My main role was to assist in deriving valuable insights from the dataset by categorizing fixations into \"First Pass\" (initial read) or \"Second Pass\" (subsequent read) sequences. Realizing unusual points while analyzing the data, I developed an Anomaly Detection mechanism for the dataset where using the Local Outlier Factor (LOF) to identify and remove outliers, establish criterias for accurately determining when a reader transitioned to the next line of text. These contributions notably improved the robustness and accuracy of the data analysis process.",
    tags: ["Python", "Anomaly Detection", "LOF", "Eye-tracking", "Data Cleaning"],  
    image: "https://media.licdn.com/dms/image/v2/D4E22AQH8BNNgxX69Hg/feedshare-shrink_1280/feedshare-shrink_1280/0/1707323195606?e=1749686400&v=beta&t=gpMrJhfXN8pSAlXXmWNRo354K2JPbUqvQbEJgUxBJYE",
    github: "https://github.com/ThongLai/Eye-tracking-in-Reading-Comprehension",
    reference: "https://www.linkedin.com/posts/minhhuyennguyen94_ccn-researchpowerhour-activity-7161032512658415618-3Hvu",
  },
  {
    title: "Spaceship Titanic - XGBoost, ANN",
    description: "To help rescue crews and retrieve the lost passengers in 2912. I am challenged to predict which passengers were transported by the anomaly using records recovered from the spaceship's damaged computer system. The dataset contains 12 features, including PassengerId, HomePlanet, CryoSleep, Cabin, Destination, Age, and more. I used XGBoost and ANN to predict the target variable (Transported) with an accuracy of 0.8.",
    tags: ["Python", "LLM", "OpenAI"],
    image: "https://www.kaggle.com/competitions/34377/images/header",
    notebook: "https://www.kaggle.com/code/minhthonglai/spaceship-titanic-xgboost-ann",
    demo: "https://www.kaggle.com/embed/minhthonglai/spaceship-titanic-xgboost-ann?kernelSessionId=186746423",
  },
  {
    title: "Work It: Exercise Recommender System",
    description: "My role in this project was to specialize in developing an effective recommender system. The recommender system utilizes Filtering Collaboration to analyze user inputs and recommend 10 exercises based on ratings that closely match the user's preferences. The model is continuously improved through online batch updates based on user feedback and references. Throughout the project, we emphasized the importance of PLESI (Privacy, Legal and Ethical, Security, and Internationalization) and addressed the issue of different genders using the app to ensure inclusivity.",
    tags: ["Python", "Flask", "ML", "Recommender System", "Collaboration Filtering", "Web App", "FastAPI", "MySQL"],
    image: "https://private-user-images.githubusercontent.com/69896600/237730126-5e2c2841-74be-4a66-8739-c98899af2afd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY2NzI5NDcsIm5iZiI6MTc0NjY3MjY0NywicGF0aCI6Ii82OTg5NjYwMC8yMzc3MzAxMjYtNWUyYzI4NDEtNzRiZS00YTY2LTg3MzktYzk4ODk5YWYyYWZkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTA4VDAyNTA0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU4YTQ3OGI1YWNhNTc1ZmMwNWMzZDJmMWNlMjQ3MjgxZWYwZmYwM2Q1MjE0YTMyZGI3NmYyYjdhYTY3MDg0NzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.dYnpRC0PqDgFFv3XvnxZ4-3Q221lrqFdwws5vr-3Esc",
    github: "https://github.com/ThongLai/WorkIt.Gym-Recommender-Website",
  },
];

export const BLOG_POSTS = [
  {
    title: "What I learnt when building an Explainable AI (XAI) System and Evaluating their Explainability",
    excerpt: "XAI: AI systems that not only perform well but also explain their decision-making process.",
    date: "2024-04-15",
    slug: "building-explainable-ai-systems",
  },
];