import React from 'react';
interface calanderProps {
    calanderColumns: any;
    calanderRows: any;
    handleActions: any;
    handleStatusChange: any;
}
declare function calander({ calanderColumns, calanderRows, handleActions, handleStatusChange }: calanderProps): React.JSX.Element;
export default calander;
