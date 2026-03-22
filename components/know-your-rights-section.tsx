"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export const countries = [
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
    name: "UAE",
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

export const countryContent: Record<string, { english: { title: string; sections: { heading: string; content: string }[] }; arabic: { title: string; sections: { heading: string; content: string }[] } }> = {
  qatar: {
    english: {
      title: "የሰራተኛ ሕግ",
      sections: [
        {
          heading: "የመጀመሪያ ደረጃ ድንጋጌዎች",
          content: "ከቤት ሰራተኞች፣ አሰሪዎች እና የሥራ አገናኝ ቢሮዎች ጋር ስለተያያዙ ቁልፍ ደንቦች ይገለጻል።"
        },
        {
          heading: "የተዋዋይ ወገኖች ግዴታዎች",
          content: "የሥራ አገናኝን፣ አሰሪዎችን እና የቤት ሰራተኞችን ኃላፊነቶች ይገለጻል።"
        },
        {
          heading: "የሥራ አገናኝ ቢሮ ግዴታዎች",
          content: "ሠራተኞችን ክፍያ ማስከፈል እና በብሄር ወይም በጾታ ማዳሊት ያለ ሥነ ምግባር የጎደላቸውን ድርጊቶችን ይከለክላል።"
        },
        {
          heading: "የቤት ውስጥ ሰራተኛ ግዴታዎች",
          content: "ሰራተኞች የውሌ ግዴታዎችን መከተል፣ የአሰሪዎችን ንብረት በጥንቃቄ መያዝ እና ሚስጥራዊነትን መጠበቅ እንዳለባቸው ይገለጻል።"
        },
        {
          heading: "የስራ እና የቅጥር ውሌ",
          content: "በአሰሪዎች እና በቤት ሰራተኞች መካከል የሚሰራ ውሌ አስፈላጊ የሆኑትን ነገሮች በዝርዝር ይገለጻል።"
        },
        {
          heading: "ደመወዝ",
          content: "የደመወዝ ክፍያ ደንቦችን ያወጣል፣ ሠራተኞችን በወቅቱ እና ፍትሃዊ ክፍያ መከፈሉን ያረጋግጣል።"
        },
        {
          heading: "የስራ ሰዓት እና እረፍት",
          content: "የስራ ሰዓቱን በቀን እስከ 12 ብቻ እንዲሰሩ ይገድባል፣ የእረፍት ጊዜያት እና ከክፍያ ጋር ፍቃድ እንዲሰጡ ያስገድዳል።"
        },
        {
          heading: "የስንብት ክፍያ",
          content: "ሠራተኞች ውሌቸውን ከጨረሱ በኋላ የስንብት ክፍያ ዋስትና ይሰጣል።"
        },
        {
          heading: "ቅጣቶች",
          content: "ቅጣቶችን እና የፈቃድ መሰረዝን ጨምሮ ህጉን በመጣሱ አሰሪዎች እና የቅጥር መሥሪያ ቤቶች ላይ የሚደርሰውን ውጤት ይዘረዝራል።"
        },
        {
          heading: "አጠቃላይ ድንጋጌዎች",
          content: "ስለሥራ አገናኝ ቢሮዎች የፍቃድ አሰጣጥ ደንቦችን፣ የስራ ገደቦች እና የስራ አገናኝ ቢሮዎች የማሟያ ደንቦችን ይሸፍናል።"
        }
      ]
    },
    arabic: {
      title: "Seera Hojjetaa fi Hojjechiisaa",
      sections: [
        {
          heading: "Dambiiwwan Seensaa",
          content: "Haalota hojjetoota mana keessaa, hojjechiiftotaa fi waajjiraalee qacarrii hojjetootaa waliin wal qabatu ibsa."
        },
        {
          heading: "Dirqama Qaamolee Waliigaltee Qacarrii",
          content: "Itti gaafatamummaa waajjiraalee qacarrii, hojjechiistotaa, fi hojjettoota mana keessaa ni ibsa."
        },
        {
          heading: "Dirqama Waajjiraalee Qaxarrii",
          content: "Hojiiwwan naamusa cabsan kan akka hojjettoota kaffaltii kanfalchiisuu fi sanyummaa ykn koorniyaa irratti hundaa'anii ramaduu ni dhorka/ni ittisa."
        },
        {
          heading: "Dirqama Hojjettuu/hojjetaa Mana keessaa",
          content: "Hojjettoonni dirqama waliigaltee hordofuu, qabeenya hojjechiistotaa kabajuu, fi iccitii eeguu akka qaban ibsa."
        },
        {
          heading: "Hojii fi Waliigaltee Hojii",
          content: "Qabxiilee barbaachisoo waliigaltee seera qabeessa hojjechiistotaa fi hojjettoota mana keessaa gidduutti taasifaman bal'inaan ni ibsa."
        },
        {
          heading: "Mindaa ilaalchisee",
          content: "Seera kaffaltii mindaa, beenyaa hojjettootaaf yeroo fi haqa qabeessa ta'e akka kanfalamu ni diriirsa; akkasumas ni mirkaneessa."
        },
        {
          heading: "Sa'aatii Hojii fi Boqonnaa",
          content: "Sa'aatii hojii guyyaatti sa'aatii 12'tti daangeessa, yeroo boqonnaa ni ajaja, akkasumas boqonnaa kaffaltii waliin ni kenna."
        },
        {
          heading: "Mindaa/Kanfaltii Xumura Tajaajilaa",
          content: "Hojjettoonni waliigaltee isaanii erga xumuranii booda kaffaltii hojii irraa gaggeeffamuu akka argatan wabii ni kenna."
        },
        {
          heading: "Adabbii",
          content: "Bu'aa hojjechiistotni fi waajjiraaleen qacarrii seera cabsuu isaaniin, adabbii maallaqaa fi hayyama haquu dabalatee hordofsiisu ni tarreessa."
        },
        {
          heading: "Tumaalee Waliigalaa",
          content: "Seerota hayyama kennuu, daangeessawwan daldalaa, fi dambiiwwan walsimannaa waajjiraalee qacarrii ni hammata."
        }
      ]
    }
  },
  bahrain: {
    english: {
      title: "የቤት ሰራተኛ ደንብ",
      sections: [
        {
          heading: "ውሌ",
          content: "የቅጥር ውሌ በአረብኛ ቋንቋ የተፃፈ እና በሁሇቱም ወገኖች የተፈረመ መሆን አሇበት።"
        },
        {
          heading: "የሙከራ ጊዜ",
          content: "ሰራተኞች በውሉ ውስጥ ከተገሇጸ እስከ ሶስት ወር ድረስ ሉቆዩ ይችሊለ።"
        },
        {
          heading: "የምሌመሊ ክፍያዎች",
          content: "አሰሪዎች የምሌመሊ ወይም የቪዛ ወጪዎችን ከሰራተኞች ደመወዝ መቀነስ አይችሉም።"
        },
        {
          heading: "ደመወዝ",
          content: "ሠራተኞች ቢያንስ በወር አንድ ጊዜ መከፈሌ አሇባቸው፣ የክፍያ ማረጋገጫ ያስፈሌጋሌ።"
        },
        {
          heading: "የስራ ሰዓት",
          content: "ምንም የተወሰነ ህጋዊ የስራ ሰዓት የሇም፤ በውሉ ውስጥ መስማማት አሇባቸው።"
        },
        {
          heading: "እረፍት",
          content: "የእረፍት ጊዜያት በሠራተኛ እና በአሠሪ መካከሌ ከስምምነት የተደረሱባቸው መሆን አሇባቸው።"
        },
        {
          heading: "የሕመም ፈቃድ እና የጤና መድን",
          content: "አሰሪዎች የጤና ሕክምና አገሌግልት መስጠት ያሇባቸው ሲሆን መንግስት የጤና መድን እንዲሸፍን ይገደዳሌ።"
        },
        {
          heading: "የዓመት ዕረፍት",
          content: "ሰራተኞች ከአንድ አመት አገሌግልት በኋሊ ሇ30 ቀናት ሙሉ ክፍያ የዓመት ፈቃድ የማግኘት መብት አሊቸው።"
        },
        {
          heading: "የሥራ ውሌ ማቋረጥ እና ሥራ ስሇመቀየር",
          content: "ሇማቋረጥ የ30 ቀን ማስታወቂያ ያስፈሌጋሌ፤ የሥራ ሇውጦች የአሰሪ ፈቃድ ያስፈሌጋቸዋሌ።"
        },
        {
          heading: "የስንብት ክፍያ",
          content: "ሰራተኞች ውሌ ከተጠናቀቀ በኋሊ በሰሩባቸው ዓመታት ሊይ ተመስርተው የስንብት ክፍያ ያገኛሉ።"
        }
      ]
    },
    arabic: {
      title: "DAMBII HOJJETOOTA MANA KEESSAA",
      sections: [
        {
          heading: "Walta'iinsa Waliigaltee",
          content: "Waliigalteen qaxarrii hojii Afaan Arabiffaan barreeffamee fi qaamolee lamaan mallattaa'uu qaba."
        },
        {
          heading: "Yeroo Yaalii",
          content: "Waliigaltee keessatti yoo ibsame, hojjettoonni yeroo yaalii hanga ji'a sadii turuuf ramadamuu ni danda'u."
        },
        {
          heading: "Kaffaltii Qaxarrii",
          content: "Hojjechiistonni baasii qacarrii ykn viizaa mindaa hojjettootaa irraa hir'isuu hin danda'an."
        },
        {
          heading: "Mindaa",
          content: "Mindaan hojjettootaa yoo xiqqaate ji'atti al tokko kaffalamuu qabu, kanaafis ragaan kaffaltii ni barbaachisa."
        },
        {
          heading: "Sa'aatii Hojii",
          content: "Sa'aatiin hojii seera qabeessa murtaa'e hin jiru. Kun waliigaltee keessatti irratti waliigalamuu qaba."
        },
        {
          heading: "Boqonnaa fi Aara Galfii",
          content: "Boqonnaa fi yeroon aara galfii hojjetaa fi hojjechiisaa gidduutti mariidhaan taasifamuu qaba."
        },
        {
          heading: "Boqonnaa Dhukkubaa fi Inshuraansii Fayyaa",
          content: "Hojjechiistonni tajaajila kunuunsa fayyaa kennuu qabu, mootummaan immoo inshuraansii fayyaa dirqamaa ni haguuga."
        },
        {
          heading: "Boqonnaa Waggaa",
          content: "Hojjettoonni waggaa tokko erga tajaajilanii booda boqonnaa waggaa guyyoota 30 kaffaltii guutuu waliin argachuuf mirga qabu."
        },
        {
          heading: "Waliigaltee Qaxarrii Hojii Addaan Kutuu & Hojii Jijjiiruu",
          content: "Waliigaltee hojii addaan kutuuf beeksisni dursaa guyyoota 30 ni barbaachisa; jijjiirraa hojii taasisuuf hayyamni hojjechiisaa ni barbaachisa."
        },
        {
          heading: "Faayidaa Yeroo Xumura Tajaajilaa",
          content: "Hojjettoonni erga yeroo waliigaltee isaanii xumuranii booda, beenyaa waggoota tajaajila isaanii irratti hundaa'ee murtaa'u ni argatu."
        }
      ]
    }
  },
  uae: {
    english: {
      title: "የቤት ሰራተኛ የሥራ ሕግ",
      sections: [
        {
          heading: "ውሌ",
          content: "ሰራተኞች በሚረዱት ቋንቋ የጽሁፍ የስራ ውሌ እና ቅጂ ሉኖራቸው ይገባሌ።"
        },
        {
          heading: "የሙከራ ጊዜ",
          content: "እስከ ስድስት ወር የሚደርስ የሙከራ ጊዜ የሚፈቀድ ሲሆን በአጠቃሊይ የአገሌግልት ዘመኑ ሊይም ይቆጠራሌ።"
        },
        {
          heading: "ደመወዝ",
          content: "ሇተጨማሪ ሰዓታት የተሰራ የትርፍ ሰዓት ክፍያን ጨምሮ ደመወዝ በሰዓቱ በኤሌክትሮኒካዊ መንገድ መከፈሌ አሇበት።"
        },
        {
          heading: "የስራ ሰዓት",
          content: "ከፍተኛው የስራ ሰዓት በቀን 8 (በሳምንት ሇ48) ሲሆን በረመዳን ይቀንሳሌ።"
        },
        {
          heading: "እረፍት",
          content: "ሰራተኞች በየቀኑ የእረፍት ፈቃድ እና ቢያንስ በሳምንት አንድ ሙሉ የእረፍት ቀን የማግኘት መብት አሊቸው።"
        },
        {
          heading: "የሕመም ፈቃድ እና የጤና መድን",
          content: "ሠራተኞች በኢሚሬትስ የሚሇያየውን በአሰሪው ከሚሰጠው የጤና መድን እስከ 90 ቀናት የሚደርስ የሕመም ፈቃድ ያገኛለ።"
        },
        {
          heading: "ዓመታዊ ፈቃድ እና ሌዩ ፈቃድ",
          content: "ሠራተኞች ሇ30 ቀናት የሚከፈሌበት ዓመታዊ ፈቃድ፣ የወሉድ ፈቃድ እና ሇቤተሰብ ዝግጅቶች የሚሰጥ ሌዩ ፈቃድ የማግኘት መብት አሊቸው።"
        },
        {
          heading: "የሥራ ውሌ ማቋረጥ እና ሥራ ስሇመቀየር",
          content: "ሠራተኞች ከ30-90 ቀናት ማስታወቂያ መሌቀቅ እና በተሇየ ሁኔታ ወደ ላሊ አሰሪ ማስተሊሇፍ ይችሊለ።"
        },
        {
          heading: "የስንብት ክፍያ",
          content: "ሰራተኞች በሁሇት አመት ደመወዝ የተገደበ የአገሌግልት ዘመን ሊይ ተመስርተው የስንብት ክፍያ ያገኛለ።"
        },
        {
          heading: "የቅጥር ክፍያ",
          content: "አሰሪዎች የምሌመሊ ወጪዎችን መሸፈን የሚሸፍኑ ሲሆን ሰራተኞች ሇስራ ስምሪት ክፍያ ሉከፍሉ አይገባም።"
        },
        {
          heading: "የመታወቂያ ሰነድ",
          content: "ሰራተኞች ፓስፖርታቸውን እና መታወቂያቸውን የመጠበቅ መብት ያሊቸው ሲሆን አሰሪዎች ሉነጥቋቸው አይችሉም።"
        }
      ]
    },
    arabic: {
      title: "DAMBII HOJJETOOTA MANA KEESSAA",
      sections: [
        {
          heading: "Walta'iinsa Waliigaltee",
          content: "Hojjettoonni waliigaltee hojii barreeffamaa ni qopheessa; koppiisaa Afaan hubataniin ni dhiyeessa."
        },
        {
          heading: "Yeroo Yaalii Qacarrii",
          content: "Hojjettoonni yeroon yaalii hanga ji'oota 6 kan hayyamuuf ta'ee, kunis tajaajila waliigalaa keessatti ni shallagamaaf."
        },
        {
          heading: "Kanfaltii Hojii/Mindaa",
          content: "Mindaan yeroo isaa eeggatee karaa elektirooniksii kaffalamuu qaba, sa'aatii dabalataa hojjetameefis kaffaltiin sa'aatii dabalataa walumaan kanfalama."
        },
        {
          heading: "Sa'aatii Hojii",
          content: "Sa'aatiin hojii ol'aanaan guyyaatti sa'a 8 (torbanitti sa'a 48) ta'ee, Ramadaanaa keessatti sa'aatiin hojii ni hir'ifama."
        },
        {
          heading: "Boqonnaa fi Aara Galfii",
          content: "Hojjetoonni boqonnaa guyya guyyaa fi yoo xiqqaate torbanitti guyyaa boqonnaa guutuu tokko argachuuf mirga qabu."
        },
        {
          heading: "Boqonnaa Dhukkubaa fi Inshuraansii Fayyaa",
          content: "Hojjettoonni boqonnaa dhukkubaa hanga guyyoota 90 kan argatan yoo ta'u, inshuraansii fayyaa hojjechiisaan kennamu Imireetiin garaagarummaa ni qabaata."
        },
        {
          heading: "Boqonnaa Waggaa & Boqonnaa Addaa",
          content: "Hojjetoonni boqonnaa waggaa guyyoota 30, boqonnaa dahumsaa, fi boqonnaa addaa taateewwan maatiidhaaf oolu kaffaltii waliin ni argatu."
        },
        {
          heading: "Hojii Addaan Kutuu & Hojii Jijjiiruu",
          content: "Hojjetoonni beeksisa duraa guyyoota 30-90 kennuun, hojicha gad-dhiisuu fi haala addaatiin gara hojjechiisaa biraatti jijjiiramuu ni danda'u."
        },
        {
          heading: "Faayidaa Xumura Tajaajilaa",
          content: "Hojjettoonni turtii waggoota tajaajila isaanii irratti hundaa'uun, kaffaltii bilisaa kan argatan ta'ee, kunis hanga mindaa waggaa lamaatti kan daangeffame dha."
        },
        {
          heading: "Kaffaltii Qaxarrii",
          content: "Hojjechiistonni baasii qacarrii ofumaa uwwisuu qabu; hojjettoota irraa kaffaltii qaxarrii kaffalchiisuu hin qaban."
        },
        {
          heading: "Sanadoota Eenyummaa Ibsan",
          content: "Hojjetoonni paaspoortii fi waraqaa eenyummaa isaanii qabachuuf mirga qabu, hojjechiistonnis fudhachuu hin danda'an."
        }
      ]
    }
  },
  saudi: {
    english: {
      title: "የቤት ሰራተኛ የሥራ ሕግ",
      sections: [
        {
          heading: "ውሌ",
          content: "ሰራተኞች በኩይዋ ፕሊትፎርም የተረጋገጠ እና በአረብኛ የተዘጋጀውን የስራ ውሌ የማግኘት መብት አሊቸው።"
        },
        {
          heading: "የሙከራ ጊዜ",
          content: "ሰራተኞች በስምምነት እስከ 180 ቀናት ሉራዘም የሚችሇውን እስከ 90 ቀናት ድረስ የሙከራ ጊዜ ሉሰጣቸው ይችሊሌ።"
        },
        {
          heading: "የስራ አገናኞች ክፍያዎች",
          content: "አሰሪዎች የአገናኞች ክፍያዎችን መሸፈን ያሇባቸው ሲሆን ሇስራ ቅጥራቸው የወጣውን ወጪ ሇማካካስ የደመወዝ ቅነሳ ማድረግ የተከሇከሇ ነው።"
        },
        {
          heading: "ደመወዝ",
          content: "ደመወዝ ቢያንስ በወር አንድ ጊዜ በባንክ ሂሳብ ወይም በደመወዝ መክፈያ ካርድ መከፈሌ አሇበት።"
        },
        {
          heading: "የስራ ሰዓት",
          content: "ከፍተኛው የስራ ሰዓት በቀን 8 (በሳምንት ሇ48 ሰዓታት) ሲሆን በረመዳን ጊዜ በቀን ወደ 6 ይቀንሳሌ።"
        },
        {
          heading: "እረፍት እና ፈቃድ",
          content: "ሰራተኞች በየቀኑ የእረፍት ፈቃድ እና ብዙውን ጊዜ አርብ ቀን የሚሰጠውን ከክፍያ ጋር ሳምንታዊ የእረፍት ቀን ይሰጣሌ።"
        },
        {
          heading: "የሕመም ፈቃድ እና የጤና መድን",
          content: "ሠራተኞች በዓመት እስከ 120 ቀናት የሕመም እረፍት የሚያገኙ ሲሆን የጤና መድን በአሰሪዎች ይሰጣሌ።"
        },
        {
          heading: "ዓመታዊ ፈቃድ እና ሌዩ ፈቃድ",
          content: "ሠራተኞች የ21 ቀናት የዓመት ፈቃድ፣ ከአምስት ዓመት በኋሊ ወደ 30 ቀናት በመጨመር፣ እንዲሁም እንደ ሐጅ እና የወሉድ ሊሊ ዝግጅቶች ሌዩ ፈቃድ የማግኘት መብት አሊቸው።"
        },
        {
          heading: "የሥራ ውሌ ማቋረጥ እና የሥራ መደብ መቀየር",
          content: "የትኛውም ወገን ሊሌተወሰነ ጊዜ የተደረገውን ውሌ ማስታወቂያ በመስጠት ማቋረጥ ይችሊሌ፤ ሰራተኞች በአሰሪ ፈቃድ ወይም በተወሰኑ ሁኔታዎች መሰረት ስራዎችን ሇላሊ ጊዜ ማስተሊሇፍ ይችሊለ።"
        },
        {
          heading: "የስንብት ክፍያ",
          content: "ሰራተኞች በአገሌግልት ዘመን ሊይ የተመሰረተ ከአስር አመታት በኋሊ ከሙሉ ጥቅማጥቅሞች ጋር የስንብት ክፍያ ያገኛለ።"
        },
        {
          heading: "የመታወቂያ ሰነዶች",
          content: "ሰራተኞች ፓስፖርታቸውን እና መታወቂያቸውን የመያዝ መብት ያሊቸው ሲሆን አሰሪዎች ሉነጥቋቸው አይችሉም።"
        }
      ]
    },
    arabic: {
      title: "DAMBII HOJJETOOTA MANA KEESSAA",
      sections: [
        {
          heading: "Walta'iinsa Waliigaltee",
          content: "Hojjettoonni waliigaltee hojii barreeffamaa Afaan Arabaatiin, karaa tooftaa Qiwaan mirkanaa'e argachuuf mirga qabu."
        },
        {
          heading: "Yeroo Yaalii Qacarrii",
          content: "Hojjettoonni hanga guyyoota 90'tti qacarrii yeroo yaaliin kaa'amuu ni danda'u, kunis waliigalteedhaan hanga guyyoota 180'tti dheerachuu ni danda'a."
        },
        {
          heading: "Kaffaltii Qaxarrii",
          content: "Hojjechiistonni kaffaltii qacarrii uwwisuu qabu; baasii dhimma hojii ilaalchisee hojjetaarraa mindaa hir'isuun dhorkaa dha."
        },
        {
          heading: "Kanfaltii Hojii/Mindaa",
          content: "Mindaan yoo xiqqaate ji'atti al tokko karaa herrega baankii ykn Kaardii Mindaa kaffalamuu qaba."
        },
        {
          heading: "Sa'aatii Hojii",
          content: "Sa'aatiin hojii inni ol'aanaan guyyaatti sa'a 8 (torbanitti sa'a 48) ta'ee; yeroo Ramadaanaa guyyaatti gara sa'a 6'tti gadi bu'a."
        },
        {
          heading: "Boqonnaa fi Aara Galfii",
          content: "Hojjetoonni boqonnaa aara galfii guyyaa guyyaa fi guyyaa boqonnaa torbanitti kaffaltiin itti kanfalamuuf argachuuf mirga qabu; boqonnaan kunis yeroo baay'ee Jimaatarra oola."
        },
        {
          heading: "Boqonnaa Dhukkubaa fi Inshuraansii Fayyaa",
          content: "Hojjettoonni waggaatti boqonnaa dhukkubaa hanga guyyoota 120 kan argatan yoo ta'u, dabalataanis inshuraansii fayyaa hojjechiistota irraa ni kennamaaf."
        },
        {
          heading: "Boqonnaa Waggaa & Boqonnaa Addaa",
          content: "Hojjettoonni boqonnaa waggaa guyyoota 21, tajaajila waggaa shanii booda gara guyyoota 30'tti guddatu; dabalataan boqonnaa addaa taateewwan akka Hajjii fi Dahumsaa argachuuf mirga qabu."
        },
        {
          heading: "Qaxarrii Addaan Kutuu & Hojii Jijjiiruu",
          content: "Qaamni kamiyyuu waliigaltee yeroo hin murtoofneef beeksisa kennuudhaan addaan kutuu ni danda'a; hojjettoonni hayyama hojjechiisaatiin ykn haala addaatiin hojii nama biraatiif dabarsuu ni danda'u."
        },
        {
          heading: "Faayidaa Yeroo Xumura Tajaajilaa",
          content: "Hojjettoonni kaffaltii hojii irraa gaggeeffamuu waggoota tajaajila isaanii irratti hundaa'uun kan argatan yoo ta'u, faayidaa guutuun tajaajila waggaa kudhanii booda kennamaaf."
        },
        {
          heading: "Sanadootni Waa'ee Eenyummaa",
          content: "Hojjetoonni paaspoortii fi waraqaa eenyummaa isaanii ofumaa qabachuuf mirga qabu; hojjechiistonnis ragaalee kanneen hojjetoota harkaa fuudhuu hin danda'an."
        }
      ]
    }
  },
  kuwait: {
    english: {
      title: "የቤት ሰራተኛ የሰራተኛ ሕግ",
      sections: [
        {
          heading: "የመጀመሪያ ደረጃ ድንጋጌዎች",
          content: "ከቤት ሰራተኞች፣ አሰሪዎች እና የሥራ አገናኝ ቢሮዎች ጋር የተያያዙ ቁልፍ ደንቦችን ይገለጻል።"
        },
        {
          heading: "የተዋዋይ ወገኖች ግዴታዎች",
          content: "የሥራ አገናኝ ቢሮዎችን፣ አሰሪዎችን እና የቤት ሰራተኞችን ኃላፊነቶች ይገለጻል።"
        },
        {
          heading: "የሥራ አገናኝ ቢሮዎች ግዴታዎች",
          content: "ሠራተኞችን ማስከፈል እና በብሄር ወይም በጾታ መፈረጅ ያለ ሥነ-ምግባር የጎደላቸው ድርጊቶችን የተከለከሉ ናቸው።"
        },
        {
          heading: "የቤት ውስጥ ሰራተኛ ግዴታዎች",
          content: "ሰራተኞች የውሌ ግዴታዎችን መፈጸም፣ የአሰሪዎችን ንብረት ማክበር እና ሚስጥራዊነትን መጠበቅ እንዳለባቸው ይገለጻል።"
        },
        {
          heading: "የስራ እና የቅጥር ውሌ",
          content: "በአሰሪዎች እና በቤት ሰራተኞች መካከል በሚደረግ ውሌ ላይ አስፈላጊ የሆኑትን ነገሮች በዝርዝር ይገለጻል።"
        },
        {
          heading: "ደመወዝ",
          content: "የደመወዝ ክፍያ ደንቦችን ያወጣል፣ ለሠራተኞች በወቅቱ እና ፍትሃዊ ክፍያ መፈጸሙን ያረጋግጣል።"
        },
        {
          heading: "የስራ ሰዓት እና ፈቃድ",
          content: "የስራ ሰዓቱን በቀን እስከ 12 ብቻ እንዲሰሩ ይገድባል፣ የእረፍት ጊዜያት እና ከክፍያ ጋር ፍቃድ እንዲሰጡ ያስገድዳል።"
        },
        {
          heading: "የስንበት ክፍያ",
          content: "ሠራተኞች ውላቸውን ከጨረሱ በኋላ የስንብት ክፍያ ዋስትና ይሰጣል።"
        },
        {
          heading: "ቅጣቶች",
          content: "ቅጣቶችን እና የፈቃድ መሰረዝን ጨምሮ ህጉን በመጣሱ አሰሪዎች እና ስራ አገናኝ ቢሮዎች ላይ ስለሚተላለፈው እርምጃ ይዘረዝራል።"
        },
        {
          heading: "አጠቃላይ ድንጋጌዎች",
          content: "ስለሥራ አገናኝ ቢሮዎች የፍቃድ አሰጣጥ ደንቦችን፣ የስራ ገደቦች እና የስራ አገናኝ ቢሮዎች የማሟያ ደንቦችን ይሸፍናል።"
        }
      ]
    },
    arabic: {
      title: "DAMBII HOJJETOOTA MANA KEESSAA",
      sections: [
        {
          heading: "Dambiiwwan Seensaa",
          content: "Haalota hojjetoota mana keessaa, hojjechiiftotaa fi waajjiraalee qacarrii hojjetootaa waliin wal qabatu ibsa."
        },
        {
          heading: "Dirqama Qaamolee Waliigaltee Qacarrii",
          content: "Itti gaafatamummaa waajjiraalee qacarrii, hojjechiistotaa, fi hojjettoota mana keessaa ni ibsa."
        },
        {
          heading: "Dirqama Waajjiraalee Qaxarrii",
          content: "Hojiiwwan naamusa cabsan kan akka hojjettoota kaffaltii kanfalchiisuu fi sanyummaa ykn koorniyaa irratti hundaa'uun ramaduu ni dhorka/ni ittisa."
        },
        {
          heading: "Dirqama Hojjettuu/hojjetaa Mana keessaa",
          content: "Hojjettoonni dirqama waliigaltee hordofuu, qabeenya hojjechiistotaa kabajuu, fi iccitii eeguu akka qaban ibsa."
        },
        {
          heading: "Hojii fi Waliigaltee Hojii",
          content: "Qabxiilee barbaachisoo waliigaltee seera qabeessa hojjechiistotaa fi hojjettoota mana keessaa gidduutti taasifaman bal'inaan ni ibsa."
        },
        {
          heading: "Mindaa ilaalchisee",
          content: "Seera kaffaltii mindaa, beenyaa hojjettootaaf yeroo fi haqa qabeessa ta'e akka kanfalamu ni diriirsa; akkasumas ni mirkaneessa."
        },
        {
          heading: "Sa'aatii Hojii fi Boqonnaa",
          content: "Sa'aatii hojii guyyaatti sa'aatii 12'tti daangeessa, yeroo boqonnaa ni ajaja, akkasumas boqonnaa kaffaltii waliin ni kenna."
        },
        {
          heading: "Mindaa/Kanfaltii Tajaajilaa Xumura Tajaajilaa",
          content: "Hojjettoonni waliigaltee isaanii erga xumuranii booda kaffaltii hojii irraa gaggeeffamuu akka argatan wabii ni kenna."
        },
        {
          heading: "Adabbii",
          content: "Bu'aa hojjechiistotni fi waajjiraaleen qacarrii seera cabsuu isaaniin, adabbii maallaqaa fi hayyama haquu dabalatee hordofsiisu ni tarreessa."
        },
        {
          heading: "Tumaalee Waliigalaa",
          content: "Seerota hayyama kennuu, daangeessawwan daldalaa, fi dambiiwwan walsimannaa waajjiraalee qacarrii ni hammata."
        }
      ]
    }
  },
  lebanon: {
    english: {
      title: "የቤት ሰራተኛ የሥራ ሕግ መመሪያ",
      sections: [
        {
          heading: "የቅጥር ውሌ",
          content: "የሥራ ቅጥርለ አስፈላጊ ነጥቦችን፣ አይነቶች እና የህግ መስፈርቶችን ይሸፍናል።"
        },
        {
          heading: "የሰራተኛ መብቶች እና ኃላፊነቶች",
          content: "እንደ ደመወዝ፣ ፈቃድ እና የስራ ቦታ ጥበቃ ያለ የሰራተኞችን መብቶች ይገለጻል።"
        },
        {
          heading: "የአሰሪው መብቶች እና ኃላፊነቶች",
          content: "ፍትሃዊ ደመወዝ፣ ደህንነቱ የተጠበቀ የስራ ሁኔታ መፍጠርን እና የሰራተኛ ህጎችን ማክበርን ጨምሮ የአሰሪ ግዴታዎችን ይገለጻል።"
        },
        {
          heading: "የተወሰኑ ሰራተኞች ልዩ ድንጋጌዎች",
          content: "የሴቶች፣ ወጣቶች እና ልዩ ድጋፍ የሚያስፈልጋቸው ሰዎች ስለሚደረግላቸው ልዩ ጥበቃዎችን በዝርዝር ይገለጻል።"
        },
        {
          heading: "የቅጥር ውሌ ስለማቋረጥ",
          content: "የማስታወቂያ ጊዜዎችን እና ማካካሻዎችን ጨምሮ የሥራ ውለ ጊዜን ለማቆም ስለተቀመጡት ህጋዊ ምክንያቶች ያብራራል።"
        },
        {
          heading: "የሥራ አደጋዎች",
          content: "ከሥራ ጋር የተያያዙ ጉዳቶችን እና ስለሚሰጥ የህክምና አገልግሎት እና የአሰሪው የክፍያ ግዴታዎችን ይገለጻል።"
        },
        {
          heading: "የውጭ ዜጎች ሥራ ውሌ",
          content: "የሥራ ፈቃድ እና ህጋዊ ጥበቃን ጨምሮ ዜጋ ያልሆኑ ሠራተኞችን የቅጥር ደንቦችን ይገልፃል።"
        },
        {
          heading: "የውሌ አለመግባባት",
          content: "የሽምግልና እና የጉልበት ዳኝነትን ጨምሮ የግጭት አፈታት ዘዴዎችን ይገለጻል።"
        },
        {
          heading: "ማህበራዊ ዋስትና",
          content: "እንደ የጤና መድን፣ የወሊድ ፈቃድ እና የአገልግሎት ማብቂያ ክፍያ ያለ ጥቅማ ጥቅሞችን አጠቃላይ ዝርዝር ያቀርባል።"
        },
        {
          heading: "የሠራተኛ ማኅበራት እና የሙያተኞች ማኅበራት",
          content: "የሠራተኞችን የመደራጀት መብቶች፣ የሠራተኛ ማኅበራት ደንቦችን እና ፍትሐዊ የሥራ መባረር ስለሚደረጉ ጥበቃዎች ያብራራል።"
        }
      ]
    },
    arabic: {
      title: "DAMBII HOJJETOOTA MANA KEESSAA",
      sections: [
        {
          heading: "Waliigaltee Hojii",
          content: "Qaamolee barbaachisoo, gosoota, akkasumas ulaagaalee seeraa waliigaltee hojii kan of keessatti hammatu dha."
        },
        {
          heading: "Mirgaa fi Itti Gaafatamummaa Hojjetaa",
          content: "Mirga hojjettootaa kan akka mindaa, boqonnaa, fi eegumsa bakka hojii ni ibsa."
        },
        {
          heading: "Mirgaa fi Itti Gaafatamummaa Hojjechiisaa",
          content: "Mindaa haqa qabeessa, haala hojii nageenya qabuu, fi seera hojjetaa kabajuu dabalatee dirqama hojjechiisaa ni ibsa."
        },
        {
          heading: "Tumaalee Addaa Hojjettoota Murtaa'aniif",
          content: "Eegumsa addaa dubartoota, dargaggoota, fi namoota fedhii addaa qabaniif taasifamu bal'inaan ni ibsa."
        },
        {
          heading: "Waliigaltee Hojii Addaan Kutuu",
          content: "Yeroo akeekkachiisaa fi beenyaa dabalatee, sababoota seeraa waliigaltee hojii xumuruuf gargaaran ni ibsa."
        },
        {
          heading: "Balaa Hojiirraa",
          content: "Miidhaa hojiin walqabatee dhufuu fi dirqama hojjettootaaf kunuunsa fayyaa taasisuu fi kanfaltii beenyaa raawwachuu hojjechiisaa ni ibsa."
        },
        {
          heading: "Qaxarrii Lammiilee Biyya Alaa",
          content: "Hayyama 'van' fi eegumsa seeraa dabalatee dambiiwwan hojjettoota lammii biyya alaa qacaruuf gargaaran ni ibsa."
        },
        {
          heading: "Falmii Hojjeetaa fi Hojjechiisaa",
          content: "Jiddu-seentummaa fi araarsa dhimma hojjetaa fi hojjechiisaa dabalatee, mala falmiin itti furamu ni ibsa."
        },
        {
          heading: "Wabii Hawaasummaa",
          content: "Faayidaa akka inshuraansii fayyaa, boqonnaa dahumsaa, fi beenyaa xumura tajaajilaa ilaalchisee ibsa waliigalaa ni kenna."
        },
        {
          heading: "Waldaa Hojjetootaa fi Waldaa Ogeeyyii",
          content: "Mirga hojjettoonni gurmaa'uu, dambiiwwan waldaa hojjettootaa, fi eegumsa hojii irraa ari'amuu haqa qabeessa hin taane irratti ni mari'ata."
        }
      ]
    }
  },
  jordan: {
    english: {
      title: "የቤት ሰራተኛ ሰራተኛ ህግ",
      sections: [
        {
          heading: "በቀዳሚነት",
          content: "የውለ ቁልፍ ሁኔታዎች እና የቤት ሰራተኞች ህጉን ወሰን ይገለጻል።"
        },
        {
          heading: "የሠራተኛ ቁጥጥር",
          content: "የሠራተኛ ተቆጣጣሪዎች እና የአሠሪ ግዴታዎች ኃላፊነቶችን በዝርዝር ይገለጻል።"
        },
        {
          heading: "የምልመላ እና የስራ መመሪያ",
          content: "የስራ አገናኝ ቢሮዎችን እና የቅጥር አሰራሮችን ይቆጣጠራል።"
        },
        {
          heading: "የቅጥር ውሌ",
          content: "የቅጥር ውሌ ደንቦችን፣ ሁኔታዎችን እና የሚቋረጡባቸውን ሁኔታዎች ይገለጻል።"
        },
        {
          heading: "የሙያ ማሰልጠኛ ውልች",
          content: "ለስልጠና እና የክህሎት ማጎልበቻ መርሃ ግብሮችን ይሸፍናል።"
        },
        {
          heading: "የጋራ ስምምነቶች",
          content: "በአሰሪዎች እና በሠራተኛ ማህበራት መካከል የሚደረጉ ስምምነቶችን ያስተዳድራል።"
        },
        {
          heading: "የደመወዝ ክፍያ ጥበቃ",
          content: "የደመወዝ አከፋፈል ፖሊሲዎችን፣ ተቀናሾችን እና ዝቅተኛ የደመወዝ መመሪያዎችን ይገለጻል።"
        },
        {
          heading: "የሥራና የዕረፍት ጊዜ አደረጃጀት",
          content: "የሥራ ሰዓትን፣ የትርፍ ሰዓትን፣ የዕረፍት ጊዜን እና የዕረፍት ጊዜን ያብራራል።"
        },
        {
          heading: "የስራ ደህንነት እና ጤና",
          content: "በሥራ ቦታ የደህንነት ደረጃዎችን እና የአሰሪ ኃላፊነቶችን ያዘጋጃል።"
        },
        {
          heading: "የሥራ ጉዳቶች እና በሽታዎች",
          content: "ከሥራ ጋር ለተያያዙ ጉዳቶች እና በሽታዎች ስለሚከፈል ክፍያ ያገልጻል።"
        },
        {
          heading: "የሠራተኛ ማኅበራትና አሰሪዎች ማኅበራት",
          content: "የኅብረትና ማኅበራት አመሰራረትና አሠራር ይቆጣጠራል።"
        }
      ]
    },
    arabic: {
      title: "DAMBII HOJJETOOTA MANA KEESSAA",
      sections: [
        {
          heading: "Seensa",
          content: "Dambiiwwan fi daangaalee seera hojjetaa fi hojjechiisaa ni ibsa."
        },
        {
          heading: "Sakattii Hojii",
          content: "Waa'ee itti gaafatamummaa inispeektaroota hojii fi dirqama hojjechiistotaa bal'inaan ibsa."
        },
        {
          heading: "Qajeelfama Qaxarrii fi Sirna Hojmaataa",
          content: "Waajjiraalee qaxarrii fi barmaatilee qacarrii ni to'ata."
        },
        {
          heading: "Waliigalteewwan Hojii",
          content: "Waa'ee haalota, dambiiwwan fi addaan cituu waliigaltee hojii ni balballoomsa/ibsa."
        },
        {
          heading: "Waliigaltee Leenjii Ogummaa",
          content: "Seerota leenjii hojiirraa fi sagantaalee dagaagina ogummaa ni haguuga."
        },
        {
          heading: "Waliigaltee Gamtaa",
          content: "Waliigalteewwan hojjechiistotaa fi waldaalee hojjettootaa gidduutti taasifamu ni to'ata."
        },
        {
          heading: "Eegumsa Gatii Tajaajilaaf Kanfalamu (Mindaa)",
          content: "Imaammata mindaa, hir'ina, fi qajeelfama mindaa isa gad'aanaa ibsa."
        },
        {
          heading: "Gurmaa'ina Hojii fi Yeroo Boqonnaa",
          content: "Akkasumas sa'aatii hojii, sa'aatii hojii dabalataa, yeroo boqonnaa, fi imaammata boqonnaa ni ibsa."
        },
        {
          heading: "Nageenyaa fi Fayyummaa Hojiirraa",
          content: "Ulaagaa nageenya bakka hojii fi itti gaafatamummaa hojjechiisaa ni agarsiisa."
        },
        {
          heading: "Miidhaa Hojiirraa fi Dhukkuba Hojii",
          content: "Miidhaa fi dhukkuba hojiin walqabatee dhufuuf tooftaa beenyaa ni diriirsa."
        },
        {
          heading: "Waldaa Hojjetootaa fi Waldaalee Hojjechiistotaa",
          content: "Waldaalee fi waldaalee ijaaramuu fi hojii isaanii ni to'ata."
        }
      ]
    }
  },
  oman: {
    english: {
      title: "የቤት ሰራተኛ ደንቦቹ",
      sections: [
        {
          heading: "ውሌ",
          content: "አሰሪዎች የስራ ሁኔታዎችን፣ ደመወዝ እና መብቶችን የሚገሌጽ የጽሁፍ ውሌ በአረብኛ እና በእንግሉዝኛ ማቅረብ አሇባቸው።"
        },
        {
          heading: "የሙከራ ጊዜ",
          content: "ሠራተኞች እስከ 90 ቀናት የሚደርስ የሚከፈሌበት የሙከራ ጊዜ የማግኘት መብት አሊቸው።"
        },
        {
          heading: "ደመወዝ",
          content: "ሠራተኞች በስምምነቱ መሠረት በየወሩ መጨረሻ ደመወዛቸውን በጥሬ ገንዘብ ወይም በባንክ በኩሌ ማግኘት አሇባቸው።"
        },
        {
          heading: "የስራ ሰአት",
          content: "ሇቤት ሰራተኞች የተወሰነ የስራ ሰአት የሇም ነገር ግን በኦማን ውስጥ ያለ አብዛኛዎቹ ዘርፎች የ9 ሰአት የስራ ገደብ አሊቸው።"
        },
        {
          heading: "ዕረፍት",
          content: "ሰራተኞች በሳምንት አንድ ቀን እረፍት ክፍያር ወይም እንዲሰሩ ከተፈሇጉ ደግሞ ተሇዋጭ የእረፍት ጊዜ የማግኘት መብት አሊቸው።"
        },
        {
          heading: "የሕመም ፈቃድ እና የጤና እንክብካቤ",
          content: "አሰሪዎች በውለ ጊዜ ውስጥ ተገቢውን የህክምና አገሌግልት መስጠት አሇባቸው።"
        },
        {
          heading: "የዓመት ፈቃድ",
          content: "ሠራተኞች ሇተከታታይ ሁሇት ዓመት ሇሚሰጡበት የአገሌግልት ዘመን ሇ 30 ቀናት የሚከፈሌበት ፈቃድ የማግኘት መብት አሊቸው።"
        },
        {
          heading: "የሥራ ውሌ ስሇማቋረጥ እና ሥራ ስሇመቀየር",
          content: "ሠራተኞች አሰሪው ጥቃት ቢፈጽምባቸው ወይም ውለን መጣሱ ማረጋገጥ ከቻለ ውሊቸውን ሉያቋርጡ ይችሊለ።"
        },
        {
          heading: "የአገሌግልት ዘመን ማብቂያ ጥቅማ ጥቅሞች",
          content: "ሕጉ ጥቅማጥቅሞችን አይገሌጽም ነገር ግን ሰራተኞች ሇማንኛውም ያሌተጠቀሙበት የዕረፍት ፈቃድ ክፍያ ማግኘት አሇባቸው።"
        },
        {
          heading: "የሰራተኛ ምሌመሊ ክፍያ",
          content: "አሰሪዎች እና የስራ አገናኝ ጽ/ቤቶች ሠራተኞቻቸውን ከቅጥሩ ጋር የተያያዙ ምንም አይነት ክፍያዎችን ማስከፈሌ አይችለም።"
        },
        {
          heading: "የመታወቂያ ሰነዶችዎ",
          content: "ሰራተኞች ፓስፖርታቸውን እና መታወቂያቸውን የመያዝ መብት ያሊቸው ሲሆን አሰሪዎችም ይህን ንብረት መንጠቅ ህገ-ወጥ ነው።"
        }
      ]
    },
    arabic: {
      title: "DAMBII HOJJETOOTA MANA KEESSAA",
      sections: [
        {
          heading: "Waliigaltee",
          content: "Hojjechiistonni waliigaltee barreeffamaa haala hojii, mindaa, fi mirga dabalatee ibsu, Afaan Arabaa fi Ingiliffaatiin dhiyeessuu qabu."
        },
        {
          heading: "Yeroo Yaalii",
          content: "Hojjettoonni yeroo yaaliif ramadaman kaffaltii hanga guyyoota 90 ta'u argachuuf mirga qabu."
        },
        {
          heading: "Mindaa",
          content: "Hojjettoonni mindaa isaanii maallaqa dheedhiin ykn karaa baankii dhuma tokkoon tokkoo ji'aa irratti akkaataa waliigaltee irra ga'ameen argachuu qabu."
        },
        {
          heading: "Sa'aatii Hojii",
          content: "Hojjettoota mana keessaatiif sa'aatiin hojii murtaa'e hin jiru, garuu, dameelee (sektarootni) Oomaan baay'een isaanii daangaa hojii sa'aatii 9 qabu."
        },
        {
          heading: "Boqonnaa fi Yeroo Aara Galfii",
          content: "Hojjettoonni torbanitti mirga boqonnaa guyyaa tokko argachuu ni qabu; yoo hojjechuun barbaadame beenyaa waliin ykn guyyaa boqonnaa filatanitti."
        },
        {
          heading: "Boqonnaa Dhukkubaa fi Kunuunsa Fayyaa",
          content: "Hojjechiistonni yeroo waliigaltee hunda keessatti, hojjetootaaf kunuunsa fayyaa barbaachisaa ta'e kennuu qabu."
        },
        {
          heading: "Boqonnaa Waggaa",
          content: "Hojjetoonni tajaajila walitti fufiinsa qabu waggaa lamaaf, boqonnaa kaffaltiin itti raawwatamu guyyoota 30 argachuuf mirga qabu."
        },
        {
          heading: "Waliigalteen Hojii Addaan Cituu & Hojii Jijjiiruu",
          content: "Hojjettoonni miidhaa hojjechiisaa ykn waliigalteen cabuu yoo mirkaneeffatan, waliigaltee hojii isaanii addaan kutuu ni danda'u."
        },
        {
          heading: "Faayidaa Xumura Tajaajilaatti Argamu",
          content: "Seerichi waa'ee faayidaa hin ibsu, ta'us, hojjettoonni boqonnaa itti hin fayyadamiin kamiifuu mirga beenyaa argachuu qabu."
        },
        {
          heading: "Kaffaltii Qaxarrii",
          content: "Hojjechiistonni fi waajjiraaleen qacarrii kaffaltii qacarrii wajjin walqabatu kamiyyuu hojjettoota kaffalchiisuu hin danda'an."
        },
        {
          heading: "Sanadoota Waa'ee Eenyummaa Ibsan",
          content: "Hojjetoonni paaspoortii fi waraqaa eenyummaa isaanii qabachuuf mirga qabu, akkasumas hojjechiistonni isaan irraa fuudhuun dhorkaa fi seeraan ala dha."
        }
      ]
    }
  }
}

