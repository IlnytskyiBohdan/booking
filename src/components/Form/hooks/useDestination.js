import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import destinationAsyncAction from "../../../redux/destination/saga/asyncAction";
import selectorDestination from "../../../redux/destination/selectors";
import selectorHotels from "../../../redux/hotels/selectors";
import hotelsAsyncAction from "../../../redux/hotels/saga/asyncActions";

export const useDestination = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectorDestination.items);
  const loadingHotels = useSelector(selectorHotels.loading)
  const loadingDestination = useSelector(selectorDestination.loading);
  const loading = loadingHotels || loadingDestination

  useEffect(() => {
    dispatch(destinationAsyncAction.getDestinationAction());
  }, []);

  const handleSubmit = (values) => {
    const payload = {
      check_in: new Date(values.check_in).toString(),
      check_out: new Date(values.check_out).toString(),
      adult: values.adult,
      children: values.children,
      destination: values.destination,
    };

    dispatch(hotelsAsyncAction.getHotelsAction(payload));
  };

  return {
    items,
    loading,
    handleSubmit,
  };
}
