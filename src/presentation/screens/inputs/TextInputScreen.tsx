/* eslint-disable react-native/no-inline-styles */
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Card } from '../../components/ui/Card';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const TextInputScreen = () => {
    const { isDark, colors } = useContext(ThemeContext);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'height' : undefined}>
            <ScrollView>
                <CustomView margin>
                    <Title text="Text Inputs" safe />

                    <Card>
                        <TextInput
                            style={[
                                globalStyles.input,
                                { color: colors.text },
                                isDark && { borderColor: colors.text },
                            ]}
                            placeholder="Nombre completo"
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            onChangeText={value => setForm({ ...form, name: value })}
                        />

                        <TextInput
                            style={[
                                globalStyles.input,
                                { color: colors.text },
                                isDark && { borderColor: colors.text },
                            ]}
                            placeholder="Correo electrónico"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={value => setForm({ ...form, email: value })}
                        />

                        <TextInput
                            style={[
                                globalStyles.input,
                                { color: colors.text },
                                isDark && { borderColor: colors.text },
                            ]}
                            placeholder="Teléfono"
                            keyboardType="phone-pad"
                            onChangeText={value => setForm({ ...form, phone: value })}
                        />
                    </Card>

                    <View style={{ height: 10 }} />

                    <Card>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                    </Card>

                    <View style={{ height: 20 }} />

                    <Card>
                        <TextInput
                            style={[
                                globalStyles.input,
                                { color: colors.text },
                                isDark && { borderColor: colors.text },
                            ]}
                            placeholder="Teléfono"
                            keyboardType="phone-pad"
                            onChangeText={value => setForm({ ...form, phone: value })}
                        />
                    </Card>
                </CustomView>

                <View style={{ height: 20 }} />

            </ScrollView>
        </KeyboardAvoidingView>
    );
};
