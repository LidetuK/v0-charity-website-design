"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const countries = [
  {
    id: "qatar",
    name: "Qatar",
    localName: "KUWAATAAR",
    flag: "🇶🇦",
    flagUrl: "https://flagcdn.com/w80/qa.png",
  },
  {
    id: "bahrain",
    name: "Bahrain",
    localName: "BAAHIREEN",
    flag: "🇧🇭",
    flagUrl: "https://flagcdn.com/w80/bh.png",
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    localName: "YUUNAAYTID ARAB IMIREETSI",
    flag: "🇦🇪",
    flagUrl: "https://flagcdn.com/w80/ae.png",
  },
  {
    id: "saudi",
    name: "Saudi Arabia",
    localName: "SAAWUDII ARABIYAA",
    flag: "🇸🇦",
    flagUrl: "https://flagcdn.com/w80/sa.png",
  },
  {
    id: "kuwait",
    name: "Kuwait",
    localName: "KUWEET",
    flag: "🇰🇼",
    flagUrl: "https://flagcdn.com/w80/kw.png",
  },
  {
    id: "lebanon",
    name: "Lebanon",
    localName: "LIIBAANOS",
    flag: "🇱🇧",
    flagUrl: "https://flagcdn.com/w80/lb.png",
  },
  {
    id: "jordan",
    name: "Jordan",
    localName: "OORDAAN",
    flag: "🇯🇴",
    flagUrl: "https://flagcdn.com/w80/jo.png",
  },
  {
    id: "oman",
    name: "Oman",
    localName: "OOMAAN",
    flag: "🇴🇲",
    flagUrl: "https://flagcdn.com/w80/om.png",
  },
]

