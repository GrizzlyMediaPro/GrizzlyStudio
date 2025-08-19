"use client";

import Image from "next/image";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Footer() {
	const { t } = useLanguage();
	return (
		<footer className="bg-black/40 backdrop-blur-md border-t border-gray-300/20 mt-24">
			<div className="max-w-6xl mx-auto px-6 py-8">
				<div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
					<div className="flex-1 max-w-md">
						<div className="flex items-center mb-4">
							<Image src="/grizzlylogo.png" alt="Grizzly Media Pro Logo" width={150} height={38} className="object-contain" />
						</div>
						<p className="text-white/60 text-sm leading-relaxed">{t("footer_tagline")}</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-8">
						<div>
							<h4 className="nohemi-medium text-white text-sm mb-4">{t("footer_nav_label")}</h4>
							<div className="grid grid-cols-2 gap-2">
								<a href="#despre" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm">{t("footer_nav_about")}</a>
								<a href="#servicii" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm">{t("footer_nav_services")}</a>
								<a href="#portofoliu" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm">{t("footer_nav_portfolio")}</a>
								<a href="#contact" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300 text-sm">{t("footer_nav_contact")}</a>
							</div>
						</div>

						<div>
							<h4 className="nohemi-medium text-white text-sm mb-4">{t("footer_contact_label")}</h4>
							<div className="space-y-3">
								<div className="flex items-center space-x-3">
									<a href="tel:+40750227013" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300">
										<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
											<path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.65 3 4.19C3 13.27 10.73 21 19.81 21c.54 0 .99-.45.99-.99v-3.45c0-.54-.45-.99-.99-.99z" />
										</svg>
									</a>
									<span className="text-white/60 text-sm">+40 750 227 013</span>
								</div>
								<div className="flex items-center space-x-3">
									<a href="mailto:grizzlymediapro@gmail.com" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300">
										<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
											<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
										</svg>
									</a>
									<span className="text-white/60 text-sm">grizzlymediapro@gmail.com</span>
								</div>
							</div>
						</div>

						<div>
							<h4 className="nohemi-medium text-white text-sm mb-4">{t("footer_social_label")}</h4>
							<div className="flex space-x-3">
								<a href="#" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300">
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
									</svg>
								</a>
								<a href="#" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300">
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
									</svg>
								</a>
								<a href="#" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300">
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
								</a>
								<a href="#" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300">
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
					<p className="text-white/50 text-sm mb-4 md:mb-0">{t("footer_rights")}</p>
					<div className="flex flex-wrap gap-4 text-sm">
						<a href="/politica-confidentialitate" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300">{t("privacy_policy")}</a>
						<a href="/politica-cookies" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300">{t("cookies_policy")}</a>
						<a href="/termeni-conditii" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300">{t("terms_conditions")}</a>
						<a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#ffed88] transition-colors duration-300">{t("anpc_label")}</a>
					</div>
				</div>
			</div>
		</footer>
	);
}


