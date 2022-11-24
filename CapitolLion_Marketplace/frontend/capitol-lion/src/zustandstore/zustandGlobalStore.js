import create from  'zustand';
import { persist } from 'zustand/middleware'

export const dp = <img src="/blank.png" alt='Profile' />
export const banner = <img src="/banner.png" alt='Banner' />

export const useCapitolLionZustandGlobalAppStore = create(
  persist(
    (set, get) => ({
      profilepic: dp,
      banner: banner,
      handleProfilePicChange: (e) => set(state => ({ count: state.URL.createObjectURL(e.target.files[0])})),
      handleBannerPicChange: (e) => set(state => ({ count: state.URL.createObjectURL(e.target.files[0])})),
    }),
    {
      name: 'profile',
      getCount: () => localStorage,
    }
  )
);