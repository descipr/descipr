import {
  AiEngineeringCard,
  AnkitaKundu,
  AtulAnand,
  Bibhuti_Jha,
  BusinessAnalystCard,
  BusinessAnalystFellowshipCard,
  businessAnalystInsights,
  BusinessFundamentals,
  Community,
  CourseCard,
  DataScientistCard,
  DoubtSupport,
  ExportData,
  FarzandKhan,
  Gaurav_Kumar,
  HiringManager,
  instagramIcon,
  Interview,
  JobSimulation,
  KshitjiJha,
  linkedIcon,
  LiveClasses,
  LiveSession,
  Lochan_raj,
  ManishSinha,
  Mentorship,
  MentorshipIcon,
  MlEngineeringCard,
  MockInterview,
  MsExcel,
  PeerLearning,
  Portfolio,
  PowerBi,
  ProblemSolving,
  python,
  ResumeReview,
  SameerDubey,
  Sampath_vinayak,
  Sayan_paul,
  sql,
  SrinivasanBalaji,
  SrishtiShiksha,
  Statistcs,
  Suryansh_abijith,
  TanoyDewanjee,
  twitterIcon,
  VasuBhasin,
  youtubeIcon,
} from "@/utils";

import { StaticImageData } from "next/image";

export interface BentoGridItemProps {
  className?: string;
  imgsrc: StaticImageData;
}

export interface Course {
  imageSrc: StaticImageData;
  title: string;
  date: string;
}

export interface TestimonialCardProps {
  profilePic: string;
  name: string;
  position: string;
  testimonial: string;
  linkedinUrl: string;
}
export interface CardData {
  key: number;
  imageUrl: StaticImageData;
  title: string;
  description: string;
  background: string;
}

export interface ScheduledClassProps {
  key: number;
  imageUrl: StaticImageData;
  title: string;
  para: string;
  date: string;
  background: string;
}

export interface LearningCardData {
  id: number;
  title: string;
  listItems: string[];
  time: string;
  para: string;
}

export interface CourseCardProps {
  imageSrc: StaticImageData;
  title: string;
  date: string;
}

interface ListItem {
  label: string;
  email?: string;
}

export interface SocialLink {
  label: string;
  iconSrc: string;
  link: string;
}

export interface OurTrainerProp {
  src: string;
  alt: string;
  link: string;
}

