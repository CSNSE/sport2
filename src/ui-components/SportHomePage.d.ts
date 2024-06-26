/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SportHomePageOverridesProps = {
    SportHomePage?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    "Edit Profile42321011"?: PrimitiveOverrideProps<FlexProps>;
    "CSN Sports"?: PrimitiveOverrideProps<TextProps>;
    Divider42321013?: PrimitiveOverrideProps<DividerProps>;
    Button42321014?: PrimitiveOverrideProps<ButtonProps>;
    Button42321015?: PrimitiveOverrideProps<ButtonProps>;
    Divider42321021?: PrimitiveOverrideProps<DividerProps>;
    "Edit Profile42321052"?: PrimitiveOverrideProps<FlexProps>;
    Information?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SportHomePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SportHomePageOverridesProps | undefined | null;
}>;
export default function SportHomePage(props: SportHomePageProps): React.ReactElement;
