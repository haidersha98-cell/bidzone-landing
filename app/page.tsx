"use client";

import { useState, Fragment, useCallback } from "react";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import ParallaxOnScroll from "@/components/animations/ParallaxOnScroll";
import Image from "next/image";
import Snackbar from "@/components/Snackbar";
import { isAndroid, isIOS } from "@/utils/device";

export default function Home() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.bidzone.app";
  const APP_STORE_URL = "#"; // Placeholder for future App Store URL

  const handleDownload = useCallback(() => {
    if (isAndroid()) {
      window.open(GOOGLE_PLAY_URL, "_blank");
    } else if (isIOS()) {
      const message = language === "ar" 
        ? "سيتوفر قريبًا على App Store" 
        : "Coming soon on the App Store";
      setSnackbarMessage(message);
      setSnackbarVisible(true);
    } else {
      // Desktop: default to Google Play
      window.open(GOOGLE_PLAY_URL, "_blank");
    }
  }, [language]);

  const handleGooglePlayClick = useCallback(() => {
    if (isIOS()) {
      const message = language === "ar" 
        ? "سيتوفر قريبًا على App Store" 
        : "Coming soon on the App Store";
      setSnackbarMessage(message);
      setSnackbarVisible(true);
    } else {
      window.open(GOOGLE_PLAY_URL, "_blank");
    }
  }, [language]);

  const handleAppStoreClick = useCallback(() => {
    const message = language === "ar" 
      ? "سيتوفر قريبًا على App Store" 
      : "Coming soon on the App Store";
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  }, [language]);

  return (
    <div className="min-h-screen bg-white" dir={language === "ar" ? "rtl" : "ltr"}>
      {language === "ar" ? (
  <Fragment>
          {/* Navbar */}
          <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="text-2xl font-bold text-blue-800">
                BidZone
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setLanguage("en")}
                  className="border-2 border-blue-600 text-blue-600 px-3 py-1.5 rounded-2xl text-sm hover:bg-blue-50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-xl font-semibold focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  EN
                </button>
                <button 
                  onClick={handleDownload}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl transition-all duration-200 font-semibold hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  حمِّل التطبيق
                </button>
              </div>
            </div>
          </nav>

          <FadeInWhenVisible>


            {/* Hero Section - Phase 1 */}
          <section className="w-full bg-gradient-to-b from-blue-50/60 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-11 sm:py-20 md:py-24 lg:py-32 lg:max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
                {/* Text Content - Right Side (Arabic RTL) */}
                <div className="order-1 md:order-2 text-center md:text-right space-y-5 md:space-y-8 lg:space-y-8">
                  {/* Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight md:leading-tight lg:leading-snug fade-up">
                    بيدزون — مزادات فورية على منتجات أصلية بأسعار تنافسية
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0 fade-up-delay-1">
                    تسوق، زايد، واربح منتجات مستوردة أصلية بأسعار مذهلة مع نظام مزادات آمن وموثوق بالكامل.
                  </p>
                  
                  {/* Download Buttons */}
                  <div className="fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                    <button 
                      onClick={handleGooglePlayClick}
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      تحميل من Google Play
                    </button>
                    <button 
                      onClick={handleAppStoreClick}
                      className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3.5 rounded-2xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      تحميل من App Store
                    </button>
                  </div>
                </div>

                {/* Hero Image - Left Side (RTL: appears on left) */}
                <div className="order-2 md:order-1">
                  <FadeInWhenVisible staggerIndex={0}>
                    <ParallaxOnScroll yRange={[-20, 20]}>
                      {/* Hero image with landscape aspect ratio (16:9) for wide display */}
                      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto aspect-[16/9] rounded-3xl shadow-2xl overflow-hidden">
                        <Image
                          src="/images/hero/hero.webp"
                          alt="بيدزون - منصة المزادات الإلكترونية الأولى في العراق"
                          fill
                          priority={true}
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 512px, 576px"
                        />
                      </div>
                    </ParallaxOnScroll>
                  </FadeInWhenVisible>
                </div>
              </div>
            </div>
          </section>

          </FadeInWhenVisible>


          <FadeInWhenVisible>



            {/* Features Section - Phase 2 */}
          <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 scroll-mt-24 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            {/* Section Title */}
            <div className="mb-14 sm:mb-16 text-center">
              <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900">
                مميزات بيدزون
              </h2>
              <p className="text-slate-600 text-base sm:text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
                منصة مزادات سريعة… موثوقة… مصممة خصيصًا للعراق
              </p>
            </div>

            {/* Features Grid - 6 Premium Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              
              {/* Feature 1: إشعارات فورية */}
              <FadeInWhenVisible staggerIndex={0}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0s'}}>
                <div className="flex flex-col items-start text-right space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    إشعارات فورية
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    استلم إشعارات لحظية عند وجود مزايدة جديدة أو فوزك بالمزاد.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

              {/* Feature 2: نظام بائعين موثوق */}
              <FadeInWhenVisible staggerIndex={1}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.1s'}}>
                <div className="flex flex-col items-start text-right space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    نظام بائعين موثوق
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    جميع البائعين يمرون بعملية تحقق دقيقة لضمان الثقة.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

              {/* Feature 3: منتجات أصلية */}
              <FadeInWhenVisible staggerIndex={2}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.2s'}}>
                <div className="flex flex-col items-start text-right space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    منتجات أصلية
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    بضائع مستوردة أصلية من أمازون ولوازم عالية الجودة.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

              {/* Feature 4: شحن سريع */}
              <FadeInWhenVisible staggerIndex={3}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.3s'}}>
                <div className="flex flex-col items-start text-right space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    شحن سريع
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    خدمة توصيل سريعة في كافة المحافظات مع متابعة حالة الشحن.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

              {/* Feature 5: منع التلاعب */}
              <FadeInWhenVisible staggerIndex={4}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.4s'}}>
                <div className="flex flex-col items-start text-right space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    منع التلاعب
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    خوارزميات تمنع المزايدات الوهمية وتحافظ على مصداقية المزاد.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

              {/* Feature 6: دعم العملاء */}
              <FadeInWhenVisible staggerIndex={5}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.5s'}}>
                <div className="flex flex-col items-start text-right space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    دعم العملاء
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    فريق مختص متواجد دائماً لمساعدتك وحل مشاكلك.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

            </div>
          </section>

          </FadeInWhenVisible>


          <FadeInWhenVisible>



            {/* Why Choose Us Section - Phase 3 */}
          <section id="why-us" className="py-12 md:py-16 lg:py-20 bg-gray-50 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900">
                  ليش تختار بيدزون؟
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  نقدّم لك أفضل تجربة مزادات في العراق بفضل النظام المتطور، الأمان العالي، والمنتجات الأصلية.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                
                {/* Card 1: أسعار أقل من السوق */}
                <FadeInWhenVisible staggerIndex={0}>
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0s'}}>
                  <div className="text-right">
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      أسعار أقل من السوق
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      المنتجات تُباع بالمزاد مما يسمح بالحصول على أسعار أقل من السوق بنسبة كبيرة.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

                {/* Card 2: منتجات أصلية */}
                <FadeInWhenVisible staggerIndex={1}>
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.1s'}}>
                  <div className="text-right">
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      منتجات أصلية
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      جميع البضائع أصلية ومستوردة من مصادر موثوقة.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

                {/* Card 3: نظام مزاد آمن */}
                <FadeInWhenVisible staggerIndex={2}>
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.2s'}}>
                  <div className="text-right">
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      نظام مزاد آمن
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      خوارزميات تمنع التلاعب + نظام تحقق للبائعين + مراقبة مستمرة.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

                {/* Card 4: تجربة مستخدم سهلة */}
                <FadeInWhenVisible staggerIndex={3}>
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.3s'}}>
                  <div className="text-right">
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      تجربة مستخدم سهلة
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      واجهة بسيطة وسريعة حتى للمستخدمين الجدد.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

              </div>
            </div>
          </section>

          </FadeInWhenVisible>


          <FadeInWhenVisible>



            {/* How BidZone Works Section - Phase 4 */}
          <section id="how-it-works" className="py-12 md:py-16 lg:py-20 bg-white scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              
              {/* Section Title */}
              <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900 text-center">
                شلون يشتغل تطبيق بيدزون؟
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                ٤ خطوات بسيطة تخليك تبدي تزاود وتربح منتجات أصلية.
              </p>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                
                {/* Step 1: حمّل التطبيق */}
                <FadeInWhenVisible staggerIndex={0}>
                <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md border hover:shadow-lg transition fade-up" style={{animationDelay: '0s'}}>
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                    📲 حمّل التطبيق
                  </h3>
                  <p className="text-slate-600 text-center text-sm leading-relaxed">
                    نزّل التطبيق بسهولة وبلّش تجربتك بالمزادات.
                  </p>
                </div>
                </FadeInWhenVisible>

                {/* Step 2: تصفّح المنتجات */}
                <FadeInWhenVisible staggerIndex={1}>
                <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md border hover:shadow-lg transition fade-up" style={{animationDelay: '0.1s'}}>
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                    🔍 تصفّح المنتجات
                  </h3>
                  <p className="text-slate-600 text-center text-sm leading-relaxed">
                    شاهد المنتجات الأصلية المعروضة للمزاد واختار اللي يعجبك.
                  </p>
                </div>
                </FadeInWhenVisible>

                {/* Step 3: شارك بالمزايدة */}
                <FadeInWhenVisible staggerIndex={2}>
                <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md border hover:shadow-lg transition fade-up" style={{animationDelay: '0.2s'}}>
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                    ⚡ شارك بالمزايدة
                  </h3>
                  <p className="text-slate-600 text-center text-sm leading-relaxed">
                    زايد على المنتجات وتابع تحديثات السعر لحظياً.
                  </p>
                </div>
                </FadeInWhenVisible>

                {/* Step 4: استلم طلبك */}
                <FadeInWhenVisible staggerIndex={3}>
                <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md border hover:shadow-lg transition fade-up" style={{animationDelay: '0.3s'}}>
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                    🏠 استلم طلبك
                  </h3>
                  <p className="text-slate-600 text-center text-sm leading-relaxed">
                    بعد الفوز، اطلب الشحن وسيتم توصيل منتجك للبيت بكل سهولة.
                  </p>
                </div>
                </FadeInWhenVisible>

              </div>
            </div>
          </section>


      </FadeInWhenVisible>



      <FadeInWhenVisible>




        {/* App Screenshots Gallery Section - Phase 5 */}
  <section className="py-16 sm:py-24 md:py-20 lg:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          
          {/* Section Title */}
          <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900 text-center">
            لقطات من داخل التطبيق
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            صور من الواجهة الحقيقية لتطبيق بيدزون.
          </p>

          {/* App Screenshots - Horizontal scroll on mobile, grid on tablet/desktop */}
          {/* Mobile: horizontal scroll with snap | Tablet+: 3-column grid */}
          <div className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4
            md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0
            lg:gap-10
          " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {/* Screenshot 1 - Browse Auctions */}
            {/* Fixed: correct path /screenshots/ and filename app-screenshots (plural) */}
            <div className="
              flex-shrink-0 w-[75vw] max-w-[280px] snap-center
              md:w-full md:max-w-xs md:mx-auto
              rounded-[2.5rem] border shadow-2xl overflow-hidden fade-up
            " style={{animationDelay: '0s'}}>
              <ParallaxOnScroll yRange={[-15, 15]}>
                <Image
                  src="/screenshots/app-screenshots-01-browse.webp"
                  alt="تصفح المزادات المتاحة في تطبيق بيدزون"
                  width={600}
                  height={1300}
                  className="w-full h-auto object-cover"
                />
              </ParallaxOnScroll>
            </div>

            {/* Screenshot 2 - Bidding */}
            <div className="
              flex-shrink-0 w-[75vw] max-w-[280px] snap-center
              md:w-full md:max-w-xs md:mx-auto
              rounded-[2.5rem] border shadow-2xl overflow-hidden fade-up
            " style={{animationDelay: '0.15s'}}>
              <ParallaxOnScroll yRange={[-15, 15]}>
                <Image
                  src="/screenshots/app-screenshots-02-bid.webp"
                  alt="المشاركة في المزايدة على المنتجات"
                  width={600}
                  height={1300}
                  className="w-full h-auto object-cover"
                />
              </ParallaxOnScroll>
            </div>

            {/* Screenshot 3 - Winning */}
            <div className="
              flex-shrink-0 w-[75vw] max-w-[280px] snap-center
              md:w-full md:max-w-xs md:mx-auto
              rounded-[2.5rem] border shadow-2xl overflow-hidden fade-up
            " style={{animationDelay: '0.3s'}}>
              <ParallaxOnScroll yRange={[-15, 15]}>
                <Image
                  src="/screenshots/app-screenshots-03-win.webp"
                  alt="الفوز بالمزاد واستلام المنتج"
                  width={600}
                  height={1300}
                  className="w-full h-auto object-cover"
                />
              </ParallaxOnScroll>
            </div>

          </div>
        </div>
      </section>

  </FadeInWhenVisible>

      {/* Download App Section */}

      <FadeInWhenVisible>


        {/* Security & Trust Section - Phase 6 */}
  <section className="py-16 sm:py-24 md:py-20 lg:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          
          {/* Section Title */}
          <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900 text-center">
            الأمان والثقة في بيدزون
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            نظام متطور يحمي عمليات الشراء والمزايدة ويضمن تجربة آمنة للجميع.
          </p>

          {/* Cards Grid */}
          <ParallaxOnScroll yRange={[-10, 10]}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            
            {/* Card 1: منع التلاعب بالمزايدات */}
            <FadeInWhenVisible staggerIndex={0}>
            <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm border hover:shadow-md transition fade-up" style={{animationDelay: '0s'}}>
              <div className="text-right">
                <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  🛡️ منع التلاعب بالمزايدات
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  خوارزميات ذكية تراقب الأنماط غير الطبيعية وتمنع التلاعب.
                </p>
              </div>
            </div>
            </FadeInWhenVisible>

            {/* Card 2: التحقق من البائعين */}
            <FadeInWhenVisible staggerIndex={1}>
            <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm border hover:shadow-md transition fade-up" style={{animationDelay: '0.1s'}}>
              <div className="text-right">
                <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  ✔️ التحقق من البائعين
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  كل بائع يمر بعملية قبول دقيقة لضمان جودة التجربة.
                </p>
              </div>
            </div>
            </FadeInWhenVisible>

            {/* Card 3: أمان الأجهزة */}
            <FadeInWhenVisible staggerIndex={2}>
            <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm border hover:shadow-md transition fade-up" style={{animationDelay: '0.2s'}}>
              <div className="text-right">
                <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  📱 أمان الأجهزة
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  نظام يمنع تسجيل الدخول المتعدد ويكشف السلوك المشبوه.
                </p>
              </div>
            </div>
            </FadeInWhenVisible>

            {/* Card 4: حماية البيانات */}
            <FadeInWhenVisible staggerIndex={3}>
            <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm border hover:shadow-md transition fade-up" style={{animationDelay: '0.3s'}}>
              <div className="text-right">
                <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  🔐 حماية البيانات
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  جميع البيانات مخزنة ومحمية مع سياسات صارمة
                </p>
              </div>
            </div>
            </FadeInWhenVisible>

          </div>
          </ParallaxOnScroll>
        </div>
      </section>

      </FadeInWhenVisible>


      <FadeInWhenVisible>



        {/* Contact Us Section - Phase 7 */}
  <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gray-50 scroll-mt-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900 text-center">
            تواصل ويّانه
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            إذا تحتاج أي مساعدة أو عندك سؤال، فريقنا حاضر يجاوبك بأي وقت.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Email Card */}
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border hover:shadow-md transition fade-up text-center" style={{animationDelay: '0s'}}>
              <svg className="w-10 h-10 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold text-slate-900 mb-2">📧 البريد الإلكتروني</h3>
              <a href="mailto:info@bidzone-iq.com" className="text-blue-600 hover:underline transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">info@bidzone-iq.com</a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border hover:shadow-md transition fade-up text-center" style={{animationDelay: '0.1s'}}>
              <svg className="w-10 h-10 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h7M7 7h10m-2 8H9m8 6l-3.5-1.5A8.5 8.5 0 113 11c0 1.49.38 2.89 1.05 4.12L3 21l5.88-1.05A8.5 8.5 0 0020 11" />
              </svg>
              <h3 className="text-xl font-bold text-slate-900 mb-2">💬 واتساب</h3>
              <a href="https://wa.me/9647766455333" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">009647766455333</a>
            </div>

            {/* Social Media Card */}
            <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border hover:shadow-md transition fade-up text-center" style={{animationDelay: '0.2s'}}>
              <svg className="w-10 h-10 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c3 3 4.5 6.5 4.5 9s-1.5 6-4.5 9c-3-3-4.5-6.5-4.5-9s1.5-6 4.5-9zm-7.5 9h15" />
              </svg>
              <h3 className="text-xl font-bold text-slate-900 mb-2">🌐 السوشيال ميديا</h3>
              <p className="text-slate-600 mb-3">تابعنا على منصات التواصل</p>
              <div className="flex items-center justify-center gap-4">
                <a href="https://www.tiktok.com/@bidzone_iq?_r=1&_t=ZS-92asx9NjR46" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">TikTok</a>
                <a href="https://www.instagram.com/bidzone111?igsh=d3d4cDEzMnM0dXlp" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61584351075501" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      </FadeInWhenVisible>


      <FadeInWhenVisible>



        {/* FAQ Section */}
  <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 space-y-8 sm:space-y-12 animate-fade-in lg:max-w-5xl xl:max-w-6xl">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900">
            الأسئلة الشائعة
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            أهم الأسئلة التي قد تخطر ببالك أثناء استخدام بيدزون
          </p>
        </div>

        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <FadeInWhenVisible staggerIndex={0}>
          <details className="group rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm bg-white cursor-pointer transition-all duration-200 hover:shadow-md">
            <summary className="flex items-center justify-between text-lg sm:text-xl font-bold text-slate-900 list-none">
              <span>شنو هو بيدزون؟</span>
              <svg className="w-5 h-5 text-blue-700 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              بيدزون هو تطبيق مزادات سريع وموثوق مخصص للسوق العراقي، يسمح لك بالمزايدة على منتجات حقيقية من بائعين معتمدين.
            </p>
          </details>
          </FadeInWhenVisible>

          {/* FAQ Item 2 */}
          <FadeInWhenVisible staggerIndex={1}>
          <details className="group rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm bg-white cursor-pointer transition-all duration-200 hover:shadow-md">
            <summary className="flex items-center justify-between text-lg sm:text-xl font-bold text-slate-900 list-none">
              <span>شلون أكدر أزاود على منتج؟</span>
              <svg className="w-5 h-5 text-blue-700 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              تختار المنتج، تشوف سعره الحالي، وتضغط "قدم مزايدة" ثم تدخل السعر الجديد—ويصلك إشعار لحظي إذا أحد زايد بعدك.
            </p>
          </details>
          </FadeInWhenVisible>

          {/* FAQ Item 3 */}
          <FadeInWhenVisible staggerIndex={2}>
          <details className="group rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm bg-white cursor-pointer transition-all duration-200 hover:shadow-md">
            <summary className="flex items-center justify-between text-lg sm:text-xl font-bold text-slate-900 list-none">
              <span>هل البائعين موثوقين؟</span>
              <svg className="w-5 h-5 text-blue-700 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              نعم، عندنا نظام تحقق كامل للبائعين بالإضافة لنظام مراقبة ذكي لاكتشاف أي سلوك غير طبيعي.
            </p>
          </details>
          </FadeInWhenVisible>

          {/* FAQ Item 4 */}
          <FadeInWhenVisible staggerIndex={3}>
          <details className="group rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm bg-white cursor-pointer transition-all duration-200 hover:shadow-md">
            <summary className="flex items-center justify-between text-lg sm:text-xl font-bold text-slate-900 list-none">
              <span>شنو وضع الشحن؟</span>
              <svg className="w-5 h-5 text-blue-700 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              بعد ما تفوز بالمزاد، يكدر المشتري يطلب الشحن مباشرة، والبائع يجهز الطلب خلال المهلة المحددة.
            </p>
          </details>
          </FadeInWhenVisible>
        </div>
      </section>

      </FadeInWhenVisible>


      <FadeInWhenVisible>



        {/* About Section (moved) */}
  <section id="about" className="bg-slate-50 py-12 md:py-16 lg:py-20 scroll-mt-24">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 sm:space-y-8 md:max-w-3xl lg:max-w-4xl md:mx-auto md:text-center">
          <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900">
            من نحن؟
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            بيدزون هو منصة للمزادات صُممت خصيصًا للمستخدم العراقي — أسرع، أسهل، وأذكى من أي وقت مضى.
          </p>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            هدف بيدزون هو تقديم تجربة مزادات احترافية تجمع بين سرعة الأداء، تحديثات لحظية، بائعين موثوقين، ونظام ذكي ضد الاحتيال. صممنا المنصة لتكون بسيطة، عملية، ومناسبة لجميع المستخدمين — سواء كنت بائعًا ترغب في عرض منتجاتك، أو مشتريًا تبحث عن أفضل الصفقات.
          </p>
        </div>
      </section>

      </FadeInWhenVisible>


      <FadeInWhenVisible>



        {/* Download App Area */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleGooglePlayClick}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              تحميل من Google Play
            </button>
            <button 
              onClick={handleAppStoreClick}
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3.5 rounded-2xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              تحميل من App Store
            </button>
          </div>
        </div>
      </section>

      </FadeInWhenVisible>


      <FadeInWhenVisible>



        {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 rtl fade-up">
          {/* Column 1 - Logo + Description */}
          <div className="fade-up">
            <div className="text-2xl font-bold text-white mb-3">BidZone</div>
            <p className="text-slate-400">
              منصة مزادات عراقية لبيع المنتجات الأصلية بأسعار تنافسية.
            </p>
          </div>

          {/* Column 2 - Important Links */}
          <div className="fade-up space-y-4">
            <h3 className="text-lg font-semibold text-white">روابط مهمة</h3>
            <div className="flex flex-col space-y-2">
              <a href="/privacy" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">سياسة الخصوصية</a>
              <a href="/terms" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">شروط الاستخدام</a>
              <a href="#about" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">من نحن</a>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="fade-up space-y-4">
            <h3 className="text-lg font-semibold text-white">روابط سريعة</h3>
            <div className="flex flex-col space-y-2">
              <a href="#features" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">المزايا</a>
              <a href="#why-us" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">ليش تختارنا</a>
              <a href="#how-it-works" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">شلون يشتغل التطبيق</a>
              <a href="#contact" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">تواصل ويّانه</a>
            </div>
          </div>
        </div>
        <div className="text-center text-slate-500 mt-12 pt-8 border-t border-slate-700">
          © 2025 BidZone. كل الحقوق محفوظة.
        </div>
      </footer>
        </FadeInWhenVisible>
  </Fragment>
      ) : (
  <Fragment>
          {/* English Version */}
          {/* Navbar */}
          <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="text-2xl font-bold text-blue-800">
                Bidzone
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setLanguage("ar")}
                  className="border-2 border-blue-600 text-blue-600 px-3 py-1.5 rounded-2xl text-sm hover:bg-blue-50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-xl font-semibold focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  AR
                </button>
                <button 
                  onClick={handleDownload}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl transition-all duration-200 font-semibold hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Download App
                </button>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <FadeInWhenVisible>
          <section className="w-full bg-gradient-to-b from-blue-50/60 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-11 sm:py-20 md:py-24 lg:py-32 lg:max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
                {/* Text Content */}
                <div className="order-1 text-center md:text-left space-y-5 md:space-y-8 lg:space-y-8">
                  {/* Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight md:leading-tight lg:leading-snug fade-up">
                    BidZone — Instant auctions on authentic products at competitive prices
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0 fade-up-delay-1">
                    Shop, bid, and win authentic imported products at amazing prices with a fully secure and reliable auction system.
                  </p>
                  
                  {/* Download Buttons */}
                  <div className="fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                    <button 
                      onClick={handleGooglePlayClick}
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Download from Google Play
                    </button>
                    <button 
                      onClick={handleAppStoreClick}
                      className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3.5 rounded-2xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Download from App Store
                    </button>
                  </div>
                </div>

                {/* Hero Image - Right Side (LTR: appears on right) */}
                <div className="order-2">
                  <FadeInWhenVisible staggerIndex={0}>
                    <ParallaxOnScroll yRange={[-20, 20]}>
                      {/* Hero image with landscape aspect ratio (16:9) - same as Arabic version */}
                      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto aspect-[16/9] rounded-3xl shadow-2xl overflow-hidden">
                        <Image
                          src="/images/hero/hero.webp"
                          alt="BidZone - Iraq's Leading Online Auction Platform"
                          fill
                          priority={true}
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 512px, 576px"
                        />
                      </div>
                    </ParallaxOnScroll>
                  </FadeInWhenVisible>
                </div>
              </div>
            </div>
          </section>
          </FadeInWhenVisible>

          {/* Features Section */}
          <FadeInWhenVisible>
          <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 scroll-mt-24 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            {/* Section Title */}
            <div className="mb-14 sm:mb-16 text-center">
              <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900">
                Why Thousands Trust BidZone
              </h2>
              <p className="text-slate-600 text-base sm:text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
                A fast, secure auction platform built for Iraq&apos;s marketplace
              </p>
            </div>

            {/* Features Grid - 6 Premium Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              
              {/* Feature 1: Instant Notifications */}
              <FadeInWhenVisible staggerIndex={0}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0s'}}>
                <div className="flex flex-col items-start space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    Instant Notifications
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Get alerts the moment someone outbids you or when your auction ends.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

              {/* Feature 2: Verified Sellers */}
              <FadeInWhenVisible staggerIndex={1}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.1s'}}>
                <div className="flex flex-col items-start space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    Verified Sellers System
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    All sellers pass through a rigorous verification process to ensure trust.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

              {/* Feature 3: Authentic Products */}
              <FadeInWhenVisible staggerIndex={2}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.2s'}}>
                <div className="flex flex-col items-start space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    Authentic Products
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Original imported goods from Amazon and high-quality items.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

              {/* Feature 4: Fast Shipping */}
              <FadeInWhenVisible staggerIndex={3}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.3s'}}>
                <div className="flex flex-col items-start space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    Fast Shipping
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Quick delivery service to all provinces with shipment tracking.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

              {/* Feature 5: Anti-Fraud Protection */}
              <FadeInWhenVisible staggerIndex={4}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.4s'}}>
                <div className="flex flex-col items-start space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    Anti-Fraud Protection
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Algorithms prevent fake bids and maintain auction credibility.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

              {/* Feature 6: Customer Support */}
              <FadeInWhenVisible staggerIndex={5}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.5s'}}>
                <div className="flex flex-col items-start space-y-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <h3 className="font-bold text-lg text-slate-900">
                    Customer Support
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Dedicated team always available to help and solve your issues.
                  </p>
                </div>
              </div>
              </FadeInWhenVisible>

            </div>
          </section>
          </FadeInWhenVisible>

          {/* Why Choose BidZone Section */}
          <FadeInWhenVisible>
          <section id="why-us" className="py-12 md:py-16 lg:py-20 bg-gray-50 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900">
                  Why Choose BidZone?
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  We provide you with the best auction experience in Iraq thanks to our advanced system, high security, and authentic products.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                
                {/* Card 1: Lower Than Market Prices */}
                <FadeInWhenVisible staggerIndex={0}>
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0s'}}>
                  <div>
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Lower Than Market Prices
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Products sold via auction allow you to get prices significantly lower than market value.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

                {/* Card 2: Authentic Products */}
                <FadeInWhenVisible staggerIndex={1}>
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.1s'}}>
                  <div>
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Authentic Products
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      All goods are original and imported from trusted sources.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

                {/* Card 3: Secure Auction System */}
                <FadeInWhenVisible staggerIndex={2}>
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.2s'}}>
                  <div>
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Secure Auction System
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Anti-fraud algorithms + seller verification + continuous monitoring.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

                {/* Card 4: Easy User Experience */}
                <FadeInWhenVisible staggerIndex={3}>
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 fade-up" style={{animationDelay: '0.3s'}}>
                  <div>
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Easy User Experience
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Simple and fast interface even for new users.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

              </div>
            </div>
          </section>
          </FadeInWhenVisible>

          {/* How BidZone Works Section */}
          <FadeInWhenVisible>
          <section id="how-it-works" className="py-12 md:py-16 lg:py-20 bg-white scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              
              {/* Section Title */}
              <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900 text-center">
                How BidZone Works
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                4 simple steps to start bidding and winning authentic products.
              </p>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                
                {/* Step 1: Download the App */}
                <FadeInWhenVisible staggerIndex={0}>
                <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md border hover:shadow-lg transition fade-up" style={{animationDelay: '0s'}}>
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                    📲 Download the App
                  </h3>
                  <p className="text-slate-600 text-center text-sm leading-relaxed">
                    Easily download the app and start your auction experience.
                  </p>
                </div>
                </FadeInWhenVisible>

                {/* Step 2: Browse Products */}
                <FadeInWhenVisible staggerIndex={1}>
                <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md border hover:shadow-lg transition fade-up" style={{animationDelay: '0.1s'}}>
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                    🔍 Browse Products
                  </h3>
                  <p className="text-slate-600 text-center text-sm leading-relaxed">
                    Explore authentic products listed for auction and choose what you like.
                  </p>
                </div>
                </FadeInWhenVisible>

                {/* Step 3: Place Your Bid */}
                <FadeInWhenVisible staggerIndex={2}>
                <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md border hover:shadow-lg transition fade-up" style={{animationDelay: '0.2s'}}>
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                    ⚡ Place Your Bid
                  </h3>
                  <p className="text-slate-600 text-center text-sm leading-relaxed">
                    Bid on products and track price updates in real time.
                  </p>
                </div>
                </FadeInWhenVisible>

                {/* Step 4: Receive Your Order */}
                <FadeInWhenVisible staggerIndex={3}>
                <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md border hover:shadow-lg transition fade-up" style={{animationDelay: '0.3s'}}>
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                    🏠 Receive Your Order
                  </h3>
                  <p className="text-slate-600 text-center text-sm leading-relaxed">
                    After winning, request shipping and your product will be delivered to your door easily.
                  </p>
                </div>
                </FadeInWhenVisible>

              </div>
            </div>
          </section>
          </FadeInWhenVisible>

          {/* Screenshots Section */}
          <FadeInWhenVisible>
          <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              
              {/* Section Title */}
              <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900 text-center">
                See BidZone in Action
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                Screenshots from the real BidZone app interface.
              </p>

              {/* App Screenshots - Horizontal scroll on mobile, grid on tablet/desktop (same as Arabic) */}
              <div className="
                flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4
                md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0
                lg:gap-10
              " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                
                {/* Screenshot 1 - Browse Auctions */}
                <div className="
                  flex-shrink-0 w-[75vw] max-w-[280px] snap-center
                  md:w-full md:max-w-xs md:mx-auto
                  rounded-[2.5rem] border shadow-2xl overflow-hidden fade-up
                " style={{animationDelay: '0s'}}>
                  <ParallaxOnScroll yRange={[-15, 15]}>
                    <Image
                      src="/screenshots/app-screenshots-01-browse.webp"
                      alt="Browse available auctions in BidZone app"
                      width={600}
                      height={1300}
                      className="w-full h-auto object-cover"
                    />
                  </ParallaxOnScroll>
                </div>

                {/* Screenshot 2 - Bidding */}
                <div className="
                  flex-shrink-0 w-[75vw] max-w-[280px] snap-center
                  md:w-full md:max-w-xs md:mx-auto
                  rounded-[2.5rem] border shadow-2xl overflow-hidden fade-up
                " style={{animationDelay: '0.15s'}}>
                  <ParallaxOnScroll yRange={[-15, 15]}>
                    <Image
                      src="/screenshots/app-screenshots-02-bid.webp"
                      alt="Place bids on products"
                      width={600}
                      height={1300}
                      className="w-full h-auto object-cover"
                    />
                  </ParallaxOnScroll>
                </div>

                {/* Screenshot 3 - Winning */}
                <div className="
                  flex-shrink-0 w-[75vw] max-w-[280px] snap-center
                  md:w-full md:max-w-xs md:mx-auto
                  rounded-[2.5rem] border shadow-2xl overflow-hidden fade-up
                " style={{animationDelay: '0.3s'}}>
                  <ParallaxOnScroll yRange={[-15, 15]}>
                    <Image
                      src="/screenshots/app-screenshots-03-win.webp"
                      alt="Win auctions and receive products"
                      width={600}
                      height={1300}
                      className="w-full h-auto object-cover"
                    />
                  </ParallaxOnScroll>
                </div>

              </div>
            </div>
          </section>
          </FadeInWhenVisible>

          {/* Security & Trust Section */}
          <FadeInWhenVisible>
          <section id="security" className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              
              {/* Section Title */}
              <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900 text-center">
                Security & Trust in BidZone
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                Advanced system that protects purchases and bidding, ensuring a safe experience for everyone.
              </p>

              {/* Cards Grid */}
              <ParallaxOnScroll yRange={[-10, 10]}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                
                {/* Card 1: Prevent Bid Manipulation */}
                <FadeInWhenVisible staggerIndex={0}>
                <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm border hover:shadow-md transition fade-up" style={{animationDelay: '0s'}}>
                  <div>
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      🛡️ Prevent Bid Manipulation
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Smart algorithms monitor abnormal patterns and prevent manipulation.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

                {/* Card 2: Seller Verification */}
                <FadeInWhenVisible staggerIndex={1}>
                <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm border hover:shadow-md transition fade-up" style={{animationDelay: '0.1s'}}>
                  <div>
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      ✔️ Seller Verification
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Every seller goes through a rigorous approval process to ensure quality experience.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

                {/* Card 3: Device Security */}
                <FadeInWhenVisible staggerIndex={2}>
                <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm border hover:shadow-md transition fade-up" style={{animationDelay: '0.2s'}}>
                  <div>
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      📱 Device Security
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      System prevents multiple logins and detects suspicious behavior.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

                {/* Card 4: Data Protection */}
                <FadeInWhenVisible staggerIndex={3}>
                <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm border hover:shadow-md transition fade-up" style={{animationDelay: '0.3s'}}>
                  <div>
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      🔐 Data Protection
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      All data is stored and protected with strict policies.
                    </p>
                  </div>
                </div>
                </FadeInWhenVisible>

              </div>
              </ParallaxOnScroll>
            </div>
          </section>
          </FadeInWhenVisible>

          {/* Contact Us Section */}
          <FadeInWhenVisible>
          <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gray-50 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900 text-center">
                Contact Us
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                If you need any help or have a question, our team is ready to answer you anytime.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                {/* Email Card */}
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border hover:shadow-md transition fade-up text-center" style={{animationDelay: '0s'}}>
                  <svg className="w-10 h-10 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">📧 Email</h3>
                  <a href="mailto:info@bidzone-iq.com" className="text-blue-600 hover:underline transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">info@bidzone-iq.com</a>
                </div>

                {/* WhatsApp Card */}
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border hover:shadow-md transition fade-up text-center" style={{animationDelay: '0.1s'}}>
                  <svg className="w-10 h-10 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h7M7 7h10m-2 8H9m8 6l-3.5-1.5A8.5 8.5 0 113 11c0 1.49.38 2.89 1.05 4.12L3 21l5.88-1.05A8.5 8.5 0 0020 11" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">💬 WhatsApp</h3>
                  <a href="https://wa.me/9647766455333" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">009647766455333</a>
                </div>

                {/* Social Media Card */}
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm border hover:shadow-md transition fade-up text-center" style={{animationDelay: '0.2s'}}>
                  <svg className="w-10 h-10 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c3 3 4.5 6.5 4.5 9s-1.5 6-4.5 9c-3-3-4.5-6.5-4.5-9s1.5-6 4.5-9zm-7.5 9h15" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">🌐 Social Media</h3>
                  <p className="text-slate-600 mb-3">Follow us on social platforms</p>
                  <div className="flex items-center justify-center gap-4">
                    <a href="https://www.tiktok.com/@bidzone_iq?_r=1&_t=ZS-92asx9NjR46" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">TikTok</a>
                    <a href="https://www.instagram.com/bidzone111?igsh=d3d4cDEzMnM0dXlp" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">Instagram</a>
                    <a href="https://www.facebook.com/profile.php?id=61584351075501" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </FadeInWhenVisible>

          {/* FAQ Section */}
          <FadeInWhenVisible>
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 space-y-8 sm:space-y-12 animate-fade-in lg:max-w-5xl xl:max-w-6xl">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                The most important questions that may come to mind while using BidZone
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <FadeInWhenVisible staggerIndex={0}>
              <details className="group rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm bg-white cursor-pointer transition-all duration-200 hover:shadow-md">
                <summary className="flex items-center justify-between text-lg sm:text-xl font-bold text-slate-900 list-none">
                  <span>What is BidZone?</span>
                  <svg className="w-5 h-5 text-blue-700 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  BidZone is a fast and reliable auction app dedicated to the Iraqi market, allowing you to bid on real products from verified sellers.
                </p>
              </details>
              </FadeInWhenVisible>

              {/* FAQ Item 2 */}
              <FadeInWhenVisible staggerIndex={1}>
              <details className="group rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm bg-white cursor-pointer transition-all duration-200 hover:shadow-md">
                <summary className="flex items-center justify-between text-lg sm:text-xl font-bold text-slate-900 list-none">
                  <span>How can I bid on a product?</span>
                  <svg className="w-5 h-5 text-blue-700 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Choose a product, view its current price, tap &quot;Place Bid&quot; then enter the new price—you&apos;ll get instant alerts if someone outbids you.
                </p>
              </details>
              </FadeInWhenVisible>

              {/* FAQ Item 3 */}
              <FadeInWhenVisible staggerIndex={2}>
              <details className="group rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm bg-white cursor-pointer transition-all duration-200 hover:shadow-md">
                <summary className="flex items-center justify-between text-lg sm:text-xl font-bold text-slate-900 list-none">
                  <span>Are the sellers reliable?</span>
                  <svg className="w-5 h-5 text-blue-700 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Yes, we have a complete seller verification system plus a smart monitoring system to detect any unusual behavior.
                </p>
              </details>
              </FadeInWhenVisible>

              {/* FAQ Item 4 */}
              <FadeInWhenVisible staggerIndex={3}>
              <details className="group rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm bg-white cursor-pointer transition-all duration-200 hover:shadow-md">
                <summary className="flex items-center justify-between text-lg sm:text-xl font-bold text-slate-900 list-none">
                  <span>How does shipping work?</span>
                  <svg className="w-5 h-5 text-blue-700 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  After you win the auction, the buyer can request shipping directly, and the seller will prepare the order within the specified timeframe.
                </p>
              </details>
              </FadeInWhenVisible>
            </div>
          </section>
          </FadeInWhenVisible>

          {/* About Section */}
          <FadeInWhenVisible>
          <section id="about" className="bg-slate-50 py-12 md:py-16 lg:py-20 scroll-mt-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 sm:space-y-8 md:max-w-3xl lg:max-w-4xl md:mx-auto md:text-center">
              <h2 className="text-3xl font-bold leading-tight mb-6 text-slate-900">
                About BidZone
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                BidZone is an auction platform designed specifically for the Iraqi user — faster, easier, and smarter than ever.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                BidZone&apos;s goal is to provide a professional auction experience that combines performance speed, real-time updates, trusted sellers, and a smart anti-fraud system. We designed the platform to be simple, practical, and suitable for all users — whether you&apos;re a seller looking to showcase your products, or a buyer searching for the best deals.
              </p>
            </div>
          </section>
          </FadeInWhenVisible>

          {/* Download App Section */}
          <FadeInWhenVisible>
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={handleGooglePlayClick}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Download on Google Play
                </button>
                <button 
                  onClick={handleAppStoreClick}
                  className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3.5 rounded-2xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Download on App Store
                </button>
              </div>
            </div>
          </section>
          </FadeInWhenVisible>

          {/* Footer */}
          <FadeInWhenVisible>
          <footer className="bg-slate-900 text-slate-300 py-16 mt-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 fade-up">
              {/* Column 1 - Logo + Description */}
              <div className="fade-up">
                <div className="text-2xl font-bold text-white mb-3">BidZone</div>
                <p className="text-slate-400">
                  Iraqi auction platform for selling authentic products at competitive prices.
                </p>
              </div>

              {/* Column 2 - Important Links */}
              <div className="fade-up space-y-4">
                <h3 className="text-lg font-semibold text-white">Important Links</h3>
                <div className="flex flex-col space-y-2">
                  <a href="/privacy" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">Privacy Policy</a>
                  <a href="/terms" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">Terms of Use</a>
                  <a href="#about" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">About Us</a>
                </div>
              </div>

              {/* Column 3 - Quick Links */}
              <div className="fade-up space-y-4">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <div className="flex flex-col space-y-2">
                  <a href="#features" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">Features</a>
                  <a href="#why-us" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">Why Choose Us</a>
                  <a href="#how-it-works" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">How It Works</a>
                  <a href="#contact" className="hover:text-blue-400 transition transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] inline-block focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="text-center text-slate-500 mt-12 pt-8 border-t border-slate-700">
              © 2025 BidZone. All Rights Reserved.
            </div>
          </footer>
          </FadeInWhenVisible>
  </Fragment>
      )}

      {/* Snackbar for iOS notification */}
      <Snackbar
        message={snackbarMessage}
        isVisible={snackbarVisible}
        onClose={() => setSnackbarVisible(false)}
      />
    </div>
  );
}
