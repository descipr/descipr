import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import Phone from "@/public/Images/call.svg";
import Whatsapp from "@/public/Images/Whatsapp.svg";
import headerLogo from "@/public/Images/headerLogo.svg";
import linkedIcon from "@/public/Images/linkedin-svg.svg";
import instagramIcon from "@/public/Images/instagram_icon.svg";
import youtubeIcon from "@/public/Images/youtube-icon.svg";
import BackgroundLogo from "@/public/Images/backgroundLogo.svg";
import foundation from "@/public/Images/Foundation.svg";
import intermidiate from "@/public/Images/Intermediate.svg";
import advance from "@/public/Images/Advanced.svg";
import CalenderIcon from "@/public/Images/calenderIcon.svg";
import ArrowIcon from "@/public/Images/arrow.svg";
import White_right_Arrow from "@/public/Images/white_arrow.svg";
import HsbcLogo from "@/public/Images/Hsbc.svg";
import workshop_data_tanoy from "@/public/Images/tanoy_workshop_data.svg";
import Carousel_learner_1 from "@/public/Images/carousel-learner-1.svg";
import Carousel_learner_2 from "@/public/Images/carousel-learner-2.svg";
import Carousel_learner_3 from "@/public/Images/carousel-learner-3.svg";
import Carousel_learner_4 from "@/public/Images/carousel-learner-4.svg";
import Carousel_learner_5 from "@/public/Images/carousel-learner-5.svg";
import Carousel_learner_6 from "@/public/Images/carousel-learner-6.svg";
import Carousel_learner_7 from "@/public/Images/carousel-learner-7.svg";
import Carousel_learner_8 from "@/public/Images/carousel-learner-8.svg";
import Carousel_learner_9 from "@/public/Images/carousel-learner-9.svg";
import Carousel_learner_10 from "@/public/Images/carousel-learner-10.svg";
import hsbc_logo_white from "@/public/Images/HSBC-logo_white.svg";
import sameer_dubey_workshop from "@/public/Images/sameer_dubey_workshop.svg";
import home_credit from "@/public/Images/home-credit.svg";
import atul_annand from "@/public/Images/atul-annand-workshop.svg";
import corporate_partnership from "@/public/Images/coparate_partnership.svg";
import campus_connect from "@/public/Images/campus-connect.svg";
import data_science from "@/public/Images/data-scinence-interview.svg";
import sql_case_study from "@/public/Images/sql-case-study.svg";
import KoushikMitra from "@/public/Images/koushik_mitra.png";
import adithiaV from "@/public/Images/Adithia_v.png";
import samikshaGebise from "@/public/Images/samiksha_gebise.png";
import debjaniMajumder from "@/public/Images/debjani_majumder.png";
import charuGoyal from "@/public/Images/charu_goyal.png";
import pranoyDewanjee from "@/public/Images/pranoy_dewanjee.png";
import FarzandKhan from "@/public/Images/Farzand_khan.jpg";
import Bibhuti_Jha from "@/public/Images/Bibhuti_Jha.svg";
import Gaurav_Kumar from "@/public/Images/GauravKumar.svg";
import SrishtiShiksha from "@/public/Images/Srishti_Shiksha.svg";
import Lochan_raj from "@/public/Images/Lochan_raj.jpg";
import Suryansh_abijith from "@/public/Images/suryansh_abijith.jpg";
import Sampath_vinayak from "@/public/Images/sampath_vinayak.jpg";
import Sayan_paul from "@/public/Images/Sayan_paul.jpg";
import linkedin from "@/public/Images/Linkedin.svg";
import HiringManager from "@/public/Images/HiringManager.svg";
import Mentorship from "@/public/Images/Mentorship.svg";
import CourseCard from "@/public/Images/CourseCard.svg";
import Community from "@/public/Images/Community.svg";
import HiringManagerMobile from "@/public/Images/hiring_manager_mobile.svg";
import CourseCardMobile from "@/public/Images/Course_card_mobile.svg";
import MentorshipMobile from "@/public/Images/Mentorship_mobile.svg";
import CommunityMobile from "@/public/Images/Community_mobile.svg";
import ResumeReview from "@/public/Images/ResumeReview.svg";
import Interview from "@/public/Images/Mock-interview'.svg";
import Portfolio from "@/public/Images/Portfolio-Building.svg";
import QuizBackgroud from "@/public/Images/QuizBackground.svg";
import QuizArrow from "@/public/Images/Quiz-arrow.svg";
import QuizLogo from "@/public/Images/QuizLogo .svg";
import TanoyDewanjee from "@/public/Images/TanoyDewanjee.svg";
import SameerDubey from "@/public/Images/SameerDubey.svg";
import SrinivasanBalaji from "@/public/Images/SrinivasanBalaji.svg";
import AtulAnand from "@/public/Images/AtulAnand.svg";
import VasuBhasin from "@/public/Images/VasuBhasin.svg";
import samridhi from "@/public/Images/samridhi.svg";
import ManishSinha from "@/public/Images/ManishSinha.svg";
import AnkitaKundu from "@/public/Images/AnkitaKundu.svg";
import KshitjiJha from "@/public/Images/KshitijiJha.svg";
import DataScientistInsights from "@/public/Images/data_scientist_insights.svg";
import BusinessAnalystFellowshipCard from "@/public/Images/BusinessAnalystFellowshipBackground.svg";
import ProblemSolving from "@/public/Images/Problem Solving Frameworks.svg";
import BusinessFundamentals from "@/public/Images/Business Fundamentals.svg";
import ModelBuilding from "@/public/Images/ML Models.png";
import largeLanguageModel from "@/public/Images/llm.png";
import python from "@/public/Images/Python.svg";
import MsExcel from "@/public/Images/excel.svg";
import MlLibrary from "@/public/Images/ML Libraries.png";
import generativeModel from "@/public/Images/Generative Models.png";
import businessAnalystInsights from "@/public/Images/Business_analyst_insights_image.svg";
import transformers from "@/public/Images/Transformers.png";
import Statistcs from "@/public/Images/Statistics.svg";
import ExportData from "@/public/Images/Exploratory Data Analysis.svg";
import sql from "@/public/Images/sql.svg";
import PowerBi from "@/public/Images/1.svg";
import Template16 from "@/public/Images/Cert Template 16.svg";
import PriceCardImage from "@/public/Images/PriceCardImage.svg";
import DownloadIcon from "@/public/Images/DownloadIcon.svg";
import LiveClasses from "@/public/Images/LiveClasses.svg";
import DoubtSupport from "@/public/Images/DoubtSupport.svg";
import MentorshipIcon from "@/public/Images/MentorshipIcon.svg";
import MockInterview from "@/public/Images/MockInterview.svg";
import LiveSession from "@/public/Images/LiveSession.svg";
import JobSimulation from "@/public/Images/JobStimulation.svg";
import DoubtSupportIcon from "@/public/Images/DoubtSupportIcon.svg";
import PeerLearning from "@/public/Images/PeerLearning.svg";
import durationIcon from "@/public/Images/duration.svg";
import mentorshipIcon from "@/public/Images/mentorship-icon.svg";
import portfolioIcon from "@/public/Images/portfolio-icon.svg";
import Analitical from "@/public/Images/analytical framework.png";
import googleBitQuery from "@/public/Images/google-bigquery-logo-1.svg";
import Tanoy_profile from "@/public/Images/Tanoy_img.svg";
import OpenAi from "@/public/Images/Open ai.png";
import promtEngineering from "@/public/Images/prompt-engineering-logo.png";
import jupitorNoteBookLogo from "@/public/Images/jupyter-seeklogo.svg";
import matplotlibLogo from "@/public/Images/matplotlib.jpg";
import Atul_profile from "@/public/Images/Atul_profile.png";
import Big_Query_sql_workshop from "@/public/Images/BigQuery_sql.jpg";
import home_credit_company_logo from "@/public/Images/home_credit_logo.svg";
import sammer_dubey_profile from "@/public/Images/sammer_dubey_profile.svg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cleanUpSlug = (slug: string): string => {
  let decodedSlug = decodeURIComponent(slug);
  decodedSlug = decodedSlug.replace(/\s+/g, " ");

  if (decodedSlug.toLowerCase().startsWith("course ")) {
    decodedSlug = decodedSlug.slice(7);
  }

  return decodedSlug.toLowerCase();
};

