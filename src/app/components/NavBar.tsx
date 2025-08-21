"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

export default function NavBar() {
	const { t, lang, setLang } = useLanguage();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleScrollClose = () => {
			if (isMobileMenuOpen) setIsMobileMenuOpen(false);
		};
		window.addEventListener("scroll", handleScrollClose);
		return () => window.removeEventListener("scroll", handleScrollClose);
	}, [isMobileMenuOpen]);

	// Închide dropdown-ul de limbă când se face click în afara lui
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Element;
			if (!target.closest('.language-dropdown')) {
				setIsLanguageDropdownOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	const toggleLanguageDropdown = () => setIsLanguageDropdownOpen(!isLanguageDropdownOpen);

	const changeLanguage = (newLang: "ro" | "en") => {
		setLang(newLang);
		setIsLanguageDropdownOpen(false);
	};

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
					isScrolled ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
				}`}
			>
				<div
					className="bg-[#0d0d0e80] border-b border-gray-600/30"
					style={{ WebkitBackdropFilter: "blur(50px)", backdropFilter: "blur(50px)" }}
				>
					<div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
						<div className="flex items-center">
							<a href="/">
								<Image
									src="/grizzlylogo.png"
									alt="Grizzly Media Pro Logo"
									width={220}
									height={55}
									className="object-contain transition-all duration-500"
								/>
							</a>
						</div>

						<div className="hidden md:flex items-center space-x-8">
							<a href="/#servicii" className="text-white/80 hover:text-white transition-colors duration-300">
								{t("nav_services")}
							</a>
							<a href="/#portofoliu" className="text-white/80 hover:text-white transition-colors duration-300">
								{t("nav_portfolio")}
							</a>
							<a href="/#despre" className="text-white/80 hover:text-white transition-colors duration-300">
								{t("nav_about")}
							</a>
							<a
								href="/#contact"
								className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
							>
								{t("nav_contact")}
							</a>
							
							{/* Buton de limbă cu dropdown */}
							<div className="relative language-dropdown">
								<button
									onClick={toggleLanguageDropdown}
									className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
									aria-label="Language selector"
								>
									<span className="font-medium">{lang === "ro" ? "RO" : "EN"}</span>
									<svg
										className={`w-4 h-4 transition-transform duration-300 ${isLanguageDropdownOpen ? "rotate-180" : ""}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
								</button>
								
								{/* Dropdown pentru limbă */}
								{isLanguageDropdownOpen && (
									<div className="absolute top-full right-0 mt-2 bg-[#0d0d0e] border border-white/20 rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] backdrop-blur-md overflow-hidden z-50">
										<button
											onClick={() => changeLanguage("ro")}
											className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
												lang === "ro" ? "text-[#ffed88] bg-white/5" : "text-white/80"
											}`}
										>
											RO
										</button>
										<button
											onClick={() => changeLanguage("en")}
											className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
												lang === "en" ? "text-[#ffed88] bg-white/5" : "text-white/80"
											}`}
										>
											EN
										</button>
									</div>
								)}
							</div>
						</div>

						<button
							onClick={toggleMobileMenu}
							className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
							aria-label="Toggle mobile menu"
						>
							<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
							<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
							<span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
						</button>
					</div>
				</div>
			</nav>

			<div
				className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
					isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				}`}
				style={{ top: "80px" }}
			>
				<div className={`absolute inset-0 bg-[#0d0d0e] transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
					<div className="flex flex-col justify-center items-center h-full">
						<div className="flex flex-col space-y-8 text-center">
							<a href="/#servicii" onClick={closeMobileMenu} className="text-white/80 hover:text-white transition-colors duration-300 text-2xl font-medium py-4">
								{t("nav_services")}
							</a>
							<a href="/#portofoliu" onClick={closeMobileMenu} className="text-white/80 hover:text-white transition-colors duration-300 text-2xl font-medium py-4">
								{t("nav_portfolio")}
							</a>
							<a href="/#despre" onClick={closeMobileMenu} className="text-white/80 hover:text-white transition-colors duration-300 text-2xl font-medium py-4">
								{t("nav_about")}
							</a>
							<a href="/#contact" onClick={closeMobileMenu} className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] text-xl mt-8">
								{t("cta_schedule")}
							</a>
							
							{/* Buton de limbă pentru mobile */}
							<div className="mt-8 flex justify-center">
								<div className="relative language-dropdown">
									<button
										onClick={toggleLanguageDropdown}
										className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
										aria-label="Language selector"
									>
										<span className="text-2xl font-medium">{lang === "ro" ? "RO" : "EN"}</span>
										<svg
											className={`w-5 h-5 transition-transform duration-300 ${isLanguageDropdownOpen ? "rotate-180" : ""}`}
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
										</svg>
									</button>
									
									{/* Dropdown pentru limbă - mobile */}
									{isLanguageDropdownOpen && (
										<div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#0d0d0e] border border-white/20 rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] backdrop-blur-md overflow-hidden z-50 min-w-[80px]">
											<button
												onClick={() => changeLanguage("ro")}
												className={`w-full px-4 py-3 text-center hover:bg-white/10 transition-colors duration-200 ${
													lang === "ro" ? "text-[#ffed88] bg-white/5" : "text-white/80"
												}`}
											>
												RO
											</button>
											<button
												onClick={() => changeLanguage("en")}
												className={`w-full px-4 py-3 text-center hover:bg-white/10 transition-colors duration-200 ${
													lang === "en" ? "text-[#ffed88] bg-white/5" : "text-white/80"
												}`}
											>
												EN
											</button>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}


