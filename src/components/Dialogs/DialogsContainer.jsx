import { connect } from 'react-redux'
import { compose } from 'redux'

import { sendMessage, } from '../../redux/dialogs-reducer.js'
import Dialogs from './Dialogs'










const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}




export default compose(
    connect(mapStateToProps,{
        sendMessage: sendMessage,
    }),
    
)(Dialogs)