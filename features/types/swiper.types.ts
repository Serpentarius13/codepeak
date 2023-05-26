type TBreakpoint = {
  slidesPerView: number;
  spaceBetween: number;
};

export interface ISwiperOptions {
  breakpoints?: Record<number, TBreakpoint>;
}
