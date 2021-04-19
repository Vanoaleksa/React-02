import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


const Dialogitem = (props) => {
    let path = '/dialogs/' + props.id;
    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>

    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



const Dialogs = (props) => {

    let dialogsData = [
        { id: '1', name: 'Lionel' },
        { id: '2', name: 'Suares' },
        { id: '3', name: 'Neymar' },
        { id: '4', name: 'Ronaldinho' },
        { id: '5', name: 'Ter Stegen' },
        { id: '6', name: 'Griezman' }
    ]


    let messagesData = [
        { id: '1', message: 'F*ck Real!' },
        { id: '2', message: 'We are champions!' },
        { id: '3', message: 'Do you smoke?' }
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialogitem name={dialogsData[0].name} id={dialogsData[0].id} />
                <Dialogitem name={dialogsData[1].name} id={dialogsData[1].id} />
                <Dialogitem name={dialogsData[2].name} id={dialogsData[2].id} />
            </div>
            <div className={s.messages}>
                <Message id={messagesData[0].id} message={messagesData[0].message} />
                <Message id={messagesData[1].id} message={messagesData[1].message} />
                <Message id={messagesData[2].id} message={messagesData[2].message} />
            </div>
        </div>
    );
}


export default Dialogs;