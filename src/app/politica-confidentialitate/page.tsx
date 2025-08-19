"use client";

import { useLanguage } from "../i18n/LanguageProvider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
	const { t } = useLanguage();
	return (
		<div className="min-h-screen bg-black relative">
			<NavBar />
			<main className="max-w-4xl mx-auto px-6 py-28 text-white">
				<h1 className="nohemi-heading text-3xl md:text-4xl mb-4">{t("privacy_title")}</h1>
				<p className="text-white/70 mb-10">{t("privacy_updated")}</p>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("privacy_general_h")}</h2>
					<p className="text-white/80">{t("privacy_general_p")}</p>
				</section>

				<section className="space-y-6 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("privacy_cat_h")}</h2>
					<h3 className="nohemi-medium text-xl">{t("privacy_cat_client_h")}</h3>
					<p className="text-white/80">{t("privacy_cat_client_p1")}</p>
					<p className="text-white/80">{t("privacy_cat_client_p2")}</p>
					<p className="text-white/80">{t("privacy_cat_client_p3")}</p>

					<h3 className="nohemi-medium text-xl">{t("privacy_cat_visitor_h")}</h3>
					<p className="text-white/80">{t("privacy_cat_visitor_p1")}</p>
				</section>

				<section className="space-y-6 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("privacy_purposes_h")}</h2>
					<h3 className="nohemi-medium text-xl">{t("privacy_purposes_client_h")}</h3>
					<p className="text-white/80">{t("privacy_purposes_client_intro")}</p>
					<ul className="list-disc pl-6 space-y-4 text-white/80">
						<li>{t("privacy_purposes_client_li1")}</li>
						<li>{t("privacy_purposes_client_li2")}</li>
						<li>{t("privacy_purposes_client_li3")}</li>
						<li>{t("privacy_purposes_client_li4")}</li>
					</ul>

					<h3 className="nohemi-medium text-xl">{t("privacy_purposes_visitor_h")}</h3>
					<ul className="list-disc pl-6 space-y-4 text-white/80">
						<li>{t("privacy_purposes_visitor_li1")}</li>
						<li>{t("privacy_purposes_visitor_li2")}</li>
					</ul>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("privacy_duration_h")}</h2>
					<p className="text-white/80">{t("privacy_duration_p1")}</p>
					<p className="text-white/80">{t("privacy_duration_p2")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("privacy_disclosure_h")}</h2>
					<p className="text-white/80">{t("privacy_disclosure_intro")}</p>
					<ul className="list-disc pl-6 space-y-2 text-white/80">
						<li>{t("privacy_disclosure_li1")}</li>
						<li>{t("privacy_disclosure_li2")}</li>
						<li>{t("privacy_disclosure_li3")}</li>
						<li>{t("privacy_disclosure_li4")}</li>
						<li>{t("privacy_disclosure_li5")}</li>
						<li>{t("privacy_disclosure_li6")}</li>
					</ul>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("privacy_transfer_h")}</h2>
					<p className="text-white/80">{t("privacy_transfer_p")}</p>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("privacy_rights_h")}</h2>
					<p className="text-white/80">{t("privacy_rights_intro")}</p>
					<ul className="list-disc pl-6 space-y-2 text-white/80">
						<li>{t("privacy_rights_li_info")}</li>
						<li>{t("privacy_rights_li_access")}</li>
						<li>{t("privacy_rights_li_rect")}</li>
						<li>
							{t("privacy_rights_li_delete_intro")}
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li>{t("privacy_rights_li_delete_li1")}</li>
								<li>{t("privacy_rights_li_delete_li2")}</li>
								<li>{t("privacy_rights_li_delete_li3")}</li>
								<li>{t("privacy_rights_li_delete_li4")}</li>
								<li>{t("privacy_rights_li_delete_li5")}</li>
								<li>{t("privacy_rights_li_delete_li6")}</li>
							</ul>
							<p className="mt-2">{t("privacy_rights_li_delete_note")}</p>
						</li>
						<li>
							{t("privacy_rights_li_restrict_intro")}
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li>{t("privacy_rights_li_restrict_li1")}</li>
								<li>{t("privacy_rights_li_restrict_li2")}</li>
								<li>{t("privacy_rights_li_restrict_li3")}</li>
								<li>{t("privacy_rights_li_restrict_li4")}</li>
							</ul>
						</li>
						<li>{t("privacy_rights_li_port")}</li>
						<li>
							{t("privacy_rights_li_object_intro")}
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li>{t("privacy_rights_li_object_li1")}</li>
								<li>{t("privacy_rights_li_object_li2")}</li>
							</ul>
							<p className="mt-2">{t("privacy_rights_li_object_note")}</p>
						</li>
						<li>{t("privacy_rights_li_auto")}</li>
					</ul>
				</section>

				<section className="space-y-4 mb-8">
					<h2 className="nohemi-heading text-2xl">{t("privacy_complaints_h")}</h2>
					<p className="text-white/80">{t("privacy_complaints_p")}</p>
				</section>

				<section className="space-y-4">
					<h2 className="nohemi-heading text-2xl">{t("privacy_contact_h")}</h2>
					<p className="text-white/80">{t("privacy_contact_p1")}</p>
					<p className="text-white/80">
						{t("privacy_cookies_note_intro")} <a href="/politica-cookies" className="text-[#ffed88] underline">{t("cookies_policy")}</a>.
					</p>
				</section>
			</main>
			<Footer />
		</div>
	);
}


