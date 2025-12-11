"use client";

import { useState } from "react";
import Link from "next/link";

export default function TermsOfUsePage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  return (
    <div className="min-h-screen bg-white" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Navbar */}
      <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-800 hover:text-blue-900 transition">
            BidZone
          </Link>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="border-2 border-blue-600 text-blue-600 px-3 py-1.5 rounded-2xl text-sm hover:bg-blue-50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-xl font-semibold focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {language === "ar" ? "EN" : "AR"}
            </button>
            <Link 
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-2xl transition-all duration-200 font-semibold hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {language === "ar" ? "الصفحة الرئيسية" : "Home"}
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {language === "ar" ? (
          // Arabic Version
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">شروط الاستخدام – BidZone</h1>

            <div className="space-y-8 text-slate-700 leading-relaxed">
              <p className="text-lg">
                باستخدامك لتطبيق BidZone، فإنك توافق على الشروط التالية. الرجاء قراءتها بعناية.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. التعريف</h2>
                <p>
                  BidZone هي منصة مزادات إلكترونية تربط البائع بالمشتري، ولا تعتبر طرفًا مباشرًا في عملية البيع، 
                  وإنما وسيط تقني يوفر بيئة آمنة للمزادات.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. حساب المستخدم</h2>
                <p>عند إنشاء حساب يجب الالتزام بـ:</p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li>تقديم معلومات صحيحة.</li>
                  <li>عدم استخدام أكثر من حساب لغرض التأثير على المزايدات.</li>
                  <li>عدم مشاركة حسابك مع الآخرين.</li>
                  <li>استخدام رقم هاتف فعّال وصحيح.</li>
                </ul>
                <p className="mt-4">يحق لإدارة BidZone إيقاف أي حساب يخالف القواعد أو يحاول الاحتيال.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. المزايدة والفوز</h2>
                <ul className="list-disc pr-6 space-y-2">
                  <li>المزايدة تعتبر التزامًا بالشراء.</li>
                  <li>عند فوزك بالمزاد، يجب إكمال عملية استلام المنتج والدفع.</li>
                  <li>في حال عدم الالتزام قد يتم تعليق حسابك أو منعه من المزايدة مستقبلاً.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. البائعون</h2>
                <p>على البائع الالتزام بـ:</p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li>عرض منتجات أصلية وصحيحة المعلومات.</li>
                  <li>استلام الطلب وشحنه حسب المدة المحددة.</li>
                  <li>عدم رفع المزايدة باستخدام حسابات أخرى (shill bidding).</li>
                  <li>عدم بيع منتجات مخالفة للقانون.</li>
                </ul>
                <p className="mt-4">يحق لإدارة التطبيق تعليق متجر البائع عند وجود مخالفات.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. نظام التحذيرات والعقوبات</h2>
                <p>BidZone يحتوي على نظام أمني ذكي يشمل:</p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li>تحذيرات تلقائية.</li>
                  <li>إيقاف مؤقت للمزايدة.</li>
                  <li>حظر دائم في الحالات الخطيرة.</li>
                  <li>توثيق محاولات الاحتيال داخل لوحة التحكم.</li>
                </ul>
                <p className="mt-4">كل هذا لحماية المشترين والبائعين وتوفير بيئة عادلة.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. سياسة الشحن والاستلام</h2>
                <ul className="list-disc pr-6 space-y-2">
                  <li>الشحن يتم بالتعاون مع شركات خارجية.</li>
                  <li>تكلفة الشحن يتحملها المشتري ما لم يذكر خلاف ذلك.</li>
                  <li>التأخير أو المشاكل المتعلقة بالشحن مسؤولية شركة الشحن وليس التطبيق.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. المسؤولية القانونية</h2>
                <p>BidZone غير مسؤول عن:</p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li>سوء استخدام التطبيق من قِبل المستخدمين.</li>
                  <li>الخسائر الناتجة عن مخالفة الشروط.</li>
                  <li>مشاكل خارج سيطرتنا مثل شركة الشحن أو أعطال الإنترنت.</li>
                </ul>
                <p className="mt-4">لكننا نلتزم ببذل الجهد لحل أي مشكلة تواجه المستخدم.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. المحتوى المحظور</h2>
                <p>يُمنع:</p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li>التلاعب بالمزايدات.</li>
                  <li>فتح حسابات متعددة لنفس الشخص.</li>
                  <li>نشر محتوى مسيء أو مخالف للأداب.</li>
                  <li>محاولة اختراق النظام أو استغلاله.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. الملكية الفكرية</h2>
                <p>
                  جميع المحتويات داخل التطبيق (الشعار، التصميم، الأكواد) مملوكة لـ BidZone 
                  ولا يجوز نسخها أو استخدامها بدون إذن.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. التعديلات على الشروط</h2>
                <p>يحق لـ BidZone تحديث الشروط عند الحاجة ويتم الإشعار عبر التطبيق.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">11. التواصل</h2>
                <p>للملاحظات أو الشكاوى:</p>
                <p className="mt-2">📧 <a href="mailto:support@bidzone-iq.com" className="text-blue-600 hover:underline">support@bidzone-iq.com</a></p>
              </section>
            </div>
          </article>
        ) : (
          // English Version
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Use – BidZone</h1>

            <div className="space-y-8 text-slate-700 leading-relaxed">
              <p className="text-lg">
                By using the BidZone application, you agree to the following terms. Please read them carefully.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Definition</h2>
                <p>
                  BidZone is an electronic auction platform that connects sellers with buyers and is not a direct party 
                  to the sale process, but rather a technical intermediary that provides a secure environment for auctions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. User Account</h2>
                <p>When creating an account, you must comply with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Providing accurate information</li>
                  <li>Not using more than one account to influence bidding</li>
                  <li>Not sharing your account with others</li>
                  <li>Using an active and valid phone number</li>
                </ul>
                <p className="mt-4">BidZone management has the right to suspend any account that violates the rules or attempts fraud.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Bidding and Winning</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bidding is considered a commitment to purchase</li>
                  <li>When you win an auction, you must complete the product receipt and payment process</li>
                  <li>In case of non-compliance, your account may be suspended or banned from future bidding</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Sellers</h2>
                <p>Sellers must comply with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Displaying authentic products with accurate information</li>
                  <li>Receiving and shipping orders within the specified timeframe</li>
                  <li>Not inflating bids using other accounts (shill bidding)</li>
                  <li>Not selling products that violate the law</li>
                </ul>
                <p className="mt-4">The application management has the right to suspend the seller's store when violations are found.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Warning and Penalty System</h2>
                <p>BidZone contains an intelligent security system that includes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Automatic warnings</li>
                  <li>Temporary bidding suspension</li>
                  <li>Permanent ban in severe cases</li>
                  <li>Documentation of fraud attempts in the control panel</li>
                </ul>
                <p className="mt-4">All of this is to protect buyers and sellers and provide a fair environment.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Shipping and Delivery Policy</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Shipping is done in cooperation with external companies</li>
                  <li>Shipping costs are borne by the buyer unless otherwise stated</li>
                  <li>Delays or shipping-related issues are the responsibility of the shipping company, not the application</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Legal Liability</h2>
                <p>BidZone is not responsible for:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Misuse of the application by users</li>
                  <li>Losses resulting from violation of terms</li>
                  <li>Issues beyond our control such as shipping companies or internet outages</li>
                </ul>
                <p className="mt-4">However, we are committed to making every effort to resolve any issues faced by users.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Prohibited Content</h2>
                <p>The following are prohibited:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Manipulating bids</li>
                  <li>Opening multiple accounts for the same person</li>
                  <li>Publishing offensive or indecent content</li>
                  <li>Attempting to hack or exploit the system</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Intellectual Property</h2>
                <p>
                  All content within the application (logo, design, code) is owned by BidZone 
                  and may not be copied or used without permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Amendments to Terms</h2>
                <p>BidZone has the right to update the terms when necessary and will notify you through the application.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">11. Contact</h2>
                <p>For feedback or complaints:</p>
                <p className="mt-2">📧 <a href="mailto:support@bidzone-iq.com" className="text-blue-600 hover:underline">support@bidzone-iq.com</a></p>
              </section>
            </div>
          </article>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500">© 2025 BidZone. {language === "ar" ? "كل الحقوق محفوظة." : "All Rights Reserved."}</p>
        </div>
      </footer>
    </div>
  );
}
