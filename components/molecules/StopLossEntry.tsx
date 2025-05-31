import React, { useState } from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { Input } from '@/components/ui/input';
import { TextInputComponent } from '@/components/atoms/TextInput';
import {getPipDifference} from '@/constants/utils';

const StopLossEntry = () => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const SL_RULES = [{pips: 40}, {pips: 50}, {pips: 60}];
    const entry = 1.2345;
    const pips = 0.0001
    const execution = 'buy';

    const stopLoss = SL_RULES.map((rule) => {
        const pips = rule.pips;
        const value = execution === 'buy' ? entry - (pips * 0.0001) : entry + (pips * 0.0001);
        return {value, pips};
    });

  
    
//TODO: show how much that will be earned or lost from the entered SL


    const handleChange = (text: string) => {
        setValue(text);
        setIsFocused(false);
    };

    const suggestedStopLoss =  stopLoss.map(({value, pips}, index) => (
        <Pressable
            key={index}
            onPress={() => {
                handleChange(value.toString());
            }}
        >
            <Box className='padding-3'>
                <Text>{value}, {pips} pips</Text>
            </Box>
        </Pressable>
    ));

    return (
        <Box className='padding-3 border border-background-300 rounded'>
            <Text className='text-lg'>Stop Loss</Text>
            <TextInputComponent
                placeholder="Enter Stop Loss"
                value={value}
                onChangeText={handleChange}
                onChange={(e) => handleChange(e.nativeEvent.text)}
                onFocus={(e) => setIsFocused(!isFocused)}
                inputMode='decimal'
                keyboardType='decimal-pad'
                aria-label="Stop Loss"
            />
            {(isFocused ) && (
                <Box className="mt-2 bg-white br-md shadow-2">
                    {suggestedStopLoss}
                </Box>
            )}
            { !!value.length && !isNaN(Number(value)) && (
                <Box className="mt-2">
                    <Text>Pips: {getPipDifference(entry, Number(value), pips)}</Text>
                </Box>
            )}
        </Box>
    );
};

export default StopLossEntry;