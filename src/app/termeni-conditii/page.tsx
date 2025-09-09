"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageProvider";

export default function TermsConditionsPage() {
	const { t } = useLanguage();
	return (
		<div className="min-h-screen bg-black relative">
			<NavBar />
			<main className="max-w-4xl mx-auto px-6 py-28 text-white">
				<h1 className="nohemi-heading text-3xl md:text-4xl mb-4">{t("terms_title")}</h1>
				<p className="text-white/70 mb-10">{t("terms_updated")}</p>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_intro_h")}</h2>
					<p className="text-white/80">{t("terms_intro_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_services_h")}</h2>
					<p className="text-white/80">{t("terms_services_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_account_h")}</h2>
					<p className="text-white/80">{t("terms_account_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_orders_h")}</h2>
					<p className="text-white/80">{t("terms_orders_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_pricing_h")}</h2>
					<p className="text-white/80">{t("terms_pricing_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_ip_h")}</h2>
					<p className="text-white/80">{t("terms_ip_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_liability_h")}</h2>
					<p className="text-white/80">{t("terms_liability_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_force_h")}</h2>
					<p className="text-white/80">{t("terms_force_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_privacy_h")}</h2>
					<p className="text-white/80">{t("terms_privacy_p").replace("{policy}", "\u003Ca href=\"/politica-confidentialitate\" class=\"text-[#ffed88] underline\"\u003E" + (t("privacy_policy")) + "\u003C/a\u003E")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_cookies_h")}</h2>
					<p className="text-white/80">{t("terms_cookies_p").replace("{policy}", "\u003Ca href=\"/politica-cookies\" class=\"text-[#ffed88] underline\"\u003E" + (t("cookies_policy")) + "\u003C/a\u003E")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_changes_h")}</h2>
					<p className="text-white/80">{t("terms_changes_p")}</p>
				</section>

				<section className="space-y-4">
					<h2 className="nohemi-heading text-2xl">{t("terms_law_h")}</h2>
					<p className="text-white/80">{t("terms_law_p")}</p>
				</section>

				<section className="space-y-4 mt-8">
					<h2 className="nohemi-heading text-2xl">{t("terms_contact_h")}</h2>
					<p className="text-white/80">{t("terms_contact_p")}</p>
				</section>
			</main>
			<Footer />
		</div>
	);
}