export function KnowYourRightsSection() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>("qatar")
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
    const currentIndex = selectedCountry ? countries.findIndex(c => c.id === selectedCountry) : 0;
    let nextIndex;
    
    if (direction === "right") {
      nextIndex = (currentIndex + 1) % countries.length;
    } else {
      nextIndex = (currentIndex - 1 + countries.length) % countries.length;
    }
    
    setSelectedCountry(countries[nextIndex].id);

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const elements = container.children;
      if (elements[nextIndex]) {
        const button = elements[nextIndex] as HTMLElement;
        const scrollPos = button.offsetLeft - (container.clientWidth / 2) + (button.offsetWidth / 2);
        container.scrollTo({
          left: scrollPos,
          behavior: "smooth"
        });
      }
    }
  }

  const content = selectedCountry ? countryContent[selectedCountry] : null

  return (
    <section ref={sectionRef} id="know-your-rights" className="bg-secondary/30">
      {/* ── Editorial header band ── */}
      <div className="relative bg-primary overflow-hidden">
        {/* Faint grid lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Giant decorative shield */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[160%] opacity-[0.06] text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <span className="inline-flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-[0.2em] mb-5">
                <span className="block w-6 h-px bg-white/50" />
                Migrant Rights Information
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] text-balance">
                Know Your{" "}
                <span className="relative inline-block">
                  Rights
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full text-white/40"
                    viewBox="0 0 160 8"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,5 Q40,0 80,5 T160,5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Right */}
            <div
              className={`pl-0 lg:pl-10 lg:border-l border-white/20 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <p className="text-white/80 text-lg md:text-xl leading-relaxed text-pretty mb-6">
                Select your destination country below to learn about your <strong className="text-white font-semibold">legal rights and protections</strong> as a migrant worker — in both Amharic & Afaan Oromoo.
              </p>
              <div className="flex items-center gap-3 text-white/60 text-sm font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/60 inline-block" />
                  8 countries covered
                </span>
                <span className="w-px h-4 bg-white/30" />
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/60 inline-block" />
                  Amharic & Afaan Oromoo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-10 pb-16">

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
                className={`flex-shrink-0 snap-center group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div
                  className={`w-40 md:w-48 p-4 rounded-2xl border-2 transition-all duration-300 ${selectedCountry === country.id
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
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden shrink-0 border border-border/50">
                      <img src="https://flagcdn.com/w80/et.png" alt="Ethiopia flag" className="w-full h-full object-cover" crossOrigin="anonymous" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Amharic</h4>
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
                <div className="p-6 md:p-8 bg-secondary/20">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden shrink-0 border border-border/50">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Oromia_Region.svg" alt="Oromia flag" className="w-full h-full object-cover" crossOrigin="anonymous" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Afaan Oromoo</h4>
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