const countryContent: Record<string, { english: { title: string; sections: { heading: string; content: string }[] }; arabic: { title: string; sections: { heading: string; content: string }[] } }> = {
  qatar: {
    english: {
      title: "Your Rights in Qatar",
      sections: [
        {
          heading: "Employment Contract",
          content: "You have the right to receive a written employment contract in a language you understand. The contract must specify your salary, working hours, job description, and benefits. Keep a copy of your contract at all times."
        },
        {
          heading: "Working Hours & Rest",
          content: "Maximum working hours are 8 hours per day or 48 hours per week. You are entitled to at least one rest day per week. Overtime must be compensated at a higher rate."
        },
        {
          heading: "Wages & Payment",
          content: "Your employer must pay your wages on time through the Wage Protection System (WPS). Deductions from your salary are limited and must be lawful. You have the right to receive end-of-service benefits."
        },
        {
          heading: "Health & Safety",
          content: "Your employer must provide a safe working environment. You have the right to medical care and health insurance. Report any workplace injuries immediately."
        }
      ]
    },
    arabic: {
      title: "حقوقك في قطر",
      sections: [
        {
          heading: "عقد العمل",
          content: "لديك الحق في الحصول على عقد عمل مكتوب بلغة تفهمها. يجب أن يحدد العقد راتبك وساعات العمل ووصف الوظيفة والمزايا. احتفظ بنسخة من عقدك في جميع الأوقات."
        },
        {
          heading: "ساعات العمل والراحة",
          content: "الحد الأقصى لساعات العمل هو 8 ساعات في اليوم أو 48 ساعة في الأسبوع. يحق لك الحصول على يوم راحة واحد على الأقل في الأسبوع. يجب تعويض العمل الإضافي بمعدل أعلى."
        },
        {
          heading: "الأجور والدفع",
          content: "يجب على صاحب العمل دفع أجورك في الوقت المحدد من خلال نظام حماية الأجور. الخصومات من راتبك محدودة ويجب أن تكون قانونية. لديك الحق في الحصول على مكافأة نهاية الخدمة."
        },
        {
          heading: "الصحة والسلامة",
          content: "يجب على صاحب العمل توفير بيئة عمل آمنة. لديك الحق في الرعاية الطبية والتأمين الصحي. أبلغ عن أي إصابات في مكان العمل على الفور."
        }
      ]
    }
  },
  bahrain: {
    english: {
      title: "Your Rights in Bahrain",
      sections: [
        {
          heading: "Employment Contract",
          content: "All workers must have a written contract that clearly states the terms of employment. The contract should be in Arabic and can include an English translation. You are entitled to a copy of your contract."
        },
        {
          heading: "Working Hours & Leave",
          content: "Standard working hours are 8 hours per day, 48 hours per week. You are entitled to annual leave, sick leave, and public holidays. Friday is typically the weekly rest day."
        },
        {
          heading: "Wages & Benefits",
          content: "Wages must be paid regularly and on time. You have the right to end-of-service gratuity based on your length of service. Social insurance contributions are required."
        },
        {
          heading: "Dispute Resolution",
          content: "If you have a dispute with your employer, you can file a complaint with the Ministry of Labour. Free legal assistance may be available for labor disputes."
        }
      ]
    },
    arabic: {
      title: "حقوقك في البحرين",
      sections: [
        {
          heading: "عقد العمل",
          content: "يجب أن يكون لدى جميع العمال عقد مكتوب يوضح بوضوح شروط التوظيف. يجب أن يكون العقد باللغة العربية ويمكن أن يتضمن ترجمة إنجليزية. يحق لك الحصول على نسخة من عقدك."
        },
        {
          heading: "ساعات العمل والإجازات",
          content: "ساعات العمل القياسية هي 8 ساعات في اليوم، 48 ساعة في الأسبوع. يحق لك الحصول على إجازة سنوية وإجازة مرضية وعطلات رسمية. الجمعة هو عادة يوم الراحة الأسبوعي."
        },
        {
          heading: "الأجور والمزايا",
          content: "يجب دفع الأجور بانتظام وفي الوقت المحدد. لديك الحق في مكافأة نهاية الخدمة بناءً على مدة خدمتك. مطلوب مساهمات التأمين الاجتماعي."
        },
        {
          heading: "حل النزاعات",
          content: "إذا كان لديك نزاع مع صاحب العمل، يمكنك تقديم شكوى إلى وزارة العمل. قد تتوفر مساعدة قانونية مجانية للنزاعات العمالية."
        }
      ]
    }
  },
  uae: {
    english: {
      title: "Your Rights in the UAE",
      sections: [
        {
          heading: "Employment Contract",
          content: "You must receive an employment contract approved by the Ministry of Human Resources. The contract should clearly state your job title, salary, working hours, and duration of employment."
        },
        {
          heading: "Working Hours & Overtime",
          content: "Normal working hours are 8 hours per day or 48 hours per week. During Ramadan, working hours are reduced by 2 hours. Overtime is compensated at 125% of your normal wage."
        },
        {
          heading: "End of Service Benefits",
          content: "You are entitled to end-of-service gratuity after completing one year of service. The gratuity is calculated based on your basic salary and length of service."
        },
        {
          heading: "Accommodation & Transportation",
          content: "Your employer must provide suitable accommodation or a housing allowance. Transportation to and from work should be provided or compensated."
        }
      ]
    },
    arabic: {
      title: "حقوقك في الإمارات",
      sections: [
        {
          heading: "عقد العمل",
          content: "يجب أن تحصل على عقد عمل معتمد من وزارة الموارد البشرية. يجب أن يوضح العقد بوضوح المسمى الوظيفي والراتب وساعات العمل ومدة التوظيف."
        },
        {
          heading: "ساعات العمل والعمل الإضافي",
          content: "ساعات العمل العادية هي 8 ساعات في اليوم أو 48 ساعة في الأسبوع. خلال شهر رمضان، يتم تقليل ساعات العمل بمقدار ساعتين. يتم تعويض العمل الإضافي بنسبة 125٪ من أجرك العادي."
        },
        {
          heading: "مكافأة نهاية الخدمة",
          content: "يحق لك الحصول على مكافأة نهاية الخدمة بعد إكمال سنة واحدة من الخدمة. يتم حساب المكافأة بناءً على راتبك الأساسي ومدة الخدمة."
        },
        {
          heading: "السكن والمواصلات",
          content: "يجب على صاحب العمل توفير سكن مناسب أو بدل سكن. يجب توفير المواصلات من وإلى العمل أو تعويضها."
        }
      ]
    }
  },
  saudi: {
    english: {
      title: "Your Rights in Saudi Arabia",
      sections: [
        {
          heading: "Employment Contract",
          content: "Your employment contract must be in writing and in Arabic. You should receive a copy of the contract. The contract must specify salary, job duties, contract duration, and workplace location."
        },
        {
          heading: "Working Hours",
          content: "Maximum working hours are 8 hours per day or 48 hours per week. During Ramadan, working hours are reduced to 6 hours per day for Muslim workers. You are entitled to a weekly rest day."
        },
        {
          heading: "Wages & Allowances",
          content: "Your employer must pay wages through the Wage Protection System. You may be entitled to housing allowance, transportation allowance, and other benefits as specified in your contract."
        },
        {
          heading: "Exit & Re-entry",
          content: "Under the new labor reforms, workers can change jobs and leave the country without employer permission after completing their contract or after one year of employment."
        }
      ]
    },
    arabic: {
      title: "حقوقك في السعودية",
      sections: [
        {
          heading: "عقد العمل",
          content: "يجب أن يكون عقد العمل مكتوبًا وباللغة العربية. يجب أن تحصل على نسخة من العقد. يجب أن يحدد العقد الراتب ومهام العمل ومدة العقد وموقع العمل."
        },
        {
          heading: "ساعات العمل",
          content: "الحد الأقصى لساعات العمل هو 8 ساعات في اليوم أو 48 ساعة في الأسبوع. خلال شهر رمضان، يتم تقليل ساعات العمل إلى 6 ساعات في اليوم للعمال المسلمين. يحق لك الحصول على يوم راحة أسبوعي."
        },
        {
          heading: "الأجور والبدلات",
          content: "يجب على صاحب العمل دفع الأجور من خلال نظام حماية الأجور. قد يحق لك الحصول على بدل سكن وبدل مواصلات ومزايا أخرى كما هو محدد في عقدك."
        },
        {
          heading: "الخروج وإعادة الدخول",
          content: "بموجب إصلاحات العمل الجديدة، يمكن للعمال تغيير الوظائف ومغادرة البلاد دون إذن صاحب العمل بعد إكمال عقدهم أو بعد سنة واحدة من التوظيف."
        }
      ]
    }
  },
  kuwait: {
    english: {
      title: "Your Rights in Kuwait",
      sections: [
        {
          heading: "Employment Contract",
          content: "All employment contracts must be in writing and registered with the Ministry of Social Affairs and Labor. You should keep a copy of your contract and residence permit."
        },
        {
          heading: "Working Hours & Rest",
          content: "Working hours shall not exceed 8 hours per day or 48 hours per week. You are entitled to a weekly rest day and annual leave after completing one year of service."
        },
        {
          heading: "Wages & Payment",
          content: "Your employer must pay your wages in Kuwaiti Dinars on time. Wage deductions are limited and regulated by law. You have the right to end-of-service indemnity."
        },
        {
          heading: "Health & Insurance",
          content: "Your employer must provide health insurance coverage. You have access to public healthcare services. Report any work-related injuries to your employer immediately."
        }
      ]
    },
    arabic: {
      title: "حقوقك في الكويت",
      sections: [
        {
          heading: "عقد العمل",
          content: "يجب أن تكون جميع عقود العمل مكتوبة ومسجلة لدى وزارة الشؤون الاجتماعية والعمل. يجب أن تحتفظ بنسخة من عقدك وتصريح الإقامة."
        },
        {
          heading: "ساعات العمل والراحة",
          content: "يجب ألا تتجاوز ساعات العمل 8 ساعات في اليوم أو 48 ساعة في الأسبوع. يحق لك الحصول على يوم راحة أسبوعي وإجازة سنوية بعد إكمال سنة واحدة من الخدمة."
        },
        {
          heading: "الأجور والدفع",
          content: "يجب على صاحب العمل دفع أجورك بالدينار الكويتي في الوقت المحدد. خصومات الأجور محدودة ومنظمة بموجب القانون. لديك الحق في تعويض نهاية الخدمة."
        },
        {
          heading: "الصحة والتأمين",
          content: "يجب على صاحب العمل توفير تغطية التأمين الصحي. لديك حق الوصول إلى خدمات الرعاية الصحية العامة. أبلغ عن أي إصابات متعلقة بالعمل لصاحب العمل على الفور."
        }
      ]
    }
  },
  lebanon: {
    english: {
      title: "Your Rights in Lebanon",
      sections: [
        {
          heading: "Employment Contract",
          content: "You should have a written employment contract that specifies your salary, duties, and working conditions. Domestic workers are covered by a specific contract template approved by the Ministry of Labor."
        },
        {
          heading: "Working Conditions",
          content: "You have the right to humane working conditions. Your employer cannot confiscate your passport or identity documents. You should have access to communication with your family."
        },
        {
          heading: "Wages & Rest",
          content: "Your wages must be paid regularly as agreed in your contract. You are entitled to rest periods and at least one day off per week. Overtime should be compensated."
        },
        {
          heading: "Protection & Support",
          content: "If you face abuse or exploitation, you can seek help from your embassy, NGOs, or the General Security. Hotlines are available for reporting violations."
        }
      ]
    },
    arabic: {
      title: "حقوقك في لبنان",
      sections: [
        {
          heading: "عقد العمل",
          content: "يجب أن يكون لديك عقد عمل مكتوب يحدد راتبك ومهامك وظروف العمل. يخضع عمال المنازل لنموذج عقد محدد معتمد من وزارة العمل."
        },
        {
          heading: "ظروف العمل",
          content: "لديك الحق في ظروف عمل إنسانية. لا يمكن لصاحب العمل مصادرة جواز سفرك أو وثائق هويتك. يجب أن يكون لديك حق الوصول إلى التواصل مع عائلتك."
        },
        {
          heading: "الأجور والراحة",
          content: "يجب دفع أجورك بانتظام كما هو متفق عليه في عقدك. يحق لك الحصول على فترات راحة ويوم عطلة واحد على الأقل في الأسبوع. يجب تعويض العمل الإضافي."
        },
        {
          heading: "الحماية والدعم",
          content: "إذا واجهت سوء معاملة أو استغلال، يمكنك طلب المساعدة من سفارتك أو المنظمات غير الحكومية أو الأمن العام. تتوفر خطوط ساخنة للإبلاغ عن الانتهاكات."
        }
      ]
    }
  },
  jordan: {
    english: {
      title: "Your Rights in Jordan",
      sections: [
        {
          heading: "Employment Contract",
          content: "You must have a written employment contract in Arabic. The contract should specify your wages, working hours, and job responsibilities. You are entitled to a copy of your contract."
        },
        {
          heading: "Working Hours",
          content: "Regular working hours are 8 hours per day or 48 hours per week. You are entitled to overtime pay for extra hours worked. Weekly rest of at least 24 consecutive hours is mandatory."
        },
        {
          heading: "Wages & Benefits",
          content: "Your wages must be paid in Jordanian Dinars on time. You are entitled to annual leave, sick leave, and end-of-service benefits. Minimum wage laws apply to all workers."
        },
        {
          heading: "Legal Protection",
          content: "Domestic workers are protected under the Labor Law since 2008. You can file complaints with the Ministry of Labor. Legal aid services are available for migrant workers."
        }
      ]
    },
    arabic: {
      title: "حقوقك في الأردن",
      sections: [
        {
          heading: "عقد العمل",
          content: "يجب أن يكون لديك عقد عمل مكتوب باللغة العربية. يجب أن يحدد العقد أجورك وساعات العمل ومسؤوليات الوظيفة. يحق لك الحصول على نسخة من عقدك."
        },
        {
          heading: "ساعات العمل",
          content: "ساعات العمل العادية هي 8 ساعات في اليوم أو 48 ساعة في الأسبوع. يحق لك الحصول على أجر إضافي للساعات الإضافية. الراحة الأسبوعية لمدة 24 ساعة متتالية على الأقل إلزامية."
        },
        {
          heading: "الأجور والمزايا",
          content: "يجب دفع أجورك بالدينار الأردني في الوقت المحدد. يحق لك الحصول على إجازة سنوية وإجازة مرضية ومزايا نهاية الخدمة. تنطبق قوانين الحد الأدنى للأجور على جميع العمال."
        },
        {
          heading: "الحماية القانونية",
          content: "يتمتع عمال المنازل بالحماية بموجب قانون العمل منذ عام 2008. يمكنك تقديم شكاوى إلى وزارة العمل. تتوفر خدمات المساعدة القانونية للعمال المهاجرين."
        }
      ]
    }
  },
  oman: {
    english: {
      title: "Your Rights in Oman",
      sections: [
        {
          heading: "Employment Contract",
          content: "Your employment contract must be approved by the Ministry of Manpower. The contract should be in Arabic and clearly state your salary, job description, and employment duration."
        },
        {
          heading: "Working Hours & Leave",
          content: "Working hours shall not exceed 9 hours per day. During Ramadan, working hours are reduced to 6 hours. You are entitled to annual leave of 30 days after one year of service."
        },
        {
          heading: "Wages & Gratuity",
          content: "Your employer must pay wages on time. You are entitled to end-of-service gratuity calculated based on your basic salary and years of service."
        },
        {
          heading: "Residence & Travel",
          content: "Your employer sponsors your residence permit but cannot confiscate your passport. You have the right to travel home during annual leave or at the end of your contract."
        }
      ]
    },
    arabic: {
      title: "حقوقك في عمان",
      sections: [
        {
          heading: "عقد العمل",
          content: "يجب أن يكون عقد العمل معتمدًا من وزارة القوى العاملة. يجب أن يكون العقد باللغة العربية ويوضح بوضوح راتبك ووصف الوظيفة ومدة التوظيف."
        },
        {
          heading: "ساعات العمل والإجازات",
          content: "يجب ألا تتجاوز ساعات العمل 9 ساعات في اليوم. خلال شهر رمضان، يتم تقليل ساعات العمل إلى 6 ساعات. يحق لك إجازة سنوية مدتها 30 يومًا بعد سنة واحدة من الخدمة."
        },
        {
          heading: "الأجور والمكافآت",
          content: "يجب على صاحب العمل دفع الأجور في الوقت المحدد. يحق لك الحصول على مكافأة نهاية الخدمة المحسوبة بناءً على راتبك الأساسي وسنوات الخدمة."
        },
        {
          heading: "الإقامة والسفر",
          content: "يكفل صاحب العمل تصريح إقامتك ولكن لا يمكنه مصادرة جواز سفرك. لديك الحق في السفر إلى بلدك خلال الإجازة السنوية أو في نهاية عقدك."
        }
      ]
    }
  }
}

