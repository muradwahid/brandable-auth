import { setToLocalStorage } from "../../utils/local-storage";

export const storeUserInfo = ({ accessToken }) => {
  setToLocalStorage('accessToken', accessToken);
};
