
import React, { FC } from 'react';

import IonIcon from '@react-native-vector-icons/ionicons';


interface Props extends React.ComponentProps<typeof IonIcon> { }

export const Icon: FC<Props> = (props) => {
    return (
        <IonIcon {...props} />
    );
};
