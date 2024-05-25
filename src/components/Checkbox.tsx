import React from 'react'
import {Checkbox as _Checkbox} from 'react-native-paper'
import {ViewStyle, StyleProp, TextStyle} from 'react-native'

type Props = {
    label: string
    checked: boolean
    setChecked: (value: boolean) => void
    checkedColor?: string
    uncheckedColor?: string
    style?: ViewStyle
    labelStyle?: StyleProp<TextStyle>
    disabled?: boolean
    mode?: 'android' | 'ios'
}

const Checkbox: React.FC<Props> = (
    {
        label,
        checked,
        setChecked,
        style = undefined,
        labelStyle = undefined,
        checkedColor = undefined,
        uncheckedColor = undefined,
        disabled = undefined,
        mode = undefined
    }
) => {
    return (
        <_Checkbox.Item
            label={label}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
            color={checkedColor}
            uncheckedColor={uncheckedColor}
            disabled={disabled}
            labelStyle={labelStyle}
            style={style}
            mode={mode}
        />
    )
}

export default Checkbox
