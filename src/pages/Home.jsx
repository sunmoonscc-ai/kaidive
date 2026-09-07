import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pb-32 md:pb-0 pt-0 md:pt-16">
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary-fixed">
          <div 
            className="bg-cover bg-center w-full h-full opacity-80 mix-blend-overlay"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8HLQDRMAqMipan5jVUC7ZbXJCeWJ3G96a3_sgfk3kRWU4HBvA9hZJlNkuDaP17kf1T23ge8iNZth9e0P5AQEdBP2vQmjmKoxt0xcoPdhIlSMqxSx0d7vdGwX2wlQivgkcbQ31YQ9n0ErYCpVC76p7pMgSs52-urEWDuFV1tNgpRDh7KofQ_oKGV8jB-FTiecPkkg2GvueLrvCLB6f2ySYCJU6tzj2jApReGR2qzNaFwwzq3gQyy-h')" }}
          ></div>
        </div>
        <div className="relative z-10 text-center px-gutter max-w-container-max mx-auto flex flex-col items-center">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary drop-shadow-lg mb-6">Dive into the Blue</h2>
          <p className="font-body-lg text-body-lg text-on-primary max-w-2xl mx-auto mb-10 drop-shadow-md">Experience the ultimate underwater adventure in Cebu's pristine waters. Professional guides, luxury service, and unforgettable memories.</p>
          <Link to="/programs" className="bg-secondary text-on-primary font-body-lg text-body-lg px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(0,174,239,0.2)] hover:bg-[#ff8f60] transition-colors active:scale-95 font-semibold">
            Explore Packages
          </Link>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-gutter py-section-gap-mobile md:py-section-gap-desktop">
        <div className="text-center mb-16">
          <h3 className="font-headline-md text-headline-md text-deep-ocean mb-4">Discover Our Courses</h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">From your first breath underwater to exploring deep reefs, we have the perfect program for you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden group shadow-[0_10px_30px_rgba(0,174,239,0.08)] bg-surface-container-lowest">
            <div className="h-64 relative overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH7myESXSAu42u8rF0SULBoHh4w7YFvWqMi8klSyAdWbSkAK8vte-RBEhh4UWcD8g_5efNFVK8hvpuTaEtl2jGZjt9pLrZnbvHyCaGc8mirCv_r2EB4B_vXYuSg5VDBTObHBI0VYAzWg5UZ_Am4XJGGnLXIfVVsNaJ4qJqbPgXdKi8-v2qAYWF-o5AQwV-jWbgKaWQkadQmCvKRzek6m-BTfpWdYfHLH2RgdxIfMAV2Qjyxhl_XVBu" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Fun Diving" />
            </div>
            <div className="p-8 relative">
              <div className="absolute -top-10 right-8 bg-surface-mist backdrop-blur-md p-4 rounded-full shadow-lg border border-white/50">
                <span className="material-symbols-outlined text-primary text-3xl">scuba_diving</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-deep-ocean mb-2 text-2xl">Fun Diving</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">For certified divers looking to explore the best dive sites in Cebu. Guided tours with experienced local divemasters.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-primary-fixed/30 text-primary-container font-label-sm text-label-sm rounded-full">Certified Divers</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">Boat Dives</span>
              </div>
              <Link to="/programs" className="inline-flex items-center text-primary font-body-md text-body-md font-semibold hover:text-primary-container transition-colors">
                View Itineraries <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden group shadow-[0_10px_30px_rgba(0,174,239,0.08)] bg-surface-container-lowest">
            <div className="h-64 relative overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYSASlRfZERi4L8NZr_SqfCngR6GLjAZOEneQZ85SDicP42EciEeKYGVfCsTTkQYk16urMc73l0A3fLRRtz7Tn_trA1BwboqIJPEK1EITyMaSkAg5-IjkF07esuA6_mjctwEjkbEhFKd6NTH8QiGyWbdOGXCytcx_xijAqlENKUeesCx0Z7xyF4kLpBikGpK4LgpjZblSeUAwzHCUGRR0DMWFfz_a_qF9eEgLqjsYjIRekKh7PbxsV" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Open Water Course" />
            </div>
            <div className="p-8 relative">
              <div className="absolute -top-10 right-8 bg-surface-mist backdrop-blur-md p-4 rounded-full shadow-lg border border-white/50">
                <span className="material-symbols-outlined text-primary text-3xl">school</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-deep-ocean mb-2 text-2xl">Open Water Course</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Start your diving journey here. Get certified with our comprehensive PADI Open Water training program.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-secondary-container/20 text-secondary font-label-sm text-label-sm rounded-full">Beginners</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">PADI Certification</span>
              </div>
              <Link to="/programs" className="inline-flex items-center text-primary font-body-md text-body-md font-semibold hover:text-primary-container transition-colors">
                Learn More <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Link to="/booking" className="fixed bottom-24 md:bottom-8 right-4 md:right-8 bg-secondary text-on-primary rounded-2xl shadow-[0_10px_30px_rgba(0,174,239,0.2)] hover:bg-[#ff8f60] transition-transform active:scale-90 z-40 flex items-center gap-2 px-6 py-4">
        <span className="material-symbols-outlined">calendar_month</span>
        <span className="font-body-md text-body-md font-semibold">Book Now</span>
      </Link>
    </div>
  );
};

export default Home;
