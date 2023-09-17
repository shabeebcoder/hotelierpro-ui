import React, { ReactNode } from 'react';
import './styles.css';
interface Props {
    onFinish: any;
    formName: string;
    title: string;
    children?: ReactNode;
    handleCancel?: any;
}
declare const App: (props: Props) => React.JSX.Element;
export default App;
