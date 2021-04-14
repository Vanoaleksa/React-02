import s from './Dialogs.module.css'

const Dialogs = (props) =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={s.dialog + ' ' + s.active}>
                    Lionel
                </div>
                <div className={s.dialog}>
                    Suares
                </div>
                <div className={s.dialog}>
                    Neymar
                </div>
                <div className={s.dialog}>
                    Ronaldinho
                </div>
                <div className={s.dialog}>
                    Ter Stegen
                </div>
                <div className={s.dialog}>
                    Grizman
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>F*ck Real!</div>
                <div className={s.message}>We are champions!</div>
                <div className={s.message}>Do you smoke?</div>
            </div>
        </div>
    );
}


export default Dialogs;