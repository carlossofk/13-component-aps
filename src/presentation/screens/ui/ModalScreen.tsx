/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { Modal, Platform, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
import { ThemeContext } from '../../context/ThemeContext';

export const ModalScreen = () => {
    const [isVisible, setisVisible] = useState(false);
    const { isDark, colors } = useContext(ThemeContext);

    return (
        <CustomView margin>
            <Title text="Modal" safe />
            <Button
                text="Abrir Modal"
                onPress={() => setisVisible(true)}
            />

            <Modal
                visible={isVisible}
                animationType="slide"

            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: isDark ? `${colors.background}99` : colors.background,
                    }}
                >
                    <View style={{ paddingHorizontal: 10 }}>
                        <Title text="Modal Content" safe white={isDark} />
                    </View>
                    <View style={{ flex: 1 }} />
                    <Button
                        text="Cerrar Modal"
                        onPress={() => setisVisible(false)}
                        styles={{
                            height: Platform.OS === 'android' ? 40 : 60,
                            borderRadius: 0,
                        }}
                    />
                </View>
            </Modal>
        </CustomView>
    );
};
