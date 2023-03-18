import { useDispatch } from "react-redux";
import type { AppDispatch } from "app/state";

export const useTypedDispatch: () => AppDispatch = useDispatch;
