import { createContext } from 'react';
import { IsAuthContext } from '../types/context';

export const AuthContext = createContext<IsAuthContext | null>(null);
