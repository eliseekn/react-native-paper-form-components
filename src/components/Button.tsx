import React from 'react'
import {Icon, Button as _Button} from 'react-native-paper'
import {ViewStyle, StyleProp, TextStyle} from 'react-native'
import {ButtonMode} from "react-native-paper/lib/typescript/components/Button/utils";

type Props = {
    label: string | React.ReactNode
    onPress: () => void
    icon?: string
    style?: ViewStyle
    labelStyle?: StyleProp<TextStyle>
    bgColor: string
    labelColor: string
    height?: number
    mode?: ButtonMode
    iconColor?: string
    iconSize?: number
    iconPosition?: 'left' | 'right'
    rounded?: number
    uppercase?: boolean
    disabled?: boolean
    compact?: boolean
}

const Button: React.FC<Props> = (
    {
        label,
        onPress,
        bgColor,
        labelColor,
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
        disabled = undefined,
        compact = undefined
    }
) => {
    return (
        <_Button
            mode={mode}
            style={[{backgroundColor: bgColor, borderRadius: rounded}, style]}
            contentStyle={{height: height, flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse'}}
            labelStyle={[{color: labelColor}, labelStyle]}
            onPress={onPress}
            uppercase={uppercase}
            disabled={disabled}
            compact={compact}
            icon={() => icon && <Icon source={icon} size={iconSize!} color={iconColor} />}>
            {label}
        </_Button>
    )
}

export default Button
