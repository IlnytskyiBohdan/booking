import { useDispatch, useSelector } from "react-redux"
import { push } from 'redux-first-history';
import selector from "../../../redux/hotels/selectors";
import { routes } from '../../../constants/routes';
import { useEffect } from "react";

export const useHotels = () => {
    const dispatch = useDispatch();
    const items = useSelector(selector.items);
    const loading = useSelector(selector.loading);

    useEffect(() => {
        if(items.length === 0) dispatch(push(routes.main.path))
    }, []);

    return { items, loading }
}