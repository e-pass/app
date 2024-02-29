import { type FC } from "react";
import { type FlexAlignType, View, type ViewProps } from "react-native";

type Wrap = "wrap" | "nowrap" | "wrap-reverse" | undefined;
type Justify =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;

interface FlexProps extends ViewProps {
    vertical?: boolean;
    wrap?: Wrap;
    justify?: Justify;
    align?: FlexAlignType | undefined;
    flex?: number | undefined;
    gap?: number | undefined;
}

const Flex: FC<FlexProps> = (
    {
        children,
        vertical = false,
        wrap = "nowrap",
        justify,
        align,
        flex,
        gap = 0,
        style,
        ...props
    }) => {
    return (
        <View
            style={{
                ...style as Record<any, any>,
                ...{
                    display: "flex",
                    flexDirection: vertical ? "column" : "row",
                    flexWrap: wrap,
                    justifyContent: justify,
                    alignItems: align,
                    flex,
                    gap,
                },
            }}
            {...props}
        >
            {children}
        </View>
    );
};

export default Flex;