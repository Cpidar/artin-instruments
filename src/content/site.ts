import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Code2,
  Cpu,
  Paintbrush,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  id: string;
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface PlanItem {
  id: string;
  name: string;
  description: string;
  examples: string[];
  priceUsd: number;
  offerPriceUsd?: number;
  maintenanceUsd: number;
  featured: boolean;
  advantages: string[];
  technical: string[];
  maintenanceIncludes: string[];
  ctaLabel: string;
}

export interface PlansSectionCopy {
  eyebrow: string;
  heading: string;
  intro: string;
  disclaimer: string;
  examplesLabel: string;
  advantagesLabel: string;
  technicalLabel: string;
  maintenanceLabel: string;
  maintenanceOptionalLabel: string;
  featuredBadge: string;
  detailsCta: string;
  detailsCloseLabel: string;
  detailsIntro: string;
  detailsProjectLabel: string;
  offerLabel: string;
}

export interface ProjectsFilledCopy {
  heading: string;
  cta: string;
}

export type ProjectPlaceholderVariant = "landing" | "dashboard" | "shop";

export interface ProjectPlaceholder {
  id: string;
  title: string;
  category: string;
  variant: ProjectPlaceholderVariant;
}

export interface ProjectsEmptyCopy {
  heading: string;
  cta: string;
  placeholders: ProjectPlaceholder[];
}

export interface SiteContent {
  name: string;
  shortName: string;
  email: string;
  description: string;
  nav: NavItem[];
  socials: SocialLink[];
  services: ServiceItem[];
  stats: StatItem[];
  projectsEyebrow: string;
  projectsCtaHref: string;
  projectsFilled: ProjectsFilledCopy;
  projectsEmpty: ProjectsEmptyCopy;
  projects: ProjectItem[];
  plansSection: PlansSectionCopy;
  plans: PlanItem[];
  heroPills: { label: string; icon: LucideIcon }[];
}

