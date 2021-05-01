import { AuthActions } from './authActionInterfaces';
import { TrainerActionTypes } from './trainerActionTypes';
import { ClientActionTypes } from './clientActionTypes';

export type AppActions = AuthActions | TrainerActionTypes | ClientActionTypes;