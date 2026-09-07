const Gallery = () => {
  return (
    <div className="flex-1 w-full max-w-container-max mx-auto px-gutter pt-section-gap-mobile md:pt-section-gap-desktop pb-32">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-deep-ocean mb-4">
          The Blue Community
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Dive into our vibrant underwater gallery and see what fellow explorers are saying. Share your moments using #KaiDiveCebu.
        </p>
      </div>

      <div className="masonry-grid">
        <div className="masonry-item rounded-xl overflow-hidden relative group cursor-pointer shadow-[0_10px_30px_rgba(0,174,239,0.08)]">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-je75APGZFwOkN1aAuaxTl0RNgVBYPtd26CMNMfu_pJbtgxscfunIN7cL31TyyyBPrWOzAfd45qvAqh61JfmpQLMdb_GIcG47vt1GGXjYP_XAiiyx4C71_OhBF31OGPLdVelW5wnTv699c0Eri1SWG1hbL8Rr6fpGZB3If0I1vO4EGL5ouQjmtEoMdq2tvPzZdTo15nIpacS8CVxGxOi6q-UspZdYSXZZmE5hO99U-Ssro80iTEq7" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" alt="Gallery item" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <div className="flex items-center gap-3 mb-2">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJWNyjwmWHFflThx7IGv8rorKO9pmZGIZjUHVOPOTUGS7MIi0noSY-Z-Fk8HcH6Tfy_GwdaWaQQ8pBmDDRzwGTIumyALB31MlUuWzRhanbSvxIijVsYOBuOspbNhG7s26njGqoeokJoviavExDZF2fZU0HVYJ32ap9N8N_3lB-9I8rtG9OsEjuEha7GIcijyyblu6fwpthIgZrDvBwChihI3tUjbsjZV0qXeW9qwyz4F34a9kif_gB" className="w-10 h-10 rounded-full border-2 border-white/50" alt="Avatar" />
              <span className="font-label-sm text-label-sm text-white">@ocean_explorer</span>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-1 text-white hover:text-primary-fixed transition-colors"><span className="material-symbols-outlined text-sm">favorite</span> 241</button>
              <button className="flex items-center gap-1 text-white hover:text-primary-fixed transition-colors"><span className="material-symbols-outlined text-sm">mode_comment</span> 18</button>
            </div>
          </div>
        </div>

        <div className="masonry-item glass-card p-8 rounded-xl border border-white/20 shadow-[0_10px_30px_rgba(0,174,239,0.08)]">
          <div className="flex items-center gap-1 text-[#FF7F50] mb-4">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface mb-6 italic">"Absolutely phenomenal experience. The gear was top-notch, the guides were incredibly knowledgeable, and the reefs... unreal. Felt like a luxury escape from start to finish."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-md text-headline-md font-bold">M</div>
            <div>
              <div className="font-label-sm text-label-sm text-on-surface">Mark D.</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant font-normal">Advanced Open Water Diver</div>
            </div>
          </div>
        </div>

        <div className="masonry-item rounded-xl overflow-hidden relative group cursor-pointer shadow-[0_10px_30px_rgba(0,174,239,0.08)]">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX8EIHY055yhOFjfETEv3oPmoP3e_rha8l0Okh8ANRIEJRQtNnbFP2Yu7x2Fren3-ZBJE8-E-rJfSWtRt97_zzalUEvsROWHThnQZTiC8ElEtaxjByyTSZ1heTCNNDvKPgnh_xidoU9lybu3hZwWMXsK4K23yGQ448uxbef7KrtfOmCmOox3zfgc3PLhVS2Hyx4Hra3J3giODl-sTtR3agx6mJ70u6LyHEyoNDTPKPaoC424MDfXSJ" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" alt="Gallery item" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <div className="flex items-center gap-3 mb-2">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEY2XywwUzCuBNus_tf4UfCKl_LGS5iVFxaumPdYr6HYf8oY-uDGLwFFfcv111-4rt_cyLtoz66Ph_R2hRpDAM2dPxIW0TMKKCWsrPT2HPylF9D1Ma24KZnwChcpGFl3os7f7HwNNkQEBBG0o7dNxwEBJmrTgZUHW4U1abMk0NsXJr6L81pgugYBuROinW4kFkv1C7CGTadLVxgjNVYNRDhA_F6M1_QwXaxF0xqvyJxrpDkUdvIuFr" className="w-10 h-10 rounded-full border-2 border-white/50" alt="Avatar" />
              <span className="font-label-sm text-label-sm text-white">@wanderlust_diver</span>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-1 text-white hover:text-primary-fixed transition-colors"><span className="material-symbols-outlined text-sm">favorite</span> 512</button>
            </div>
          </div>
        </div>

        <div className="masonry-item bg-primary text-on-primary rounded-xl p-8 shadow-[0_10px_30px_rgba(0,174,239,0.08)] flex flex-col items-center justify-center text-center">
          <span className="material-symbols-outlined text-5xl mb-4">photo_camera</span>
          <h3 className="font-headline-md text-headline-md mb-2">Share Your Journey</h3>
          <p className="font-body-md text-body-md text-primary-fixed mb-6">Tag @KaiDiveCebu to be featured in our community gallery.</p>
          <button className="bg-[#FF7F50] text-white px-6 py-3 rounded-lg font-label-sm text-label-sm hover:saturate-150 transition-all shadow-md active:scale-95">Upload Photo</button>
        </div>

        <div className="masonry-item rounded-xl overflow-hidden relative group cursor-pointer shadow-[0_10px_30px_rgba(0,174,239,0.08)]">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ1YVgGI1LDjAUkJfSnnSYx4OCpuVTx6OyF7gkjieELXU37aCxLCzCuHts90uT-zmbg0U5uspqnwDS4qDmLhyTX5T6mtJmC1-vzFfQbFfoKIAW5mLuecuzL41mxH0JLfmLHsSC_MgWjYDXUeEknaf73r22sQoxqRWz2pyme209BywfDkb1M16XyqRMsJ13N6PlRaS5QQnSFHnZnmcFratBAJ8Y6at6wTiN__0LwrT2WCJanYCgBk_E" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" alt="Gallery item" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <div className="flex items-center gap-3 mb-2">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuACDzRICRxfbVEQoG3hHyVHgBFc7A9Is8xlQjwOo8p-qijOaCBUtMc5hoDM8DoUJp7qqiFagYs4kHLtSdASiiWwo5YahfqZ6cKoX5Q1xGjpKdJ_afFcwkIgpO7d6-2iXeFWjOEPIdAqTVSMTIea3OG6_6eV8_B4Fw30xktpiLZWdXW_AjlIZdeY7E8AhEG7moc_dFsyB5iXk6h57iM7OYOzp9H12yInOPCksrfP0mm7NrF69pRFNOTO" className="w-10 h-10 rounded-full border-2 border-white/50" alt="Avatar" />
              <span className="font-label-sm text-label-sm text-white">@macro_magic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
