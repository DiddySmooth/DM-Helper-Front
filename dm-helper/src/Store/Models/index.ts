import { action, Action } from "easy-peasy";

export interface StoreModel {
    name: string;
    id: string;
    setName: Action<this, string>;
    setId: Action<this, string>;
}

const model: StoreModel = {
    name: "",
    id: "",
    setName: action((state, payload) => {
        state.name = payload;
    }),
    setId: action((state, payload) => {
        state.id = payload;
    }),
}
export default model;