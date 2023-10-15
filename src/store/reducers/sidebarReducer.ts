import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean
}

const initialState: SidebarState = {
  isOpen: false,
};

const toggleSidebarState = (state: SidebarState): void => {
  state.isOpen = !state.isOpen;
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      toggleSidebarState(state)
    }
  }
})
export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;