export {
  sammer_dubey_profile,
  home_credit_company_logo,
  Atul_profile,
  Big_Query_sql_workshop,
  matplotlibLogo,
  jupitorNoteBookLogo,
  promtEngineering,
  OpenAi,
  Tanoy_profile,
  googleBitQuery,
  Analitical,
  durationIcon,
  mentorshipIcon,
  portfolioIcon,
  LiveSession,
  JobSimulation,
  DoubtSupportIcon,
  PeerLearning,
  LiveClasses,
  DoubtSupport,
  MentorshipIcon,
  MockInterview,
  DownloadIcon,
  PriceCardImage,
  Template16,
  PowerBi,
  sql,
  ExportData,
  Statistcs,
  transformers,
  DataScientistInsights,
  BusinessAnalystFellowshipCard,
  ProblemSolving,
  BusinessFundamentals,
  ModelBuilding,
  largeLanguageModel,
  python,
  MsExcel,
  MlLibrary,
  generativeModel,
  businessAnalystInsights,
  ManishSinha,
  AnkitaKundu,
  KshitjiJha,
  TanoyDewanjee,
  SameerDubey,
  SrinivasanBalaji,
  AtulAnand,
  VasuBhasin,
  samridhi,
  QuizBackgroud,
  QuizArrow,
  QuizLogo,
  Interview,
  Portfolio,
  ResumeReview,
  HiringManagerMobile,
  CourseCardMobile,
  MentorshipMobile,
  CommunityMobile,
  HiringManager,
  Mentorship,
  CourseCard,
  Community,
  linkedin,
  SrishtiShiksha,
  Lochan_raj,
  Suryansh_abijith,
  Sampath_vinayak,
  Sayan_paul,
  Phone,
  Whatsapp,
  headerLogo,
  linkedIcon,
  instagramIcon,
  youtubeIcon,
  BackgroundLogo,
  foundation,
  intermidiate,
  advance,
  ArrowIcon,
  CalenderIcon,
  White_right_Arrow,
  HsbcLogo,
  workshop_data_tanoy,
  Carousel_learner_1,
  Carousel_learner_2,
  Carousel_learner_3,
  Carousel_learner_4,
  Carousel_learner_5,
  Carousel_learner_6,
  Carousel_learner_7,
  Carousel_learner_8,
  Carousel_learner_9,
  Carousel_learner_10,
  hsbc_logo_white,
  sameer_dubey_workshop,
  home_credit,
  atul_annand,
  corporate_partnership,
  campus_connect,
  sql_case_study,
  data_science,
  KoushikMitra,
  adithiaV,
  samikshaGebise,
  debjaniMajumder,
  charuGoyal,
  pranoyDewanjee,
  FarzandKhan,
  Bibhuti_Jha,
  Gaurav_Kumar,
};
