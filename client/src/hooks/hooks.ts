import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootStore, AppDispatch } from "../store/store";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
