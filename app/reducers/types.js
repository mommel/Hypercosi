import type {
  Dispatch as ReduxDispatch,
  Store as ReduxStore,
} from 'redux'

export type Action = {
  +type: string,
}

export type GetState = () => RootState

export type Dispatch = ReduxDispatch<Action>

export type Store = ReduxStore<GetState, Action>
