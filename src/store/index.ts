import { createStore } from "vuex";

interface Store_StateI {
  show_images: boolean;
  form_data: {
    width: string;
    height: string;
    background: string;
    border_radius: string;
  };
}

export default createStore({
  state: {
    show_images: true,
    form_data: {
      width: "50px",
      height: "50px",
      background: "blue",
      border_radius: "10px",
    },
  },
  mutations: {
    toggle_images: (state: Store_StateI) => {
      state.show_images = !state.show_images;
    },
  },
});
