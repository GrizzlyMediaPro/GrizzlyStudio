"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

export default function NavBar() {
	const { t } = useLanguage();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
						</div>
					</div>
				</div>
			</div>
		</>
	);
}


