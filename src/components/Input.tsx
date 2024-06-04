import React, {JSX} from 'react'
import {TextInput} from 'react-native-paper'
import {ViewStyle, TextStyle, StyleProp, Text} from 'react-native'
import {InputType} from '../interfaces'

type Props = {
    label: string
    value: string
    placeholder?: string
    onChangeText: (value: any) => void
    type: InputType
    bgColor?: string
    outlineColor?: string
    style?: ViewStyle
    contentStyle?: StyleProp<TextStyle>
    outlineStyle?: StyleProp<ViewStyle>
    onLeftIconPress?: () => void
    onRightIconPress?: () => void
    leftIcon?: string
    rightIcon?: string
    iconColor?: string
    iconSize?: number
    labelStyle?: StyleProp<TextStyle>
    rounded?: number
    height?: number
    mode?: 'flat' | 'outlined'
    disabled?: boolean
}

const Input: React.FC<Props> = (
    {
        label,
        value,
        type,
        onChangeText,
        placeholder = undefined,
        bgColor = undefined,
        outlineColor = undefined,
        style = undefined,
        contentStyle = undefined,
        outlineStyle = undefined,
        labelStyle = undefined,
        leftIcon = undefined,
        rightIcon = undefined,
        iconColor = undefined,
        iconSize = undefined,
        onRightIconPress = undefined,
        onLeftIconPress = undefined,
        rounded = undefined,
        height = undefined,
        mode = undefined,
        disabled = undefined
    }
) => {
    const renderInput = (): JSX.Element => {
        if (type === 'text') {
            return (
                <TextInput
                    label={mode !== 'outlined' ? label : undefined}
                    value={value as string}
                    onChangeText={(text: string) => onChangeText(text)}
                    placeholder={placeholder}
                    mode={mode}
                    style={[{backgroundColor: bgColor, height: height}, style]}
                    contentStyle={contentStyle}
                    outlineStyle={[{borderRadius: rounded}, outlineStyle]}
                    outlineColor={outlineColor}
                    left={leftIcon && <TextInput.Icon icon={leftIcon} color={iconColor} size={iconSize} onPress={onLeftIconPress} />}
                    right={rightIcon && <TextInput.Icon icon={rightIcon} color={iconColor} size={iconSize} onPress={onRightIconPress} />}
                    disabled={disabled}
                />
            )
        }

        if (type === 'number') {
            return (
                <TextInput
                    label={mode !== 'outlined' ? label : undefined}
                    value={value as string}
                    onChangeText={(text: string) => onChangeText(text)}
                    placeholder={placeholder}
                    mode={mode}
                    style={[{backgroundColor: bgColor, height: height}, style]}
                    contentStyle={contentStyle}
                    outlineStyle={[{borderRadius: rounded}, outlineStyle]}
                    outlineColor={outlineColor}
                    keyboardType="number-pad"
                    left={leftIcon && <TextInput.Icon icon={leftIcon} color={iconColor} size={iconSize} onPress={onLeftIconPress} />}
                    right={rightIcon && <TextInput.Icon icon={rightIcon} color={iconColor} size={iconSize} onPress={onRightIconPress} />}
                    disabled={disabled}
                />
            )
        }

        if (type === 'email') {
            return (
                <TextInput
                    label={mode !== 'outlined' ? label : undefined}
                    value={value as string}
                    onChangeText={(text: string) => onChangeText(text)}
                    placeholder={placeholder}
                    mode={mode}
                    style={[{backgroundColor: bgColor, height: height}, style]}
                    contentStyle={contentStyle}
                    outlineStyle={[{borderRadius: rounded}, outlineStyle]}
                    outlineColor={outlineColor}
                    keyboardType="email-address"
                    left={leftIcon && <TextInput.Icon icon={leftIcon} color={iconColor} size={iconSize} onPress={onLeftIconPress} />}
                    right={rightIcon && <TextInput.Icon icon={rightIcon} color={iconColor} size={iconSize} onPress={onRightIconPress} />}
                    disabled={disabled}
                />
            )
        }

        if (type === 'text-multiline') {
            return (
                <TextInput
                    label={mode !== 'outlined' ? label : undefined}
                    value={value as string}
                    onChangeText={(text: string) => onChangeText(text)}
                    placeholder={placeholder}
                    mode={mode}
                    style={[{backgroundColor: bgColor, height: height}, style]}
                    contentStyle={contentStyle}
                    outlineStyle={[{borderRadius: rounded}, outlineStyle]}
                    outlineColor={outlineColor}
                    multiline
                    disabled={disabled}
                />
            )
        }

        return (
            <TextInput
                value={value as string}
                onChangeText={(text: string) => onChangeText(text)}
                placeholder={placeholder}
                mode={mode}
                style={[{backgroundColor: bgColor, height: height}, style]}
                contentStyle={contentStyle}
                outlineStyle={[{borderRadius: rounded}, outlineStyle]}
                outlineColor={outlineColor}
                secureTextEntry={true}
                left={leftIcon && <TextInput.Icon icon={leftIcon} color={iconColor} size={iconSize} onPress={onLeftIconPress} />}
                right={rightIcon && <TextInput.Icon icon={rightIcon} color={iconColor} size={iconSize} onPress={onRightIconPress} />}
                disabled={disabled}
            />
        )
    }

    return (
        <>
            {(label && mode === 'outlined') && <Text style={labelStyle}>{label}</Text>}
            {renderInput()}
        </>
    )
}

export default Input
