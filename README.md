# react-native-paper-form-components
[![NPM version](https://img.shields.io/npm/v/react-native-paper-form-components.svg?style=flat)](https://www.npmjs.com/package/react-native-paper-form-components) 
[![NPM downloads](https://img.shields.io/npm/dm/react-native-paper-form-components.svg?style=flat)](https://npmjs.org/package/react-native-paper-form-components) 

A set of highly customizable form components for React Native Paper

## Requirements
```bash
node ^20.13.1
```

## Installation
```bash
npm install react-native-paper-form-components
```
```bash
yarn add react-native-paper-form-components
```

## Usage

```tsx
import {Select, Button, Input, Checkbox, RadioButton} from 'react-native-paper-form-components'
```

## Props

### Select
| Property               | Type                 | Required | Description                                                  |
|------------------------|----------------------|----------|--------------------------------------------------------------|
| value                  | string \| string[]   | Yes      | The selected value(s).                                       |
| onChange               | function             | Yes      | Callback function to handle value change.                    |
| options                | OptionType[]         | Yes      | List of options to select from.                              |
| buttonBgColor          | string               | Yes      | Background color of the button.                              |
| label                  | string               | No       | Label for the select component.                              |
| optionLabel            | string               | No       | Key for the label in the options.                            |
| optionValue            | string               | No       | Key for the value in the options.                            |
| searchPlaceholder      | string               | No       | Placeholder text for the search bar.                         |
| modalBgColor           | string               | No       | Background color of the modal.                               |
| buttonLabel            | string               | No       | Label text for the button.                                   |
| placeholder            | string               | No       | Placeholder text for the select button.                      |
| labelStyle             | StyleProp<TextStyle> | No       | Style for the label.                                         |
| isSearchable           | boolean              | No       | Indicates if the options are searchable.                     |
| noResultFoundText      | string               | No       | Text to display when no search results are found.            |
| searchBarStyle         | StyleProp<TextStyle> | No       | Style for the search bar.                                    |
| searchBarInputStyle    | StyleProp<TextStyle> | No       | Style for the search bar input.                              |
| searchResultLabelStyle | StyleProp<TextStyle> | No       | Style for the search result labels.                          |
| modalStyle             | StyleProp<ViewStyle> | No       | Style for the modal.                                         |
| modalDismissable       | boolean              | No       | Indicates if the modal can be dismissed by clicking outside. |
| buttonIcon             | string               | No       | Icon for the button.                                         |
| buttonStyle            | ViewStyle            | No       | Style for the button.                                        |
| buttonLabelStyle       | StyleProp<TextStyle> | No       | Style for the button label.                                  |
| buttonHeight           | number               | No       | Height of the button.                                        |
| buttonMode             | ButtonMode           | No       | Mode of the button (contained, outlined, text).              |
| buttonIconColor        | string               | No       | Color of the button icon.                                    |
| buttonIconSize         | number               | No       | Size of the button icon.                                     |
| buttonIconPosition     | 'left' \| 'right'    | No       | Position of the button icon.                                 |
| buttonRounded          | number               | No       | Border radius of the button.                                 |
| isMultiselect          | boolean              | No       | Indicates if multiple options can be selected.               |
| checkedColor           | string               | No       | Color of the checkbox when checked.                          |
| uncheckedColor         | string               | No       | Color of the checkbox when unchecked.                        |
| disabled               | boolean              | No       | Indicates if the component is disabled.                      |

### Button
| Property       | Type                 | Required | Description                                        |
|----------------|----------------------|----------|----------------------------------------------------|
| label          | string               | Yes      | The label text for the button.                     |
| onPress        | function             | Yes      | Callback function to handle button press events.   |
| icon           | string               | No       | Icon to display in the button.                     |
| style          | ViewStyle            | No       | Style for the button container.                    |
| labelStyle     | StyleProp<TextStyle> | No       | Style for the button label text.                   |
| bgColor        | string               | Yes      | Background color of the button.                    |
| height         | number               | No       | Height of the button.                              |
| mode           | ButtonMode           | No       | Mode of the button (contained, outlined, text).    |
| iconColor      | string               | No       | Color of the button icon.                          |
| iconSize       | number               | No       | Size of the button icon.                           |
| iconPosition   | 'left' \| 'right'    | No       | Position of the button icon.                       |
| rounded        | number               | No       | Border radius of the button.                       |
| uppercase      | boolean              | No       | Indicates if the button label should be uppercase. |
| disabled       | boolean              | No       | Indicates if the button is disabled.               |

### Input
| Property         | Type                 | Required | Description                                       |
|------------------|----------------------|----------|---------------------------------------------------|
| label            | string               | Yes      | The label text for the input.                     |
| value            | string               | Yes      | The current value of the input.                   |
| placeholder      | string               | No       | Placeholder text for the input.                   |
| onChangeText     | function             | Yes      | Callback function to handle text changes.         |
| type             | InputType            | Yes      | Type of the input.                                |
| bgColor          | string               | No       | Background color of the input.                    |
| outlineColor     | string               | No       | Outline color of the input when in outlined mode. |
| style            | ViewStyle            | No       | Style for the input container.                    |
| contentStyle     | ViewStyle            | No       | Style for the content inside the input container. |
| outlineStyle     | ViewStyle            | No       | Style for the outline of the input.               |
| onLeftIconPress  | function             | No       | Callback function for pressing the left icon.     |
| onRightIconPress | function             | No       | Callback function for pressing the right icon.    |
| leftIcon         | string               | No       | Icon to display on the left side of the input.    |
| rightIcon        | string               | No       | Icon to display on the right side of the input.   |
| labelStyle       | StyleProp<TextStyle> | No       | Style for the input label.                        |
| rounded          | number               | No       | Border radius of the input.                       |
| height           | number               | No       | Height of the input.                              |
| mode             | 'flat' \| 'outlined' | No       | Mode of the input (flat or outlined).             |
| disabled         | boolean              | No       | Indicates if the inputff  is disabled.            |

### Checkbox
| Property       | Type                 | Required | Description                                                |
|----------------|----------------------|----------|------------------------------------------------------------|
| label          | string               | Yes      | The label text for the checkbox.                           |
| checked        | boolean              | Yes      | Indicates if the checkbox is checked.                      |
| setChecked     | function             | Yes      | Callback function to handle checkbox state change.         |
| checkedColor   | string               | No       | Color of the checkbox when checked.                        |
| uncheckedColor | string               | No       | Color of the checkbox when unchecked.                      |
| style          | ViewStyle            | No       | Style for the checkbox container.                          |
| labelStyle     | StyleProp<TextStyle> | No       | Style for the checkbox label text.                         |
| disabled       | boolean              | No       | Indicates if the checkbox is disabled.                     |
| mode           | 'android' \| 'ios'   | No       | Mode of the checkbox (specific styles for Android or iOS). |

### RadioButton
| Property               | Type                 | Required | Description                                      |
|------------------------|----------------------|----------|--------------------------------------------------|
| value                  | string               | Yes      | The selected value.                              |
| onChange               | function             | Yes      | Callback function to handle value change.        |
| options                | OptionType[]         | Yes      | List of options to select from.                  |
| optionLabel            | string               | No       | Key for the label in the options.                |
| optionValue            | string               | No       | Key for the value in the options.                |
| label                  | string               | No       | Label for the radio button group.                |
| checkedColor           | string               | No       | Color of the radio button when checked.          |
| uncheckedColor         | string               | No       | Color of the radio button when unchecked.        |
| style                  | ViewStyle            | No       | Style for the radio button container.            |
| labelStyle             | StyleProp<TextStyle> | No       | Style for the radio button group label.          |
| radioButtonLabelStyle  | StyleProp<TextStyle> | No       | Style for the radio button labels.               |
| disabled               | boolean              | No       | Indicates if the radio button group is disabled. |

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.
