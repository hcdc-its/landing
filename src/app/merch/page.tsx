"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "~/components/ui/containers";
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";
import { HiArrowLeft, HiOutlineShoppingBag, HiInformationCircle, HiPlus } from "react-icons/hi";
import { useRouter } from "next/navigation";
import ShinyText from "~/components/ui/shiny-text";

const COLOR_OPTIONS = [
    {
        id: "red",
        name: "Crimson Red",
        hex: "#960000",
        frontImg: "/shirts/RED FRONT.png",
        backImg: "/shirts/RED BACK.png",
        blueprintFront: "/shirts/shirt designs/FRONT BLACK.RED.png",
        blueprintBack: "/shirts/shirt designs/BACK BLACK.RED.png"
    },
    {
        id: "black",
        name: "Midnight Black",
        hex: "#000000",
        frontImg: "/shirts/BLACK FRONT.png",
        backImg: "/shirts/BLACK BACK.png",
        blueprintFront: "/shirts/shirt designs/FRONT BLACK.RED.png",
        blueprintBack: "/shirts/shirt designs/BACK BLACK.RED.png"
    },
    {
        id: "white",
        name: "Pure White",
        hex: "#ffffff",
        frontImg: "/shirts/WHITE FRONT.png",
        backImg: "/shirts/WHITE BACK.png",
        blueprintFront: "/shirts/shirt designs/FRONT WHITE.png",
        blueprintBack: "/shirts/shirt designs/BACK WHITE.png"
    },
];

const PIN_OPTIONS = [
    {
        id: "crimson",
        name: "Crimson Logo",
        hex: "#960000",
        img: "/pins/crimson.png"
    },
    {
        id: "midnight",
        name: "Midnight Logo",
        hex: "#000000",
        img: "/pins/midnight.png"
    }
];

const HOTSPOTS = [
    { id: "IT", side: "front", x: "50%", y: "42%", label: "CORE_IDENTITY", title: "Information Technology", description: "The primary design element, representing the bold identity of the BSIT program at HCDC." },

    { id: "logo", side: "back", x: "50%", y: "15%", label: "OFFICIAL_SEAL", title: "HCDC Logo", description: "The official seal of the Holy Cross of Davao College, symbolizing our heritage and institutional pride." },
    { id: "keychain", side: "back", x: "36%", y: "65%", label: "INTEGRATION", title: "Key Element", description: "A symbolic integration element representing the tools and keys to success in the digital era." },
    { id: "world-it", side: "back", x: "50%", y: "45%", label: "BRAND_CONCEPT", title: "World of IT", description: "A detailed graphic representing the global reach and interconnected nature of modern Information Technology." },
    { id: "objectives", side: "back", x: "50%", y: "85%", label: "MISSION_DATA", title: "ITS Objectives", description: "INNOVATION • COMMUNITY • GROWTH. The three pillars that define our society's mission and vision." },
];

