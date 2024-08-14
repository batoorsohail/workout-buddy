import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workout_dispatch } = useWorkoutsContext();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem('user');

    // dispatch logout action
    dispatch({type: 'LOGOUT'});
    workout_dispatch({type: 'SET_WORKOUTS', payload: null});
  }

  return { logout };
}