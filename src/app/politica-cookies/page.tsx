"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageProvider";

export default function CookiesPolicyPage() {
	const { t } = useLanguage();
	return (
		<div className="min-h-screen bg-black relative">
			<NavBar />
			<main className="max-w-4xl mx-auto px-6 py-28 text-white">
				<h1 className="nohemi-heading text-3xl md:text-4xl mb-4">{t("cookies_title")}</h1>
				<p className="text-white/70 mb-10">{t("cookies_updated")}</p>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("cookies_intro_h")}</h2>
					<p className="text-white/80">{t("cookies_intro_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("cookies_what_h")}</h2>
					<p className="text-white/80">{t("cookies_what_p1")}</p>
					<p className="text-white/80">{t("cookies_what_p2")}</p>
					<h3 className="nohemi-medium text-xl">{t("cookies_what_list_h")}</h3>
					<ul className="list-disc pl-6 text-white/80 space-y-1">
						<li>{t("cookies_what_li1")}</li>
						<li>{t("cookies_what_li2")}</li>
					</ul>
					<p className="text-white/80">{t("cookies_what_p3")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("cookies_purposes_h")}</h2>
					<p className="text-white/80">{t("cookies_purposes_intro")}</p>
					<ul className="list-disc pl-6 text-white/80 space-y-1">
						<li>{t("cookies_purposes_li1")}</li>
						<li>{t("cookies_purposes_li2")}</li>
						<li>{t("cookies_purposes_li3")}</li>
					</ul>
					<p className="text-white/80">{t("cookies_purposes_note")}</p>
					<h3 className="nohemi-medium text-xl">{t("cookies_prefs_list_h")}</h3>
					<ul className="list-disc pl-6 text-white/80 space-y-1">
						<li>{t("cookies_prefs_li1")}</li>
						<li>{t("cookies_prefs_li2")}</li>
						<li>{t("cookies_prefs_li3")}</li>
						<li>{t("cookies_prefs_li4")}</li>
					</ul>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("cookies_lifetime_h")}</h2>
					<p className="text-white/80">{t("cookies_lifetime_intro")}</p>
					<ul className="list-disc pl-6 text-white/80 space-y-1">
						<li>{t("cookies_lifetime_li1")}</li>
						<li>{t("cookies_lifetime_li2")}</li>
					</ul>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("cookies_thirdparty_h")}</h2>
					<p className="text-white/80">{t("cookies_thirdparty_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("cookies_types_used_h")}</h2>
					<h3 className="nohemi-medium text-xl">{t("cookies_types_list_h")}</h3>
					<ul className="list-disc pl-6 text-white/80 space-y-1">
						<li>{t("cookies_types_li1")}</li>
						<li>{t("cookies_types_li2")}</li>
						<li>{t("cookies_types_li3")}</li>
						<li>{t("cookies_types_li4")}</li>
						<li>{t("cookies_types_li5")}</li>
						<li>{t("cookies_types_li6")}</li>
					</ul>

					<h3 className="nohemi-medium text-xl">{t("cookies_perf_h")}</h3>
					<p className="text-white/80">{t("cookies_perf_p")}</p>

					<h3 className="nohemi-medium text-xl">{t("cookies_ua_h")}</h3>
					<p className="text-white/80">{t("cookies_ua_p")}</p>

					<h3 className="nohemi-medium text-xl">{t("cookies_geo_h")}</h3>
					<p className="text-white/80">{t("cookies_geo_p")}</p>

					<h3 className="nohemi-medium text-xl">{t("cookies_reg_h")}</h3>
					<p className="text-white/80">{t("cookies_reg_p")}</p>

					<h3 className="nohemi-medium text-xl">{t("cookies_adv_h")}</h3>
					<p className="text-white/80">{t("cookies_adv_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("cookies_info_h")}</h2>
					<p className="text-white/80">{t("cookies_info_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("cookies_browser_h")}</h2>
					<p className="text-white/80">{t("cookies_browser_p")}</p>
				</section>

				<section className="space-y-4">
					<h2 className="nohemi-heading text-2xl">{t("cookies_disable_h")}</h2>
					<p className="text-white/80">{t("cookies_disable_p")}</p>
					<h3 className="nohemi-medium text-xl">{t("cookies_disable_links_h")}</h3>
					<ul className="list-disc pl-6 text-white/80 space-y-1">
						<li>{t("cookies_disable_li_ie")}</li>
						<li>{t("cookies_disable_li_ff")}</li>
						<li>{t("cookies_disable_li_ch")}</li>
						<li>{t("cookies_disable_li_sa")}</li>
					</ul>
				</section>
			</main>
			<Footer />
		</div>
	);
}


