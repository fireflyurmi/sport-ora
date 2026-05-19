import Image from "next/image";
import bannerImg from "@/assets/banner.jpg";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#080F1A] transition-colors duration-300">
      <div className="relative w-full max-w-7xl mx-auto min-h-120 sm:min-h-135 lg:min-h-145 flex items-center px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
          <Image
            src={bannerImg}
            alt="SportOra Sports Stadium Arena Facility Banner"
            fill
            priority
            placeholder="blur"
            className="object-cover object-right md:object-center transition-all duration-300 contrast-[1.02] dark:opacity-70"
          />

          <div className="absolute inset-0 bg-linear-to-r from-white via-white/10 to-transparent dark:hidden" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent dark:hidden" />

          <div className="hidden dark:block absolute inset-0 bg-linear-to-r from-[#080F1A] via-[#080F1A]/10 to-[#0B1528]/40 mix-blend-multiply" />
          <div className="hidden dark:block absolute inset-0 bg-linear-to-tr from-[#080F1A] via-transparent to-cyan-500/10 mix-blend-screen" />
          <div className="hidden dark:block absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#080F1A] to-transparent" />
        </div>

        <div className="relative z-10 max-w-xl text-slate-900 dark:text-white">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.15]">
            Book Your Sports <br />
            <span className="text-blue-600 dark:bg-linear-to-r dark:from-cyan-400 dark:to-blue-400 dark:bg-clip-text dark:text-transparent">
              Facility Easily!
            </span>
          </h1>

          <p className="font-body text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 max-w-md mt-4 leading-relaxed">
            Find & reserve the best sports venues near you instantly. Access
            top-tier football turfs, badminton courts, and swim centers around
            the clock.
          </p>

          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-md shadow-blue-600/20 dark:shadow-cyan-500/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              Explore Facilities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
