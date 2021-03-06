import axios from 'axios';

const apiAuthenticationService = axios.create({
  baseURL: '/api/auth'
});

export const signIn = async data => {
    try {
    const response = await apiAuthenticationService.post(`/login`, data);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const signUp = async data => {
  try {
    const response = await apiAuthenticationService.post(`/signup`, data);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await apiAuthenticationService.post(`/logout`);
  } catch (error) {
    throw error;
  }
};

export const editProfile = async data => {
  try {
    await apiAuthenticationService.patch(`/edit`, data);
  } catch (error) {
    throw error;
  }
};

export const loadUserInformation = async () => {
  try {
    const response = await apiAuthenticationService.get(`/user-information`);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const loadUserPicture = async data => {
  const datas = new FormData();
  datas.append('image', data);
  try {
    const response = await apiAuthenticationService.patch(`/upload`, datas);
    return response;
  } catch (error) {
    console.log('I am in the error service load picture', error);
    throw error;
  }
};