const Hotspot = ({ point, active, onClick }: { point: typeof HOTSPOTS[0], active: boolean, onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="absolute z-30 group"
            style={{ left: point.x, top: point.y }}
        >
            <button
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative flex items-center justify-center transition-all duration-300 ${active ? 'scale-125' : 'hover:scale-110'}`}
            >
                {/* Hover Quick-Info */}


                <div className="absolute w-10 h-10 bg-green-500/30 rounded-full animate-ping" />
                <div className="w-8 h-8 bg-green-500/20 border border-green-400 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
            </button>

            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute bottom-14 left-1/2 -translate-x-1/2 w-80 bg-neutral-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 pointer-events-none overflow-hidden"
                    >
                        {/* Detail Window Content */}
                        <div className="px-5 py-3 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="text-green-400">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                                    </svg>
                                </div>
                                <span className="text-[9px] font-black tracking-[0.2em] text-green-400 uppercase">TECH.SPEC</span>
                            </div>
                            <span className="text-[9px] font-mono text-neutral-600 uppercase">SYS.ID.{point.id.toUpperCase()}</span>
                        </div>

                        <div className="p-6">
                            <h4 className="font-inter-tight text-xl font-black uppercase mb-4 tracking-tight flex items-center gap-3 italic">
                                {point.title}
                            </h4>

                            <div className="flex gap-4">
                                <div className="w-1 bg-green-500/50 rounded-full shrink-0" />
                                <p className="font-questrial text-xs text-neutral-400 leading-relaxed py-1">
                                    {point.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mt-6">
                                <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl">
                                    <p className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest mb-1">Status</p>
                                    <p className="text-[10px] font-bold text-neutral-200">OPTIMIZED</p>
                                </div>
                                <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl">
                                    <p className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest mb-1">Type</p>
                                    <p className="text-[10px] font-bold text-neutral-200">{point.label}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end px-4 pb-2 opacity-20">
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-white" />
                                <div className="w-1 h-1 rounded-full bg-white" />
                                <div className="w-1 h-1 rounded-full bg-white" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProductZoom = ({ src, alt }: { src: string; alt: string }) => {
    const [showZoom, setShowZoom] = useState(false);
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPos({ x, y });
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-square cursor-crosshair"
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Base Image Container with Clipping */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <AnimatePresence>
                {showZoom && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 pointer-events-none z-20"
                    >
                        <motion.div
                            className="absolute top-0 -left-80 w-80 h-80 border border-white/20 rounded-2xl overflow-hidden bg-neutral-900 z-50 pointer-events-none shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        >
                            <div
                                className="w-full h-full bg-no-repeat bg-[#151515]"
                                style={{
                                    backgroundImage: `url("${src}")`,
                                    backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                                    backgroundSize: '400%',
                                }}
                            />
                            {/* Scanning Overlay in Zoom Window */}
                            <div className="absolute inset-0 pointer-events-none border border-white/5" />
                            <div className="absolute top-4 left-4 flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-its-red animate-pulse" />
                                <div className="text-[8px] font-black tracking-[0.2em] text-white/50 uppercase">System.Scan</div>
                            </div>
                        </motion.div>

                        {/* Minimal Circle Reticle on Main Image */}
                        <div
                            className="absolute pointer-events-none w-24 h-24 rounded-full translate-x-[-50%] translate-y-[-50%] transition-all duration-300 flex items-center justify-center border border-white/20"
                            style={{
                                left: `${zoomPos.x}%`,
                                top: `${zoomPos.y}%`,
                            }}
                        >
                            <div className="w-1 h-1 bg-its-red rounded-full" />
                            <div className="absolute inset-0 border border-white/10 rounded-full scale-90" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function MerchPage() {
    const router = useRouter();
    const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[1]);
    const [selectedSize, setSelectedSize] = useState("L");
    const [selectedPin, setSelectedPin] = useState(PIN_OPTIONS[0]);
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
    const [productView, setProductView] = useState<"front" | "back">("front");
    const [designView, setDesignView] = useState<"front" | "back">("front");
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const price = ["3XL", "4XL", "5XL"].includes(selectedSize) ? 400 : 300;

    return (
        <div className="min-h-screen bg-black text-white selection:bg-its-red/30 overflow-x-hidden">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex flex-col items-center gap-4"
                        >
                            <h1 className="text-8xl md:text-[12rem] font-black font-inter-tight tracking-tighter uppercase leading-[0.8] text-center">
                                merch
                            </h1>
                            <div className="w-24 h-1 bg-its-red mt-8" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Navbar />

            <main className="pt-32 pb-40">
                <Container>
                    {/* Back Button */}
                    <button
                        onClick={() => router.push("/")}
                        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group"
                    >
                        <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-questrial uppercase tracking-widest text-sm">Back to Home</span>
                    </button>

                    {/* SECTION 1: E-COMMERCE SHOWCASE */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-80 items-center">
                        {/* Image Showcase - MAXIMUM SCALE */}
                        <div className="lg:col-span-8 relative group flex flex-col items-center justify-start p-0 h-[1000px] -mt-20 overflow-visible">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${selectedColor.id}-${productView}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1.25 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative w-full h-full flex items-center justify-center overflow-visible"
                                >
                                    <ProductZoom
                                        src={productView === 'front' ? selectedColor.frontImg : selectedColor.backImg}
                                        alt={`ITS Shirt in ${selectedColor.name} - ${productView} view`}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Viewport Toggle Overlay for Main Product */}
                            <div className="mt-12">
                                <div className="relative flex p-1.5 bg-neutral-900/50 backdrop-blur-md rounded-full w-[300px] h-16 border border-white/5 items-center shadow-2xl">
                                    <motion.div
                                        className="absolute h-13 bg-white/10 rounded-full z-0"
                                        initial={false}
                                        animate={{
                                            width: "calc(50% - 6px)",
                                            x: productView === "front" ? 0 : "100%"
                                        }}
                                        transition={{ type: "spring", stiffness: 350, damping: 35 }}
                                    />
                                    <button
                                        onClick={() => setProductView("front")}
                                        className={`relative z-10 flex-1 h-full font-inter-tight font-black uppercase text-xs tracking-[0.2em] transition-all duration-500 ${productView === 'front' ? 'text-white' : 'text-neutral-500 hover:text-neutral-400'}`}
                                    >
                                        FRONT
                                    </button>
                                    <button
                                        onClick={() => setProductView("back")}
                                        className={`relative z-10 flex-1 h-full font-inter-tight font-black uppercase text-xs tracking-[0.2em] transition-all duration-500 ${productView === 'back' ? 'text-white' : 'text-neutral-500 hover:text-neutral-400'}`}
                                    >
                                        BACK
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Selection UI */}
                        <div className="lg:col-span-4 flex flex-col justify-center">
                            <div className="space-y-4 mb-20 text-start">
                                <h1 className="text-8xl md:text-9xl font-black font-inter-tight tracking-tighter uppercase flex flex-col items-start leading-[0.8]">
                                    <ShinyText text="WORLD" speed={3} />
                                    <span className="text-neutral-500 whitespace-nowrap">OF IT</span>
                                </h1>
                            </div>

                            {/* Color Switcher */}
                            <div className="space-y-6 mb-10">
                                <p className="text-[10px] uppercase font-bold text-neutral-600 tracking-[0.4em] mb-4">COLORWAY</p>
                                <div className="flex gap-4">
                                    {COLOR_OPTIONS.map((color) => (
                                        <button
                                            key={color.id}
                                            onClick={() => setSelectedColor(color)}
                                            className={`
                                                w-12 h-12 rounded-full border transition-all duration-500 p-1
                                                ${selectedColor.id === color.id ? 'border-its-red scale-110' : 'border-white/10 hover:border-white/40'}
                                            `}
                                        >
                                            <div
                                                className="w-full h-full rounded-full"
                                                style={{ backgroundColor: color.hex }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size selection */}
                            <div className="space-y-6 mb-14">
                                <p className="text-[10px] uppercase font-bold text-neutral-600 tracking-[0.4em] mb-4">SIZES</p>
                                <div className="grid grid-cols-5 gap-2 max-w-[360px]">
                                    {["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`
                                                h-12 flex items-center justify-center text-[10px] font-black transition-all duration-300 border
                                                ${selectedSize === size ? 'bg-its-red border-its-red text-white' : 'bg-transparent border-white/10 text-neutral-500 hover:border-white/30'}
                                            `}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Purchase Button - Simple */}
                            <div className="space-y-10">
                                <div className="flex justify-between items-end border-b border-white/5 pb-10">
                                    <div className="text-start">
                                        <p className="text-7xl font-black font-inter-tight tracking-tighter">₱{price}</p>
                                    </div>
                                    <div className="text-end">
                                        <p className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest mb-1">Stock Status</p>
                                        <p className="text-[10px] font-black text-green-500 uppercase tracking-widest animate-pulse">Available_Now</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <button
                                        onClick={() => setIsOrderModalOpen(true)}
                                        className="flex-[1.2] h-16 bg-white text-black font-questrial font-black uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all rounded-full flex items-center justify-center text-[10px] whitespace-nowrap px-6 group"
                                    >
                                        ORDER NOW
                                    </button>
                                    <button
                                        onClick={() => setIsSizeModalOpen(true)}
                                        className="flex-1 h-16 bg-neutral-900 text-white border border-white/10 font-questrial font-black uppercase tracking-[0.15em] hover:bg-neutral-800 transition-all rounded-full flex items-center justify-center text-[10px] whitespace-nowrap px-6"
                                    >
                                        SIZE GUIDE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* INTERSECTION MARQUEES - CROSSING 'X' */}
                    <div className="relative w-screen left-1/2 -ml-[50vw] h-[500px] flex items-center justify-center overflow-hidden">
                        {/* Diagonal 1 */}
                        <div className="absolute w-[150%] rotate-[6deg] border-y border-white/10 py-8 bg-black/40 backdrop-blur-sm z-10">
                            <div className="flex overflow-hidden whitespace-nowrap">
                                <motion.div
                                    animate={{ x: [0, -1000] }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                    className="flex gap-20 text-7xl font-black font-inter-tight uppercase italic text-white/50"
                                >
                                    {[...Array(4)].map((_, i) => (
                                        <span key={i} className="flex gap-20">
                                            <span>FAITH AND INNOVATION</span>
                                            <span>WORLD OF IT</span>
                                            <span>ITS EDITION ONE</span>
                                        </span>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Diagonal 2 */}
                        <div className="absolute w-[150%] rotate-[-6deg] border-y border-its-red/50 py-8 bg-black/40 backdrop-blur-sm z-0">
                            <div className="flex overflow-hidden whitespace-nowrap">
                                <motion.div
                                    animate={{ x: [-1000, 0] }}
                                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                                    className="flex gap-20 text-7xl font-black font-inter-tight uppercase italic text-its-red/50"
                                >
                                    {[...Array(4)].map((_, i) => (
                                        <span key={i} className="flex gap-20">
                                            <span>CYBERNETIC APPAREL</span>
                                            <span>ULTRA PRECISION</span>
                                            <span>HCDC TECHNOLOGY</span>
                                        </span>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 1.5: BUTTON PINS SHOWCASE - NEW */}
                    <div className="pt-40 mb-80 border-t border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            {/* Pin Preview */}
                            <div className="lg:col-span-8 relative group flex flex-col items-center justify-center p-0 h-[600px] overflow-visible">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedPin.id}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        className="relative w-[400px] h-[400px]"
                                    >
                                        <Image
                                            src={selectedPin.img}
                                            alt={`ITS Button Pin - ${selectedPin.name}`}
                                            fill
                                            className="object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                <div className="mt-8 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-its-red animate-pulse" />
                                    <p className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase">Component.Accessory_Type.01</p>
                                </div>
                            </div>

                            {/* Pin Selection UI */}
                            <div className="lg:col-span-4 flex flex-col justify-center">
                                <div className="space-y-4 mb-20 text-start">
                                    <p className="text-[10px] font-black tracking-[0.5em] text-its-red uppercase mb-4">New.Arrival</p>
                                    <h2 className="text-7xl font-black font-inter-tight tracking-tighter uppercase leading-[0.8]">
                                        BUTTON <br />
                                        <span className="text-neutral-500">PINS</span>
                                    </h2>
                                </div>

                                {/* Pin variant switcher */}
                                <div className="space-y-6 mb-10">
                                    <p className="text-[10px] uppercase font-bold text-neutral-600 tracking-[0.4em] mb-4">PIN_VARIANT</p>
                                    <div className="flex gap-4">
                                        {PIN_OPTIONS.map((pin) => (
                                            <button
                                                key={pin.id}
                                                onClick={() => setSelectedPin(pin)}
                                                className={`
                                                    w-12 h-12 rounded-full border transition-all duration-500 p-1
                                                    ${selectedPin.id === pin.id ? 'border-its-red scale-110 shadow-[0_0_15px_rgba(220,38,38,0.3)]' : 'border-white/10 hover:border-white/40'}
                                                `}
                                            >
                                                <div
                                                    className="w-full h-full rounded-full"
                                                    style={{ backgroundColor: pin.hex }}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Specs info */}
                                <div className="space-y-6 mb-14">
                                    <p className="text-[10px] uppercase font-bold text-neutral-600 tracking-[0.4em] mb-4">SPECIFICATIONS</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-white/[0.03] border border-white/5 rounded-xl">
                                            <p className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest mb-1">Diameter</p>
                                            <p className="text-[10px] font-black text-neutral-200">1.25 INCH</p>
                                        </div>
                                        <div className="p-4 bg-white/[0.03] border border-white/5 rounded-xl">
                                            <p className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest mb-1">Finish</p>
                                            <p className="text-[10px] font-black text-neutral-200">METALLIC</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Purchase UI */}
                                <div className="space-y-10">
                                    <div className="flex justify-between items-end border-b border-white/5 pb-10">
                                        <div className="text-start">
                                            <p className="text-7xl font-black font-inter-tight tracking-tighter">₱25</p>
                                        </div>
                                        <div className="text-end">
                                            <p className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest mb-1">Unit Price</p>
                                            <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">In_Stock</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setIsOrderModalOpen(true)}
                                        className="w-full h-16 bg-white text-black font-questrial font-black uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all rounded-full flex items-center justify-center text-[10px] whitespace-nowrap px-6 group"
                                    >
                                        ORDER NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: INTERACTIVE DESIGN BLUEPRINT - CLEAN VERTICAL */}
                    <div className="pt-40 mb-80">
                        <div className="max-w-4xl text-start mb-40">
                            <h2 className="text-8xl md:text-[10rem] font-black font-inter-tight leading-[0.75] tracking-tighter uppercase mb-12 italic">
                                The <br />
                                <span className="text-neutral-500">DESIGN</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-32">
                            {/* Interaction Controls - SLEEK TOGGLE */}
                            <div className="flex flex-col md:flex-row items-center justify-start gap-12 border-y border-white/5 py-12">
                                <div className="space-y-4 text-start">
                                    <p className="font-inter text-[10px] uppercase tracking-[0.5em] text-neutral-600 font-bold">VIEWPORT_TOGGLE</p>
                                    <div className="flex items-center gap-8">
                                        <div className="relative flex p-1.5 bg-neutral-900 rounded-full w-[400px] h-20 border border-white/10 items-center shadow-2xl">
                                            <motion.div
                                                className="absolute h-16 bg-its-red rounded-full z-0 shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                                                initial={false}
                                                animate={{
                                                    width: "calc(50% - 6px)",
                                                    x: designView === "front" ? 0 : "100%"
                                                }}
                                                transition={{ type: "spring", stiffness: 350, damping: 35 }}
                                            />
                                            <button
                                                onClick={() => setDesignView("front")}
                                                className={`relative z-10 flex-1 h-full font-inter-tight font-black uppercase text-sm tracking-[0.2em] transition-all duration-500 ${designView === 'front' ? 'text-white' : 'text-neutral-600 hover:text-neutral-400'}`}
                                            >
                                                01_Front
                                            </button>
                                            <button
                                                onClick={() => setDesignView("back")}
                                                className={`relative z-10 flex-1 h-full font-inter-tight font-black uppercase text-sm tracking-[0.2em] transition-all duration-500 ${designView === 'back' ? 'text-white' : 'text-neutral-600 hover:text-neutral-400'}`}
                                            >
                                                02_Back
                                            </button>
                                        </div>

                                        <div className="hidden xl:flex flex-col">
                                            <span className="text-its-red text-[10px] font-black tracking-[0.3em] uppercase mb-1">Interactive_Mapping</span>
                                            <span className="text-neutral-500 text-[9px] font-medium leading-tight">CLICK ON THE HOTSPOTS <br />TO SCAN COMPONENT DATA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Area - NO BOX, DYNAMIC SCALE */}
                            <div className="relative w-full max-w-[100vw] -mx-[min(50vw-50%,0px)]">
                                <motion.div
                                    className="relative aspect-[16/9] w-full flex items-center justify-center overflow-visible"
                                    layout
                                >
                                    {/* Design Image */}
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={designView}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.05 }}
                                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                            className="relative w-full h-full flex items-center justify-center"
                                        >
                                            <Image
                                                src={designView === 'front' ? "/shirts/shirt designs/FRONT BLACK.RED.png" : "/shirts/shirt designs/BACK BLACK.RED.png"}
                                                alt="Design Blueprint"
                                                fill
                                                className="object-contain p-0 md:p-10 scale-125 md:scale-[1.8] drop-shadow-[0_0_80px_rgba(255,255,255,0.03)]"
                                                priority
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Hotspots */}
                                    <div className="absolute inset-0 scale-[1.25] md:scale-[1.8] pointer-events-none">
                                        <div className="absolute inset-0 pointer-events-auto">
                                            {HOTSPOTS.filter(h => h.side === designView).map(point => (
                                                <Hotspot
                                                    key={point.id}
                                                    point={point}
                                                    active={activeHotspot === point.id}
                                                    onClick={() => setActiveHotspot(activeHotspot === point.id ? null : point.id)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>

            <Footer />

            {/* MODALS */}
            <AnimatePresence>
                {isOrderModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOrderModalOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-neutral-950 border border-white/10 p-12 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-its-red to-transparent" />

                            <div className="space-y-8 text-center">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black tracking-[0.5em] text-its-red uppercase">protocol.initiation</p>
                                    <h2 className="text-4xl font-black font-inter-tight tracking-tighter uppercase italic">Face-to-Face Order</h2>
                                </div>

                                <div className="py-12 border-y border-white/5 space-y-6">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Target Location</p>
                                        <p className="text-2xl font-black text-white uppercase tracking-tight font-inter-tight">CH403: OPEN LAB</p>
                                    </div>
                                    <p className="text-xs text-neutral-400 font-questrial leading-relaxed max-w-xs mx-auto">
                                        Physical presence required for transaction confirmation and secure payment processing.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsOrderModalOpen(false)}
                                    className="w-full h-16 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-its-red hover:text-white transition-all rounded-full"
                                >
                                    okay
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}

                {isSizeModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSizeModalOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-neutral-950 border border-white/10 p-12"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-its-red/5 blur-[80px] rounded-full" />

                            <div className="space-y-10">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black tracking-[0.5em] text-its-red uppercase">material.specs</p>
                                        <h2 className="text-4xl font-black font-inter-tight tracking-tighter uppercase italic">Size Guide</h2>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Brand</p>
                                        <p className="text-lg font-black text-white">CROWN_COTTON</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/5">
                                    <div className="space-y-2">
                                        <p className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest">Fabric</p>
                                        <p className="text-xs font-black text-neutral-300">100% Premium Cotton</p>
                                    </div>
                                    <div className="space-y-2 text-center border-x border-white/5">
                                        <p className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest">Weight</p>
                                        <p className="text-xs font-black text-neutral-300">220 GSM</p>
                                    </div>
                                    <div className="space-y-2 text-right">
                                        <p className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest">Cut</p>
                                        <p className="text-xs font-black text-neutral-300">Standard Boxy</p>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-[11px]">
                                        <thead>
                                            <tr className="text-neutral-500 uppercase tracking-widest border-b border-white/5">
                                                <th className="py-4 font-black">Size</th>
                                                <th className="py-4 font-black">Width (in)</th>
                                                <th className="py-4 font-black">Length (in)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-neutral-300 font-bold">
                                            {[
                                                { s: "XS", w: "18", l: "26" },
                                                { s: "S", w: "19", l: "27" },
                                                { s: "M", w: "20", l: "28" },
                                                { s: "L", w: "21", l: "29" },
                                                { s: "XL", w: "22", l: "30" },
                                                { s: "2XL", w: "23", l: "31" },
                                                { s: "3XL", w: "24", l: "32" },
                                                { s: "4XL", w: "25", l: "33" },
                                                { s: "5XL", w: "26", l: "34" },
                                            ].map((row) => (
                                                <tr key={row.s} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors">
                                                    <td className="py-4 text-white font-black text-lg">{row.s}</td>
                                                    <td className="py-4 text-xl font-black text-white">{row.w}"</td>
                                                    <td className="py-4 text-xl font-black text-white">{row.l}"</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <button
                                    onClick={() => setIsSizeModalOpen(false)}
                                    className="w-full h-16 bg-neutral-900 border border-white/10 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition-all rounded-full"
                                >
                                    close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
