import React, { ReactElement, useCallback, useMemo, useState } from "react";
import {
    Image,
    StyleSheet,
    TextInput,
    View,
    Text,
} from "react-native";

const FONT_INPUT_SIZE = 18;
const INPUT_HEIGHT = 45;
const COLOR_ERROR = "#ff0000";
const COLOR_DEFAULT = "white";

export const CustomInput = React.forwardRef(
    (
        {
            makeIconComponent,
            size = "large",
            displayType = "default",
            style,
            errorMsg,
            ...props
        },
        ref
    ) => {
        const isError = errorMsg != null;
        const themeColor = isError ? COLOR_ERROR : COLOR_DEFAULT;

        const [isFocussed, _setIsFocussed] = useState(false);
        const setIsFocussed = useCallback(() => {
            _setIsFocussed(true)
            props?.onFocus();
        }, []);
        const setIsNotFocussed = useCallback(() => {
            _setIsFocussed(false);
            props?.onBlur();
        }, []);

        const icon = useMemo(
            () => makeIconComponent?.(themeColor) ?? null,
            [makeIconComponent, themeColor]
        );

        const containerStyle = useMemo(
            () => [
                {
                    width: "100%",
                },
                style,
            ],
            [style]
        );

        return (
            <View style={containerStyle}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputIconContainer}>
                        {icon != null && <View style={styles.iconCenterContainer}>{icon}</View>}
                        <TextInput
                            ref={ref}
                            style={[styles.inputText, isError ? styles.inputTextError : undefined]}
                            placeholderTextColor={"grey"}
                            {...props}
                            onFocus={setIsFocussed}
                            onBlur={setIsNotFocussed}
                        />
                    </View>
                </View>
                {isError && isFocussed && (
                    <View style={styles.errorContainer}>
                        <View style={styles.errorIcon}>
                            <Image source={require("./assets/error_triangle.png")} />
                        </View>
                        <Text>
                            {errorMsg}
                        </Text>
                    </View>
                )}
            </View>
        );
    }
);

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    inputContainer: {
        height: INPUT_HEIGHT,
    },
    inputIconContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
    },
    inputText: {
        color: "black",
        fontSize: FONT_INPUT_SIZE,
        flex: 2.5,
        marginRight: 15,
        // corrections for android platform. This has to be set, otherwise
        // android will shift the text up when we set a bottom border e.g. on error.
        borderBottomWidth: 0,
    },
    inputTextError: {
        borderBottomWidth: 1,
        borderBottomColor: COLOR_ERROR,
    },
    iconCenterContainer: {
        flex: 1,
        alignItems: "center",
    },
    errorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 25,
    },
    errorIcon: {
        width: 24,
        height: 24,
    },
});