export function KnowYourRightsSection() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const content = selectedCountry ? countryContent[selectedCountry] : null

  return (
    <section ref={sectionRef} id="know-your-rights" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Migrant Rights Information
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Know Your Rights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select your destination country to learn about your legal rights and protections as a migrant worker
          </p>
        </div>

        {/* Country Carousel */}
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card shadow-lg rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 -ml-2 md:ml-0"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card shadow-lg rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 -mr-2 md:mr-0"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-8 md:px-12 py-4 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {countries.map((country, index) => (
              <button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                className={`flex-shrink-0 snap-center group transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div
                  className={`w-40 md:w-48 p-4 rounded-2xl border-2 transition-all duration-300 ${
                    selectedCountry === country.id
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                      : "border-border bg-card hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  {/* Flag */}
                  <div className="w-16 h-12 mx-auto mb-3 rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={country.flagUrl}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                  {/* Country Name */}
                  <h3 className="font-semibold text-foreground text-center mb-1 group-hover:text-primary transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center">
                    {country.localName}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Modal/Panel */}
        {selectedCountry && content && (
          <div className="mt-8 animate-fade-in-up">
            <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
              {/* Header */}
              <div className="bg-primary/5 border-b border-border p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={countries.find(c => c.id === selectedCountry)?.flagUrl}
                    alt=""
                    className="w-12 h-8 rounded object-cover shadow"
                    crossOrigin="anonymous"
                  />
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">
                      {countries.find(c => c.id === selectedCountry)?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {countries.find(c => c.id === selectedCountry)?.localName}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedCountry(null)}
                  className="rounded-full hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="w-5 h-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              {/* Content Grid - Side by Side */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {/* English Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">EN</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">English</h4>
                  </div>
                  <h5 className="text-xl font-serif font-bold text-foreground mb-6">
                    {content.english.title}
                  </h5>
                  <div className="space-y-6">
                    {content.english.sections.map((section, index) => (
                      <div key={index} className="group">
                        <h6 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">
                            {index + 1}
                          </span>
                          {section.heading}
                        </h6>
                        <p className="text-muted-foreground text-sm leading-relaxed pl-8">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arabic Content */}
                <div className="p-6 md:p-8 bg-secondary/20" dir="rtl">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">AR</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">العربية</h4>
                  </div>
                  <h5 className="text-xl font-serif font-bold text-foreground mb-6">
                    {content.arabic.title}
                  </h5>
                  <div className="space-y-6">
                    {content.arabic.sections.map((section, index) => (
                      <div key={index} className="group">
                        <h6 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">
                            {index + 1}
                          </span>
                          {section.heading}
                        </h6>
                        <p className="text-muted-foreground text-sm leading-relaxed pr-8">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-secondary/30 border-t border-border p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  This information is for educational purposes. For specific legal advice, please consult with a qualified legal professional.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
