import React from 'react'
import {RadioButton as _RadioButton, Text} from 'react-native-paper'
import {ViewStyle, StyleProp, TextStyle} from 'react-native'
import {OptionType} from "../interfaces";

type Props = {
    value: string
    onChange: (value: string) => void
    options: OptionType[]
    optionLabel?: string
    optionValue?: string
    label?: string
    checkedColor?: string
    uncheckedColor?: string
    style?: ViewStyle
    labelStyle?: StyleProp<TextStyle>
    radioButtonLabelStyle?: StyleProp<TextStyle>
    disabled?: boolean
}

const RadioButton: React.FC<Props> = (
    {
        value,
        onChange,
        options = [],
        optionLabel = 'label',
        optionValue = 'value',
        label = undefined,
        labelStyle = undefined,
        radioButtonLabelStyle = undefined,
        checkedColor = undefined,
        uncheckedColor = undefined,
        disabled = undefined
    }
) => {
    return (
        <>
            {label && <Text style={labelStyle}>{label}</Text>}

            <_RadioButton.Group onValueChange={onChange} value={value}>
                {options.map((datum: OptionType) => (
                    <_RadioButton.Item
                        key={datum.id}
                        label={datum[optionLabel]}
                        value={datum[optionValue].toString()}
                        labelStyle={radioButtonLabelStyle}
                        color={checkedColor}
                        uncheckedColor={uncheckedColor}
                        disabled={disabled}
                    />
                ))}
            </_RadioButton.Group>
        </>
    )
}

export default RadioButton
