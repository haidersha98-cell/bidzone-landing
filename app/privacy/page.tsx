"use client";

import { useState } from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">سياسة الخصوصية – BidZone</h1>
            <p className="text-slate-600 mb-8">تاريخ التحديث: 2025/12/11</p>

            <div className="space-y-8 text-slate-700 leading-relaxed">
              <p className="text-lg">
                مرحبًا بك في BidZone، منصة مزادات عراقية لبيع المنتجات الأصلية بأسعار تنافسية.
                نحن نلتزم بحماية خصوصيتك، ونوضح في هذه الوثيقة كيفية جمع معلوماتك واستخدامها وحفظها.
              </p>

              <p className="text-lg font-semibold">
                باستخدامك لتطبيق BidZone أو إنشاء حساب، فإنك توافق على سياسة الخصوصية هذه.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. المعلومات التي نجمعها</h2>
                <p>نجمع الحد الأدنى من المعلومات اللازمة لتقديم تجربة مزايدة آمنة:</p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1.1 معلومات يقدمها المستخدم</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li>الاسم.</li>
                  <li>رقم الهاتف (للتسجيل والتحقق وعمليات الشحن).</li>
                  <li>البريد الإلكتروني.</li>
                  <li>صورة الحساب (اختياري).</li>
                  <li>عنوان الشحن عند الحاجة.</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1.2 معلومات يتم جمعها تلقائيًا</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li>معرف الجهاز Device ID لزيادة الأمان ومنع الاحتيال.</li>
                  <li>بيانات الاستخدام داخل التطبيق (فتح الصفحات، الضغطات، المشاهدات).</li>
                  <li>رمز الإشعارات (FCM Token) لإرسال التنبيهات الخاصة بالمزايدات والشحن.</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1.3 معلومات المعاملات</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li>سجل المزايدات.</li>
                  <li>سجل الشحنات والطلبات.</li>
                  <li>عمليات الدفع عند توفرها مستقبلاً.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. كيفية استخدام المعلومات</h2>
                <p>نستخدم بياناتك فقط للأغراض التالية:</p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li>إنشاء حسابك وإدارة تسجيل الدخول.</li>
                  <li>حماية المنصة من الحسابات الوهمية ومحاولات الاحتيال.</li>
                  <li>إرسال إشعارات المزايدات (رفع سعر، انتهاء مزاد، فوز المستخدم).</li>
                  <li>إدارة العمليات بين البائع والمشتري.</li>
                  <li>تحسين جودة التطبيق وتجربة المستخدم.</li>
                  <li>الامتثال لأي متطلبات قانونية أو أمنية عند الضرورة.</li>
                </ul>
                <p className="mt-4 font-semibold">نعدك أننا لا نبيع معلوماتك ولا نشاركها مع طرف ثالث لأغراض تسويقية.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. مشاركة المعلومات</h2>
                <p>قد نشارك معلومات محدودة فقط مع:</p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li>شركة الشحن لمعرفة اسمك ورقم هاتفك عند وجود طلب.</li>
                  <li>مزودي الخدمات التقنيين مثل Supabase وVercel وFirebase لإتمام الوظائف الأساسية (تخزين البيانات، الإشعارات، الأمان).</li>
                  <li>الجهات القانونية في حال وجود طلب قضائي رسمي.</li>
                </ul>
                <p className="mt-4">نحرص على أن جميع الشركاء يلتزمون بمعايير عالية لحماية الخصوصية.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. حماية البيانات</h2>
                <p>نستخدم مجموعة من تقنيات الأمان تشمل:</p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li>تشفير الاتصال HTTPS</li>
                  <li>قواعد وصول آمنة (Row Level Security – RLS)</li>
                  <li>مراقبة النشاط المشبوه</li>
                  <li>تحقق OTP</li>
                  <li>نظام كشف الاحتيال متعدد المستويات</li>
                </ul>
                <p className="mt-4">لكن لا يمكن ضمان حماية 100% على الإنترنت، لذلك يتحمل المستخدم مسؤولية استخدام كلمة مرور آمنة وعدم مشاركة حسابه.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. مدة الاحتفاظ بالمعلومات</h2>
                <p>نحتفظ بالمعلومات طوال فترة استخدامك للتطبيق، ويتم حذفها عند حذف الحساب أو حسب المتطلبات القانونية.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. حقوق المستخدم</h2>
                <p>يحق لك:</p>
                <ul className="list-disc pr-6 space-y-2 mt-3">
                  <li>تعديل بياناتك الشخصية داخل التطبيق.</li>
                  <li>طلب حذف الحساب نهائيًا.</li>
                  <li>إيقاف الإشعارات في أي وقت.</li>
                  <li>مراجعة سجلك داخل التطبيق.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. خصوصية القاصرين</h2>
                <p>BidZone غير مخصّص لمن هم دون 18 عامًا.</p>
                <p className="mt-2">عند اكتشاف حساب قاصر يتم إيقافه لحمايته.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. تغييرات سياسة الخصوصية</h2>
                <p>قد نقوم بتحديث السياسة عند الحاجة.</p>
                <p className="mt-2">يتم إشعارك عبر التطبيق عند وجود تغييرات مهمة.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. التواصل</h2>
                <p>للاستفسارات المتعلقة بالخصوصية:</p>
                <p className="mt-2">📧 <a href="mailto:info@bidzone-iq.com" className="text-blue-600 hover:underline">info@bidzone-iq.com</a></p>
              </section>
            </div>
          </article>
        ) : (
          // English Version
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy – BidZone</h1>
            <p className="text-slate-600 mb-8">Last Updated: December 11, 2025</p>

            <div className="space-y-8 text-slate-700 leading-relaxed">
              <p className="text-lg">
                Welcome to BidZone, an Iraqi auction platform for selling authentic products at competitive prices.
                We are committed to protecting your privacy, and this document explains how we collect, use, and store your information.
              </p>

              <p className="text-lg font-semibold">
                By using the BidZone application or creating an account, you agree to this Privacy Policy.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
                <p>We collect the minimum information necessary to provide a secure bidding experience:</p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1.1 User-Provided Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name</li>
                  <li>Phone number (for registration, verification, and shipping operations)</li>
                  <li>Email address</li>
                  <li>Profile picture (optional)</li>
                  <li>Shipping address when needed</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1.2 Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device ID to enhance security and prevent fraud</li>
                  <li>In-app usage data (page views, clicks, interactions)</li>
                  <li>Notification token (FCM Token) for sending bidding and shipping alerts</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1.3 Transaction Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bidding history</li>
                  <li>Shipping and order records</li>
                  <li>Payment transactions when available in the future</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
                <p>We use your data only for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Creating your account and managing login</li>
                  <li>Protecting the platform from fake accounts and fraud attempts</li>
                  <li>Sending bidding notifications (price increases, auction endings, user wins)</li>
                  <li>Managing transactions between sellers and buyers</li>
                  <li>Improving application quality and user experience</li>
                  <li>Complying with any legal or security requirements when necessary</li>
                </ul>
                <p className="mt-4 font-semibold">We promise that we do not sell your information or share it with third parties for marketing purposes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Information Sharing</h2>
                <p>We may share limited information only with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Shipping companies to provide your name and phone number when there is an order</li>
                  <li>Technical service providers such as Supabase, Vercel, and Firebase to complete essential functions (data storage, notifications, security)</li>
                  <li>Legal authorities in case of an official court order</li>
                </ul>
                <p className="mt-4">We ensure that all partners adhere to high privacy protection standards.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Data Protection</h2>
                <p>We use a range of security technologies including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>HTTPS encryption</li>
                  <li>Row Level Security (RLS)</li>
                  <li>Suspicious activity monitoring</li>
                  <li>OTP verification</li>
                  <li>Multi-level fraud detection system</li>
                </ul>
                <p className="mt-4">However, 100% protection cannot be guaranteed online, so users are responsible for using secure passwords and not sharing their accounts.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Data Retention Period</h2>
                <p>We retain information throughout your use of the application, and it is deleted when you delete your account or according to legal requirements.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. User Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Edit your personal data within the application</li>
                  <li>Request permanent account deletion</li>
                  <li>Disable notifications at any time</li>
                  <li>Review your history within the application</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Minors' Privacy</h2>
                <p>BidZone is not intended for anyone under 18 years of age.</p>
                <p className="mt-2">When a minor's account is discovered, it will be suspended for their protection.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Privacy Policy Changes</h2>
                <p>We may update the policy when necessary.</p>
                <p className="mt-2">You will be notified through the application when there are important changes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Contact</h2>
                <p>For privacy-related inquiries:</p>
                <p className="mt-2">📧 <a href="mailto:info@bidzone-iq.com" className="text-blue-600 hover:underline">info@bidzone-iq.com</a></p>
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
