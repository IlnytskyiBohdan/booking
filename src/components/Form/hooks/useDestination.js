import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import destinationAsyncAction from "../../../redux/destination/saga/asyncAction";
import selectorDestination from "../../../redux/destination/selectors";
import selectorHotels from "../../../redux/hotels/selectors";
import hotelsAsyncAction from "../../../redux/hotels/saga/asyncActions";
import hotels from "../../../redux/hotels/slice";

export const useDestination = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectorDestination.items);
  const loadingHotels = useSelector(selectorHotels.loading);
  const loadingDestination = useSelector(selectorDestination.loading);
  const searchParams = useSelector(selectorHotels.searchParams);
  const loading = loadingHotels || loadingDestination;

  useEffect(() => {
    dispatch(destinationAsyncAction.getDestinationAction());
  }, []);

  const initialValues = useMemo(() => {
    if (!searchParams) return undefined;
    return {
      ...searchParams,
      check_in: searchParams.check_in ? dayjs(searchParams.check_in) : undefined,
      check_out: searchParams.check_out ? dayjs(searchParams.check_out) : undefined,
    };
  }, [searchParams]);

  const handleSubmit = (values) => {
    dispatch(hotels.actions.setSearchParams({
      destination: values.destination,
      check_in: values.check_in ? values.check_in.toISOString() : null,
      check_out: values.check_out ? values.check_out.toISOString() : null,
      adult: values.adult,
      children: values.children,
    }));

    dispatch(hotelsAsyncAction.getHotelsAction({
      check_in: new Date(values.check_in).toString(),
      check_out: new Date(values.check_out).toString(),
      adult: values.adult,
      children: values.children,
      destination: values.destination,
    }));
  };

  return { items, loading, handleSubmit, initialValues };
};
