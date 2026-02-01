"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "~/components/ui/containers";
import { Navbar } from "~/components/navbar";
import { HiChevronDown, HiFilter } from "react-icons/hi";

// Officer type definition
interface Officer {
    id: string;
    name: string;
    position: string;
    team: "executives" | "creatives" | "logistics" | "moderator";
    isPresident?: boolean;
    isModerator?: boolean;
    image?: string;
}

// Sample data - replace with actual data or API call
const officersData: Record<string, Officer[]> = {
    "2025-2026": [
        // Executives
        // Executives
        { id: "25-8", name: "De Lara", position: "President", team: "executives", isPresident: true, image: "/officers (25-26)/DE LARA.png" },
        // Moderator placed before IVP
        { id: "25-mod", name: "Keana Giron", position: "Moderator", team: "executives", isModerator: true, image: "/officers (25-26)/giron.png" },
        { id: "25-3", name: "Chelsea Mae J. Banlasan", position: "Internal Vice President", team: "executives", image: "/officers (25-26)/banlasan.png" },
        { id: "25-21", name: "Karen Refamonte", position: "External Vice President", team: "executives", image: "/officers (25-26)/refamonte.png" },
        { id: "25-9", name: "Ashlee M. Madriñan", position: "Secretary", team: "executives", image: "/officers (25-26)/MADRINAN.png" },
        { id: "25-13", name: "Diana Rose Suello", position: "Assistant Secretary", team: "executives", image: "/officers (25-26)/suello.png" },
        { id: "25-18", name: "Melgen II A. Simo", position: "Treasurer", team: "executives", image: "/officers (25-26)/simo.png" },
        { id: "25-6", name: "Jacky L. Rapal", position: "Assistant Treasurer", team: "executives", image: "/officers (25-26)/rapal.png" },

        { id: "25-5", name: "Pit Frankie B. Ceniza", position: "Assistant Auditor", team: "executives", image: "/officers (25-26)/ceniza.png" },
        { id: "25-2", name: "Samantha Cruspero", position: "Business Manager", team: "executives", image: "/officers (25-26)/cruspero.png" },
        { id: "25-hinayon", name: "Adrian A. Hinayon", position: "Assistant Business Manager", team: "executives", image: "/officers (25-26)/hinayon.png" },
        { id: "25-4", name: "Chriss Laurence Olanda", position: "Public Information Officer", team: "executives", image: "/officers (25-26)/olanda.png" },

        // Representatives
        { id: "25-11", name: "Vanessa Denisse Ibañez", position: "1st Year Representative", team: "executives", image: "/officers (25-26)/ibanez.png" },
        { id: "25-7", name: "Moison Rayam Dominggo", position: "2nd Year Representative", team: "executives", image: "/officers (25-26)/domingo.png" },
        { id: "25-25", name: "Francis Xavier Baclao", position: "3rd Year Representative", team: "executives", image: "/officers (25-26)/baclao.png" },

        // Logistics
        { id: "25-22", name: "King Wee Kon L. Huelva", position: "Logistics Head", team: "logistics", image: "/officers (25-26)/HUELVA.png" },
        { id: "25-10", name: "Kurt Jershon Vidal", position: "Logistics Committee", team: "logistics", image: "/officers (25-26)/VIDAL.png" },
        { id: "25-12", name: "Christan P. Luces", position: "Logistics Committee", team: "logistics", image: "/officers (25-26)/LUCES.png" },
        { id: "25-15", name: "Jhon Elpidio Dagmil", position: "Logistics Committee", team: "logistics", image: "/officers (25-26)/DAGMIL.png" },
        { id: "25-20", name: "Alec Eight N. Jazmin", position: "Logistics Committee", team: "logistics", image: "/officers (25-26)/JAZMIN.png" },
        { id: "25-23", name: "Rey Humperdinck S. Arendain", position: "Logistics Committee", team: "logistics", image: "/officers (25-26)/ARENDAIN.png" },

        // Creatives
        { id: "25-1", name: "Catherine Arnado", position: "Creatives Head", team: "creatives", image: "/officers (25-26)/ARNADO.png" },
        { id: "25-14", name: "Kyle Andrei Abellera", position: "Creatives Committee", team: "creatives", image: "/officers (25-26)/ABELLARA.png" },
        { id: "25-16", name: "Rexxa Anika Iway", position: "Creatives Committee", team: "creatives", image: "/officers (25-26)/IWAY.png" },
        { id: "25-17", name: "Ian Benedict Peteros", position: "Creatives Committee", team: "creatives", image: "/officers (25-26)/PeTEROS.png" },
        { id: "25-19", name: "Dhruv Jae E. Guboc", position: "Creatives Committee", team: "creatives", image: "/officers (25-26)/GUBOC.png" },
        { id: "25-24", name: "Rhonan Madarang", position: "Documentary Lead", team: "creatives", image: "/officers (25-26)/MADARANG.png" },
    ],
    "2024-2025": [
        // Moderator
        { id: "0", name: "Faculty Moderator", position: "Moderator", team: "moderator", isModerator: true },
        // Executives
        { id: "1", name: "Juan Dela Cruz", position: "President", team: "executives", isPresident: true },
        { id: "2", name: "Maria Santos", position: "Internal Vice President", team: "executives" },
        { id: "3", name: "Pedro Reyes", position: "External Vice President", team: "executives" },
        { id: "4", name: "Ana Garcia", position: "Secretary", team: "executives" },
        // ... previous placeholder data can remain or be cleaned up
        { id: "5", name: "Carlos Lopez", position: "Assistant Secretary", team: "executives" },
        { id: "6", name: "Sofia Cruz", position: "Treasurer", team: "executives" },
    ]
};

