import { useState, useEffect } from "react";
import Button from "../components/elements/button/button";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = ["Mantra", "Dunia", "Perjanjian"];

const FEATURES = [
  {
    rune: "᛭",
    title: "Perjanjian Abadi",
    desc: "Daftarkan jiwamu dan dapatkan akses ke seluruh alam kegelapan tanpa batas waktu.",
  },
  {
    rune: "ᚷ",
    title: "Mantra Pelindung",
    desc: "Keamanan berlapis mantra kuno menjaga setiap rahasiamu dari mata dunia luar.",
  },
  {
    rune: "ᛟ",
    title: "Lingkaran Setan",
    desc: "Terhubung dengan para penyihir dari seluruh penjuru dunia dalam satu lingkaran.",
  },
];

const RUNES = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ"];

export default function HomePage() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#08060f] text-white overflow-x-hidden"
      style={{ fontFamily: "'Crimson Pro', serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-ring {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.03); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }
        .animate-fadeUp { animation: fadeUp 0.8s ease forwards; }
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .shimmer { animation: shimmer 2s ease-in-out infinite; }
        .cinzel { font-family: 'Cinzel', serif; }
      `}</style>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${
          scrolled
            ? "bg-[#08060f]/90 backdrop-blur-md border-b border-purple-900/30"
            : "border-b border-purple-900/20"
        }`}
      >
        <div className="cinzel font-bold text-lg text-purple-400 tracking-widest">
          ✦ ARCANUM
        </div>

        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-white/35 hover:text-purple-400 transition-colors duration-200 tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => alert("Navigate to /login")}
            className="px-5 py-2 border border-purple-500/30 rounded-md text-sm text-purple-300/80 hover:border-purple-400 hover:text-purple-300 hover:bg-purple-900/10 transition-all duration-200 tracking-wide"
          >
            Masuk
          </button>
          <button
            onClick={() => alert("Navigate to /register")}
            className="px-5 py-2 bg-purple-500 hover:bg-purple-600 rounded-md text-sm text-[#08060f] font-semibold transition-all duration-200 tracking-wide active:scale-95"
          >
            Daftar
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
        {/* Left */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-16">
          <div
            className={`cinzel text-xs tracking-[4px] text-purple-400/60 mb-6 animate-fadeUp ${
              visible ? "" : "opacity-0"
            }`}
          >
            ✦ &nbsp; PORTAL KEGELAPAN &nbsp; ✦
          </div>

          <h1
            className={`cinzel font-bold text-4xl md:text-5xl leading-[1.1] text-purple-50 tracking-tight mb-5 animate-fadeUp delay-100 ${
              visible ? "" : "opacity-0"
            }`}
          >
            Masuki dunia
            <br />
            <span className="text-purple-400">sang penyihir</span>
            <br />
            abadi
          </h1>

          <p
            className={`text-base text-white/40 leading-relaxed mb-10 italic font-light max-w-sm animate-fadeUp delay-200 ${
              visible ? "" : "opacity-0"
            }`}
          >
            Di mana bayangan menjadi kekuatan, dan kegelapan adalah rumah.
            Bergabunglah dalam perjanjian abadi bersama para penguasa malam.
          </p>

          <div
            className={`flex gap-4 flex-wrap mb-8 animate-fadeUp delay-300 ${
              visible ? "" : "opacity-0"
            }`}
          >
          
            <Button callback={() => navigate("/login",{replace:false})} color={"gray"} text={"white"}>MASUK</Button>
            <Button callback={() => navigate("/register",{replace:false})} color={"purple"} text={"black"}>BUAT AKUN</Button>
          </div>

          {/* Runes */}
          <div
            className={`flex gap-3 animate-fadeUp delay-400 ${
              visible ? "" : "opacity-0"
            }`}
          >
            {RUNES.map((r, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border border-purple-500/25 flex items-center justify-center text-purple-400/50 text-sm hover:border-purple-400/60 hover:text-purple-400 transition-all duration-200 cursor-default shimmer"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {r}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Character slot */}
        <div className="relative flex items-end justify-center bg-[#0d0918] border-l border-purple-900/20 overflow-hidden min-h-[400px]">
          {/* Orb rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-72 h-72 rounded-full border border-purple-500/05 animate-pulse-ring" />
            <div
              className="absolute w-52 h-52 rounded-full border border-purple-500/10 animate-pulse-ring"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute w-36 h-36 rounded-full bg-purple-700/10 border border-purple-500/20 animate-pulse-ring"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Particle dots */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-purple-400/40 shimmer"
              style={{
                top: `${15 + Math.sin(i * 45 * (Math.PI / 180)) * 35 + 35}%`,
                left: `${50 + Math.cos(i * 45 * (Math.PI / 180)) * 35}%`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}

          {/* Character image slot */}
          <div className="relative z-10 animate-float w-full flex justify-center">
            {/* 
              GANTI src di bawah dengan path gambar anime penyihir pilihanmu.
              Contoh: src="/assets/witch.png" atau src="https://link-gambar.com/witch.png"
              Ukuran ideal: portrait, tinggi ~450px, background transparan (PNG)
            */}
            <div className="w-56 h-80 flex flex-col items-center justify-center border border-dashed border-purple-500/20 rounded-xl mx-auto mb-8">
              <img src="/img/img.png" className="cinzel text-xs text-purple-400/40 tracking-widest text-center px-4 leading-relaxed">
               
              </img>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d0918] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Quote bar */}
      <div className="border-y border-purple-900/20 py-5 text-center">
        <p className="text-sm text-purple-400/50 italic tracking-widest">
          "Kegelapan bukan akhir — ia adalah awal dari kekuatan sejati"
        </p>
      </div>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-purple-900/15">
        {FEATURES.map((f, i) => (
          <div
            key={i}
            className="px-10 py-9 hover:bg-purple-950/20 transition-colors duration-300"
          >
            <div className="text-2xl text-purple-400 mb-4">{f.rune}</div>
            <div className="cinzel text-sm font-semibold text-purple-100 mb-3 tracking-wide">
              {f.title}
            </div>
            <div className="text-sm text-white/35 leading-relaxed font-light italic">
              {f.desc}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row items-center justify-between px-8 py-5 border-t border-purple-900/15 gap-3">
        <div className="text-xs text-white/20 italic">
          ✦ Arcanum — Sejak zaman kegelapan pertama ✦
        </div>
        <div className="flex gap-6">
          {["Perjanjian", "Privasi", "Ritual"].map((link) => (
            <a
              key={link}
              href="#"
              className="cinzel text-xs text-purple-400/30 hover:text-purple-400 transition-colors tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}