export interface DesciprDiffernceProps {
  src: string;
  alt: string;
  title: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface fellowship {
  label: string;
  link: string;
}

export interface CourseDetail {
  heading: string;
  description: string;
  dateOfStart: string;
  timeCommitment: string;
  cost: string;
  seatsLeft: number;
  sessionInsights: any;
  id: string;
  actualcost: string;
  imgUrl: any;
  razorPay: {
    src: string;
    paymentButtonId: string;
  };
  discount: string;
  EmiOptions: string;
  weekSchedule?: LearningCardData[];
  videoUrl: string;
}

export const companyList: ListItem[] = [
  { label: "About Us" },
  { label: "Blogs" },
  { label: "Podcasts" },
  { label: "Privacy Policy" },
  { label: "Terms of Use" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    iconSrc: linkedIcon,
    link: "https://www.linkedin.com/company/descipr/",
  },
  {
    label: "Instagram",
    iconSrc: instagramIcon,
    link: "https://www.instagram.com/team_descipr/",
  },
  {
    label: "YouTube",
    iconSrc: youtubeIcon,
    link: "https://www.youtube.com/@team_descipr",
  },
];

export const courses: Course[] = [
  {
    imageSrc: DataScientistCard,
    title: "Data Scientist Fellowship",
    date: "19 Oct – 22 Feb",
  },

  {
    imageSrc: AiEngineeringCard,
    title: "AI Engineer Fellowship",
    date: "19 Oct – 18 Jan",
  },
  {
    imageSrc: BusinessAnalystCard,
    title: "Business Analyst Fellowship",
    date: "19 Oct – 25 Jan",
  },
];
export const items = [
  {
    className: "md:col-span-2",
    imgsrc: HiringManager,
  },
  {
    className: "md:col-span-2",
    imgsrc: CourseCard,
  },
  {
    className: "md:col-span-3",
    imgsrc: Mentorship,
  },
  {
    className: "md:col-span-1",
    imgsrc: Community,
  },
];

export const testimonials = [
  {
    profilePic: FarzandKhan,
    name: "Farzand Khan",
    position: "Business Analyst",
    testimonial:
      "I got a chance to be a part of amazing online community where industry experts discuss case studies on analytic solutions across various industries. It’s a fantastic platform for brainstorming and learning.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7197913173914472448/",
  },
  {
    profilePic: Bibhuti_Jha,
    name: "Bibhuti Jha",
    position: "Decision Scientist",
    testimonial:
      "Attending the bootcamp was a transformative experience for me. Highly recommended for anyone looking to accelerate their career in AI.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7213443197241286656?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7213443197241286656%2C7226886405719777280%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287226886405719777280%2Curn%3Ali%3AugcPost%3A7213443197241286656%29",
  },
  {
    profilePic: Gaurav_Kumar,
    name: "Gaurav Kumar",
    position: "Student, IIT Guwahati",
    testimonial:
      "Thank you for the insightful session, Tanoy Dewjanee! The case study you shared was incredibly informative and address real-world problems. It provided valuable practical knowledge.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7202704501504368641?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7202704501504368641%2C7203123434413776896%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287203123434413776896%2Curn%3Ali%3Aactivity%3A7202704501504368641%29",
  },
  {
    profilePic: SrishtiShiksha,
    name: "Srishti Shikha",
    position: "Technology Consultant",
    testimonial:
      "Engaging content, expert guidance, and insights into a hiring manager’s perspective made the session outstanding.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7211084994981560320?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7211084994981560320%2C7226887320233242626%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287226887320233242626%2Curn%3Ali%3AugcPost%3A7211084994981560320%29",
  },
  {
    profilePic: Lochan_raj,
    name: "Lochan Raj T D",
    position: "Data Scientist",
    testimonial:
      "It was an informative session given by Tanoy Dewanjee and the Descipr team. Thank you for sharing insights regarding the 3 P's and case studies.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7202704501504368641?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7202704501504368641%2C7202708895214047232%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287202708895214047232%2Curn%3Ali%3Aactivity%3A7202704501504368641%29",
  },
  {
    profilePic: Suryansh_abijith,
    name: "Suryansh Abhijit",
    position: "Student, MIT",
    testimonial:
      "A very insightful session indeed. Looking forward to more case studies.",
    linkedinUrl:
      "https://www.linkedin.com/posts/suryansh-abhijit-29318a181_powerhour-activity-7202745454093082624-PNHX?utm_source=share&utm_medium=member_desktop",
  },
  {
    profilePic: Sampath_vinayak,
    name: "Sampath Vinayak",
    position: "Data Scientist",
    testimonial:
      "It was an amazing session, very informative and full of insights by Tanoy Dewanjee. Thanks for the STAR method and the real world case studies.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7202704501504368641?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7202704501504368641%2C7203396111527538689%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287203396111527538689%2Curn%3Ali%3Aactivity%3A7202704501504368641%29",
  },
  {
    profilePic: Sayan_paul,
    name: "Sayan Paul",
    position: "Student, IIEST Shibpur",
    testimonial:
      "A really insightful session. Enjoyed every bit of it. Looking forward for more sessions like this.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7205048134664642562?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7205048134664642562%2C7205095558686932992%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287205095558686932992%2Curn%3Ali%3Aactivity%3A7205048134664642562%29",
  },
];

export const careerCardData: CardData[] = [
  {
    key: 1,
    imageUrl: ResumeReview,
    title: "Resume review",
    description:
      "Enhance your resume with personalized feedback from experienced mentors. Receive tailored advice to ensure your resume stands out for your dream role.",
    background: "#F5F3FF",
  },
  {
    key: 2,
    imageUrl: Interview,
    title: "Mock Interviews with Hiring Managers",
    description:
      "Sharpen your interview skills with mock interviews led by industry experts. Gain valuable insights and boost your confidence for real-world interviews.",
    background: "#FFF0ED",
  },
  {
    key: 3,
    imageUrl: Portfolio,
    title: "Portfolio Building",
    description:
      "Craft an outstanding portfolio with our hands-on business problems that captivate hiring managers and sets you apart.",
    background: "#DBE5FF",
  },
];

export const fellowshipList: fellowship[] = [
  {
    label: "Data Scientist Fellowship",
    link: "/courses/Data%20Scientist%20Fellowship",
  },
  {
    label: "AI Engineer Fellowship",
    link: "/courses/AI%20Engineer%20Fellowship",
  },
  {
    label: "Business Analyst Fellowship",
    link: "/courses/Business%20Analyst%20Fellowship",
  },
];

export const LearningCardArray: LearningCardData[] = [
  {
    id: 1,
    title: "Business Fundamentals",
    listItems: [
      "Business Models and Customer Segmentation",
      "Products, Value Proposition and Distribution Channels",
      "Revenue Streams and Costs Models",
    ],
    time: "Week 1",
    para: "Dissecting Business of Indian Unicorns",
  },
  {
    id: 2,
    title: "Problem Solving Approach",
    listItems: [
      "Structured Problem Solving Canva",
      "Human Centered Solution Design",
      "Stakeholders Communication",
    ],
    time: "Week 2",
    para: "Designing an Data/AI Product",
  },
  {
    id: 3,
    title: "Intro to SQL",
    listItems: [
      "Fundamental SQL Statements",
      "Joins and Subqueries",
      "Conditional and Case Statements",
    ],
    time: "Week 3",
    para: "Deconstructing the Business of an E-Commerce Website",
  },
  {
    id: 4,
    title: "Business Analysis with SQL",
    listItems: [
      "Effective KPI Design Principles",
      "KPI Trees and Impact Mapping",
      "Advanced SQL Techniques for Production",
    ],
    time: "Week 4",
    para: "Building Business Tracker for an E-commerce CEO Office",
  },
  {
    id: 5,
    title: "Intro to PowerBI",
    listItems: [
      "Data Preparation and Loading Data",
      "Understanding Chart Types, Trends",
      "Creating Dashboards",
    ],
    time: "Week 5",
    para: "Building Business Tracker for an E-commerce CEO Office",
  },
  {
    id: 6,
    title: "Business Intelligence with PowerBI",
    listItems: [
      "Decision Funnel Understanding",
      "Self Serve Dashboard Design Principles",
      "Efficient Data Models for Speed and Accuracy",
    ],
    time: "Week 6",
    para: "Developing Digital Marketing Dashboard for a Fitness Brand",
  },
  {
    id: 7,
    title: "Intro to Statistics",
    listItems: [
      "Types of statistics: Descriptive vs. Inferential",
      "Basic Probability Concepts & Distributions",
      "Hypothesis Testing, p-Value, Correlation",
    ],
    time: "Week 7",
    para: "Analyzing the Business Model of a Fashion Store",
  },
  {
    id: 8,
    title: "Product Design and Insights",
    listItems: [
      "Understanding Business Metrics to Optimize",
      "Customer Cohort Analysis",
      "Statistical Analysis for Launch Decisions",
    ],
    time: "Week 8",
    para: "Designing Launch Strategy for a New E-Commerce Fashion Store",
  },
  {
    id: 9,
    title: "Intro to MS-Excel & Python",
    listItems: [
      "Data Cleaning Techniques in Excel",
      "PivotTable, Grouping, & Lookup Functions for Data Analysis in Excel",
      "Python Programming Fundamentals",
      "Data Manipulation using Pandas",
    ],
    time: "Week 9",
    para: "Developing Digital Marketing Dashboard for a Fitness Brand",
  },
  {
    id: 10,
    title: "Business Insights with Python & Excel",
    listItems: [
      "Exploratory Data Analysis",
      "Advanced Data Wrangling Techniques",
      "Detailed Insights Report Writing for Stakeholders",
    ],
    time: "Week 10",
    para: "Building Business Tracker for an E-commerce CEO Office",
  },
  {
    id: 11,
    title: "Generative AI: The Art of Prompt Engineering",
    listItems: [
      "NLP and LLM Fundamentals",
      "Efficient Prompt Engineering",
      "Automation using GenAI Tools",
    ],
    time: "Week 11",
    para: "Building a YouTube Video Summarizer App",
  },
  {
    id: 12,
    title: "Mock Interviews & Portfolio Building",
    listItems: [
      "Building your Resume",
      "Building your Project Portfolio",
      "Business Analyst Interview Questions",
    ],
    time: "Week 12",
    para: "Developing Digital Marketing Dashboard for a Fitness Brand",
  },
];

export const ScheduledClassData: ScheduledClassProps[] = [
  {
    key: 1,
    imageUrl: LiveClasses,
    title: "Live Classes",
    para: "Every Saturday and Sunday",
    date: "10:00 AM - 01:00 PM",
    background: "#FFF0ED",
  },
  {
    key: 2,
    imageUrl: DoubtSupport,
    title: "Doubt Support",
    para: "Every Wednesday",
    date: "8:00 PM – 9:00 PM",
    background: "#FFF5ED",
  },
  {
    key: 3,
    imageUrl: MentorshipIcon,
    title: "Mentorship Connect",
    para: "Once every 2 weeks",
    date: "Duration 1 hour",
    background: "#F5F3FF",
  },
  {
    key: 4,
    imageUrl: MockInterview,
    title: "Mock Interview",
    para: "Once every 6 weeks",
    date: "Duration 2 hours",
    background: "#DBE5FF",
  },
];

export const OutTrainers: OurTrainerProp[] = [
  {
    src: TanoyDewanjee,
    alt: "Image 1",
    link: "https://www.linkedin.com/in/tanoydewanjee/",
  },
  {
    src: SameerDubey,
    alt: "Image 2",
    link: "https://www.linkedin.com/in/sameerz/",
  },
  {
    src: SrinivasanBalaji,
    alt: "Image 3",
    link: "https://www.linkedin.com/in/srinivasan-balaji-912364b6/",
  },
  {
    src: AtulAnand,
    alt: "Image 4",
    link: "https://www.linkedin.com/in/atul-anand-6075bb58/",
  },
  {
    src: VasuBhasin,
    alt: "Image 5",
    link: "https://www.linkedin.com/in/vasubhasin/",
  },

  // Add more images as needed
];

export const Mentors: OurTrainerProp[] = [
  {
    src: ManishSinha,
    alt: "Image 1",
    link: "https://www.linkedin.com/in/manishsinha1bittu/",
  },
  {
    src: AnkitaKundu,
    alt: "Image 2",
    link: "https://www.linkedin.com/in/ankita-kundu-2a50ba66/",
  },
  {
    src: KshitjiJha,
    alt: "Image 3",
    link: "https://www.linkedin.com/in/ankita-kundu-2a50ba66/",
  },
];

export const DesciprDiffernce: DesciprDiffernceProps[] = [
  { src: LiveSession, alt: "Image 1", title: "Live Sessions" },
  { src: JobSimulation, alt: "Image 1", title: "Job Simulations" },
  { src: DoubtSupport, alt: "Image 1", title: "Doubt Support" },
  { src: PeerLearning, alt: "Image 1", title: "Peer Learning" },
];

export const Learning: DesciprDiffernceProps[] = [
  { src: ProblemSolving, alt: "Image 1", title: "Problem Solving Frameworks" },
  { src: BusinessFundamentals, alt: "Image 1", title: "Business Fundamentals" },
  { src: Statistcs, alt: "Image 1", title: "Statistics" },
  { src: ExportData, alt: "Image 1", title: "Exploratory Data Analysis (EDA)" },
];

export const Tools: DesciprDiffernceProps[] = [
  { src: python, alt: "Image 1", title: "Python" },
  { src: MsExcel, alt: "Image 1", title: "MS Excel" },
  { src: sql, alt: "Image 1", title: "SQL" },
  { src: PowerBi, alt: "Image 1", title: "PowerBI" },
];

export const faqData: FAQItem[] = [
  {
    question: "What's the format of the Exit exam?",
    answer:
      "The exit exam will comprise of a problem statement along with scenario based questions to assess your understanding and readiness for the professional world.",
  },
  {
    question:
      "What are the key responsibilities of a Fellow during the program?",
    answer:
      "All Fellowships require a commitment of 12-14 hours per week. As a participant in this program, you will need to attend weekly live sessions with instructors, scheduled for Saturdays and Sundays. Additionally, you will be expected to review weekly learning materials on the Descipr website and submit your work for the weekly milestone, which involves solving a job-simulated project related to that week's topic. At the end of the fellowship, you will be required to take an exit exam.",
  },
  {
    question:
      "What kind of support and resources will Fellows have access to during the program?",
    answer:
      "During your weekly live sessions with instructors, you'll benefit from insights provided by industry experts. Each learner is also paired with a mentor who will assist with case study analyses, resolve any doubts, and help plan your career path. Additionally, each week you'll receive learning materials on that week’s topic and access a real-world problem statement as part of your weekly milestone.",
  },
  {
    question:
      "If I am unable to attend the program or need to pull out at the last minute, will I get a refund?",
    answer:
      "Refund requests can only be submitted up to 2 weeks before the start date of the Fellowship. If the reason for the request is deemed valid, we will issue a full refund. Requests made after this deadline will not be processed. The Descipr team reserves the right to make the final decision on all refund requests.",
  },
];

export const courseDetails: CourseDetail[] = [
  {
    heading: "Data Scientist Fellowship",
    description:
      "Transform your career with our Data Scientist Fellowship! Master data analysis, machine learning, and real-world applications with expert mentorship and hands-on projects. Step into top roles at leading tech companies like Microsoft, Google, Amazon, etc",
    dateOfStart: "October 19, 2024",
    timeCommitment: "3.5 months",
    cost: "₹11,999",
    seatsLeft: 25,
    sessionInsights: businessAnalystInsights,
    id: "4",
    actualcost: "₹29,999",
    imgUrl: BusinessAnalystFellowshipCard,
    razorPay: {
      src: "https://checkout.razorpay.com/v1/payment-button.js",
      paymentButtonId: "pl_OhyfCxUlrva95Q",
    },
    discount: "60% OFF",
    EmiOptions: "EMI from ₹699/month available at checkout",
    videoUrl: "https://www.youtube.com/embed/yXmK7TAJ1Mc?si=dfbTOXvm8rfRi_XJ",
    weekSchedule: [
      {
        id: 1,
        title: "Business Fundamentals",
        listItems: [
          "Business Models and Customer Segmentation",
          "Products, Value Proposition and Distribution Channels",
          "Revenue Streams and Costs Models",
        ],
        time: "Week 1",
        para: "Dissecting Business of Indian Unicorns",
      },
      {
        id: 2,
        title: "Problem Solving Approach",
        listItems: [
          "Structured Problem Solving Canva",
          "Human Centered Solution Design",
          "Stakeholders Communication",
        ],
        time: "Week 2",
        para: "Designing an Data/AI Product",
      },
      {
        id: 3,
        title: "Intro to SQL",
        listItems: [
          "Fundamental SQL Statements",
          "Joins and Subqueries",
          "Conditional and Case Statements",
        ],
        time: "Week 3",
        para: "Deconstructing the Business of an E-Commerce Website",
      },
      {
        id: 4,
        title: "Business Analysis with SQL",
        listItems: [
          "Effective KPI Design Principles",
          "KPI Trees and Impact Mapping",
          "Advanced SQL Techniques for Production",
        ],
        time: "Week 4",
        para: "Building Business Tracker for an E-commerce CEO Office",
      },
      {
        id: 5,
        title: "Intro to PowerBI",
        listItems: [
          "Data Preparation and Loading Data",
          "Understanding Chart Types, Trends",
          "Creating Dashboards",
        ],
        time: "Week 5",
        para: "Building Business Tracker for an E-commerce CEO Office",
      },
      {
        id: 6,
        title: "Business Intelligence with PowerBI",
        listItems: [
          "Decision Funnel Understanding",
          "Self Serve Dashboard Design Principles",
          "Efficient Data Models for Speed and Accuracy",
        ],
        time: "Week 6",
        para: "Developing Digital Marketing Dashboard for a Fitness Brand",
      },
      {
        id: 7,
        title: "Intro to Statistics",
        listItems: [
          "Types of statistics: Descriptive vs. Inferential",
          "Basic Probability Concepts & Distributions",
          "Hypothesis Testing, p-Value, Correlation",
        ],
        time: "Week 7",
        para: "Analyzing the Business Model of a Fashion Store",
      },
      {
        id: 8,
        title: "Product Design and Insights",
        listItems: [
          "Understanding Business Metrics to Optimize",
          "Customer Cohort Analysis",
          "Statistical Analysis for Launch Decisions",
        ],
        time: "Week 8",
        para: "Designing Launch Strategy for a New E-Commerce Fashion Store",
      },
      {
        id: 9,
        title: "Intro to MS-Excel & Python",
        listItems: [
          "Data Cleaning Techniques in Excel",
          "PivotTable, Grouping, & Lookup Functions for Data Analysis in Excel",
          "Python Programming Fundamentals",
          "Data Manipulation using Pandas",
        ],
        time: "Week 9",
        para: "Developing Digital Marketing Dashboard for a Fitness Brand",
      },
      {
        id: 10,
        title: "Business Insights with Python & Excel",
        listItems: [
          "Exploratory Data Analysis",
          "Advanced Data Wrangling Techniques",
          "Detailed Insights Report Writing for Stakeholders",
        ],
        time: "Week 10",
        para: "Building Business Tracker for an E-commerce CEO Office",
      },
      {
        id: 11,
        title: "Intro to LLMs and Gen AI",
        listItems: [
          "Introduction to Neural Networks",
          "Gen AI - Key concepts and applications",
          "Real-world applications and innovations",
        ],
        time: "Week 11",
        para: "Building a YouTube Video Summarizer App",
      },
      {
        id: 12,
        title: "Generative AI: The Art of Prompt Engineering",
        listItems: [
          "NLP and LLM Fundamentals",
          "Efficient Prompt Engineering",
          "Automation using GenAI Tools",
        ],
        time: "Week 12",
        para: "Building a YouTube Video Summarizer App",
      },
      {
        id: 13,
        title: "Generative AI: Building RAG Systems",
        listItems: [
          "Design RAG Systems",
          "Agent Frameworks and Use case",
          "Considerations for LLM Models in Production",
        ],
        time: "Week 13",
        para: "Develop and Deploy an FAQBot for a Website",
      },
      {
        id: 14,
        title: "Mock Interviews & Portfolio Building",
        listItems: [
          "Building Project Portfolio & Optimizing your Resume",
          "Business Study Interview Questions",
          "Technical Interview Questions",
        ],
        time: "Week 14",
        para: "Exit Exam & Feedback",
      },
    ],
  },
  {
    heading: "AI Engineer Fellowship",
    description:
      "Kickstart your AI career with our all-inclusive fellowship! Get hands-on experience, personalized mentorship, and exclusive networking. Work on cutting-edge projects and gear up for top roles at Google, Amazon, Microsoft, and more. Your AI future starts now!",
    dateOfStart: "October 19, 2024",
    timeCommitment: "12 hours/week",
    cost: "₹9,999",
    seatsLeft: 25,
    sessionInsights: businessAnalystInsights,
    id: "3",
    actualcost: "₹19,999",
    imgUrl: BusinessAnalystFellowshipCard,

    razorPay: {
      src: "https://checkout.razorpay.com/v1/payment-button.js",
      paymentButtonId: "pl_OhyfCxUlrva95Q",
    },
    discount: "50% OFF",
    EmiOptions: "EMI from ₹485/month available at checkout",
    videoUrl: "https://www.youtube.com/embed/md7C78glaGQ?si=3o-7rtKvM_sTg8gM",
    weekSchedule: [
      {
        id: 1,
        title: "Business Fundamentals",
        listItems: [
          "Business Models and Customer Segmentation",
          "Products, Value Proposition and Distribution Channels",
          "Revenue Streams and Costs Models",
        ],
        time: "Week 1",
        para: "Dissecting Business of Indian Unicorns",
      },
      {
        id: 2,
        title: "Problem Solving Approach",
        listItems: [
          "Structured Problem Solving Canva",
          "Human Centered Solution Design",
          "Stakeholders Communication",
        ],
        time: "Week 2",
        para: "Designing an Data/AI Product",
      },
      {
        id: 3,
        title: "Intro to Statistics",
        listItems: [
          "Types of statistics: Descriptive vs. Inferential",
          "Basic Probability Concepts & Distributions",
          "Hypothesis Testing, p-Value, Correlation",
        ],
        time: "Week 3",
        para: "Analyzing the Business Model of a Fashion Store",
      },
      {
        id: 4,
        title: "Product Design and Insights",
        listItems: [
          "Understanding Business Metrics to Optimize",
          "Customer Cohort Analysis",
          "Statistical Analysis for Launch Decisions",
        ],
        time: "Week 4",
        para: "Launch Strategy for a New E-Commerce Fashion Store",
      },
      {
        id: 5,
        title: "Intro to MS-Excel & Python",
        listItems: [
          "Data Cleaning, Pivot Tables, & Lookup for Analysis",
          "Python Programming Fundamentals",
          "Data Manipulation using Pandas",
        ],
        time: "Week 5",
        para: "Analyzing the Business Model of Banks",
      },
      {
        id: 6,
        title: "Business Insights with Python",
        listItems: [
          "Exploratory Data Analysis",
          "Advanced Data Wrangling Techniques",
          "Detailed Insights Report Writing for Stakeholders",
        ],
        time: "Week 6",
        para: "Loan Application Quality Assessments for an NBFC",
      },
      {
        id: 7,
        title: "Intro to Machine Learning",
        listItems: [
          "Types: Supervised, Unsupervised, Reinforcement",
          "Data and features; Training and testing datasets",
          "Model Evaluation and Selection",
        ],
        time: "Week 7",
        para: "Analyzing the Credit System of a Bank",
      },
      {
        id: 8,
        title: "Problem Solving with ML",
        listItems: [
          "Problem Solving with ML",
          "Feature Engineering and Scaling",
          "Production Grade Modelling Techniques",
        ],
        time: "Week 8",
        para: "Credit Decision System for a Multinational Bank",
      },
      {
        id: 9,
        title: "Deploying ML Systems",
        listItems: [
          "MLOps - Batch vs Real Time Implementation",
          "Feature Pipeline, Model Registry, and Inference Pipeline",
          "Model Observability Techniques",
        ],
        time: "Week 9",
        para: "User Demand Prediction Model for a Ride Sharing App",
      },
      {
        id: 10,
        title: "Generative AI: Art of Prompt Engineering",
        listItems: [
          "NLP and LLM Fundamentals",
          "Efficient Prompt Engineering",
          "Automation using GenAI Tools",
        ],
        time: "Week 10",
        para: "Building a YouTube Video Summarizer App",
      },
      {
        id: 11,
        title: "Generative AI: Building RAG Systems",
        listItems: [
          "Design RAG Systems",
          "Agent Frameworks and Use case",
          "Considerations for LLM Models in Production",
        ],
        time: "Week 11",
        para: "Develop and Deploy an FAQBot for a Website",
      },
      {
        id: 12,
        title: "Mock Interviews & Portfolio Building",
        listItems: [
          "Building Project Portfolio & Optimizing your Resume",
          "Business Study Interview Questions",
          "Technical Interview Questions",
        ],
        time: "Week 12",
        para: "Exit Exam & Feedback",
      },
    ],
  },
  {
    heading: "Business Analyst Fellowship",
    description:
      "Kickstart your Business analyst career at top companies like Amazon, Dell, Swiggy etc. Gain hands-on experience, personalized mentorship, and exclusive networking while working on impactful projects. Your future in business analysis starts here!",
    dateOfStart: "Jul, 2024",
    timeCommitment: "10 hours/week",
    cost: "₹10,499",
    seatsLeft: 25,
    sessionInsights: businessAnalystInsights,
    id: "1",
    actualcost: "₹19,999",
    imgUrl: BusinessAnalystFellowshipCard,
    razorPay: {
      src: "https://checkout.razorpay.com/v1/payment-button.js",
      paymentButtonId: "pl_OhyVw2SEjrbyw4",
    },
    discount: "45% OFF",
    EmiOptions: "EMI from ₹499/month available at checkout",
    weekSchedule: [
      {
        id: 1,
        title: "Business Fundamentals",
        listItems: [
          "Business Models and Customer Segmentation",
          "Products, Value Proposition and Distribution Channels",
          "Revenue Streams and Costs Models",
        ],
        time: "Week 1",
        para: "Dissecting Business of Indian Unicorns",
      },
      {
        id: 2,
        title: "Problem Solving Approach",
        listItems: [
          "Structured Problem Solving Canva",
          "Human Centered Solution Design",
          "Stakeholders Communication",
        ],
        time: "Week 2",
        para: "Designing an Data/AI Product",
      },
      {
        id: 3,
        title: "Intro to SQL",
        listItems: [
          "Fundamental SQL Statements",
          "Joins and Subqueries",
          "Conditional and Case Statements",
        ],
        time: "Week 3",
        para: "Deconstructing the Business of an E-Commerce Website",
      },
      {
        id: 4,
        title: "Business Analysis with SQL",
        listItems: [
          "Effective KPI Design Principles",
          "KPI Trees and Impact Mapping",
          "Advanced SQL Techniques for Production",
        ],
        time: "Week 4",
        para: "Building Business Tracker for an E-commerce CEO Office",
      },
      {
        id: 5,
        title: "Intro to PowerBI",
        listItems: [
          "Data Preparation and Loading Data",
          "Understanding Chart Types, Trends",
          "Creating Dashboards",
        ],
        time: "Week 5",
        para: "Building Business Tracker for an E-commerce CEO Office",
      },
      {
        id: 6,
        title: "Business Intelligence with PowerBI",
        listItems: [
          "Decision Funnel Understanding",
          "Self Serve Dashboard Design Principles",
          "Efficient Data Models for Speed and Accuracy",
        ],
        time: "Week 6",
        para: "Developing Digital Marketing Dashboard for a Fitness Brand",
      },
      {
        id: 7,
        title: "Intro to Statistics",
        listItems: [
          "Types of statistics: Descriptive vs. Inferential",
          "Basic Probability Concepts & Distributions",
          "Hypothesis Testing, p-Value, Correlation",
        ],
        time: "Week 7",
        para: "Analyzing the Business Model of a Fashion Store",
      },
      {
        id: 8,
        title: "Product Design and Insights",
        listItems: [
          "Understanding Business Metrics to Optimize",
          "Customer Cohort Analysis",
          "Statistical Analysis for Launch Decisions",
        ],
        time: "Week 8",
        para: "Designing Launch Strategy for a New E-Commerce Fashion Store",
      },
      {
        id: 9,
        title: "Intro to MS-Excel & Python",
        listItems: [
          "Data Cleaning Techniques in Excel",
          "PivotTable, Grouping, & Lookup Functions for Data Analysis in Excel",
          "Python Programming Fundamentals",
          "Data Manipulation using Pandas",
        ],
        time: "Week 9",
        para: "Developing Digital Marketing Dashboard for a Fitness Brand",
      },
      {
        id: 10,
        title: "Business Insights with Python & Excel",
        listItems: [
          "Exploratory Data Analysis",
          "Advanced Data Wrangling Techniques",
          "Detailed Insights Report Writing for Stakeholders",
        ],
        time: "Week 10",
        para: "Building Business Tracker for an E-commerce CEO Office",
      },
      {
        id: 11,
        title: "Generative AI: The Art of Prompt Engineering",
        listItems: [
          "NLP and LLM Fundamentals",
          "Efficient Prompt Engineering",
          "Automation using GenAI Tools",
        ],
        time: "Week 11",
        para: "Building a YouTube Video Summarizer App",
      },
      {
        id: 12,
        title: "Mock Interviews & Portfolio Building",
        listItems: [
          "Building your Resume",
          "Building your Project Portfolio",
          "Business Analyst Interview Questions",
        ],
        time: "Week 12",
        para: "Developing Digital Marketing Dashboard for a Fitness Brand",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/mctYPXz85CA?si=sM2oW7pLucnQgfIU",
  },
];

export const FellowshipImages = [
  HiringManager,
  CourseCard,
  Mentorship,
  Community,
];
