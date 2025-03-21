// Hijri date conversion utility
export class HijriDate {
  year: number
  month: number
  date: number
  hours: number
  minutes: number
  seconds: number
  day: number

  monthNames = {
    ar: [
      "محرم",
      "صفر",
      "ربيع الأول",
      "ربيع الثاني",
      "جمادى الأولى",
      "جمادى الآخرة",
      "رجب",
      "شعبان",
      "رمضان",
      "شوال",
      "ذو القعدة",
      "ذو الحجة",
    ],
    en: [
      "Muharram",
      "Safar",
      "Rabi' al-Awwal",
      "Rabi' al-Thani",
      "Jumada al-Awwal",
      "Jumada al-Thani",
      "Rajab",
      "Sha'ban",
      "Ramadan",
      "Shawwal",
      "Dhu al-Qi'dah",
      "Dhu al-Hijjah",
    ],
  }

  dayNames = {
    ar: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  }

  constructor(year?: number, month?: number, date?: number) {
    const today = new Date()

    this.hours = today.getHours()
    this.minutes = today.getMinutes()
    this.seconds = today.getSeconds()

    // If no arguments, use current date
    if (year === undefined) {
      const d = this.gregorianToHijri(today.getFullYear(), today.getMonth() + 1, today.getDate())
      this.year = d.year
      this.month = d.month
      this.date = d.date
      this.day = today.getDay()
    } else {
      this.year = year
      this.month = month || 1
      this.date = date || 1

      // Calculate day of week
      const g = this.hijriToGregorian(this.year, this.month, this.date)
      const gregDate = new Date(g.year, g.month - 1, g.date)
      this.day = gregDate.getDay()
    }
  }

  gregorianToHijri(year: number, month: number, date: number) {
    // Julian day calculation
    const jd = this.gregorianToJulian(year, month, date)

    // Hijri date calculation
    const l = jd - 1948440 + 10632
    const n = Math.floor((l - 1) / 10631)
    const l1 = l - 10631 * n + 354
    const j =
      Math.floor((10985 - l1) / 5316) * Math.floor((50 * l1) / 17719) +
      Math.floor(l1 / 5670) * Math.floor((43 * l1) / 15238)
    const l2 =
      l1 -
      Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
      Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
      29

    const hijriMonth = Math.floor((24 * l2) / 709)
    const hijriDate = l2 - Math.floor((709 * hijriMonth) / 24)
    const hijriYear = 30 * n + j - 30

    return { year: hijriYear, month: hijriMonth + 1, date: hijriDate }
  }

  hijriToGregorian(year: number, month: number, date: number) {
    // Julian day calculation from Hijri
    const jd =
      Math.floor((11 * year + 3) / 30) + 354 * year + 30 * month - Math.floor((month - 1) / 2) + date + 1948440 - 385

    // Gregorian date calculation
    const z = jd - 1867216.25
    const a = Math.floor(z / 36524.25)
    const b = z + 1 + a - Math.floor(a / 4)
    const c = Math.floor((b - 122.1) / 365.25)
    const d = 365 * c + Math.floor(c / 4)
    const e = Math.floor((b - d) / 30.6001)

    const gregDate = Math.floor(b - d - Math.floor(30.6001 * e))
    const gregMonth = e - (e > 13.5 ? 13 : 1)
    const gregYear = c - (gregMonth < 2.5 ? 0 : 1) + (gregMonth < 2.5 ? 4716 : 4715)

    return { year: gregYear, month: gregMonth, date: gregDate }
  }

  gregorianToJulian(year: number, month: number, date: number) {
    if (month < 3) {
      year -= 1
      month += 12
    }

    const a = Math.floor(year / 100)
    const b = Math.floor(a / 4)
    const c = 2 - a + b
    const e = Math.floor(365.25 * (year + 4716))
    const f = Math.floor(30.6001 * (month + 1))

    return c + date + e + f - 1524.5
  }

  getMonthName(lang: "ar" | "en" = "en") {
    return this.monthNames[lang][this.month - 1]
  }

  getDayName(lang: "ar" | "en" = "en") {
    return this.dayNames[lang][this.day]
  }

  format(format: string, lang: "ar" | "en" = "en") {
    return format
      .replace("YYYY", this.year.toString())
      .replace("MM", this.month.toString().padStart(2, "0"))
      .replace("M", this.month.toString())
      .replace("DD", this.date.toString().padStart(2, "0"))
      .replace("D", this.date.toString())
      .replace("MONTH", this.getMonthName(lang))
      .replace("DAY", this.getDayName(lang))
  }

  static getDaysInMonth(year: number, month: number) {
    // Hijri months alternate between 30 and 29 days, with adjustments
    const isLeapYear =
      year % 30 === 2 ||
      year % 30 === 5 ||
      year % 30 === 7 ||
      year % 30 === 10 ||
      year % 30 === 13 ||
      year % 30 === 16 ||
      year % 30 === 18 ||
      year % 30 === 21 ||
      year % 30 === 24 ||
      year % 30 === 26 ||
      year % 30 === 29

    // Even months have 29 days, odd months have 30 days
    // Except in leap years, the 12th month (Dhu al-Hijjah) has 30 days
    if (month === 12 && isLeapYear) {
      return 30
    } else if (month % 2 === 0) {
      return 29
    } else {
      return 30
    }
  }
}