export const site: SiteContent = {
  name: "آشکار ساز پرتو آرتین",
  shortName: "ARTIN",
  email: "support@artin-instruments.ir",
  description:
    "ارائه خدمات تخصصی در زمینه ابزارهای آنالیزی، نشت‌یابی صنعتی و ساخت تجهیزات خلأ بالا با تکیه بر دانش متخصصان ایرانی.",
  nav: [
    { id: "inicio", href: "#inicio", label: "خانه" },
    { id: "servicios", href: "#services", label: "محصولات ما" },
    { id: "planes", href: "#planes", label: "قطعات خلأ بالا" },
    { id: "sobre-nosotros", href: "#sobre-nosotros", label: "درباره ما" },
    { id: "proyectos", href: "#proyectos", label: "فیلامنت‌ها" },
    { id: "contacto", href: "#contacto", label: "تماس با ما" },
  ],
  socials: [
    {
      name: "Facebook",
      href: "#",
      label: "فیس‌بوک آرتین",
    },
    {
      name: "Instagram",
      href: "#",
      label: "اینستاگرام آرتین",
    },
    {
      name: "LinkedIn",
      href: "#",
      label: "لینکدین آرتین",
    },
  ],
  heroPills: [
    { label: "ابزارهای آنالیزی", icon: Target },
    { label: "نشت‌یابی صنعتی", icon: Sparkles },
    { label: "تجهیزات خلأ بالا", icon: Cpu },
  ],
  services: [
    {
      title: "نشت‌یاب هلیوم مدل ALD404",
      description:
        "تشخیص نشت‌های فوق‌ریز در محیط‌های صنعتی و آزمایشگاهی با عملکردی پایدار و قابل اعتماد برای گازهای سبک مانند هلیوم-۴، هلیوم-۳ و هیدروژن.",
      icon: Cpu,
    },
    {
      title: "طیف سنج جرمی مغناطیس",
      description:
        "آنالیز کیفی و کمی با اندازه‌گیری دقیق نسبت جرم به بار (m/z) یون‌ها؛ ابزاری مرجع برای آزمایشگاه‌های پیشرفته، صنایع دارویی و پتروشیمی.",
      icon: BarChart3,
    },
    {
      title: "آشکارسازهای گازی",
      description:
        "شناسایی ذرات یونیزان (آلفا، بتا، گاما و نوترون) در مدل‌های اتاقک یونش، تناسبی و گایگر مولر با طراحی دقیق و حساسیت بالا.",
      icon: Bot,
    },
    {
      title: "طراحی و ساخت قطعات خلأ بالا",
      description:
        "تولید محفظه‌های خلأ بالا (UHV)، فیدتروهای سرامیکی و فلنج‌های مهندسی‌شده با دقت بالا؛ از ایده تا اجرا.",
      icon: Code2,
    },
  ],
  // Pilares cualitativos, no métricas. Restaurar números solo con datos reales:
  // .cursor/rules/about-stats.mdc
  stats: [
    { label: "دقت", value: "فوق‌دقیق", icon: Target },
    { label: "عملکرد", value: "پایدار", icon: Cpu },
    { label: "ساخت", value: "بومی‌سازی", icon: Code2 },
    { label: "پشتیبانی", value: "تخصصی", icon: Users },
  ],
  projectsEyebrow: "محصولات",
  projectsCtaHref: "#contacto",
  projectsFilled: {
    heading: "برخی از محصولات و توانمندی‌های ما",
    cta: "مشاهده همه محصولات",
  },
  projectsEmpty: {
    heading: "محصولاتی که می‌توانیم ارائه دهیم",
    cta: "پروژه خود را با ما در میان بگذارید",
    placeholders: [
      {
        id: "slot-landing",
        title: "نشت‌یاب هلیوم ALD404",
        category: "در حال آماده‌سازی",
        variant: "landing",
      },
      {
        id: "slot-dashboard",
        title: "طیف سنج جرمی مغناطیس",
        category: "در حال آماده‌سازی",
        variant: "dashboard",
      },
      {
        id: "slot-shop",
        title: "آشکارسازهای گازی",
        category: "در حال آماده‌سازی",
        variant: "shop",
      },
    ],
  },
  // خالی به‌صورت عمدی. فقط با پروژه‌های واقعی تکمیل شود:
  // .cursor/rules/projects-empty.mdc
  projects: [
    {
      title: "نشت‌یاب هلیوم ALD404",
      image: "/images/projects/1.png",
      alt: "",
      category: "پروژه",
    },
    {
      title: "طیف سنج جرمی مغناطیس",
      image: "/images/projects/2.png",
      alt: "",
      category: "پروژه",
    },
    {
      title: "آشکارسازهای گازی",
      image: "/images/projects/3.png",
      alt: "",
      category: "پروژه",
    },
  ],
  plansSection: {
    eyebrow: "محصولات",
    heading: "محصولات و راهکارهای آرتین",
    intro:
      "محصولات آرتین بر پایه دانش متخصصان ایرانی طراحی و ساخته می‌شوند: از نشت‌یاب هلیوم و طیف‌سنج جرمی تا آشکارسازهای گازی و قطعات خلأ بالا.",
    disclaimer:
      "مشخصات فنی، زمان تحویل و شرایط پشتیبانی برای هر محصول به‌صورت اختصاصی و از طریق تماس با ما اعلام می‌شود.",
    examplesLabel: "کاربرد",
    advantagesLabel: "مزایا",
    technicalLabel: "مشخصات فنی",
    maintenanceLabel: "پشتیبانی و نگهداری",
    maintenanceOptionalLabel: "پشتیبانی اختیاری",
    featuredBadge: "پیشنهاد ما",
    detailsCta: "مشاهده جزئیات",
    detailsCloseLabel: "بستن",
    detailsIntro:
      "جزئیات فنی محصول و خدمات پشتیبانی، به‌صورت مشخص.",
    detailsProjectLabel: "مشخصات محصول",
    offerLabel: "پیشنهاد فعلی",
  },
  plans: [
    {
      id: "landing",
      name: "نشت‌یاب هلیوم ALD404",
      description:
        "نشت‌یاب هلیومی برای تشخیص نشت‌های فوق‌ریز با حساسیت بالا، پاسخ‌دهی سریع و پایداری در شرایط کاری مختلف.",
      examples: [
        "کنترل کیفیت صنعتی",
        "آزمون نشتی",
        "فرایندهای خلأ",
        "آزمایشگاه‌های تخصصی",
      ],
      priceUsd: 0,
      maintenanceUsd: 0,
      featured: true,
      advantages: [
        "حساسیت بالا در شناسایی نشت‌های بسیار ریز",
        "پایداری در اندازه‌گیری",
        "پاسخ‌دهی سریع",
        "قابلیت اطمینان در شرایط کاری مختلف",
      ],
      technical: [
        "تشخیص گازهای سبک: هلیوم-۴، هلیوم-۳ و هیدروژن",
        "طراحی مهندسی‌شده",
        "عملکرد پایدار صنعتی و آزمایشگاهی",
        "مناسب کنترل کیفیت و آزمون نشتی",
      ],
      maintenanceIncludes: [
        "پشتیبانی فنی تخصصی",
        "بازسازی و تعمیر تجهیزات حساس",
        "تأمین قطعات یدکی",
        "مشاوره فنی",
      ],
      ctaLabel: "درخواست مشاوره",
    },
    {
      id: "corporativo",
      name: "طیف سنج جرمی مغناطیس",
      description:
        "طیف‌سنج جرمی با یونیزاسیون پیشرفته و سنجش فوق‌دقیق نسبت جرم به بار (m/z) برای آنالیز کیفی و کمی.",
      examples: [
        "آزمایشگاه‌های پیشرفته",
        "صنایع دارویی",
        "صنایع پتروشیمی",
        "مراکز تحقیقاتی",
      ],
      priceUsd: 0,
      maintenanceUsd: 0,
      featured: false,
      advantages: [
        "آنالیز کیفی (تشخیص فرمول ساختاری)",
        "آنالیز کمی (اندازه‌گیری غلظت در مقیاس‌های ناچیز)",
        "پایداری مغناطیسی بالا",
        "ابزاری مطمئن و مرجع",
      ],
      technical: [
        "فناوری پیشرفته یونیزاسیون",
        "سنجش دقیق نسبت جرم به بار (m/z)",
        "تفکیک و آشکارسازی پایدار یون‌ها",
        "طراحی برای کاربردهای آزمایشگاهی و صنعتی",
      ],
      maintenanceIncludes: [
        "پشتیبانی فنی تخصصی",
        "تعمیر و بازسازی تجهیزات",
        "تأمین قطعات یدکی",
        "مشاوره فنی",
      ],
      ctaLabel: "درخواست مشاوره",
    },
    {
      id: "ecommerce",
      name: "آشکارسازهای گازی و قطعات خلأ بالا",
      description:
        "آشکارسازهای گازی برای شناسایی ذرات یونیزان و ساخت قطعات خلأ بالا (UHV) شامل محفظه‌ها، فیدتروهای سرامیکی و فلنج‌های مهندسی‌شده.",
      examples: [
        "صنایع هسته‌ای و پرتویی",
        "آزمایشگاه‌های تخصصی",
        "تجهیزات خلأ بالا",
        "پروژه‌های مهندسی از ایده تا اجرا",
      ],
      priceUsd: 0,
      maintenanceUsd: 0,
      featured: false,
      advantages: [
        "شناسایی ذرات یونیزان (آلفا، بتا، گاما و نوترون)",
        "مدل‌های اتاقک یونش، تناسبی و گایگر مولر",
        "طراحی دقیق و حساسیت بالا",
        "بومی‌سازی قطعات تحریمی با کیفیت جهانی",
      ],
      technical: [
        "تیوب فلزی (کاتد) و سیم هم‌محور (آند) با دقت بالا",
        "پر شدن با ترکیبی از گازهای نجیب و فرونشان",
        "محفظه‌های خلأ بالا (UHV)",
        "فیدتروهای سرامیکی و فلنج‌های مهندسی‌شده",
      ],
      maintenanceIncludes: [
        "پشتیبانی فنی تخصصی",
        "تعمیر، بازسازی (Rebuild) و ساخت فیلامنت‌های تنگستن",
        "تأمین قطعات یدکی",
        "مشاوره فنی",
      ],
      ctaLabel: "درخواست مشاوره",
    },
  ],
};
