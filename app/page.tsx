"use client";

import {
  Package,
  Receipt,
  Globe,
  Shield,
  FileText,
  Star,
  Badge,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PageLoader } from "@/components/loader";

export default function BioLinksPage() {
  const [linkapp,setLinkapp]=useState('')
  const [load,setLoad]=useState(true)
  const initLinks = async()=>{
    const link='#'
    setLinkapp(link)
  }
  useEffect(()=>{
    initLinks().then(()=>{
      setLoad(false)
    })
  },[])
  const links = [
    {
      title: "الدفع السريع",
      description: "إتمام عمليات الدفع بسرعة وسهولة",
      url: "/",
      icon: Globe,
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      glow: "glow-purple",
    },
    {
      title: "دفع الفواتير",
      description: "قم بدفع جميع فواتيرك إلكترونياً",
      url: "/",
      icon: Receipt,
      gradient: "from-pink-600 via-rose-600 to-red-600",
      glow: "glow-pink",
    },
    {
      title: "باقات الرصيد",
      description: "اشترِ أحدث باقات الرصيد المتاحة",
      url: "/",
      icon: Package,
      gradient: "from-pink-600 via-purple-600 to-indigo-600",
      glow: "glow-pink",
    },
    {
      title: "العروض والخدمات",
      description: "اكتشف أفضل العروض والخدمات المتاحة",
      url: "/",
      icon: Star,
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      glow: "glow-cyan",
    },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-[#0e0e11] text-white"
      dir="rtl"
    >
   {   load&&<PageLoader/>}
      {/* خلفيات ضوئية داكنة */}
      <div className="absolute top-20 right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-20 left-[15%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px] animate-pulse-slow pointer-events-none"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-[40%] left-[50%] w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] animate-pulse-slow pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      <div className="container max-w-2xl mx-auto px-4 py-16 relative z-10">
        {/* البروفايل */}
        <div className="flex flex-col items-center text-center mb-16 animate-scale-in">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-2xl opacity-40 animate-pulse-slow" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity" />
            <Avatar className="h-36 w-36 relative ring-4 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all group-hover:scale-105 shadow-2xl">
              <AvatarImage src="/que-es-el-5g.webp" alt="الصورة الشخصية" />
              <AvatarFallback className="text-4xl bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 text-white font-bold">
                شع
              </AvatarFallback>
            </Avatar>

         
          </div>

          <h1 className="flex text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-l from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            الخدمات والعروض الحصرية
            <img src="/verf.png" className="-right-2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center animate-float shadow-lg shadow-blue-500/20 p-1 mx-1 w-8 h-8 " />

          </h1>
        </div>

        {/* الروابط */}
        <div className="space-y-5 mb-16">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card
                  className={`p-6 bg-[#1a1a1e]/70 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:${link.glow} hover:scale-[1.03] transition-all duration-500 cursor-pointer rounded-2xl shadow-lg shadow-black/30`}
                >
                  <div className="flex items-center gap-5 relative">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-2xl shadow-black/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 text-right">
                      <h3 className="font-bold text-xl mb-1.5 text-purple-50 group-hover:text-purple-300 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        {/* الروابط السفلية */}
        <div className="flex flex-col items-center gap-8 pt-10">
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="group">
              <div className="bg-[#1a1a1e]/70 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 hover:border-purple-400/30 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">
                    سياسة الخصوصية
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/terms" className="group">
              <div className="bg-[#1a1a1e]/70 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 hover:border-cyan-400/30 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors">
                    شروط الاستخدام
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center bg-[#1a1a1e]/70 backdrop-blur-xl px-8 py-5 rounded-2xl border border-white/10">
            <p className="text-sm text-gray-400 mb-2">
              جميع المعلومات محمية ومتوافقة مع سياسات Google Ads
            </p>
            <p className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              © 2025 جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
