import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { colors, family } from '../utils';
import appStyles from '../screens/appStyles';

const CustomText = ({
  text = '',
  size = 16,
  style = {},
  font = 'Montserrat_Regular',
  onPress = undefined,
  color,
  expandable = false,
  intialLength = 100,
  numberOfLines,
  textDecorationLine

}) => {
  const [textData, setTextData] = useState(text);

  useEffect(() => {
    if (expandable) {
      setTextData(`${text.slice(0, intialLength)}...`);
    } else {
      setTextData(text);
    }
  }, [text]);

  const toggleExpandable = () => {
    if (textData.length == text.length) {
      setTextData(`${text.slice(0, intialLength)}...`);
    } else {
      setTextData(text);
    }
  };

  const actionBtnLable = textData.length == text.length ? 'Show Less' : 'See more';
  return (
    <Text
      onPress={onPress ?? undefined}
      style={{
        fontSize: size,
        //color: color ?? colors.txt1,
        color: colors.black,
        fontFamily: family[font],
        textDecorationLine: textDecorationLine,
        ...style,
      }}
      numberOfLines={numberOfLines}
    >
      {textData}
      {expandable ? '  ' : ''}
      {expandable && (
        <Text
          onPress={toggleExpandable}
          style={{
            color: colors.black,
            textDecorationLine: 'underline',
            fontFamily: family[font],
          }}>
          {actionBtnLable}
        </Text>
      )}
    </Text>
  );
};

export default CustomText;
