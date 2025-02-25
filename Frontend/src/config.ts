const config = {
  endpoints: {
    item: {
      api: `${import.meta.env.VITE_BASE_URL}/${
        import.meta.env.VITE_ITEM_SERVICE
      }`,
    },
    user: {
      api: `${import.meta.env.VITE_BASE_URL}/${
        import.meta.env.VITE_USER_SERVICE
      }`,
    },
  },
};

export default config;