const schoolYears = Object.keys(officersData);
const teams = ["executives", "creatives", "logistics"] as const;

const teamColors = {
    executives: "from-red-600 to-red-900",
    creatives: "from-purple-600 to-purple-900",
    logistics: "from-blue-600 to-blue-900",
    moderator: "from-amber-600 to-amber-900",
};

const teamBadgeColors = {
    executives: "bg-red-600/20 text-red-400 border-red-600/30",
    creatives: "bg-purple-600/20 text-purple-400 border-purple-600/30",
    logistics: "bg-blue-600/20 text-blue-400 border-blue-600/30",
    moderator: "bg-amber-600/20 text-amber-400 border-amber-600/30",
};

export default function OfficersPage() {
    const [selectedYear, setSelectedYear] = useState(schoolYears[0]);
    const [activeTab, setActiveTab] = useState<typeof teams[number]>("executives");
    const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

    const currentOfficers = officersData[selectedYear] || [];
    const president = currentOfficers.find((o) => o.isPresident);
    const moderator = currentOfficers.find((o) => o.isModerator);
    const filteredOfficers = currentOfficers.filter(
        (o) => o.team === activeTab && !o.isPresident
    );

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <Container variant="fullMobileBreakpointPadded">
                <div className="pt-28 pb-16">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <h1 className="font-questrial text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-400 mb-4">
                            Officers
                        </h1>
                        <p className="font-inter text-neutral-400 text-lg">
                            Meet the dedicated team behind HCDC ITS
                        </p>
                    </motion.div>

                    {/* Filters Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-wrap items-center gap-4 mb-8"
                    >
                        {/* Year Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <HiFilter className="w-4 h-4 text-neutral-400" />
                                <span className="font-inter text-sm">{selectedYear}</span>
                                <HiChevronDown
                                    className={`w-4 h-4 transition-transform ${isYearDropdownOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {isYearDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-full left-0 mt-2 w-40 bg-neutral-900 border border-white/10 rounded-xl overflow-hidden z-20"
                                    >
                                        {schoolYears.map((year) => (
                                            <button
                                                key={year}
                                                onClick={() => {
                                                    setSelectedYear(year);
                                                    setIsYearDropdownOpen(false);
                                                }}
                                                className={`w-full px-4 py-2 text-left text-sm font-inter hover:bg-white/10 transition-colors ${selectedYear === year
                                                    ? "bg-white/10 text-white"
                                                    : "text-neutral-400"
                                                    }`}
                                            >
                                                {year}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Team Tabs */}
                        <div className="flex bg-white/5 border border-white/10 rounded-full p-1">
                            {teams.map((team) => (
                                <button
                                    key={team}
                                    onClick={() => setActiveTab(team)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-inter capitalize transition-all ${activeTab === team
                                        ? "bg-white text-black"
                                        : "text-neutral-400 hover:text-white"
                                        }`}
                                >
                                    {team}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Officers Grid */}
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Officers List (3 columns on large screens) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                                <AnimatePresence mode="wait">
                                    {filteredOfficers.map((officer, index) => (
                                        <motion.div
                                            key={officer.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                                        >
                                            {/* ID Card Image Area */}
                                            <div className="w-full aspect-[3/4] mb-4 bg-gradient-to-br from-white/10 to-transparent rounded-xl overflow-hidden relative border border-white/10 group-hover:border-white/20 transition-colors">
                                                {officer.image ? (
                                                    <img src={officer.image} alt={officer.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                                ) : (
                                                    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${teamColors[officer.team]}`}>
                                                        <span className="font-questrial text-4xl font-bold text-white">
                                                            {officer.name.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* ID Gloss Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                            </div>

                                            {/* Info */}
                                            <div className="text-center">
                                                <h3 className="font-questrial text-lg font-bold text-white mb-1 leading-tight">
                                                    {officer.name}
                                                </h3>
                                                <p className="font-inter text-xs text-red-500 uppercase tracking-wider font-semibold mb-3">
                                                    {officer.position}
                                                </p>

                                                {/* Team Badge */}
                                                <span
                                                    className={`inline-block px-3 py-1 text-[10px] uppercase font-inter rounded-full border ${teamBadgeColors[officer.team]}`}
                                                >
                                                    {officer.team}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {filteredOfficers.length === 0 && (
                                    <div className="col-span-full py-12 text-center text-neutral-500">
                                        No officers found for this team.
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* President Card (1 column on large screens) */}
                        {(president || moderator) && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="lg:col-span-1"
                            >
                                <div className="sticky top-28 space-y-6">
                                    {/* President Card - Moderator is now in main grid */}
                                    {president && (
                                        <div className="relative bg-gradient-to-br from-red-900/30 to-black border border-red-900/30 rounded-3xl p-8 overflow-hidden">
                                            {/* Glow Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent" />

                                            {/* Content */}
                                            <div className="relative z-10">
                                                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative mb-6 border-2 border-red-500/20 shadow-2xl shadow-red-900/20">
                                                    {president.image ? (
                                                        <img src={president.image} alt={president.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-900 flex items-center justify-center">
                                                            <span className="font-questrial text-6xl font-bold text-white">
                                                                {president.name.charAt(0)}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                <h3 className="font-questrial text-3xl font-bold text-white text-center mb-2 leading-none">
                                                    {president.name}
                                                </h3>
                                                <p className="font-inter text-red-400 text-center font-bold tracking-widest uppercase text-sm mb-4">
                                                    President
                                                </p>
                                                <p className="font-inter text-neutral-500 text-xs text-center">
                                                    S.Y. {selectedYear}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}
