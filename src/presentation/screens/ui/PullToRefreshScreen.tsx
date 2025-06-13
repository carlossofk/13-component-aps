import React, { useState } from 'react';
import { RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Title } from '../../components/ui/Title';
import { colors, globalStyles } from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { top } = useSafeAreaInsets();

    const onReresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 3000);
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    colors={[colors.primary, 'red', 'orange', 'green']}
                    onRefresh={onReresh}
                />
            }

            style={[globalStyles.mainContainer, globalStyles.globalMargin]}
        >
            <Title text="Pull to refresh" safe />
        </ScrollView>
    );
};
