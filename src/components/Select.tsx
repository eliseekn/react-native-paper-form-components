import React, {useEffect, useState} from 'react'
import {Dialog, Portal, RadioButton, Searchbar, Text} from 'react-native-paper'
import {ScrollView, StyleProp, TextStyle, View, ViewStyle} from 'react-native'
import {ButtonMode} from "react-native-paper/lib/typescript/components/Button/utils"
import Button from "./Button"
import {OptionType} from "../interfaces"
import Checkbox from "./Checkbox"

type Props = {
    value: string | string[]
    onChange: (value: string | string[]) => void
    options: OptionType[]
    buttonBgColor: string
    label?: string
    optionLabel?: string
    optionValue?: string
    searchPlaceholder?: string
    modalBgColor?: string
    buttonLabel?: string
    placeholder?: string
    labelStyle?: StyleProp<TextStyle>
    isSearchable?: boolean
    noResultFoundText?: string
    searchBarStyle?: StyleProp<TextStyle>
    searchBarInputStyle?: StyleProp<TextStyle>
    searchResultLabelStyle?: StyleProp<TextStyle>
    modalStyle?: StyleProp<ViewStyle>
    modalDismissable?: boolean
    buttonIcon?: string
    buttonStyle?: ViewStyle
    buttonLabelStyle?: StyleProp<TextStyle>
    buttonHeight?: number
    buttonMode?: ButtonMode
    buttonIconColor?: string
    buttonIconSize?: number
    buttonIconPosition?: 'left' | 'right'
    buttonRounded?: number
    isMultiselect?: boolean
    checkedColor?: string
    uncheckedColor?: string
    disabled?: boolean
}

const Select: React.FC<Props> = (
    {
        value,
        onChange,
        options = [],
        buttonBgColor,
        optionLabel = 'label',
        optionValue = 'value',
        placeholder = 'Select option',
        searchPlaceholder = 'Enter search query',
        noResultFoundText = 'No result found',
        modalBgColor = 'white',
        isSearchable = false,
        modalDismissable = false,
        isMultiselect = false,
        label = undefined,
        searchBarStyle = undefined,
        searchBarInputStyle = undefined,
        searchResultLabelStyle = undefined,
        modalStyle = undefined,
        labelStyle = undefined,
        buttonIcon = undefined,
        buttonIconColor = undefined,
        buttonIconSize = undefined,
        buttonStyle = undefined,
        buttonLabelStyle = undefined,
        buttonHeight = undefined,
        buttonMode = undefined,
        buttonRounded = undefined,
        buttonIconPosition = undefined,
        checkedColor = undefined,
        uncheckedColor = undefined,
        disabled = undefined
    }
) => {
    const [show, setShow] = useState<boolean>(false)
    const [data, setData] = useState<OptionType[]>(options)
    const [searchQuery, setSearchQuery] = useState<string>('')

    const selectedLabel = (): string => {
        if (typeof value === 'string') {
            const option: OptionType | undefined = options.find((datum: OptionType) => datum[optionValue].toString() === value)
            return option ? option[optionLabel] : ''
        } else {
            const selectedOptions: OptionType[] = options.filter((datum: OptionType) => value.includes(datum[optionValue].toString()))
            return selectedOptions.map((option: OptionType) => option[optionLabel]).join(', ')
        }
    }

    const handleSearch = (query: string) => {
        setSearchQuery(query)

        if (query.trim() === '') {
            setData(options)
        } else {
            const filteredOptions = options.filter((option: OptionType) => option[optionLabel].toLowerCase().includes(query.toLowerCase()))
            setData(filteredOptions)
        }
    }

    const handleCheckboxChange = (id: string) => {
        const isSelected: boolean = value.includes(id)
        const values: string[] = value as string[]
        const updatedIds: string[] = isSelected ? values.filter(selectedId => selectedId !== id) : [...value, id]
        onChange(updatedIds)
    }

    return (
        <>
            {label && <Text style={labelStyle}>{label}</Text>}

            <Button
                label={value === '' || value.length === 0 ? placeholder : selectedLabel()}
                onPress={() => setShow(!show)}
                icon={buttonIcon}
                style={buttonStyle}
                labelStyle={buttonLabelStyle}
                bgColor={buttonBgColor}
                height={buttonHeight}
                mode={buttonMode}
                iconColor={buttonIconColor}
                iconSize={buttonIconSize}
                iconPosition={buttonIconPosition}
                rounded={buttonRounded}
                disabled={disabled}
            />

            <Portal>
                <Dialog visible={show} onDismiss={() => setShow(false)} style={{backgroundColor: modalBgColor}} dismissable={modalDismissable}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Dialog.Content style={modalStyle}>
                            {isSearchable && <Searchbar
                                value={searchQuery}
                                onChangeText={handleSearch}
                                placeholder={searchPlaceholder}
                                inputStyle={searchBarInputStyle}
                                style={searchBarStyle}
                                autoFocus={true}
                            />}

                            {!isMultiselect && (
                                <>
                                    <RadioButton.Group
                                        onValueChange={(value: string) => {
                                            onChange(value)
                                            setShow(false)
                                        }}
                                        value={value as string}>
                                        {data.map((datum: OptionType) => (
                                            <RadioButton.Item
                                                key={datum.id}
                                                label={datum[optionLabel]}
                                                value={datum[optionValue].toString()}
                                                labelStyle={searchResultLabelStyle}
                                                color={checkedColor}
                                                uncheckedColor={uncheckedColor}
                                            />
                                        ))}
                                    </RadioButton.Group>
                                </>
                            )}

                            {isMultiselect && data.map((datum: OptionType) => (
                                <Checkbox
                                    key={datum.id}
                                    label={datum[optionLabel]}
                                    checked={value.includes(datum.id.toString())}
                                    setChecked={() => handleCheckboxChange(datum.id.toString())}
                                    labelStyle={searchResultLabelStyle}
                                    checkedColor={checkedColor}
                                    uncheckedColor={uncheckedColor}
                                />
                            ))}

                            {data.length === 0 && (
                                <View style={{alignItems: 'center', marginTop: 20}}>
                                    <Text style={searchResultLabelStyle}>{noResultFoundText}</Text>
                                </View>
                            )}
                        </Dialog.Content>
                    </ScrollView>
                </Dialog>
            </Portal>
        </>
    )
}

export default Select
