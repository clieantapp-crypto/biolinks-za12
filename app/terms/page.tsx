import { FileText, Shield, AlertTriangle, Scale, UserCheck, Ban, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "شروط الاستخدام والأمان | Terms of Service",
  description: "شروط الاستخدام وسياسات الأمان المتوافقة مع معايير Google",
}

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: "قبول الشروط",
      content: [
        "باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام.",
        "إذا كنت لا توافق على أي جزء من هذه الشروط، يجب عليك عدم استخدام الموقع.",
        "نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق.",
        "استمرارك في استخدام الموقع بعد التعديلات يعني موافقتك على الشروط الجديدة.",
      ],
    },
    {
      icon: UserCheck,
      title: "استخدام الخدمة",
      content: [
        "يجب أن يكون عمرك 18 عاماً على الأقل لاستخدام هذه الخدمة.",
        "أنت مسؤول عن الحفاظ على سرية حسابك وكلمة المرور.",
        "توافق على استخدام الموقع فقط لأغراض قانونية ومشروعة.",
        "يُحظر استخدام الموقع لأي نشاط ينتهك القوانين المحلية أو الدولية.",
        "يُحظر محاولة الوصول غير المصرح به إلى أي جزء من الموقع أو الخوادم.",
      ],
    },
    {
      icon: Ban,
      title: "المحتوى المحظور",
      content: [
        "يُحظر نشر محتوى غير قانوني أو مسيء أو تمييزي.",
        "يُحظر نشر محتوى إباحي أو عنيف أو يحرض على الكراهية.",
        "يُحظر انتهاك حقوق الملكية الفكرية للآخرين.",
        "يُحظر نشر معلومات شخصية للآخرين دون إذن.",
        "يُحظر البريد العشوائي والإعلانات غير المرغوب فيها.",
        "نحتفظ بالحق في إزالة أي محتوى ينتهك هذه القواعد دون إشعار.",
      ],
    },
    {
      icon: Shield,
      title: "الأمان وحماية البيانات",
      content: [
        "نستخدم تقنيات التشفير المتقدمة (SSL/TLS) لحماية بياناتك.",
        "نتبع أفضل الممارسات الأمنية لحماية معلوماتك الشخصية.",
        "يجب عليك استخدام كلمة مرور قوية وفريدة لحسابك.",
        "أبلغنا فوراً إذا اكتشفت أي نشاط مشبوه على حسابك.",
        "نلتزم بمعايير PCI DSS لمعالجة المدفوعات بشكل آمن.",
        "نجري مراجعات أمنية دورية واختبارات اختراق لضمان الأمان.",
      ],
    },
    {
      icon: Scale,
      title: "الملكية الفكرية",
      content: [
        "جميع المحتويات والتصميمات والشعارات على هذا الموقع محمية بحقوق النشر.",
        "لا يجوز لك نسخ أو توزيع أو تعديل أي محتوى دون إذن كتابي مسبق.",
        "العلامات التجارية والشعارات المذكورة هي ملك لأصحابها.",
        "المحتوى الذي تقوم بتحميله يبقى ملكك، لكنك تمنحنا ترخيصاً لاستخدامه.",
        "نحترم حقوق الملكية الفكرية للآخرين ونتوقع منك فعل الشيء نفسه.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "إخلاء المسؤولية",
      content: [
        'نقدم الموقع "كما هو" دون أي ضمانات صريحة أو ضمنية.',
        "لا نضمن أن الموقع سيكون خالياً من الأخطاء أو متاحاً دون انقطاع.",
        "لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الموقع.",
        "لا نتحمل المسؤولية عن المحتوى أو الخدمات المقدمة من أطراف ثالثة.",
        "أنت مسؤول عن أي قرارات تتخذها بناءً على المعلومات المتاحة على الموقع.",
        "ننصح بالتشاور مع متخصصين قبل اتخاذ قرارات مهمة.",
      ],
    },
    {
      icon: Shield,
      title: "الامتثال لسياسات Google",
      content: [
        "نلتزم بجميع سياسات ومتطلبات Google Ads.",
        "نلتزم بسياسات Google AdSense للناشرين.",
        "لا نعرض محتوى ينتهك سياسات محتوى Google.",
        "نلتزم بمتطلبات الإعلانات المخصصة وملفات تعريف الارتباط.",
        "نوفر آليات واضحة للمستخدمين لإدارة تفضيلات الإعلانات.",
        "نلتزم بمعايير الشفافية والإفصاح في الإعلانات.",
      ],
    },
    {
      icon: Scale,
      title: "القانون الساري وحل النزاعات",
      content: [
        "تخضع هذه الشروط للقوانين المحلية والدولية المعمول بها.",
        "أي نزاع ينشأ عن استخدام الموقع سيتم حله عبر التحكيم أو المحاكم المختصة.",
        "توافق على الاختصاص القضائي الحصري للمحاكم في [الموقع].",
        "إذا كان أي بند من هذه الشروط غير قابل للتنفيذ، ستبقى البنود الأخرى سارية.",
        "نحتفظ بالحق في اتخاذ إجراءات قانونية ضد أي انتهاك لهذه الشروط.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10 animate-gradient pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary mb-6 shadow-xl">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-l from-accent via-foreground to-primary bg-clip-text text-transparent">
            شروط الاستخدام والأمان
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
            يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا. استخدامك للموقع يعني موافقتك على هذه الشروط.
          </p>
          <p className="text-sm text-accent mt-4 font-medium">آخر تحديث: يناير 2025 | متوافق مع معايير Google</p>
        </div>

        <div className="space-y-6 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-right flex-1">{section.title}</h2>
                </div>
                <ul className="space-y-3 mr-16">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary mb-4 shadow-lg">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-3">إشعار مهم</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            هذه الشروط تشكل اتفاقية قانونية ملزمة بينك وبيننا. إذا كان لديك أي أسئلة أو استفسارات، يرجى التواصل معنا قبل
            استخدام الخدمة.
          </p>
          <a
            href="mailto:legal@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-colors shadow-lg"
          >
            <Scale className="w-5 h-5" />
            legal@example.com
          </a>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Shield className="w-5 h-5" />
            سياسة الخصوصية
          </Link>
          <span className="text-muted-foreground hidden sm:inline">|</span>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            <ArrowRight className="w-5 h-5" />
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}
