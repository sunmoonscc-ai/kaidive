import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <div className="max-w-container-max mx-auto px-4 md:px-gutter mt-8 mb-section-gap-mobile md:mb-section-gap-desktop pt-16">
      <section className="relative rounded-xl overflow-hidden mb-16 shadow-[0_10px_30px_rgba(0,174,239,0.08)] h-[60vh] min-h-[400px]">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4QF6-kuNbtBbUHDmObJTME9NfG6i3ygxSPfSrrYIu9MNi3BIMAI2vG1uzZ8OKYDu4YMKEwG7gY0GMld7MoJ2YffW4hi993EbOo3wfHHhjNU4lFwd-ZXj3SKXPwdLBLj7ER_tMFxUWh3HZlQtPUhltkaP0z0uLOm5KybO10O6oDGg4BqtL7yKUJAucb4FrZ2oiw-CaPA9-nAvNMdyOvZHDlo0JUR8iMoDfe0uYSjqHsDZsEQqWgkB5" className="absolute inset-0 w-full h-full object-cover" alt="Diving Programs" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 to-transparent flex flex-col justify-end p-8 md:p-16">
          <h1 className="font-display-lg-mobile md:font-display-lg text-white mb-4">Discover the Deep</h1>
          <p className="font-body-lg text-surface-mist max-w-2xl">From absolute beginners seeking their first breath underwater to seasoned divers looking for new adventures, our premium programs offer an unparalleled escape.</p>
        </div>
      </section>

      <section className="mb-section-gap-mobile md:mb-section-gap-desktop">
        <h2 className="font-headline-md text-deep-ocean mb-8 text-center md:text-left">PADI Certification Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-surface-mist backdrop-blur-md rounded-[1rem] overflow-hidden shadow-[0_10px_30px_rgba(0,174,239,0.08)] border border-white/5 flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1wX6Dwb_OvfxDk3eZvSYXB5IJwUWTTf_jPy4zhi4uOhIsgNfCxCN4-YBmCDVsg5nBzFzo1GRTOIIdVyE5wvKkJy1wBlWT9qVKPKbyKsBINmHnX3f-edD5m0DrQA7MwVa1QopkCh9vgt66B6frY2yOpmV8zaI7poJgWtYaP7-wVoMbVKutnpi05uqcjI0lz5VXFCY8fl_NvIcj1bFm3oAMiWX94zCR2nTro1UORnGsWxhKHhKWZUSx" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Open Water" />
              <div className="absolute top-4 right-4 bg-surface-mist backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <span className="font-label-sm text-deep-ocean">Beginner</span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col bg-surface-container-lowest">
              <h3 className="font-headline-md text-[24px] text-deep-ocean mb-2">Open Water Diver</h3>
              <p className="font-body-md text-on-surface-variant mb-6 flex-grow">Your journey begins here. Learn the fundamentals of scuba diving and earn your first certification to explore the world's oceans.</p>
              <div className="flex items-center gap-2 mb-6 text-on-surface-variant font-label-sm">
                <span className="material-symbols-outlined text-[20px] text-primary-container">schedule</span> 3-4 Days
                <span className="material-symbols-outlined text-[20px] text-primary-container ml-4">water_drop</span> Max 18m
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="font-label-sm text-outline">From</span>
                  <span className="font-headline-md text-[24px] text-primary">$450</span>
                </div>
                <button className="bg-[#00AEEF] hover:bg-primary text-white font-label-sm px-6 py-3 rounded-DEFAULT transition-colors shadow-sm">Learn More</button>
              </div>
            </div>
          </article>

          <article className="bg-surface-mist backdrop-blur-md rounded-[1rem] overflow-hidden shadow-[0_10px_30px_rgba(0,174,239,0.08)] border border-white/5 flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUX2gQ6zDQ7RnDmg00a-mTicymVtgltp_RXoN6x9WX_xQpVrSGm9bV_jPE4wa48ROYhXwwrnqwbfqJL8cEVAYMM03oLty9euO5yz1DqjkhzQXgs_b0CH8CtWLP18nkHUBwRLW16NUa5seURZ810Fu3MomQY9AqGMjn4cXWDgQiVLv4yjcKhiN8SvrPBUlIppv4sxDvjhEJjhRGxwRNDpHyVwOUD25FDJ9dqjGhDUAHmVpOQANWQI_Y" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Advanced Open Water" />
              <div className="absolute top-4 right-4 bg-surface-mist backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <span className="font-label-sm text-deep-ocean">Intermediate</span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col bg-surface-container-lowest">
              <h3 className="font-headline-md text-[24px] text-deep-ocean mb-2">Advanced Open Water</h3>
              <p className="font-body-md text-on-surface-variant mb-6 flex-grow">Enhance your skills with deep diving and underwater navigation. Unlock new depths and challenging dive sites.</p>
              <div className="flex items-center gap-2 mb-6 text-on-surface-variant font-label-sm">
                <span className="material-symbols-outlined text-[20px] text-primary-container">schedule</span> 2 Days
                <span className="material-symbols-outlined text-[20px] text-primary-container ml-4">water_drop</span> Max 30m
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="font-label-sm text-outline">From</span>
                  <span className="font-headline-md text-[24px] text-primary">$380</span>
                </div>
                <button className="bg-[#00AEEF] hover:bg-primary text-white font-label-sm px-6 py-3 rounded-DEFAULT transition-colors shadow-sm">Learn More</button>
              </div>
            </div>
          </article>

          <article className="bg-surface-mist backdrop-blur-md rounded-[1rem] overflow-hidden shadow-[0_10px_30px_rgba(0,174,239,0.08)] border border-white/5 flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSH7QNYApvYoDWvOnPkjMaoomCKRXGodF6tbyyh3Vb798fbvr7U-Sqih_m_DeptdgOrznr5Or_y8JUUv3X_6qX0faSbdUheR7kHvTxwWsfvD0pgYlMj4EWJhI3Zq-32haeH-Uh8gJ-h_vu0-LFdnBfbbfsG_HEyQq_Ac15FNm1TNu9zA2uINdkoTzoMbVfkmYIE5s06-PjtPR7-u0H5--yHilKg3QxAvM73eN2rMN-ZnS329Wn_1ta" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Rescue Diver" />
              <div className="absolute top-4 right-4 bg-surface-mist backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <span className="font-label-sm text-deep-ocean">Advanced</span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col bg-surface-container-lowest">
              <h3 className="font-headline-md text-[24px] text-deep-ocean mb-2">Rescue Diver</h3>
              <p className="font-body-md text-on-surface-variant mb-6 flex-grow">Learn to prevent and manage problems in the water. The most challenging, yet most rewarding course.</p>
              <div className="flex items-center gap-2 mb-6 text-on-surface-variant font-label-sm">
                <span className="material-symbols-outlined text-[20px] text-primary-container">schedule</span> 3 Days
                <span className="material-symbols-outlined text-[20px] text-primary-container ml-4">medical_services</span> EFR Req.
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="font-label-sm text-outline">From</span>
                  <span className="font-headline-md text-[24px] text-primary">$420</span>
                </div>
                <button className="bg-[#00AEEF] hover:bg-primary text-white font-label-sm px-6 py-3 rounded-DEFAULT transition-colors shadow-sm">Learn More</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section>
        <h2 className="font-headline-md text-deep-ocean mb-8 text-center md:text-left">Fun Diving Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[500px]">
          <div className="md:col-span-2 relative rounded-[1rem] overflow-hidden shadow-[0_10px_30px_rgba(0,174,239,0.08)] group min-h-[300px]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEOH0-gLcaJVrB2U6Iu-6ZUBEn1gb4re0LI6Hjs4MWJIKtmiwDJggp8200LDI2z561pgfIrMfpqnj-HJ0QfyE3AZ888GpPhRfEHZj08gxLdM3-xzjMQr9Ug-Smgukxtl-RjrQa9d_w8HWJKRWejnb7mcDnYMdGfiPgUieVWkQYj0sWg7NDOUPuuz6b_U-DCfjsIKn8ZX-mfFKpNuICVlaQNrTtN0dPpqV4OxPlYHpIy70MSOY04Tr7" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Sardine Run" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <div className="bg-surface-mist backdrop-blur-md p-6 rounded-[1rem] border border-white/20 w-full max-w-md">
                <h3 className="font-headline-md text-[24px] text-deep-ocean mb-2">Sardine Run Adventure</h3>
                <p className="font-body-md text-on-surface-variant mb-4">Experience the breathtaking Moalboal sardine run. A visual spectacle of millions of fish moving as one.</p>
                <div className="flex justify-between items-center">
                  <span className="font-headline-md text-[20px] text-primary">$120 / Day</span>
                  <Link to="/booking" className="bg-[#FF7F50] hover:bg-secondary text-white font-label-sm px-4 py-2 rounded-DEFAULT transition-colors shadow-sm">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[1rem] overflow-hidden shadow-[0_10px_30px_rgba(0,174,239,0.08)] group min-h-[250px] md:min-h-0">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuArK8-T8EtMtmUanHNGm5RJSEjUT2CUmy4gXchd4O6i5WLM9B0mFrDnB5L5AOxfwwBuKSZPUuK6BC7oO9OHHYnXTVuJF1UmmqTS6Sk510NND4Ibsu8ZKg_O9bN4b20PZ_OEDTMIkGN_VX6TExlf7AWomRjFY_5j6nsRHI96UK7Rs0i6NflQT0uQJ77xTQsFYvsWY7D2053wZ7UWEjkskZi6PFmYhk3fJYJ7HJUz-628kXaGIPaueGkA" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Macro Photography" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="font-headline-md text-[20px] text-white mb-1">Macro Photography Dive</h3>
              <p className="font-body-md text-surface-mist text-sm mb-4">Discover the hidden gems of the reef.</p>
              <button className="bg-surface-mist backdrop-blur-md border border-white/50 hover:bg-white text-deep-ocean font-label-sm px-4 py-2 rounded-DEFAULT transition-colors self-start">Details</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
