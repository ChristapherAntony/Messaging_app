import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfileState {
  userName: string;
  userEmail: string;
  userPhoto: string;
  userPhone: string;
}

const initialState: UserProfileState = {
  userName: '',
  userEmail: '',
  userPhoto: '',
  userPhone: '',
};

const userprofileSlice = createSlice({
  name: 'userprofile',
  initialState,
  reducers: {
    changeUserProfile: (state, action: PayloadAction<Partial<UserProfileState>>) => {
      return { ...state, ...action.payload };
    },
    resetUserProfile: (state) => {
      return { ...initialState };
    },
  },
});

export const { changeUserProfile, resetUserProfile } = userprofileSlice.actions;
export default userprofileSlice.reducer;
