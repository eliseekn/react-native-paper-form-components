import React from 'react'
import {Icon, Button as _Button} from 'react-native-paper'
import {ViewStyle, StyleProp, TextStyle} from 'react-native'
import {ButtonMode} from "react-native-paper/lib/typescript/components/Button/utils";

type Props = {
    label: string
    onPress: () => void
    icon?: string
    style?: ViewStyle
    labelStyle?: StyleProp<TextStyle>
    bgColor: string
    height?: number
    mode?: ButtonMode
    iconColor?: string
    iconSize?: number
    iconPosition?: 'left' | 'right'
    rounded?: number
    uppercase?: boolean
    disabled?: boolean
}

const Button: React.FC<Props> = (
    {
        label,
        onPress,
        bgColor,
        icon = undefined,
        iconColor = undefined,
        iconSize = undefined,
        style = undefined,
        labelStyle = undefined,
        height = undefined,
        mode = undefined,
        rounded = undefined,
        iconPosition = undefined,
        uppercase = undefined,
        disabled = undefined
    }
) => {
    return (
        <_Button
            mode={mode}
            compact
            style={[{backgroundColor: bgColor, borderRadius: rounded}, style]}
            contentStyle={{height: height, flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse'}}
            labelStyle={labelStyle}
            onPress={onPress}
            uppercase={uppercase}
            disabled={disabled}
            icon={() => icon && <Icon source={icon} size={iconSize!} color={iconColor} />}>
            {label}
        </_Button>
    )
}

export default Button
