import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Globe,
  Shield,
  FileText,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export default function BioLinksPage() {
  const links = [
    {
      title: 'الدفع السريع',
      description: 'إتمام عمليات الدفع بسرعة وسهولة',
      url: 'https://example.com/quick-pay',
      icon: Lightning, // اختر أيقونة مناسبة من مكتبتك
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      glow: 'glow-purple',
    },
    {
      title: 'دفع الفواتير',
      description: 'قم بدفع جميع فواتيرك إلكترونياً',
      url: 'https://example.com/bills',
      icon: Receipt, // أيقونة مناسبة مثل فاتورة
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      glow: 'glow-pink',
    },
    {
      title: 'باقات الرصيد',
      description: 'اشترِ أحدث باقات الرصيد المتاحة',
      url: 'https://example.com/packages',
      icon: Package, // أيقونة باقات
      gradient: 'from-pink-500 via-purple-500 to-indigo-500',
      glow: 'glow-pink',
    },
    {
      title: 'العروض والخدمات',
      description: 'اكتشف أفضل العروض والخدمات المتاحة',
      url: 'https://example.com/offers',
      icon: Star, // أيقونة للعروض
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      glow: 'glow-cyan',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" dir="rtl">
      <div className="absolute top-20 right-[10%] w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-20 left-[15%] w-[500px] h-[500px] bg-pink-500/25 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-[40%] left-[50%] w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"
        style={{ animationDelay: '2s' }}
      />

      <div className="container max-w-2xl mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 animate-scale-in">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse-slow" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
            <Avatar className="h-36 w-36 relative ring-4 ring-purple-500/30 group-hover:ring-purple-500/50 transition-all group-hover:scale-105">
              <AvatarImage
                src="/professional-arabic-brand-logo.jpg"
                alt="الصورة الشخصية"
              />
              <AvatarFallback className="text-4xl bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 text-white font-bold">
                شع
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-float">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full mb-6 border border-purple-500/20 animate-shimmer">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              متوافق 100% مع إعلانات Google
            </span>
            <Zap className="w-4 h-4 text-cyan-400" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance bg-gradient-to-l from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient leading-tight">
            الشعار أو الاسم
          </h1>
          <p className="text-foreground/90 text-xl md:text-2xl mb-3 text-pretty max-w-md leading-relaxed font-medium">
            مرحباً بك في صفحة الروابط الخاصة بنا
          </p>
          <p className="text-muted-foreground text-base md:text-lg text-pretty max-w-lg leading-relaxed">
            تواصل معنا عبر قنواتنا المختلفة واكتشف محتوانا المميز
          </p>
        </div>

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
                  className={`p-6 glass hover:scale-[1.03] transition-all duration-500 cursor-pointer border-border/50 hover:border-purple-500/30 hover:${link.glow} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>

                  <div className="flex items-center gap-5 relative">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="font-bold text-xl mb-1.5 group-hover:text-purple-400 transition-colors text-foreground">
                        {link.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-8 pt-10">
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="group">
              <div className="glass px-6 py-4 rounded-2xl hover:scale-105 transition-all duration-300 border border-border/50 hover:border-purple-500/30 hover:glow-purple">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                    سياسة الخصوصية
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/terms" className="group">
              <div className="glass px-6 py-4 rounded-2xl hover:scale-105 transition-all duration-300 border border-border/50 hover:border-cyan-500/30 hover:glow-cyan">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                    شروط الاستخدام
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center glass px-8 py-5 rounded-2xl border border-border/30">
            <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
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
