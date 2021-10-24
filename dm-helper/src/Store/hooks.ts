// hooks.js
import { createTypedHooks } from 'easy-peasy';
import { StoreModel } from './Models';

const { useStoreActions, useStoreState, useStoreDispatch, useStore } = createTypedHooks<StoreModel>();

export {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore
}