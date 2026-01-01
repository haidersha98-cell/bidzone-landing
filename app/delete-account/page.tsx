"use client";

import Link from "next/link";

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-800 hover:text-blue-900 transition">
            BidZone
          </Link>
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-2xl transition-all duration-200 font-semibold hover:scale-[1.02] active:scale-[0.97] shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Arabic Section */}
        <article className="prose prose-lg max-w-none mb-16" dir="rtl">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">طلب حذف الحساب – BidZone</h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-lg">
              لطلب حذف حسابك وبياناتك المرتبطة بتطبيق BidZone، يرجى اتباع الخطوات التالية:
            </p>

            <ol className="list-decimal pr-6 space-y-2 text-lg">
              <li>افتح تطبيق BidZone.</li>
              <li>انتقل إلى الملف الشخصي &gt; تعديل الملف الشخصي.</li>
              <li>اضغط على زر &quot;حذف الحساب&quot; وقم بالتأكيد.</li>
            </ol>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">البيانات التي سيتم حذفها:</h2>
              <ul className="list-disc pr-6 space-y-2">
                <li>معلومات الحساب (البريد الإلكتروني، رقم الهاتف)</li>
                <li>بيانات الملف الشخصي</li>
                <li>سجل المزايدات والمشاركة في المزادات</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">البيانات التي قد يتم الاحتفاظ بها لأسباب قانونية أو تشغيلية:</h2>
              <ul className="list-disc pr-6 space-y-2">
                <li>سجلات المعاملات المطلوبة قانونيًا</li>
              </ul>
            </section>

            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-lg font-semibold text-red-800">
                ⚠️ حذف الحساب نهائي ولا يمكن التراجع عنه.
              </p>
            </div>
          </div>
        </article>

        {/* Divider */}
        <hr className="border-t-2 border-gray-200 my-12" />

        {/* English Section */}
        <article className="prose prose-lg max-w-none" dir="ltr">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Request Account Deletion – BidZone</h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-lg">
              To request deletion of your BidZone account and associated data, please follow these steps:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-lg">
              <li>Open the BidZone app.</li>
              <li>Go to Profile &gt; Edit Profile.</li>
              <li>Tap &quot;Delete Account&quot; and confirm.</li>
            </ol>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data that will be deleted:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (email address, phone number)</li>
                <li>User profile data</li>
                <li>Bidding and auction participation history</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data that may be retained for legal or operational purposes:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Transaction records required by law</li>
              </ul>
            </section>

            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-lg font-semibold text-red-800">
                ⚠️ Account deletion is permanent and cannot be undone.
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600">
          <p>&copy; {new Date().getFullYear()} BidZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
