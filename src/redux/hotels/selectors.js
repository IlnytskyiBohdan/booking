const selector = {
    items: state => state.hotels.items,
    loading: state => state.hotels.loading,
    error: state => state.hotels.error,
    searchParams: state => state.hotels.searchParams,
}

export default selector;
