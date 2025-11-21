import { Shield, Lock, Cookie, Users, Eye, Database, FileCheck, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "سياسة الخصوصية | Privacy Policy",
  description: "سياسة الخصوصية الكاملة المتوافقة مع إعلانات Google ومتطلبات حماية البيانات",
}

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: "جمع البيانات",
      content: [
        "نحن نجمع المعلومات التي تقدمها لنا مباشرة عند التسجيل أو استخدام خدماتنا.",
        "معلومات الجهاز: عنوان IP، نوع المتصفح، نظام التشغيل، وبيانات الاستخدام.",
        "ملفات تعريف الارتباط (Cookies) لتحسين تجربة المستخدم وتحليل حركة المرور.",
        "بيانات الموقع الجغرافي (إذا سمحت بذلك) لتقديم محتوى محلي مخصص.",
      ],
    },
    {
      icon: Eye,
      title: "استخدام البيانات",
      content: [
        "تقديم وتحسين خدماتنا والحفاظ على أمان المنصة.",
        "التواصل معك بشأن الخدمات والتحديثات والعروض الترويجية.",
        "تحليل استخدام الموقع لتحسين المحتوى والخدمات.",
        "الامتثال للالتزامات القانونية وحماية حقوقنا.",
      ],
    },
    {
      icon: Users,
      title: "مشاركة البيانات مع أطراف ثالثة",
      content: [
        "Google Ads وGoogle Analytics: نستخدم خدمات Google لعرض الإعلانات وتحليل حركة المرور. تخضع هذه الخدمات لسياسة خصوصية Google.",
        "مقدمو الخدمات: قد نشارك البيانات مع مقدمي خدمات موثوقين لمساعدتنا في تشغيل موقعنا.",
        "الامتثال القانوني: قد نفصح عن المعلومات عند الطلب القانوني أو لحماية حقوقنا.",
        "لا نبيع بياناتك الشخصية لأطراف ثالثة.",
      ],
    },
    {
      icon: Cookie,
      title: "ملفات تعريف الارتباط (Cookies)",
      content: [
        "نستخدم ملفات تعريف الارتباط الأساسية لتشغيل الموقع.",
        "ملفات تعريف الارتباط التحليلية (Google Analytics) لفهم كيفية استخدام الموقع.",
        "ملفات تعريف الارتباط الإعلانية (Google Ads) لعرض إعلانات مخصصة.",
        "يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.",
        "حذف ملفات تعريف الارتباط قد يؤثر على وظائف الموقع.",
      ],
    },
    {
      icon: Shield,
      title: "متطلبات Google Ads",
      content: [
        "نحن نستخدم Google Ads لعرض الإعلانات على موقعنا.",
        "تستخدم Google تقنية DoubleClick لعرض إعلانات مخصصة بناءً على زياراتك السابقة.",
        "يمكنك إلغاء الاشتراك في الإعلانات المخصصة من Google عبر صفحة إعدادات الإعلانات.",
        "للمزيد من المعلومات، قم بزيارة سياسة خصوصية Google وشروط خدمة Google Ads.",
        "نلتزم بجميع سياسات ومتطلبات Google Ads بما في ذلك قوانين حماية البيانات للولايات المتحدة (2025).",
      ],
    },
    {
      icon: Lock,
      title: "حقوقك وخياراتك",
      content: [
        "الوصول إلى بياناتك الشخصية وطلب نسخة منها.",
        "تصحيح أو تحديث معلوماتك الشخصية.",
        "حذف بياناتك الشخصية (الحق في النسيان).",
        "الاعتراض على معالجة بياناتك لأغراض التسويق.",
        "سحب موافقتك في أي وقت دون التأثير على المعالجة السابقة.",
        "تقديم شكوى إلى السلطة الإشرافية المختصة بحماية البيانات.",
      ],
    },
    {
      icon: Lock,
      title: "أمان البيانات",
      content: [
        "نستخدم تدابير أمنية تقنية وإدارية لحماية بياناتك.",
        "التشفير باستخدام SSL/TLS لحماية البيانات أثناء النقل.",
        "الوصول المحدود إلى البيانات الشخصية للموظفين المصرح لهم فقط.",
        "مراجعات أمنية منتظمة وتحديثات للأنظمة.",
        "لا يمكننا ضمان الأمان المطلق، ولكننا نبذل قصارى جهدنا.",
      ],
    },
    {
      icon: FileCheck,
      title: "الامتثال القانوني",
      content: [
        "نلتزم بالقانون العام لحماية البيانات (GDPR) للمستخدمين في الاتحاد الأوروبي.",
        "نلتزم بقانون خصوصية المستهلك في كاليفورنيا (CCPA) للمستخدمين في كاليفورنيا.",
        "نلتزم بقوانين حماية البيانات الأمريكية لعام 2025 (Delaware, Iowa, Nebraska, New Hampshire, New Jersey).",
        "نلتزم بجميع القوانين المحلية والدولية المعمول بها في مجال حماية البيانات.",
        "نقوم بمعالجة البيانات المقيدة (RDP) للمستخدمين في الولايات المشمولة بقوانين الخصوصية.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 shadow-xl">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-l from-primary via-foreground to-accent bg-clip-text text-transparent">
            سياسة الخصوصية
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
            نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك.
          </p>
          <p className="text-sm text-primary mt-4 font-medium">
            آخر تحديث: يناير 2025 | متوافق مع Google Ads وقوانين 2025
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-right flex-1">{section.title}</h2>
                </div>
                <ul className="space-y-3 mr-16">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-3">هل لديك أسئلة؟</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            إذا كان لديك أي استفسارات حول سياسة الخصوصية أو ترغب في ممارسة حقوقك، يرجى التواصل معنا على:
          </p>
          <a
            href="mailto:privacy@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg"
          >
            <Lock className="w-5 h-5" />
            privacy@example.com
          </a>
        </Card>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ArrowRight className="w-5 h-5" />
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}
