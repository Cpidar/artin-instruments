"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, ChevronRight } from "lucide-react";
import Image from "next/image";
import IconRipple from "../ui/animate-icon-button";

export default function ImageHotspotFeatures() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      x: 25, // percentage from left
      y: 20, // percentage from top
      title: "تشخیص نشت‌های فوق‌ریز",
      description:
        "حساسیت بالا در شناسایی نشت‌های بسیار ریز در محیط‌های صنعتی و آزمایشگاهی",
    },
    {
      id: 2,
      x: 60,
      y: 30,
      title: "تشخیص گازهای سبک",
      description:
        "تشخیص دقیق نشت هلیوم-۴، هلیوم-۳ و هیدروژن با طراحی مهندسی‌شده",
    },
    {
      id: 3,
      x: 75,
      y: 60,
      title: "پاسخ‌دهی سریع",
      description: "امکان تشخیص سریع و دقیق نشت گازهای سبک در شرایط کاری مختلف",
    },
    {
      id: 4,
      x: 40,
      y: 70,
      title: "عملکرد پایدار",
      description:
        "پایداری در اندازه‌گیری و قابلیت اطمینان بالا برای کنترل کیفیت و آزمون نشتی",
    },
    {
      id: 5,
      x: 15,
      y: 55,
      title: "کاربرد صنعتی و آزمایشگاهی",
      description:
        "مناسب فرایندهای خلأ، آزمون نشتی و کنترل کیفیت در صنعت و آزمایشگاه",
    },
  ];

  const additionalFeatures = [
    {
      title: "طیف سنج جرمی مغناطیس",
      description:
        "آنالیز کیفی و کمی با سنجش فوق‌دقیق نسبت جرم به بار (m/z) و پایداری مغناطیسی بالا",
    },
    {
      title: "آشکارسازهای گازی",
      description:
        "شناسایی ذرات یونیزان (آلفا، بتا، گاما و نوترون) در مدل‌های اتاقک یونش، تناسبی و گایگر مولر",
    },
    {
      title: "طراحی و ساخت قطعات خلأ بالا",
      description:
        "محفظه‌های خلأ بالا (UHV)، فیدتروهای سرامیکی و فلنج‌های مهندسی‌شده؛ از ایده تا اجرا",
    },
  ];

  return (
    <section className="bg-background w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="relative w-80% overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
          {/* Left side - Interactive image */}
          <div className="relative">
            <div className="bg-muted/50 relative overflow-hidden rounded-lg border">
              <img
                src="/images/projects/3.png"
                alt="نشت‌یاب هلیوم مدل ALD404 با نشانگرهای ویژگی"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Hotspots */}
              {hotspots.map((hotspot) => (
                <div
                  key={hotspot.id}
                  className="absolute"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  onMouseEnter={() => setActiveHotspot(hotspot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  <IconRipple
                    icon={PlusCircle}
                    iconSize={24}
                    iconColor="#ddd"
                    borderColor="#ddd"
                    inset="10px"
                  />

                  {/* Feature tooltip */}
                  <div
                    className={`absolute z-20 w-48 rounded-lg border bg-white/95 p-3 shadow-lg backdrop-blur-sm transition-all duration-200 ${
                      activeHotspot === hotspot.id
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    } ${
                      hotspot.x > 50 ? "right-full mr-2" : "left-full ml-2"
                    } ${hotspot.y > 50 ? "bottom-0" : "top-0"}`}
                  >
                    <h4 className="font-medium">{hotspot.title}</h4>
                    <p className="text-muted-foreground text-xs">
                      {hotspot.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Accent decorative elements */}
              <div className="bg-primary/20 absolute top-0 right-0 h-16 w-16 rounded-full blur-2xl"></div>
              <div className="bg-primary/20 absolute bottom-0 left-0 h-16 w-16 rounded-full blur-2xl"></div>
            </div>

            <div className="text-muted-foreground mt-4 text-center text-sm">
              <p>برای مشاهده ویژگی‌ها روی نشانگرها نگه دارید</p>
            </div>
          </div>

          {/* Right side - Content */}

        </div>
      </div>
    </section>
  );
}
