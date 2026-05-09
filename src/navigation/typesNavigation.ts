import { StackScreenProps } from "@react-navigation/stack";

/**
 * Navigation parameter types for the app screens
 */
export type RootStackParamList = {
  List: undefined;              
  Detail: { id: number };      
  Form: { id?: number };       
};

/**
 * Generic screen props helper
 */
export type ScreenProps<
  T extends keyof RootStackParamList
> = StackScreenProps<RootStackParamList, T>;